# Changelog

---

## 1.14（2026-07-08）

### 架构重构

**God Object 拆分（6 个文件 → 33 个文件）**
- `DatabaseManager.swift` 从 1754 行拆分为 8 个文件：模型(`LawModels`)、数字转换(`NumberConversion`)、法律查询(`LawQueries`)、搜索(`SearchQueries`)、RAG 查询(`RAGQueries`)、公报查询(`GongbaoQueries`)、异步包装(`DatabaseAsync`)、主文件 220 行
- `LegalExpertService.swift` 从 1956 行拆分为 10 个文件：中文数字(`ChineseNumerals`)、JSON 提取(`JSONExtractor`)、意图分类(`IntentClassifier`)、问题拆分(`QuestionDecomposer`)、专家路由(`ExpertRouter`)、法条检索(`ArticleRetriever`)、专家组综合(`GroupSynthesizer`)、协调器回答(`CoordinatorAnswer`)、引用提取(`CitationExtractor`)、案例检索(`CaseRetriever`)，主文件 1009 行（48% 缩减）
- `LegalChatView.swift` 从 1443 行拆分为 7 个视图文件
- `CasesView.swift` 从 824 行拆分为 4 个视图文件
- `ContentView.swift` 提取 `SettingsSheet` 到独立文件，从 614 行减至 382 行
- `SharedUtilities.swift` junk drawer 拆分为 4 个聚焦文件（键盘/案例源/正则/高亮）

**重复代码消除（10 处）**
- PDF 渲染、ShareSheet、FeatureListSection、搜索逻辑、CaseCitationCard、聊天历史 UI、Token 定价、source→显示名映射、SQL 投影 12 列、SQLITE_TRANSIENT 常量全部统一为共享实现

### 并发与线程安全

**DB 访问异步化**
- 新增 `DatabaseAsync.swift`，为 `nodes`/`lawMeta`/`searchByTitle`/`searchContent`/`ftsSearch`/`caseDocs`/`caseDoc` 提供 async 变体，主线程不再阻塞
- `LLMProvider` Token 计数改为同步返回值，消除 fire-and-forget Task

**Swift 6 并发严格检查**
- `DatabaseManager` 标记 `@unchecked Sendable`，共享实例及所有查询方法明确 `nonisolated`
- `ChatHistoryStore` 标注 `@MainActor`，修复 Notification callback 越 actor 访问
- 所有 file-level 常量移至独立文件以避免 `@MainActor` 反向推断
- 所有 SQLite 工具方法（`str`/`cleanStr`/`SQLITE_TRANSIENT`）显式 `nonisolated`

**修复**
- `UserStore` 中 12 个 `@AppStorage` 改为 `@Published` + UserDefaults，修复 `@EnvironmentObject` 观察不到变化的问题
- `ChatHistoryStore.PersistActor` 错误处理：`try?` → `do/catch` + `print`
- `LegalChatViewModel.startDotAnimation` 加 `guard dotTask == nil` 防止并发任务
- `UserStore.apiKeyConfigured` 改为懒加载，避免 init 中 Keychain 访问

### Bug 修复

- 修复 `ContentView.swift` 中重复 `.sheet(isPresented: $showPaywall)` 修饰符（活跃 Bug）
- 修复 `CaseDetailView` 中 `isHeading` 重复条件（`"【" || "【"` → `"【" && "】"`）
- 修复 `KeychainHelper` 迁移路径先 `save` 后无条件删除 legacy item，若 sync 失败导致密钥丢失（改为仅 save 成功时删除）
- 修复 `DatabaseManager.caseDocByTitle` 中 `(title as NSString).utf8String` use-after-free
- 修复 `AIServiceProxy.log` 中 6 处 `%{public}@` 泄露用户法律问题 PII（全部改为 `%{private}@`）
- 修复 `SFCProvider.streamChat` 假流式（委托 `AIServiceProxy.streamChat` 实现真实 SSE 流式）
- 修复 `LegalExpertService` 9 处 `try?` 静默吞错误（添加 `print` 诊断日志）
- 修复 `KeychainHelper.saveLocalData` 静默丢弃非 duplicate 错误（添加日志 + `@discardableResult`）
- 修复 scrollTo 两次跳转：删除 nearId→targetNodeId 两阶段滚动，改为单次 `proxy.scrollTo` + `withAnimation`

### 配置与管理

