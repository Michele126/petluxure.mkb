const ADMIN_PASSWORD = "admin123";
const STORAGE_KEY = "petluxe_state_v2";

const i18n = {
  zh: {
    brandTag: "高端宠物生活",
    navHome: "总览",
    navPlans: "会员权益",
    navStore: "精选商城",
    navCyber: "Cyber养宠",
    navCare: "护理服务",
    navAccount: "我的订单",
    topEyebrow: "AI 宠物健康与高端消费平台",
    heroTitle: "把宠物照护，变成高复购的精品生意。",
    ctaStart: "开启会员",
    loginRegister: "登录 / 注册",
    heroPill: "Premium pet wellness app",
    heroSubTitle: "会员订阅、智能问诊、精选好物，一套完成变现。",
    heroBody: "面向养宠家庭提供宠物档案、健康提醒、AI 护理建议和高品质产品推荐，用订阅制与精选商城提升客单价。",
    seeRevenue: "查看会员权益",
    browseStore: "浏览精选商品",
    currentPet: "当前宠物",
    petMetaLuna: "金毛 · 3 岁 · 活跃",
    petMetaMilo: "英短 · 2 岁 · 敏感肠胃",
    wellnessScore: "健康指数",
    nextCare: "下次喂食",
    subValue: "月订阅",
    revenueEyebrow: "Member Benefits",
    revenueTitle: "成为会员后，宠物照护更省心",
    planOneTitle: "AI 健康提醒",
    planOneBody: "喂食、疫苗、驱虫、体重趋势自动提醒，不再错过关键照护。",
    planOneValue: "24/7",
    planTwoTitle: "会员专属价格",
    planTwoBody: "精选主粮、营养品、智能设备和护理用品享受会员价。",
    planTwoValue: "会员价",
    planThreeTitle: "在线问诊优先",
    planThreeBody: "异常症状可快速整理记录，优先预约在线问诊和线下服务。",
    planThreeValue: "优先预约",
    planFourTitle: "上门护理预约",
    planFourBody: "美容、寄养、遛狗、训练课程可直接预约并查看服务进度。",
    planFourValue: "一键预订",
    storeEyebrow: "Curated Shop",
    storeTitle: "精选高客单宠物好物",
    catAll: "全部",
    catHealth: "健康",
    catSmart: "智能",
    cyberEyebrow: "Cyber Pets",
    cyberTitle: "Cyber养宠：收养你的电子宠物",
    renameCyber: "给它取名",
    activeCyberPet: "当前电子宠物",
    mood: "心情",
    energy: "能量",
    closet: "装扮",
    chooseCyberPet: "选择可购买电子宠物",
    cyberShopTitle: "皮肤与食物商店",
    adoptCyber: "收养",
    dressCyber: "穿上",
    feedCyber: "喂食",
    owned: "已拥有",
    cyberNameEyebrow: "Cyber Pet",
    cyberNameTitle: "给电子宠物取名",
    cyberNameField: "宠物名字",
    saveCyberName: "保存名字",
    flowOne: "1. 注册账号",
    flowOneBody: "沉淀会员资料与复购标签",
    flowTwo: "2. 购买商品",
    flowTwoBody: "模拟付款后订单自动生成物流",
    flowThree: "3. 订阅升级",
    flowThreeBody: "支付成功后自动变为 Plus 会员",
    careEyebrow: "Smart Care",
    careTitle: "把日常照护做成可续费体验",
    careBody: "用户每天记录饮食、运动、体重和异常症状，系统自动生成建议与购买清单，形成更自然的复购路径。",
    assistantTitle: "AI 护理顾问",
    refreshTip: "换一条建议",
    hydration: "饮水",
    activity: "运动",
    nutrition: "营养",
    accountEyebrow: "Customer Center",
    accountTitle: "我的会员与物流",
    manageAccount: "登录查看",
    memberStatus: "会员状态",
    guestHint: "登录后可购买商品、查看物流和订阅会员。",
    lastOrder: "最近订单",
    viewTracking: "查看物流",
    ownerIncome: "老板收款演示",
    ownerIncomeHint: "前端模拟收款，真实上线需接支付网关。",
    modalEyebrow: "Premium Plan",
    modalTitle: "PetLuxe Plus",
    modalBody: "包含 AI 护理、商品会员价、健康提醒、护理服务优先预约。",
    perMonth: "/月",
    modalCta: "模拟支付并升级",
    authEyebrow: "Account",
    authTitle: "登录或注册",
    authName: "昵称",
    authEmail: "邮箱",
    authPassword: "密码",
    authSubmit: "登录 / 注册",
    payEyebrow: "Secure Checkout",
    payToOwner: "付给店铺老板",
    shippingAddress: "收货地址",
    payNow: "模拟支付并下单",
    trackingEyebrow: "Logistics",
    trackingTitle: "物流详情",
    trackingEmpty: "还没有订单。请先登录并购买商品。",
    adminEyebrow: "Owner Dashboard",
    adminTitle: "管理员后台",
    adminLogout: "退出后台",
    metricRevenue: "总收款",
    metricMembers: "注册会员",
    metricOrders: "订单数量",
    metricPlus: "Plus 会员",
    addProductTitle: "添加商品",
    fieldNameZh: "中文名称",
    fieldNameEn: "英文名称",
    fieldDescZh: "中文描述",
    fieldDescEn: "英文描述",
    fieldPrice: "价格 USD",
    fieldCategory: "分类",
    saveProduct: "保存商品",
    editPricesTitle: "商品与价格管理",
    membersTitle: "注册会员列表",
    layoutTitle: "网页布局设置",
    layoutTheme: "首页风格",
    layoutHero: "首页标题",
    saveLayout: "应用布局",
    paymentTitle: "老板收款设置",
    paymentMethod: "收款方式",
    paymentAccount: "收款账号",
    savePayment: "保存收款设置",
    paymentRoute: "收款账户",
    tinaTitle: "TinaCMS 内容管理",
    tinaBody: "用 TinaCMS 编辑商品、Cyber 宠物、皮肤食物、首页标题和收款设置。",
    openTina: "打开 TinaCMS",
    adminLoginEyebrow: "Owner Only",
    adminLoginTitle: "管理员登录",
    adminPassword: "后台密码",
    adminLoginSubmit: "进入后台",
    addProduct: "购买",
    products: [],
    tips: [
      "Luna 最近运动量较高，建议晚餐蛋白比例略微上调，并补充关节护理零食。",
      "根据体重曲线，未来 7 天可减少 8% 零食摄入，保持理想体态。",
      "下次驱虫提醒已接近，可在会员价中搭配益生菌订阅，提高护理完成率。"
    ],
    trackingSteps: ["订单已支付", "仓库已打包", "运输中", "预计 2 天送达"],
    plus: "Plus 会员",
    guest: "游客",
    normal: "普通会员",
    subscribedToast: "支付成功，已自动升级为 Plus 会员。",
    orderToast: "支付成功，订单和物流已生成。",
    adminToast: "后台已登录。",
    wrongPassword: "密码错误，请输入 admin123。",
    saved: "已保存。"
    , cyberAdoptedToast: "电子宠物已收养。",
    cyberItemToast: "已购买并应用到电子宠物。",
    cyberFedToast: "喂食成功，能量提升。"
  },
  en: {
    brandTag: "Premium pet living",
    navHome: "Overview",
    navPlans: "Benefits",
    navStore: "Shop",
    navCyber: "Cyber Pets",
    navCare: "Care",
    navAccount: "Orders",
    topEyebrow: "AI pet wellness and premium commerce",
    heroTitle: "Turn pet care into a beautiful, repeatable business.",
    ctaStart: "Start plan",
    loginRegister: "Login / Register",
    heroPill: "Premium pet wellness app",
    heroSubTitle: "Memberships, smart care, and curated products in one monetizable app.",
    heroBody: "Built for pet families with health profiles, reminders, AI care guidance, and high-quality product recommendations that lift repeat purchases.",
    seeRevenue: "View benefits",
    browseStore: "Browse products",
    currentPet: "Current pet",
    petMetaLuna: "Golden retriever · 3 yrs · Active",
    petMetaMilo: "British shorthair · 2 yrs · Sensitive diet",
    wellnessScore: "Wellness score",
    nextCare: "Next feeding",
    subValue: "Monthly plan",
    revenueEyebrow: "Member Benefits",
    revenueTitle: "Membership makes pet care calmer",
    planOneTitle: "AI health reminders",
    planOneBody: "Meals, vaccines, parasite prevention, and weight trends are reminded automatically.",
    planOneValue: "24/7",
    planTwoTitle: "Member-only pricing",
    planTwoBody: "Curated food, supplements, smart devices, and care products unlock member pricing.",
    planTwoValue: "Member price",
    planThreeTitle: "Priority tele-vet",
    planThreeBody: "Symptom logs are organized quickly, with priority online and offline care booking.",
    planThreeValue: "Priority",
    planFourTitle: "In-home care booking",
    planFourBody: "Book grooming, boarding, walks, and training while tracking service progress.",
    planFourValue: "Book now",
    storeEyebrow: "Curated Shop",
    storeTitle: "Premium products with high order value",
    catAll: "All",
    catHealth: "Health",
    catSmart: "Smart",
    cyberEyebrow: "Cyber Pets",
    cyberTitle: "Cyber Pets: adopt your digital companion",
    renameCyber: "Rename",
    activeCyberPet: "Active cyber pet",
    mood: "Mood",
    energy: "Energy",
    closet: "Looks",
    chooseCyberPet: "Choose cyber pets to buy",
    cyberShopTitle: "Skins and food shop",
    adoptCyber: "Adopt",
    dressCyber: "Wear",
    feedCyber: "Feed",
    owned: "Owned",
    cyberNameEyebrow: "Cyber Pet",
    cyberNameTitle: "Name your cyber pet",
    cyberNameField: "Pet name",
    saveCyberName: "Save name",
    flowOne: "1. Register",
    flowOneBody: "Capture member profiles and repurchase tags",
    flowTwo: "2. Buy products",
    flowTwoBody: "Simulated payment creates orders and logistics",
    flowThree: "3. Subscribe",
    flowThreeBody: "Successful payment upgrades members automatically",
    careEyebrow: "Smart Care",
    careTitle: "Make daily care feel worth renewing",
    careBody: "Owners log meals, activity, weight, and symptoms. The app turns those signals into recommendations and a natural repurchase path.",
    assistantTitle: "AI care advisor",
    refreshTip: "New tip",
    hydration: "Hydration",
    activity: "Activity",
    nutrition: "Nutrition",
    accountEyebrow: "Customer Center",
    accountTitle: "Membership and logistics",
    manageAccount: "Login",
    memberStatus: "Member status",
    guestHint: "Login to buy products, track logistics, and subscribe.",
    lastOrder: "Latest order",
    viewTracking: "Track",
    ownerIncome: "Owner payment demo",
    ownerIncomeHint: "Front-end payment simulation. Real launch needs a payment gateway.",
    modalEyebrow: "Premium Plan",
    modalTitle: "PetLuxe Plus",
    modalBody: "Includes AI care, member pricing, health reminders, and priority booking for services.",
    perMonth: "/mo",
    modalCta: "Pay and upgrade",
    authEyebrow: "Account",
    authTitle: "Login or register",
    authName: "Name",
    authEmail: "Email",
    authPassword: "Password",
    authSubmit: "Login / Register",
    payEyebrow: "Secure Checkout",
    payToOwner: "paid to store owner",
    shippingAddress: "Shipping address",
    payNow: "Pay and place order",
    trackingEyebrow: "Logistics",
    trackingTitle: "Tracking",
    trackingEmpty: "No order yet. Login and buy a product first.",
    adminEyebrow: "Owner Dashboard",
    adminTitle: "Admin dashboard",
    adminLogout: "Logout admin",
    metricRevenue: "Revenue",
    metricMembers: "Members",
    metricOrders: "Orders",
    metricPlus: "Plus members",
    addProductTitle: "Add product",
    fieldNameZh: "Chinese name",
    fieldNameEn: "English name",
    fieldDescZh: "Chinese description",
    fieldDescEn: "English description",
    fieldPrice: "Price USD",
    fieldCategory: "Category",
    saveProduct: "Save product",
    editPricesTitle: "Products and price management",
    membersTitle: "Registered members",
    layoutTitle: "Page layout settings",
    layoutTheme: "Homepage style",
    layoutHero: "Hero headline",
    saveLayout: "Apply layout",
    paymentTitle: "Owner payment settings",
    paymentMethod: "Payment method",
    paymentAccount: "Payout account",
    savePayment: "Save payment settings",
    paymentRoute: "Payout account",
    tinaTitle: "TinaCMS content manager",
    tinaBody: "Use TinaCMS to edit products, cyber pets, skins, food, hero titles, and payout settings.",
    openTina: "Open TinaCMS",
    adminLoginEyebrow: "Owner Only",
    adminLoginTitle: "Admin login",
    adminPassword: "Admin password",
    adminLoginSubmit: "Enter dashboard",
    addProduct: "Buy",
    products: [],
    tips: [
      "Luna has been more active this week. Consider a slightly higher dinner protein ratio with joint-care treats.",
      "Based on the weight trend, reduce snack calories by 8% over the next 7 days to keep an ideal shape.",
      "The next parasite prevention reminder is close. Bundle it with a probiotic subscription to raise care completion."
    ],
    trackingSteps: ["Order paid", "Packed by warehouse", "In transit", "Estimated delivery in 2 days"],
    plus: "Plus member",
    guest: "Guest",
    normal: "Member",
    subscribedToast: "Payment successful. Member upgraded to Plus automatically.",
    orderToast: "Payment successful. Order and logistics created.",
    adminToast: "Admin logged in.",
    wrongPassword: "Wrong password. Use admin123.",
    saved: "Saved.",
    cyberAdoptedToast: "Cyber pet adopted.",
    cyberItemToast: "Purchased and applied to your cyber pet.",
    cyberFedToast: "Fed successfully. Energy increased."
  }
};

