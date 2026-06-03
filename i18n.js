/* ============================================================
   Royal Metal — i18n.js
   In-page translation engine + 5-language dictionary
   Languages: en, ko, jp, es, cn
   ============================================================ */

'use strict';

/* ── Translation dictionary ─────────────────────────────── */
const TRANSLATIONS = {

  en: {
    'nav.home': 'Home', 'nav.about': 'About',
    'nav.products': 'Products', 'nav.contact': 'Contact',

    'hero.eyebrow': 'Est. in Incheon, South Korea',
    'hero.title1': 'Precision Crafted',
    'hero.title2': 'Beauty Tools',
    'hero.sub': 'Royal Metal Industrial Co., Ltd. — Korean manufacturer of premium nail clippers, grooming instruments, and beauty care products.',
    'hero.btn1': 'Explore Products',
    'hero.btn2': 'Get in Touch',

    'about.eyebrow': 'Since 1950s',
    'about.title': 'Royal Metal IND. CO., LTD',
    'about.desc': '<strong>ROYAL Metal Industrial Co., Ltd.</strong> is a Korean precision metalworking company established in the 1950s, specialising in nail clippers and nose hair trimmers. Based on traditional craftsmanship and continuous innovation, we export to 5 continents worldwide and develop world-class nose hair trimmers in-house. ROYAL grows as a trusted brand, always putting people first through technology.',
    'about.chip1': 'ISO Quality',
    'about.chip2': 'Global Export',
    'about.chip3': 'Own Factory',

    'stats.years': 'Years of Experience',
    'stats.countries': 'Countries Served',
    'stats.products': 'Product Variants',
    'stats.craft': 'Korean Craftsmanship',

    'products.eyebrow': 'Our Range',
    'products.title': 'Product Categories',
    'products.sub': 'From precision nail clippers to professional grooming kits — crafted with Korean excellence. Click any category below to view items in-page.',
    'card.clippers.title': 'Nail Clippers',
    'card.clippers.desc': 'Precision-engineered stainless steel nail clippers for professional and consumer use.',
    'card.manicure.title': 'Manicure Implements',
    'card.manicure.desc': 'Complete range of manicure tools for salon-quality nail care at home and professionally.',
    'card.pedicure.title': 'Pedicure Tools',
    'card.pedicure.desc': 'Professional pedicure instruments designed for comfort, hygiene, and lasting precision.',
    'card.beauty.title': 'Beauty Tools',
    'card.beauty.desc': 'Innovative beauty instruments that combine ergonomic design with durable craftsmanship.',
    'card.hair.title': 'Hair Grooming',
    'card.hair.desc': 'Precision hair grooming tools including nose hair trimmers and ear hair removers.',
    'card.sets.title': 'Manicure Sets',
    'card.sets.desc': 'Elegant gift-ready manicure sets packaged with premium tools for complete nail care.',
    'card.btn': 'View Items',

    'contact.eyebrow': 'Get In Touch',
    'contact.title': 'Contact Us',
    'contact.sub': 'We welcome inquiries from buyers, distributors, and partners worldwide.',
    'contact.addr.title': 'Factory & Head Office',
    'contact.addr.body': '1, Baekbeom-ro 701beon-gil,<br />Seo-gu, Incheon, South Korea<br /><small>Post Code: 22829</small>',
    'contact.phone.title': 'Phone',
    'contact.phone.body': 'Export &amp; Import: <a href="tel:+82275370490">+82-2-753-7049</a><br />Domestic: <a href="tel:+82234633734">+82-2-346-3734</a>',
    'contact.email.title': 'Email',
    'contact.email.body': 'Export: <a href="mailto:master@royalmetal.co.kr">master@royalmetal.co.kr</a><br />Domestic: <a href="mailto:korea@royalmetal.co.kr">korea@royalmetal.co.kr</a>',

    'footer.tagline': 'Precision Crafted in Korea',
    'footer.nav': 'Navigation',
    'footer.follow': 'Follow Us',
    'footer.home': 'Home', 'footer.about': 'About',
    'footer.products': 'Products', 'footer.contact': 'Contact',
  },

  ko: {
    'nav.home': '홈', 'nav.about': '회사소개',
    'nav.products': '제품', 'nav.contact': '연락처',

    'hero.eyebrow': '대한민국 인천 소재',
    'hero.title1': '정밀하게 제작된',
    'hero.title2': '뷰티 도구',
    'hero.sub': '로얄금속공업(주) — 손톱깎이, 그루밍 도구, 뷰티 케어 제품을 전문으로 생산하는 대한민국 제조 기업입니다.',
    'hero.btn1': '제품 보기',
    'hero.btn2': '문의하기',

    'about.eyebrow': '1950년대부터',
    'about.title': '로얄금속공업 주식회사',
    'about.desc': '<strong>ROYAL 로얄금속공업(주)</strong>는 1950년대 설립된 한국의 정밀 금속 가공 전문 기업으로, 손톱깎이와 코털정리기 등 생활용품 제조에 높은 기술력을 보유하고 있습니다. 전통적인 금속 가공 기술과 꾸준한 기술 혁신을 바탕으로 국내는 물론 전 세계 5개 대륙에 제품을 수출하고 있으며, 현재는 세계 최고 수준의 기능과 품질을 갖춘 코털정리기를 자체 개발·생산하고 있습니다. ROYAL은 늘 사람을 생각하는 기술로, 신뢰받는 브랜드로 성장하고 있습니다.',
    'about.chip1': 'ISO 인증',
    'about.chip2': '글로벌 수출',
    'about.chip3': '자체 공장',

    'stats.years': '경력 연수',
    'stats.countries': '수출 국가',
    'stats.products': '제품 종류',
    'stats.craft': '한국의 장인 정신',

    'products.eyebrow': '제품 라인업',
    'products.title': '제품 카테고리',
    'products.sub': '정밀 손톱깎이부터 전문 그루밍 키트까지 — 한국의 탁월함으로 제작되었습니다. 아래 카테고리를 클릭하면 제품을 확인하실 수 있습니다.',
    'card.clippers.title': '손톱깎이',
    'card.clippers.desc': '전문가 및 가정용으로 정밀 설계된 스테인리스 스틸 손톱깎이.',
    'card.manicure.title': '매니큐어 도구',
    'card.manicure.desc': '가정 및 전문 살롱 수준의 네일 케어를 위한 완전한 매니큐어 도구 세트.',
    'card.pedicure.title': '페디큐어 도구',
    'card.pedicure.desc': '편안함, 위생, 지속적인 정밀도를 위해 설계된 전문 페디큐어 기구.',
    'card.beauty.title': '뷰티 도구',
    'card.beauty.desc': '인체공학적 디자인과 내구성 있는 장인 정신을 결합한 혁신적인 뷰티 기기.',
    'card.hair.title': '헤어 그루밍',
    'card.hair.desc': '코털정리기 및 귀털정리기를 포함한 정밀 헤어 그루밍 도구.',
    'card.sets.title': '매니큐어 세트',
    'card.sets.desc': '완벽한 네일 케어를 위한 프리미엄 도구가 담긴 우아한 선물용 매니큐어 세트.',
    'card.btn': '제품 보기',

    'contact.eyebrow': '연락하기',
    'contact.title': '연락처',
    'contact.sub': '전 세계 구매자, 유통업체 및 파트너의 문의를 환영합니다.',
    'contact.addr.title': '공장 및 본사',
    'contact.addr.body': '인천광역시 서구 백범로701번길 1<br /><small>우편번호: 22829</small>',
    'contact.phone.title': '전화번호',
    'contact.phone.body': '수출입: <a href="tel:+82275370490">+82-2-753-7049</a><br />국내 영업: <a href="tel:+82234633734">+82-2-346-3734</a>',
    'contact.email.title': '이메일',
    'contact.email.body': '수출: <a href="mailto:master@royalmetal.co.kr">master@royalmetal.co.kr</a><br />국내: <a href="mailto:korea@royalmetal.co.kr">korea@royalmetal.co.kr</a>',

    'footer.tagline': '한국에서 정밀하게 제작',
    'footer.nav': '메뉴',
    'footer.follow': '팔로우',
    'footer.home': '홈', 'footer.about': '회사소개',
    'footer.products': '제품', 'footer.contact': '연락처',
  },

  jp: {
    'nav.home': 'ホーム', 'nav.about': '会社概要',
    'nav.products': '製品', 'nav.contact': 'お問い合わせ',

    'hero.eyebrow': '韓国・仁川市',
    'hero.title1': '高精度で製造された',
    'hero.title2': 'ビューティーツール',
    'hero.sub': 'ロイヤル金属工業株式会社 — 爪切り、グルーミング用品、ビューティーケア製品を専門とする韓国の製造メーカーです。',
    'hero.btn1': '製品を見る',
    'hero.btn2': 'お問い合わせ',

    'about.eyebrow': '1950年代創業',
    'about.title': 'ロイヤル金属工業株式会社',
    'about.desc': '<strong>ROYAL ロイヤル金属工業（株）</strong>は、1950年代に設立された韓国の精密金属加工専門企業です。爪切りや鼻毛カッターなどの生活用品製造において高い技術力を誇ります。伝統的な金属加工技術と継続的な技術革新を基盤に、世界5大陸に製品を輸出しています。現在は世界最高水準の鼻毛カッターを自社開発・生産しています。ROYALは常に人を思う技術で、信頼されるブランドへと成長しています。',
    'about.chip1': 'ISO品質',
    'about.chip2': 'グローバル輸出',
    'about.chip3': '自社工場',

    'stats.years': '経験年数',
    'stats.countries': '輸出先国数',
    'stats.products': '製品バリエーション',
    'stats.craft': '韓国のクラフツマンシップ',

    'products.eyebrow': '製品ラインアップ',
    'products.title': '製品カテゴリ',
    'products.sub': '精密爪切りからプロ仕様グルーミングキットまで — 韓国の卓越した技術で製造。下のカテゴリをクリックして製品をご覧ください。',
    'card.clippers.title': '爪切り',
    'card.clippers.desc': 'プロと家庭用向けに精密設計されたステンレス製爪切り。',
    'card.manicure.title': 'マニキュア用品',
    'card.manicure.desc': 'サロン品質のネイルケアのための完全なマニキュアツールセット。',
    'card.pedicure.title': 'ペディキュア用品',
    'card.pedicure.desc': '快適さ、衛生、持続的な精度のために設計されたプロ仕様ペディキュア器具。',
    'card.beauty.title': 'ビューティーツール',
    'card.beauty.desc': '人間工学的デザインと耐久性ある職人技を組み合わせた革新的な美容器具。',
    'card.hair.title': 'ヘアグルーミング',
    'card.hair.desc': '鼻毛カッターと耳毛カッターを含む精密ヘアグルーミングツール。',
    'card.sets.title': 'マニキュアセット',
    'card.sets.desc': '完全なネイルケアのためのプレミアムツールが入ったエレガントなギフトセット。',
    'card.btn': '製品を見る',

    'contact.eyebrow': 'お問い合わせ',
    'contact.title': 'お問い合わせ',
    'contact.sub': '世界中のバイヤー、ディストリビューター、パートナーからのお問い合わせを歓迎します。',
    'contact.addr.title': '工場・本社',
    'contact.addr.body': '1, Baekbeom-ro 701beon-gil,<br />Seo-gu, Incheon, 韓国<br /><small>郵便番号: 22829</small>',
    'contact.phone.title': '電話番号',
    'contact.phone.body': '輸出入: <a href="tel:+82275370490">+82-2-753-7049</a><br />国内: <a href="tel:+82234633734">+82-2-346-3734</a>',
    'contact.email.title': 'メール',
    'contact.email.body': '輸出: <a href="mailto:master@royalmetal.co.kr">master@royalmetal.co.kr</a><br />国内: <a href="mailto:korea@royalmetal.co.kr">korea@royalmetal.co.kr</a>',

    'footer.tagline': '韓国で精密に製造',
    'footer.nav': 'ナビゲーション',
    'footer.follow': 'フォローする',
    'footer.home': 'ホーム', 'footer.about': '会社概要',
    'footer.products': '製品', 'footer.contact': 'お問い合わせ',
  },

  es: {
    'nav.home': 'Inicio', 'nav.about': 'Nosotros',
    'nav.products': 'Productos', 'nav.contact': 'Contacto',

    'hero.eyebrow': 'Fundado en Incheon, Corea del Sur',
    'hero.title1': 'Fabricación de',
    'hero.title2': 'Herramientas de Belleza',
    'hero.sub': 'Royal Metal Industrial Co., Ltd. — Fabricante coreano de cortaúñas premium, instrumentos de cuidado personal y productos de belleza.',
    'hero.btn1': 'Ver Productos',
    'hero.btn2': 'Contáctenos',

    'about.eyebrow': 'Desde los años 1950',
    'about.title': 'Royal Metal IND. CO., LTD',
    'about.desc': '<strong>ROYAL Metal Industrial Co., Ltd.</strong> es una empresa coreana especializada en mecanizado de metales de precisión, fundada en la década de 1950. Con alta experiencia en cortaúñas y recortadores de vello nasal, exportamos a los 5 continentes. Desarrollamos y producimos recortadores de vello nasal de nivel mundial. ROYAL crece como una marca de confianza, siempre con tecnología pensada en las personas.',
    'about.chip1': 'Calidad ISO',
    'about.chip2': 'Exportación Global',
    'about.chip3': 'Fábrica Propia',

    'stats.years': 'Años de Experiencia',
    'stats.countries': 'Países Atendidos',
    'stats.products': 'Variantes de Producto',
    'stats.craft': 'Artesanía Coreana',

    'products.eyebrow': 'Nuestra Gama',
    'products.title': 'Categorías de Productos',
    'products.sub': 'Desde cortaúñas de precisión hasta kits de aseo profesional — elaborados con la excelencia coreana. Haga clic en cualquier categoría para ver los artículos.',
    'card.clippers.title': 'Cortaúñas',
    'card.clippers.desc': 'Cortaúñas de acero inoxidable diseñados con precisión para uso profesional y doméstico.',
    'card.manicure.title': 'Utensilios de Manicura',
    'card.manicure.desc': 'Gama completa de herramientas de manicura para cuidado de uñas de calidad salón.',
    'card.pedicure.title': 'Herramientas de Pedicura',
    'card.pedicure.desc': 'Instrumentos profesionales de pedicura diseñados para comodidad, higiene y precisión.',
    'card.beauty.title': 'Herramientas de Belleza',
    'card.beauty.desc': 'Instrumentos de belleza innovadores que combinan diseño ergonómico con durabilidad.',
    'card.hair.title': 'Accesorios para el Cabello',
    'card.hair.desc': 'Herramientas de precisión para el cuidado del vello nasal y del oído.',
    'card.sets.title': 'Sets de Manicura',
    'card.sets.desc': 'Elegantes sets de manicura listos para regalo con herramientas premium.',
    'card.btn': 'Ver Artículos',

    'contact.eyebrow': 'Contáctenos',
    'contact.title': 'Contáctenos',
    'contact.sub': 'Damos la bienvenida a consultas de compradores, distribuidores y socios en todo el mundo.',
    'contact.addr.title': 'Fábrica y Oficina Central',
    'contact.addr.body': '1, Baekbeom-ro 701beon-gil,<br />Seo-gu, Incheon, Corea del Sur<br /><small>Código Postal: 22829</small>',
    'contact.phone.title': 'Teléfono',
    'contact.phone.body': 'Exportación e Importación: <a href="tel:+82275370490">+82-2-753-7049</a><br />Doméstico: <a href="tel:+82234633734">+82-2-346-3734</a>',
    'contact.email.title': 'Correo Electrónico',
    'contact.email.body': 'Exportación: <a href="mailto:master@royalmetal.co.kr">master@royalmetal.co.kr</a><br />Doméstico: <a href="mailto:korea@royalmetal.co.kr">korea@royalmetal.co.kr</a>',

    'footer.tagline': 'Fabricado con Precisión en Corea',
    'footer.nav': 'Navegación',
    'footer.follow': 'Síguenos',
    'footer.home': 'Inicio', 'footer.about': 'Nosotros',
    'footer.products': 'Productos', 'footer.contact': 'Contacto',
  },

  cn: {
    'nav.home': '首页', 'nav.about': '关于我们',
    'nav.products': '产品', 'nav.contact': '联系我们',

    'hero.eyebrow': '韩国仁川',
    'hero.title1': '精工制造',
    'hero.title2': '美容工具',
    'hero.sub': '罗亚尔金属工业有限公司 — 韩国高端指甲剪、美容护理工具及相关产品制造商。',
    'hero.btn1': '查看产品',
    'hero.btn2': '联系我们',

    'about.eyebrow': '自1950年代起',
    'about.title': '罗亚尔金属工业有限公司',
    'about.desc': '<strong>ROYAL 罗亚尔金属工业（株）</strong>是一家成立于1950年代的韩国精密金属加工专业企业，在指甲剪和鼻毛修剪器等日用品制造方面拥有高超技术。凭借传统金属加工技术与持续的技术创新，我们的产品远销全球5大洲。我们自主研发生产具有世界顶尖水平的鼻毛修剪器。ROYAL始终秉承以人为本的理念，致力于成为值得信赖的品牌。',
    'about.chip1': 'ISO认证',
    'about.chip2': '全球出口',
    'about.chip3': '自有工厂',

    'stats.years': '年经验',
    'stats.countries': '服务国家',
    'stats.products': '产品种类',
    'stats.craft': '韩国工艺',

    'products.eyebrow': '我们的产品',
    'products.title': '产品分类',
    'products.sub': '从精密指甲剪到专业美容套装 — 以韩国卓越工艺精心打造。点击下方分类在页面内查看产品。',
    'card.clippers.title': '指甲剪',
    'card.clippers.desc': '专为专业和家庭使用精密设计的不锈钢指甲剪。',
    'card.manicure.title': '美甲工具',
    'card.manicure.desc': '适合家庭和专业沙龙使用的完整美甲工具套装。',
    'card.pedicure.title': '足部护理工具',
    'card.pedicure.desc': '专为舒适性、卫生和持久精度设计的专业足部护理器具。',
    'card.beauty.title': '美容工具',
    'card.beauty.desc': '将人体工学设计与耐用工艺相结合的创新美容仪器。',
    'card.hair.title': '毛发修剪工具',
    'card.hair.desc': '包括鼻毛修剪器和耳毛修剪器在内的精密毛发护理工具。',
    'card.sets.title': '美甲套装',
    'card.sets.desc': '配备高端工具的优雅礼品装美甲套装，满足完整的指甲护理需求。',
    'card.btn': '查看产品',

    'contact.eyebrow': '联系我们',
    'contact.title': '联系我们',
    'contact.sub': '我们欢迎全球买家、经销商和合作伙伴的咨询。',
    'contact.addr.title': '工厂及总部',
    'contact.addr.body': '1, Baekbeom-ro 701beon-gil,<br />Seo-gu, Incheon, 韩国<br /><small>邮政编码: 22829</small>',
    'contact.phone.title': '电话',
    'contact.phone.body': '出口业务: <a href="tel:+82275370490">+82-2-753-7049</a><br />国内业务: <a href="tel:+82234633734">+82-2-346-3734</a>',
    'contact.email.title': '电子邮件',
    'contact.email.body': '出口: <a href="mailto:master@royalmetal.co.kr">master@royalmetal.co.kr</a><br />国内: <a href="mailto:korea@royalmetal.co.kr">korea@royalmetal.co.kr</a>',

    'footer.tagline': '韩国精工制造',
    'footer.nav': '导航',
    'footer.follow': '关注我们',
    'footer.home': '首页', 'footer.about': '关于我们',
    'footer.products': '产品', 'footer.contact': '联系我们',
  }

};

/* ── i18n engine ─────────────────────────────────────────── */
const LANG_HTML = { en: 'en', ko: 'ko', jp: 'ja', es: 'es', cn: 'zh' };

function applyTranslation(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // Update <html lang>
  document.documentElement.lang = LANG_HTML[lang] || lang;

  // data-i18n → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // data-i18n-html → innerHTML  (for content with <br>, <a>, <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Highlight the active lang button
  document.querySelectorAll('.lang-chip[data-lang]').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });

  // Persist
  localStorage.setItem('rm_lang', lang);
}

/* ── Wire up buttons ─────────────────────────────────────── */
function initI18n() {
  const savedLang = localStorage.getItem('rm_lang') || 'en';

  document.querySelectorAll('.lang-chip[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyTranslation(btn.dataset.lang));
  });

  applyTranslation(savedLang);
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