- 创建 `AgentLimits.plist` + `AgentLimits.swift` 加载器，集中管理 LLM prompt 数值限制（statuteArticlesPerLawMax、routingMaxExperts 等 7 项），修改 plist 即生效，无需改代码
- DB 预热：SplashView 期间 `Task.detached` 后台初始化 `DatabaseManager.shared`，避免主线程阻塞 250MB 数据库打开

### 性能优化

- `highlightedText` 添加 `NSCache` 缓存，按 `(text.count, query)` 复用高亮计算结果
- `FavoriteRow.task` 改用 `DatabaseManager.node(lawId:articleNum:)` 精准查询，替代拉取全部节点
- `LLMProviderRegistry.current`/`agentProvider` 缓存 resolved provider 实例，避免每次同步读 Keychain
- `CaseDetailView` 段落改为 `precomputeParagraphs` 纯函数预计算
- `DatabaseManager` 暴露 `dbLoadFailed` 状态，View 层可检查 DB 加载是否成功

### xcstrings 完整英文化

- 补全 29 个 FeatureListSection 新 key 的英文翻译
- 删除空 key 异常数据
- 302/302 key 全覆盖

### Bug 修复（后续）

**法条引用跳转修复**
- 修复首次跳转到其他法律时定位不准（加载覆盖层 `isLoadingNodes` 在 `scrollPosition` 设置后才移除，导致 LazyVStack 在覆盖层下无法布局，`proxy.scrollTo` 静默失败）
- 修复跨法律引用滚动时序：`nodes = loadedNodes` 后先移除加载覆盖层，再执行 `scrollPosition → delay → proxy.scrollTo` 三步滚动
- 修复 `.onChange(of: scrollToArticle)` 与 `.task(id:)` 的竞态条件（统一由 `.task` 处理滚动，`.onChange` 只处理高亮动画）

### 文档与配置（后续）

- `CLAUDE.md` 重写：删除过时的 SwiftData/ModelContainer 描述，更新为 SQLite via `DatabaseManager` + 扩展文件架构
- `AppColors.plist` 缺失时 fallback 从全 `orange` 改为角色独立颜色（folder/orange, tag/purple, refs/blue/green）
- `formatTokens` 移出 `AppColors.swift` → 新建 `Formatting.swift`
- `LegalDocumentsView` 隐私政策委托 `SettingsDocumentView` 结构化展示，消除两套文档系统
- `persistBackStack` 中 `"favorites"` → `"settings"` 字符串修正
- 三个互斥 Bool 合并为 `@State caseNavOrigin: Tab?` 枚举

### 工程配置

- `AgentLimits.plist` + `AgentLimits.swift` 加载器，集中管理 LLM prompt 数值
- DB 预热：SplashView 期间 `Task.detached` 后台初始化 `DatabaseManager.shared`
- 修复 Swift 6 `nonisolated`/`@MainActor` 推断循环（file-level let→`nonisolated(unsafe)` warning→无法引用），最终使用 `nonisolated static func create()` 工厂方法切断推断链

---

### 新功能

**国际化（i18n）支持**
- 所有 UI 字符串（设置、搜索、收藏、对话等）新增完整英文翻译
- 系统语言为英文时，App 界面自动切换为英文
- 使用 Apple 标准 `.xcstrings` 格式，本地化资源随主程序分发，无需联网

**双语对照显示**
- 设置中「显示语言」改为开关：系统中文时显示「显示英文对照」，系统英文时显示「显示中文对照」
- 开关打开后，法条正文下方以 subheadline 样式显示对照翻译
- 开关关闭时仅显示主语言（中文或英文），与之前行为一致
- 搜索同时匹配中英文，任一语言命中即显示

**英文法条引用跳转**
- 英文法条中的「Article X」现在可点击跳转到被引用的法条
- 自动匹配常用引用格式：「Article X of the Law」「Law Article X」等
- 同时识别并列引用如「Article 29 or Article 30 of the Criminal Procedure Law」

### 修复

**返回导航滚动位置**
- 修复 NavigationStack 返回上一页后，列表自动滚动到顶部的问题
- 现在返回后保持在阅读位置，与系统原生行为一致

### 内容更新

**英文翻译 T0-T3 全部入库**
- 新增 197 部核心法律 / 司法解释的英文条文翻译（17,870 条）
- 涵盖：宪法（T0）、引用最多法律（T1）、重要法律（T2）、常用法律（T3）
- 所有收录法律均达到「中文 + 英文」双语展示
- 英文数据直接写入本地数据库，无需联网

### 新功能（后续更新）