const defaultProducts = [
  {
    id: "p1",
    nameZh: "冷冻干营养主粮",
    nameEn: "Freeze-dried nutrition meal",
    descZh: "关节与毛发配方",
    descEn: "Joint and coat formula",
    category: "health",
    price: 68,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "p2",
    nameZh: "智能喂食净水站",
    nameEn: "Smart feeder water station",
    descZh: "远程控制与饮水监测",
    descEn: "Remote control and hydration tracking",
    category: "smart",
    price: 189,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "p3",
    nameZh: "皮毛护理礼盒",
    nameEn: "Coat care ritual box",
    descZh: "香波、梳理、护爪套装",
    descEn: "Shampoo, brush, and paw care set",
    category: "care",
    price: 92,
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "p4",
    nameZh: "肠胃益生菌订阅",
    nameEn: "Probiotic subscription",
    descZh: "30 天定制补充计划",
    descEn: "30-day tailored supplement plan",
    category: "health",
    price: 39,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "p5",
    nameZh: "GPS 轻奢项圈",
    nameEn: "GPS luxe collar",
    descZh: "定位、防丢、运动记录",
    descEn: "Location, safety, and activity tracking",
    category: "smart",
    price: 129,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "p6",
    nameZh: "上门美容预约",
    nameEn: "In-home grooming booking",
    descZh: "认证美容师上门服务",
    descEn: "Certified groomer at your door",
    category: "service",
    price: 85,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80"
  }
];

