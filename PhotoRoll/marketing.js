(() => {
  const keys = [
    "如何使用", "功能", "支持", "选择语言", "给相册一点呼吸空间", "从容整理，留住珍贵时刻。",
    "一次看一张，轻轻滑动做出选择。先把暂不想保留的项目放进待删除箱，检查之后再确认。",
    "看看它如何工作", "每张照片，都由你决定。", "慢慢挑，安心选", "简单几步", "整理，不必一次做完。",
    "PhotoRoll 把相册整理变成轻松、可控的一小步。", "逐张浏览", "以随机顺序查看照片与视频，不必在拥挤的网格里反复寻找。",
    "轻轻做选择", "滑动保留，或先放入待删除箱。你可以稍后检查，也可以随时还原。", "准备好再确认",
    "浏览待删除项目并确认后，项目才会交由系统相册删除。", "找到你想整理的", "按时间、相册和地点筛选。",
    "想从某段旅程、某个年份或某本相册开始？使用筛选功能缩小范围，再按自己的节奏浏览。", "整理范围", "拍摄年份",
    "选择范围", "拍摄地点", "选择地点", "相册", "选择相册", "只看你想整理的内容", "整理概览", "照片", "视频",
    "每次整理，都是一点进展。", "看见整理进度", "每一点进展，都值得看见。",
    "通过整理记录、媒体类型和拍摄年份分布，回顾你的整理进度。空间数据为估算值，具体取决于设备可读取的媒体信息。",
    "慢慢整理，也是一种好方式", "从下一张开始。", "需要帮助？访问支持页面", "隐私政策", "使用条款"
  ];

  // Each translation follows the key order above so every page string is localized together.
  const copy = {
    "ar": [
      "كيفية الاستخدام", "الميزات", "الدعم", "اختيار اللغة", "امنح مكتبتك مساحة للتنفس", "نظّم صورك بهدوء، واحتفظ باللحظات الثمينة.",
      "راجع عنصرًا واحدًا في كل مرة، واسحب لاختيار ما تريد. ضع ما لست مستعدًا للاحتفاظ به في قائمة المراجعة، ثم راجعه قبل التأكيد.",
      "اكتشف طريقة العمل", "كل قرار بيدك.", "تمهّل واختر براحة", "خطوات بسيطة", "ليس عليك ترتيب كل شيء دفعة واحدة.",
      "يحوّل PhotoRoll مكتبة الصور الكبيرة إلى قرارات صغيرة وسهلة.", "راجع عنصرًا تلو الآخر", "شاهد الصور ومقاطع الفيديو بترتيب عشوائي، دون البحث في شبكة مزدحمة.",
      "اختر ببساطة", "اسحب للاحتفاظ بالعنصر أو ضعه جانبًا. راجع القائمة لاحقًا واستعد أي عنصر في أي وقت.", "أكّد عندما تكون مستعدًا",
      "بعد مراجعة العناصر وتأكيدها، يسلّمها التطبيق إلى تطبيق الصور لحذفها.", "اعثر على ما تريد ترتيبه", "صفِّ حسب السنة والألبوم والمكان.",
      "ابدأ برحلة أو سنة أو ألبوم محدد. ضيّق النطاق باستخدام عوامل التصفية، ثم راجع على مهل.", "نطاق المراجعة", "سنة الالتقاط",
      "اختيار السنوات", "المكان", "اختيار الأماكن", "الألبوم", "اختيار الألبومات", "ركّز على ما تختاره", "نظرة عامة على الترتيب", "الصور", "الفيديوهات",
      "كل خطوة صغيرة تُحدث فرقًا.", "تابع تقدمك", "كل تقدم يستحق أن تراه.",
      "تابع نشاط الترتيب وأنواع الوسائط وسنوات الالتقاط. المساحة تقديرية وتعتمد على بيانات الوسائط المتاحة على جهازك.",
      "الترتيب على مهل طريقة رائعة أيضًا", "ابدأ بالصورة التالية.", "هل تحتاج إلى مساعدة؟ تفضل بزيارة صفحة الدعم", "سياسة الخصوصية", "شروط الاستخدام"
    ],
    "de": [
      "So funktioniert es", "Funktionen", "Support", "Sprache auswählen", "Gib deiner Mediathek mehr Raum", "Fotos entspannt ordnen und wertvolle Momente bewahren.",
      "Sieh dir ein Element nach dem anderen an und entscheide mit einer einfachen Wischbewegung. Stelle Dinge zunächst zurück und prüfe sie vor dem Bestätigen.",
      "So funktioniert es", "Du entscheidest bei jedem Foto.", "Nimm dir Zeit", "In wenigen Schritten", "Du musst nicht alles auf einmal ordnen.",
      "PhotoRoll macht aus einer großen Mediathek kleine, überschaubare Entscheidungen.", "Einzeln ansehen", "Fotos und Videos in zufälliger Reihenfolge ansehen, ohne in einem vollen Raster suchen zu müssen.",
      "Einfach entscheiden", "Wische zum Behalten oder stelle ein Element zurück. Prüfe die Liste später und stelle Elemente jederzeit wieder her.", "Bestätigen, wenn du bereit bist",
      "Erst nach deiner Prüfung und Bestätigung werden ausgewählte Elemente an Fotos zum Löschen übergeben.", "Finde, was du ordnen möchtest", "Nach Jahr, Album und Ort filtern.",
      "Beginne mit einer Reise, einem Jahr oder einem Album. Grenze die Auswahl ein und gehe sie in deinem Tempo durch.", "Auswahlbereich", "Aufnahmejahr",
      "Jahre auswählen", "Ort", "Orte auswählen", "Album", "Alben auswählen", "Konzentriere dich auf deine Auswahl", "Übersicht", "Fotos", "Videos",
      "Kleine Schritte summieren sich.", "Fortschritt ansehen", "Jeder Fortschritt zählt.",
      "Sieh dir deine Aufräumaktivität, Medientypen und Aufnahmejahre an. Speicherangaben sind Schätzungen anhand der auf deinem Gerät verfügbaren Mediendaten.",
      "In Ruhe aufzuräumen ist ein guter Weg", "Beginne mit dem nächsten Foto.", "Brauchst du Hilfe? Besuche den Support", "Datenschutz", "Nutzungsbedingungen"
    ],
    "es": [
      "Cómo funciona", "Funciones", "Soporte", "Elegir idioma", "Dale un respiro a tu fototeca", "Organiza tus fotos con calma y conserva los momentos importantes.",
      "Revisa un elemento cada vez y decide con un gesto sencillo. Aparta lo que aún no quieras conservar y revísalo antes de confirmar.",
      "Descubre cómo funciona", "Tú decides sobre cada foto.", "Tómate tu tiempo", "Un proceso sencillo", "No hace falta organizarlo todo de una vez.",
      "PhotoRoll convierte una fototeca grande en decisiones pequeñas y manejables.", "Revisa una a una", "Explora fotos y vídeos en orden aleatorio, sin buscar en una cuadrícula abarrotada.",
      "Elige con facilidad", "Desliza para conservar o apartar un elemento. Revisa la lista más tarde y restaura lo que quieras cuando quieras.", "Confirma cuando quieras",
      "Tras revisar y confirmar, los elementos seleccionados se envían a Fotos para eliminarlos.", "Encuentra lo que quieres organizar", "Filtra por año, álbum y lugar.",
      "Empieza por un viaje, un año o un álbum. Acota la selección y revísala a tu ritmo.", "Ámbito de revisión", "Año de captura",
      "Elegir años", "Lugar", "Elegir lugares", "Álbum", "Elegir álbumes", "Concéntrate en lo que elijas", "Resumen de organización", "Fotos", "Vídeos",
      "Cada paso cuenta.", "Consulta tu progreso", "Cada avance merece la pena.",
      "Repasa tu actividad, los tipos de contenido y los años de captura. El espacio es una estimación basada en los datos multimedia disponibles en tu dispositivo.",
      "Organizar poco a poco también funciona", "Empieza con la siguiente foto.", "¿Necesitas ayuda? Visita soporte", "Política de privacidad", "Términos de uso"
    ],
    "fr": [
      "Comment ça marche", "Fonctionnalités", "Assistance", "Choisir la langue", "Faites respirer votre photothèque", "Triez vos photos sereinement et gardez vos précieux souvenirs.",
      "Parcourez un élément à la fois et choisissez d’un simple geste. Mettez de côté ce que vous ne souhaitez pas garder, puis vérifiez avant de confirmer.",
      "Voir comment ça marche", "Chaque décision vous appartient.", "Prenez votre temps", "Quelques étapes simples", "Vous n’avez pas besoin de tout trier d’un coup.",
      "PhotoRoll transforme une grande photothèque en quelques choix simples et maîtrisés.", "Parcourez un élément à la fois", "Découvrez photos et vidéos dans un ordre aléatoire, sans chercher dans une grille encombrée.",
      "Choisissez simplement", "Balayez pour garder ou mettre de côté. Consultez la liste plus tard et restaurez un élément à tout moment.", "Confirmez quand vous êtes prêt",
      "Après vérification et confirmation, les éléments sélectionnés sont transmis à Photos pour suppression.", "Trouvez ce que vous voulez trier", "Filtrez par année, album et lieu.",
      "Commencez par un voyage, une année ou un album. Affinez la sélection, puis parcourez-la à votre rythme.", "Périmètre", "Année de prise de vue",
      "Choisir les années", "Lieu", "Choisir les lieux", "Album", "Choisir les albums", "Concentrez-vous sur votre sélection", "Aperçu du tri", "Photos", "Vidéos",
      "Chaque petit pas compte.", "Suivez votre progression", "Chaque progrès mérite d’être vu.",
      "Consultez votre activité, les types de contenu et les années de prise de vue. L’espace est estimé selon les données multimédias accessibles sur votre appareil.",
      "Trier à votre rythme, c’est aussi une bonne approche", "Commencez par la prochaine photo.", "Besoin d’aide ? Consultez l’assistance", "Confidentialité", "Conditions d’utilisation"
    ],
    "hi": [
      "कैसे इस्तेमाल करें", "सुविधाएँ", "सहायता", "भाषा चुनें", "अपनी फ़ोटो लाइब्रेरी को थोड़ा खुला रखें", "सुकून से व्यवस्थित करें, यादगार पलों को संजोएँ।",
      "एक बार में एक आइटम देखें और आसान स्वाइप से फ़ैसला करें। जिन्हें अभी रखना तय नहीं है, उन्हें समीक्षा सूची में रखें और पुष्टि से पहले जाँचें।",
      "जानें यह कैसे काम करता है", "हर फ़ोटो का फ़ैसला आपका है।", "आराम से चुनें", "बस कुछ आसान कदम", "सब कुछ एक साथ व्यवस्थित करना ज़रूरी नहीं।",
      "PhotoRoll बड़ी फ़ोटो लाइब्रेरी को छोटे, आसान फ़ैसलों में बाँटता है।", "एक-एक करके देखें", "भीड़भरे ग्रिड में खोजे बिना फ़ोटो और वीडियो को मिले-जुले क्रम में देखें।",
      "आसानी से चुनें", "रखने के लिए स्वाइप करें या आइटम अलग रखें। सूची बाद में देखें और चाहें तो कभी भी वापस लाएँ।", "तैयार होने पर पुष्टि करें",
      "जाँचने और पुष्टि करने के बाद ही चुने हुए आइटम हटाने के लिए Photos को भेजे जाते हैं।", "वह ढूँढें जिसे व्यवस्थित करना है", "वर्ष, एल्बम और जगह के अनुसार फ़िल्टर करें।",
      "किसी यात्रा, साल या एल्बम से शुरुआत करें। दायरा छोटा करें और अपनी गति से देखें।", "समीक्षा का दायरा", "फ़ोटो लेने का वर्ष",
      "वर्ष चुनें", "जगह", "जगहें चुनें", "एल्बम", "एल्बम चुनें", "अपनी चुनी चीज़ों पर ध्यान दें", "सफ़ाई का सारांश", "फ़ोटो", "वीडियो",
      "छोटे कदम भी मायने रखते हैं।", "अपनी प्रगति देखें", "हर प्रगति देखने लायक है।",
      "अपनी सफ़ाई गतिविधि, मीडिया प्रकार और फ़ोटो के वर्षों को देखें। स्टोरेज का आँकड़ा आपके डिवाइस पर उपलब्ध मीडिया डेटा के आधार पर अनुमानित है।",
      "धीरे-धीरे व्यवस्थित करना भी अच्छा तरीका है", "अगली फ़ोटो से शुरू करें।", "मदद चाहिए? सहायता पेज देखें", "गोपनीयता नीति", "उपयोग की शर्तें"
    ],
    "id": [
      "Cara kerja", "Fitur", "Dukungan", "Pilih bahasa", "Beri ruang bernapas untuk perpustakaan foto", "Rapikan dengan tenang, simpan momen berharga.",
      "Tinjau satu item setiap kali dan pilih dengan usapan sederhana. Sisihkan dulu item yang belum ingin disimpan, lalu periksa sebelum mengonfirmasi.",
      "Lihat cara kerjanya", "Setiap keputusan ada di tanganmu.", "Pilih dengan santai", "Beberapa langkah sederhana", "Kamu tidak perlu merapikan semuanya sekaligus.",
      "PhotoRoll mengubah perpustakaan foto besar menjadi beberapa keputusan kecil yang mudah dikelola.", "Tinjau satu per satu", "Lihat foto dan video dalam urutan acak tanpa mencari di kisi yang penuh.",
      "Pilih dengan mudah", "Usap untuk menyimpan atau menyisihkan item. Tinjau daftar nanti dan pulihkan kapan saja.", "Konfirmasi saat siap",
      "Setelah ditinjau dan dikonfirmasi, item pilihan akan diserahkan ke Foto untuk dihapus.", "Temukan yang ingin dirapikan", "Filter berdasarkan tahun, album, dan tempat.",
      "Mulai dari perjalanan, tahun, atau album tertentu. Persempit pilihan lalu tinjau dengan ritmemu sendiri.", "Cakupan tinjauan", "Tahun pengambilan",
      "Pilih tahun", "Tempat", "Pilih tempat", "Album", "Pilih album", "Fokus pada pilihanmu", "Ringkasan perapian", "Foto", "Video",
      "Langkah kecil akan menumpuk.", "Lihat progresmu", "Setiap kemajuan berarti.",
      "Tinjau aktivitas, jenis media, dan tahun pengambilan. Angka penyimpanan adalah perkiraan berdasarkan data media yang tersedia di perangkatmu.",
      "Merapikan perlahan juga cara yang baik", "Mulai dari foto berikutnya.", "Butuh bantuan? Kunjungi halaman dukungan", "Kebijakan privasi", "Ketentuan penggunaan"
    ],
    "it": [
      "Come funziona", "Funzioni", "Supporto", "Scegli la lingua", "Fai spazio nella tua libreria", "Riordina con calma e conserva i momenti più belli.",
      "Esamina un elemento alla volta e scegli con un semplice gesto. Metti da parte ciò che non vuoi ancora tenere e controllalo prima di confermare.",
      "Scopri come funziona", "Ogni scelta spetta a te.", "Scegli con calma", "Pochi semplici passaggi", "Non devi riordinare tutto in una volta.",
      "PhotoRoll trasforma una grande libreria in piccole scelte facili da gestire.", "Esamina un elemento alla volta", "Guarda foto e video in ordine casuale, senza cercare in una griglia affollata.",
      "Scegli con semplicità", "Scorri per tenere o mettere da parte un elemento. Rivedi l’elenco più tardi e ripristina ciò che vuoi, in qualsiasi momento.", "Conferma quando vuoi",
      "Dopo la revisione e la conferma, gli elementi selezionati vengono passati a Foto per l’eliminazione.", "Trova ciò che vuoi riordinare", "Filtra per anno, album e luogo.",
      "Inizia da un viaggio, un anno o un album. Restringi la selezione e rivedila con i tuoi tempi.", "Ambito di revisione", "Anno di acquisizione",
      "Scegli gli anni", "Luogo", "Scegli i luoghi", "Album", "Scegli gli album", "Concentrati su ciò che scegli", "Riepilogo riordino", "Foto", "Video",
      "Ogni piccolo passo conta.", "Segui i tuoi progressi", "Ogni progresso merita di essere visto.",
      "Ripercorri l’attività, i tipi di contenuti e gli anni di acquisizione. Lo spazio è una stima basata sui dati multimediali disponibili sul dispositivo.",
      "Riordinare con calma è un buon metodo", "Inizia dalla prossima foto.", "Ti serve aiuto? Visita il supporto", "Informativa sulla privacy", "Termini di utilizzo"
    ],
    "ja": [
      "使い方", "機能", "サポート", "言語を選択", "写真ライブラリにゆとりを", "落ち着いて整理し、大切な瞬間を残しましょう。",
      "1枚ずつ確認して、スワイプで選びます。残すか迷う項目は保留リストに入れ、確定する前に確認できます。",
      "使い方を見る", "写真をどうするかは、あなたが決めます。", "ゆっくり選ぶ", "かんたんなステップ", "一度にすべて整理する必要はありません。",
      "PhotoRollなら、大量の写真を小さく扱いやすい選択に分けて整理できます。", "1枚ずつ確認", "写真やビデオをランダムな順序で表示。混み合ったグリッドから探す必要はありません。",
      "かんたんに選択", "残す項目はスワイプし、迷う項目は保留できます。後から確認して、いつでも元に戻せます。", "準備ができたら確定",
      "確認して確定すると、選択した項目が削除のために写真アプリへ渡されます。", "整理したい項目を見つける", "年、アルバム、場所で絞り込めます。",
      "旅行、撮影年、アルバムから始められます。範囲を絞って、自分のペースで確認しましょう。", "確認する範囲", "撮影年",
      "年を選択", "場所", "場所を選択", "アルバム", "アルバムを選択", "選んだ項目に集中", "整理の概要", "写真", "ビデオ",
      "小さな一歩が積み重なります。", "進み具合を確認", "少しずつの進歩も大切です。",
      "整理の履歴、メディアの種類、撮影年を振り返れます。容量はデバイスで取得できるメディア情報に基づく推定値です。",
      "ゆっくり整理するのも良い方法です", "次の写真から始めましょう。", "お困りですか？サポートページへ", "プライバシーポリシー", "利用規約"
    ],
    "ko": [
      "사용 방법", "기능", "지원", "언어 선택", "사진 보관함에 여유를 더하세요", "차분하게 정리하고 소중한 순간을 간직하세요.",
      "한 번에 하나씩 살펴보고 간단히 쓸어넘겨 선택하세요. 보관할지 망설여지는 항목은 잠시 보류하고 확인한 뒤 결정할 수 있어요.",
      "사용 방법 보기", "사진마다 결정은 여러분의 몫이에요.", "천천히 선택하기", "간단한 몇 단계", "한 번에 모두 정리할 필요는 없어요.",
      "PhotoRoll은 큰 사진 보관함을 작고 관리하기 쉬운 선택으로 나눠 줍니다.", "하나씩 살펴보기", "복잡한 격자에서 찾을 필요 없이 사진과 비디오를 무작위 순서로 확인하세요.",
      "간편하게 선택하기", "쓸어넘겨 보관하거나 잠시 보류하세요. 나중에 목록을 확인하고 언제든 복원할 수 있어요.", "준비되면 확인",
      "검토하고 확인한 뒤에 선택한 항목이 삭제를 위해 사진 앱으로 전달됩니다.", "정리할 항목 찾기", "연도, 앨범, 장소별로 필터링하세요.",
      "여행, 연도 또는 앨범에서 시작하세요. 범위를 좁혀 원하는 속도로 살펴보세요.", "검토 범위", "촬영 연도",
      "연도 선택", "장소", "장소 선택", "앨범", "앨범 선택", "선택한 항목에 집중", "정리 요약", "사진", "비디오",
      "작은 단계가 모여 큰 변화를 만듭니다.", "진행 상황 보기", "모든 진전은 의미가 있어요.",
      "정리 활동, 미디어 유형, 촬영 연도를 확인하세요. 저장 공간은 기기에서 사용할 수 있는 미디어 데이터를 바탕으로 한 추정치입니다.",
      "천천히 정리하는 것도 좋은 방법이에요", "다음 사진부터 시작하세요.", "도움이 필요하신가요? 지원 페이지 방문", "개인정보 처리방침", "이용 약관"
    ],
    "pt-BR": [
      "Como funciona", "Recursos", "Suporte", "Escolher idioma", "Dê espaço à sua fototeca", "Organize com calma e guarde os momentos especiais.",
      "Revise um item por vez e escolha com um gesto simples. Separe o que ainda não quer guardar e confira antes de confirmar.",
      "Veja como funciona", "Você decide o destino de cada foto.", "Escolha sem pressa", "Algumas etapas simples", "Você não precisa organizar tudo de uma vez.",
      "O PhotoRoll transforma uma fototeca cheia em pequenas decisões fáceis de administrar.", "Revise um por vez", "Veja fotos e vídeos em ordem aleatória, sem procurar em uma grade lotada.",
      "Escolha com facilidade", "Deslize para guardar ou separar um item. Confira a lista depois e restaure quando quiser.", "Confirme quando estiver pronto",
      "Depois da revisão e da confirmação, os itens selecionados são enviados ao Fotos para exclusão.", "Encontre o que quer organizar", "Filtre por ano, álbum e local.",
      "Comece por uma viagem, um ano ou um álbum. Reduza a seleção e revise no seu ritmo.", "Escopo da revisão", "Ano da captura",
      "Escolher anos", "Local", "Escolher locais", "Álbum", "Escolher álbuns", "Concentre-se no que você escolher", "Resumo da organização", "Fotos", "Vídeos",
      "Pequenos passos fazem diferença.", "Acompanhe seu progresso", "Todo avanço merece ser visto.",
      "Relembre sua atividade, os tipos de mídia e os anos das capturas. O armazenamento é uma estimativa com base nos dados de mídia disponíveis no dispositivo.",
      "Organizar aos poucos também é uma boa opção", "Comece pela próxima foto.", "Precisa de ajuda? Acesse o suporte", "Política de Privacidade", "Termos de Uso"
    ],
    "pt-PT": [
      "Como funciona", "Funcionalidades", "Suporte", "Escolher idioma", "Dê espaço à sua fototeca", "Organize com calma e guarde os momentos especiais.",
      "Reveja um elemento de cada vez e escolha com um gesto simples. Ponha de lado o que ainda não quer guardar e confirme depois de rever.",
      "Veja como funciona", "A decisão sobre cada fotografia é sua.", "Escolha sem pressa", "Alguns passos simples", "Não precisa de organizar tudo de uma só vez.",
      "O PhotoRoll transforma uma fototeca cheia em pequenas decisões fáceis de gerir.", "Reveja uma de cada vez", "Veja fotografias e vídeos por uma ordem aleatória, sem procurar numa grelha cheia.",
      "Escolha com facilidade", "Deslize para guardar ou pôr de lado. Reveja a lista mais tarde e recupere elementos quando quiser.", "Confirme quando estiver pronto",
      "Depois de rever e confirmar, os elementos selecionados são enviados para Fotografias para serem apagados.", "Encontre o que quer organizar", "Filtre por ano, álbum e local.",
      "Comece por uma viagem, um ano ou um álbum. Reduza a seleção e reveja ao seu ritmo.", "Âmbito da revisão", "Ano de captura",
      "Escolher anos", "Local", "Escolher locais", "Álbum", "Escolher álbuns", "Concentre-se no que escolheu", "Resumo da organização", "Fotografias", "Vídeos",
      "Cada pequeno passo conta.", "Acompanhe o seu progresso", "Todo o progresso merece ser visto.",
      "Reveja a sua atividade, os tipos de conteúdos e os anos de captura. O espaço é uma estimativa baseada nos dados multimédia disponíveis no dispositivo.",
      "Organizar com calma também é uma boa opção", "Comece pela próxima fotografia.", "Precisa de ajuda? Visite o suporte", "Política de privacidade", "Termos de utilização"
    ],
    "ru": [
      "Как это работает", "Возможности", "Поддержка", "Выбрать язык", "Освободите место в медиатеке", "Разбирайте фото спокойно и сохраняйте важные моменты.",
      "Просматривайте по одному объекту и выбирайте простым жестом. Отложите то, что пока не решили оставить, и проверьте перед подтверждением.",
      "Как это работает", "Решение по каждой фотографии за вами.", "Не спешите с выбором", "Несколько простых шагов", "Необязательно разбирать всё сразу.",
      "PhotoRoll превращает большую медиатеку в небольшие, понятные решения.", "Просматривайте по одному", "Смотрите фото и видео в случайном порядке, не перебирая переполненную сетку.",
      "Выбирайте легко", "Смахните, чтобы оставить объект или отложить его. Проверьте список позже и восстановите нужное в любой момент.", "Подтвердите, когда будете готовы",
      "После проверки и подтверждения выбранные объекты передаются в приложение «Фото» для удаления.", "Найдите, что хотите разобрать", "Фильтруйте по году, альбому и месту.",
      "Начните с поездки, года или альбома. Сузьте выборку и просматривайте её в своём темпе.", "Область просмотра", "Год съёмки",
      "Выбрать годы", "Место", "Выбрать места", "Альбом", "Выбрать альбомы", "Сосредоточьтесь на выбранном", "Обзор очистки", "Фото", "Видео",
      "Каждый небольшой шаг важен.", "Следите за прогрессом", "Любой прогресс заслуживает внимания.",
      "Просматривайте активность, типы медиа и годы съёмки. Объём хранилища рассчитан по медиаданным, доступным на устройстве.",
      "Постепенная сортировка — тоже хороший подход", "Начните со следующей фотографии.", "Нужна помощь? Перейдите в поддержку", "Политика конфиденциальности", "Условия использования"
    ],
    "th": [
      "วิธีใช้งาน", "คุณสมบัติ", "ฝ่ายช่วยเหลือ", "เลือกภาษา", "เพิ่มพื้นที่ให้คลังรูปภาพของคุณ", "จัดระเบียบอย่างสบายใจและเก็บช่วงเวลาสำคัญไว้",
      "ดูทีละรายการแล้วเลือกด้วยการปัดง่าย ๆ พักรายการที่ยังไม่แน่ใจไว้ก่อน แล้วตรวจสอบอีกครั้งก่อนยืนยัน",
      "ดูวิธีการทำงาน", "คุณเป็นผู้ตัดสินใจทุกรูป", "ค่อย ๆ เลือก", "ไม่กี่ขั้นตอนง่าย ๆ", "ไม่จำเป็นต้องจัดระเบียบทั้งหมดในครั้งเดียว",
      "PhotoRoll เปลี่ยนคลังรูปภาพขนาดใหญ่ให้เป็นการตัดสินใจเล็ก ๆ ที่จัดการได้ง่าย", "ดูทีละรายการ", "ดูรูปภาพและวิดีโอตามลำดับสุ่ม โดยไม่ต้องค้นหาในตารางที่แน่นขนัด",
      "เลือกได้ง่าย ๆ", "ปัดเพื่อเก็บหรือพักรายการไว้ ตรวจสอบรายการภายหลังและกู้คืนได้ทุกเมื่อ", "ยืนยันเมื่อพร้อม",
      "หลังจากตรวจสอบและยืนยันแล้ว รายการที่เลือกจะถูกส่งไปยังแอปรูปภาพเพื่อลบ", "ค้นหาสิ่งที่ต้องการจัดระเบียบ", "กรองตามปี อัลบั้ม และสถานที่",
      "เริ่มจากทริป ปี หรืออัลบั้มที่ต้องการ จำกัดรายการให้แคบลงแล้วดูตามจังหวะของคุณ", "ขอบเขตการตรวจสอบ", "ปีที่ถ่าย",
      "เลือกปี", "สถานที่", "เลือกสถานที่", "อัลบั้ม", "เลือกอัลบั้ม", "ดูเฉพาะรายการที่คุณเลือก", "ภาพรวมการจัดระเบียบ", "รูปภาพ", "วิดีโอ",
      "ทุกก้าวเล็ก ๆ มีความหมาย", "ดูความคืบหน้า", "ทุกความคืบหน้ามีความหมาย", 
      "ย้อนดูการจัดระเบียบ ประเภทสื่อ และปีที่ถ่าย ข้อมูลพื้นที่เป็นค่าประมาณจากข้อมูลสื่อที่อุปกรณ์เข้าถึงได้",
      "ค่อย ๆ จัดระเบียบก็เป็นวิธีที่ดี", "เริ่มจากรูปถัดไป", "ต้องการความช่วยเหลือไหม ไปที่หน้าสนับสนุน", "นโยบายความเป็นส่วนตัว", "ข้อกำหนดการใช้งาน"
    ],
    "tr": [
      "Nasıl çalışır?", "Özellikler", "Destek", "Dil seçin", "Fotoğraf arşivinize biraz nefes aldırın", "Sakin bir şekilde düzenleyin, değerli anılarınızı koruyun.",
      "Her seferinde bir öğeyi inceleyin ve basit bir kaydırmayla karar verin. Saklamakta kararsız olduklarınızı ayırın ve onaylamadan önce gözden geçirin.",
      "Nasıl çalıştığını görün", "Her fotoğrafın kararını siz verirsiniz.", "Acele etmeden seçin", "Birkaç kolay adım", "Her şeyi bir kerede düzenlemeniz gerekmez.",
      "PhotoRoll, büyük bir fotoğraf arşivini yönetilebilir küçük kararlara dönüştürür.", "Tek tek inceleyin", "Kalabalık bir ızgarada aramadan fotoğraf ve videolara karışık sırayla göz atın.",
      "Kolayca seçin", "Saklamak veya ayırmak için kaydırın. Listeyi sonra inceleyin ve dilediğinizi istediğiniz zaman geri yükleyin.", "Hazır olduğunuzda onaylayın",
      "İnceleyip onayladıktan sonra seçilen öğeler silinmek üzere Fotoğraflar'a aktarılır.", "Düzenlemek istediğinizi bulun", "Yıla, albüme ve konuma göre filtreleyin.",
      "Bir geziden, yıldan veya albümden başlayın. Seçimi daraltın ve kendi hızınızda inceleyin.", "İnceleme kapsamı", "Çekim yılı",
      "Yılları seçin", "Konum", "Konumları seçin", "Albüm", "Albümleri seçin", "Seçtiklerinize odaklanın", "Düzenleme özeti", "Fotoğraflar", "Videolar",
      "Küçük adımlar birikir.", "İlerlemenizi görün", "Her ilerleme görülmeye değer.",
      "Düzenleme etkinliğinizi, medya türlerini ve çekim yıllarını gözden geçirin. Depolama değerleri, cihazınızdaki medya verilerine dayalı tahminlerdir.",
      "Yavaş yavaş düzenlemek de iyi bir yöntemdir", "Bir sonraki fotoğrafla başlayın.", "Yardıma mı ihtiyacınız var? Destek sayfasını ziyaret edin", "Gizlilik Politikası", "Kullanım Koşulları"
    ],
    "vi": [
      "Cách hoạt động", "Tính năng", "Hỗ trợ", "Chọn ngôn ngữ", "Để thư viện ảnh của bạn dễ thở hơn", "Sắp xếp nhẹ nhàng, lưu giữ khoảnh khắc quý giá.",
      "Xem từng mục một và chọn bằng thao tác vuốt đơn giản. Tạm để riêng những mục bạn chưa muốn giữ, rồi kiểm tra trước khi xác nhận.",
      "Tìm hiểu cách hoạt động", "Bạn quyết định với từng ảnh.", "Cứ từ từ lựa chọn", "Một vài bước đơn giản", "Bạn không cần sắp xếp tất cả cùng lúc.",
      "PhotoRoll biến thư viện ảnh lớn thành những lựa chọn nhỏ, dễ quản lý.", "Xem từng mục", "Xem ảnh và video theo thứ tự ngẫu nhiên mà không phải tìm trong lưới ảnh đông đúc.",
      "Chọn thật đơn giản", "Vuốt để giữ lại hoặc tạm để riêng. Xem lại danh sách sau và khôi phục bất cứ lúc nào.", "Xác nhận khi bạn sẵn sàng",
      "Sau khi bạn xem lại và xác nhận, các mục đã chọn sẽ được chuyển đến Ảnh để xóa.", "Tìm nội dung bạn muốn sắp xếp", "Lọc theo năm, album và địa điểm.",
      "Bắt đầu từ chuyến đi, năm hoặc album cụ thể. Thu hẹp phạm vi rồi xem theo nhịp độ của bạn.", "Phạm vi xem lại", "Năm chụp",
      "Chọn năm", "Địa điểm", "Chọn địa điểm", "Album", "Chọn album", "Tập trung vào nội dung bạn chọn", "Tổng quan dọn dẹp", "Ảnh", "Video",
      "Từng bước nhỏ đều có ý nghĩa.", "Xem tiến độ", "Mọi tiến triển đều đáng ghi nhận.",
      "Xem lại hoạt động dọn dẹp, loại phương tiện và năm chụp. Dung lượng là ước tính dựa trên dữ liệu phương tiện có trên thiết bị.",
      "Sắp xếp từ từ cũng là một cách hay", "Bắt đầu với ảnh tiếp theo.", "Cần trợ giúp? Truy cập trang hỗ trợ", "Chính sách quyền riêng tư", "Điều khoản sử dụng"
    ],
    "zh-Hant": [
      "如何使用", "功能", "支援", "選擇語言", "為你的照片圖庫留點空間", "從容整理，留住珍貴時刻。",
      "一次查看一個項目，輕輕滑動即可選擇。先將暫時不想保留的項目放入待整理清單，檢查後再確認。",
      "看看它如何運作", "每張照片，都由你決定。", "慢慢挑，安心選", "簡單幾步", "整理，不必一次做完。",
      "PhotoRoll 將龐大的照片圖庫化為輕鬆、可掌控的小步驟。", "逐張瀏覽", "以隨機順序查看照片與影片，不必在擁擠的格狀畫面中反覆尋找。",
      "輕鬆做選擇", "滑動保留，或先放入待整理清單。你可以稍後檢查，也可以隨時還原。", "準備好再確認",
      "檢查並確認後，項目才會交由「照片」刪除。", "找到想整理的內容", "依年份、相簿和地點篩選。",
      "想從某趟旅程、某個年份或某本相簿開始？使用篩選功能縮小範圍，再按自己的步調瀏覽。", "整理範圍", "拍攝年份",
      "選擇年份", "拍攝地點", "選擇地點", "相簿", "選擇相簿", "只看你想整理的內容", "整理概覽", "照片", "影片",
      "每次整理，都是一點進展。", "查看整理進度", "每一點進展，都值得看見。",
      "透過整理記錄、媒體類型和拍攝年份分布，回顧整理進度。空間數據為估算值，實際情況取決於裝置可讀取的媒體資訊。",
      "慢慢整理，也是一種好方式", "從下一張開始。", "需要協助？前往支援頁面", "隱私權政策", "使用條款"
    ]
  };

  const supported = ["ar", "de", "en-GB", "en", "es", "fr", "hi", "id", "it", "ja", "ko", "pt-BR", "pt-PT", "ru", "th", "tr", "vi", "zh-Hans", "zh-Hant"];
  for (const [locale, phrases] of Object.entries(copy)) {
    if (phrases.length !== keys.length) throw new Error(`Incomplete PhotoRoll marketing copy for ${locale}`);
  }
  const titles = {
    ar: ["PhotoRoll — رتّب صورك بهدوء", "راجع صورك ومقاطع الفيديو واحدة تلو الأخرى وبالوتيرة التي تناسبك."],
    de: ["PhotoRoll — Fotos entspannt ordnen", "Sieh dir Fotos und Videos einzeln und in deinem eigenen Tempo an."],
    "en-GB": ["PhotoRoll — A calmer way to organise photos", "Review your photos and videos one at a time, at your own pace."],
    en: ["PhotoRoll — A calmer way to organize photos", "Review your photos and videos one at a time, at your own pace."],
    es: ["PhotoRoll — Organiza tus fotos con calma", "Revisa tus fotos y vídeos de uno en uno y a tu propio ritmo."],
    fr: ["PhotoRoll — Triez vos photos sereinement", "Parcourez vos photos et vidéos une par une, à votre rythme."],
    hi: ["PhotoRoll — फ़ोटो सुकून से व्यवस्थित करें", "अपनी फ़ोटो और वीडियो एक-एक करके, अपनी गति से देखें।"],
    id: ["PhotoRoll — Rapikan foto dengan tenang", "Tinjau foto dan video satu per satu, dengan ritmemu sendiri."],
    it: ["PhotoRoll — Riordina le foto con calma", "Esamina foto e video uno alla volta, con i tuoi tempi."],
    ja: ["PhotoRoll — 写真を落ち着いて整理", "写真やビデオを1つずつ、自分のペースで確認できます。"],
    ko: ["PhotoRoll — 차분하게 사진 정리", "사진과 비디오를 하나씩 원하는 속도로 살펴보세요."],
    "pt-BR": ["PhotoRoll — Organize fotos com calma", "Revise suas fotos e vídeos um por vez, no seu ritmo."],
    "pt-PT": ["PhotoRoll — Organize fotografias com calma", "Reveja fotografias e vídeos um de cada vez, ao seu ritmo."],
    ru: ["PhotoRoll — Спокойная сортировка фото", "Просматривайте фото и видео по одному в удобном для вас темпе."],
    th: ["PhotoRoll — จัดระเบียบรูปภาพอย่างสบายใจ", "ดูรูปภาพและวิดีโอทีละรายการตามจังหวะของคุณ"],
    tr: ["PhotoRoll — Fotoğrafları sakin bir şekilde düzenleyin", "Fotoğraf ve videolarınızı kendi hızınızda tek tek inceleyin."],
    vi: ["PhotoRoll — Sắp xếp ảnh nhẹ nhàng", "Xem từng ảnh và video theo nhịp độ của riêng bạn."],
    "zh-Hans": ["PhotoRoll — 从容整理照片", "逐张整理照片与视频，先检查，再决定。"],
    "zh-Hant": ["PhotoRoll — 從容整理照片", "逐張整理照片與影片，先檢查，再決定。"]
  };
  const labels = {
    ar: ["التنقل الرئيسي", "اللغة", "أيقونة تطبيق PhotoRoll", "عوامل تصفية PhotoRoll", "إحصاءات PhotoRoll", "الصفحة الرئيسية لـ PhotoRoll", "رسم توضيحي للتقدم"],
    de: ["Hauptnavigation", "Sprache", "PhotoRoll-App-Symbol", "PhotoRoll-Filter", "PhotoRoll-Statistiken", "PhotoRoll-Startseite", "Illustration des Fortschritts"],
    "en-GB": ["Main navigation", "Language", "PhotoRoll app icon", "PhotoRoll filters", "PhotoRoll insights", "PhotoRoll home", "Illustrative progress chart"],
    en: ["Main navigation", "Language", "PhotoRoll app icon", "PhotoRoll filters", "PhotoRoll insights", "PhotoRoll home", "Illustrative progress chart"],
    es: ["Navegación principal", "Idioma", "Icono de PhotoRoll", "Filtros de PhotoRoll", "Estadísticas de PhotoRoll", "Inicio de PhotoRoll", "Gráfico ilustrativo del progreso"],
    fr: ["Navigation principale", "Langue", "Icône de PhotoRoll", "Filtres PhotoRoll", "Statistiques PhotoRoll", "Accueil de PhotoRoll", "Graphique illustratif de progression"],
    hi: ["मुख्य नेविगेशन", "भाषा", "PhotoRoll ऐप आइकन", "PhotoRoll फ़िल्टर", "PhotoRoll जानकारी", "PhotoRoll होम", "प्रगति का उदाहरण चार्ट"],
    id: ["Navigasi utama", "Bahasa", "Ikon aplikasi PhotoRoll", "Filter PhotoRoll", "Insight PhotoRoll", "Beranda PhotoRoll", "Grafik ilustrasi progres"],
    it: ["Navigazione principale", "Lingua", "Icona dell’app PhotoRoll", "Filtri PhotoRoll", "Statistiche PhotoRoll", "Home di PhotoRoll", "Grafico illustrativo dei progressi"],
    ja: ["メインナビゲーション", "言語", "PhotoRollアプリのアイコン", "PhotoRollのフィルタ", "PhotoRollのインサイト", "PhotoRollホーム", "進捗のイメージグラフ"],
    ko: ["주 탐색 메뉴", "언어", "PhotoRoll 앱 아이콘", "PhotoRoll 필터", "PhotoRoll 인사이트", "PhotoRoll 홈", "진행 상황 예시 차트"],
    "pt-BR": ["Navegação principal", "Idioma", "Ícone do app PhotoRoll", "Filtros do PhotoRoll", "Informações do PhotoRoll", "Página inicial do PhotoRoll", "Gráfico ilustrativo de progresso"],
    "pt-PT": ["Navegação principal", "Idioma", "Ícone da app PhotoRoll", "Filtros do PhotoRoll", "Dados do PhotoRoll", "Página inicial do PhotoRoll", "Gráfico ilustrativo do progresso"],
    ru: ["Основная навигация", "Язык", "Значок приложения PhotoRoll", "Фильтры PhotoRoll", "Статистика PhotoRoll", "Главная страница PhotoRoll", "Иллюстрация прогресса"],
    th: ["การนำทางหลัก", "ภาษา", "ไอคอนแอป PhotoRoll", "ตัวกรอง PhotoRoll", "ข้อมูลเชิงลึก PhotoRoll", "หน้าหลัก PhotoRoll", "กราฟแสดงความคืบหน้า"],
    tr: ["Ana gezinme", "Dil", "PhotoRoll uygulama simgesi", "PhotoRoll filtreleri", "PhotoRoll bilgileri", "PhotoRoll ana sayfası", "İlerleme grafiği örneği"],
    vi: ["Điều hướng chính", "Ngôn ngữ", "Biểu tượng ứng dụng PhotoRoll", "Bộ lọc PhotoRoll", "Thông tin PhotoRoll", "Trang chủ PhotoRoll", "Biểu đồ tiến độ minh họa"],
    "zh-Hans": ["主导航", "语言", "PhotoRoll 应用图标", "PhotoRoll 筛选条件", "PhotoRoll 数据概览", "PhotoRoll 主页", "进度示意图"],
    "zh-Hant": ["主要導覽", "語言", "PhotoRoll App 圖示", "PhotoRoll 篩選條件", "PhotoRoll 數據概覽", "PhotoRoll 首頁", "進度示意圖"]
  };

  const params = new URLSearchParams(location.search);
  const requested = params.get("lang");
  const browserLocale = (navigator.language || "en").toLowerCase();
  const localeAliases = { "zh-cn": "zh-Hans", "zh-sg": "zh-Hans", "zh-tw": "zh-Hant", "zh-hk": "zh-Hant", "zh-mo": "zh-Hant", "en-gb": "en-GB", "pt-br": "pt-BR", "pt-pt": "pt-PT" };
  const exactLocale = localeAliases[browserLocale] || supported.find((item) => item.toLowerCase() === browserLocale);
  const baseLocale = supported.find((item) => item.toLowerCase() === browserLocale.split("-")[0]);
  const language = supported.includes(requested) ? requested : (exactLocale || baseLocale || "en");
  const isChinese = language.startsWith("zh-");
  const phrases = language === "zh-Hans" ? keys : (language === "en" || language === "en-GB" ? null : copy[language]);
  const textFor = (key) => {
    const index = keys.indexOf(key);
    if (index < 0) return key;
    if (phrases) return phrases[index];
    const element = [...document.querySelectorAll("[data-zh][data-en]")].find((item) => item.dataset.zh === key);
    return element ? (language === "en-GB" ? element.dataset.en.replace(/organizing|organize/g, (word) => word === "organizing" ? "organising" : "organise") : element.dataset.en) : key;
  };

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = titles[language][0];
  document.querySelector("[data-localized-description]").content = titles[language][1];
  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    element.textContent = textFor(element.dataset.zh);
  });
  const label = labels[language];
  document.querySelector("[data-nav-label]").setAttribute("aria-label", label[0]);
  document.querySelector("#language").setAttribute("aria-label", label[1]);
  document.querySelector("[data-hero-art-label]").setAttribute("aria-label", label[2]);
  document.querySelector("[data-filters-label]").setAttribute("aria-label", label[3]);
  document.querySelector("[data-insights-label]").setAttribute("aria-label", label[4]);
  document.querySelector("[data-brand-home-label]").setAttribute("aria-label", label[5]);
  document.querySelector("[data-chart-label]").setAttribute("aria-label", label[6]);
  document.querySelectorAll(".hero-shot img, .closing img").forEach((image) => image.alt = label[2]);
  const suffix = language;
  document.querySelectorAll("[data-localized-href]").forEach((element) => {
    const page = element.dataset.localizedHref;
    const file = page === "support" ? "support.html" : page === "privacy" ? "privacy-policy.html" : "terms-of-use.html";
    element.href = `https://13098806890.github.io/App-Store-pages/PhotoRoll/${file}?lang=${encodeURIComponent(suffix)}`;
  });

  const picker = document.getElementById("language");
  picker.value = language;
  picker.addEventListener("change", () => {
    const next = new URL(location.href);
    next.searchParams.set("lang", picker.value);
    location.href = next.toString();
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