**SCF 云函数 + 自定义 API Key**
- 新增腾讯云函数（SCF）代理，Pro 用户可在不配置 API Key 的情况下使用 DeepSeek
- 设置中新增「AI 设置」页面：支持 DeepSeek/Groq/Gemini 三种提供商
- 可填入自有 API Key，优先走本地调用，不受订阅次数限制
- 未配置 Key 的 Pro 用户自动走 SCF 云函数（服务端验证订阅）
- 配套 SCF 函数 `tencent-cloud/laws-ai-service/app.py`，需自行部署

**法条跳转修复**
- 替换 `proxy.scrollTo` 为 iOS 17 原生 `.scrollPosition(id:)` API，解决双语模式下 LazyVStack 定位不准
- 修复 NavigationStack path 变化导致旧页面重建、列表回顶的问题
- 侧边索引栏跳转也改用 `scrollPosition` 绑定，与主逻辑一致

**原生 TabView 底部导航栏**
- 替换自定义 HStack 标签栏为 SwiftUI 原生 `TabView`（法律浏览/指导案例/法律咨询/设置）
- 移除 `TabSwipeContainer` 及自定义手势代码，简化导航逻辑
- 收藏移入设置页「内容管理」下，不再独立占一个 Tab

**国际化修复**
- Tab 栏按钮「法律浏览」「指导案例」「法律咨询」「收藏」改为 `LocalizedStringKey`，跟随系统语言切换
- 思考步骤名称（拆分问题、领域路由等 11 项）新增本地化映射，英文系统显示英文
- 补充缺失的 xcstrings 条目（思考步骤名 + 输入框占位符）

### UI 现代化
- 移除 `EdgePanGestureView.swift`（TabSwipeContainer 已删除，不再引用）
- PaywallView: WKWebView 替换为 SwiftUI `Link`
- UIKit 颜色统一替换为 SwiftUI Material（`.regularMaterial` / `.ultraThinMaterial`）
- 涉及文件：CasesView、FavoritesView、LawDetailView、SettingsDocumentView

### 后续优化
- `SFCProvider.streamChat` 改为一次性交付（移除 20ms 模拟流式延迟）
- `LegalChatView` 100ms 布局等待替换为 `DispatchQueue.main.async`
- 思考步骤展开内容改用 `LazyVStack` + `.transition(.opacity)` + 弹簧动画，减少卡顿
- 法条跳转增加二次定位 + 平滑动画，修复 LazyVStack 千条以上定位跳动
- 设置页 NavigationLink 蓝色文字改为黑色

### 修复
- 司法文件、法律定性、问题模式描述等缺失的 xcstrings 翻译条目
- 法律咨询占位符输入框 i18n（请→输入您的…）
- Tab 图标：book.pages → doc.text（扁平化），bubble.left.and.bubble.right → ellipsis.bubble（减轻）
- 设置页 Done 按钮移除（Settings 改为 Tab 后无需关闭按钮）
- 收藏移入设置页「内容管理」下，不再独立占 Tab

---

## 1.12（2026-07-05）

### 重构

**"高院公报"改为"指导案例"**
- 底部 Tab "高院公报"更名为"指导案例"，包含四个子标签：指导案例 / 司法文件 / 裁判文书 / 司法解释
- CasesView / CaseDetailView 替换原有的 GazetteView / GazetteDetailView
- 法条详情页的关联案例同步更新为 CaseDocLink

**跨 Tab 返回手势**
- 从对话 / 浏览 / 收藏跳转到指导案例后，支持右滑返回来源 Tab
- 新增 TabSwipeContainer 统一管理跨 Tab 手势与动画

### 修复

**数据库兼容**
- 修复 DB 缺少 `case_brief` 列导致所有 gongbao_docs 查询返回空的问题
- 修复 DB 缺少 `case_num_int` 列导致 指导案例 tab 无法加载的问题
- 修复 司法解释 tab 因 `source='gongbao'` 过滤条件无匹配数据而一直为空的问题

---

## 1.11（2026-06-05）

### 改进

**订阅页改用原生 StoreKit 视图**
- 订阅页面（PaywallView）从自定义 UI 切换到 Apple 原生 `SubscriptionStoreView`
- 订阅选项、购买流程、恢复购买均由 StoreKit 自动处理
- 营销内容改为卡片式功能分组展示（法律顾问 / 高院公报 / 对话历史）
- 订阅 footer 原生显示隐私政策与 EULA 链接

