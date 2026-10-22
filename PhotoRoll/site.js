const pages = {
  en: {
    privacy: { eyebrow: "Privacy", title: "Privacy Policy", intro: "PhotoRoll helps you review and organize your photo library. Photo and video analysis, review progress, and organization history are processed on your device. PhotoRoll does not upload photo or video content to its own servers.", updated: "Last updated: October 22, 2026", sections: [
      ["Information and media", "PhotoRoll does not require an account. Your photo and video library is accessed only after you grant permission and use a feature that needs it. Photo selection, similarity analysis, and organization history are processed locally. PhotoRoll does not upload photo or video content to its servers."],
      ["Location information", "When you review photos with location metadata or use place suggestions, Apple’s geocoding services may receive coordinates from the current photo and nearby photos to provide place names. Photo and video image content is not sent to those services."],
      ["iCloud Photos", "If you allow PhotoRoll to download originals, the Photos system library may download the original photo or video from iCloud over the network. This may use network or cellular data. You can turn this option off in PhotoRoll settings."],
      ["Daily free preview count", "PhotoRoll stores the date and number of free previews used on this device. When iCloud is available, it syncs these counts and a randomly generated installation identifier through Apple’s iCloud Key-Value Store to combine usage across your devices. It does not sync photo identifiers or photo content. Expired daily counts are removed."],
      ["Place lookup diagnostics", "To troubleshoot unsuccessful place lookups, PhotoRoll may save a diagnostic text file on your device containing the lookup provider, outcome, and error details. The current diagnostic file does not include photo coordinates or successfully resolved place names and is not uploaded to PhotoRoll."],
      ["Local data and deletion", "Review progress, preferences, and organization history are stored on your device and are not synced by PhotoRoll to other devices. Daily free preview counts are the exception described above. Deleting the app may remove data stored only on the device. Photos placed in the pending deletion area remain in your Photos library until you confirm deletion through the system Photos flow."],
      ["Changes and contact", "This policy may be updated if the app’s features or data handling change. For privacy questions, contact us at <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
    ] },
    support: { eyebrow: "Support", title: "Get help with PhotoRoll", intro: "Answers to common questions about photo access, iCloud downloads, and organizing photos.", faqTitle: "Frequently asked questions", contactTitle: "Contact", contactText: "For help or to report a problem, email us. Please describe what happened and include your device model and iOS version. Do not attach private photos unless they are needed and you are comfortable sharing them.", faqs: [
      ["Why are some photos missing?", "Check PhotoRoll’s Photos permission in iOS Settings. If you granted limited access, use Photo Access in PhotoRoll settings to add more photos."],
      ["Why won’t an iCloud photo preview?", "Check your network connection and whether iCloud Download is enabled in PhotoRoll settings. Downloading a large original may take time and use cellular data."],
      ["Are photos deleted as soon as I mark them?", "No. Photos marked for deletion stay in your Photos library in the pending deletion area until you review them and confirm deletion. The system Photos app handles the deletion."],
      ["How do I manage or restore a purchase?", "Restore purchases from the PhotoRoll Pro purchase screen. Manage or cancel a subscription in your Apple Account subscription settings. The current price and subscription period are shown in the Apple purchase sheet."],
      ["Why can a place name be wrong?", "PhotoRoll asks Apple’s geocoding service to match coordinates from the current and nearby photos with place names. A result may be approximate or unavailable. Check the photo’s location in the Photos app if the suggestion looks incorrect."],
      ["Why is the estimated space different from the space freed?", "Photo sizes and iCloud downloads can be estimates. The actual space available may differ and can take time to update in iOS."]
    ] },
    terms: { eyebrow: "Terms", title: "Terms of Use", intro: "By using PhotoRoll, you agree to these terms. If you do not agree, do not use the app.", updated: "Last updated: October 22, 2026", sections: [
      ["Using PhotoRoll", "PhotoRoll provides tools to browse, compare, filter, and organize photos. You must have the right to access and manage the media you use with the app, and you are responsible for your choices and the content in your library."],
      ["Estimates and suggestions", "Similarity groups, analysis results, file sizes, and estimated storage savings are provided as guidance and may be incomplete or inaccurate. Review items and rely on the system Photos library for the final status."],
      ["Deletion requires your confirmation", "Items marked for deletion remain in your library until you review them and confirm deletion. After confirmation, recovery depends on the system Photos library and its Recently Deleted state. Keep backups of content you want to preserve."],
      ["Third-party services", "PhotoRoll may work with Apple Photos, iCloud, and Apple geocoding services. These services are provided by Apple and are subject to Apple’s applicable terms and privacy practices. Network charges are determined by your provider."],
      ["Subscriptions and one-time purchase", "PhotoRoll Pro is available through weekly, monthly, and annual auto-renewable subscriptions, or a one-time lifetime purchase where offered. The purchase sheet shows the applicable price, billing period, and benefits before purchase; prices may vary by storefront. Subscription billing, renewal, cancellation, and refunds are handled through Apple and its applicable terms. You can manage or cancel a subscription in your Apple Account subscription settings and restore eligible purchases in PhotoRoll. The lifetime purchase does not renew."],
      ["Availability and changes", "Features may change as PhotoRoll is updated. To the extent permitted by applicable law, PhotoRoll is provided without guarantees that every analysis or estimate will be error-free. These terms do not limit rights that cannot be limited under applicable law."],
      ["Contact", "Questions about these terms? Email <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
    ] }
  },
  "zh-Hans": {
    privacy: { eyebrow: "隐私", title: "隐私政策", intro: "PhotoRoll 帮助你检查和整理照片图库。照片与视频分析、浏览进度和整理记录均在你的设备上处理。PhotoRoll 不会将照片或视频内容上传到自己的服务器。", updated: "最后更新：2026 年 10 月 22 日", sections: [
      ["信息与媒体", "PhotoRoll 不要求创建账号。只有在你授权并使用需要图库权限的功能时，App 才会访问照片和视频。照片筛选、相似度分析和整理记录均在本机处理。PhotoRoll 不会将照片或视频内容上传到自己的服务器。"],
      ["位置信息", "浏览带有位置元数据的照片或使用地点建议时，Apple 地理编码服务可能会收到当前照片及附近照片的坐标，以查询地点名称。照片或视频图像内容不会发送给这些服务。"],
      ["iCloud 照片", "如果你允许 PhotoRoll 下载原片，系统照片图库可能通过网络从 iCloud 下载照片或视频原件。这可能使用网络或蜂窝数据。你可以在 PhotoRoll 设置中关闭此选项。"],
      ["每日免费预览次数", "PhotoRoll 会在本机保存当天已使用的免费预览日期和次数。iCloud 可用时，应用会通过 Apple iCloud Key-Value Store 同步这些次数和随机生成的安装标识符，以合并你各设备的使用次数。不会同步照片标识符或照片内容。过期的每日次数会被移除。"],
      ["地点查询诊断信息", "为排查地点查询失败，PhotoRoll 可能会在你的设备上保存诊断文本，内容包括查询服务、结果状态和错误详情。当前诊断文件不包含照片坐标或成功解析出的地点名称，也不会上传到 PhotoRoll。"],
      ["本机数据与删除", "浏览进度、偏好设置和整理记录保存在你的设备上，PhotoRoll 不会将这些数据同步到其他设备；每日免费预览次数是上文所述的例外。删除 App 可能会移除仅保存在本机的数据。放入待删除区域的照片会继续保留在照片图库中，直到你通过系统照片删除流程确认删除。"],
      ["政策更新与联系", "如果 App 功能或数据处理方式发生变化，我们可能会更新本政策。如有隐私问题，请发送邮件至 <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>。"]
    ] },
    support: { eyebrow: "支持", title: "PhotoRoll 使用帮助", intro: "查看有关照片访问、iCloud 下载和整理照片的常见问题。", faqTitle: "常见问题", contactTitle: "联系我们", contactText: "如需帮助或反馈问题，请发送邮件说明遇到的情况，并提供设备型号和 iOS 版本。请勿附上私人照片，除非确有需要且你愿意分享。", faqs: [
      ["为什么有些照片没有显示？", "请在 iOS 设置中检查 PhotoRoll 的照片访问权限。如果你授予的是有限访问权限，可以在 PhotoRoll 设置里的“照片权限”中添加更多照片。"],
      ["为什么 iCloud 照片无法预览？", "请检查网络连接，并确认 PhotoRoll 设置中的“iCloud 下载”已开启。下载较大的原片可能需要一些时间，也可能使用蜂窝数据。"],
      ["标记照片后会立即删除吗？", "不会。标记待删除的照片会继续保留在照片图库中，直到你在待删除区域检查并确认删除。最终删除由系统照片图库处理。"],
      ["为什么预估空间和实际释放空间不同？", "照片大小和 iCloud 下载情况可能只能估算。实际可用空间可能不同，iOS 更新空间显示也可能需要一些时间。"],
      ["如何管理或恢复购买？", "你可以在 PhotoRoll Pro 购买页面恢复符合条件的购买项目。请在 Apple 账户的订阅设置中管理或取消订阅。适用价格和订阅周期会在 Apple 购买确认页面显示。"],
      ["为什么地点名称可能不准确？", "PhotoRoll 会请 Apple 地理编码服务将当前照片及附近照片的坐标匹配为地点名称。结果可能是近似地点，也可能无法查询。如果建议看起来不正确，请在系统照片图库中检查照片位置。"]
    ] },
    terms: { eyebrow: "条款", title: "使用条款", intro: "使用 PhotoRoll 即表示你同意以下条款。如果你不同意，请不要使用本 App。", updated: "最后更新：2026 年 10 月 22 日", sections: [
      ["使用 PhotoRoll", "PhotoRoll 提供浏览、比较、筛选和整理照片的工具。你必须拥有访问和管理所用媒体的权利，并对自己的操作选择及图库内容负责。"],
      ["估算与建议", "相似照片分组、分析结果、文件大小和预估节省空间仅供参考，可能不完整或存在误差。请检查相关项目，并以系统照片图库显示的最终状态为准。"],
      ["删除需要你确认", "标记待删除的项目会继续留在图库中，直到你检查并确认删除。确认后能否恢复，取决于系统照片图库及其“最近删除”状态。请为需要保留的内容另行备份。"],
      ["第三方服务", "PhotoRoll 可能会使用 Apple 照片、iCloud 和 Apple 地理编码服务。这些服务由 Apple 提供，并受 Apple 适用的条款和隐私做法约束。网络费用由你的服务提供方决定。"],
      ["订阅与一次性购买", "PhotoRoll Pro 提供周、月、年自动续订订阅，以及在提供的地区可用的一次性永久买断。购买页面会在付款前显示适用价格、计费周期和权益；价格可能因 App Store 地区而异。订阅扣款、续订、取消和退款由 Apple 按其适用条款处理。你可以在 Apple 账户的订阅设置中管理或取消订阅，并在 PhotoRoll 中恢复符合条件的购买项目。永久买断不会续订。"],
      ["功能变更与责任", "PhotoRoll 更新时，功能可能发生变化。在适用法律允许的范围内，PhotoRoll 按现状提供，不保证每项分析或估算都没有误差。本条款不限制适用法律规定不得限制的权利。"],
      ["联系", "如有条款相关问题，请发送邮件至 <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>。"]
    ] }
  }
};

pages["zh-Hant"] = {
  privacy: { eyebrow: "隱私", title: "隱私權政策", intro: "PhotoRoll 協助你檢查和整理照片圖庫。照片與影片分析、瀏覽進度和整理記錄都會在你的裝置上處理。PhotoRoll 不會將照片或影片內容上傳至自己的伺服器。", updated: "最後更新：2026 年 10 月 22 日", sections: [
    ["資訊與媒體", "PhotoRoll 不要求建立帳號。只有在你授權並使用需要圖庫權限的功能時，App 才會存取照片和影片。照片篩選、相似度分析和整理記錄都會在本機處理。PhotoRoll 不會將照片或影片內容上傳至自己的伺服器。"],
    ["位置資訊", "瀏覽含有位置中繼資料的照片或使用地點建議時，Apple 地理編碼服務可能會收到目前照片及附近照片的座標，以查詢地點名稱。照片或影片影像內容不會傳送至這些服務。"],
    ["iCloud 照片", "如果你允許 PhotoRoll 下載原始檔，系統照片圖庫可能透過網路從 iCloud 下載照片或影片原始檔。這可能使用網路或行動數據。你可以在 PhotoRoll 設定中關閉此選項。"],
      ["每日免費預覽次數", "PhotoRoll 會在本機保存當天已使用的免費預覽日期和次數。iCloud 可用時，App 會透過 Apple iCloud Key-Value Store 同步這些次數和隨機產生的安裝識別碼，以合併你各裝置的使用次數。不會同步照片識別碼或照片內容。過期的每日次數會被移除。"],
      ["地點查詢診斷資訊", "為排查地點查詢失敗，PhotoRoll 可能會在你的裝置上保存診斷文字，內容包括查詢服務、結果狀態和錯誤詳細資料。目前的診斷檔案不包含照片座標或成功解析出的地點名稱，也不會上傳至 PhotoRoll。"],
    ["本機資料與刪除", "瀏覽進度、偏好設定和整理記錄會儲存在你的裝置上，PhotoRoll 不會將這些資料同步至其他裝置；每日免費預覽次數是上文所述的例外。刪除 App 可能會移除僅儲存在本機的資料。放入待刪除區域的照片會繼續保留在照片圖庫中，直到你透過系統照片刪除流程確認刪除。"],
    ["政策更新與聯絡", "如果 App 功能或資料處理方式有所變更，我們可能會更新本政策。如有隱私問題，請寄送電子郵件至 <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>。"]
  ] },
  support: { eyebrow: "支援", title: "PhotoRoll 使用說明", intro: "查看照片存取、iCloud 下載和整理照片的常見問題。", faqTitle: "常見問題", contactTitle: "聯絡我們", contactText: "如需協助或回報問題，請寄送電子郵件並說明遇到的情況，以及裝置型號和 iOS 版本。除非確有需要且你願意分享，請勿附上私人照片。", faqs: [
    ["為什麼有些照片沒有顯示？", "請在 iOS 設定中檢查 PhotoRoll 的照片存取權限。如果你授予的是有限存取權限，可以在 PhotoRoll 設定中的「照片權限」新增更多照片。"],
    ["為什麼 iCloud 照片無法預覽？", "請檢查網路連線，並確認 PhotoRoll 設定中的「iCloud 下載」已開啟。下載較大的原始檔可能需要一些時間，也可能使用行動數據。"],
    ["標記照片後會立即刪除嗎？", "不會。標記待刪除的照片會繼續保留在照片圖庫中，直到你在待刪除區域檢查並確認刪除。最終刪除由系統照片圖庫處理。"],
    ["為什麼預估空間和實際釋出空間不同？", "照片大小和 iCloud 下載情況可能只能估算。實際可用空間可能不同，iOS 更新空間顯示也可能需要一些時間。"],
      ["如何管理或復原購買項目？", "你可以在 PhotoRoll Pro 購買頁面復原符合條件的購買項目。請在 Apple 帳號的訂閱設定中管理或取消訂閱。適用價格和訂閱週期會在 Apple 購買確認頁面顯示。"],
      ["為什麼地點名稱可能不準確？", "PhotoRoll 會請 Apple 地理編碼服務將目前照片及附近照片的座標配對為地點名稱。結果可能是近似地點，也可能無法查詢。如果建議看起來不正確，請在系統照片圖庫中檢查照片位置。"]
  ] },
  terms: { eyebrow: "條款", title: "使用條款", intro: "使用 PhotoRoll 即表示你同意以下條款。如果你不同意，請勿使用本 App。", updated: "最後更新：2026 年 10 月 22 日", sections: [
    ["使用 PhotoRoll", "PhotoRoll 提供瀏覽、比較、篩選和整理照片的工具。你必須擁有存取和管理所用媒體的權利，並對自己的操作選擇及圖庫內容負責。"],
    ["估算與建議", "相似照片分組、分析結果、檔案大小和預估節省空間僅供參考，可能不完整或有誤差。請檢查相關項目，並以系統照片圖庫顯示的最終狀態為準。"],
    ["刪除需要你確認", "標記待刪除的項目會繼續留在圖庫中，直到你檢查並確認刪除。確認後能否復原，取決於系統照片圖庫及其「最近刪除」狀態。請為需要保留的內容另行備份。"],
    ["第三方服務", "PhotoRoll 可能會使用 Apple 照片、iCloud 和 Apple 地理編碼服務。這些服務由 Apple 提供，並受 Apple 適用的條款和隱私做法約束。網路費用由你的服務提供者決定。"],
      ["訂閱與一次性購買", "PhotoRoll Pro 提供週、月、年自動續訂訂閱，以及在提供的地區可用的一次性永久買斷。購買頁面會在付款前顯示適用價格、計費週期和權益；價格可能因 App Store 地區而異。訂閱扣款、續訂、取消和退款由 Apple 按其適用條款處理。你可以在 Apple 帳號的訂閱設定中管理或取消訂閱，並在 PhotoRoll 中復原符合條件的購買項目。永久買斷不會續訂。"],
    ["功能變更與責任", "PhotoRoll 更新時，功能可能有所變更。在適用法律允許的範圍內，PhotoRoll 依現狀提供，不保證每項分析或估算都沒有誤差。本條款不限制適用法律規定不得限制的權利。"],
    ["聯絡", "如有條款相關問題，請寄送電子郵件至 <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>。"]
  ] }
};

const page = document.body.dataset.page;
const params = new URLSearchParams(location.search);
const requested = params.get("lang") || navigator.language;
const normalizedLanguage = requested.toLowerCase();
const language = ["zh-hant", "zh-tw", "zh-hk", "zh-mo"].some(code => normalizedLanguage.startsWith(code))
  ? "zh-Hant"
  : normalizedLanguage.startsWith("zh") ? "zh-Hans" : "en";
const copy = pages[language][page];
document.documentElement.lang = language;
document.documentElement.dir = "ltr";
const labels = language === "zh-Hans"
  ? { supportNav: "支持", termsNav: "使用条款", privacyNav: "隐私政策" }
  : { supportNav: "Support", termsNav: "Terms of Use", privacyNav: "Privacy" };
for (const [key, value] of Object.entries(labels)) {
  document.querySelectorAll(`[data-copy="${key}"]`).forEach(node => { node.textContent = value; });
}
for (const [key, value] of Object.entries(copy)) {
  if (key === "sections" || key === "faqs") continue;
  const node = document.querySelector(`[data-copy="${key}"]`);
  if (node) node.textContent = value;
}
const sections = document.getElementById("sections");
if (sections && copy.sections) {
  sections.innerHTML = copy.sections.map(([title, body]) => `<section><h2>${title}</h2><p>${body}</p></section>`).join("");
}
const faqs = document.getElementById("faqs");
if (faqs && copy.faqs) {
  faqs.innerHTML = copy.faqs.map(([question, answer]) => `<details class="faq"><summary>${question}</summary><p>${answer}</p></details>`).join("");
}
const selector = document.getElementById("language");
selector.value = language;
selector.addEventListener("change", () => {
  const url = new URL(location.href);
  url.searchParams.set("lang", selector.value);
  location.href = url.toString();
});
