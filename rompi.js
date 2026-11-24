const WHATSAPP_NUMBER = "62895413909591";
const WHATSAPP_DISPLAY = "+62 895-4139-09591";

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// ================= DATA PRICE LIST BAHAN, MODEL ROMPI, KERAH, FURING, PENUTUP, SAKU, REFLEKTOR & UTILITAS =================
const SIZE_SURCHARGE = {
  S: 0,
  M: 0,
  L: 0,
  XL: 0,
  "2XL": 10000,
  "3XL": 20000,
  "4XL": 30000,
  "5XL": 40000,
};

const ALL_AVAILABLE_SIZES = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
let sizeKeys = ["S", "M", "L", "XL", "2XL", "3XL"];

const fabricCatalog = [
  {
    id: "taslan-jn",
    name: "Parasut Taslan JN",
    shortName: "Taslan JN",
    prices: {
      lapangan: 115000,
      tactical: 125000,
      safety: 120000,
    },
  },
  {
    id: "parasut-mayer",
    name: "Parasut Mayer / Despo",
    shortName: "Mayer / Despo",
    prices: {
      lapangan: 120000,
      tactical: 130000,
      safety: 125000,
    },
  },
  {
    id: "american-drill",
    name: "American Drill / Nagata",
    shortName: "American Drill",
    prices: {
      lapangan: 130000,
      tactical: 140000,
      safety: 135000,
    },
  },
  {
    id: "kanvas-ripstop",
    name: "Kanvas Ripstop (Kotak)",
    shortName: "Kanvas Ripstop",
    prices: {
      lapangan: 140000,
      tactical: 150000,
      safety: 145000,
    },
  },
];

const collarCatalog = {
  stand: {
    label: "Kerah Tegak (Stand)",
    shortLabel: "Kerah Tegak",
    extra: 0,
    desc: "Kerah berdiri tegak melindungi leher, khas rompi lapangan & touring",
  },
  vneck: {
    label: "Kerah V-Neck (Tanpa Kerah)",
    shortLabel: "V-Neck",
    extra: 0,
    desc: "Potongan leher V terbuka ringan & nyaman ditumpuk di atas kemeja/kaos",
  },
  lipat: {
    label: "Kerah Lipat Kemeja",
    shortLabel: "Kerah Lipat",
    extra: 0,
    desc: "Kerah lipat rapi berkesan semi-formal untuk supervisor, panitia & instansi",
  },
  hoodie: {
    label: "Kerah + Hoodie Lepas-Pasang",
    shortLabel: "Kerah+Hoodie",
    extra: 15000,
    desc: "Dilengkapi tudung kepala (hoodie) dengan resleting/kancing lepas-pasang",
  },
};

const liningCatalog = {
  tanpa: {
    label: "Tanpa Furing (1 Lapis)",
    shortLabel: "Tanpa Furing",
    extra: 0,
    desc: "Single layer ringan dan tidak gerah untuk event atau proyek lapangan",
  },
  jaring: {
    label: "Furing Jaring (Mesh)",
    shortLabel: "Furing Jaring",
    extra: 10000,
    desc: "Furing jaring (mesh) berpori adem untuk aktivitas lapangan",
  },
  hyget: {
    label: "Furing Hyget / Asahi",
    shortLabel: "Furing Hyget",
    extra: 10000,
    desc: "Lapisan kain dalam halus dan lembut di kulit untuk pemakaian harian",
  },
  quilting: {
    label: "Furing Quilting Dakron",
    shortLabel: "Quilting Tebal",
    extra: 25000,
    desc: "Lapisan dalam berpola kotak (padded) tebal dan hangat ala puffer vest",
  },
};

const closureCatalog = {
  zipper: {
    label: "Full Resleting (Zipper)",
    shortLabel: "Full Resleting",
    extra: 0,
  },
  snap_zip: {
    label: "Resleting + Flap Kancing Snap",
    shortLabel: "Zipper + Snap",
    extra: 8000,
  },
  velcro: {
    label: "Perekat Velcro (Proyek)",
    shortLabel: "Velcro",
    extra: 0,
  },
};

const pocketCatalog = {
  saku2: {
    label: "2 Saku Bawah Miring",
    shortLabel: "2 Saku",
    extra: 0,
  },
  saku4: {
    label: "4 Saku Lapangan (2 Dada + 2 Bawah)",
    shortLabel: "4 Saku",
    extra: 8000,
  },
  tactical6: {
    label: "Multi-Pocket 6+ Saku Cargo",
    shortLabel: "6+ Cargo",
    extra: 15000,
  },
};

const reflectorCatalog = {
  tanpa: {
    label: "Tanpa Reflektor",
    shortLabel: "Tanpa Scotchlite",
    extra: 0,
  },
  standar: {
    label: "Scotchlite 5 cm (Dada & Punggung)",
    shortLabel: "Scotchlite",
    extra: 8000,
  },
  full: {
    label: "Full High-Vis Strip (Melingkar)",
    shortLabel: "Full Hi-Vis",
    extra: 14000,
  },
};

const utilityCatalog = {
  standar: {
    label: "Tanpa Aksesoris Tambahan",
    shortLabel: "Standar",
    extra: 0,
  },
  lengkap: {
    label: "Pengait HT, Ring-D & Slot ID Card",
    shortLabel: "+HT & ID Card",
    extra: 5000,
  },
};

// ================= SILUET TECHNICAL FLAT-SKETCH ROMPI =================
const FRONT_SILHOUETTE_PATH =
  "M114 24 L76 38 C81 68 78 104 62 126 L62 252 Q104 260 144 259 Q149 258 149 249 L149 114 Q124 72 114 24 Z " +
  "M186 24 L224 38 C219 68 222 104 238 126 L238 252 Q196 260 156 259 Q151 258 151 249 L151 114 Q176 72 186 24 Z";

const BACK_SILHOUETTE_PATH =
  "M114 24 Q150 33 186 24 L224 38 C219 68 222 104 238 126 L238 252 Q150 267 62 252 L62 126 C78 104 81 68 76 38 Z";

const cuts = {
  lapangan: {
    label: "Lapangan",
    chartTitle: "Lapangan / Outdoor",
    body: FRONT_SILHOUETTE_PATH,
    bodyBack: BACK_SILHOUETTE_PATH,
    shoulderL: "M114 24 L76 38",
    shoulderR: "M186 24 L224 38",
    trimL: "M79 39 C84 69 81 105 65 127",
    trimR: "M221 39 C216 69 219 105 235 127",
    hemX1: 62,
    hemX2: 238,
    hemTopY: 247,
    hemBotY: 252,
    bottomY: 252,
    backYoke: "M78 74 L222 74",
    chestLeft: { x: 174, y: 86 },
    chestRight: { x: 98, y: 86 },
    sizes: [
      { size: "S", p: 64, l: 51, b: 41 },
      { size: "M", p: 66, l: 54, b: 43 },
      { size: "L", p: 68, l: 57, b: 45 },
      { size: "XL", p: 71, l: 60, b: 47 },
      { size: "2XL", p: 74, l: 63, b: 49 },
      { size: "3XL", p: 76, l: 66, b: 51 },
      { size: "4XL", p: 78, l: 69, b: 53 },
      { size: "5XL", p: 80, l: 72, b: 55 },
    ],
  },
  tactical: {
    label: "Tactical",
    chartTitle: "Tactical / Cargo",
    body: FRONT_SILHOUETTE_PATH,
    bodyBack: BACK_SILHOUETTE_PATH,
    shoulderL: "M114 24 L76 38",
    shoulderR: "M186 24 L224 38",
    trimL: "M79 39 C84 69 81 105 65 127",
    trimR: "M221 39 C216 69 219 105 235 127",
    hemX1: 62,
    hemX2: 238,
    hemTopY: 247,
    hemBotY: 252,
    bottomY: 252,
    backYoke: "M78 74 L222 74",
    chestLeft: { x: 174, y: 86 },
    chestRight: { x: 98, y: 86 },
    sizes: [
      { size: "S", p: 65, l: 53, b: 43 },
      { size: "M", p: 67, l: 56, b: 45 },
      { size: "L", p: 69, l: 59, b: 47 },
      { size: "XL", p: 72, l: 62, b: 49 },
      { size: "2XL", p: 75, l: 65, b: 51 },
      { size: "3XL", p: 77, l: 68, b: 53 },
      { size: "4XL", p: 79, l: 71, b: 55 },
      { size: "5XL", p: 81, l: 74, b: 57 },
    ],
  },
  safety: {
    label: "Safety Proyek",
    chartTitle: "Safety / Proyek",
    body: FRONT_SILHOUETTE_PATH,
    bodyBack: BACK_SILHOUETTE_PATH,
    shoulderL: "M114 24 L76 38",
    shoulderR: "M186 24 L224 38",
    trimL: "M79 39 C84 69 81 105 65 127",
    trimR: "M221 39 C216 69 219 105 235 127",
    hemX1: 62,
    hemX2: 238,
    hemTopY: 247,
    hemBotY: 252,
    bottomY: 252,
    backYoke: "M78 74 L222 74",
    chestLeft: { x: 174, y: 86 },
    chestRight: { x: 98, y: 86 },
    sizes: [
      { size: "S", p: 63, l: 52, b: 42 },
      { size: "M", p: 65, l: 55, b: 44 },
      { size: "L", p: 67, l: 58, b: 46 },
      { size: "XL", p: 70, l: 61, b: 48 },
      { size: "2XL", p: 73, l: 64, b: 50 },
      { size: "3XL", p: 75, l: 67, b: 52 },
      { size: "4XL", p: 77, l: 70, b: 54 },
      { size: "5XL", p: 79, l: 73, b: 56 },
    ],
  },
};

const printCatalog = {
  dadaKiri: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Dada kiri dibiarkan polos minimalis.",
      mini: null,
    },
    {
      id: "logo-dada-kiri",
      name: "Logo Dada Kiri",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Paling Populer",
      desc: "Bordir komputer atau sablon DTF logo instansi/komunitas di dada kiri.",
      mini: { x: 33, y: 15, w: 8, h: 8 },
      mainZone: { anchor: "chestLeft", w: 26, h: 26 },
    },
    {
      id: "patch-velcro-kiri",
      name: "Patch Velcro Dada Kiri",
      dim: "8 × 5 cm",
      area: 40,
      badge: "Tactical / Lapangan",
      desc: "Emblem bordir dengan perekat velcro lepas-pasang di dada kiri.",
      mini: { x: 33, y: 16, w: 9, h: 5.5 },
      mainZone: { anchor: "chestLeft", w: 28, h: 17 },
    },
    {
      id: "logo-teks-kiri",
      name: "Logo + Teks Unit",
      dim: "9 × 6 cm",
      area: 54,
      badge: "Instansi / Panitia",
      desc: "Logo disertai nama divisi atau jabatan di bawahnya.",
      mini: { x: 32, y: 15, w: 10, h: 6.5 },
      mainZone: { anchor: "chestLeft", w: 30, h: 20 },
    },
  ],
  dadaKanan: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Dada kanan dibiarkan polos.",
      mini: null,
    },
    {
      id: "nama-dada-kanan",
      name: "Bordir Nama Personel",
      dim: "10 × 2,5 cm",
      area: 25,
      badge: "Standar Seragam",
      desc: "Bordir nama anggota/staf atau velcro name-tag di dada kanan.",
      mini: { x: 18, y: 17, w: 10, h: 3.5 },
      mainZone: { anchor: "chestRight", w: 30, h: 10 },
    },
    {
      id: "logo-dada-kanan",
      name: "Logo / Bendera Kanan",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Logo Kedua",
      desc: "Logo sponsor, K3, atau bendera Merah Putih di dada kanan.",
      mini: { x: 19, y: 15, w: 8, h: 8 },
      mainZone: { anchor: "chestRight", w: 26, h: 26 },
    },
    {
      id: "bendera-nama-kanan",
      name: "Bendera + Nama",
      dim: "10 × 6 cm",
      area: 60,
      badge: "Lapangan / Proyek",
      desc: "Kombinasi emblem bendera di atas dan bordir nama di bawah.",
      mini: { x: 18, y: 15, w: 10, h: 6.5 },
      mainZone: { anchor: "chestRight", w: 30, h: 20 },
    },
  ],
  belakang: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Bagian punggung rompi dibiarkan polos.",
      mini: null,
    },
    {
      id: "logo-tengkuk",
      name: "Logo Tengkuk Atas",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Minimalis",
      desc: "Logo kecil di bagian tengkuk bawah kerah belakang.",
      mini: { x: 26, y: 10, w: 8, h: 8 },
      mainZone: { anchor: "backNeck", w: 22, h: 22 },
    },
    {
      id: "tulisan-punggung",
      name: "Tulisan Instansi / Crew",
      dim: "26 × 10 cm",
      area: 260,
      badge: "Paling Populer",
      desc: "Tulisan identitas organisasi, panitia, atau perusahaan melintang di punggung.",
      mini: { x: 18, y: 16, w: 24, h: 9 },
      mainZone: { anchor: "backCenter", w: 84, h: 30, cy: 104 },
    },
    {
      id: "a4-punggung",
      name: "Logo + Teks Punggung (A4)",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Standar Besar",
      desc: "Kombinasi logo utama dan tulisan besar di tengah punggung.",
      mini: { x: 20, y: 15, w: 20, h: 24 },
      mainZone: { anchor: "backCenter", w: 68, h: 86, cy: 142 },
    },
    {
      id: "a3-punggung",
      name: "Full Punggung (A3)",
      dim: "29,7 × 42 cm",
      area: 1247,
      badge: "Full Artwork",
      desc: "Grafis atau emblem full punggung ukuran maksimal.",
      mini: { x: 18, y: 14, w: 24, h: 31 },
      mainZone: { anchor: "backCenter", w: 92, h: 118, cy: 150 },
    },
  ],
  sakuBahu: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Bagian saku dan bahu dibiarkan polos.",
      mini: null,
    },
    {
      id: "bordir-saku-kiri",
      name: "Bordir Saku Bawah Kiri",
      dim: "7 × 4 cm",
      area: 28,
      badge: "Saku Bawah",
      desc: "Logo kecil atau label unit pada tutup/bidang saku bawah kiri.",
      mini: { x: 33, y: 34, w: 8, h: 5 },
      mainZone: { anchor: "pocketLeft", w: 24, h: 14 },
    },
    {
      id: "bordir-saku-kanan",
      name: "Bordir Saku Bawah Kanan",
      dim: "7 × 4 cm",
      area: 28,
      badge: "Saku Bawah",
      desc: "Bordir identitas atau nomor unit di saku bawah kanan.",
      mini: { x: 19, y: 34, w: 8, h: 5 },
      mainZone: { anchor: "pocketRight", w: 24, h: 14 },
    },
    {
      id: "woven-hem-bawah",
      name: "Label Woven Ujung Bawah",
      dim: "5 × 3 cm",
      area: 15,
      badge: "Brand Label",
      desc: "Label woven / bordir kecil di sudut kanan bawah rompi.",
      mini: { x: 19, y: 41, w: 6, h: 3.5 },
      mainZone: { anchor: "hemRight", w: 18, h: 11 },
    },
  ],
};