**设置页新增「帮助与关于」**
- 新增隐私说明、使用说明原生详情页（卡片式布局，内容针对律疏功能适配）
- 新增「支持页面」按钮，在 Safari 中打开在线帮助文档
- 设置页组织为完整 Section 结构

**GitHub Pages 上线**
- 新增营销页、支持与帮助、隐私政策三个 HTML 页面
- 托管于 `https://13098806890.github.io/ChineseLawsSearch/appstore/`
- 订阅页隐私链接与设置页支持按钮均指向对应页面

### 新增文件
- `SettingsFeatureSection.swift` — 可复用功能卡片数据模型
- `SettingsDocumentView.swift` — 原生文档详情渲染视图（隐私说明 / 使用说明）
- `StoreKitConfig.storekit` — StoreKit 本地测试配置文件
- `docs/appstore/` — GitHub Pages 页面（index / support / privacy）
- `docs/.nojekyll`

---

## 1.10（2026-05-24）

### 修复

**发布稳定性**
- 修复发布包中内置 SQLite 数据库以 WAL 模式只读打开时，法律目录点击后无法进入详情的问题
- 内置数据库改用 `mode=ro&immutable=1` 方式读取，适配 App Bundle 只读资源环境
- 排除 SQLite `db-wal` / `db-shm` 副产物进入 App Bundle，降低 App Store 分发后的数据库读取风险
- 增加目录法律 ID 查找失败日志，便于定位菜单与数据库不一致问题

**法条跳转**
- 修复从搜索结果跳转到条文时无法定位到目标条文的问题（改用 `ScrollViewReader` + `proxy.scrollTo()` 代替声明式 `scrollPosition`）
- 修复同一部法律多次 push 后，返回上一页时页面出现滚动重影的问题（`.onDisappear` 预先激活 loading 遮罩，`.onAppear` 在遮罩下恢复滚动位置）
- 修复搜索结果点击后无法跳转的问题（键盘收起与导航冲突，改用 `PendingNav` + 延迟 50ms 导航）
- 修复搜索结果连续点击同一条目不触发跳转的问题（`PendingNav` 包含 `UUID`，每次点击视为新值）

**多轮对话上下文**
- 修复在同一对话中继续提问时，新问题未结合之前案情分析的问题（`runPipelineWithMode` 和 `analyzeWithExpertMode` 现在注入历史对话作为 `factContext`）

**对话历史稳定性**
- 修复 App 升级后对话历史被整体清空的问题（根因：`ChatSession` 使用编译器合成的 Decoder，新增字段时抛 `keyNotFound` 导致整个 history 文件被移入备份；改为自定义 `init(from decoder:)`，所有新字段均有安全默认值）
- 修复高频快速保存时旧快照覆盖新快照导致最近一条消息丢失的问题（重构 `PersistActor` 写入逻辑，多次快速保存只写入最新快照）
- 修复 iCloud 同步时仅对比 session ID、忽略更新时间，导致内容变更不触发刷新的问题

**意图分类与上下文**
- 修复 off-topic 回复被写入 `conversationHistory`，污染后续对话意图分类的问题
- 修复 LLM 服务故障时追问被错误降级为 `.followUp`（使用过期专家上下文），改为始终回退 `.legalQuery`
- 修复切换对话时，旧对话的回答结果被追加到新对话 `conversationHistory` 的问题
- 修复请求报错后 `conversationHistory.removeAll()` 清空所有历史，改为仅移除本轮失败的 turn

**AI 回答质量**
- Coordinator 现在接收最近 2 轮对话历史作为上下文，多轮咨询时回答更连贯
- 修复含 emoji 或特殊字符的回答在提取法条引用时崩溃的问题（NSRange 越界）

**quota 计费准确性**
- 修复 off-topic 回复（无 LLM 调用）仍消耗 quota 的问题
- 修复请求中途失败后 token 计数虚高的问题（错误路径现在重置当轮 token 统计）
- 修复 StoreKit 未就绪时的兜底放行路径未设置 `lastConsumedPath`，导致 `refundIfNeeded()` 无效的问题

**新对话隔离**
- 新建对话始终重置完整上下文（`conversationHistory`、`pendingFacts`、`lastSelectedExperts`、token 计数），与前一个对话完全隔离

**购买恢复**
- 修复「恢复购买」失败时静默吞掉错误、用户无任何反馈的问题；现在网络错误等情况会弹出具体错误信息

**编译与资源清理**
- 修复 7 处 Swift 编译器警告（actor 隔离、`nonisolated`、未使用变量）
- 清理未使用的 token 本地化字符串条目

---

## 1.08（2026-05-21）