let cyberPets = [
  {
    id: "aurora",
    nameZh: "极光猫",
    nameEn: "Aurora Cat",
    icon: "◆",
    palette: "aurora",
    price: 12,
    mood: 96,
    energy: 82
  },
  {
    id: "pixelPup",
    nameZh: "像素小狗",
    nameEn: "Pixel Pup",
    icon: "●",
    palette: "pixel",
    price: 15,
    mood: 91,
    energy: 88
  },
  {
    id: "moonBunny",
    nameZh: "月光兔",
    nameEn: "Moon Bunny",
    icon: "✦",
    palette: "moon",
    price: 18,
    mood: 98,
    energy: 76
  }
];

let cyberItems = [
  {
    id: "skin-neon",
    type: "skin",
    nameZh: "霓虹机甲皮肤",
    nameEn: "Neon Mecha Skin",
    price: 6,
    palette: "neon"
  },
  {
    id: "skin-pearl",
    type: "skin",
    nameZh: "珍珠云朵皮肤",
    nameEn: "Pearl Cloud Skin",
    price: 5,
    palette: "pearl"
  },
  {
    id: "food-star",
    type: "food",
    nameZh: "星星能量罐",
    nameEn: "Starlight Energy Can",
    price: 3,
    energy: 12
  },
  {
    id: "food-salmon",
    type: "food",
    nameZh: "赛博三文鱼",
    nameEn: "Cyber Salmon",
    price: 4,
    energy: 18
  }
];