// ================= PALET WARNA LENGKAP (36 WARNA TERMASUK HIGH-VIS SAFETY) =================
const palette = [
  // Netral (8)
  { name: "Hitam Jet", hex: "#16171a", cat: "netral" },
  { name: "Charcoal", hex: "#2e3136", cat: "netral" },
  { name: "Dark Grey", hex: "#4b5563", cat: "netral" },
  { name: "Slate Grey", hex: "#64748b", cat: "netral" },
  { name: "Light Grey", hex: "#d4d4d8", cat: "netral" },
  { name: "Abu Misty", hex: "#cbd2d9", cat: "netral" },
  { name: "Broken White", hex: "#ece7dc", cat: "netral" },
  { name: "Putih Bersih", hex: "#f5f5f4", cat: "netral" },

  // Biru (6)
  { name: "Midnight Navy", hex: "#1d2d44", cat: "biru" },
  { name: "Royal Blue", hex: "#3568c8", cat: "biru" },
  { name: "Benhur Blue", hex: "#1d4ed8", cat: "biru" },
  { name: "Indigo Denim", hex: "#415a77", cat: "biru" },
  { name: "Sky Mist", hex: "#8ecae6", cat: "biru" },
  { name: "Baby Blue", hex: "#bae6fd", cat: "biru" },

  // Hijau (8)
  { name: "Army Green", hex: "#3f4a36", cat: "hijau" },
  { name: "Forest Green", hex: "#2d5a46", cat: "hijau" },
  { name: "Botol Emerald", hex: "#14532d", cat: "hijau" },
  { name: "Olive Moss", hex: "#5a6842", cat: "hijau" },
  { name: "Matcha Green", hex: "#748c69", cat: "hijau" },
  { name: "Sage Leaf", hex: "#879b8e", cat: "hijau" },
  { name: "Deep Teal", hex: "#25756b", cat: "hijau" },
  { name: "Hijau Stabilo", hex: "#84cc16", cat: "hijau" },

  // Earth / Khaki (8)
  { name: "Warm Cream", hex: "#e6dccb", cat: "earth" },
  { name: "Sand Beige", hex: "#d6c7b2", cat: "earth" },
  { name: "Soft Khaki", hex: "#bfa98e", cat: "earth" },
  { name: "Caramel", hex: "#a97142", cat: "earth" },
  { name: "Mocca Latte", hex: "#8b6b54", cat: "earth" },
  { name: "Coffee Brown", hex: "#5c3d2e", cat: "earth" },
  { name: "Espresso", hex: "#4a3326", cat: "earth" },
  { name: "Terracotta", hex: "#9e473b", cat: "earth" },

  // Safety & Cerah (6)
  { name: "Oranye Safety", hex: "#f97316", cat: "cerah" },
  { name: "Kuning Stabilo", hex: "#eab308", cat: "cerah" },
  { name: "Maroon", hex: "#782327", cat: "cerah" },
  { name: "Merah Cabe", hex: "#dc2626", cat: "cerah" },
  { name: "Mustard Gold", hex: "#d97706", cat: "cerah" },
  { name: "Dusty Pink", hex: "#e5989b", cat: "cerah" },
];

// ================= KONDISI AWAL (DEFAULT KERAH V-NECK + FURING JARING + 4 SAKU + MIDNIGHT NAVY) =================
const DEFAULT_NAVY_COLOR =
  palette.find((p) => p.name === "Midnight Navy") || palette[8];

let selectedCut = "lapangan";
let selectedCollar = "vneck";
let selectedLining = "jaring";
let selectedClosure = "zipper";
let selectedPocket = "saku4";
let selectedReflector = "tanpa";
let selectedUtility = "standar";
let selectedFabricId = "american-drill";
let selectedColor = DEFAULT_NAVY_COLOR;
let activeFilter = "all";
let colorSearchQuery = "";
let selectedSize = null;

let activeSide = "dadaKiri";
let mockupView = "depan";

let isMobileFloatingActive = false;
let isMobileFloatingDetailExpanded = false;

const customDesigns = {
  dadaKiri: null,
  dadaKanan: null,
  belakang: null,
  sakuBahu: null,
};

const selectedPrints = {
  dadaKiri: printCatalog.dadaKiri[1],
  dadaKanan: printCatalog.dadaKanan[0],
  belakang: printCatalog.belakang[2],
  sakuBahu: printCatalog.sakuBahu[0],
};

function createEmptyQuantities() {
  return {
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    "2XL": 0,
    "3XL": 0,
    "4XL": 0,
    "5XL": 0,
  };
}

let nextVariantId = 2;
let orderVariants = [
  {
    id: 1,
    color: DEFAULT_NAVY_COLOR,
    closure: "zipper",
    quantities: createEmptyQuantities(),
  },
];
let activeVariantId = 1;
let stackDisplayMode = "combined";

const prevRenderedQuantities = createEmptyQuantities();
let generatedSpecDataUrl = "";
let generatedSpecBlob = null;

function formatRupiah(num) {
  return "Rp " + Number(num || 0).toLocaleString("id-ID");
}

function getSelectedFabric() {
  return (
    fabricCatalog.find((f) => f.id === selectedFabricId) ||
    fabricCatalog.find((f) => f.id === "american-drill") ||
    fabricCatalog[0]
  );
}

function getGlobalModelAddons() {
  const collarAddon = collarCatalog[selectedCollar]?.extra || 0;
  const liningAddon = liningCatalog[selectedLining]?.extra || 0;
  const pocketAddon = pocketCatalog[selectedPocket]?.extra || 0;
  const reflectorAddon = reflectorCatalog[selectedReflector]?.extra || 0;
  const utilityAddon = utilityCatalog[selectedUtility]?.extra || 0;
  return (
    collarAddon + liningAddon + pocketAddon + reflectorAddon + utilityAddon
  );
}

function getVariantBaseUnitPrice(variant) {
  const fabric = getSelectedFabric();
  const basePrice = fabric.prices[selectedCut] || fabric.prices.lapangan;
  const globalAddons = getGlobalModelAddons();
  const closureAddon = closureCatalog[variant.closure]?.extra || 0;
  return Math.max(50000, basePrice + globalAddons + closureAddon);
}

function getSizeUnitPrice(variant, sizeKey) {
  return getVariantBaseUnitPrice(variant) + (SIZE_SURCHARGE[sizeKey] || 0);
}

function calculateVariantTotalPrice(variant) {
  return sizeKeys.reduce((sum, sz) => {
    const qty = variant.quantities[sz] || 0;
    return sum + qty * getSizeUnitPrice(variant, sz);
  }, 0);
}

function getActiveVariant() {
  return (
    orderVariants.find((v) => v.id === activeVariantId) || orderVariants[0]
  );
}

function addNextJumboSize() {
  if (sizeKeys.length >= ALL_AVAILABLE_SIZES.length) return;
  const nextSize = ALL_AVAILABLE_SIZES[sizeKeys.length];
  sizeKeys.push(nextSize);

  const gridEl = document.getElementById("folded-stacks-grid");
  if (gridEl) {
    gridEl.innerHTML = "";
  }

  const btn = document.getElementById("add-jumbo-size-btn");
  if (btn) {
    if (sizeKeys.length < ALL_AVAILABLE_SIZES.length) {
      const upcoming = ALL_AVAILABLE_SIZES[sizeKeys.length];
      const extra = SIZE_SURCHARGE[upcoming] || 0;
      btn.innerHTML = `<i data-lucide="plus" class="icon-xs"></i><span>Tambah Size ${upcoming} (+${extra / 1000}rb)</span>`;
    } else {
      btn.classList.add("hidden");
    }
  }

  renderSizeChart(selectedCut);
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  refreshIcons();
}

// ================= FLOATING LIVE PREVIEW KHUSUS SMARTPHONE =================
const MOBILE_FLOATING_BOTTOM_OFFSET = 40;

function updateMobileFloatingStage() {
  const wrapper = document.getElementById("rompi-stage-wrapper");
  const stage = document.getElementById("rompi-stage");
  const priceBadge = document.getElementById("stage-floating-price-badge");
  const detailBtn = document.getElementById("toggle-floating-detail-btn");
  if (!wrapper || !stage) return;

  const isMobile = window.innerWidth < 1024;
  if (!isMobile) {
    if (isMobileFloatingActive) {
      isMobileFloatingActive = false;
      isMobileFloatingDetailExpanded = false;
      wrapper.style.minHeight = "";
      stage.classList.remove("mobile-stage-floating", "mobile-stage-expanded");
      if (priceBadge) priceBadge.classList.add("hidden");
      if (detailBtn) {
        detailBtn.classList.add("hidden");
        detailBtn.classList.remove("inline-flex");
      }
      syncFloatingDetailButtonUI();
    }
    return;
  }

  const wrapperTop = wrapper.getBoundingClientRect().top;

  if (wrapperTop <= 8 && !isMobileFloatingActive) {
    stage.classList.add("mobile-stage-floating");
    isMobileFloatingActive = true;

    if (priceBadge) priceBadge.classList.remove("hidden");
    if (detailBtn) {
      detailBtn.classList.remove("hidden");
      detailBtn.classList.add("inline-flex");
    }

    wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
  } else if (wrapperTop > 24 && isMobileFloatingActive) {
    isMobileFloatingActive = false;
    isMobileFloatingDetailExpanded = false;
    wrapper.style.minHeight = "";
    stage.classList.remove("mobile-stage-floating", "mobile-stage-expanded");

    if (priceBadge) priceBadge.classList.add("hidden");
    if (detailBtn) {
      detailBtn.classList.add("hidden");
      detailBtn.classList.remove("inline-flex");
    }
    syncFloatingDetailButtonUI();
  }
}

function handleMobileFloatingResize() {
  updateMobileFloatingStage();
  if (isMobileFloatingActive && !isMobileFloatingDetailExpanded) {
    const wrapper = document.getElementById("rompi-stage-wrapper");
    const stage = document.getElementById("rompi-stage");
    if (wrapper && stage) {
      wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
    }
  }
}

function pulseFloatingStageFeedback() {
  if (!isMobileFloatingActive || !window.Motion || !window.Motion.animate) {
    return;
  }
  const stage = document.getElementById("rompi-stage");
  if (stage) {
    Motion.animate(
      stage,
      { scale: [0.985, 1] },
      { type: "spring", stiffness: 420, damping: 24 },
    );
  }
}

function toggleMobileFloatingDetail() {
  const stage = document.getElementById("rompi-stage");
  if (!stage) return;
  isMobileFloatingDetailExpanded = !isMobileFloatingDetailExpanded;
  stage.classList.toggle(
    "mobile-stage-expanded",
    isMobileFloatingDetailExpanded,
  );
  syncFloatingDetailButtonUI();
}

function syncFloatingDetailButtonUI() {
  const textEl = document.getElementById("floating-detail-btn-text");
  const iconEl = document.getElementById("floating-detail-btn-icon");
  if (textEl) {
    textEl.textContent = isMobileFloatingDetailExpanded ? "Tutup" : "Chart";
  }
  if (iconEl) {
    iconEl.setAttribute(
      "data-lucide",
      isMobileFloatingDetailExpanded ? "chevron-up" : "chevron-down",
    );
    refreshIcons();
  }
}

window.addEventListener("scroll", updateMobileFloatingStage, {
  passive: true,
});
window.addEventListener("resize", handleMobileFloatingResize, {
  passive: true,
});

function shadeHex(hex, amount) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (n >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((n >> 8) & 255) + amount));
  const b = Math.min(255, Math.max(0, (n & 255) + amount));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function isDark(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  const lum = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum < 115;
}

function getLuminance(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
}

// ================= RENDER TABEL PRICE LIST RESPONSIF =================
function selectFabricAndCut(fabricId, cutKey) {
  selectedFabricId = fabricId;
  if (cutKey && cutKey !== selectedCut) {
    setCut(cutKey);
    return;
  }
  renderPriceListTable();
  renderQtyControls();
  updateOrderTotalsAndWA();
}