### 修复

**键盘与搜索框交互修复**
- 修复法律浏览页面点击菜单时键盘不消失、搜索框右侧 X 按钮不消失的问题（根因：SwiftUI `dismissSearch` 环境值只注入子视图，无法在持有 `.searchable()` 的视图自身调用；将列表内容拆分为独立子视图后修复）
- 修复法律详情页点击空白区域不关闭搜索栏的问题
- 新增全局键盘收起手势，覆盖所有 Tab，切换 Tab 或点击空白区域均自动收起键盘

**指导案例排序修复**
- 修复指导案例列表排序不正确的问题；现在按案例号降序排列（最新编号在前）

### 其他

**订阅状态显示修复**（补充自 1.07）
- 修复订阅成功后，设置页、咨询页仍显示"免费剩余次数"而非"已订阅"的问题
- 修复订阅用户点击高院公报详情仍弹出付费墙的问题
- 修复订阅后仍优先消耗免费次数的问题；订阅激活后优先消耗订阅配额，免费次数冻结保留

**历史记录修复**（补充自 1.07）
- 修复历史记录列表打开时频繁闪跳的问题；iCloud debounce 延长至 2 秒，仅在内容变化时刷新

**订阅文案更新**
- "每月 1 日重置"统一改为"续订后自动重置"，准确反映实际扣费周期

---

## 1.07（2026-05-19）

### 改进

**AI 咨询响应速度提升**
- 合并两次重叠的 LLM 检索词生成调用：定性路由阶段已生成的法律检索词现在直接传递给公报案例检索，不再单独发起一次扩词调用
- 移除四个无调用者的冗余函数（`retrieveForExpert`、`expandKeywordsForExpert`、`queryExpertCaseTerms`、`queryNeedFullText`），每次案例分析减少约 1–2 次 API 调用
- 修复分享文字后切换 App 再返回导致界面无法点击的问题（UIActivityViewController 与 SwiftUI sheet 状态不同步）

**法条链接修复**
- 修复回答正文中引用《九民纪要》等文件时，用阿拉伯数字（"第5条"）的条文无法生成跳转链接的问题；现在阿拉伯数字与汉字数字格式均可正确识别
- 修复回答中引用法律名称时，因 LLM 省略中间词（如"劳动争议案件适用"→"劳动争议适用"）或使用半角括号导致标题匹配失败、无法生成跳转链接的问题；现在采用二字窗口 AND 匹配，容错性大幅提升

**iCloud 同步修复**
- 修复收藏条文、收藏公报、公报笔记在另一台设备修改后，当前设备需要重启才能看到更新的问题；现在通过监听 `NSUbiquitousKeyValueStoreDidChangeExternallyNotification` 实时刷新，多设备改动即时生效

**专家路由修复**
- 修复刑事实体法问题（罪名认定/构成要件/量刑）被错误路由到刑事诉讼专家或民事交通事故专家的问题；现在交通肇事罪/危险驾驶罪等问题正确路由到人身伤害专家（持有刑法检索权限）
- 刑事诉讼专家明确限定为程序性问题（管辖/侦查/起诉/辩护/羁押），不再用于罪名认定

**劳动关系认定增强**
- 新增《关于确立劳动关系有关事项的通知》（劳社部发〔2005〕12号）到数据库，涵盖事实劳动关系认定三要件及发包方用工主体责任规则
- 劳动合同专家明确要求对外卖骑手、平台用工、外包等新型用工场景逐条套用通知三要件进行分析，不再以"无法判断"回避认定结论

---

## 1.06（2026-05-18）

### 改进

**专家分析逻辑重构**
- 移除"先追问再分析"机制：专家现在直接基于已知事实进行分析，缺失信息用条件式表述（"若…则…"），分析完成后仅在有一个关键信息会显著影响结论时，才在回答末尾简短追问一句
- 过去需要用户先回答多轮问题才能获得分析，现在提问后立刻得到实质性法律意见

**逐条演绎分析（新）**
- 专家对每条相关法条做三步推理：引用条款核心规定 → 对照用户案情是否满足构成要件 → 得出该条款下的具体结论
- 严格禁止"先写综合结论、再堆积法条"的模式，分析从法条出发，结论有据可查

**动态法条检索（新）**
- 每位专家在原有的静态章节 hint 之外，通过 LLM 动态生成 3–8 个法律专业检索词，对全库（跨法律领域）做二次 FTS 搜索，提升跨域相关法条的召回率
- 扩词与专家任务并行执行，不增加总体响应时间