const pets = {
  luna: {
    name: "Luna",
    score: 92,
    nextCare: "2h",
    sub: "$79",
    avatar: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    metaKey: "petMetaLuna"
  },
  milo: {
    name: "Milo",
    score: 86,
    nextCare: "4h",
    sub: "$49",
    avatar: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    metaKey: "petMetaMilo"
  }
};

const defaultState = {
  products: defaultProducts,
  members: [],
  orders: [],
  currentUserEmail: "",
  revenue: 0,
  adminLoggedIn: false,
  selectedProductId: "",
  layout: { theme: "fresh", heroTitle: "", heroTitleZh: "", heroTitleEn: "" },
  payment: { method: "Stripe", account: "boss@petluxe.com" },
  cyber: {
    activePetId: "aurora",
    name: "Nova",
    ownedPetIds: ["aurora"],
    ownedItemIds: ["skin-neon"],
    activeSkin: "skin-neon",
    mood: 96,
    energy: 82
  }
};

let currentLang = "zh";
let currentCategory = "all";
let tipIndex = 0;
let state = loadState();
state.adminLoggedIn = false;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultState);
  const parsed = JSON.parse(saved);
  return {
    ...structuredClone(defaultState),
    ...parsed,
    layout: { ...defaultState.layout, ...(parsed.layout || {}) },
    payment: { ...defaultState.payment, ...(parsed.payment || {}) },
    cyber: { ...defaultState.cyber, ...(parsed.cyber || {}) }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function readJson(path) {
  const response = await fetch(`${path}?v=${Date.now()}`);
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  return response.json();
}

async function loadCmsContent() {
  try {
    const [products, siteSettings, cmsCyberPets, cmsCyberItems] = await Promise.all([
      readJson("content/products.json"),
      readJson("content/site-settings.json"),
      readJson("content/cyber-pets.json"),
      readJson("content/cyber-items.json")
    ]);

    if (Array.isArray(products.items) && products.items.length) {
      state.products = products.items;
    }
    if (Array.isArray(cmsCyberPets.items) && cmsCyberPets.items.length) {
      cyberPets = cmsCyberPets.items;
    }
    if (Array.isArray(cmsCyberItems.items) && cmsCyberItems.items.length) {
      cyberItems = cmsCyberItems.items;
    }

    state.layout = {
      ...state.layout,
      theme: siteSettings.theme || state.layout.theme,
      heroTitleZh: siteSettings.heroTitleZh || "",
      heroTitleEn: siteSettings.heroTitleEn || ""
    };
    state.payment = {
      ...state.payment,
      method: siteSettings.paymentMethod || state.payment.method,
      account: siteSettings.paymentAccount || state.payment.account
    };
  } catch (error) {
    console.info("CMS content unavailable; using local defaults.", error);
  }
}

function money(value) {
  return `$${Number(value || 0).toLocaleString("en-US")}`;
}

function productName(product) {
  return currentLang === "zh" ? product.nameZh : product.nameEn;
}

function productDesc(product) {
  return currentLang === "zh" ? product.descZh : product.descEn;
}

function categoryLabel(category) {
  const labels = {
    zh: { health: "健康", smart: "智能", care: "护理", service: "服务" },
    en: { health: "Health", smart: "Smart", care: "Care", service: "Service" }
  };
  return labels[currentLang][category] || category;
}

function cyberPetLabel(pet) {
  return currentLang === "zh" ? pet.nameZh : pet.nameEn;
}

function cyberItemLabel(item) {
  return currentLang === "zh" ? item.nameZh : item.nameEn;
}

function currentUser() {
  return state.members.find((member) => member.email === state.currentUserEmail);
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  requestAnimationFrame(() => node.classList.add("show"));
  setTimeout(() => {
    node.classList.remove("show");
    setTimeout(() => node.remove(), 220);
  }, 2300);
}

function translate() {
  const dict = i18n[currentLang];
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  document.querySelector("[data-lang-toggle] span").textContent = currentLang === "zh" ? "中文" : "EN";
  document.querySelector("[data-lang-toggle] b").textContent = currentLang === "zh" ? "EN" : "中文";
  document.getElementById("careTip").textContent = dict.tips[tipIndex % dict.tips.length];
  const cmsHeroTitle = currentLang === "zh" ? state.layout.heroTitleZh : state.layout.heroTitleEn;
  document.getElementById("heroTitle").textContent = state.layout.heroTitle || cmsHeroTitle || dict.heroTitle;
  const activePet = document.querySelector(".pet-chip.active").dataset.pet;
  document.getElementById("petMeta").textContent = dict[pets[activePet].metaKey];
  renderProducts();
  renderCyber();
  renderAccount();
  renderAdmin();
}

function applyLayout() {
  document.body.dataset.theme = state.layout.theme;
  document.getElementById("layoutForm")?.elements.theme && (document.getElementById("layoutForm").elements.theme.value = state.layout.theme);
  if (document.getElementById("layoutForm")?.elements.heroTitle) {
    document.getElementById("layoutForm").elements.heroTitle.value = state.layout.heroTitle;
  }
  const paymentForm = document.getElementById("paymentForm");
  if (paymentForm) {
    paymentForm.elements.method.value = state.payment.method;
    paymentForm.elements.account.value = state.payment.account;
  }
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  state.products.forEach((product) => {
    const include = currentCategory === "all" || product.category === currentCategory;
    if (!include) return;

    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${productName(product)}">
      <div class="product-body">
        <div class="product-meta">
          <span>${categoryLabel(product.category)}</span>
          <small>${money(product.price)}</small>
        </div>
        <h3>${productName(product)}</h3>
        <p>${productDesc(product)}</p>
        <div class="product-bottom">
          <strong>${money(product.price)}</strong>
          <button type="button" data-buy-product="${product.id}" aria-label="${i18n[currentLang].addProduct} ${productName(product)}">+</button>
        </div>
      </div>
    `;
    const image = card.querySelector("img");
    image.addEventListener("error", () => {
      image.replaceWith(Object.assign(document.createElement("div"), {
        className: "product-fallback",
        textContent: "PetLuxe"
      }));
    });
    grid.appendChild(card);
  });
}

function renderCyber() {
  const activePet = cyberPets.find((pet) => pet.id === state.cyber.activePetId) || cyberPets[0];
  const activeSkin = cyberItems.find((item) => item.id === state.cyber.activeSkin);
  const avatar = document.getElementById("cyberPetAvatar");
  avatar.dataset.pet = activePet.palette;
  avatar.dataset.skin = activeSkin?.palette || activePet.palette;
  document.getElementById("cyberPetIcon").textContent = activePet.icon;
  document.getElementById("cyberPetName").textContent = state.cyber.name || cyberPetLabel(activePet);
  document.getElementById("cyberPetMeta").textContent = `${cyberPetLabel(activePet)} · ${activeSkin ? cyberItemLabel(activeSkin) : "Original"}`;
  document.getElementById("cyberMood").textContent = state.cyber.mood;
  document.getElementById("cyberEnergy").textContent = state.cyber.energy;
  document.getElementById("cyberCloset").textContent = state.cyber.ownedItemIds.length;

  document.getElementById("cyberPetList").innerHTML = cyberPets.map((pet) => {
    const owned = state.cyber.ownedPetIds.includes(pet.id);
    const active = pet.id === state.cyber.activePetId;
    return `
      <div class="cyber-row ${active ? "active" : ""}">
        <span class="cyber-dot" data-pet="${pet.palette}">${pet.icon}</span>
        <div>
          <strong>${cyberPetLabel(pet)}</strong>
          <small>${money(pet.price)} · ${owned ? i18n[currentLang].owned : "Cyber Pet"}</small>
        </div>
        <button type="button" data-cyber-pet="${pet.id}">${owned ? (active ? "✓" : i18n[currentLang].dressCyber) : i18n[currentLang].adoptCyber}</button>
      </div>
    `;
  }).join("");

  document.getElementById("cyberItemList").innerHTML = cyberItems.map((item) => {
    const owned = state.cyber.ownedItemIds.includes(item.id);
    const active = state.cyber.activeSkin === item.id;
    const action = item.type === "food" ? i18n[currentLang].feedCyber : (owned ? (active ? "✓" : i18n[currentLang].dressCyber) : i18n[currentLang].adoptCyber);
    return `
      <div class="cyber-row ${active ? "active" : ""}">
        <span class="cyber-dot" data-skin="${item.palette || "food"}">${item.type === "food" ? "✚" : "✧"}</span>
        <div>
          <strong>${cyberItemLabel(item)}</strong>
          <small>${money(item.price)} · ${item.type === "food" ? "Food" : "Skin"}</small>
        </div>
        <button type="button" data-cyber-item="${item.id}">${action}</button>
      </div>
    `;
  }).join("");
}

function renderAccount() {
  const user = currentUser();
  const lastOrder = [...state.orders].reverse().find((order) => order.email === state.currentUserEmail) || state.orders.at(-1);
  document.getElementById("memberStatusText").textContent = user ? (user.isPlus ? i18n[currentLang].plus : i18n[currentLang].normal) : i18n[currentLang].guest;
  document.getElementById("memberEmailText").textContent = user ? `${user.name || user.email} · ${user.email}` : i18n[currentLang].guestHint;
  document.getElementById("lastOrderText").textContent = lastOrder ? `${lastOrder.productName} · ${lastOrder.trackingId}` : "-";
  document.getElementById("ownerIncomeText").textContent = money(state.revenue);
  document.querySelector(".user-pill span").textContent = user ? `${user.name || user.email}${user.isPlus ? " · Plus" : ""}` : i18n[currentLang].loginRegister;
}

function renderTracking() {
  const user = currentUser();
  const order = [...state.orders].reverse().find((item) => !user || item.email === user.email);
  const timeline = document.getElementById("trackingTimeline");
  if (!order) {
    timeline.innerHTML = `<p>${i18n[currentLang].trackingEmpty}</p>`;
    return;
  }
  timeline.innerHTML = `
    <strong>${order.productName}</strong>
    <small>${order.trackingId} · ${order.address}</small>
    ${i18n[currentLang].trackingSteps.map((step, index) => `
      <div class="tracking-step ${index < 3 ? "done" : ""}">
        <span>${index + 1}</span>
        <p>${step}</p>
      </div>
    `).join("")}
  `;
}

function renderAdmin() {
  document.getElementById("admin").hidden = !state.adminLoggedIn;
  document.getElementById("metricRevenue").textContent = money(state.revenue);
  document.getElementById("metricMembers").textContent = state.members.length;
  document.getElementById("metricOrders").textContent = state.orders.length;
  document.getElementById("metricPlus").textContent = state.members.filter((member) => member.isPlus).length;

  document.getElementById("adminProductList").innerHTML = state.products.map((product) => `
    <div class="admin-row">
      <div>
        <strong>${currentLang === "zh" ? product.nameZh : product.nameEn}</strong>
        <span>${categoryLabel(product.category)}</span>
      </div>
      <input type="number" min="1" value="${product.price}" data-price-id="${product.id}">
    </div>
  `).join("");

  document.getElementById("adminMemberList").innerHTML = state.members.length ? state.members.map((member) => `
    <div class="admin-row">
      <div>
        <strong>${member.name || member.email}</strong>
        <span>${member.email}</span>
      </div>
      <em>${member.isPlus ? i18n[currentLang].plus : i18n[currentLang].normal}</em>
    </div>
  `).join("") : `<p>${i18n[currentLang].guestHint}</p>`;
  applyLayout();
}

function requireUser() {
  if (currentUser()) return true;
  document.getElementById("authModal").showModal();
  return false;
}

document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  translate();
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-category]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderProducts();
  });
});

document.querySelectorAll(".pet-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pet-chip").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const pet = pets[button.dataset.pet];
    document.getElementById("petName").textContent = pet.name;
    document.getElementById("wellnessScore").textContent = pet.score;
    document.getElementById("nextCare").textContent = pet.nextCare;
    document.getElementById("subscriptionValue").textContent = pet.sub;
    document.getElementById("petAvatar").src = pet.avatar;
    document.getElementById("petMeta").textContent = i18n[currentLang][pet.metaKey];
  });
});

document.querySelector("[data-generate-tip]").addEventListener("click", () => {
  tipIndex += 1;
  document.getElementById("careTip").textContent = i18n[currentLang].tips[tipIndex % i18n[currentLang].tips.length];
});

document.querySelectorAll("[data-open-auth]").forEach((button) => {
  button.addEventListener("click", () => document.getElementById("authModal").showModal());
});

document.querySelector("[data-open-checkout]").addEventListener("click", () => {
  if (requireUser()) document.getElementById("checkoutModal").showModal();
});

document.querySelector("[data-subscribe-pay]").addEventListener("click", () => {
  const user = currentUser();
  if (!user) return;
  user.isPlus = true;
  state.revenue += 29;
  saveState();
  translate();
  toast(i18n[currentLang].subscribedToast);
});

document.getElementById("authForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim().toLowerCase();
  let member = state.members.find((item) => item.email === email);
  if (!member) {
    member = {
      name: form.elements.name.value.trim() || email.split("@")[0],
      email,
      isPlus: false,
      joinedAt: new Date().toLocaleDateString()
    };
    state.members.push(member);
  }
  state.currentUserEmail = email;
  saveState();
  form.closest("dialog").close();
  form.reset();
  translate();
});

document.getElementById("productGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-buy-product]");
  if (!button || !requireUser()) return;
  const product = state.products.find((item) => item.id === button.dataset.buyProduct);
  state.selectedProductId = product.id;
  document.getElementById("checkoutProductName").textContent = productName(product);
  document.getElementById("checkoutProductDesc").textContent = productDesc(product);
  document.getElementById("checkoutProductPrice").textContent = money(product.price);
  document.getElementById("paymentAccountText").textContent = `${i18n[currentLang].paymentRoute}: ${state.payment.method} · ${state.payment.account}`;
  document.getElementById("productCheckoutModal").showModal();
});

document.getElementById("productCheckoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const user = currentUser();
  const product = state.products.find((item) => item.id === state.selectedProductId);
  if (!user || !product) return;
  const order = {
    id: `ORD-${Date.now().toString().slice(-6)}`,
    trackingId: `PLX${Math.floor(100000 + Math.random() * 899999)}`,
    email: user.email,
    productName: productName(product),
    amount: product.price,
    address: event.currentTarget.elements.address.value.trim(),
    createdAt: new Date().toLocaleString()
  };
  state.orders.push(order);
  state.revenue += Number(product.price);
  saveState();
  event.currentTarget.closest("dialog").close();
  event.currentTarget.reset();
  translate();
  toast(i18n[currentLang].orderToast);
});

document.querySelector("[data-open-tracking]").addEventListener("click", () => {
  renderTracking();
  document.getElementById("trackingModal").showModal();
});

function openAdminLogin() {
  document.getElementById("adminLoginModal").showModal();
}

window.addEventListener("hashchange", () => {
  if (location.hash === "#owner") openAdminLogin();
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
    openAdminLogin();
  }
});

if (location.hash === "#owner") openAdminLogin();

document.getElementById("adminLoginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.currentTarget.elements.password.value !== ADMIN_PASSWORD) {
    toast(i18n[currentLang].wrongPassword);
    return;
  }
  state.adminLoggedIn = true;
  saveState();
  event.currentTarget.closest("dialog").close();
  event.currentTarget.reset();
  translate();
  document.getElementById("admin").scrollIntoView({ behavior: "smooth" });
  toast(i18n[currentLang].adminToast);
});

document.querySelector("[data-admin-logout]").addEventListener("click", () => {
  state.adminLoggedIn = false;
  saveState();
  translate();
});

document.getElementById("productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  state.products.push({
    id: `p${Date.now()}`,
    nameZh: form.elements.nameZh.value.trim(),
    nameEn: form.elements.nameEn.value.trim(),
    descZh: form.elements.descZh.value.trim(),
    descEn: form.elements.descEn.value.trim(),
    price: Number(form.elements.price.value),
    category: form.elements.category.value,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80"
  });
  saveState();
  form.reset();
  translate();
  toast(i18n[currentLang].saved);
});

document.getElementById("adminProductList").addEventListener("change", (event) => {
  const input = event.target.closest("[data-price-id]");
  if (!input) return;
  const product = state.products.find((item) => item.id === input.dataset.priceId);
  product.price = Number(input.value);
  saveState();
  translate();
  toast(i18n[currentLang].saved);
});

document.getElementById("layoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  state.layout.theme = form.elements.theme.value;
  state.layout.heroTitle = form.elements.heroTitle.value.trim();
  saveState();
  applyLayout();
  translate();
  toast(i18n[currentLang].saved);
});

document.getElementById("paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  state.payment.method = form.elements.method.value;
  state.payment.account = form.elements.account.value.trim() || defaultState.payment.account;
  saveState();
  translate();
  toast(i18n[currentLang].saved);
});

document.getElementById("cyberPetList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cyber-pet]");
  if (!button || !requireUser()) return;
  const pet = cyberPets.find((item) => item.id === button.dataset.cyberPet);
  if (!state.cyber.ownedPetIds.includes(pet.id)) {
    state.cyber.ownedPetIds.push(pet.id);
    state.revenue += pet.price;
    toast(i18n[currentLang].cyberAdoptedToast);
  }
  state.cyber.activePetId = pet.id;
  state.cyber.mood = pet.mood;
  state.cyber.energy = pet.energy;
  saveState();
  translate();
});

document.getElementById("cyberItemList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cyber-item]");
  if (!button || !requireUser()) return;
  const item = cyberItems.find((entry) => entry.id === button.dataset.cyberItem);
  if (item.type === "food") {
    state.revenue += item.price;
    state.cyber.energy = Math.min(100, state.cyber.energy + item.energy);
    state.cyber.mood = Math.min(100, state.cyber.mood + 3);
    toast(i18n[currentLang].cyberFedToast);
  } else {
    if (!state.cyber.ownedItemIds.includes(item.id)) {
      state.cyber.ownedItemIds.push(item.id);
      state.revenue += item.price;
    }
    state.cyber.activeSkin = item.id;
    toast(i18n[currentLang].cyberItemToast);
  }
  saveState();
  translate();
});

document.querySelector("[data-open-cyber-name]").addEventListener("click", () => {
  if (!requireUser()) return;
  const form = document.getElementById("cyberNameForm");
  form.elements.name.value = state.cyber.name;
  document.getElementById("cyberNameModal").showModal();
});

document.getElementById("cyberNameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.cyber.name = event.currentTarget.elements.name.value.trim() || "Nova";
  saveState();
  event.currentTarget.closest("dialog").close();
  translate();
  toast(i18n[currentLang].saved);
});

async function initApp() {
  await loadCmsContent();
  applyLayout();
  translate();
}

initApp();