function renderPriceListTable() {
  const tbody = document.getElementById("pricelist-table-body");
  const indicator = document.getElementById("fabric-cut-indicator");
  if (!tbody) return;

  const currentFab = getSelectedFabric();
  if (indicator) {
    indicator.textContent = `${cuts[selectedCut].label} • ${currentFab.name}`;
  }

  const cutCols = ["lapangan", "tactical", "safety"];
  cutCols.forEach((colKey) => {
    const th = document.getElementById(`th-cut-${colKey}`);
    if (th) {
      th.classList.toggle("col-cut-active", selectedCut === colKey);
    }
  });

  tbody.innerHTML = "";

  fabricCatalog.forEach((fab) => {
    const isRowSelected = fab.id === selectedFabricId;
    const tr = document.createElement("tr");
    if (isRowSelected) {
      tr.className = "row-fabric-active";
    }

    const priceCellsHTML = cutCols
      .map((colKey) => {
        const isCellActive = isRowSelected && selectedCut === colKey;
        const isColHighlighted = selectedCut === colKey;
        const formattedNumber = Number(fab.prices[colKey] || 0).toLocaleString(
          "id-ID",
        );

        return `
          <td class="text-right">
            <button
              type="button"
              onclick="selectFabricAndCut('${fab.id}', '${colKey}')"
              class="price-cell-btn ${
                isCellActive
                  ? "cell-price-active"
                  : isColHighlighted
                    ? "cell-col-highlight"
                    : ""
              }"
            >
              <span><span class="max-[360px]:hidden">Rp </span>${formattedNumber}</span>
            </button>
          </td>
        `;
      })
      .join("");

    tr.innerHTML = `
      <td>
        <button
          type="button"
          onclick="selectFabricAndCut('${fab.id}', null)"
          class="flex items-center gap-1.5 sm:gap-2 text-left cursor-pointer w-full touch-manipulation"
        >
          <span
            class="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
              isRowSelected
                ? "border-[#2563eb] bg-[#2563eb]"
                : "border-zinc-300 bg-white"
            }"
          >
            ${
              isRowSelected
                ? '<span class="w-1.5 h-1.5 rounded-full bg-white"></span>'
                : ""
            }
          </span>
          <span class="font-bold ${
            isRowSelected ? "text-[#1d4ed8]" : "text-zinc-800"
          }">
            <span class="hidden sm:inline">${fab.name}</span>
            <span class="sm:hidden">${fab.shortName}</span>
          </span>
        </button>
      </td>
      ${priceCellsHTML}
    `;
    tbody.appendChild(tr);
  });
}

// ================= SINKRONISASI GEOMETRI & WARNA SVG ROMPI =================
function updateHeaderSpecLabel() {
  const cutLabel = document.getElementById("active-cut-label");
  if (cutLabel) {
    const cName = cuts[selectedCut]?.label || "Lapangan";
    const colName = collarCatalog[selectedCollar]?.shortLabel || "V-Neck";
    const linName =
      liningCatalog[selectedLining]?.shortLabel || "Furing Jaring";
    cutLabel.textContent = `${cName} • ${colName} • ${linName}`;
  }
}

function updateRompiGeometry() {
  const cut = cuts[selectedCut] || cuts.lapangan;
  const isBack = mockupView === "belakang" || mockupView === "zoomPunggung";

  const bodyPath = isBack ? cut.bodyBack : cut.body;
  ["rompi-body", "rompi-light-h", "rompi-light-v"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("d", bodyPath);
  });

  const shoulderL = document.getElementById("seam-shoulder-l");
  const shoulderR = document.getElementById("seam-shoulder-r");
  if (shoulderL) shoulderL.setAttribute("d", cut.shoulderL);
  if (shoulderR) shoulderR.setAttribute("d", cut.shoulderR);

  const trimL = document.getElementById("armhole-trim-l");
  const trimR = document.getElementById("armhole-trim-r");
  if (trimL) trimL.setAttribute("d", cut.trimL);
  if (trimR) trimR.setAttribute("d", cut.trimR);

  // Update visual tekstur furing di dalam rongga kerah V-Neck
  const liningMeshEl = document.getElementById("neck-lining-mesh");
  if (liningMeshEl) {
    if (selectedLining === "jaring") {
      liningMeshEl.setAttribute("fill", "url(#mesh-lining-pattern)");
    } else if (selectedLining === "quilting") {
      liningMeshEl.setAttribute("fill", "url(#quilting-lining-pattern)");
    } else if (selectedLining === "hyget") {
      liningMeshEl.setAttribute("fill", "rgba(255,255,255,0.06)");
    } else {
      liningMeshEl.setAttribute("fill", "transparent");
    }
  }

  // Hoodie belakang jika kerah hoodie dipilih
  const hoodieGroup = document.getElementById("hoodie-back-group");
  if (hoodieGroup) {
    hoodieGroup.style.display = selectedCollar === "hoodie" ? "block" : "none";
  }

  // Epaulet bahu (Tactical)
  const epauletGroup = document.getElementById("tactical-epaulet-group");
  if (epauletGroup) {
    epauletGroup.style.display = selectedCut === "tactical" ? "block" : "none";
  }

  // Reflektor Scotchlite
  const refGroup = document.getElementById("reflector-group");
  const refFullGroup = document.getElementById("reflector-full-group");
  if (refGroup) {
    if (selectedReflector === "tanpa") {
      refGroup.style.display = "none";
    } else {
      refGroup.style.display = "block";
      const barW = cut.hemX2 - cut.hemX1;
      [
        "ref-horiz-bar-1",
        "ref-horiz-core-1",
        "ref-horiz-bar-2",
        "ref-horiz-core-2",
      ].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.setAttribute("x", cut.hemX1);
          el.setAttribute("width", barW);
        }
      });
      if (refFullGroup) {
        refFullGroup.style.display =
          selectedReflector === "full" ? "block" : "none";
      }
    }
  }

  const frontNeckGroup = document.getElementById("front-neck-group");
  const frontYokeSeams = document.getElementById("front-yoke-seams");
  const frontCollarGroup = document.getElementById("front-collar-group");
  const frontClosureGroup = document.getElementById("front-closure-group");
  const pocketsGroup = document.getElementById("rompi-pockets-group");
  const utilityGroup = document.getElementById("utility-addons-group");
  const backCollarGroup = document.getElementById("back-collar-group");
  const backYokeSeam = document.getElementById("back-yoke-seam");
  const backDropHem = document.getElementById("rompi-back-drop-hem");

  if (backYokeSeam) {
    backYokeSeam.setAttribute("d", cut.backYoke);
  }

  if (isBack) {
    if (frontNeckGroup) frontNeckGroup.style.display = "none";
    if (frontYokeSeams) frontYokeSeams.style.display = "none";
    if (frontCollarGroup) frontCollarGroup.style.display = "none";
    if (frontClosureGroup) frontClosureGroup.style.display = "none";
    if (pocketsGroup) pocketsGroup.style.display = "none";
    if (utilityGroup) utilityGroup.style.display = "none";
    if (backDropHem) backDropHem.style.display = "none";
    if (backCollarGroup) backCollarGroup.style.display = "block";
    if (backYokeSeam) backYokeSeam.style.display = "block";
  } else {
    if (frontNeckGroup) frontNeckGroup.style.display = "block";
    if (frontYokeSeams) frontYokeSeams.style.display = "block";
    if (frontCollarGroup) frontCollarGroup.style.display = "block";
    if (frontClosureGroup) frontClosureGroup.style.display = "block";
    if (pocketsGroup) pocketsGroup.style.display = "block";
    if (backDropHem) backDropHem.style.display = "block";
    if (utilityGroup) {
      utilityGroup.style.display =
        selectedUtility === "lengkap" ? "block" : "none";
    }
    if (backCollarGroup) backCollarGroup.style.display = "none";
    if (backYokeSeam) backYokeSeam.style.display = "none";

    // Kerah depan
    const standGroup = document.getElementById("collar-stand-group");
    const vneckGroup = document.getElementById("collar-vneck-group");
    const lipatGroup = document.getElementById("collar-lipat-group");
    if (standGroup) {
      standGroup.style.display =
        selectedCollar === "stand" || selectedCollar === "hoodie"
          ? "block"
          : "none";
    }
    if (vneckGroup) {
      vneckGroup.style.display = selectedCollar === "vneck" ? "block" : "none";
    }
    if (lipatGroup) {
      lipatGroup.style.display = selectedCollar === "lipat" ? "block" : "none";
    }

    // Penutup depan
    const zipGroup = document.getElementById("rompi-zipper-group");
    const snapFlapGroup = document.getElementById("rompi-snap-flap-group");
    const velcroGroup = document.getElementById("rompi-velcro-group");
    if (zipGroup) {
      zipGroup.style.display = selectedClosure === "zipper" ? "block" : "none";
    }
    if (snapFlapGroup) {
      snapFlapGroup.style.display =
        selectedClosure === "snap_zip" ? "block" : "none";
    }
    if (velcroGroup) {
      velcroGroup.style.display =
        selectedClosure === "velcro" ? "block" : "none";
    }

    // Saku
    const p2 = document.getElementById("pockets-2-group");
    const p4 = document.getElementById("pockets-4-group");
    const p6 = document.getElementById("pockets-6-group");
    if (p2) p2.style.display = selectedPocket === "saku2" ? "block" : "none";
    if (p4) p4.style.display = selectedPocket === "saku4" ? "block" : "none";
    if (p6) {
      p6.style.display = selectedPocket === "tactical6" ? "block" : "none";
    }
  }

  updateHeaderSpecLabel();
  updatePrintZoneOverlay();
}

function updateRompiColors(hex) {
  const dark = isDark(hex);
  const lum = getLuminance(hex);
  const outlineColor = dark && lum < 35 ? "#3f3f46" : "#0f172a";
  const accentFill = shadeHex(hex, dark ? 9 : -10);
  const innerNeckFill = shadeHex(hex, dark ? -10 : -24);
  const facingFill = shadeHex(hex, dark ? -4 : -16);
  const subtleStitch = dark ? "rgba(255,255,255,0.22)" : "rgba(15,23,42,0.28)";

  const bodyEl = document.getElementById("rompi-body");
  if (bodyEl) {
    bodyEl.setAttribute("fill", hex);
    bodyEl.setAttribute("stroke", outlineColor);
  }

  const backDropHem = document.getElementById("rompi-back-drop-hem");
  if (backDropHem) {
    backDropHem.setAttribute("fill", innerNeckFill);
    backDropHem.setAttribute("stroke", outlineColor);
  }

  const neckInner = document.getElementById("rompi-neck-inner");
  if (neckInner) {
    neckInner.setAttribute("fill", innerNeckFill);
    neckInner.setAttribute("stroke", outlineColor);
  }

  const neckFacing = document.getElementById("neck-facing-top");
  if (neckFacing) {
    neckFacing.setAttribute("fill", facingFill);
    neckFacing.setAttribute("stroke", outlineColor);
  }

  ["seam-shoulder-l", "seam-shoulder-r", "back-yoke-seam"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", outlineColor);
  });

  [
    "armhole-trim-l",
    "armhole-trim-r",
    "rompi-hoodie-seam",
    "rompi-hem-stitch",
    "vneck-trim-l",
    "vneck-trim-r",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", subtleStitch);
  });

  [
    "rompi-hoodie-outer",
    "epaulet-l",
    "epaulet-r",
    "stand-collar-l",
    "stand-collar-r",
    "lipat-flap-l",
    "lipat-flap-r",
    "back-collar-band",
    "rompi-placket-box",
    "pocket2-l",
    "pocket2-r",
    "p4-bot-flap-l",
    "p4-bot-flap-r",
    "p6-chest-flap-l",
    "p6-chest-flap-r",
    "p6-bot-flap-l",
    "p6-bot-flap-r",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", accentFill);
      el.setAttribute("stroke", outlineColor);
    }
  });

  [
    "p4-bot-body-l",
    "p4-bot-body-r",
    "p6-chest-body-l",
    "p6-chest-body-r",
    "p6-bot-body-l",
    "p6-bot-body-r",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", hex);
      el.setAttribute("stroke", outlineColor);
    }
  });

  // Update warna kotak saku 3D & slot resleting pada 4 saku lapangan
  document.querySelectorAll('#pockets-4-group rect[rx="5"]').forEach((rect) => {
    rect.setAttribute("fill", hex);
    rect.setAttribute("stroke", outlineColor);
  });
  document.querySelectorAll('#pockets-4-group rect[rx="1"]').forEach((rect) => {
    rect.setAttribute("fill", innerNeckFill);
    rect.setAttribute("stroke", outlineColor);
  });

  const activeVar = getActiveVariant();
  const colorDot = document.getElementById("active-color-dot");
  const colorName = document.getElementById("active-color-name");
  if (colorDot) colorDot.style.backgroundColor = hex;
  if (colorName) colorName.textContent = activeVar.color.name;
}

// ================= KONTROL FITUR CUSTOM ROMPI =================
function setCut(cutKey) {
  if (!cuts[cutKey]) return;
  selectedCut = cutKey;

  document.querySelectorAll(".cut-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.cut === cutKey);
  });

  const chartTitle = document.getElementById("chart-cut-title");
  if (chartTitle) {
    chartTitle.textContent = cuts[cutKey].chartTitle || cuts[cutKey].label;
  }

  renderPriceListTable();
  renderSizeChart(cutKey);
  updateRompiGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();

  if (window.Motion && window.Motion.animate) {
    Motion.animate(
      "#rompi-svg",
      { scale: [0.96, 1] },
      { type: "spring", stiffness: 320, damping: 22 },
    );
  }
}

function setCollar(collarKey) {
  if (!collarCatalog[collarKey]) return;
  selectedCollar = collarKey;

  document.querySelectorAll(".collar-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.collar === collarKey);
  });

  const hintEl = document.getElementById("collar-desc-hint");
  if (hintEl) {
    hintEl.textContent = collarCatalog[collarKey].desc;
  }

  updateRompiGeometry();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setLining(liningKey) {
  if (!liningCatalog[liningKey]) return;
  selectedLining = liningKey;

  document.querySelectorAll(".lining-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.lining === liningKey);
  });

  const hintEl = document.getElementById("lining-desc-hint");
  if (hintEl) {
    hintEl.textContent = liningCatalog[liningKey].desc;
  }

  updateRompiGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setClosure(closureKey) {
  if (!closureCatalog[closureKey]) return;
  selectedClosure = closureKey;
  const activeVar = getActiveVariant();
  activeVar.closure = closureKey;

  document.querySelectorAll(".closure-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.closure === closureKey,
    );
  });

  updateRompiGeometry();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setPocket(pocketKey) {
  if (!pocketCatalog[pocketKey]) return;
  selectedPocket = pocketKey;

  document.querySelectorAll(".pocket-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.pocket === pocketKey);
  });

  updateRompiGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setReflector(reflectorKey) {
  if (!reflectorCatalog[reflectorKey]) return;
  selectedReflector = reflectorKey;

  document.querySelectorAll(".reflector-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.reflector === reflectorKey,
    );
  });

  updateRompiGeometry();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setUtility(utilityKey) {
  if (!utilityCatalog[utilityKey]) return;
  selectedUtility = utilityKey;

  document.querySelectorAll(".utility-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.utility === utilityKey,
    );
  });

  updateRompiGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