**其他修复**
- 修复发送失败的对话被写入聊天历史记录的问题
- 修复内置 API Key 配置时显示"Key 未配置"错误的问题

---

## 1.05（2026-05-15）

### 改进

**公报案例引用质量大幅提升**
- 回答末尾新增 `【参考案例】` 段落：由综合协调 LLM 从候选案例中自主判断引用价值，每条案例附一句话说明该案确立的裁判规则及与本问题的具体关联，不再展示无关案例
- 取消独立的 LLM 预筛选步骤，改由生成回答的 LLM 统一决定引用哪些案例，减少一次 API 调用的同时提升判断准确性
- 下方公报卡片与答案正文中实际引用的案例完全同步，卡片"引用说明"直接取自答案正文的说明语句
- 修复候选列表存在同名案例时的 crash（`Dictionary(uniqueKeysWithValues:)` 重复键崩溃）

**公报案例检索范围优化**
- coordinator 阶段改用 LLM 扩词检索公报案例，解决口语化问题（整句无内部标点）导致关键词提取失败、检索为空的问题

**对话管理**
- 新增分析中止确认弹窗：分析进行中切换对话时，弹出"继续等待 / 中止并切换"确认框，防止误操作中断未完成的分析
- 切换对话时立即保存当前会话，新建对话在历史列表中即时可见

**历史记录**
- 历史列表每条记录新增 token 用量与费用估算（¥）显示

---

## 1.03（2026-05-13）

### 新功能

**公报案例深度集成**
- 法条详情页新增关联公报案例链接，点击直接跳转对应文书，无需手动搜索
- 法律顾问回答结束后自动检索相关公报案例，以可折叠卡片形式展示于回答末尾
- 点击公报卡片进入文书详情，顶部显示"返回对话"按钮，一键回到咨询界面

**公报案例笔记**
- 在文书详情页点击笔记按钮，可为任意案例添加个人标注
- 笔记内容参与 AI 咨询时的相关案例检索，辅助推荐您标注过的同类案例
- 笔记数据通过 iCloud KV 多设备同步

**公报收藏**
- 文书详情页新增星标收藏按钮
- 收藏的公报案例在底部"收藏"栏独立标签展示，iCloud 同步

### 改进

**界面优化**
- 对话历史记录修复：公报案例引用现在正确保存并在重新打开历史时还原展示
- 公报案例折叠/展开操作与引用法条保持一致的交互逻辑
- 从法条跳转到公报时显示"返回法条"按钮；从对话跳转时显示"返回对话"按钮
- 法条下方公报链接颜色与法条引用颜色统一，主题色可在设置中自定义
- 设置页面底部新增版本信息显示

**代码质量与稳定性**
- 修复公报引用事件与历史保存之间的竞态条件，解决历史记录中引用丢失的问题（根因：`onEvent` 回调异步调度导致 `autoSave` 早于数据写入）
- `PurchaseManager.refundIfNeeded()` 重构：使用明确的消耗路径标记替代推断逻辑，避免误退还历史次数
- `LegalExpertService.gongbaoNotes` 加 `@MainActor` 标注，消除并发读写风险
- `ChatHistoryStore.fileURL` 改为在后台线程懒解析，不再阻塞主线程启动
- Paywall 弹出逻辑改为 `onChange(of: isActive)` 触发，避免切换 Tab 时重复弹出
- 删除 `ChatMode.CaseIterable` 无用遵循及 `historyRow(_:)` 死代码
- `GongbaoDocRow.cleanTitle` 冗余双重替换逻辑简化

---

## 1.02（历史版本）

- 全文搜索关键词高亮
- 对话气泡长按复制
- 对话导出（Markdown / PDF）
- 字号调节
- 条文收藏（书签）+ iCloud 同步
- DeepSeek API Key Keychain 存储与验证
- 免费 5 次体验 + StoreKit 2 内购（畅用版月/年订阅、基础版买断）

---

## 1.01（历史版本）

- 法律顾问 AI 对话核心功能
- 多专家协作分析系统（17 个细分领域专家）
- 意图识别自动路由（案情分析 / 法律咨询 / 法条检索）
- 对话历史持久化与跨 session 恢复
- 人民法院公报浏览与搜索

---

## 1.0（历史版本）

- 法律法规分类浏览（约 1,945 部）
- FTS5 全文搜索
- 编 / 章 / 节 / 条 层级导航
- 底部 Tab 导航（法律 / 咨询 / 公报 / 收藏）
