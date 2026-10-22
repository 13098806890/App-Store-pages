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

// Full public-page translations for the remaining App Store localizations.
pages.de = {
  privacy: { eyebrow: "Datenschutz", title: "Datenschutzerklärung", intro: "PhotoRoll hilft dir, deine Fotomediathek zu prüfen und zu organisieren. Foto- und Videoanalysen, der Prüffortschritt und der Organisationsverlauf werden auf deinem Gerät verarbeitet. PhotoRoll lädt keine Foto- oder Videoinhalte auf eigene Server hoch.", updated: "Zuletzt aktualisiert: 22. Oktober 2026", sections: [
    ["Informationen und Medien", "PhotoRoll erfordert kein Konto. Deine Foto- und Videomediathek wird nur aufgerufen, nachdem du die Berechtigung erteilt und eine entsprechende Funktion verwendet hast. Fotoauswahl, Ähnlichkeitsanalyse und Organisationsverlauf werden lokal verarbeitet. PhotoRoll lädt keine Foto- oder Videoinhalte auf eigene Server hoch."],
    ["Standortinformationen", "Wenn du Fotos mit Standortmetadaten prüfst oder Ortsvorschläge verwendest, können Apples Geocoding-Dienste Koordinaten des aktuellen und nahegelegener Fotos erhalten, um Ortsnamen zu ermitteln. Foto- und Videobildinhalte werden nicht an diese Dienste gesendet."],
    ["iCloud-Fotos", "Wenn du PhotoRoll erlaubst, Originale zu laden, kann die System-Fotomediathek das Originalfoto oder -video über das Netzwerk aus iCloud laden. Dabei können Netzwerk- oder Mobilfunkdaten verwendet werden. Du kannst diese Option in den PhotoRoll-Einstellungen deaktivieren."],
    ["Tägliche kostenlose Vorschauen", "PhotoRoll speichert auf diesem Gerät das Datum und die Anzahl der verwendeten kostenlosen Vorschauen. Wenn iCloud verfügbar ist, synchronisiert PhotoRoll diese Zähler und eine zufällig erzeugte Installationskennung über Apples iCloud Key-Value Store, um die Nutzung auf deinen Geräten zusammenzufassen. Foto-IDs und Fotoinhalte werden nicht synchronisiert. Abgelaufene Tageszähler werden entfernt."],
    ["Diagnosedaten zu Ortsabfragen", "Zur Fehlerbehebung bei erfolglosen Ortsabfragen kann PhotoRoll eine Diagnosetextdatei auf deinem Gerät speichern. Sie enthält den Abfragedienst, das Ergebnis und Fehlerdetails. Die aktuelle Datei enthält weder Fotokoordinaten noch erfolgreich ermittelte Ortsnamen und wird nicht an PhotoRoll hochgeladen."],
    ["Lokale Daten und Löschung", "Prüffortschritt, Einstellungen und Organisationsverlauf werden auf deinem Gerät gespeichert und von PhotoRoll nicht mit anderen Geräten synchronisiert. Die täglichen kostenlosen Vorschauen sind die oben beschriebene Ausnahme. Beim Löschen der App können ausschließlich lokal gespeicherte Daten entfernt werden. Zum Löschen vorgemerkte Fotos bleiben in deiner Fotomediathek, bis du die Löschung im systemeigenen Fotos-Ablauf bestätigst."],
    ["Änderungen und Kontakt", "Diese Erklärung kann aktualisiert werden, wenn sich Funktionen oder Datenverarbeitung der App ändern. Bei Fragen zum Datenschutz erreichst du uns unter <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Support", title: "Hilfe zu PhotoRoll", intro: "Antworten auf häufige Fragen zum Fotozugriff, zu iCloud-Downloads und zur Organisation von Fotos.", faqTitle: "Häufige Fragen", contactTitle: "Kontakt", contactText: "Wenn du Hilfe benötigst oder ein Problem melden möchtest, schreibe uns eine E-Mail. Beschreibe, was passiert ist, und nenne dein Gerätemodell und deine iOS-Version. Hänge private Fotos nur an, wenn sie erforderlich sind und du sie teilen möchtest.", faqs: [
    ["Warum fehlen manche Fotos?", "Prüfe in den iOS-Einstellungen die Fotos-Berechtigung von PhotoRoll. Wenn du nur eingeschränkten Zugriff gewährt hast, kannst du unter „Fotozugriff“ in den PhotoRoll-Einstellungen weitere Fotos hinzufügen."],
    ["Warum wird ein iCloud-Foto nicht angezeigt?", "Prüfe deine Netzwerkverbindung und ob „iCloud-Download“ in den PhotoRoll-Einstellungen aktiviert ist. Das Laden eines großen Originals kann dauern und Mobilfunkdaten verwenden."],
    ["Werden Fotos sofort gelöscht, wenn ich sie markiere?", "Nein. Zum Löschen markierte Fotos bleiben in deiner Fotomediathek, bis du sie im Bereich „Ausstehende Löschungen“ prüfst und die Löschung bestätigst. Die System-Fotos-App führt die Löschung aus."],
    ["Wie verwalte oder stelle ich einen Kauf wieder her?", "Stelle Käufe auf dem PhotoRoll-Pro-Kaufbildschirm wieder her. Abos kannst du in den Abonnementeinstellungen deines Apple Accounts verwalten oder kündigen. Preis und Laufzeit werden im Apple-Kaufdialog angezeigt."],
    ["Warum kann ein Ortsname falsch sein?", "PhotoRoll bittet Apples Geocoding-Dienst, Koordinaten des aktuellen und nahegelegener Fotos Ortsnamen zuzuordnen. Das Ergebnis kann ungenau sein oder fehlen. Prüfe den Fotostandort in der Fotos-App, wenn der Vorschlag nicht stimmt."],
    ["Warum weicht der geschätzte Speicherplatz vom freigegebenen Speicher ab?", "Fotogrößen und iCloud-Downloads sind möglicherweise nur Schätzungen. Der tatsächlich verfügbare Speicher kann abweichen; außerdem kann iOS einige Zeit benötigen, um die Anzeige zu aktualisieren."]
  ] },
  terms: { eyebrow: "Bedingungen", title: "Nutzungsbedingungen", intro: "Mit der Nutzung von PhotoRoll stimmst du diesen Bedingungen zu. Wenn du nicht zustimmst, verwende die App nicht.", updated: "Zuletzt aktualisiert: 22. Oktober 2026", sections: [
    ["PhotoRoll verwenden", "PhotoRoll bietet Werkzeuge zum Durchsuchen, Vergleichen, Filtern und Organisieren von Fotos. Du musst berechtigt sein, auf die mit der App verwendeten Medien zuzugreifen und sie zu verwalten. Für deine Entscheidungen und die Inhalte deiner Mediathek bist du verantwortlich."],
    ["Schätzungen und Vorschläge", "Ähnlichkeitsgruppen, Analyseergebnisse, Dateigrößen und geschätzter Speichergewinn dienen nur als Orientierung und können unvollständig oder ungenau sein. Prüfe die Elemente und richte dich für den endgültigen Status nach der System-Fotomediathek."],
    ["Löschen erfordert deine Bestätigung", "Zum Löschen markierte Elemente bleiben in deiner Mediathek, bis du sie prüfst und die Löschung bestätigst. Eine Wiederherstellung danach hängt von der System-Fotomediathek und ihrem Bereich „Zuletzt gelöscht“ ab. Sichere Inhalte, die du behalten möchtest."],
    ["Dienste Dritter", "PhotoRoll kann mit Apple Fotos, iCloud und Apples Geocoding-Diensten arbeiten. Diese Dienste werden von Apple bereitgestellt und unterliegen dessen geltenden Bedingungen und Datenschutzpraktiken. Gebühren für die Netzwerkverbindung legt dein Anbieter fest."],
    ["Abos und Einmalkauf", "PhotoRoll Pro ist über wöchentlich, monatlich oder jährlich automatisch verlängerte Abos sowie – sofern angeboten – über einen einmaligen lebenslangen Kauf verfügbar. Der Kaufdialog zeigt vor dem Kauf Preis, Abrechnungszeitraum und Leistungen. Preise können je nach App-Store-Region variieren. Apple wickelt Abrechnung, Verlängerung, Kündigung und Rückerstattungen nach seinen Bedingungen ab. Abos kannst du in den Einstellungen deines Apple Accounts verwalten oder kündigen; berechtigte Käufe lassen sich in PhotoRoll wiederherstellen. Der lebenslange Kauf verlängert sich nicht."],
    ["Verfügbarkeit und Änderungen", "Funktionen können sich mit Updates von PhotoRoll ändern. Soweit gesetzlich zulässig, wird PhotoRoll ohne Garantie bereitgestellt, dass alle Analysen oder Schätzungen fehlerfrei sind. Diese Bedingungen beschränken keine Rechte, die nach geltendem Recht nicht eingeschränkt werden dürfen."],
    ["Kontakt", "Fragen zu diesen Bedingungen? Schreibe uns an <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.es = {
  privacy: { eyebrow: "Privacidad", title: "Política de privacidad", intro: "PhotoRoll te ayuda a revisar y organizar tu fototeca. El análisis de fotos y vídeos, el progreso de revisión y el historial de organización se procesan en tu dispositivo. PhotoRoll no sube contenido de fotos o vídeos a sus propios servidores.", updated: "Última actualización: 22 de octubre de 2026", sections: [
    ["Información y contenido multimedia", "PhotoRoll no requiere una cuenta. Solo accede a tu fototeca después de que concedas permiso y utilices una función que lo necesite. La selección de fotos, el análisis de similitud y el historial de organización se procesan localmente. PhotoRoll no sube contenido de fotos o vídeos a sus servidores."],
    ["Información de ubicación", "Al revisar fotos con metadatos de ubicación o usar sugerencias de lugares, los servicios de geocodificación de Apple pueden recibir las coordenadas de la foto actual y de fotos cercanas para obtener nombres de lugares. No se envía el contenido visual de fotos ni vídeos a esos servicios."],
    ["Fotos en iCloud", "Si permites que PhotoRoll descargue originales, la fototeca del sistema puede descargar el original de una foto o vídeo desde iCloud por Internet. Esto puede consumir datos de red o móviles. Puedes desactivar esta opción en los ajustes de PhotoRoll."],
    ["Recuento diario de vistas previas gratuitas", "PhotoRoll guarda en este dispositivo la fecha y el número de vistas previas gratuitas utilizadas. Si iCloud está disponible, sincroniza estos recuentos y un identificador de instalación generado al azar mediante el servicio iCloud Key-Value Store de Apple para sumar el uso entre tus dispositivos. No sincroniza identificadores ni contenido de fotos. Los recuentos diarios caducados se eliminan."],
    ["Diagnóstico de búsquedas de lugares", "Para solucionar búsquedas de lugares fallidas, PhotoRoll puede guardar en tu dispositivo un archivo de diagnóstico de texto con el proveedor, el resultado y los detalles del error. El archivo actual no incluye coordenadas de fotos ni nombres de lugares encontrados correctamente, y no se sube a PhotoRoll."],
    ["Datos locales y eliminación", "El progreso de revisión, las preferencias y el historial de organización se guardan en tu dispositivo y PhotoRoll no los sincroniza con otros dispositivos. Los recuentos diarios de vistas previas gratuitas son la excepción descrita anteriormente. Al eliminar la app podrían borrarse los datos almacenados solo en el dispositivo. Las fotos marcadas para eliminar permanecen en tu fototeca hasta que confirmes su eliminación mediante el proceso de Fotos del sistema."],
    ["Cambios y contacto", "Esta política puede actualizarse si cambian las funciones o el tratamiento de datos de la app. Si tienes preguntas sobre privacidad, escríbenos a <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Soporte", title: "Ayuda con PhotoRoll", intro: "Respuestas a preguntas frecuentes sobre el acceso a fotos, las descargas de iCloud y la organización de fotos.", faqTitle: "Preguntas frecuentes", contactTitle: "Contacto", contactText: "Para recibir ayuda o informar de un problema, envíanos un correo. Describe lo ocurrido e incluye el modelo de tu dispositivo y la versión de iOS. No adjuntes fotos privadas salvo que sean necesarias y quieras compartirlas.", faqs: [
    ["¿Por qué faltan algunas fotos?", "Comprueba el permiso de Fotos de PhotoRoll en Ajustes de iOS. Si concediste acceso limitado, añade más fotos desde «Acceso a fotos» en los ajustes de PhotoRoll."],
    ["¿Por qué no se previsualiza una foto de iCloud?", "Comprueba la conexión de red y que «Descarga de iCloud» esté activada en los ajustes de PhotoRoll. Descargar un original grande puede tardar y consumir datos móviles."],
    ["¿Las fotos se eliminan en cuanto las marco?", "No. Las fotos marcadas para eliminar permanecen en tu fototeca hasta que las revises en la sección de elementos pendientes y confirmes su eliminación. La app Fotos del sistema realiza la eliminación."],
    ["¿Cómo puedo gestionar o restaurar una compra?", "Restaura las compras desde la pantalla de compra de PhotoRoll Pro. Gestiona o cancela una suscripción en los ajustes de suscripciones de tu cuenta de Apple. El precio y el periodo aparecen en la hoja de compra de Apple."],
    ["¿Por qué puede ser incorrecto el nombre de un lugar?", "PhotoRoll pide al servicio de geocodificación de Apple que asocie las coordenadas de la foto actual y de fotos cercanas con nombres de lugares. El resultado puede ser aproximado o no estar disponible. Comprueba la ubicación en Fotos si la sugerencia parece incorrecta."],
    ["¿Por qué no coincide el espacio estimado con el espacio liberado?", "El tamaño de las fotos y las descargas de iCloud pueden ser estimaciones. El espacio realmente disponible puede variar y iOS puede tardar en actualizarlo."]
  ] },
  terms: { eyebrow: "Términos", title: "Condiciones de uso", intro: "Al usar PhotoRoll, aceptas estas condiciones. Si no estás de acuerdo, no uses la app.", updated: "Última actualización: 22 de octubre de 2026", sections: [
    ["Uso de PhotoRoll", "PhotoRoll ofrece herramientas para explorar, comparar, filtrar y organizar fotos. Debes tener derecho a acceder a los archivos multimedia que utilizas con la app y gestionarlos. Eres responsable de tus decisiones y del contenido de tu fototeca."],
    ["Estimaciones y sugerencias", "Los grupos de similitud, los resultados del análisis, los tamaños de archivo y el ahorro de espacio estimado son orientativos y pueden ser incompletos o inexactos. Revisa los elementos y consulta la fototeca del sistema para conocer su estado final."],
    ["La eliminación requiere tu confirmación", "Los elementos marcados para eliminar permanecen en tu fototeca hasta que los revises y confirmes su eliminación. Después, la posibilidad de recuperarlos depende de la fototeca del sistema y de su estado en «Eliminado recientemente». Conserva copias de seguridad del contenido que quieras guardar."],
    ["Servicios de terceros", "PhotoRoll puede utilizar Apple Fotos, iCloud y los servicios de geocodificación de Apple. Apple proporciona estos servicios y se aplican sus condiciones y prácticas de privacidad. Tu proveedor determina los cargos de red."],
    ["Suscripciones y compra única", "PhotoRoll Pro está disponible mediante suscripciones semanales, mensuales y anuales con renovación automática, o mediante una compra única de por vida donde se ofrezca. Antes de comprar, la hoja de compra muestra el precio, el periodo de facturación y las prestaciones aplicables. Los precios pueden variar según la región del App Store. Apple gestiona los cobros, renovaciones, cancelaciones y reembolsos conforme a sus condiciones. Puedes gestionar o cancelar suscripciones en los ajustes de tu cuenta de Apple y restaurar en PhotoRoll las compras que cumplan los requisitos. La compra de por vida no se renueva."],
    ["Disponibilidad y cambios", "Las funciones pueden cambiar con las actualizaciones de PhotoRoll. En la medida permitida por la ley, PhotoRoll se proporciona sin garantizar que todos los análisis o estimaciones estén libres de errores. Estas condiciones no limitan los derechos que la legislación aplicable no permita limitar."],
    ["Contacto", "¿Tienes preguntas sobre estas condiciones? Escríbenos a <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.fr = {
  privacy: { eyebrow: "Confidentialité", title: "Politique de confidentialité", intro: "PhotoRoll vous aide à examiner et organiser votre photothèque. L’analyse des photos et vidéos, la progression de l’examen et l’historique d’organisation sont traités sur votre appareil. PhotoRoll n’envoie pas le contenu de vos photos ou vidéos à ses propres serveurs.", updated: "Dernière mise à jour : 22 octobre 2026", sections: [
    ["Informations et médias", "PhotoRoll ne nécessite pas de compte. Votre photothèque n’est consultée qu’après votre autorisation et lorsque vous utilisez une fonctionnalité qui en a besoin. La sélection des photos, l’analyse de similarité et l’historique d’organisation sont traités localement. PhotoRoll n’envoie pas le contenu de photos ou vidéos à ses serveurs."],
    ["Informations de localisation", "Lorsque vous examinez des photos contenant des métadonnées de localisation ou utilisez des suggestions de lieux, les services de géocodage d’Apple peuvent recevoir les coordonnées de la photo actuelle et de photos proches pour proposer des noms de lieux. Le contenu visuel des photos et vidéos ne leur est pas envoyé."],
    ["Photos iCloud", "Si vous autorisez PhotoRoll à télécharger les originaux, la photothèque du système peut télécharger l’original d’une photo ou vidéo depuis iCloud via le réseau. Cela peut utiliser le réseau mobile. Vous pouvez désactiver cette option dans les réglages de PhotoRoll."],
    ["Nombre quotidien d’aperçus gratuits", "PhotoRoll enregistre sur cet appareil la date et le nombre d’aperçus gratuits utilisés. Lorsque iCloud est disponible, ces compteurs et un identifiant d’installation généré aléatoirement sont synchronisés via iCloud Key-Value Store d’Apple afin de regrouper l’utilisation entre vos appareils. Les identifiants et contenus des photos ne sont pas synchronisés. Les compteurs quotidiens expirés sont supprimés."],
    ["Diagnostics des recherches de lieux", "Pour résoudre les échecs de recherche de lieux, PhotoRoll peut enregistrer un fichier texte de diagnostic sur votre appareil, avec le fournisseur, le résultat et les détails de l’erreur. Le fichier actuel ne contient ni coordonnées de photos ni noms de lieux trouvés avec succès et n’est pas envoyé à PhotoRoll."],
    ["Données locales et suppression", "La progression d’examen, les préférences et l’historique d’organisation sont stockés sur votre appareil et ne sont pas synchronisés par PhotoRoll avec d’autres appareils. Les compteurs quotidiens d’aperçus gratuits constituent l’exception décrite ci-dessus. La suppression de l’app peut effacer les données stockées uniquement sur l’appareil. Les photos marquées pour suppression restent dans votre photothèque jusqu’à votre confirmation via le processus Photos du système."],
    ["Modifications et contact", "Cette politique peut être mise à jour si les fonctionnalités ou le traitement des données de l’app changent. Pour toute question sur la confidentialité, contactez-nous à <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Assistance", title: "Aide PhotoRoll", intro: "Réponses aux questions fréquentes sur l’accès aux photos, les téléchargements iCloud et l’organisation des photos.", faqTitle: "Questions fréquentes", contactTitle: "Contact", contactText: "Pour obtenir de l’aide ou signaler un problème, envoyez-nous un e-mail. Décrivez ce qui s’est passé et indiquez le modèle de votre appareil et la version d’iOS. N’ajoutez pas de photos privées sauf si elles sont nécessaires et que vous acceptez de les partager.", faqs: [
    ["Pourquoi certaines photos sont-elles absentes ?", "Vérifiez l’autorisation Photos de PhotoRoll dans les réglages iOS. Si l’accès est limité, ajoutez des photos depuis « Accès aux photos » dans les réglages de PhotoRoll."],
    ["Pourquoi l’aperçu d’une photo iCloud ne s’affiche-t-il pas ?", "Vérifiez votre connexion réseau et l’activation de « Téléchargement iCloud » dans les réglages de PhotoRoll. Le téléchargement d’un grand original peut prendre du temps et utiliser les données mobiles."],
    ["Les photos sont-elles supprimées dès que je les marque ?", "Non. Les photos marquées pour suppression restent dans votre photothèque jusqu’à ce que vous les examiniez dans la zone des suppressions en attente et confirmiez leur suppression. L’app Photos du système effectue la suppression."],
    ["Comment gérer ou restaurer un achat ?", "Restaurez vos achats depuis l’écran d’achat PhotoRoll Pro. Gérez ou résiliez un abonnement dans les réglages d’abonnement de votre compte Apple. Le prix et la durée sont indiqués dans la feuille d’achat Apple."],
    ["Pourquoi le nom d’un lieu peut-il être incorrect ?", "PhotoRoll demande au service de géocodage d’Apple d’associer les coordonnées de la photo actuelle et de photos proches à des noms de lieux. Le résultat peut être approximatif ou indisponible. Vérifiez la localisation dans Photos si la suggestion semble incorrecte."],
    ["Pourquoi l’espace estimé diffère-t-il de l’espace libéré ?", "La taille des photos et les téléchargements iCloud peuvent être estimés. L’espace réellement disponible peut différer et iOS peut prendre un peu de temps pour actualiser son affichage."]
  ] },
  terms: { eyebrow: "Conditions", title: "Conditions d’utilisation", intro: "En utilisant PhotoRoll, vous acceptez ces conditions. Si vous ne les acceptez pas, n’utilisez pas l’app.", updated: "Dernière mise à jour : 22 octobre 2026", sections: [
    ["Utilisation de PhotoRoll", "PhotoRoll fournit des outils pour parcourir, comparer, filtrer et organiser des photos. Vous devez avoir le droit d’accéder aux médias utilisés avec l’app et de les gérer. Vous êtes responsable de vos choix et du contenu de votre photothèque."],
    ["Estimations et suggestions", "Les groupes de similarité, résultats d’analyse, tailles de fichiers et économies d’espace estimées sont indicatifs et peuvent être incomplets ou inexacts. Examinez les éléments et fiez-vous à la photothèque du système pour leur état final."],
    ["La suppression nécessite votre confirmation", "Les éléments marqués pour suppression restent dans votre photothèque jusqu’à ce que vous les examiniez et confirmiez la suppression. Leur récupération dépend ensuite de la photothèque du système et de son état « Supprimés récemment ». Conservez une sauvegarde du contenu à garder."],
    ["Services tiers", "PhotoRoll peut utiliser Apple Photos, iCloud et les services de géocodage d’Apple. Ces services sont fournis par Apple et soumis à ses conditions et pratiques de confidentialité applicables. Les frais réseau sont déterminés par votre opérateur."],
    ["Abonnements et achat unique", "PhotoRoll Pro est proposé par abonnements à renouvellement automatique hebdomadaires, mensuels et annuels, ou par achat unique à vie lorsqu’il est disponible. Avant l’achat, la feuille Apple indique le prix, la période de facturation et les avantages applicables. Les prix varient selon la région de l’App Store. Apple gère la facturation, le renouvellement, la résiliation et les remboursements selon ses conditions. Vous pouvez gérer ou résilier un abonnement dans les réglages de votre compte Apple et restaurer dans PhotoRoll les achats éligibles. L’achat à vie ne se renouvelle pas."],
    ["Disponibilité et modifications", "Les fonctionnalités peuvent évoluer lors des mises à jour de PhotoRoll. Dans la mesure autorisée par la loi, PhotoRoll est fourni sans garantie d’absence d’erreur dans chaque analyse ou estimation. Ces conditions ne limitent aucun droit que la loi applicable interdit de limiter."],
    ["Contact", "Des questions sur ces conditions ? Écrivez-nous à <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.it = {
  privacy: { eyebrow: "Privacy", title: "Informativa sulla privacy", intro: "PhotoRoll ti aiuta a esaminare e organizzare la libreria di foto. L’analisi di foto e video, l’avanzamento della revisione e la cronologia delle operazioni vengono elaborati sul dispositivo. PhotoRoll non carica contenuti di foto o video sui propri server.", updated: "Ultimo aggiornamento: 22 ottobre 2026", sections: [
    ["Informazioni e contenuti multimediali", "PhotoRoll non richiede un account. Accede alla libreria solo dopo che concedi l’autorizzazione e usi una funzione che la richiede. Selezione delle foto, analisi della somiglianza e cronologia vengono elaborati localmente. PhotoRoll non carica contenuti di foto o video sui propri server."],
    ["Informazioni sulla posizione", "Quando esamini foto con metadati di posizione o usi suggerimenti sui luoghi, i servizi di geocodifica di Apple possono ricevere le coordinate della foto corrente e di quelle vicine per restituire nomi di luoghi. Le immagini di foto e video non vengono inviate a tali servizi."],
    ["Foto di iCloud", "Se consenti a PhotoRoll di scaricare gli originali, la libreria Foto di sistema può scaricare l’originale di una foto o di un video da iCloud tramite la rete. Potrebbero essere usati dati mobili. Puoi disattivare questa opzione nelle impostazioni di PhotoRoll."],
    ["Conteggio giornaliero delle anteprime gratuite", "PhotoRoll salva su questo dispositivo la data e il numero di anteprime gratuite utilizzate. Se iCloud è disponibile, sincronizza questi conteggi e un identificatore di installazione generato casualmente tramite iCloud Key-Value Store di Apple per sommare l’utilizzo tra i tuoi dispositivi. Non sincronizza identificatori o contenuti delle foto. I conteggi giornalieri scaduti vengono rimossi."],
    ["Diagnostica delle ricerche di luoghi", "Per risolvere le ricerche di luoghi non riuscite, PhotoRoll può salvare sul dispositivo un file di testo diagnostico con il servizio usato, l’esito e i dettagli dell’errore. Il file attuale non contiene coordinate delle foto né nomi di luoghi risolti correttamente e non viene caricato su PhotoRoll."],
    ["Dati locali ed eliminazione", "Avanzamento, preferenze e cronologia sono salvati sul dispositivo e PhotoRoll non li sincronizza con altri dispositivi. I conteggi giornalieri delle anteprime gratuite sono l’eccezione descritta sopra. Eliminando l’app potresti rimuovere i dati salvati solo sul dispositivo. Le foto contrassegnate per l’eliminazione restano nella libreria finché non confermi l’eliminazione tramite il flusso di Foto di sistema."],
    ["Modifiche e contatti", "Questa informativa può essere aggiornata se cambiano le funzioni o il trattamento dei dati dell’app. Per domande sulla privacy, scrivi a <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Supporto", title: "Assistenza per PhotoRoll", intro: "Risposte alle domande frequenti sull’accesso alle foto, sui download iCloud e sull’organizzazione delle foto.", faqTitle: "Domande frequenti", contactTitle: "Contatti", contactText: "Per ricevere assistenza o segnalare un problema, inviaci un’email. Descrivi cosa è successo e indica modello del dispositivo e versione di iOS. Non allegare foto private, a meno che siano necessarie e tu voglia condividerle.", faqs: [
    ["Perché mancano alcune foto?", "Controlla l’autorizzazione Foto di PhotoRoll nelle Impostazioni di iOS. Se hai concesso un accesso limitato, aggiungi altre foto da “Accesso alle foto” nelle impostazioni di PhotoRoll."],
    ["Perché non riesco ad aprire l’anteprima di una foto iCloud?", "Controlla la connessione e che “Download iCloud” sia attivo nelle impostazioni di PhotoRoll. Il download di un originale grande può richiedere tempo e usare dati mobili."],
    ["Le foto vengono eliminate appena le contrassegno?", "No. Le foto contrassegnate restano nella libreria finché non le controlli nell’area delle eliminazioni in sospeso e confermi l’eliminazione. L’app Foto di sistema esegue l’eliminazione."],
    ["Come gestisco o ripristino un acquisto?", "Ripristina gli acquisti dalla schermata di acquisto di PhotoRoll Pro. Gestisci o annulla gli abbonamenti nelle impostazioni Abbonamenti del tuo account Apple. Prezzo e durata sono mostrati nel foglio di acquisto Apple."],
    ["Perché il nome di un luogo può essere errato?", "PhotoRoll chiede al servizio di geocodifica di Apple di associare alle coordinate della foto corrente e di quelle vicine dei nomi di luoghi. Il risultato può essere approssimativo o non disponibile. Se il suggerimento non è corretto, controlla la posizione nell’app Foto."],
    ["Perché lo spazio stimato è diverso da quello liberato?", "Le dimensioni delle foto e i download iCloud possono essere stime. Lo spazio effettivamente disponibile può variare e iOS potrebbe impiegare del tempo per aggiornare il valore."]
  ] },
  terms: { eyebrow: "Termini", title: "Termini di utilizzo", intro: "Usando PhotoRoll accetti questi termini. Se non sei d’accordo, non usare l’app.", updated: "Ultimo aggiornamento: 22 ottobre 2026", sections: [
    ["Uso di PhotoRoll", "PhotoRoll offre strumenti per sfogliare, confrontare, filtrare e organizzare foto. Devi avere il diritto di accedere e gestire i contenuti multimediali usati con l’app. Sei responsabile delle tue scelte e dei contenuti della libreria."],
    ["Stime e suggerimenti", "Gruppi di somiglianza, risultati di analisi, dimensioni dei file e spazio stimato sono indicativi e potrebbero essere incompleti o imprecisi. Controlla gli elementi e fai riferimento alla libreria Foto di sistema per lo stato finale."],
    ["L’eliminazione richiede la tua conferma", "Gli elementi contrassegnati restano nella libreria finché non li esamini e confermi l’eliminazione. Il recupero successivo dipende dalla libreria Foto di sistema e dal suo stato “Eliminati di recente”. Conserva copie di sicurezza dei contenuti che vuoi mantenere."],
    ["Servizi di terze parti", "PhotoRoll può usare Apple Foto, iCloud e i servizi di geocodifica di Apple. Questi servizi sono forniti da Apple e soggetti ai relativi termini e alle pratiche sulla privacy. I costi di rete dipendono dal tuo operatore."],
    ["Abbonamenti e acquisto una tantum", "PhotoRoll Pro è disponibile con abbonamenti settimanali, mensili e annuali a rinnovo automatico o, dove offerto, con un acquisto una tantum a vita. Prima dell’acquisto, il foglio Apple mostra prezzo, periodo di fatturazione e vantaggi. I prezzi possono variare in base alla regione dell’App Store. Apple gestisce addebiti, rinnovi, cancellazioni e rimborsi secondo i propri termini. Puoi gestire o annullare un abbonamento nelle impostazioni del tuo account Apple e ripristinare in PhotoRoll gli acquisti idonei. L’acquisto a vita non si rinnova."],
    ["Disponibilità e modifiche", "Le funzioni possono cambiare con gli aggiornamenti di PhotoRoll. Nei limiti consentiti dalla legge, l’app è fornita senza garanzia che ogni analisi o stima sia priva di errori. Questi termini non limitano i diritti che la legge applicabile non consente di limitare."],
    ["Contatti", "Domande su questi termini? Scrivi a <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.ja = {
  privacy: { eyebrow: "プライバシー", title: "プライバシーポリシー", intro: "PhotoRoll は写真ライブラリの確認と整理をサポートします。写真やビデオの分析、確認の進捗、整理履歴はお使いのデバイス上で処理されます。PhotoRoll が写真やビデオのコンテンツを自社サーバーにアップロードすることはありません。", updated: "最終更新日：2026年10月22日", sections: [
    ["情報とメディア", "PhotoRoll の利用にアカウントは必要ありません。写真へのアクセスを許可し、その権限が必要な機能を使用した場合にのみ、写真ライブラリにアクセスします。写真の選択、類似度分析、整理履歴はデバイス上で処理されます。写真やビデオのコンテンツを自社サーバーにアップロードすることはありません。"],
    ["位置情報", "位置情報メタデータを含む写真を確認するときや場所の候補を使うとき、場所の名称を調べるために、Apple のジオコーディングサービスへ現在の写真と近くの写真の座標が送信される場合があります。写真やビデオの画像データは送信されません。"],
    ["iCloud 写真", "オリジナルのダウンロードを許可すると、システムの写真ライブラリがネットワーク経由で iCloud から写真やビデオのオリジナルをダウンロードする場合があります。通信量が発生することがあります。この設定は PhotoRoll の設定でオフにできます。"],
    ["1日あたりの無料プレビュー数", "PhotoRoll はこのデバイスで、無料プレビューを使用した日付と回数を保存します。iCloud が利用できる場合、Apple の iCloud Key-Value Store を通じてこの回数とランダムに生成されたインストール識別子を同期し、デバイス間で利用数を合算します。写真の識別子やコンテンツは同期しません。期限切れの日次カウントは削除されます。"],
    ["場所検索の診断情報", "場所の検索に失敗した場合の調査のため、PhotoRoll は検索サービス、結果、エラーの詳細を含む診断テキストファイルをデバイスに保存することがあります。現在の診断ファイルに写真の座標や正常に取得できた場所名は含まれず、PhotoRoll にアップロードされません。"],
    ["端末内のデータと削除", "確認の進捗、設定、整理履歴はデバイスに保存され、PhotoRoll によって他のデバイスと同期されません。上記の日次無料プレビュー数は例外です。アプリを削除すると、デバイス内だけに保存されたデータが消去されることがあります。削除対象にした写真は、システムの写真アプリで削除を確定するまでライブラリに残ります。"],
    ["変更とお問い合わせ", "アプリの機能やデータの取り扱いが変わった場合、このポリシーを更新することがあります。プライバシーに関するお問い合わせは <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a> までご連絡ください。"]
  ] },
  support: { eyebrow: "サポート", title: "PhotoRoll のヘルプ", intro: "写真へのアクセス、iCloud からのダウンロード、写真の整理に関するよくある質問をご案内します。", faqTitle: "よくある質問", contactTitle: "お問い合わせ", contactText: "サポートへのお問い合わせや問題の報告はメールでお送りください。状況、デバイスのモデル、iOS のバージョンをお知らせください。必要であり、共有に同意いただける場合を除き、個人的な写真は添付しないでください。", faqs: [
    ["一部の写真が表示されないのはなぜですか？", "iOS の設定で PhotoRoll の写真アクセス権を確認してください。アクセスが制限されている場合は、PhotoRoll の設定にある「写真へのアクセス」から写真を追加できます。"],
    ["iCloud の写真をプレビューできないのはなぜですか？", "ネットワーク接続と、PhotoRoll の設定で「iCloud ダウンロード」が有効かを確認してください。大きなオリジナルのダウンロードには時間がかかり、モバイルデータ通信を使用することがあります。"],
    ["写真に削除マークを付けるとすぐ削除されますか？", "いいえ。削除対象の写真は、保留中の削除画面で確認して削除を確定するまでライブラリに残ります。実際の削除はシステムの写真アプリが処理します。"],
    ["購入内容を管理または復元するには？", "PhotoRoll Pro の購入画面から購入を復元できます。サブスクリプションは Apple Account のサブスクリプション設定で管理または解約してください。価格と期間は Apple の購入シートに表示されます。"],
    ["場所の名称が正しくないことがあるのはなぜですか？", "PhotoRoll は Apple のジオコーディングサービスに、現在の写真と近くの写真の座標から場所名を調べるよう依頼します。結果は概略の場合や取得できない場合があります。候補が不正確な場合は写真アプリで位置情報を確認してください。"],
    ["推定容量と実際に空いた容量が異なるのはなぜですか？", "写真の容量や iCloud のダウンロードは推定値の場合があります。実際に利用可能な容量は異なることがあり、iOS の表示更新にも時間がかかる場合があります。"]
  ] },
  terms: { eyebrow: "利用条件", title: "利用規約", intro: "PhotoRoll を利用すると、以下の条件に同意したものとみなされます。同意できない場合はアプリを利用しないでください。", updated: "最終更新日：2026年10月22日", sections: [
    ["PhotoRoll の利用", "PhotoRoll は写真の閲覧、比較、絞り込み、整理のためのツールを提供します。アプリで使用するメディアにアクセスし、管理する権利を有している必要があります。操作の選択とライブラリ内のコンテンツについては、ご自身が責任を負います。"],
    ["推定と候補", "類似グループ、分析結果、ファイルサイズ、節約できる容量の推定は参考情報であり、不完全または不正確な場合があります。各項目を確認し、最終的な状態はシステムの写真ライブラリで確認してください。"],
    ["削除には確認が必要です", "削除対象にした項目は、確認して削除を確定するまでライブラリに残ります。確定後に復元できるかどうかは、システムの写真ライブラリと「最近削除した項目」の状態によります。残したいコンテンツはバックアップしてください。"],
    ["第三者サービス", "PhotoRoll は Apple 写真、iCloud、Apple のジオコーディングサービスを使用する場合があります。これらのサービスは Apple が提供し、Apple の適用される規約とプライバシー慣行に従います。通信料金は通信事業者が定めます。"],
    ["サブスクリプションと買い切り", "PhotoRoll Pro は週、月、年単位の自動更新サブスクリプション、または提供地域では一度限りの永久買い切りで利用できます。購入前に Apple の購入シートで価格、請求期間、特典をご確認ください。価格は App Store の地域によって異なる場合があります。請求、更新、解約、返金は Apple の規約に従って Apple が取り扱います。サブスクリプションは Apple Account の設定で管理または解約でき、対象の購入は PhotoRoll で復元できます。永久買い切りは更新されません。"],
    ["提供状況と変更", "PhotoRoll のアップデートにより機能が変更されることがあります。適用法で認められる範囲で、すべての分析や推定に誤りがないことを保証せずに提供します。本規約は、適用法で制限できない権利を制限しません。"],
    ["お問い合わせ", "本規約に関するご質問は <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a> までご連絡ください。"]
  ] }
};

pages.ko = {
  privacy: { eyebrow: "개인정보 보호", title: "개인정보 처리방침", intro: "PhotoRoll은 사진 보관함을 검토하고 정리하도록 도와줍니다. 사진 및 비디오 분석, 검토 진행 상황과 정리 기록은 기기에서 처리됩니다. PhotoRoll은 사진이나 비디오 콘텐츠를 자체 서버에 업로드하지 않습니다.", updated: "최종 업데이트: 2026년 10월 22일", sections: [
    ["정보와 미디어", "PhotoRoll은 계정이 필요하지 않습니다. 권한을 허용하고 해당 기능을 사용할 때만 사진 보관함에 접근합니다. 사진 선택, 유사도 분석, 정리 기록은 기기에서 처리됩니다. 사진이나 비디오 콘텐츠를 자체 서버에 업로드하지 않습니다."],
    ["위치 정보", "위치 메타데이터가 있는 사진을 검토하거나 장소 제안을 사용할 때, Apple 지오코딩 서비스가 장소 이름을 제공하기 위해 현재 사진과 주변 사진의 좌표를 받을 수 있습니다. 사진 및 비디오의 이미지 콘텐츠는 해당 서비스로 전송되지 않습니다."],
    ["iCloud 사진", "원본 다운로드를 허용하면 시스템 사진 보관함이 네트워크를 통해 iCloud에서 사진 또는 비디오 원본을 다운로드할 수 있습니다. 네트워크 또는 셀룰러 데이터가 사용될 수 있으며, PhotoRoll 설정에서 이 옵션을 끌 수 있습니다."],
    ["일일 무료 미리보기 횟수", "PhotoRoll은 이 기기에서 무료 미리보기 사용 날짜와 횟수를 저장합니다. iCloud를 사용할 수 있으면 Apple iCloud Key-Value Store를 통해 이 횟수와 무작위로 생성한 설치 식별자를 동기화하여 여러 기기의 사용량을 합산합니다. 사진 식별자나 콘텐츠는 동기화하지 않습니다. 만료된 일일 횟수는 삭제됩니다."],
    ["장소 조회 진단 정보", "장소 조회 실패를 해결하기 위해 PhotoRoll은 조회 제공자, 결과, 오류 정보를 담은 진단 텍스트 파일을 기기에 저장할 수 있습니다. 현재 진단 파일에는 사진 좌표나 성공적으로 확인된 장소 이름이 포함되지 않으며 PhotoRoll에 업로드되지 않습니다."],
    ["기기 내 데이터와 삭제", "검토 진행 상황, 환경설정, 정리 기록은 기기에 저장되며 PhotoRoll이 다른 기기와 동기화하지 않습니다. 위에서 설명한 일일 무료 미리보기 횟수는 예외입니다. 앱을 삭제하면 기기에만 저장된 데이터가 제거될 수 있습니다. 삭제 대상으로 표시한 사진은 시스템 사진 앱의 삭제 절차에서 확인할 때까지 사진 보관함에 남아 있습니다."],
    ["변경 및 문의", "앱 기능이나 데이터 처리 방식이 변경되면 이 방침을 업데이트할 수 있습니다. 개인정보 관련 문의는 <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>으로 보내 주세요."]
  ] },
  support: { eyebrow: "지원", title: "PhotoRoll 도움말", intro: "사진 접근, iCloud 다운로드 및 사진 정리에 관한 자주 묻는 질문과 답변입니다.", faqTitle: "자주 묻는 질문", contactTitle: "문의", contactText: "도움이 필요하거나 문제를 신고하려면 이메일을 보내 주세요. 발생한 상황, 기기 모델 및 iOS 버전을 알려 주세요. 필요하고 공유에 동의하는 경우가 아니라면 개인 사진을 첨부하지 마세요.", faqs: [
    ["일부 사진이 보이지 않는 이유는 무엇인가요?", "iOS 설정에서 PhotoRoll의 사진 권한을 확인하세요. 제한된 접근 권한을 허용했다면 PhotoRoll 설정의 ‘사진 접근’에서 사진을 더 추가할 수 있습니다."],
    ["iCloud 사진 미리보기가 안 되는 이유는 무엇인가요?", "네트워크 연결과 PhotoRoll 설정의 ‘iCloud 다운로드’가 켜져 있는지 확인하세요. 큰 원본을 다운로드하는 데 시간이 걸리고 셀룰러 데이터가 사용될 수 있습니다."],
    ["표시하자마자 사진이 삭제되나요?", "아니요. 삭제 대상으로 표시한 사진은 대기 중인 삭제 항목에서 검토하고 삭제를 확인할 때까지 사진 보관함에 남습니다. 실제 삭제는 시스템 사진 앱이 처리합니다."],
    ["구입 항목을 관리하거나 복원하려면 어떻게 하나요?", "PhotoRoll Pro 구입 화면에서 구입 항목을 복원할 수 있습니다. Apple 계정의 구독 설정에서 구독을 관리하거나 취소하세요. 가격과 기간은 Apple 구입 시트에 표시됩니다."],
    ["장소 이름이 잘못될 수 있는 이유는 무엇인가요?", "PhotoRoll은 Apple 지오코딩 서비스에 현재 사진과 주변 사진의 좌표로 장소 이름을 확인하도록 요청합니다. 결과가 대략적이거나 제공되지 않을 수 있습니다. 제안이 잘못된 것 같으면 사진 앱에서 위치를 확인하세요."],
    ["예상 공간과 실제 확보 공간이 다른 이유는 무엇인가요?", "사진 크기와 iCloud 다운로드는 추정치일 수 있습니다. 실제로 사용 가능한 공간은 다를 수 있고 iOS가 표시를 업데이트하는 데 시간이 걸릴 수 있습니다."]
  ] },
  terms: { eyebrow: "약관", title: "이용 약관", intro: "PhotoRoll을 사용하면 이 약관에 동의하는 것입니다. 동의하지 않으면 앱을 사용하지 마세요.", updated: "최종 업데이트: 2026년 10월 22일", sections: [
    ["PhotoRoll 사용", "PhotoRoll은 사진을 탐색, 비교, 필터링하고 정리하는 도구를 제공합니다. 앱에서 사용하는 미디어에 접근하고 관리할 권리가 있어야 합니다. 선택한 작업과 사진 보관함의 콘텐츠에 대한 책임은 사용자에게 있습니다."],
    ["추정 및 제안", "유사도 그룹, 분석 결과, 파일 크기, 예상 저장 공간 절약은 참고 정보이며 불완전하거나 부정확할 수 있습니다. 항목을 검토하고 최종 상태는 시스템 사진 보관함에서 확인하세요."],
    ["삭제에는 확인이 필요합니다", "삭제 대상으로 표시한 항목은 검토하고 삭제를 확인할 때까지 보관함에 남습니다. 확인 후 복구 가능 여부는 시스템 사진 보관함과 ‘최근 삭제된 항목’ 상태에 따라 달라집니다. 보관할 콘텐츠는 백업하세요."],
    ["제3자 서비스", "PhotoRoll은 Apple 사진, iCloud 및 Apple 지오코딩 서비스를 사용할 수 있습니다. 이러한 서비스는 Apple이 제공하며 Apple의 적용 약관과 개인정보 보호 관행을 따릅니다. 네트워크 요금은 통신사가 정합니다."],
    ["구독 및 일회성 구매", "PhotoRoll Pro는 주간, 월간, 연간 자동 갱신 구독 또는 제공되는 지역에서 일회성 평생 구매로 이용할 수 있습니다. 구매 전에 Apple 구입 시트에서 적용 가격, 결제 기간 및 혜택을 확인할 수 있습니다. 가격은 App Store 지역에 따라 달라질 수 있습니다. 결제, 갱신, 취소 및 환불은 Apple이 해당 약관에 따라 처리합니다. Apple 계정 구독 설정에서 구독을 관리하거나 취소하고, 대상 구입 항목을 PhotoRoll에서 복원할 수 있습니다. 평생 구매는 갱신되지 않습니다."],
    ["제공 및 변경", "PhotoRoll 업데이트에 따라 기능이 변경될 수 있습니다. 관련 법률이 허용하는 범위에서 모든 분석이나 추정이 오류 없이 제공된다고 보장하지 않습니다. 이 약관은 관련 법률상 제한할 수 없는 권리를 제한하지 않습니다."],
    ["문의", "약관에 관한 질문은 <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>으로 보내 주세요."]
  ] }
};

pages["pt-BR"] = {
  privacy: { eyebrow: "Privacidade", title: "Política de Privacidade", intro: "O PhotoRoll ajuda você a revisar e organizar sua fototeca. A análise de fotos e vídeos, o progresso da revisão e o histórico de organização são processados no seu dispositivo. O PhotoRoll não envia conteúdo de fotos ou vídeos para servidores próprios.", updated: "Última atualização: 22 de outubro de 2026", sections: [
    ["Informações e mídia", "O PhotoRoll não exige uma conta. A fototeca só é acessada depois que você concede permissão e usa um recurso que precisa dela. A seleção de fotos, a análise de similaridade e o histórico de organização são processados localmente. O PhotoRoll não envia conteúdo de fotos ou vídeos para seus servidores."],
    ["Informações de localização", "Ao revisar fotos com metadados de localização ou usar sugestões de lugares, os serviços de geocodificação da Apple podem receber as coordenadas da foto atual e de fotos próximas para identificar nomes de lugares. O conteúdo visual de fotos e vídeos não é enviado a esses serviços."],
    ["Fotos do iCloud", "Se você permitir que o PhotoRoll baixe originais, a fototeca do sistema poderá baixar o original de uma foto ou vídeo do iCloud pela rede. Isso pode usar dados móveis. Você pode desativar essa opção nos ajustes do PhotoRoll."],
    ["Contagem diária de prévias gratuitas", "O PhotoRoll salva neste dispositivo a data e a quantidade de prévias gratuitas usadas. Quando o iCloud está disponível, sincroniza essas contagens e um identificador de instalação gerado aleatoriamente pelo iCloud Key-Value Store da Apple para reunir o uso entre seus dispositivos. Não sincroniza identificadores nem conteúdo de fotos. Contagens diárias expiradas são removidas."],
    ["Diagnóstico de busca de lugares", "Para solucionar buscas de lugares que falharam, o PhotoRoll pode salvar no dispositivo um arquivo de diagnóstico em texto com o serviço consultado, o resultado e detalhes do erro. O arquivo atual não contém coordenadas das fotos nem nomes de lugares encontrados com sucesso e não é enviado ao PhotoRoll."],
    ["Dados locais e exclusão", "O progresso da revisão, as preferências e o histórico de organização ficam no dispositivo e não são sincronizados pelo PhotoRoll com outros dispositivos. As contagens diárias de prévias gratuitas são a exceção descrita acima. A exclusão do app pode remover dados armazenados apenas no dispositivo. Fotos marcadas para exclusão permanecem na fototeca até que você confirme a exclusão pelo fluxo do app Fotos do sistema."],
    ["Alterações e contato", "Esta política pode ser atualizada se os recursos ou o tratamento de dados do app mudarem. Para dúvidas sobre privacidade, escreva para <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Suporte", title: "Ajuda com o PhotoRoll", intro: "Respostas às dúvidas comuns sobre acesso às fotos, downloads do iCloud e organização de fotos.", faqTitle: "Perguntas frequentes", contactTitle: "Contato", contactText: "Para pedir ajuda ou relatar um problema, envie um e-mail. Descreva o que aconteceu e informe o modelo do dispositivo e a versão do iOS. Não anexe fotos privadas, a menos que sejam necessárias e você queira compartilhá-las.", faqs: [
    ["Por que algumas fotos não aparecem?", "Confira a permissão de Fotos do PhotoRoll nos Ajustes do iOS. Se você concedeu acesso limitado, adicione mais fotos em “Acesso às Fotos” nos ajustes do PhotoRoll."],
    ["Por que uma foto do iCloud não abre na prévia?", "Confira a conexão de rede e se “Download do iCloud” está ativado nos ajustes do PhotoRoll. O download de um original grande pode demorar e usar dados móveis."],
    ["As fotos são excluídas assim que eu as marco?", "Não. Fotos marcadas para exclusão ficam na fototeca até que você as revise na área de exclusões pendentes e confirme a exclusão. O app Fotos do sistema realiza a exclusão."],
    ["Como gerencio ou restauro uma compra?", "Restaure compras na tela de compra do PhotoRoll Pro. Gerencie ou cancele uma assinatura nos ajustes de assinaturas da sua Conta Apple. O preço e o período aparecem na folha de compra da Apple."],
    ["Por que o nome de um lugar pode estar errado?", "O PhotoRoll pede ao serviço de geocodificação da Apple que associe as coordenadas da foto atual e de fotos próximas a nomes de lugares. O resultado pode ser aproximado ou não estar disponível. Se a sugestão parecer incorreta, confira a localização no app Fotos."],
    ["Por que o espaço estimado difere do espaço liberado?", "O tamanho das fotos e os downloads do iCloud podem ser estimativas. O espaço realmente disponível pode variar, e o iOS pode levar algum tempo para atualizar a indicação."]
  ] },
  terms: { eyebrow: "Termos", title: "Termos de Uso", intro: "Ao usar o PhotoRoll, você concorda com estes termos. Se não concordar, não use o app.", updated: "Última atualização: 22 de outubro de 2026", sections: [
    ["Uso do PhotoRoll", "O PhotoRoll oferece ferramentas para navegar, comparar, filtrar e organizar fotos. Você precisa ter o direito de acessar e gerenciar as mídias usadas no app. Você é responsável pelas suas escolhas e pelo conteúdo da fototeca."],
    ["Estimativas e sugestões", "Grupos de similaridade, resultados de análise, tamanhos de arquivo e estimativas de espaço economizado são apenas orientativos e podem estar incompletos ou imprecisos. Revise os itens e consulte a fototeca do sistema para confirmar o estado final."],
    ["A exclusão exige sua confirmação", "Itens marcados para exclusão permanecem na fototeca até que você os revise e confirme a exclusão. Depois disso, a recuperação depende da fototeca do sistema e do estado de “Apagados Recentemente”. Faça cópias de segurança do conteúdo que deseja manter."],
    ["Serviços de terceiros", "O PhotoRoll pode usar o Apple Fotos, o iCloud e os serviços de geocodificação da Apple. Esses serviços são fornecidos pela Apple e estão sujeitos aos termos e às práticas de privacidade aplicáveis da Apple. Sua operadora determina as tarifas de rede."],
    ["Assinaturas e compra única", "O PhotoRoll Pro está disponível por assinaturas semanais, mensais e anuais com renovação automática ou, onde oferecida, por uma compra única vitalícia. Antes da compra, a folha da Apple mostra o preço, o período de cobrança e os benefícios aplicáveis. Os preços podem variar conforme a região da App Store. A Apple processa cobranças, renovações, cancelamentos e reembolsos segundo seus termos. Você pode gerenciar ou cancelar assinaturas nos ajustes da Conta Apple e restaurar no PhotoRoll as compras elegíveis. A compra vitalícia não é renovada."],
    ["Disponibilidade e alterações", "Os recursos podem mudar com as atualizações do PhotoRoll. Até onde a lei permite, o app é fornecido sem garantia de que todas as análises ou estimativas estejam livres de erros. Estes termos não limitam direitos que a lei aplicável não permite limitar."],
    ["Contato", "Dúvidas sobre estes termos? Envie um e-mail para <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages["pt-PT"] = {
  privacy: { eyebrow: "Privacidade", title: "Política de Privacidade", intro: "O PhotoRoll ajuda-o a rever e organizar a sua biblioteca de fotografias. A análise de fotografias e vídeos, o progresso da revisão e o histórico de organização são processados no seu dispositivo. O PhotoRoll não envia conteúdos de fotografias ou vídeos para os seus próprios servidores.", updated: "Última atualização: 22 de outubro de 2026", sections: [
    ["Informações e conteúdos multimédia", "O PhotoRoll não requer uma conta. A biblioteca só é acedida depois de autorizar o acesso e utilizar uma funcionalidade que dele necessite. A seleção de fotografias, a análise de semelhanças e o histórico de organização são processados localmente. O PhotoRoll não envia conteúdos de fotografias ou vídeos para os seus servidores."],
    ["Informações de localização", "Ao rever fotografias com metadados de localização ou utilizar sugestões de locais, os serviços de geocodificação da Apple podem receber as coordenadas da fotografia atual e de fotografias próximas para identificar nomes de locais. O conteúdo visual de fotografias e vídeos não é enviado para esses serviços."],
    ["Fotografias em iCloud", "Se permitir que o PhotoRoll descarregue originais, a biblioteca Fotografias do sistema poderá descarregar o original de uma fotografia ou vídeo do iCloud através da rede. Isto poderá utilizar dados móveis. Pode desativar esta opção nas definições do PhotoRoll."],
    ["Contagem diária de pré-visualizações gratuitas", "O PhotoRoll guarda neste dispositivo a data e o número de pré-visualizações gratuitas utilizadas. Quando o iCloud está disponível, sincroniza estas contagens e um identificador de instalação gerado aleatoriamente através do iCloud Key-Value Store da Apple para reunir a utilização entre os seus dispositivos. Não sincroniza identificadores nem conteúdos de fotografias. As contagens diárias expiradas são removidas."],
    ["Diagnóstico de pesquisas de locais", "Para resolver pesquisas de locais sem sucesso, o PhotoRoll poderá guardar no dispositivo um ficheiro de diagnóstico de texto com o serviço consultado, o resultado e os detalhes do erro. O ficheiro atual não contém coordenadas das fotografias nem nomes de locais obtidos com sucesso e não é enviado para o PhotoRoll."],
    ["Dados locais e eliminação", "O progresso da revisão, as preferências e o histórico de organização são guardados no dispositivo e não são sincronizados pelo PhotoRoll com outros dispositivos. As contagens diárias de pré-visualizações gratuitas são a exceção descrita acima. A eliminação da app poderá remover dados guardados apenas no dispositivo. As fotografias marcadas para eliminação permanecem na biblioteca até confirmar a eliminação através do processo Fotografias do sistema."],
    ["Alterações e contacto", "Esta política poderá ser atualizada se as funcionalidades ou o tratamento de dados da app forem alterados. Para questões de privacidade, contacte-nos através de <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Suporte", title: "Ajuda do PhotoRoll", intro: "Respostas a perguntas frequentes sobre o acesso a fotografias, as descargas do iCloud e a organização de fotografias.", faqTitle: "Perguntas frequentes", contactTitle: "Contacto", contactText: "Para pedir ajuda ou comunicar um problema, envie-nos um e-mail. Descreva o sucedido e indique o modelo do dispositivo e a versão do iOS. Não anexe fotografias privadas, salvo se forem necessárias e estiver disposto a partilhá-las.", faqs: [
    ["Porque faltam algumas fotografias?", "Verifique a permissão Fotografias do PhotoRoll nas Definições do iOS. Se tiver concedido acesso limitado, adicione mais fotografias em “Acesso a fotografias” nas definições do PhotoRoll."],
    ["Porque não consigo pré-visualizar uma fotografia do iCloud?", "Verifique a ligação à rede e se “Descarga do iCloud” está ativada nas definições do PhotoRoll. A descarga de um original grande poderá demorar e utilizar dados móveis."],
    ["As fotografias são eliminadas assim que as marco?", "Não. As fotografias marcadas para eliminação permanecem na biblioteca até as rever na área de eliminações pendentes e confirmar a eliminação. A app Fotografias do sistema efetua a eliminação."],
    ["Como posso gerir ou restaurar uma compra?", "Restaure compras no ecrã de compra do PhotoRoll Pro. Faça a gestão ou cancele uma assinatura nas definições de assinaturas da sua Conta Apple. O preço e o período são apresentados na folha de compra da Apple."],
    ["Porque pode estar incorreto o nome de um local?", "O PhotoRoll pede ao serviço de geocodificação da Apple que associe as coordenadas da fotografia atual e de fotografias próximas a nomes de locais. O resultado poderá ser aproximado ou estar indisponível. Se a sugestão parecer incorreta, verifique a localização na app Fotografias."],
    ["Porque difere o espaço estimado do espaço libertado?", "Os tamanhos das fotografias e as descargas do iCloud poderão ser estimativas. O espaço realmente disponível poderá diferir e o iOS poderá demorar algum tempo a atualizar a indicação."]
  ] },
  terms: { eyebrow: "Termos", title: "Termos de Utilização", intro: "Ao utilizar o PhotoRoll, concorda com estes termos. Se não concordar, não utilize a app.", updated: "Última atualização: 22 de outubro de 2026", sections: [
    ["Utilização do PhotoRoll", "O PhotoRoll disponibiliza ferramentas para explorar, comparar, filtrar e organizar fotografias. Tem de ter o direito de aceder e gerir os conteúdos multimédia utilizados com a app. É responsável pelas suas escolhas e pelo conteúdo da biblioteca."],
    ["Estimativas e sugestões", "Os grupos de semelhança, os resultados de análise, os tamanhos dos ficheiros e as estimativas de espaço poupado são meramente indicativos e poderão estar incompletos ou ser imprecisos. Reveja os itens e consulte a biblioteca do sistema para confirmar o estado final."],
    ["A eliminação requer a sua confirmação", "Os itens marcados para eliminação permanecem na biblioteca até os rever e confirmar a eliminação. A recuperação posterior depende da biblioteca Fotografias do sistema e do estado de “Apagados recentemente”. Faça cópias de segurança dos conteúdos que pretende manter."],
    ["Serviços de terceiros", "O PhotoRoll poderá utilizar Apple Fotografias, iCloud e os serviços de geocodificação da Apple. Estes serviços são fornecidos pela Apple e estão sujeitos aos termos e às práticas de privacidade aplicáveis da Apple. O seu operador determina os custos de rede."],
    ["Assinaturas e compra única", "O PhotoRoll Pro está disponível através de assinaturas semanais, mensais e anuais com renovação automática ou, nos locais onde for disponibilizada, através de uma compra única vitalícia. Antes da compra, a folha da Apple apresenta o preço, o período de cobrança e as vantagens aplicáveis. Os preços poderão variar consoante a região da App Store. A Apple trata das cobranças, renovações, cancelamentos e reembolsos segundo os seus termos. Pode gerir ou cancelar assinaturas nas definições da Conta Apple e restaurar no PhotoRoll as compras elegíveis. A compra vitalícia não é renovada."],
    ["Disponibilidade e alterações", "As funcionalidades poderão mudar com as atualizações do PhotoRoll. Na medida permitida pela lei, a app é fornecida sem garantia de que todas as análises ou estimativas estejam isentas de erros. Estes termos não limitam direitos que a lei aplicável não permita limitar."],
    ["Contacto", "Tem dúvidas sobre estes termos? Envie um e-mail para <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.ru = {
  privacy: { eyebrow: "Конфиденциальность", title: "Политика конфиденциальности", intro: "PhotoRoll помогает просматривать и упорядочивать фототеку. Анализ фото и видео, ход проверки и история упорядочивания обрабатываются на вашем устройстве. PhotoRoll не загружает фото и видео на собственные серверы.", updated: "Последнее обновление: 22 октября 2026 г.", sections: [
    ["Информация и медиаматериалы", "Для PhotoRoll не нужна учетная запись. Доступ к фототеке предоставляется только после вашего разрешения и при использовании соответствующей функции. Выбор фото, анализ сходства и история упорядочивания обрабатываются локально. PhotoRoll не загружает фото и видео на свои серверы."],
    ["Данные о местоположении", "При просмотре фото с метаданными о местоположении или использовании подсказок мест службы геокодирования Apple могут получить координаты текущего и близлежащих фото, чтобы определить названия мест. Изображения фото и видео этим службам не отправляются."],
    ["Фото iCloud", "Если вы разрешите PhotoRoll загружать оригиналы, системная медиатека может загрузить оригинал фото или видео из iCloud по сети. Это может расходовать мобильный трафик. Эту функцию можно отключить в настройках PhotoRoll."],
    ["Ежедневное число бесплатных просмотров", "PhotoRoll сохраняет на этом устройстве дату и число использованных бесплатных просмотров. Если доступен iCloud, эти счетчики и случайно созданный идентификатор установки синхронизируются через Apple iCloud Key-Value Store, чтобы объединить использование на ваших устройствах. Идентификаторы и содержимое фото не синхронизируются. Истекшие дневные счетчики удаляются."],
    ["Диагностика поиска мест", "Для устранения сбоев поиска мест PhotoRoll может сохранить на устройстве текстовый диагностический файл с указанием службы, результата и сведений об ошибке. Текущий файл не содержит координат фото или успешно найденных названий мест и не отправляется в PhotoRoll."],
    ["Локальные данные и удаление", "Ход проверки, настройки и история упорядочивания хранятся на устройстве и не синхронизируются PhotoRoll с другими устройствами. Ежедневные счетчики бесплатных просмотров — исключение, описанное выше. При удалении приложения данные, хранившиеся только на устройстве, могут быть потеряны. Отмеченные для удаления фото остаются в фототеке, пока вы не подтвердите удаление через системное приложение «Фото»."],
    ["Изменения и контакты", "Политика может обновляться при изменении функций приложения или обработки данных. По вопросам конфиденциальности пишите на <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Поддержка", title: "Помощь по PhotoRoll", intro: "Ответы на частые вопросы о доступе к фото, загрузке из iCloud и упорядочивании фотографий.", faqTitle: "Частые вопросы", contactTitle: "Контакты", contactText: "Чтобы получить помощь или сообщить о проблеме, напишите нам. Опишите ситуацию, укажите модель устройства и версию iOS. Не прикладывайте личные фото, если они не нужны и вы не готовы ими поделиться.", faqs: [
    ["Почему некоторые фото не отображаются?", "Проверьте разрешение PhotoRoll на доступ к Фото в настройках iOS. Если доступ ограничен, добавьте фото в разделе «Доступ к фото» в настройках PhotoRoll."],
    ["Почему не загружается предварительный просмотр фото из iCloud?", "Проверьте подключение к сети и включена ли загрузка из iCloud в настройках PhotoRoll. Загрузка большого оригинала может занять время и использовать мобильный трафик."],
    ["Фото удаляются сразу после отметки?", "Нет. Отмеченные фото остаются в фототеке, пока вы не проверите их в разделе ожидающих удаления и не подтвердите действие. Удаление выполняет системное приложение «Фото»."],
    ["Как управлять покупкой или восстановить ее?", "Восстановите покупки на экране PhotoRoll Pro. Управляйте подпиской или отмените ее в настройках подписок учетной записи Apple. Цена и период отображаются в окне покупки Apple."],
    ["Почему название места может быть неверным?", "PhotoRoll просит службу геокодирования Apple сопоставить координаты текущего и близлежащих фото с названиями мест. Результат может быть приблизительным или отсутствовать. Если подсказка неверна, проверьте местоположение в приложении «Фото»."],
    ["Почему оценка места отличается от освобожденного?", "Размер фото и загрузки из iCloud могут оцениваться приблизительно. Фактически доступное место может отличаться, а iOS может обновить показатель не сразу."]
  ] },
  terms: { eyebrow: "Условия", title: "Условия использования", intro: "Используя PhotoRoll, вы соглашаетесь с этими условиями. Если вы не согласны, не используйте приложение.", updated: "Последнее обновление: 22 октября 2026 г.", sections: [
    ["Использование PhotoRoll", "PhotoRoll предоставляет инструменты для просмотра, сравнения, фильтрации и упорядочивания фото. У вас должно быть право доступа к медиаматериалам, используемым в приложении, и право управлять ими. Вы отвечаете за свои действия и содержимое фототеки."],
    ["Оценки и подсказки", "Группы похожих фото, результаты анализа, размеры файлов и оценка экономии места носят справочный характер и могут быть неполными или неточными. Проверяйте элементы и ориентируйтесь на окончательный статус в системной фототеке."],
    ["Удаление требует подтверждения", "Отмеченные для удаления элементы остаются в фототеке, пока вы не проверите и не подтвердите удаление. Возможность восстановления после этого зависит от системной фототеки и состояния раздела «Недавно удаленные». Сохраняйте резервные копии нужных материалов."],
    ["Сторонние службы", "PhotoRoll может использовать Apple Фото, iCloud и службы геокодирования Apple. Эти службы предоставляет Apple; на них распространяются применимые условия и правила конфиденциальности Apple. Стоимость сетевого трафика определяет оператор связи."],
    ["Подписки и разовая покупка", "PhotoRoll Pro доступен по автоматически продлеваемым недельным, месячным и годовым подпискам, а в некоторых регионах — по разовой пожизненной покупке. До покупки окно Apple показывает цену, период оплаты и преимущества. Цены могут различаться в зависимости от региона App Store. Apple обрабатывает оплату, продление, отмену и возвраты согласно своим условиям. Подпиской можно управлять или отменить ее в настройках учетной записи Apple; подходящие покупки можно восстановить в PhotoRoll. Пожизненная покупка не продлевается."],
    ["Доступность и изменения", "Функции могут меняться с обновлениями PhotoRoll. В пределах, разрешенных законом, приложение предоставляется без гарантии безошибочности каждого анализа или оценки. Эти условия не ограничивают права, которые нельзя ограничить по применимому закону."],
    ["Контакты", "По вопросам об этих условиях пишите на <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.tr = {
  privacy: { eyebrow: "Gizlilik", title: "Gizlilik Politikası", intro: "PhotoRoll, fotoğraf arşivinizi incelemenize ve düzenlemenize yardımcı olur. Fotoğraf ve video analizi, inceleme ilerlemesi ve düzenleme geçmişi cihazınızda işlenir. PhotoRoll fotoğraf veya video içeriğini kendi sunucularına yüklemez.", updated: "Son güncelleme: 22 Ekim 2026", sections: [
    ["Bilgiler ve medya", "PhotoRoll hesap gerektirmez. Fotoğraf arşivinize yalnızca izin verdiğinizde ve bu izne ihtiyaç duyan bir özelliği kullandığınızda erişilir. Fotoğraf seçimi, benzerlik analizi ve düzenleme geçmişi yerel olarak işlenir. PhotoRoll fotoğraf veya video içeriğini sunucularına yüklemez."],
    ["Konum bilgileri", "Konum üst verisi içeren fotoğrafları incelerken veya yer önerilerini kullanırken Apple'ın coğrafi kodlama hizmetleri, yer adlarını bulmak için geçerli ve yakındaki fotoğrafların koordinatlarını alabilir. Fotoğraf ve videoların görüntü içeriği bu hizmetlere gönderilmez."],
    ["iCloud Fotoğrafları", "PhotoRoll'un asılları indirmesine izin verirseniz sistem Fotoğraflar arşivi, fotoğraf veya videonun aslını ağ üzerinden iCloud'dan indirebilir. Bu işlem hücresel veri kullanabilir. Bu seçeneği PhotoRoll ayarlarından kapatabilirsiniz."],
    ["Günlük ücretsiz önizleme sayısı", "PhotoRoll, kullanılan ücretsiz önizlemelerin tarihini ve sayısını bu cihazda saklar. iCloud kullanılabiliyorsa cihazlar arasındaki kullanımı birleştirmek için bu sayılar ve rastgele oluşturulan bir kurulum tanımlayıcısı Apple'ın iCloud Key-Value Store'u üzerinden eşzamanlanır. Fotoğraf tanımlayıcıları veya içerikleri eşzamanlanmaz. Süresi dolan günlük sayılar silinir."],
    ["Yer arama tanılama bilgileri", "Başarısız yer aramalarını incelemek için PhotoRoll, arama sağlayıcısını, sonucu ve hata ayrıntılarını içeren bir tanılama metin dosyasını cihazınıza kaydedebilir. Mevcut dosya fotoğraf koordinatlarını veya başarıyla bulunan yer adlarını içermez ve PhotoRoll'a yüklenmez."],
    ["Yerel veriler ve silme", "İnceleme ilerlemesi, tercihler ve düzenleme geçmişi cihazınızda saklanır ve PhotoRoll tarafından başka cihazlarla eşzamanlanmaz. Günlük ücretsiz önizleme sayıları yukarıdaki istisnadır. Uygulamayı silmek yalnızca cihazda saklanan verileri kaldırabilir. Silinmek üzere işaretlenen fotoğraflar, sistem Fotoğraflar akışında silme işlemini onaylayana kadar arşivinizde kalır."],
    ["Değişiklikler ve iletişim", "Uygulama özellikleri veya veri işleme biçimi değişirse bu politika güncellenebilir. Gizlilik sorularınız için <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a> adresine yazın."]
  ] },
  support: { eyebrow: "Destek", title: "PhotoRoll Yardım", intro: "Fotoğraf erişimi, iCloud indirmeleri ve fotoğrafları düzenlemeyle ilgili sık sorulan soruların yanıtları.", faqTitle: "Sık sorulan sorular", contactTitle: "İletişim", contactText: "Yardım almak veya sorun bildirmek için bize e-posta gönderin. Ne olduğunu açıklayın; cihaz modelinizi ve iOS sürümünü ekleyin. Gerekli olmadıkça ve paylaşmak istemedikçe özel fotoğraflar eklemeyin.", faqs: [
    ["Bazı fotoğraflar neden görünmüyor?", "iOS Ayarları'ndan PhotoRoll'un Fotoğraflar iznini kontrol edin. Sınırlı erişim verdiyseniz daha fazla fotoğrafı PhotoRoll ayarlarındaki “Fotoğraf Erişimi” bölümünden ekleyin."],
    ["iCloud fotoğrafının önizlemesi neden açılmıyor?", "Ağ bağlantınızı ve PhotoRoll ayarlarında “iCloud İndirme” seçeneğinin açık olduğunu kontrol edin. Büyük bir aslı indirmek zaman alabilir ve hücresel veri kullanabilir."],
    ["İşaretlediğim fotoğraflar hemen silinir mi?", "Hayır. Silinmek üzere işaretlenen fotoğraflar, bekleyen silme alanında inceleyip silmeyi onaylayana kadar arşivinizde kalır. Silme işlemini sistem Fotoğraflar uygulaması gerçekleştirir."],
    ["Bir satın almayı nasıl yönetir veya geri yüklerim?", "Satın alımları PhotoRoll Pro satın alma ekranından geri yükleyin. Aboneliğinizi Apple Hesabı abonelik ayarlarından yönetin veya iptal edin. Geçerli fiyat ve dönem Apple satın alma sayfasında gösterilir."],
    ["Yer adı neden yanlış olabilir?", "PhotoRoll, geçerli ve yakındaki fotoğrafların koordinatlarını yer adlarıyla eşleştirmesi için Apple'ın coğrafi kodlama hizmetine başvurur. Sonuç yaklaşık veya kullanılamaz olabilir. Öneri yanlış görünüyorsa Fotoğraflar uygulamasındaki konumu kontrol edin."],
    ["Tahmini alan neden boşalan alandan farklı?", "Fotoğraf boyutları ve iCloud indirmeleri tahmini olabilir. Gerçekte kullanılabilir alan farklılık gösterebilir ve iOS göstergesinin güncellenmesi zaman alabilir."]
  ] },
  terms: { eyebrow: "Koşullar", title: "Kullanım Koşulları", intro: "PhotoRoll'u kullanarak bu koşulları kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayın.", updated: "Son güncelleme: 22 Ekim 2026", sections: [
    ["PhotoRoll'u kullanma", "PhotoRoll fotoğraflara göz atma, karşılaştırma, filtreleme ve düzenleme araçları sunar. Uygulamayla kullandığınız medyaya erişme ve onu yönetme hakkınız olmalıdır. Seçimlerinizden ve arşivinizdeki içerikten siz sorumlusunuz."],
    ["Tahminler ve öneriler", "Benzerlik grupları, analiz sonuçları, dosya boyutları ve tahmini alan tasarrufu yol gösterme amaçlıdır; eksik veya hatalı olabilir. Öğeleri inceleyin ve son durum için sistem Fotoğraflar arşivine bakın."],
    ["Silme işlemi onayınızı gerektirir", "Silinmek üzere işaretlenen öğeler, inceleyip silmeyi onaylayana kadar arşivinizde kalır. Sonrasında kurtarma olanağı sistem Fotoğraflar arşivine ve “Son Silinenler” durumuna bağlıdır. Saklamak istediğiniz içerikleri yedekleyin."],
    ["Üçüncü taraf hizmetleri", "PhotoRoll Apple Fotoğraflar, iCloud ve Apple coğrafi kodlama hizmetleriyle çalışabilir. Bu hizmetleri Apple sağlar ve ilgili Apple koşulları ile gizlilik uygulamaları geçerlidir. Ağ ücretlerini operatörünüz belirler."],
    ["Abonelikler ve tek seferlik satın alma", "PhotoRoll Pro haftalık, aylık ve yıllık otomatik yenilenen aboneliklerle veya sunulduğu bölgelerde tek seferlik ömür boyu satın alımla kullanılabilir. Apple satın alma sayfasında satın almadan önce fiyat, faturalandırma dönemi ve avantajlar gösterilir. Fiyatlar App Store bölgesine göre değişebilir. Ödeme, yenileme, iptal ve geri ödemeleri Apple kendi koşullarına göre yürütür. Aboneliği Apple Hesabı ayarlarından yönetebilir veya iptal edebilir, uygun satın alımları PhotoRoll'da geri yükleyebilirsiniz. Ömür boyu satın alma yenilenmez."],
    ["Kullanılabilirlik ve değişiklikler", "PhotoRoll güncellemeleriyle özellikler değişebilir. Yürürlükteki yasaların izin verdiği ölçüde her analiz veya tahminin hatasız olacağı garanti edilmez. Bu koşullar, yasaların sınırlandırmaya izin vermediği hakları kısıtlamaz."],
    ["İletişim", "Bu koşullarla ilgili sorularınız için <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a> adresine yazın."]
  ] }
};

pages.id = {
  privacy: { eyebrow: "Privasi", title: "Kebijakan Privasi", intro: "PhotoRoll membantu Anda meninjau dan mengatur perpustakaan foto. Analisis foto dan video, progres peninjauan, serta riwayat pengaturan diproses di perangkat Anda. PhotoRoll tidak mengunggah konten foto atau video ke servernya sendiri.", updated: "Terakhir diperbarui: 22 Oktober 2026", sections: [
    ["Informasi dan media", "PhotoRoll tidak memerlukan akun. Perpustakaan foto hanya diakses setelah Anda memberikan izin dan menggunakan fitur yang memerlukannya. Pemilihan foto, analisis kemiripan, dan riwayat pengaturan diproses secara lokal. PhotoRoll tidak mengunggah konten foto atau video ke servernya."],
    ["Informasi lokasi", "Saat meninjau foto dengan metadata lokasi atau menggunakan saran tempat, layanan geocoding Apple dapat menerima koordinat foto saat ini dan foto di sekitarnya untuk memberikan nama tempat. Konten gambar foto dan video tidak dikirim ke layanan tersebut."],
    ["Foto iCloud", "Jika Anda mengizinkan PhotoRoll mengunduh file asli, perpustakaan Foto sistem dapat mengunduh foto atau video asli dari iCloud melalui jaringan. Ini dapat menggunakan data seluler. Anda dapat menonaktifkan opsi ini di pengaturan PhotoRoll."],
    ["Jumlah pratinjau gratis harian", "PhotoRoll menyimpan tanggal dan jumlah pratinjau gratis yang digunakan di perangkat ini. Saat iCloud tersedia, jumlah tersebut dan pengenal instalasi yang dibuat secara acak disinkronkan melalui iCloud Key-Value Store Apple untuk menggabungkan penggunaan di perangkat Anda. Pengenal dan konten foto tidak disinkronkan. Jumlah harian yang kedaluwarsa akan dihapus."],
    ["Diagnostik pencarian tempat", "Untuk mengatasi pencarian tempat yang gagal, PhotoRoll dapat menyimpan file teks diagnostik di perangkat Anda yang berisi penyedia pencarian, hasil, dan detail kesalahan. File saat ini tidak mencakup koordinat foto atau nama tempat yang berhasil ditemukan dan tidak diunggah ke PhotoRoll."],
    ["Data lokal dan penghapusan", "Progres peninjauan, preferensi, dan riwayat pengaturan disimpan di perangkat dan tidak disinkronkan oleh PhotoRoll ke perangkat lain. Jumlah pratinjau gratis harian adalah pengecualian yang dijelaskan di atas. Menghapus app dapat menghapus data yang hanya tersimpan di perangkat. Foto yang ditandai untuk dihapus tetap berada di perpustakaan hingga Anda mengonfirmasi penghapusan melalui alur Foto sistem."],
    ["Perubahan dan kontak", "Kebijakan ini dapat diperbarui jika fitur atau penanganan data app berubah. Untuk pertanyaan privasi, hubungi <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Dukungan", title: "Bantuan PhotoRoll", intro: "Jawaban atas pertanyaan umum tentang akses foto, unduhan iCloud, dan pengaturan foto.", faqTitle: "Pertanyaan umum", contactTitle: "Kontak", contactText: "Untuk meminta bantuan atau melaporkan masalah, kirim email kepada kami. Jelaskan masalahnya dan sertakan model perangkat serta versi iOS. Jangan lampirkan foto pribadi kecuali memang diperlukan dan Anda bersedia membagikannya.", faqs: [
    ["Mengapa beberapa foto tidak muncul?", "Periksa izin Foto untuk PhotoRoll di Pengaturan iOS. Jika Anda memberikan akses terbatas, tambahkan foto lain melalui “Akses Foto” di pengaturan PhotoRoll."],
    ["Mengapa pratinjau foto iCloud tidak terbuka?", "Periksa koneksi jaringan dan pastikan “Unduhan iCloud” aktif di pengaturan PhotoRoll. Mengunduh file asli berukuran besar dapat memerlukan waktu dan menggunakan data seluler."],
    ["Apakah foto langsung dihapus setelah saya menandainya?", "Tidak. Foto yang ditandai untuk dihapus tetap berada di perpustakaan hingga Anda meninjaunya di area penghapusan tertunda dan mengonfirmasi penghapusan. App Foto sistem yang melakukan penghapusan."],
    ["Bagaimana cara mengelola atau memulihkan pembelian?", "Pulihkan pembelian dari layar pembelian PhotoRoll Pro. Kelola atau batalkan langganan di pengaturan langganan Akun Apple Anda. Harga dan periode saat ini ditampilkan di lembar pembelian Apple."],
    ["Mengapa nama tempat bisa salah?", "PhotoRoll meminta layanan geocoding Apple mencocokkan koordinat foto saat ini dan foto di sekitarnya dengan nama tempat. Hasilnya dapat berupa perkiraan atau tidak tersedia. Jika saran tampak salah, periksa lokasi foto di app Foto."],
    ["Mengapa perkiraan ruang berbeda dari ruang yang dibebaskan?", "Ukuran foto dan unduhan iCloud dapat berupa perkiraan. Ruang yang benar-benar tersedia mungkin berbeda dan iOS mungkin perlu waktu untuk memperbarui tampilannya."]
  ] },
  terms: { eyebrow: "Ketentuan", title: "Ketentuan Penggunaan", intro: "Dengan menggunakan PhotoRoll, Anda menyetujui ketentuan ini. Jika tidak setuju, jangan gunakan app.", updated: "Terakhir diperbarui: 22 Oktober 2026", sections: [
    ["Menggunakan PhotoRoll", "PhotoRoll menyediakan alat untuk menelusuri, membandingkan, memfilter, dan mengatur foto. Anda harus berhak mengakses dan mengelola media yang digunakan dengan app. Anda bertanggung jawab atas pilihan dan konten di perpustakaan Anda."],
    ["Perkiraan dan saran", "Grup kemiripan, hasil analisis, ukuran file, dan perkiraan penghematan ruang hanya sebagai panduan dan mungkin tidak lengkap atau akurat. Tinjau item dan gunakan perpustakaan Foto sistem untuk mengetahui status akhir."],
    ["Penghapusan memerlukan konfirmasi Anda", "Item yang ditandai untuk dihapus tetap berada di perpustakaan hingga Anda meninjau dan mengonfirmasi penghapusan. Setelah itu, pemulihan bergantung pada perpustakaan Foto sistem dan status “Baru Dihapus”. Cadangkan konten yang ingin Anda simpan."],
    ["Layanan pihak ketiga", "PhotoRoll dapat menggunakan Apple Foto, iCloud, dan layanan geocoding Apple. Layanan ini disediakan oleh Apple dan tunduk pada ketentuan serta praktik privasi Apple yang berlaku. Biaya jaringan ditentukan oleh penyedia Anda."],
    ["Langganan dan pembelian sekali bayar", "PhotoRoll Pro tersedia melalui langganan mingguan, bulanan, dan tahunan yang diperpanjang otomatis, atau pembelian seumur hidup sekali bayar jika tersedia. Lembar pembelian Apple menampilkan harga, periode tagihan, dan manfaat sebelum pembelian. Harga dapat berbeda menurut wilayah App Store. Apple menangani tagihan, perpanjangan, pembatalan, dan pengembalian dana sesuai ketentuannya. Anda dapat mengelola atau membatalkan langganan di pengaturan Akun Apple dan memulihkan pembelian yang memenuhi syarat di PhotoRoll. Pembelian seumur hidup tidak diperpanjang."],
    ["Ketersediaan dan perubahan", "Fitur dapat berubah saat PhotoRoll diperbarui. Sejauh diizinkan hukum, PhotoRoll disediakan tanpa jaminan bahwa setiap analisis atau perkiraan bebas dari kesalahan. Ketentuan ini tidak membatasi hak yang tidak dapat dibatasi menurut hukum yang berlaku."],
    ["Kontak", "Ada pertanyaan tentang ketentuan ini? Kirim email ke <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.vi = {
  privacy: { eyebrow: "Quyền riêng tư", title: "Chính sách quyền riêng tư", intro: "PhotoRoll giúp bạn xem lại và sắp xếp thư viện ảnh. Việc phân tích ảnh và video, tiến độ xem lại và lịch sử sắp xếp được xử lý trên thiết bị của bạn. PhotoRoll không tải nội dung ảnh hoặc video lên máy chủ riêng.", updated: "Cập nhật lần cuối: ngày 22 tháng 10 năm 2026", sections: [
    ["Thông tin và nội dung đa phương tiện", "PhotoRoll không yêu cầu tài khoản. Ứng dụng chỉ truy cập thư viện ảnh sau khi bạn cấp quyền và sử dụng tính năng cần quyền đó. Việc chọn ảnh, phân tích độ tương đồng và lịch sử sắp xếp được xử lý cục bộ. PhotoRoll không tải nội dung ảnh hoặc video lên máy chủ của mình."],
    ["Thông tin vị trí", "Khi bạn xem ảnh có siêu dữ liệu vị trí hoặc dùng gợi ý địa điểm, dịch vụ mã hóa địa lý của Apple có thể nhận tọa độ của ảnh hiện tại và các ảnh lân cận để cung cấp tên địa điểm. Hình ảnh trong ảnh và video không được gửi đến các dịch vụ này."],
    ["Ảnh iCloud", "Nếu bạn cho phép PhotoRoll tải bản gốc, thư viện Ảnh của hệ thống có thể tải bản gốc của ảnh hoặc video từ iCloud qua mạng. Việc này có thể sử dụng dữ liệu di động. Bạn có thể tắt tùy chọn này trong phần cài đặt PhotoRoll."],
    ["Số lượt xem trước miễn phí hằng ngày", "PhotoRoll lưu ngày và số lượt xem trước miễn phí đã dùng trên thiết bị này. Khi có iCloud, các số lượt này và mã định danh cài đặt được tạo ngẫu nhiên sẽ được đồng bộ qua iCloud Key-Value Store của Apple để cộng gộp mức sử dụng trên các thiết bị của bạn. Ứng dụng không đồng bộ mã định danh hoặc nội dung ảnh. Số lượt hằng ngày đã hết hạn sẽ bị xóa."],
    ["Chẩn đoán tra cứu địa điểm", "Để khắc phục lỗi tra cứu địa điểm, PhotoRoll có thể lưu tệp văn bản chẩn đoán trên thiết bị, gồm dịch vụ tra cứu, kết quả và chi tiết lỗi. Tệp hiện tại không có tọa độ ảnh hoặc tên địa điểm đã tra cứu thành công và không được tải lên PhotoRoll."],
    ["Dữ liệu cục bộ và việc xóa", "Tiến độ xem lại, tùy chọn và lịch sử sắp xếp được lưu trên thiết bị, không được PhotoRoll đồng bộ với thiết bị khác. Số lượt xem trước miễn phí hằng ngày là ngoại lệ nêu trên. Xóa ứng dụng có thể xóa dữ liệu chỉ lưu trên thiết bị. Ảnh được đánh dấu để xóa vẫn nằm trong thư viện cho đến khi bạn xác nhận xóa bằng quy trình của ứng dụng Ảnh hệ thống."],
    ["Thay đổi và liên hệ", "Chính sách này có thể được cập nhật nếu tính năng hoặc cách xử lý dữ liệu của ứng dụng thay đổi. Nếu có câu hỏi về quyền riêng tư, hãy liên hệ <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "Hỗ trợ", title: "Trợ giúp PhotoRoll", intro: "Câu trả lời cho các câu hỏi thường gặp về quyền truy cập ảnh, tải xuống iCloud và sắp xếp ảnh.", faqTitle: "Câu hỏi thường gặp", contactTitle: "Liên hệ", contactText: "Để được trợ giúp hoặc báo cáo vấn đề, hãy gửi email cho chúng tôi. Mô tả sự việc và cho biết kiểu thiết bị cùng phiên bản iOS. Không đính kèm ảnh riêng tư trừ khi cần thiết và bạn đồng ý chia sẻ.", faqs: [
    ["Vì sao một số ảnh không hiển thị?", "Kiểm tra quyền Ảnh của PhotoRoll trong Cài đặt iOS. Nếu bạn đã cấp quyền truy cập giới hạn, hãy thêm ảnh trong mục “Quyền truy cập ảnh” của phần cài đặt PhotoRoll."],
    ["Vì sao không xem trước được ảnh iCloud?", "Kiểm tra kết nối mạng và xác nhận “Tải xuống iCloud” đã bật trong phần cài đặt PhotoRoll. Tải bản gốc lớn có thể mất thời gian và dùng dữ liệu di động."],
    ["Ảnh có bị xóa ngay khi tôi đánh dấu không?", "Không. Ảnh được đánh dấu để xóa vẫn nằm trong thư viện cho đến khi bạn xem lại trong mục chờ xóa và xác nhận. Ứng dụng Ảnh hệ thống thực hiện việc xóa."],
    ["Làm cách nào để quản lý hoặc khôi phục giao dịch mua?", "Khôi phục giao dịch mua từ màn hình mua PhotoRoll Pro. Quản lý hoặc hủy đăng ký trong phần cài đặt đăng ký của Tài khoản Apple. Giá và thời hạn hiện tại được hiển thị trong bảng mua của Apple."],
    ["Vì sao tên địa điểm có thể không chính xác?", "PhotoRoll yêu cầu dịch vụ mã hóa địa lý của Apple đối chiếu tọa độ ảnh hiện tại và ảnh lân cận với tên địa điểm. Kết quả có thể chỉ gần đúng hoặc không có. Nếu gợi ý không chính xác, hãy kiểm tra vị trí trong ứng dụng Ảnh."],
    ["Vì sao dung lượng ước tính khác với dung lượng đã giải phóng?", "Kích thước ảnh và việc tải xuống iCloud có thể chỉ là ước tính. Dung lượng thực tế có thể khác và iOS có thể cần thời gian để cập nhật." ]
  ] },
  terms: { eyebrow: "Điều khoản", title: "Điều khoản sử dụng", intro: "Khi sử dụng PhotoRoll, bạn đồng ý với các điều khoản này. Nếu không đồng ý, vui lòng không sử dụng ứng dụng.", updated: "Cập nhật lần cuối: ngày 22 tháng 10 năm 2026", sections: [
    ["Sử dụng PhotoRoll", "PhotoRoll cung cấp công cụ duyệt, so sánh, lọc và sắp xếp ảnh. Bạn phải có quyền truy cập và quản lý nội dung đa phương tiện dùng với ứng dụng. Bạn chịu trách nhiệm về lựa chọn của mình và nội dung trong thư viện."],
    ["Ước tính và đề xuất", "Nhóm ảnh tương tự, kết quả phân tích, kích thước tệp và dung lượng ước tính tiết kiệm chỉ nhằm tham khảo, có thể chưa đầy đủ hoặc không chính xác. Hãy xem lại từng mục và dựa vào thư viện Ảnh hệ thống để biết trạng thái cuối cùng."],
    ["Cần xác nhận trước khi xóa", "Mục được đánh dấu để xóa vẫn nằm trong thư viện cho đến khi bạn xem lại và xác nhận. Khả năng khôi phục sau đó phụ thuộc vào thư viện Ảnh hệ thống và trạng thái “Đã xóa gần đây”. Hãy sao lưu nội dung bạn muốn giữ."],
    ["Dịch vụ bên thứ ba", "PhotoRoll có thể sử dụng Apple Ảnh, iCloud và dịch vụ mã hóa địa lý của Apple. Apple cung cấp các dịch vụ này và các điều khoản cùng quy định quyền riêng tư tương ứng của Apple được áp dụng. Nhà mạng của bạn quyết định phí mạng."],
    ["Đăng ký và mua một lần", "PhotoRoll Pro có các gói đăng ký tự động gia hạn theo tuần, tháng và năm; tại nơi có cung cấp, bạn cũng có thể mua trọn đời một lần. Bảng mua của Apple hiển thị giá, chu kỳ thanh toán và quyền lợi trước khi mua. Giá có thể khác nhau theo khu vực App Store. Apple xử lý thanh toán, gia hạn, hủy và hoàn tiền theo điều khoản của Apple. Bạn có thể quản lý hoặc hủy đăng ký trong cài đặt Tài khoản Apple và khôi phục giao dịch đủ điều kiện trong PhotoRoll. Gói trọn đời không tự gia hạn."],
    ["Tính khả dụng và thay đổi", "Tính năng có thể thay đổi khi PhotoRoll được cập nhật. Trong phạm vi pháp luật cho phép, ứng dụng được cung cấp mà không bảo đảm mọi phân tích hoặc ước tính đều không có lỗi. Điều khoản này không giới hạn quyền mà pháp luật hiện hành không cho phép giới hạn."],
    ["Liên hệ", "Nếu có câu hỏi về điều khoản, hãy gửi email đến <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

pages.th = {
  privacy: { eyebrow: "ความเป็นส่วนตัว", title: "นโยบายความเป็นส่วนตัว", intro: "PhotoRoll ช่วยให้คุณตรวจดูและจัดระเบียบคลังรูปภาพ การวิเคราะห์รูปภาพและวิดีโอ ความคืบหน้าในการตรวจดู และประวัติการจัดระเบียบจะประมวลผลบนอุปกรณ์ของคุณ PhotoRoll ไม่อัปโหลดเนื้อหารูปภาพหรือวิดีโอไปยังเซิร์ฟเวอร์ของตนเอง", updated: "อัปเดตล่าสุด: 22 ตุลาคม 2026", sections: [
    ["ข้อมูลและสื่อ", "PhotoRoll ไม่ต้องใช้บัญชี แอปจะเข้าถึงคลังรูปภาพหลังจากคุณอนุญาตและใช้คุณสมบัติที่ต้องใช้สิทธิ์ดังกล่าวเท่านั้น การเลือกรูปภาพ การวิเคราะห์ความคล้ายคลึง และประวัติการจัดระเบียบจะประมวลผลในอุปกรณ์ PhotoRoll ไม่อัปโหลดเนื้อหารูปภาพหรือวิดีโอไปยังเซิร์ฟเวอร์"],
    ["ข้อมูลตำแหน่ง", "เมื่อคุณตรวจดูรูปภาพที่มีข้อมูลเมตาตำแหน่งหรือใช้คำแนะนำสถานที่ บริการระบุพิกัดภูมิศาสตร์ของ Apple อาจได้รับพิกัดของรูปภาพปัจจุบันและรูปภาพใกล้เคียงเพื่อแสดงชื่อสถานที่ ระบบจะไม่ส่งเนื้อหาภาพของรูปภาพหรือวิดีโอไปยังบริการเหล่านั้น"],
    ["รูปภาพ iCloud", "หากคุณอนุญาตให้ PhotoRoll ดาวน์โหลดไฟล์ต้นฉบับ คลังรูปภาพของระบบอาจดาวน์โหลดรูปภาพหรือวิดีโอต้นฉบับจาก iCloud ผ่านเครือข่าย ซึ่งอาจใช้ข้อมูลเซลลูลาร์ คุณปิดตัวเลือกนี้ได้ในการตั้งค่า PhotoRoll"],
    ["จำนวนตัวอย่างฟรีรายวัน", "PhotoRoll บันทึกวันที่และจำนวนตัวอย่างฟรีที่ใช้ไว้ในอุปกรณ์นี้ เมื่อใช้ iCloud ได้ ระบบจะซิงค์จำนวนดังกล่าวและตัวระบุการติดตั้งที่สร้างขึ้นแบบสุ่มผ่าน iCloud Key-Value Store ของ Apple เพื่อรวมการใช้งานระหว่างอุปกรณ์ของคุณ ระบบจะไม่ซิงค์ตัวระบุหรือเนื้อหารูปภาพ และจะลบจำนวนรายวันที่หมดอายุ"],
    ["ข้อมูลวินิจฉัยการค้นหาสถานที่", "เพื่อแก้ไขปัญหาการค้นหาสถานที่ไม่สำเร็จ PhotoRoll อาจบันทึกไฟล์ข้อความวินิจฉัยไว้ในอุปกรณ์ ซึ่งมีผู้ให้บริการค้นหา ผลลัพธ์ และรายละเอียดข้อผิดพลาด ไฟล์ปัจจุบันไม่มีพิกัดรูปภาพหรือชื่อสถานที่ที่ค้นหาได้สำเร็จ และจะไม่อัปโหลดไปยัง PhotoRoll"],
    ["ข้อมูลในอุปกรณ์และการลบ", "ความคืบหน้าในการตรวจดู การตั้งค่า และประวัติการจัดระเบียบจะจัดเก็บในอุปกรณ์ และ PhotoRoll จะไม่ซิงค์กับอุปกรณ์อื่น จำนวนตัวอย่างฟรีรายวันเป็นข้อยกเว้นตามที่อธิบายไว้ข้างต้น การลบแอปอาจลบข้อมูลที่เก็บไว้เฉพาะในอุปกรณ์ รูปภาพที่ทำเครื่องหมายเพื่อลบจะยังอยู่ในคลังจนกว่าคุณจะยืนยันการลบผ่านขั้นตอนของแอปรูปภาพระบบ"],
    ["การเปลี่ยนแปลงและติดต่อ", "เราอาจปรับปรุงนโยบายนี้เมื่อคุณสมบัติหรือการจัดการข้อมูลของแอปเปลี่ยนแปลง หากมีคำถามเกี่ยวกับความเป็นส่วนตัว โปรดติดต่อ <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>"]
  ] },
  support: { eyebrow: "การช่วยเหลือ", title: "ความช่วยเหลือ PhotoRoll", intro: "คำตอบสำหรับคำถามทั่วไปเกี่ยวกับการเข้าถึงรูปภาพ การดาวน์โหลดจาก iCloud และการจัดระเบียบรูปภาพ", faqTitle: "คำถามที่พบบ่อย", contactTitle: "ติดต่อ", contactText: "หากต้องการความช่วยเหลือหรือแจ้งปัญหา โปรดส่งอีเมลถึงเรา อธิบายสิ่งที่เกิดขึ้น พร้อมระบุรุ่นอุปกรณ์และเวอร์ชัน iOS อย่าแนบรูปภาพส่วนตัว เว้นแต่จำเป็นและคุณยินดีแชร์", faqs: [
    ["ทำไมรูปภาพบางรูปไม่แสดง?", "ตรวจสอบสิทธิ์รูปภาพของ PhotoRoll ในการตั้งค่า iOS หากให้สิทธิ์การเข้าถึงแบบจำกัด ให้เพิ่มรูปภาพได้ที่ “การเข้าถึงรูปภาพ” ในการตั้งค่า PhotoRoll"],
    ["ทำไมดูตัวอย่างรูปภาพ iCloud ไม่ได้?", "ตรวจสอบการเชื่อมต่อเครือข่ายและเปิด “ดาวน์โหลด iCloud” ในการตั้งค่า PhotoRoll การดาวน์โหลดต้นฉบับขนาดใหญ่อาจใช้เวลาและใช้ข้อมูลเซลลูลาร์"],
    ["รูปภาพจะถูกลบทันทีที่ทำเครื่องหมายหรือไม่?", "ไม่ รูปภาพที่ทำเครื่องหมายเพื่อลบจะยังอยู่ในคลังจนกว่าคุณจะตรวจดูในส่วนรายการรอลบและยืนยันการลบ แอปรูปภาพระบบจะดำเนินการลบ"],
    ["จัดการหรือกู้คืนรายการซื้อได้อย่างไร?", "กู้คืนรายการซื้อจากหน้าซื้อ PhotoRoll Pro จัดการหรือยกเลิกการสมัครรับได้ในการตั้งค่าการสมัครรับของบัญชี Apple ราคาและระยะเวลาจะแสดงในหน้าต่างซื้อของ Apple"],
    ["ทำไมชื่อสถานที่จึงไม่ถูกต้องได้?", "PhotoRoll ขอให้บริการระบุพิกัดภูมิศาสตร์ของ Apple จับคู่พิกัดของรูปภาพปัจจุบันและรูปภาพใกล้เคียงกับชื่อสถานที่ ผลลัพธ์อาจเป็นเพียงตำแหน่งโดยประมาณหรือไม่มีข้อมูล หากคำแนะนำไม่ถูกต้อง โปรดตรวจสอบตำแหน่งในแอปรูปภาพ"],
    ["ทำไมพื้นที่โดยประมาณจึงต่างจากพื้นที่ที่คืนมา?", "ขนาดรูปภาพและการดาวน์โหลด iCloud อาจเป็นค่าประมาณ พื้นที่ว่างจริงอาจแตกต่างออกไป และ iOS อาจใช้เวลาอัปเดตข้อมูล"]
  ] },
  terms: { eyebrow: "ข้อกำหนด", title: "ข้อกำหนดการใช้งาน", intro: "เมื่อใช้ PhotoRoll ถือว่าคุณยอมรับข้อกำหนดเหล่านี้ หากไม่ยอมรับ โปรดอย่าใช้แอป", updated: "อัปเดตล่าสุด: 22 ตุลาคม 2026", sections: [
    ["การใช้ PhotoRoll", "PhotoRoll มีเครื่องมือให้เรียกดู เปรียบเทียบ กรอง และจัดระเบียบรูปภาพ คุณต้องมีสิทธิ์เข้าถึงและจัดการสื่อที่ใช้กับแอป และรับผิดชอบต่อการเลือกของคุณและเนื้อหาในคลังรูปภาพ"],
    ["ค่าประมาณและคำแนะนำ", "กลุ่มรูปภาพที่คล้ายกัน ผลการวิเคราะห์ ขนาดไฟล์ และพื้นที่ที่คาดว่าจะประหยัดเป็นข้อมูลประกอบ อาจไม่ครบถ้วนหรือไม่ถูกต้อง โปรดตรวจดูรายการและยึดสถานะสุดท้ายในคลังรูปภาพระบบ"],
    ["ต้องยืนยันก่อนลบ", "รายการที่ทำเครื่องหมายเพื่อลบจะยังอยู่ในคลังจนกว่าคุณจะตรวจดูและยืนยันการลบ หลังจากนั้น การกู้คืนขึ้นอยู่กับคลังรูปภาพระบบและสถานะใน “ลบล่าสุด” โปรดสำรองเนื้อหาที่ต้องการเก็บไว้"],
    ["บริการของบุคคลที่สาม", "PhotoRoll อาจใช้ Apple Photos, iCloud และบริการระบุพิกัดภูมิศาสตร์ของ Apple บริการเหล่านี้ให้บริการโดย Apple และอยู่ภายใต้ข้อกำหนดและแนวปฏิบัติด้านความเป็นส่วนตัวที่เกี่ยวข้องของ Apple ผู้ให้บริการเครือข่ายเป็นผู้กำหนดค่าบริการ"],
    ["การสมัครรับและการซื้อครั้งเดียว", "PhotoRoll Pro มีการสมัครรับแบบต่ออายุอัตโนมัติรายสัปดาห์ รายเดือน และรายปี หรือการซื้อแบบตลอดชีพครั้งเดียวในพื้นที่ที่มีให้บริการ หน้าต่างซื้อของ Apple จะแสดงราคา รอบการเรียกเก็บเงิน และสิทธิประโยชน์ก่อนซื้อ ราคาอาจแตกต่างตามภูมิภาค App Store Apple จัดการการเรียกเก็บเงิน ต่ออายุ ยกเลิก และคืนเงินตามข้อกำหนดของ Apple คุณจัดการหรือยกเลิกการสมัครรับได้ในการตั้งค่าบัญชี Apple และกู้คืนรายการซื้อที่เข้าเกณฑ์ใน PhotoRoll การซื้อแบบตลอดชีพไม่มีการต่ออายุ"],
    ["ความพร้อมใช้งานและการเปลี่ยนแปลง", "คุณสมบัติอาจเปลี่ยนแปลงเมื่ออัปเดต PhotoRoll ภายในขอบเขตที่กฎหมายอนุญาต เราไม่รับประกันว่าการวิเคราะห์หรือค่าประมาณทุกอย่างจะไม่มีข้อผิดพลาด ข้อกำหนดนี้ไม่จำกัดสิทธิ์ที่กฎหมายที่ใช้บังคับไม่อนุญาตให้จำกัด"],
    ["ติดต่อ", "หากมีคำถามเกี่ยวกับข้อกำหนด โปรดส่งอีเมลถึง <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>"]
  ] }
};

pages.hi = {
  privacy: { eyebrow: "गोपनीयता", title: "गोपनीयता नीति", intro: "PhotoRoll आपकी फ़ोटो लाइब्रेरी की समीक्षा और व्यवस्था करने में मदद करता है। फ़ोटो और वीडियो का विश्लेषण, समीक्षा की प्रगति और व्यवस्था का इतिहास आपके डिवाइस पर संसाधित होते हैं। PhotoRoll फ़ोटो या वीडियो की सामग्री अपने सर्वर पर अपलोड नहीं करता।", updated: "अंतिम अपडेट: 22 अक्टूबर 2026", sections: [
    ["जानकारी और मीडिया", "PhotoRoll के लिए खाते की आवश्यकता नहीं है। आपकी फ़ोटो लाइब्रेरी तक पहुँच तभी होती है जब आप अनुमति देते हैं और ऐसी सुविधा इस्तेमाल करते हैं जिसे इसकी आवश्यकता हो। फ़ोटो चुनना, समानता का विश्लेषण और व्यवस्था का इतिहास डिवाइस पर ही संसाधित होते हैं। PhotoRoll फ़ोटो या वीडियो की सामग्री अपने सर्वर पर अपलोड नहीं करता।"],
    ["स्थान की जानकारी", "स्थान मेटाडेटा वाली फ़ोटो की समीक्षा करते समय या जगह के सुझाव इस्तेमाल करते समय, Apple की जियोकोडिंग सेवाओं को जगह का नाम बताने के लिए मौजूदा और आस-पास की फ़ोटो के निर्देशांक मिल सकते हैं। फ़ोटो और वीडियो की छवि सामग्री उन सेवाओं को नहीं भेजी जाती।"],
    ["iCloud फ़ोटो", "यदि आप PhotoRoll को मूल फ़ाइलें डाउनलोड करने देते हैं, तो सिस्टम फ़ोटो लाइब्रेरी नेटवर्क के ज़रिए iCloud से फ़ोटो या वीडियो की मूल फ़ाइल डाउनलोड कर सकती है। इसमें मोबाइल डेटा लग सकता है। आप PhotoRoll सेटिंग में यह विकल्प बंद कर सकते हैं।"],
    ["रोज़ाना मुफ़्त पूर्वावलोकन की संख्या", "PhotoRoll इस डिवाइस पर मुफ़्त पूर्वावलोकनों के इस्तेमाल की तारीख और संख्या सहेजता है। iCloud उपलब्ध होने पर, आपके डिवाइसों का इस्तेमाल जोड़ने के लिए ये गणनाएँ और बेतरतीब बनाया गया इंस्टॉलेशन पहचानकर्ता Apple के iCloud Key-Value Store से सिंक किए जाते हैं। फ़ोटो पहचानकर्ता या सामग्री सिंक नहीं होती। समाप्त हो चुकी दैनिक गणनाएँ हटा दी जाती हैं।"],
    ["जगह खोजने की निदान जानकारी", "जगह खोज विफल होने की समस्या सुलझाने के लिए PhotoRoll आपके डिवाइस पर एक निदान टेक्स्ट फ़ाइल सहेज सकता है, जिसमें सेवा, परिणाम और त्रुटि का विवरण होता है। मौजूदा फ़ाइल में फ़ोटो के निर्देशांक या सफलतापूर्वक मिले जगह के नाम नहीं होते और इसे PhotoRoll पर अपलोड नहीं किया जाता।"],
    ["डिवाइस पर डेटा और हटाना", "समीक्षा की प्रगति, प्राथमिकताएँ और व्यवस्था का इतिहास आपके डिवाइस पर सहेजे जाते हैं और PhotoRoll इन्हें अन्य डिवाइसों से सिंक नहीं करता। रोज़ाना मुफ़्त पूर्वावलोकन की गणनाएँ ऊपर बताया गया अपवाद हैं। ऐप हटाने से केवल डिवाइस पर सहेजा डेटा मिट सकता है। हटाने के लिए चिह्नित फ़ोटो आपकी लाइब्रेरी में तब तक रहती हैं जब तक आप सिस्टम फ़ोटो प्रक्रिया से हटाने की पुष्टि नहीं करते।"],
    ["बदलाव और संपर्क", "ऐप की सुविधाएँ या डेटा संभालने का तरीका बदलने पर यह नीति अपडेट हो सकती है। गोपनीयता संबंधी प्रश्नों के लिए <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a> पर संपर्क करें।"]
  ] },
  support: { eyebrow: "सहायता", title: "PhotoRoll सहायता", intro: "फ़ोटो ऐक्सेस, iCloud डाउनलोड और फ़ोटो व्यवस्थित करने के बारे में आम सवालों के जवाब।", faqTitle: "अक्सर पूछे जाने वाले प्रश्न", contactTitle: "संपर्क", contactText: "मदद पाने या समस्या बताने के लिए हमें ईमेल करें। क्या हुआ, अपने डिवाइस का मॉडल और iOS संस्करण बताएँ। निजी फ़ोटो तभी संलग्न करें जब वे आवश्यक हों और आप उन्हें साझा करना चाहें।", faqs: [
    ["कुछ फ़ोटो क्यों नहीं दिख रही हैं?", "iOS सेटिंग में PhotoRoll की फ़ोटो अनुमति जाँचें। सीमित ऐक्सेस दिया हो तो PhotoRoll सेटिंग में “फ़ोटो ऐक्सेस” से और फ़ोटो जोड़ें।"],
    ["iCloud फ़ोटो का पूर्वावलोकन क्यों नहीं खुलता?", "नेटवर्क कनेक्शन जाँचें और PhotoRoll सेटिंग में “iCloud डाउनलोड” चालू होने की पुष्टि करें। बड़ी मूल फ़ाइल डाउनलोड होने में समय लग सकता है और मोबाइल डेटा इस्तेमाल हो सकता है।"],
    ["क्या चिह्नित करते ही फ़ोटो हट जाती हैं?", "नहीं। हटाने के लिए चिह्नित फ़ोटो लंबित हटाने वाले हिस्से में समीक्षा और पुष्टि होने तक लाइब्रेरी में रहती हैं। सिस्टम फ़ोटो ऐप हटाने की प्रक्रिया पूरी करता है।"],
    ["खरीद को कैसे प्रबंधित या पुनर्स्थापित करूँ?", "PhotoRoll Pro खरीद स्क्रीन से खरीद पुनर्स्थापित करें। Apple खाते की सदस्यता सेटिंग में सदस्यता प्रबंधित या रद्द करें। लागू कीमत और अवधि Apple खरीद शीट में दिखाई जाती है।"],
    ["जगह का नाम गलत क्यों हो सकता है?", "PhotoRoll, मौजूदा और आस-पास की फ़ोटो के निर्देशांकों से जगह के नाम मिलाने के लिए Apple की जियोकोडिंग सेवा का अनुरोध करता है। परिणाम अनुमानित हो सकता है या उपलब्ध न हो। सुझाव गलत लगे तो फ़ोटो ऐप में स्थान जाँचें।"],
    ["अनुमानित जगह और खाली हुई जगह अलग क्यों हैं?", "फ़ोटो का आकार और iCloud डाउनलोड अनुमानित हो सकते हैं। वास्तव में उपलब्ध जगह अलग हो सकती है और iOS को दिखाया गया आँकड़ा अपडेट करने में समय लग सकता है।"]
  ] },
  terms: { eyebrow: "शर्तें", title: "उपयोग की शर्तें", intro: "PhotoRoll इस्तेमाल करके आप इन शर्तों से सहमत होते हैं। सहमत न हों तो ऐप इस्तेमाल न करें।", updated: "अंतिम अपडेट: 22 अक्टूबर 2026", sections: [
    ["PhotoRoll का उपयोग", "PhotoRoll फ़ोटो देखने, तुलना करने, फ़िल्टर करने और व्यवस्थित करने के टूल देता है। ऐप में इस्तेमाल मीडिया तक पहुँचने और उसे प्रबंधित करने का अधिकार आपके पास होना चाहिए। अपने चुनावों और लाइब्रेरी की सामग्री के लिए आप ज़िम्मेदार हैं।"],
    ["अनुमान और सुझाव", "समानता समूह, विश्लेषण के परिणाम, फ़ाइल आकार और अनुमानित जगह बचत केवल मार्गदर्शन के लिए हैं; वे अधूरे या गलत हो सकते हैं। आइटम की समीक्षा करें और अंतिम स्थिति के लिए सिस्टम फ़ोटो लाइब्रेरी देखें।"],
    ["हटाने के लिए आपकी पुष्टि आवश्यक है", "हटाने के लिए चिह्नित आइटम समीक्षा और पुष्टि होने तक लाइब्रेरी में रहते हैं। उसके बाद उन्हें वापस पाने की संभावना सिस्टम फ़ोटो लाइब्रेरी और “हाल ही में हटाए गए” स्थिति पर निर्भर करती है। जिस सामग्री को रखना चाहते हैं उसका बैकअप लें।"],
    ["तृतीय-पक्ष सेवाएँ", "PhotoRoll Apple फ़ोटो, iCloud और Apple जियोकोडिंग सेवाओं का उपयोग कर सकता है। ये सेवाएँ Apple देता है और उन पर Apple की लागू शर्तें तथा गोपनीयता प्रक्रियाएँ लागू होती हैं। नेटवर्क शुल्क आपका प्रदाता तय करता है।"],
    ["सदस्यता और एकमुश्त खरीद", "PhotoRoll Pro साप्ताहिक, मासिक और वार्षिक स्वतः नवीनीकृत सदस्यताओं या उपलब्ध क्षेत्रों में एकमुश्त आजीवन खरीद के रूप में उपलब्ध है। खरीद से पहले Apple की खरीद शीट लागू कीमत, बिलिंग अवधि और सुविधाएँ दिखाती है। App Store क्षेत्र के अनुसार कीमतें बदल सकती हैं। Apple अपनी शर्तों के अनुसार भुगतान, नवीनीकरण, रद्दीकरण और रिफ़ंड संभालता है। Apple खाते की सदस्यता सेटिंग से सदस्यता प्रबंधित या रद्द करें और योग्य खरीद PhotoRoll में पुनर्स्थापित करें। आजीवन खरीद नवीनीकृत नहीं होती।"],
    ["उपलब्धता और बदलाव", "PhotoRoll अपडेट होने पर सुविधाएँ बदल सकती हैं। लागू कानून जितनी अनुमति देता है, उसके भीतर हर विश्लेषण या अनुमान के त्रुटिहीन होने की गारंटी नहीं है। ये शर्तें ऐसे अधिकारों को सीमित नहीं करतीं जिन्हें लागू कानून के तहत सीमित नहीं किया जा सकता।"],
    ["संपर्क", "इन शर्तों के बारे में प्रश्न हों तो <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a> पर ईमेल करें।"]
  ] }
};

pages.ar = {
  privacy: { eyebrow: "الخصوصية", title: "سياسة الخصوصية", intro: "يساعدك PhotoRoll على مراجعة مكتبة الصور وتنظيمها. تتم معالجة تحليل الصور ومقاطع الفيديو وتقدم المراجعة وسجل التنظيم على جهازك. لا يرفع PhotoRoll محتوى الصور أو مقاطع الفيديو إلى خوادمه الخاصة.", updated: "آخر تحديث: 22 أكتوبر 2026", sections: [
    ["المعلومات والوسائط", "لا يتطلب PhotoRoll إنشاء حساب. ولا يصل إلى مكتبة الصور إلا بعد منح الإذن واستخدام ميزة تحتاج إليه. تتم معالجة اختيار الصور وتحليل التشابه وسجل التنظيم محلياً. لا يرفع PhotoRoll محتوى الصور أو مقاطع الفيديو إلى خوادمه."],
    ["معلومات الموقع", "عند مراجعة صور تتضمن بيانات وصفية للموقع أو استخدام اقتراحات الأماكن، قد تتلقى خدمات الترميز الجغرافي من Apple إحداثيات الصورة الحالية والصور القريبة لتحديد أسماء الأماكن. لا يُرسل محتوى الصور أو مقاطع الفيديو المرئي إلى تلك الخدمات."],
    ["صور iCloud", "إذا سمحت لـ PhotoRoll بتنزيل النسخ الأصلية، فقد تنزّل مكتبة الصور في النظام النسخة الأصلية لصورة أو مقطع فيديو من iCloud عبر الشبكة. وقد يستهلك ذلك بيانات الهاتف المحمول. يمكنك إيقاف هذا الخيار من إعدادات PhotoRoll."],
    ["عدد المعاينات المجانية اليومية", "يحفظ PhotoRoll على هذا الجهاز تاريخ وعدد المعاينات المجانية المستخدمة. عند توفر iCloud، تتم مزامنة هذه الأعداد ومعرّف تثبيت عشوائي عبر iCloud Key-Value Store من Apple لضم الاستخدام بين أجهزتك. لا تتم مزامنة معرّفات الصور أو محتواها. تُحذف الأعداد اليومية المنتهية صلاحيتها."],
    ["بيانات تشخيص البحث عن الأماكن", "لمعالجة حالات فشل البحث عن الأماكن، قد يحفظ PhotoRoll على جهازك ملفاً نصياً للتشخيص يتضمن مزود البحث والنتيجة وتفاصيل الخطأ. لا يتضمن الملف الحالي إحداثيات الصور أو أسماء الأماكن التي تم تحديدها بنجاح، ولا يُرفع إلى PhotoRoll."],
    ["البيانات المحلية والحذف", "يُحفظ تقدم المراجعة والتفضيلات وسجل التنظيم على جهازك ولا يزامنها PhotoRoll مع أجهزة أخرى. تُعد أعداد المعاينات المجانية اليومية الاستثناء الموضح أعلاه. قد يؤدي حذف التطبيق إلى إزالة البيانات المحفوظة على الجهاز فقط. تظل الصور المحددة للحذف في مكتبتك حتى تؤكد حذفها من خلال خطوات تطبيق الصور في النظام."],
    ["التغييرات والتواصل", "قد نحدّث هذه السياسة إذا تغيرت ميزات التطبيق أو طريقة معالجة البيانات. للاستفسارات المتعلقة بالخصوصية، تواصل معنا عبر <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] },
  support: { eyebrow: "الدعم", title: "مساعدة PhotoRoll", intro: "إجابات عن الأسئلة الشائعة حول الوصول إلى الصور وتنزيلات iCloud وتنظيم الصور.", faqTitle: "الأسئلة الشائعة", contactTitle: "التواصل", contactText: "للحصول على المساعدة أو الإبلاغ عن مشكلة، أرسل إلينا رسالة بريد إلكتروني. اشرح ما حدث وأدرج طراز جهازك وإصدار iOS. لا ترفق صوراً خاصة إلا إذا كانت ضرورية وكنت توافق على مشاركتها.", faqs: [
    ["لماذا لا تظهر بعض الصور؟", "تحقق من إذن الصور لتطبيق PhotoRoll في إعدادات iOS. إذا منحت وصولاً محدوداً، فأضف صوراً أخرى من «الوصول إلى الصور» في إعدادات PhotoRoll."],
    ["لماذا لا تظهر معاينة صورة iCloud؟", "تحقق من اتصال الشبكة ومن تشغيل «تنزيل iCloud» في إعدادات PhotoRoll. قد يستغرق تنزيل نسخة أصلية كبيرة وقتاً وقد يستخدم بيانات الهاتف المحمول."],
    ["هل تُحذف الصور بمجرد تحديدها؟", "لا. تظل الصور المحددة للحذف في مكتبتك حتى تراجعها في قسم الحذف المعلّق وتؤكد الحذف. يتولى تطبيق الصور في النظام تنفيذ الحذف."],
    ["كيف أدير عملية شراء أو أستعيدها؟", "استعد عمليات الشراء من شاشة شراء PhotoRoll Pro. يمكنك إدارة الاشتراك أو إلغاؤه من إعدادات الاشتراكات في حساب Apple. يظهر السعر والمدة في نافذة الشراء من Apple."],
    ["لماذا قد يكون اسم المكان غير صحيح؟", "يطلب PhotoRoll من خدمة الترميز الجغرافي من Apple مطابقة إحداثيات الصورة الحالية والصور القريبة بأسماء الأماكن. قد تكون النتيجة تقريبية أو غير متاحة. إذا بدا الاقتراح غير صحيح، فتحقق من موقع الصورة في تطبيق الصور."],
    ["لماذا تختلف المساحة المقدرة عن المساحة التي تم توفيرها؟", "قد تكون أحجام الصور وتنزيلات iCloud تقديرية. قد تختلف المساحة المتاحة فعلياً وقد يحتاج iOS إلى بعض الوقت لتحديث الرقم المعروض."]
  ] },
  terms: { eyebrow: "الشروط", title: "شروط الاستخدام", intro: "باستخدام PhotoRoll، فإنك توافق على هذه الشروط. إذا لم توافق، فلا تستخدم التطبيق.", updated: "آخر تحديث: 22 أكتوبر 2026", sections: [
    ["استخدام PhotoRoll", "يوفر PhotoRoll أدوات لتصفح الصور ومقارنتها وتصفيتها وتنظيمها. يجب أن يكون لديك الحق في الوصول إلى الوسائط التي تستخدمها مع التطبيق وإدارتها. أنت مسؤول عن اختياراتك ومحتوى مكتبتك."],
    ["التقديرات والاقتراحات", "مجموعات التشابه ونتائج التحليل وأحجام الملفات والمساحة المقدرة التي يمكن توفيرها هي معلومات إرشادية وقد تكون غير مكتملة أو غير دقيقة. راجع العناصر واعتمد على مكتبة الصور في النظام لمعرفة الحالة النهائية."],
    ["يتطلب الحذف تأكيدك", "تظل العناصر المحددة للحذف في مكتبتك حتى تراجعها وتؤكد حذفها. بعد التأكيد، يعتمد الاسترداد على مكتبة الصور في النظام وحالة «المحذوفة مؤخراً». احتفظ بنسخ احتياطية من المحتوى الذي تريد الاحتفاظ به."],
    ["خدمات الجهات الخارجية", "قد يستخدم PhotoRoll تطبيق Apple Photos وiCloud وخدمات الترميز الجغرافي من Apple. تقدم Apple هذه الخدمات وتخضع لشروطها وممارسات الخصوصية المعمول بها. يحدد مزود الخدمة لديك رسوم الشبكة."],
    ["الاشتراكات والشراء لمرة واحدة", "يتوفر PhotoRoll Pro باشتراكات أسبوعية وشهرية وسنوية تتجدد تلقائياً، أو بشراء لمرة واحدة مدى الحياة في المناطق التي يتوفر فيها. تعرض نافذة شراء Apple السعر وفترة الفوترة والمزايا قبل الشراء. قد تختلف الأسعار حسب منطقة App Store. تتولى Apple الفوترة والتجديد والإلغاء واسترداد الأموال وفقاً لشروطها. يمكنك إدارة الاشتراك أو إلغاؤه من إعدادات حساب Apple، واستعادة عمليات الشراء المؤهلة في PhotoRoll. لا يتجدد الشراء مدى الحياة."],
    ["التوفر والتغييرات", "قد تتغير الميزات مع تحديثات PhotoRoll. إلى الحد الذي يسمح به القانون المعمول به، يُقدم التطبيق من دون ضمان خلو جميع التحليلات أو التقديرات من الأخطاء. لا تحد هذه الشروط من الحقوق التي لا يسمح القانون المعمول به بتقييدها."],
    ["التواصل", "للاستفسار عن هذه الشروط، أرسل بريداً إلكترونياً إلى <a href=\"mailto:classicalxie@163.com\">classicalxie@163.com</a>."]
  ] }
};

const page = document.body.dataset.page;
const params = new URLSearchParams(location.search);
const requested = params.get("lang") || navigator.language;
const normalizedLanguage = requested.toLowerCase();
const languageAliases = {
  ar: "ar", "ar-sa": "ar", de: "de", "de-de": "de", en: "en", "en-us": "en", "en-gb": "en-GB",
  es: "es", "es-es": "es", fr: "fr", "fr-fr": "fr", hi: "hi", id: "id", it: "it", ja: "ja", ko: "ko",
  "pt-br": "pt-BR", "pt-pt": "pt-PT", ru: "ru", th: "th", tr: "tr", vi: "vi",
  "zh-hans": "zh-Hans", "zh-cn": "zh-Hans", "zh-sg": "zh-Hans", "zh-hant": "zh-Hant", "zh-tw": "zh-Hant", "zh-hk": "zh-Hant", "zh-mo": "zh-Hant"
};
const language = languageAliases[normalizedLanguage]
  || (normalizedLanguage.startsWith("zh-hant") ? "zh-Hant" : normalizedLanguage.startsWith("zh-hans") ? "zh-Hans" : null)
  || languageAliases[normalizedLanguage.split("-")[0]] || "en";
const contentLanguage = language === "en-GB" ? "en" : language;
const copy = pages[contentLanguage][page];
document.documentElement.lang = language;
document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
document.title = `${copy.title} — PhotoRoll`;
const description = document.querySelector('meta[name="description"]');
if (description) description.content = copy.intro;
const labelsByLanguage = {
  ar: { supportNav: "الدعم", termsNav: "شروط الاستخدام", privacyNav: "الخصوصية" },
  de: { supportNav: "Support", termsNav: "Nutzungsbedingungen", privacyNav: "Datenschutz" },
  en: { supportNav: "Support", termsNav: "Terms of Use", privacyNav: "Privacy" },
  es: { supportNav: "Soporte", termsNav: "Condiciones de uso", privacyNav: "Privacidad" },
  fr: { supportNav: "Assistance", termsNav: "Conditions d’utilisation", privacyNav: "Confidentialité" },
  hi: { supportNav: "सहायता", termsNav: "उपयोग की शर्तें", privacyNav: "गोपनीयता" },
  id: { supportNav: "Dukungan", termsNav: "Ketentuan Penggunaan", privacyNav: "Privasi" },
  it: { supportNav: "Supporto", termsNav: "Termini di utilizzo", privacyNav: "Privacy" },
  ja: { supportNav: "サポート", termsNav: "利用規約", privacyNav: "プライバシー" },
  ko: { supportNav: "지원", termsNav: "이용 약관", privacyNav: "개인정보 보호" },
  "pt-BR": { supportNav: "Suporte", termsNav: "Termos de Uso", privacyNav: "Privacidade" },
  "pt-PT": { supportNav: "Suporte", termsNav: "Termos de Utilização", privacyNav: "Privacidade" },
  ru: { supportNav: "Поддержка", termsNav: "Условия использования", privacyNav: "Конфиденциальность" },
  th: { supportNav: "การช่วยเหลือ", termsNav: "ข้อกำหนดการใช้งาน", privacyNav: "ความเป็นส่วนตัว" },
  tr: { supportNav: "Destek", termsNav: "Kullanım Koşulları", privacyNav: "Gizlilik" },
  vi: { supportNav: "Hỗ trợ", termsNav: "Điều khoản sử dụng", privacyNav: "Quyền riêng tư" },
  "zh-Hans": { supportNav: "支持", termsNav: "使用条款", privacyNav: "隐私政策" },
  "zh-Hant": { supportNav: "支援", termsNav: "使用條款", privacyNav: "隱私權" }
};
const labels = labelsByLanguage[contentLanguage] || labelsByLanguage.en;
for (const [key, value] of Object.entries(labels)) {
  document.querySelectorAll(`[data-copy="${key}"]`).forEach(node => { node.textContent = value; });
}
const languageLabel = document.querySelector(".language-label .visually-hidden");
if (languageLabel) languageLabel.textContent = ({
  ar: "اللغة", de: "Sprache", en: "Language", es: "Idioma", fr: "Langue", hi: "भाषा", id: "Bahasa", it: "Lingua",
  ja: "言語", ko: "언어", "pt-BR": "Idioma", "pt-PT": "Idioma", ru: "Язык", th: "ภาษา", tr: "Dil", vi: "Ngôn ngữ",
  "zh-Hans": "语言", "zh-Hant": "語言"
})[contentLanguage] || "Language";
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
const localeOptions = [
  ["ar", "العربية"], ["de", "Deutsch"], ["en", "English"], ["en-GB", "English (UK)"], ["es", "Español"],
  ["fr", "Français"], ["hi", "हिन्दी"], ["id", "Bahasa Indonesia"], ["it", "Italiano"], ["ja", "日本語"],
  ["ko", "한국어"], ["pt-BR", "Português (Brasil)"], ["pt-PT", "Português (Portugal)"], ["ru", "Русский"],
  ["th", "ไทย"], ["tr", "Türkçe"], ["vi", "Tiếng Việt"], ["zh-Hans", "简体中文"], ["zh-Hant", "繁體中文"]
];
selector.replaceChildren(...localeOptions.map(([code, name]) => {
  const option = document.createElement("option"); option.value = code; option.textContent = name; return option;
}));
selector.value = language;
selector.addEventListener("change", () => {
  const url = new URL(location.href);
  url.searchParams.set("lang", selector.value);
  location.href = url.toString();
});
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  const url = new URL(link.href, location.href);
  if (url.origin === location.origin) {
    url.searchParams.set("lang", language);
    link.href = url.toString();
  }
});