// ================= PALET WARNA & PENCARIAN WARNA =================
function renderPalette() {
  const container = document.getElementById("swatches");
  if (!container) return;

  const activeVar = getActiveVariant();
  const q = colorSearchQuery.trim().toLowerCase();

  const filtered = palette.filter((item) => {
    const matchCat = activeFilter === "all" || item.cat === activeFilter;
    const matchQuery = !q || item.name.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-5 text-center text-xs font-semibold text-zinc-500">
        Warna "${colorSearchQuery}" tidak ditemukan. Coba kata kunci lain.
      </div>
    `;
    return;
  }

  filtered.forEach((item) => {
    const isSelected = activeVar.color.hex === item.hex;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `swatch-card ${isSelected ? "swatch-card-active" : ""}`;
    btn.onclick = () => setColor(item);

    btn.innerHTML = `
      <span
        class="w-5 h-5 rounded-full border border-black/20 shrink-0 shadow-2xs flex items-center justify-center"
        style="background-color: ${item.hex}"
      >
        ${
          isSelected
            ? `<i data-lucide="check" class="icon-xs ${isDark(item.hex) ? "text-white" : "text-zinc-900"}"></i>`
            : ""
        }
      </span>
      <span class="text-xs font-bold text-zinc-800 truncate">${item.name}</span>
    `;
    container.appendChild(btn);
  });

  refreshIcons();
}

function setColor(colorObj) {
  selectedColor = colorObj;
  const activeVar = getActiveVariant();
  activeVar.color = colorObj;

  updateRompiColors(colorObj.hex);
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setColorByHex(hex) {
  const found = palette.find((p) => p.hex === hex);
  if (found) setColor(found);
}

function handleColorSearch(val) {
  colorSearchQuery = val || "";
  const clearBtn = document.getElementById("clear-color-search-btn");
  if (clearBtn) {
    clearBtn.classList.toggle("hidden", colorSearchQuery.trim().length === 0);
  }
  renderPalette();
}

function clearColorSearch() {
  colorSearchQuery = "";
  const input = document.getElementById("color-search-input");
  const clearBtn = document.getElementById("clear-color-search-btn");
  if (input) input.value = "";
  if (clearBtn) clearBtn.classList.add("hidden");
  renderPalette();
}

function initFilterButtons() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      document.querySelectorAll(".filter-btn").forEach((b) => {
        const active = b === btn;
        b.className = active
          ? "filter-btn px-3 py-1.5 rounded-full text-xs font-bold bg-[#18181b] text-white cursor-pointer"
          : "filter-btn px-3 py-1.5 rounded-full text-xs font-semibold bg-[#f1f2ee] text-zinc-700 hover:bg-[#e4e5e0] cursor-pointer";
      });
      renderPalette();
    });
  });
}

// ================= PELETAKAN BORDIR / SABLON & UPLOAD PER TITIK =================
function buildMiniRompiSVG(opt) {
  let overlay = "";
  if (opt.isNone) {
    overlay = `
      <line x1="22" y1="22" x2="38" y2="38" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>
      <line x1="38" y1="22" x2="22" y2="38" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>
    `;
  } else if (opt.mini) {
    const m = opt.mini;
    overlay = `
      <rect
        x="${m.x}"
        y="${m.y}"
        width="${m.w}"
        height="${m.h}"
        rx="1.2"
        fill="#3b82f6"
        stroke="#1d4ed8"
        stroke-width="1"
      />
    `;
  }

  return `
    <svg viewBox="0 0 60 60" class="w-10 h-10 sm:w-13 sm:h-13 shrink-0">
      <path
        d="M23 6 L15 9 Q17 18 15 26 L15 53 L45 53 L45 26 Q43 18 45 9 L37 6 L30 22 Z"
        fill="#f4f4f5"
        stroke="#d4d4d8"
        stroke-width="1.3"
        stroke-linejoin="round"
      />
      <line x1="30" y1="22" x2="30" y2="53" stroke="#d4d4d8" stroke-width="1" />
      ${overlay}
    </svg>
  `;
}

function renderDesignSlots() {
  const container = document.getElementById("design-slots-grid");
  if (!container) return;

  const sideMeta = [
    { key: "dadaKiri", label: "Dada Kiri" },
    { key: "dadaKanan", label: "Dada Kanan" },
    { key: "belakang", label: "Punggung" },
    { key: "sakuBahu", label: "Saku / Bahu" },
  ];

  let hasAnyDesign = false;
  container.innerHTML = "";

  sideMeta.forEach(({ key, label }) => {
    const design = customDesigns[key];
    if (design) hasAnyDesign = true;
    const isCurrentSide = activeSide === key;

    const card = document.createElement("div");
    card.className = `rounded-xl border p-2.5 flex flex-col justify-between gap-2 transition ${
      isCurrentSide
        ? "bg-white border-[#2563eb] ring-2 ring-blue-500/20 shadow-xs"
        : "bg-white border-blue-200/80 hover:border-blue-400"
    }`;

    if (design) {
      card.innerHTML = `
        <div
          onclick="selectPrintSide('${key}')"
          class="cursor-pointer flex items-center gap-2"
          title="Klik untuk lihat di mockup rompi"
        >
          <img
            src="${design.url}"
            alt="${label}"
            class="w-9 h-9 rounded-lg object-contain bg-zinc-800 border border-zinc-300 shrink-0 p-0.5"
          />
          <div class="min-w-0 flex-1">
            <div class="text-[11px] font-extrabold text-zinc-900 truncate">
              ${label}
            </div>
            <div class="text-[10px] font-bold text-[#2563eb] truncate">
              ${design.name}
            </div>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button
            type="button"
            onclick="triggerDesignUpload('${key}')"
            class="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[11px] font-bold cursor-pointer transition"
          >
            <i data-lucide="refresh-cw" class="icon-xs"></i>
            <span>Ganti</span>
          </button>
          <button
            type="button"
            onclick="clearCustomDesign('${key}')"
            class="inline-flex items-center justify-center py-1.5 px-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-[11px] font-bold cursor-pointer transition"
            title="Hapus gambar ${label}"
          >
            <i data-lucide="x" class="icon-xs"></i>
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <div
            onclick="selectPrintSide('${key}')"
            class="cursor-pointer min-w-0"
          >
            <div class="text-xs font-extrabold text-zinc-900 truncate">
              ${label}
            </div>
            <div class="text-[10px] font-medium text-zinc-500">
              Klik untuk unggah logo/tulisan
            </div>
          </div>
          <button
            type="button"
            onclick="triggerDesignUpload('${key}')"
            class="inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[11px] font-extrabold cursor-pointer transition shadow-2xs shrink-0"
          >
            <i data-lucide="upload" class="icon-xs"></i>
            <span>Upload</span>
          </button>
        </div>
      `;
    }

    container.appendChild(card);
  });

  const clearAllBtn = document.getElementById("clear-all-designs-btn");
  if (clearAllBtn) {
    clearAllBtn.classList.toggle("hidden", !hasAnyDesign);
  }
  refreshIcons();
}

function triggerDesignUpload(side) {
  const input = document.getElementById(`upload-${side}`);
  if (input) input.click();
}

function processUploadedImageFile(side, file) {
  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    customDesigns[side] = {
      url: ev.target.result,
      name: file.name,
    };

    if (selectedPrints[side].isNone) {
      selectedPrints[side] = printCatalog[side][1];
    }

    selectPrintSide(side);
    updateAllPrintUI();
    pulseFloatingStageFeedback();
  };
  reader.readAsDataURL(file);
}

function handleDesignUpload(side, input) {
  const file = input.files && input.files[0];
  processUploadedImageFile(side, file);
}

function handleDropzoneDragOver(event) {
  event.preventDefault();
  const box = document.getElementById("hero-upload-dropzone");
  if (box) box.classList.add("drag-over");
}

function handleDropzoneDragLeave(event) {
  event.preventDefault();
  const box = document.getElementById("hero-upload-dropzone");
  if (box) box.classList.remove("drag-over");
}

function handleDropzoneDrop(event) {
  event.preventDefault();
  const box = document.getElementById("hero-upload-dropzone");
  if (box) box.classList.remove("drag-over");

  const file =
    event.dataTransfer &&
    event.dataTransfer.files &&
    event.dataTransfer.files[0];
  if (file) {
    processUploadedImageFile(activeSide, file);
  }
}

function clearCustomDesign(side) {
  customDesigns[side] = null;
  const input = document.getElementById(`upload-${side}`);
  if (input) input.value = "";
  updateAllPrintUI();
}

function clearAllCustomDesigns() {
  ["dadaKiri", "dadaKanan", "belakang", "sakuBahu"].forEach((side) => {
    customDesigns[side] = null;
    const input = document.getElementById(`upload-${side}`);
    if (input) input.value = "";
  });
  updateAllPrintUI();
}

function renderPrintOptions() {
  const grid = document.getElementById("print-options-grid");
  if (!grid) return;

  const list = printCatalog[activeSide];
  const currentChoice = selectedPrints[activeSide];

  grid.innerHTML = "";

  list.forEach((opt) => {
    const isActive = currentChoice.id === opt.id;
    const barPercent =
      opt.area === 0
        ? 0
        : Math.min(100, Math.max(6, Math.round((opt.area / 1250) * 100)));

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `print-card ${isActive ? "print-card-active" : ""}`;
    btn.onclick = () => {
      selectedPrints[activeSide] = opt;
      updateAllPrintUI();
      pulseFloatingStageFeedback();
    };

    btn.innerHTML = `
      <div class="flex items-center justify-between w-full sm:w-auto gap-1.5">
        ${buildMiniRompiSVG(opt)}
        <span class="sm:hidden print-badge ${opt.isNone ? "print-badge-none" : ""}">
          ${opt.badge}
        </span>
      </div>
      <div class="flex-1 min-w-0 w-full">
        <span class="hidden sm:inline-block print-badge ${opt.isNone ? "print-badge-none" : ""}">
          ${opt.badge}
        </span>
        <div class="text-xs sm:text-sm font-extrabold text-zinc-900 leading-tight">
          ${opt.name}
        </div>
        <div class="text-[11px] sm:text-xs font-extrabold text-[#2563eb] mt-0.5">
          ${opt.dim}
        </div>
        <p class="text-[10.5px] sm:text-[11px] text-zinc-600 leading-snug mt-0.5 sm:mt-1 line-clamp-2">
          ${opt.desc}
        </p>
        ${
          opt.isNone
            ? `<div class="text-[10px] sm:text-[11px] font-semibold text-zinc-400 mt-1.5">Polos</div>`
            : `
              <div class="area-bar-track">
                <div class="area-bar-fill" style="width: ${barPercent}%"></div>
              </div>
              <div class="text-[10px] sm:text-[11px] font-semibold text-zinc-500">
                Luas ± ${opt.area.toLocaleString("id-ID")} cm²
              </div>
            `
        }
      </div>
    `;
    grid.appendChild(btn);
  });
}

function selectPrintSide(side) {
  activeSide = side;

  if (side === "belakang") {
    if (mockupView !== "belakang" && mockupView !== "zoomPunggung") {
      mockupView = "belakang";
    }
  } else {
    if (mockupView === "belakang" || mockupView === "zoomPunggung") {
      mockupView = "depan";
    }
  }

  document.querySelectorAll(".side-tab").forEach((tab) => {
    tab.classList.toggle("side-tab-active", tab.dataset.side === side);
  });

  document.querySelectorAll(".view-pill").forEach((pill) => {
    pill.classList.toggle("view-pill-active", pill.dataset.view === mockupView);
  });

  renderDesignSlots();
  renderPrintOptions();
  updateRompiGeometry();
}

function setMockupView(view) {
  mockupView = view;

  document.querySelectorAll(".view-pill").forEach((pill) => {
    pill.classList.toggle("view-pill-active", pill.dataset.view === view);
  });

  if (view === "belakang" || view === "zoomPunggung") {
    if (activeSide !== "belakang") {
      activeSide = "belakang";
      document.querySelectorAll(".side-tab").forEach((tab) => {
        tab.classList.toggle(
          "side-tab-active",
          tab.dataset.side === "belakang",
        );
      });
      renderDesignSlots();
      renderPrintOptions();
    }
  } else if (activeSide === "belakang") {
    activeSide = "dadaKiri";
    document.querySelectorAll(".side-tab").forEach((tab) => {
      tab.classList.toggle("side-tab-active", tab.dataset.side === "dadaKiri");
    });
    renderDesignSlots();
    renderPrintOptions();
  }

  updateRompiGeometry();
}

function toggleStageZoom() {
  if (mockupView === "zoomDada") {
    setMockupView("depan");
  } else if (mockupView === "zoomPunggung") {
    setMockupView("belakang");
  }
}

function computePrintZoneGeometry(sideKey, cutKey) {
  const cut = cuts[cutKey] || cuts.lapangan;
  const activePrint = selectedPrints[sideKey];
  if (!activePrint || activePrint.isNone || !activePrint.mainZone) {
    return null;
  }

  const z = activePrint.mainZone;
  let x = 0;
  let y = 0;
  const w = z.w;
  const h = z.h;

  if (z.anchor === "chestLeft") {
    x = cut.chestLeft.x;
    y = cut.chestLeft.y;
  } else if (z.anchor === "chestRight") {
    x = cut.chestRight.x;
    y = cut.chestRight.y;
  } else if (z.anchor === "backNeck") {
    x = 150 - w / 2;
    y = 44;
  } else if (z.anchor === "backCenter") {
    x = 150 - w / 2;
    y = (z.cy || 120) - h / 2;
  } else if (z.anchor === "pocketLeft") {
    x = 178;
    y = 196;
  } else if (z.anchor === "pocketRight") {
    x = 94;
    y = 196;
  } else if (z.anchor === "hemRight") {
    x = 96;
    y = 239;
  }

  return {
    x,
    y,
    w,
    h,
    cx: x + w / 2,
    cy: y + h / 2,
    dim: activePrint.dim,
    name: activePrint.name,
  };
}

function updatePrintZoneOverlay() {
  const svg = document.getElementById("rompi-svg");
  const zoomBtn = document.getElementById("toggle-zoom-btn");
  const isBack = mockupView === "belakang" || mockupView === "zoomPunggung";
  const isZoomed = mockupView === "zoomDada" || mockupView === "zoomPunggung";

  if (svg) {
    if (mockupView === "zoomDada") {
      svg.setAttribute("viewBox", "64 16 172 150");
    } else if (mockupView === "zoomPunggung") {
      svg.setAttribute("viewBox", "64 22 172 175");
    } else {
      svg.setAttribute("viewBox", "0 0 300 300");
    }
  }

  if (zoomBtn) {
    zoomBtn.classList.toggle("hidden", !isZoomed);
  }

  const displaySide = isBack
    ? "belakang"
    : activeSide === "belakang"
      ? "dadaKiri"
      : activeSide;

  const activePrint = selectedPrints[displaySide];
  const sideDesign = customDesigns[displaySide];
  const zoneGroup = document.getElementById("print-zone-group");
  const zoneRect = document.getElementById("print-zone-rect");
  const zoneImg = document.getElementById("print-zone-img");
  const zoneLabel = document.getElementById("print-zone-label");

  const viewNames = {
    depan: "Tampak Depan",
    belakang: "Tampak Belakang",
    zoomDada: "Zoom Dada",
    zoomPunggung: "Zoom Punggung",
  };

  const captionEl = document.getElementById("mockup-view-caption");
  if (captionEl) {
    captionEl.textContent = activePrint.isNone
      ? `${viewNames[mockupView]} • Polos (Tanpa Bordir/Sablon)`
      : `${viewNames[mockupView]} • ${activePrint.name} (${activePrint.dim})`;
  }

  const geo = computePrintZoneGeometry(displaySide, selectedCut);
  if (!geo) {
    if (zoneGroup) zoneGroup.style.display = "none";
    return;
  }

  if (zoneGroup) {
    zoneGroup.style.display = "block";
    zoneGroup.setAttribute("onclick", `triggerDesignUpload('${displaySide}')`);
  }

  if (zoneRect) {
    zoneRect.setAttribute("x", geo.x);
    zoneRect.setAttribute("y", geo.y);
    zoneRect.setAttribute("width", geo.w);
    zoneRect.setAttribute("height", geo.h);
  }

  if (zoneImg && zoneRect) {
    if (sideDesign && sideDesign.url) {
      zoneImg.setAttribute("href", sideDesign.url);
      zoneImg.setAttribute("x", geo.x + 1);
      zoneImg.setAttribute("y", geo.y + 1);
      zoneImg.setAttribute("width", Math.max(2, geo.w - 2));
      zoneImg.setAttribute("height", Math.max(2, geo.h - 2));
      zoneImg.style.display = "block";
      zoneRect.setAttribute("fill", "rgba(37, 99, 235, 0.05)");
    } else {
      zoneImg.style.display = "none";
      zoneRect.setAttribute("fill", "rgba(37, 99, 235, 0.22)");
    }
  }

  if (zoneLabel) {
    zoneLabel.setAttribute("x", geo.cx);
    zoneLabel.setAttribute("y", geo.y + geo.h + 8.5);
    zoneLabel.textContent = activePrint.dim;
  }
}

function updateAllPrintUI() {
  ["dadaKiri", "dadaKanan", "belakang", "sakuBahu"].forEach((side) => {
    const item = selectedPrints[side];
    const hasImg = Boolean(customDesigns[side]);
    const subEl = document.getElementById(`tab-sub-${side}`);
    if (!subEl) return;
    subEl.textContent = item.isNone
      ? "Tanpa bordir/sablon"
      : `${item.name} (${item.dim})${hasImg ? " • File" : ""}`;
  });

  const summaryGrid = document.getElementById("summary-grid");
  const labels = {
    dadaKiri: "Dada Kiri",
    dadaKanan: "Dada Kanan",
    belakang: "Punggung",
    sakuBahu: "Saku/Bahu",
  };
  let activeCount = 0;

  if (summaryGrid) {
    summaryGrid.innerHTML = "";
    ["dadaKiri", "dadaKanan", "belakang", "sakuBahu"].forEach((side) => {
      const item = selectedPrints[side];
      const hasImg = Boolean(customDesigns[side]);
      if (!item.isNone) activeCount++;
      const div = document.createElement("div");
      div.className =
        "flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5";
      div.innerHTML = `
        <span class="text-neutral-400 font-semibold">${labels[side]}:</span>
        <span class="font-bold truncate ml-1 ${
          item.isNone ? "text-neutral-500" : "text-white"
        }">
          ${item.isNone ? "Polos" : `${item.dim}${hasImg ? " (File)" : ""}`}
        </span>
      `;
      summaryGrid.appendChild(div);
    });
  }

  const totalSidesEl = document.getElementById("total-print-sides");
  if (totalSidesEl) {
    totalSidesEl.textContent =
      activeCount === 0
        ? "Rompi Polos (Tanpa Bordir)"
        : `${activeCount} Titik Aktif`;
  }

  renderDesignSlots();
  renderPrintOptions();
  updatePrintZoneOverlay();
  updateOrderTotalsAndWA();
}

// ================= SIZE CHART =================
function renderSizeChart(cutKey) {
  const c = cuts[cutKey] || cuts.lapangan;
  const chartTitle = document.getElementById("chart-cut-title");
  if (chartTitle) {
    chartTitle.textContent = c.chartTitle || c.label;
  }
  const rangeBadge = document.getElementById("chart-range-badge");
  if (rangeBadge) {
    rangeBadge.textContent = `S – ${sizeKeys[sizeKeys.length - 1]} (cm)`;
  }

  const tbody = document.getElementById("size-chart-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const visibleRows = c.sizes.filter((r) => sizeKeys.includes(r.size));

  visibleRows.forEach((row) => {
    const isSelected = selectedSize === row.size;
    const extra = SIZE_SURCHARGE[row.size] || 0;
    const tr = document.createElement("tr");
    tr.className = isSelected
      ? "bg-blue-50/90 transition-colors cursor-pointer"
      : "odd:bg-white even:bg-[#fafaf8] hover:bg-blue-50/60 transition-colors cursor-pointer";

    tr.onclick = () => {
      selectedSize = selectedSize === row.size ? null : row.size;
      renderSizeChart(selectedCut);
    };

    tr.innerHTML = `
      <td class="py-1.5 px-3 text-left">
        <div class="flex items-center gap-1.5">
          <span class="inline-flex items-center justify-center min-w-[30px] px-2 py-0.5 rounded-md font-extrabold text-[11px] ${
            isSelected
              ? "bg-[#2563eb] text-white shadow-2xs"
              : "bg-zinc-900/5 text-zinc-900"
          }">
            ${row.size}
          </span>
          ${
            extra > 0
              ? `<span class="text-[9px] font-bold text-[#2563eb]">+${extra / 1000}rb</span>`
              : ""
          }
        </div>
      </td>
      <td class="py-1.5 px-3 text-center font-semibold ${
        isSelected ? "text-[#1d4ed8]" : "text-zinc-800"
      }">${row.p}</td>
      <td class="py-1.5 px-3 text-center font-semibold ${
        isSelected ? "text-[#1d4ed8]" : "text-zinc-800"
      }">${row.l}</td>
      <td class="py-1.5 px-3 text-center font-semibold ${
        isSelected ? "text-[#1d4ed8]" : "text-zinc-800"
      }">${row.b}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= VISUALISASI TUMPUKAN ROMPI LIPAT 3D =================
function buildFoldedVestLayerSVG(
  y,
  primaryHex,
  collarType,
  hasReflector,
  isTop,
  layerIndex,
) {
  const dark = isDark(primaryHex);
  const topColor = primaryHex;
  const frontEdgeColor = shadeHex(primaryHex, dark ? -6 : -14);
  const rightEdgeColor = shadeHex(primaryHex, dark ? -16 : -28);
  const creaseColor = shadeHex(primaryHex, dark ? -22 : -36);
  const highlightColor = shadeHex(primaryHex, dark ? 22 : 12);
  const collarColor = shadeHex(primaryHex, dark ? 10 : -15);
  const collarInnerColor = shadeHex(primaryHex, dark ? -12 : -34);

  const t = 8.4;

  const frontWall = `
    <path
      d="M14 ${y - 8} L94 ${y} L94 ${y + t} L14 ${y - 8 + t} Z"
      fill="${frontEdgeColor}"
    />
    <line
      x1="15"
      y1="${y - 7.3}"
      x2="93"
      y2="${y + 0.6}"
      stroke="${highlightColor}"
      stroke-width="0.9"
      opacity="0.65"
    />
    <line
      x1="14"
      y1="${y - 8 + t}"
      x2="94"
      y2="${y + t}"
      stroke="${creaseColor}"
      stroke-width="1.15"
    />
  `;

  const rightWall = `
    <path
      d="M94 ${y} L126 ${y - 25} L126 ${y - 25 + t} L94 ${y + t} Z"
      fill="${rightEdgeColor}"
    />
    <line
      x1="94"
      y1="${y + t}"
      x2="126"
      y2="${y - 25 + t}"
      stroke="${creaseColor}"
      stroke-width="1.15"
    />
  `;

  let topSurface = "";
  if (isTop) {
    const reflectorStripe = hasReflector
      ? `
        <path
          d="M32 ${y - 22} L112 ${y - 14} L108 ${y - 11} L28 ${y - 19} Z"
          fill="#bef264"
          opacity="0.95"
        />
        <path
          d="M31 ${y - 21} L111 ${y - 13} L109.5 ${y - 11.8} L29.5 ${y - 19.8} Z"
          fill="#f8fafc"
        />
      `
      : "";

    const neckShape =
      collarType === "vneck"
        ? `
          <path
            d="M72 ${y - 30.2} L100 ${y - 27.2} L78 ${y - 16.5} Z"
            fill="${collarInnerColor}"
            stroke="${creaseColor}"
            stroke-width="0.6"
          />
        `
        : `
          <path
            d="M71 ${y - 29.8} Q86 ${y - 33} 101 ${y - 26.5} Q85 ${y - 18} 71 ${y - 29.8} Z"
            fill="${collarInnerColor}"
          />
          <path
            d="M69 ${y - 31} L84 ${y - 24} L74 ${y - 19.5} Z"
            fill="${collarColor}"
            stroke="${creaseColor}"
            stroke-width="0.6"
          />
          <path
            d="M103 ${y - 27.2} L84 ${y - 24} L96 ${y - 18} Z"
            fill="${collarColor}"
            stroke="${creaseColor}"
            stroke-width="0.6"
          />
        `;

    topSurface = `
      <path
        d="M46 ${y - 33} L126 ${y - 25} L94 ${y} L14 ${y - 8} Z"
        fill="${topColor}"
      />
      <path
        d="M46 ${y - 33} Q52 ${y - 24} 38 ${y - 18}"
        fill="none"
        stroke="${creaseColor}"
        stroke-width="0.85"
        stroke-dasharray="2 1.5"
      />
      <path
        d="M126 ${y - 25} Q112 ${y - 20} 106 ${y - 10}"
        fill="none"
        stroke="${creaseColor}"
        stroke-width="0.85"
        stroke-dasharray="2 1.5"
      />
      ${reflectorStripe}
      <path
        d="M14 ${y - 8} L94 ${y} L126 ${y - 25}"
        fill="none"
        stroke="${highlightColor}"
        stroke-width="1"
        opacity="0.75"
      />
      <path
        d="M84 ${y - 25} L54 ${y - 4}"
        stroke="${creaseColor}"
        stroke-width="2"
        stroke-dasharray="1.8 1.4"
        stroke-linecap="round"
      />
      ${neckShape}
    `;
  }

  return `
    <g class="vest-layer" data-layer="${layerIndex}">
      ${frontWall}
      ${rightWall}
      ${topSurface}
    </g>
  `;
}

function animateCounterValue(el, fromVal, toVal) {
  if (!el) return;
  if (fromVal === toVal) {
    el.textContent = toVal;
    return;
  }
  const duration = 260;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(fromVal + (toVal - fromVal) * eased);
    el.textContent = current;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = toVal;
    }
  }
  requestAnimationFrame(step);
}

function getLayersForSize(sz) {
  const activeVar = getActiveVariant();
  const targetVariants =
    stackDisplayMode === "combined" ? orderVariants : [activeVar];

  const totalQty = targetVariants.reduce(
    (sum, v) => sum + (v.quantities[sz] || 0),
    0,
  );

  const maxVisibleLayers = 22;
  if (totalQty === 0) {
    return { totalQty: 0, visualLayers: [] };
  }

  const fullLayers = [];
  targetVariants.forEach((v) => {
    const count = v.quantities[sz] || 0;
    for (let i = 0; i < count; i++) {
      fullLayers.push({
        hex: v.color.hex,
        collar: selectedCollar,
        hasReflector: selectedReflector !== "tanpa",
      });
    }
  });

  if (fullLayers.length <= maxVisibleLayers) {
    return { totalQty, visualLayers: fullLayers };
  }

  const sampled = [];
  for (let i = 0; i < maxVisibleLayers; i++) {
    const idx = Math.min(
      fullLayers.length - 1,
      Math.floor((i * fullLayers.length) / maxVisibleLayers),
    );
    sampled.push(fullLayers[idx]);
  }
  sampled[sampled.length - 1] = fullLayers[fullLayers.length - 1];
  return { totalQty, visualLayers: sampled };
}

function renderFoldedStacks(animateDiff = true) {
  const container = document.getElementById("folded-stacks-grid");
  if (!container) return;

  if (container.children.length === 0) {
    sizeKeys.forEach((sz) => {
      const extra = SIZE_SURCHARGE[sz] || 0;
      const col = document.createElement("button");
      col.type = "button";
      col.id = `stack-col-${sz}`;
      col.onclick = () => changeSizeQty(sz, 1);
      col.title = `Tap untuk tambah +1 pcs ukuran ${sz}`;
      col.className =
        "flex flex-col items-center select-none min-w-0 rounded-xl p-1.5 border border-transparent hover:bg-black/5 active:scale-95 transition cursor-pointer touch-manipulation";
      col.innerHTML = `
        <div class="w-full flex items-end justify-center">
          <svg
            id="stack-svg-${sz}"
            viewBox="0 0 138 235"
            class="w-full h-auto max-h-[104px] sm:max-h-[190px] overflow-visible drop-shadow-[0_6px_10px_rgba(28,25,23,0.12)]"
          ></svg>
        </div>
        <div
          id="stack-num-${sz}"
          class="text-lg sm:text-3xl font-bold tracking-tight leading-none mt-1 tabular-nums transition-colors duration-300"
        >
          0
        </div>
        <div class="text-[11px] sm:text-xs font-extrabold text-zinc-900 mt-1 tracking-wide flex items-center justify-center gap-0.5 leading-tight">
          <span>${sz}</span>
          ${extra > 0 ? `<span class="text-[9px] font-bold text-[#2563eb]">+${extra / 1000}rb</span>` : ""}
        </div>
      `;
      container.appendChild(col);
    });
  }

  const yBase = 222;
  const stepY = 8.1;
  const activeVar = getActiveVariant();

  sizeKeys.forEach((sz) => {
    const { totalQty, visualLayers } = getLayersForSize(sz);
    const prevQty = prevRenderedQuantities[sz] || 0;
    const colBtn = document.getElementById(`stack-col-${sz}`);
    const svg = document.getElementById(`stack-svg-${sz}`);
    const numEl = document.getElementById(`stack-num-${sz}`);
    if (!svg || !numEl) return;

    if (colBtn) {
      colBtn.classList.toggle("bg-white/80", totalQty > 0);
      colBtn.classList.toggle("border-[#e5e2d9]", totalQty > 0);
      colBtn.classList.toggle("shadow-2xs", totalQty > 0);
      colBtn.classList.toggle("border-transparent", totalQty === 0);
    }

    const topHex =
      visualLayers.length > 0
        ? visualLayers[visualLayers.length - 1].hex
        : activeVar.color.hex;

    const lum = getLuminance(topHex);
    const numColor =
      lum > 185 ? "#52525b" : lum > 145 ? shadeHex(topHex, -45) : topHex;
    numEl.style.color = totalQty === 0 ? "#a1a1aa" : numColor;

    animateCounterValue(numEl, prevQty, totalQty);
    if (
      animateDiff &&
      totalQty !== prevQty &&
      window.Motion &&
      window.Motion.animate
    ) {
      Motion.animate(
        numEl,
        { scale: [1.18, 1] },
        { type: "spring", stiffness: 380, damping: 20 },
      );
    }

    if (visualLayers.length === 0) {
      svg.innerHTML = `
        <path
          d="M46 ${yBase - 33} L126 ${yBase - 25} L94 ${yBase} L14 ${yBase - 8} Z"
          fill="rgba(24,24,27,0.03)"
          stroke="#d4d4d8"
          stroke-width="1.3"
          stroke-dasharray="4 3"
        />
      `;
    } else {
      let layersHTML = `
        <polygon
          points="12,${yBase + 2} 95,${yBase + 10.5} 128,${yBase - 15} 45,${yBase - 23}"
          fill="rgba(28, 25, 23, 0.14)"
        />
      `;

      visualLayers.forEach((layer, i) => {
        const y = yBase - i * stepY;
        const isTop = i === visualLayers.length - 1;
        layersHTML += buildFoldedVestLayerSVG(
          y,
          layer.hex,
          layer.collar,
          layer.hasReflector,
          isTop,
          i,
        );
      });

      if (totalQty > 22) {
        const topY = yBase - (visualLayers.length - 1) * stepY - 38;
        layersHTML += `
          <g>
            <rect x="64" y="${topY}" width="44" height="16" rx="8" fill="#18181b" />
            <text
              x="86"
              y="${topY + 11}"
              text-anchor="middle"
              fill="#ffffff"
              font-size="9"
              font-weight="800"
            >
              ${totalQty} pcs
            </text>
          </g>
        `;
      }

      svg.innerHTML = layersHTML;

      if (animateDiff && window.Motion && window.Motion.animate) {
        const layers = svg.querySelectorAll(".vest-layer");
        if (totalQty > prevQty) {
          const startIdx = Math.max(
            0,
            layers.length - Math.min(layers.length, totalQty - prevQty),
          );
          layers.forEach((layerEl, idx) => {
            if (idx >= startIdx) {
              const orderOffset = idx - startIdx;
              Motion.animate(
                layerEl,
                {
                  y: [-22 - orderOffset * 4, 0],
                  opacity: [0, 1],
                },
                {
                  type: "spring",
                  stiffness: 340,
                  damping: 22,
                  delay: Math.min(0.25, orderOffset * 0.03),
                },
              );
            }
          });
        } else if (totalQty < prevQty) {
          const topLayer = layers[layers.length - 1];
          if (topLayer) {
            Motion.animate(
              topLayer,
              { y: [-8, 0] },
              { type: "spring", stiffness: 360, damping: 24 },
            );
          }
        }
      }
    }

    prevRenderedQuantities[sz] = totalQty;
  });
}

// ================= MANAJEMEN MULTI-VARIAN & ESTIMASI HARGA =================
function renderVariantManager() {
  const listEl = document.getElementById("variant-pills-list");
  const countLabel = document.getElementById("variant-count-label");
  const colorSelect = document.getElementById("variant-color-select");
  const closureSelect = document.getElementById("variant-closure-select");
  const modeBtn = document.getElementById("stack-mode-toggle-btn");

  if (!listEl) return;
  if (countLabel) countLabel.textContent = orderVariants.length;
  listEl.innerHTML = "";

  orderVariants.forEach((variant, index) => {
    const isActive = variant.id === activeVariantId;
    const subtotal = sizeKeys.reduce(
      (sum, sz) => sum + (variant.quantities[sz] || 0),
      0,
    );
    const closureShort =
      closureCatalog[variant.closure]?.shortLabel || "Full Resleting";

    const pill = document.createElement("div");
    pill.className = `flex items-center justify-between sm:inline-flex gap-2 px-3 py-2.5 sm:py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer touch-manipulation ${
      isActive
        ? "bg-[#18181b] text-white border-[#18181b] shadow-xs"
        : "bg-white text-zinc-800 border-[#e4e5e0] hover:border-zinc-400"
    }`;
    pill.onclick = () => selectOrderVariant(variant.id);

    pill.innerHTML = `
      <div class="flex items-center gap-2 min-w-0">
        <span
          class="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full border border-white/40 shrink-0"
          style="background-color: ${variant.color.hex}"
        ></span>
        <span class="truncate">#${index + 1} ${variant.color.name}</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded-md shrink-0 ${
          isActive ? "bg-white/15 text-[#93c5fd]" : "bg-[#f1f2ee] text-zinc-600"
        }">
          ${closureShort}
        </span>
      </div>
      <div class="flex items-center gap-2 sm:gap-1.5 shrink-0">
        <span class="text-xs sm:text-[11px] font-extrabold tabular-nums ${
          isActive ? "text-white" : "text-zinc-900"
        }">
          ${subtotal} pcs
        </span>
        ${
          orderVariants.length > 1
            ? `<button
                type="button"
                onclick="event.stopPropagation(); removeOrderVariant(${variant.id})"
                title="Hapus varian ini"
                aria-label="Hapus varian ${variant.color.name}"
                class="ml-0.5 w-7 h-7 sm:w-5 sm:h-5 rounded-full inline-flex items-center justify-center ${
                  isActive
                    ? "bg-white/20 hover:bg-red-500 text-white"
                    : "bg-zinc-100 hover:bg-red-100 text-zinc-500 hover:text-red-600"
                } transition cursor-pointer touch-manipulation"
              ><i data-lucide="x" class="icon-xs"></i></button>`
            : ""
        }
      </div>
    `;
    listEl.appendChild(pill);
  });

  const activeVar = getActiveVariant();
  if (colorSelect && colorSelect.options.length === 0) {
    palette.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.hex;
      opt.textContent = p.name;
      colorSelect.appendChild(opt);
    });
  }
  if (colorSelect) colorSelect.value = activeVar.color.hex;
  if (closureSelect) closureSelect.value = activeVar.closure || "zipper";

  if (modeBtn) {
    modeBtn.textContent =
      stackDisplayMode === "combined"
        ? "Tampilan: Gabungan"
        : "Tampilan: Varian Aktif";
    modeBtn.className =
      stackDisplayMode === "combined" && orderVariants.length > 1
        ? "text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1d4ed8] border border-blue-200 cursor-pointer transition touch-manipulation"
        : "text-[11px] font-bold px-2.5 py-1 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 border border-[#e4e5e0] cursor-pointer transition touch-manipulation";
  }

  refreshIcons();
}

function selectOrderVariant(variantId) {
  activeVariantId = variantId;
  const activeVar = getActiveVariant();
  selectedColor = activeVar.color;
  selectedClosure = activeVar.closure || "zipper";

  document.querySelectorAll(".closure-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.closure === selectedClosure,
    );
  });

  updateRompiGeometry();
  updateRompiColors(selectedColor.hex);
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function addOrderVariant() {
  const currentVar = getActiveVariant();
  const usedHexes = new Set(orderVariants.map((v) => v.color.hex));
  const unusedColor =
    palette.find((p) => !usedHexes.has(p.hex)) ||
    palette[(orderVariants.length * 3) % palette.length];

  const newId = nextVariantId++;
  orderVariants.push({
    id: newId,
    color: unusedColor,
    closure: currentVar.closure || "zipper",
    quantities: createEmptyQuantities(),
  });

  stackDisplayMode = "combined";
  selectOrderVariant(newId);
  renderFoldedStacks(true);
}

function removeOrderVariant(variantId) {
  if (orderVariants.length <= 1) return;
  orderVariants = orderVariants.filter((v) => v.id !== variantId);
  if (activeVariantId === variantId) {
    activeVariantId = orderVariants[0].id;
  }
  selectOrderVariant(activeVariantId);
  renderFoldedStacks(true);
}

function toggleStackDisplayMode() {
  stackDisplayMode = stackDisplayMode === "combined" ? "active" : "combined";
  renderVariantManager();
  renderFoldedStacks(false);
}

function applyPresetMinOrder() {
  const activeVar = getActiveVariant();
  activeVar.quantities.S = (activeVar.quantities.S || 0) + 2;
  activeVar.quantities.M = (activeVar.quantities.M || 0) + 4;
  activeVar.quantities.L = (activeVar.quantities.L || 0) + 4;
  activeVar.quantities.XL = (activeVar.quantities.XL || 0) + 2;
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(true);
  updateOrderTotalsAndWA();
}

function renderQtyControls() {
  const grid = document.getElementById("qty-controls-grid");
  const editingLabel = document.getElementById("qty-editing-label");
  const subtotalLabel = document.getElementById("active-variant-subtotal");
  if (!grid) return;

  const activeVar = getActiveVariant();
  const closureText =
    closureCatalog[activeVar.closure]?.shortLabel || "Full Resleting";

  if (editingLabel) {
    editingLabel.textContent = `2. Atur Jumlah Ukuran — ${activeVar.color.name} (${closureText}):`;
  }

  const subtotal = sizeKeys.reduce(
    (sum, sz) => sum + (activeVar.quantities[sz] || 0),
    0,
  );
  if (subtotalLabel) {
    subtotalLabel.textContent = `Subtotal Varian: ${subtotal} pcs`;
  }

  grid.innerHTML = "";

  sizeKeys.forEach((sz) => {
    const qty = activeVar.quantities[sz] || 0;
    const extra = SIZE_SURCHARGE[sz] || 0;
    const unitPrice = getSizeUnitPrice(activeVar, sz);
    const sizeSubtotal = qty * unitPrice;
    const hasQty = qty > 0;

    const card = document.createElement("div");
    card.className = `rounded-2xl sm:rounded-xl border p-3 sm:p-2 flex flex-col justify-between gap-2 transition ${
      hasQty
        ? "border-[#2563eb] bg-blue-50/50 ring-1 ring-blue-500/20 shadow-2xs"
        : "border-[#e4e5e0] bg-[#fafaf8]"
    }`;
    card.innerHTML = `
      <div class="flex items-center justify-between gap-1">
        <div class="flex items-center gap-1 min-w-0">
          <span
            class="w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full border border-black/15 shrink-0"
            style="background-color: ${activeVar.color.hex}"
          ></span>
          <span class="text-xs sm:text-[11px] font-extrabold text-zinc-900 whitespace-nowrap">Size ${sz}</span>
          ${
            extra > 0
              ? `<span class="text-[9px] sm:text-[8px] font-extrabold px-1 py-0.2 rounded bg-blue-100 text-[#1d4ed8] whitespace-nowrap">+${extra / 1000}rb</span>`
              : ""
          }
        </div>
        <span class="sm:hidden text-[10px] font-bold text-zinc-500 tabular-nums shrink-0">
          ${unitPrice / 1000}rb/pcs
        </span>
      </div>

      <div class="w-full flex items-center justify-between bg-white border ${
        hasQty ? "border-blue-300" : "border-[#e4e5e0]"
      } rounded-xl sm:rounded-lg overflow-hidden shadow-2xs">
        <button
          type="button"
          onclick="changeSizeQty('${sz}', -1)"
          aria-label="Kurangi jumlah ${sz}"
          class="qty-stepper-btn ${
            hasQty
              ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300"
              : "bg-zinc-50/70 text-zinc-400 hover:bg-zinc-100"
          } cursor-pointer transition"
        >
          <i data-lucide="minus" class="icon-xs"></i>
        </button>
        <input
          type="number"
          inputmode="numeric"
          min="0"
          max="999"
          value="${qty}"
          onchange="setSizeQty('${sz}', this.value)"
          onfocus="this.select()"
          aria-label="Jumlah ukuran ${sz}"
          class="qty-input w-full text-center font-extrabold tabular-nums ${
            hasQty ? "text-[#2563eb]" : "text-zinc-950"
          } focus:outline-none"
        />
        <button
          type="button"
          onclick="changeSizeQty('${sz}', 1)"
          aria-label="Tambah jumlah ${sz}"
          class="qty-stepper-btn bg-blue-50/80 text-[#2563eb] hover:bg-blue-100 active:bg-blue-200 cursor-pointer transition"
        >
          <i data-lucide="plus" class="icon-xs"></i>
        </button>
      </div>

      <div class="sm:hidden flex items-center justify-between text-[10.5px] leading-none pt-0.5">
        <span class="text-zinc-500 font-medium">Subtotal:</span>
        <span class="font-extrabold tabular-nums ${
          hasQty ? "text-zinc-900" : "text-zinc-400"
        }">
          ${hasQty ? formatRupiah(sizeSubtotal) : "Rp 0"}
        </span>
      </div>
    `;
    grid.appendChild(card);
  });

  refreshIcons();
}

function changeSizeQty(sizeKey, delta) {
  const activeVar = getActiveVariant();
  const next = Math.max(
    0,
    Math.min(999, (activeVar.quantities[sizeKey] || 0) + delta),
  );
  activeVar.quantities[sizeKey] = next;
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(true);
  updateOrderTotalsAndWA();
}

function setSizeQty(sizeKey, rawVal) {
  const activeVar = getActiveVariant();
  const parsed = parseInt(rawVal, 10);
  activeVar.quantities[sizeKey] = Number.isNaN(parsed)
    ? 0
    : Math.max(0, Math.min(999, parsed));
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(true);
  updateOrderTotalsAndWA();
}

function resetActiveVariantQuantities() {
  const activeVar = getActiveVariant();
  activeVar.quantities = createEmptyQuantities();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(true);
  updateOrderTotalsAndWA();
}

function buildWhatsAppMessageText() {
  const fabric = getSelectedFabric();
  const grandTotal = orderVariants.reduce(
    (totalSum, v) =>
      totalSum + sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0),
    0,
  );
  const totalEstimatedPrice = orderVariants.reduce(
    (sum, v) => sum + calculateVariantTotalPrice(v),
    0,
  );

  const formatSideWA = (side) => {
    const item = selectedPrints[side];
    if (item.isNone) return "Tanpa bordir/sablon";
    const imgNote = customDesigns[side] ? " [File desain terlampir]" : "";
    return `${item.name} (${item.dim})${imgNote}`;
  };

  const variantsWAText = orderVariants.map((v, idx) => {
    const sub = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
    const baseUnit = getVariantBaseUnitPrice(v);
    const varSubtotal = calculateVariantTotalPrice(v);
    const closureLabel = closureCatalog[v.closure]?.label || "Full Resleting";

    const breakdown = sizeKeys
      .filter((sz) => (v.quantities[sz] || 0) > 0)
      .map((sz) => {
        const extra = SIZE_SURCHARGE[sz] || 0;
        return extra > 0
          ? `${sz}(+${extra / 1000}rb): ${v.quantities[sz]}`
          : `${sz}: ${v.quantities[sz]}`;
      })
      .join(", ");
    return `  ${idx + 1}) ${v.color.name} (${closureLabel}) = ${sub} pcs [${breakdown || "Belum diisi"}] | Dasar ${formatRupiah(baseUnit)} | Subtotal ${formatRupiah(varSubtotal)}`;
  });

  return [
    "Halo Atensi Konveksi, saya mau kirim Spesifikasi Order & konsultasi desain Rompi Custom:",
    `• Model Potongan: ${cuts[selectedCut].label}`,
    `• Jenis Bahan Luar: ${fabric.name}`,
    `• Model Kerah: ${collarCatalog[selectedCollar].label}`,
    `• Lapisan Furing: ${liningCatalog[selectedLining].label}`,
    `• Konfigurasi Saku: ${pocketCatalog[selectedPocket].label}`,
    `• Strip Reflektor: ${reflectorCatalog[selectedReflector].label}`,
    `• Utilitas Lapangan: ${utilityCatalog[selectedUtility].label}`,
    `• Bordir/Sablon Dada Kiri: ${formatSideWA("dadaKiri")}`,
    `• Bordir/Sablon Dada Kanan: ${formatSideWA("dadaKanan")}`,
    `• Bordir/Sablon Punggung: ${formatSideWA("belakang")}`,
    `• Bordir/Sablon Saku/Bahu: ${formatSideWA("sakuBahu")}`,
    `• Rincian Varian & Jumlah (Total ${grandTotal} pcs):`,
    ...variantsWAText,
    `• Estimasi Total Biaya: ${formatRupiah(totalEstimatedPrice)} (include maks. 3 titik bordir/sablon)`,
  ].join("\n");
}

function updateOrderTotalsAndWA() {
  const fabric = getSelectedFabric();
  const grandTotal = orderVariants.reduce(
    (totalSum, v) =>
      totalSum + sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0),
    0,
  );

  const totalQtyText = document.getElementById("total-qty-text");
  if (totalQtyText) totalQtyText.textContent = grandTotal;

  const stageQtyBadge = document.getElementById("stage-total-qty-badge");
  if (stageQtyBadge) stageQtyBadge.textContent = `${grandTotal} pcs`;

  const activeVar = getActiveVariant();

  const multiBox = document.getElementById("multi-variant-summary-box");
  const multiRows = document.getElementById("multi-variant-rows");
  if (multiBox && multiRows) {
    if (orderVariants.length > 1) {
      multiBox.classList.remove("hidden");
      multiRows.innerHTML = "";
      orderVariants.forEach((v, idx) => {
        const sub = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
        const breakdown = sizeKeys
          .filter((sz) => (v.quantities[sz] || 0) > 0)
          .map((sz) => `${sz}:${v.quantities[sz]}`)
          .join(", ");
        const closureLabel =
          closureCatalog[v.closure]?.shortLabel || "Full Resleting";

        const row = document.createElement("div");
        row.className =
          "flex flex-wrap items-center justify-between gap-2 bg-white border border-[#e4e5e0] rounded-lg px-2.5 py-1.5";
        row.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full border border-black/20" style="background-color:${v.color.hex}"></span>
            <span class="font-bold text-zinc-900">${idx + 1}. ${v.color.name} (${closureLabel})</span>
            <span class="text-[11px] text-zinc-500">[${breakdown || "0 pcs"}]</span>
          </div>
          <span class="font-extrabold text-zinc-950">${sub} pcs</span>
        `;
        multiRows.appendChild(row);
      });
    } else {
      multiBox.classList.add("hidden");
    }
  }

  const minNote = document.getElementById("min-order-note");
  if (minNote) {
    if (grandTotal === 0) {
      minNote.textContent = "Masukkan jumlah minimal 12 pcs untuk produksi";
      minNote.className = "text-[11px] font-semibold text-zinc-500";
    } else if (grandTotal < 12) {
      minNote.textContent = `Kurang ${12 - grandTotal} pcs dari minimal order (12 pcs)`;
      minNote.className = "text-[11px] font-semibold text-[#2563eb]";
    } else {
      minNote.textContent = "Memenuhi minimal order (12 pcs)";
      minNote.className = "text-[11px] font-semibold text-emerald-700";
    }
  }

  // ================= PERHITUNGAN ESTIMASI HARGA =================
  const estSpecBadge = document.getElementById("est-spec-badge");
  if (estSpecBadge) {
    estSpecBadge.textContent = `${cuts[selectedCut].label} • ${fabric.name}`;
  }

  const breakdownList = document.getElementById("est-breakdown-list");
  let totalEstimatedPrice = 0;

  if (breakdownList) {
    breakdownList.innerHTML = "";

    if (grandTotal === 0) {
      const unitP = getVariantBaseUnitPrice(activeVar);
      const linTxt =
        liningCatalog[selectedLining]?.shortLabel || "Furing Jaring";
      const closureTxt =
        closureCatalog[activeVar.closure]?.shortLabel || "Full Resleting";
      const pocketTxt = pocketCatalog[selectedPocket]?.shortLabel || "4 Saku";

      breakdownList.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-1 text-zinc-600">
          <span>Harga dasar satuan (${linTxt} • ${closureTxt} • ${pocketTxt}):</span>
          <span class="font-extrabold text-zinc-900">${formatRupiah(unitP)} / pcs</span>
        </div>
        <div class="text-[11px] text-zinc-400">
          Masukkan jumlah ukuran di atas untuk melihat total estimasi biaya.
        </div>
      `;
    } else {
      orderVariants.forEach((v, idx) => {
        const qty = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
        if (qty <= 0) return;

        const baseUnit = getVariantBaseUnitPrice(v);
        const subTotalPrice = calculateVariantTotalPrice(v);
        totalEstimatedPrice += subTotalPrice;

        const closureNote =
          closureCatalog[v.closure]?.shortLabel || "Full Resleting";

        const jumboDetails = sizeKeys
          .filter(
            (sz) =>
              (SIZE_SURCHARGE[sz] || 0) > 0 && (v.quantities[sz] || 0) > 0,
          )
          .map(
            (sz) =>
              `${sz} (${v.quantities[sz]}×+${SIZE_SURCHARGE[sz] / 1000}rb)`,
          )
          .join(", ");

        const line = document.createElement("div");
        line.className =
          "py-1.5 border-b border-dashed border-blue-100 last:border-b-0 space-y-0.5";
        line.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0" style="background-color:${v.color.hex}"></span>
              <span class="font-semibold text-zinc-800 truncate">
                ${orderVariants.length > 1 ? `#${idx + 1} ` : ""}${v.color.name} (${closureNote})
              </span>
              <span class="text-[11px] text-zinc-500 shrink-0">
                • ${qty} pcs (dasar ${formatRupiah(baseUnit)})
              </span>
            </div>
            <span class="font-extrabold text-zinc-900 tabular-nums shrink-0">
              ${formatRupiah(subTotalPrice)}
            </span>
          </div>
          ${
            jumboDetails
              ? `<div class="pl-4 text-[10px] font-semibold text-[#1d4ed8]">
                  + Tambahan Size Jumbo: ${jumboDetails}
                </div>`
              : ""
          }
        `;
        breakdownList.appendChild(line);
      });
    }
  }

  const formattedTotal = formatRupiah(totalEstimatedPrice);
  const estTotalEl = document.getElementById("est-total-price");
  if (estTotalEl) estTotalEl.textContent = formattedTotal;

  const floatingPriceBadge = document.getElementById(
    "stage-floating-price-badge",
  );
  if (floatingPriceBadge) {
    floatingPriceBadge.textContent =
      grandTotal === 0
        ? `${formatRupiah(getVariantBaseUnitPrice(activeVar))}/pcs`
        : formattedTotal;
  }

  const activePrintCount = [
    "dadaKiri",
    "dadaKanan",
    "belakang",
    "sakuBahu",
  ].filter((side) => !selectedPrints[side].isNone).length;
  const printWarn = document.getElementById("est-print-warning");
  if (printWarn) {
    printWarn.classList.toggle("hidden", activePrintCount <= 3);
  }
}

// ================= GENERATOR SPESIFIKASI ORDER (PNG / PDF) & MODAL =================
function cloneRompiSvgForSnapshot(viewMode) {
  const origSvg = document.getElementById("rompi-svg");
  if (!origSvg) return null;

  const clone = origSvg.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("viewBox", "0 0 300 300");
  clone.setAttribute("width", "320");
  clone.setAttribute("height", "320");

  const cut = cuts[selectedCut] || cuts.lapangan;
  const isBack = viewMode === "belakang";
  const bodyPath = isBack ? cut.bodyBack : cut.body;

  clone
    .querySelectorAll("#rompi-body, #rompi-light-h, #rompi-light-v")
    .forEach((el) => {
      el.setAttribute("d", bodyPath);
    });

  const toggleDisplay = (selector, show) => {
    const el = clone.querySelector(selector);
    if (el) el.style.display = show ? "block" : "none";
  };

  toggleDisplay("#front-neck-group", !isBack);
  toggleDisplay("#front-yoke-seams", !isBack);
  toggleDisplay("#front-collar-group", !isBack);
  toggleDisplay("#front-closure-group", !isBack);
  toggleDisplay("#rompi-pockets-group", !isBack);
  toggleDisplay("#rompi-back-drop-hem", !isBack);
  toggleDisplay(
    "#utility-addons-group",
    !isBack && selectedUtility === "lengkap",
  );
  toggleDisplay("#back-collar-group", isBack);
  toggleDisplay("#back-yoke-seam", isBack);
  toggleDisplay("#print-zone-group", false);

  return clone;
}

function renderSvgElementToImage(svgEl) {
  return new Promise((resolve) => {
    if (!svgEl) {
      resolve(null);
      return;
    }
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };
    img.src = url;
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve) => {
    if (!dataUrl) {
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function generateVisualSpecCard() {
  const frontSvg = cloneRompiSvgForSnapshot("depan");
  const backSvg = cloneRompiSvgForSnapshot("belakang");

  const [
    frontImg,
    backImg,
    designDadaKiri,
    designDadaKanan,
    designBelakang,
    designSakuBahu,
  ] = await Promise.all([
    renderSvgElementToImage(frontSvg),
    renderSvgElementToImage(backSvg),
    loadImageFromDataUrl(customDesigns.dadaKiri?.url),
    loadImageFromDataUrl(customDesigns.dadaKanan?.url),
    loadImageFromDataUrl(customDesigns.belakang?.url),
    loadImageFromDataUrl(customDesigns.sakuBahu?.url),
  ]);

  const designImgs = {
    dadaKiri: designDadaKiri,
    dadaKanan: designDadaKanan,
    belakang: designBelakang,
    sakuBahu: designSakuBahu,
  };

  const W = 1200;
  const variantRowHeight = 46;
  const extraVariantsHeight = Math.max(
    0,
    (orderVariants.length - 1) * variantRowHeight,
  );
  const H = 860 + extraVariantsHeight;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#f6f6f3";
  ctx.fillRect(0, 0, W, H);

  // Outer Card
  drawRoundedRect(ctx, 24, 24, W - 48, H - 48, 28);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e4e5e0";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Header Banner
  drawRoundedRect(ctx, 24, 24, W - 48, 108, 28);
  ctx.fillStyle = "#18181b";
  ctx.fill();
  ctx.fillRect(24, 96, W - 48, 36);

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 28px system-ui, -apple-system, sans-serif";
  ctx.fillText("ATENSI KONVEKSI — SPESIFIKASI ORDER ROMPI CUSTOM", 56, 74);

  const dateStr = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  ctx.fillStyle = "#93c5fd";
  ctx.font = "700 15px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `Tanggal: ${dateStr}  •  WhatsApp: ${WHATSAPP_DISPLAY}  •  Status: Konsultasi Desain`,
    56,
    104,
  );

  // Left Visual Stage Box (Front & Back Mockup)
  drawRoundedRect(ctx, 52, 156, 530, 390, 22);
  ctx.fillStyle = "#fafaf8";
  ctx.fill();
  ctx.strokeStyle = "#e4e5e0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#52525b";
  ctx.font = "800 13px system-ui, -apple-system, sans-serif";
  ctx.fillText("TAMPAK DEPAN", 132, 184);
  ctx.fillText("TAMPAK BELAKANG", 386, 184);

  const frontBox = { x: 64, y: 196, size: 245 };
  const backBox = { x: 324, y: 196, size: 245 };

  if (frontImg) {
    ctx.drawImage(
      frontImg,
      frontBox.x,
      frontBox.y,
      frontBox.size,
      frontBox.size,
    );
  }
  if (backImg) {
    ctx.drawImage(backImg, backBox.x, backBox.y, backBox.size, backBox.size);
  }

  // Draw Print Zones & Uploaded Logos on Front/Back Preview
  const drawZoneOnSnapshot = (sideKey, targetBox) => {
    const geo = computePrintZoneGeometry(sideKey, selectedCut);
    if (!geo) return;
    const scale = targetBox.size / 300;
    const zx = targetBox.x + geo.x * scale;
    const zy = targetBox.y + geo.y * scale;
    const zw = geo.w * scale;
    const zh = geo.h * scale;

    const uploadedImg = designImgs[sideKey];
    if (uploadedImg) {
      ctx.drawImage(uploadedImg, zx, zy, zw, zh);
    } else {
      ctx.save();
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(zx, zy, zw, zh);
      ctx.fillStyle = "rgba(37, 99, 235, 0.16)";
      ctx.fillRect(zx, zy, zw, zh);
      ctx.restore();
    }
  };

  drawZoneOnSnapshot("dadaKiri", frontBox);
  drawZoneOnSnapshot("dadaKanan", frontBox);
  drawZoneOnSnapshot("sakuBahu", frontBox);
  drawZoneOnSnapshot("belakang", backBox);

  // Active Variant Color Pill under Mockup
  const activeVar = getActiveVariant();
  drawRoundedRect(ctx, 74, 468, 486, 56, 14);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e4e5e0";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(106, 496, 14, 0, Math.PI * 2);
  ctx.fillStyle = activeVar.color.hex;
  ctx.fill();
  ctx.strokeStyle = "rgba(0,0,0,0.25)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `Preview Warna: ${activeVar.color.name} (${closureCatalog[activeVar.closure]?.shortLabel || "Full Resleting"})`,
    132,
    501,
  );

  // Right Spec Table Box
  drawRoundedRect(ctx, 606, 156, 542, 390, 22);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e4e5e0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 17px system-ui, -apple-system, sans-serif";
  ctx.fillText("SPESIFIKASI KONSTRUKSI & MATERIAL ROMPI", 630, 190);

  const fabric = getSelectedFabric();
  const specRows = [
    ["Model Potongan", cuts[selectedCut].label],
    ["Jenis Bahan Luar", fabric.name],
    ["Model Kerah", collarCatalog[selectedCollar].label],
    ["Lapisan Furing", liningCatalog[selectedLining].label],
    ["Konfigurasi Saku", pocketCatalog[selectedPocket].label],
    ["Strip Reflektor", reflectorCatalog[selectedReflector].label],
    ["Utilitas Lapangan", utilityCatalog[selectedUtility].label],
  ];

  specRows.forEach(([k, v], i) => {
    const ry = 224 + i * 44;
    if (i > 0) {
      ctx.strokeStyle = "#f1f2ee";
      ctx.beginPath();
      ctx.moveTo(630, ry - 26);
      ctx.lineTo(1124, ry - 26);
      ctx.stroke();
    }
    ctx.fillStyle = "#71717a";
    ctx.font = "600 14px system-ui, -apple-system, sans-serif";
    ctx.fillText(k, 630, ry);

    ctx.fillStyle = "#18181b";
    ctx.font = "800 14px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(v, 1124, ry);
    ctx.textAlign = "left";
  });

  // 4 Titik Bordir / Sablon Section
  drawRoundedRect(ctx, 52, 566, 1096, 112, 18);
  ctx.fillStyle = "#f8faff";
  ctx.fill();
  ctx.strokeStyle = "#bfdbfe";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#1e40af";
  ctx.font = "800 13px system-ui, -apple-system, sans-serif";
  ctx.fillText("TITIK BORDIR KOMPUTER / SABLON", 74, 592);

  const sideSlots = [
    { key: "dadaKiri", label: "Dada Kiri" },
    { key: "dadaKanan", label: "Dada Kanan" },
    { key: "belakang", label: "Punggung" },
    { key: "sakuBahu", label: "Saku / Bahu" },
  ];

  sideSlots.forEach((slot, idx) => {
    const sx = 74 + idx * 266;
    const sy = 606;
    drawRoundedRect(ctx, sx, sy, 252, 56, 12);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#dbeafe";
    ctx.stroke();

    const pItem = selectedPrints[slot.key];
    ctx.fillStyle = "#52525b";
    ctx.font = "700 11px system-ui, -apple-system, sans-serif";
    ctx.fillText(slot.label, sx + 12, sy + 22);

    ctx.fillStyle = pItem.isNone ? "#a1a1aa" : "#18181b";
    ctx.font = "800 12px system-ui, -apple-system, sans-serif";
    const valTxt = pItem.isNone ? "Polos" : `${pItem.name} (${pItem.dim})`;
    ctx.fillText(valTxt.slice(0, 30), sx + 12, sy + 42);
  });

  // Order Variants & Price Summary Box
  const orderBoxY = 696;
  const orderBoxH = 136 + extraVariantsHeight;
  drawRoundedRect(ctx, 52, orderBoxY, 1096, orderBoxH, 18);
  ctx.fillStyle = "#fafaf8";
  ctx.fill();
  ctx.strokeStyle = "#e4e5e0";
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 14px system-ui, -apple-system, sans-serif";
  ctx.fillText("RINCIAN VARIAN ORDER & ESTIMASI BIAYA", 74, orderBoxY + 30);

  let grandTotalQty = 0;
  let grandTotalCost = 0;

  orderVariants.forEach((v, idx) => {
    const vy = orderBoxY + 62 + idx * variantRowHeight;
    const subQty = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
    const subCost = calculateVariantTotalPrice(v);
    grandTotalQty += subQty;
    grandTotalCost += subCost;

    const breakdown = sizeKeys
      .filter((sz) => (v.quantities[sz] || 0) > 0)
      .map((sz) => `${sz}:${v.quantities[sz]}`)
      .join(", ");

    ctx.beginPath();
    ctx.arc(84, vy - 5, 8, 0, Math.PI * 2);
    ctx.fillStyle = v.color.hex;
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.25)";
    ctx.stroke();

    const closureTxt =
      closureCatalog[v.closure]?.shortLabel || "Full Resleting";
    ctx.fillStyle = "#18181b";
    ctx.font = "700 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `Varian #${idx + 1}: ${v.color.name} (${closureTxt}) — [${breakdown || "Belum diisi"}]`,
      102,
      vy,
    );

    ctx.textAlign = "right";
    ctx.font = "800 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(`${subQty} pcs  |  ${formatRupiah(subCost)}`, 1124, vy);
    ctx.textAlign = "left";
  });

  // Grand Total Footer Strip inside Order Box
  const footerLineY = orderBoxY + orderBoxH - 42;
  ctx.strokeStyle = "#d4d4d8";
  ctx.beginPath();
  ctx.moveTo(74, footerLineY - 16);
  ctx.lineTo(1124, footerLineY - 16);
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 16px system-ui, -apple-system, sans-serif";
  ctx.fillText(`TOTAL JUMLAH: ${grandTotalQty} PCS`, 74, footerLineY + 12);

  ctx.textAlign = "right";
  ctx.fillStyle = "#2563eb";
  ctx.font = "900 20px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `ESTIMASI TOTAL: ${formatRupiah(grandTotalCost)}`,
    1124,
    footerLineY + 13,
  );
  ctx.textAlign = "left";

  generatedSpecDataUrl = canvas.toDataURL("image/png");
  generatedSpecBlob = await new Promise((resolve) =>
    canvas.toBlob((blob) => resolve(blob), "image/png"),
  );
}

async function openVisualSpecModal() {
  await generateVisualSpecCard();
  const modal = document.getElementById("visual-spec-modal");
  const previewImg = document.getElementById("spec-card-preview-img");
  if (previewImg && generatedSpecDataUrl) {
    previewImg.src = generatedSpecDataUrl;
  }
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  refreshIcons();
}

function closeVisualSpecModal() {
  const modal = document.getElementById("visual-spec-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

async function shareOrSendVisualToWA() {
  const waText = buildWhatsAppMessageText();
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  if (
    generatedSpecBlob &&
    navigator.share &&
    navigator.canShare &&
    typeof File !== "undefined"
  ) {
    const specFile = new File(
      [generatedSpecBlob],
      "Spesifikasi-Rompi-Atensi-Konveksi.png",
      { type: "image/png" },
    );
    if (navigator.canShare({ files: [specFile] })) {
      try {
        await navigator.share({
          files: [specFile],
          title: "Spesifikasi Order Rompi Custom - Atensi Konveksi",
          text: waText,
        });
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }
  }

  if (
    generatedSpecBlob &&
    navigator.clipboard &&
    typeof ClipboardItem !== "undefined"
  ) {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": generatedSpecBlob }),
      ]);
    } catch (_e) {
      // Abaikan jika browser membatasi izin clipboard
    }
  }

  downloadSpecPNG();
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

function downloadSpecPNG() {
  if (!generatedSpecDataUrl) return;
  const link = document.createElement("a");
  link.href = generatedSpecDataUrl;
  link.download = `Spesifikasi-Rompi-Atensi-${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printSpecPDF() {
  if (!generatedSpecDataUrl) return;
  const printWin = window.open("", "_blank");
  if (!printWin) return;
  printWin.document.write(`
    <!doctype html>
    <html lang="id">
      <head>
        <title>Spesifikasi Order Rompi - Atensi Konveksi</title>
        <style>
          body { margin: 0; padding: 16px; display: flex; justify-content: center; background: #ffffff; }
          img { max-width: 100%; height: auto; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <img src="${generatedSpecDataUrl}" onload="window.print(); window.close();" />
      </body>
    </html>
  `);
  printWin.document.close();
}

// ================= SINKRONISASI STATUS TOMBOL UI SAAT AWAL DIMUAT =================
function syncInitialFeaturePills() {
  document.querySelectorAll(".cut-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.cut === selectedCut);
  });
  document.querySelectorAll(".collar-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.collar === selectedCollar,
    );
  });
  document.querySelectorAll(".lining-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.lining === selectedLining,
    );
  });
  document.querySelectorAll(".closure-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.closure === selectedClosure,
    );
  });
  document.querySelectorAll(".pocket-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.pocket === selectedPocket,
    );
  });
  document.querySelectorAll(".reflector-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.reflector === selectedReflector,
    );
  });
  document.querySelectorAll(".utility-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.utility === selectedUtility,
    );
  });

  const collarHint = document.getElementById("collar-desc-hint");
  if (collarHint && collarCatalog[selectedCollar]) {
    collarHint.textContent = collarCatalog[selectedCollar].desc;
  }

  const liningHint = document.getElementById("lining-desc-hint");
  if (liningHint && liningCatalog[selectedLining]) {
    liningHint.textContent = liningCatalog[selectedLining].desc;
  }
}

// ================= INISIALISASI HALAMAN =================
function initRompiConfigurator() {
  syncInitialFeaturePills();
  initFilterButtons();
  renderPriceListTable();
  renderPalette();
  renderDesignSlots();
  renderPrintOptions();
  renderSizeChart(selectedCut);
  updateRompiGeometry();
  updateRompiColors(selectedColor.hex);
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateAllPrintUI();
  updateOrderTotalsAndWA();
  updateMobileFloatingStage();
  refreshIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRompiConfigurator);
} else {
  initRompiConfigurator();
}
