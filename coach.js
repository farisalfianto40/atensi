const WHATSAPP_NUMBER = "62895413909591";
const WHATSAPP_DISPLAY = "+62 895-4139-09591";

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// ================= DATA PRICE LIST BAHAN, POTONGAN, FURING, PENUTUP, LENGAN & SAKU =================
const SHORT_SLEEVE_DISCOUNT = -10000;

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
      reguler: 125000,
      boxy: 130000,
      oversize: 135000,
    },
  },
  {
    id: "parasut-mayer",
    name: "Parasut Mayer / Despo",
    shortName: "Mayer / Despo",
    prices: {
      reguler: 135000,
      boxy: 140000,
      oversize: 145000,
    },
  },
  {
    id: "taslan-balon",
    name: "Taslan Balon Waterproof",
    shortName: "Taslan Balon",
    prices: {
      reguler: 145000,
      boxy: 150000,
      oversize: 155000,
    },
  },
  {
    id: "american-drill",
    name: "American Drill / Twill",
    shortName: "American Drill",
    prices: {
      reguler: 155000,
      boxy: 160000,
      oversize: 165000,
    },
  },
];

const liningCatalog = {
  tanpa: {
    label: "Tanpa Furing (1 Lapis)",
    shortLabel: "Tanpa Furing",
    extra: 0,
    desc: "Single layer ringan dan praktis untuk acara outdoor / event",
  },
  hyget: {
    label: "Furing Hyget / Asahi",
    shortLabel: "Furing Hyget",
    extra: 10000,
    desc: "Lapisan kain dalam halus dan lembut di kulit untuk pemakaian harian",
  },
  jaring: {
    label: "Furing Jaring (Mesh)",
    shortLabel: "Furing Jaring",
    extra: 12000,
    desc: "Furing jaring (mesh) berpori adem, standar jaket coach distro",
  },
  quilting: {
    label: "Furing Quilting Dakron",
    shortLabel: "Quilting Tebal",
    extra: 25000,
    desc: "Lapisan dalam berpola kotak (padded) tebal dan hangat premium",
  },
};

const closureCatalog = {
  snap: {
    label: "Kancing Snap Besi",
    shortLabel: "Kancing Snap",
    extra: 0,
  },
  zipper: {
    label: "Full Resleting (Zipper)",
    shortLabel: "Full Resleting",
    extra: 6000,
  },
  double: {
    label: "Kancing Snap + Resleting",
    shortLabel: "Snap + Zipper",
    extra: 10000,
  },
};

const cuffCatalog = {
  karet: {
    label: "Manset Karet Elastis",
    shortLabel: "Karet Elastis",
    extra: 0,
  },
  rib: {
    label: "Manset Rib Rajut",
    shortLabel: "Rib Rajut",
    extra: 5000,
  },
  kancing: {
    label: "Manset Kancing Snap",
    shortLabel: "Manset Kancing",
    extra: 5000,
  },
};

const pocketCatalog = {
  welt: {
    label: "Saku Miring Welt",
    shortLabel: "Saku Miring",
    extra: 0,
  },
  inner: {
    label: "Saku Miring + Saku Dalam",
    shortLabel: "+Saku Dalam",
    extra: 5000,
  },
  flap: {
    label: "Saku Flap Kancing Snap",
    shortLabel: "Saku Flap Snap",
    extra: 7000,
  },
};

const cuts = {
  reguler: {
    label: "Reguler",
    panjang: {
      body: "M122 28 L68 42 C44 92, 18 162, 6 216 L33 224 C50 186, 62 148, 68 108 L68 256 L232 256 L232 108 C238 148, 250 186, 267 224 L294 216 C282 162, 256 92, 232 42 L178 28 Q150 36 122 28 Z",
      bodyBack:
        "M122 28 L68 42 C44 92, 18 162, 6 216 L33 224 C50 186, 62 148, 68 108 L68 256 L232 256 L232 108 C238 148, 250 186, 267 224 L294 216 C282 162, 256 92, 232 42 L178 28 Q150 30 122 28 Z",
      armholeL: "M68 42 Q74 75 68 108",
      armholeR: "M232 42 Q226 75 232 108",
      cuffL: "M8.5 216.8 L31 223.4 L28 229.5 Q19.5 230.5 11 224 Z",
      cuffR: "M291.5 216.8 L269 223.4 L272 229.5 Q280.5 230.5 289 224 Z",
      cuffTexL:
        "M14 219 L14.5 225.5 M19.5 220.5 L19.5 227.5 M25 222 L24.5 228.5",
      cuffTexR:
        "M286 219 L285.5 225.5 M280.5 220.5 L280.5 227.5 M275 222 L275.5 228.5",
      sleeveRAnchor: { x: 42, y: 138, rot: 20 },
      sleeveLAnchor: { x: 258, y: 138, rot: -20 },
      sizes: [
        { size: "S", p: 68, l: 52, pl: 59 },
        { size: "M", p: 70, l: 55, pl: 61 },
        { size: "L", p: 72, l: 58, pl: 63 },
        { size: "XL", p: 75, l: 61, pl: 65 },
        { size: "2XL", p: 78, l: 64, pl: 67 },
        { size: "3XL", p: 80, l: 67, pl: 68 },
        { size: "4XL", p: 82, l: 70, pl: 69 },
        { size: "5XL", p: 84, l: 73, pl: 70 },
      ],
    },
    pendek: {
      body: "M122 28 L68 42 C52 78, 40 106, 32 130 L66 141 L68 108 L68 256 L232 256 L232 108 L234 141 L268 130 C260 106, 248 78, 232 42 L178 28 Q150 36 122 28 Z",
      bodyBack:
        "M122 28 L68 42 C52 78, 40 106, 32 130 L66 141 L68 108 L68 256 L232 256 L232 108 L234 141 L268 130 C260 106, 248 78, 232 42 L178 28 Q150 30 122 28 Z",
      armholeL: "M68 42 Q74 75 68 108",
      armholeR: "M232 42 Q226 75 232 108",
      scuffL: "M34.2 123.5 L66.5 134.2 L66 141 L32 130 Z",
      scuffR: "M265.8 123.5 L233.5 134.2 L234 141 L268 130 Z",
      sleeveRAnchor: { x: 52, y: 98, rot: 20 },
      sleeveLAnchor: { x: 248, y: 98, rot: -20 },
      sizes: [
        { size: "S", p: 68, l: 52, pl: 23 },
        { size: "M", p: 70, l: 55, pl: 24 },
        { size: "L", p: 72, l: 58, pl: 25 },
        { size: "XL", p: 75, l: 61, pl: 26 },
        { size: "2XL", p: 78, l: 64, pl: 27 },
        { size: "3XL", p: 80, l: 67, pl: 28 },
        { size: "4XL", p: 82, l: 70, pl: 29 },
        { size: "5XL", p: 84, l: 73, pl: 30 },
      ],
    },
    shoulderL: "M122 28 L68 42",
    shoulderR: "M178 28 L232 42",
    hemX1: 68,
    hemX2: 232,
    hemTopY: 251,
    hemBotY: 256,
    bottomY: 256,
    backYoke: "M70 58 Q150 62 230 58",
    chestLeft: { x: 168, y: 74 },
    chestRight: { x: 107, y: 74 },
    pocketOffset: { x: 0, y: 0 },
    centerX: 150,
  },
  boxy: {
    label: "Boxy Fit",
    panjang: {
      body: "M122 28 L60 44 C36 94, 12 162, 1 214 L29 222 C45 184, 55 148, 60 110 L60 242 L240 242 L240 110 C245 148, 255 184, 271 222 L299 214 C288 162, 264 94, 240 44 L178 28 Q150 36 122 28 Z",
      bodyBack:
        "M122 28 L60 44 C36 94, 12 162, 1 214 L29 222 C45 184, 55 148, 60 110 L60 242 L240 242 L240 110 C245 148, 255 184, 271 222 L299 214 C288 162, 264 94, 240 44 L178 28 Q150 30 122 28 Z",
      armholeL: "M60 44 Q67 77 60 110",
      armholeR: "M240 44 Q233 77 240 110",
      cuffL: "M3.5 214.8 L27 221.3 L24 227.5 Q15.5 228.5 6 222 Z",
      cuffR: "M296.5 214.8 L273 221.3 L276 227.5 Q284.5 228.5 294 222 Z",
      cuffTexL: "M9 217 L9.5 223.5 M14.5 218.5 L14.5 225.5 M20 220 L19.5 226.5",
      cuffTexR:
        "M291 217 L290.5 223.5 M285.5 218.5 L285.5 225.5 M280 220 L280.5 226.5",
      sleeveRAnchor: { x: 36, y: 138, rot: 20 },
      sleeveLAnchor: { x: 264, y: 138, rot: -20 },
      sizes: [
        { size: "S", p: 65, l: 56, pl: 58 },
        { size: "M", p: 67, l: 59, pl: 60 },
        { size: "L", p: 69, l: 62, pl: 62 },
        { size: "XL", p: 72, l: 65, pl: 64 },
        { size: "2XL", p: 74, l: 68, pl: 66 },
        { size: "3XL", p: 76, l: 71, pl: 67 },
        { size: "4XL", p: 78, l: 74, pl: 68 },
        { size: "5XL", p: 80, l: 77, pl: 69 },
      ],
    },
    pendek: {
      body: "M122 28 L60 44 C44 80, 32 108, 24 132 L58 143 L60 110 L60 242 L240 242 L240 110 L242 143 L276 132 C268 108, 256 80, 240 44 L178 28 Q150 36 122 28 Z",
      bodyBack:
        "M122 28 L60 44 C44 80, 32 108, 24 132 L58 143 L60 110 L60 242 L240 242 L240 110 L242 143 L276 132 C268 108, 256 80, 240 44 L178 28 Q150 30 122 28 Z",
      armholeL: "M60 44 Q67 77 60 110",
      armholeR: "M240 44 Q233 77 240 110",
      scuffL: "M26.2 125.5 L58.5 136.2 L58 143 L24 132 Z",
      scuffR: "M273.8 125.5 L241.5 136.2 L242 143 L276 132 Z",
      sleeveRAnchor: { x: 45, y: 100, rot: 20 },
      sleeveLAnchor: { x: 255, y: 100, rot: -20 },
      sizes: [
        { size: "S", p: 65, l: 56, pl: 24 },
        { size: "M", p: 67, l: 59, pl: 25 },
        { size: "L", p: 69, l: 62, pl: 26 },
        { size: "XL", p: 72, l: 65, pl: 27 },
        { size: "2XL", p: 74, l: 68, pl: 28 },
        { size: "3XL", p: 76, l: 71, pl: 29 },
        { size: "4XL", p: 78, l: 74, pl: 30 },
        { size: "5XL", p: 80, l: 77, pl: 31 },
      ],
    },
    shoulderL: "M122 28 L60 44",
    shoulderR: "M178 28 L240 44",
    hemX1: 60,
    hemX2: 240,
    hemTopY: 237,
    hemBotY: 242,
    bottomY: 242,
    backYoke: "M63 60 Q150 64 237 60",
    chestLeft: { x: 171, y: 74 },
    chestRight: { x: 103, y: 74 },
    pocketOffset: { x: 8, y: -12 },
    centerX: 150,
  },
  oversize: {
    label: "Oversize",
    panjang: {
      body: "M122 28 L56 46 C32 98, 8 168, -2 224 L27 232 C42 194, 52 156, 56 116 L56 268 L244 268 L244 116 C248 156, 258 194, 273 232 L302 224 C292 168, 268 98, 244 46 L178 28 Q150 36 122 28 Z",
      bodyBack:
        "M122 28 L56 46 C32 98, 8 168, -2 224 L27 232 C42 194, 52 156, 56 116 L56 268 L244 268 L244 116 C248 156, 258 194, 273 232 L302 224 C292 168, 268 98, 244 46 L178 28 Q150 30 122 28 Z",
      armholeL: "M56 46 Q63 81 56 116",
      armholeR: "M244 46 Q237 81 244 116",
      cuffL: "M0.5 224.8 L25 231.5 L22 237.8 Q13 238.8 3 232.2 Z",
      cuffR: "M299.5 224.8 L275 231.5 L278 237.8 Q287 238.8 297 232.2 Z",
      cuffTexL: "M6 227 L6.5 233.5 M12 228.5 L12 235.5 M18 230 L17.5 236.5",
      cuffTexR:
        "M294 227 L293.5 233.5 M288 228.5 L288 235.5 M282 230 L282.5 236.5",
      sleeveRAnchor: { x: 32, y: 144, rot: 20 },
      sleeveLAnchor: { x: 268, y: 144, rot: -20 },
      sizes: [
        { size: "S", p: 71, l: 57, pl: 61 },
        { size: "M", p: 73, l: 60, pl: 63 },
        { size: "L", p: 75, l: 63, pl: 65 },
        { size: "XL", p: 78, l: 66, pl: 67 },
        { size: "2XL", p: 81, l: 69, pl: 69 },
        { size: "3XL", p: 83, l: 72, pl: 70 },
        { size: "4XL", p: 85, l: 75, pl: 71 },
        { size: "5XL", p: 87, l: 78, pl: 72 },
      ],
    },
    pendek: {
      body: "M122 28 L56 46 C40 84, 28 112, 20 136 L54 147 L56 116 L56 268 L244 268 L244 116 L246 147 L280 136 C272 112, 260 84, 244 46 L178 28 Q150 36 122 28 Z",
      bodyBack:
        "M122 28 L56 46 C40 84, 28 112, 20 136 L54 147 L56 116 L56 268 L244 268 L244 116 L246 147 L280 136 C272 112, 260 84, 244 46 L178 28 Q150 30 122 28 Z",
      armholeL: "M56 46 Q63 81 56 116",
      armholeR: "M244 46 Q237 81 244 116",
      scuffL: "M22.2 129.5 L54.5 140.2 L54 147 L20 136 Z",
      scuffR: "M277.8 129.5 L245.5 140.2 L246 147 L280 136 Z",
      sleeveRAnchor: { x: 42, y: 102, rot: 20 },
      sleeveLAnchor: { x: 258, y: 102, rot: -20 },
      sizes: [
        { size: "S", p: 71, l: 57, pl: 25 },
        { size: "M", p: 73, l: 60, pl: 26 },
        { size: "L", p: 75, l: 63, pl: 27 },
        { size: "XL", p: 78, l: 66, pl: 28 },
        { size: "2XL", p: 81, l: 69, pl: 29 },
        { size: "3XL", p: 83, l: 72, pl: 30 },
        { size: "4XL", p: 85, l: 75, pl: 31 },
        { size: "5XL", p: 87, l: 78, pl: 32 },
      ],
    },
    shoulderL: "M122 28 L56 46",
    shoulderR: "M178 28 L244 46",
    hemX1: 56,
    hemX2: 244,
    hemTopY: 263,
    hemBotY: 268,
    bottomY: 268,
    backYoke: "M60 62 Q150 66 240 62",
    chestLeft: { x: 173, y: 74 },
    chestRight: { x: 101, y: 74 },
    pocketOffset: { x: 12, y: 8 },
    centerX: 150,
  },
};

const printCatalog = {
  depan: [
    {
      id: "none",
      name: "Tanpa Sablon/Bordir",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Bagian depan jaket dibiarkan polos minimalis.",
      mini: null,
    },
    {
      id: "logo-dada-kiri",
      name: "Logo Dada Kiri",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Paling Populer",
      desc: "Sablon DTF/Plastisol atau bordir logo brand di dada kiri.",
      mini: { x: 32, y: 18, w: 8, h: 8 },
      mainZone: { anchor: "chestLeft", w: 25, h: 25 },
    },
    {
      id: "logo-dada-kanan",
      name: "Logo Dada Kanan",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Dada kanan",
      desc: "Logo sponsor, nama personel, atau patch emblem di dada kanan.",
      mini: { x: 20, y: 18, w: 8, h: 8 },
      mainZone: { anchor: "chestRight", w: 25, h: 25 },
    },
    {
      id: "tulisan-dada-kiri",
      name: "Tipografi Dada Kiri",
      dim: "11 × 4 cm",
      area: 44,
      badge: "Signature Coach",
      desc: "Tulisan script / nama brand memanjang di dada kiri.",
      mini: { x: 31, y: 19, w: 10, h: 4.5 },
      mainZone: { anchor: "chestLeft", w: 32, h: 13 },
    },
    {
      id: "double-chest",
      name: "Logo Kiri & Kanan",
      dim: "2 × (8 × 8 cm)",
      area: 128,
      badge: "Komunitas / Tim",
      desc: "Logo brand di dada kiri & logo divisi/event di dada kanan.",
      mini: { x: 20, y: 18, w: 20, h: 7 },
      mainZone: { anchor: "center", w: 88, h: 24, offsetY: 14 },
    },
  ],
  belakang: [
    {
      id: "none",
      name: "Tanpa Sablon/Bordir",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Bagian punggung dibiarkan polos.",
      mini: null,
    },
    {
      id: "logo-tengkuk",
      name: "Logo Tengkuk",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Punggung atas",
      desc: "Logo kecil di bawah kerah belakang jaket.",
      mini: { x: 26, y: 11, w: 8, h: 8 },
      mainZone: { anchor: "backNeck", w: 22, h: 22 },
    },
    {
      id: "tulisan-punggung",
      name: "Tulisan Punggung",
      dim: "28 × 12 cm",
      area: 336,
      badge: "Crew / Event",
      desc: "Tulisan nama komunitas, panitia, atau brand di punggung.",
      mini: { x: 18, y: 16, w: 24, h: 9 },
      mainZone: { anchor: "center", w: 82, h: 32, offsetY: -4 },
    },
    {
      id: "a4-belakang",
      name: "A4 Punggung",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Standar",
      desc: "Ilustrasi & tipografi ukuran sedang di punggung jaket.",
      mini: { x: 20, y: 16, w: 20, h: 25 },
      mainZone: { anchor: "center", w: 66, h: 88, offsetY: 4 },
    },
    {
      id: "a3-belakang",
      name: "A3 (Besar)",
      dim: "29,7 × 42 cm",
      area: 1247,
      badge: "Paling Populer",
      desc: "Artwork utama ukuran besar khas Jaket Coach streetwear.",
      mini: { x: 18, y: 15, w: 24, h: 33 },
      mainZone: { anchor: "center", w: 92, h: 122, offsetY: 6 },
    },
  ],
  lenganKanan: [
    {
      id: "none",
      name: "Tanpa Sablon/Bordir",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Lengan kanan dibiarkan polos.",
      mini: null,
    },
    {
      id: "label-lengan-ka",
      name: "Bendera / Patch",
      dim: "5 × 5 cm",
      area: 25,
      badge: "Bahu lengan",
      desc: "Bordir bendera atau patch emblem di lengan kanan.",
      mini: { x: 8, y: 21, w: 6, h: 6, rot: 31 },
      mainZone: { anchor: "sleeveR", w: 15, h: 15, dist: 14, offsetIn: 5 },
    },
    {
      id: "logo-lengan-ka",
      name: "Logo Lengan",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Standar",
      desc: "Logo sponsor atau emblem komunitas di lengan kanan.",
      mini: { x: 10, y: 16, w: 7.5, h: 7.5, rot: 31 },
      mainZone: { anchor: "sleeveR", w: 20, h: 20, dist: 0 },
    },
    {
      id: "teks-lengan-ka",
      name: "Tulisan Lengan",
      dim: "10 × 4 cm",
      area: 40,
      badge: "Teks singkat",
      desc: "Tulisan web/instansi melintang di lengan kanan.",
      mini: { x: 9, y: 17, w: 8.5, h: 4.5, rot: 31 },
      mainZone: { anchor: "sleeveR", w: 24, h: 10, dist: 0 },
    },
    {
      id: "full-lengan-ka",
      name: "Full Lengan Panjang",
      dim: "10 × 28 cm",
      area: 280,
      badge: "L. Panjang",
      longOnly: true,
      desc: "Tipografi memanjang ke manset lengan panjang.",
      mini: { x: 9, y: 13, w: 5.5, h: 15, rot: 31 },
      mainZone: { anchor: "sleeveR", w: 17, h: 60, dist: 4 },
    },
  ],
  lenganKiri: [
    {
      id: "none",
      name: "Tanpa Sablon/Bordir",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Lengan kiri dibiarkan polos.",
      mini: null,
    },
    {
      id: "label-lengan-ki",
      name: "Bendera / Patch",
      dim: "5 × 5 cm",
      area: 25,
      badge: "Bahu lengan",
      desc: "Bordir bendera atau patch emblem di lengan kiri.",
      mini: { x: 46, y: 21, w: 6, h: 6, rot: -31 },
      mainZone: { anchor: "sleeveL", w: 15, h: 15, dist: 14, offsetIn: 5 },
    },
    {
      id: "logo-lengan-ki",
      name: "Logo Lengan",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Standar",
      desc: "Logo sponsor atau emblem di lengan kiri.",
      mini: { x: 42.5, y: 16, w: 7.5, h: 7.5, rot: -31 },
      mainZone: { anchor: "sleeveL", w: 20, h: 20, dist: 0 },
    },
    {
      id: "teks-lengan-ki",
      name: "Tulisan Lengan",
      dim: "10 × 4 cm",
      area: 40,
      badge: "Teks singkat",
      desc: "Tulisan melintang di lengan kiri.",
      mini: { x: 42.5, y: 17, w: 8.5, h: 4.5, rot: -31 },
      mainZone: { anchor: "sleeveL", w: 24, h: 10, dist: 0 },
    },
    {
      id: "full-lengan-ki",
      name: "Full Lengan Panjang",
      dim: "10 × 28 cm",
      area: 280,
      badge: "L. Panjang",
      longOnly: true,
      desc: "Tipografi memanjang ke manset lengan panjang.",
      mini: { x: 45.5, y: 13, w: 5.5, h: 15, rot: -31 },
      mainZone: { anchor: "sleeveL", w: 17, h: 60, dist: 4 },
    },
  ],
};

// ================= PALET WARNA LENGKAP (36 WARNA) =================
const palette = [
  // Netral (8) - Hitam Jet paling atas untuk Coach Jacket
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
  { name: "Denim Blue", hex: "#5c7cfa", cat: "biru" },
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
  { name: "Mint Pastel", hex: "#a7f3d0", cat: "hijau" },

  // Earth (8)
  { name: "Warm Cream", hex: "#e6dccb", cat: "earth" },
  { name: "Sand Beige", hex: "#d6c7b2", cat: "earth" },
  { name: "Soft Khaki", hex: "#bfa98e", cat: "earth" },
  { name: "Caramel", hex: "#a97142", cat: "earth" },
  { name: "Mocca Latte", hex: "#8b6b54", cat: "earth" },
  { name: "Coffee Brown", hex: "#5c3d2e", cat: "earth" },
  { name: "Espresso", hex: "#4a3326", cat: "earth" },
  { name: "Terracotta", hex: "#9e473b", cat: "earth" },

  // Merah & Cerah (6)
  { name: "Maroon", hex: "#782327", cat: "cerah" },
  { name: "Merah Cabe", hex: "#dc2626", cat: "cerah" },
  { name: "Dusty Pink", hex: "#e5989b", cat: "cerah" },
  { name: "Mustard Gold", hex: "#d97706", cat: "cerah" },
  { name: "Kuning Kenari", hex: "#eab308", cat: "cerah" },
  { name: "Lilac Pastel", hex: "#c4b5fd", cat: "cerah" },
];

let selectedCut = "reguler";
let selectedLining = "jaring";
let selectedClosure = "snap";
let selectedSleeve = "panjang";
let selectedCuff = "karet";
let selectedDrawstring = "pakai";
let selectedPocket = "welt";
let selectedFabricId = "parasut-mayer";
let selectedColor = palette[2];
let activeFilter = "all";
let colorSearchQuery = "";
let selectedSize = null;

let activeSide = "depan";
let mockupView = "depan";
let isSleeveZoomed = false;

let isMobileFloatingActive = false;
let isMobileFloatingDetailExpanded = false;

const customDesigns = {
  depan: null,
  belakang: null,
  lenganKanan: null,
  lenganKiri: null,
};

const selectedPrints = {
  depan: printCatalog.depan[1],
  belakang: printCatalog.belakang[4],
  lenganKanan: printCatalog.lenganKanan[0],
  lenganKiri: printCatalog.lenganKiri[0],
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
    color: palette[2],
    sleeve: "panjang",
    closure: "snap",
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
    fabricCatalog.find((f) => f.id === "parasut-mayer") ||
    fabricCatalog[0]
  );
}

function getGlobalModelAddons() {
  const liningAddon = liningCatalog[selectedLining]?.extra || 0;
  const cuffAddon =
    selectedSleeve === "panjang" ? cuffCatalog[selectedCuff]?.extra || 0 : 0;
  const pocketAddon = pocketCatalog[selectedPocket]?.extra || 0;
  return liningAddon + cuffAddon + pocketAddon;
}

function getVariantBaseUnitPrice(variant) {
  const fabric = getSelectedFabric();
  const basePrice = fabric.prices[selectedCut] || fabric.prices.reguler;
  const globalAddons = getGlobalModelAddons();
  const sleeveAddon = variant.sleeve === "pendek" ? SHORT_SLEEVE_DISCOUNT : 0;
  const closureAddon = closureCatalog[variant.closure]?.extra || 0;
  return Math.max(50000, basePrice + globalAddons + sleeveAddon + closureAddon);
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

function getAutoAngleForSide(sideKey) {
  if (sideKey === "lenganKanan") return 20;
  if (sideKey === "lenganKiri") return -20;
  return 0;
}

function getEffectiveAngleForSide(sideKey) {
  return getAutoAngleForSide(sideKey);
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

  renderSizeChart(selectedCut, selectedSleeve);
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  refreshIcons();
}

// ================= FLOATING LIVE PREVIEW KHUSUS SMARTPHONE =================
const MOBILE_FLOATING_BOTTOM_OFFSET = 40;

function updateMobileFloatingStage() {
  const wrapper = document.getElementById("coach-stage-wrapper");
  const stage = document.getElementById("coach-stage");
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
    const wrapper = document.getElementById("coach-stage-wrapper");
    const stage = document.getElementById("coach-stage");
    if (wrapper && stage) {
      wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
    }
  }
}

function pulseFloatingStageFeedback() {
  if (!isMobileFloatingActive || !window.Motion || !window.Motion.animate) {
    return;
  }
  const stage = document.getElementById("coach-stage");
  if (stage) {
    Motion.animate(
      stage,
      { scale: [0.985, 1] },
      { type: "spring", stiffness: 420, damping: 24 },
    );
  }
}

function toggleMobileFloatingDetail() {
  const stage = document.getElementById("coach-stage");
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

  const cutCols = ["reguler", "boxy", "oversize"];
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

// ================= SINKRONISASI GEOMETRI SVG JAKET COACH =================
function updateCoachGeometry() {
  const cut = cuts[selectedCut] || cuts.reguler;
  const sleeveData = cut[selectedSleeve] || cut.panjang;
  const isBack = mockupView === "belakang";

  const bodyPath = isBack ? sleeveData.bodyBack : sleeveData.body;
  ["coach-body", "coach-light-h", "coach-light-v"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("d", bodyPath);
  });

  const shoulderL = document.getElementById("seam-shoulder-l");
  const shoulderR = document.getElementById("seam-shoulder-r");
  if (shoulderL) shoulderL.setAttribute("d", cut.shoulderL);
  if (shoulderR) shoulderR.setAttribute("d", cut.shoulderR);

  const armholeL = document.getElementById("seam-armhole-l");
  const armholeR = document.getElementById("seam-armhole-r");
  if (armholeL) armholeL.setAttribute("d", sleeveData.armholeL);
  if (armholeR) armholeR.setAttribute("d", sleeveData.armholeR);

  const shortCuffs = document.getElementById("short-sleeve-cuffs");
  const longCuffs = document.getElementById("long-sleeve-cuffs");

  if (selectedSleeve === "panjang") {
    if (shortCuffs) shortCuffs.style.display = "none";
    if (longCuffs) longCuffs.style.display = "block";
    const cuffL = document.getElementById("cuff-l");
    const cuffR = document.getElementById("cuff-r");
    const texL = document.getElementById("cuff-tex-l");
    const texR = document.getElementById("cuff-tex-r");
    if (cuffL) cuffL.setAttribute("d", sleeveData.cuffL);
    if (cuffR) cuffR.setAttribute("d", sleeveData.cuffR);
    if (texL) {
      texL.setAttribute("d", sleeveData.cuffTexL);
      texL.style.display = selectedCuff === "kancing" ? "none" : "block";
    }
    if (texR) {
      texR.setAttribute("d", sleeveData.cuffTexR);
      texR.style.display = selectedCuff === "kancing" ? "none" : "block";
    }
  } else {
    if (shortCuffs) shortCuffs.style.display = "block";
    if (longCuffs) longCuffs.style.display = "none";
    const scuffL = document.getElementById("scuff-l");
    const scuffR = document.getElementById("scuff-r");
    if (scuffL) scuffL.setAttribute("d", sleeveData.scuffL);
    if (scuffR) scuffR.setAttribute("d", sleeveData.scuffR);
  }

  const hemTop = document.getElementById("coach-hem-top");
  const hemBot = document.getElementById("coach-hem-bottom");
  if (hemTop) {
    hemTop.setAttribute("x1", cut.hemX1);
    hemTop.setAttribute("x2", cut.hemX2);
    hemTop.setAttribute("y1", cut.hemTopY);
    hemTop.setAttribute("y2", cut.hemTopY);
  }
  if (hemBot) {
    hemBot.setAttribute("x1", cut.hemX1 - 0.5);
    hemBot.setAttribute("x2", cut.hemX2 + 0.5);
    hemBot.setAttribute("y1", cut.hemBotY);
    hemBot.setAttribute("y2", cut.hemBotY);
  }

  const frontNeckGroup = document.getElementById("front-neck-group");
  const frontCollarGroup = document.getElementById("front-collar-group");
  const frontClosureGroup = document.getElementById("front-closure-group");
  const sidePocketsGroup = document.getElementById("side-pockets-group");
  const drawstringGroup = document.getElementById("bottom-drawstring-group");
  const backCollarGroup = document.getElementById("back-collar-group");
  const backYokeSeam = document.getElementById("back-yoke-seam");

  if (backYokeSeam) {
    backYokeSeam.setAttribute("d", cut.backYoke);
  }

  if (drawstringGroup) {
    if (selectedDrawstring === "pakai") {
      drawstringGroup.style.display = "block";
      const dy = cut.bottomY - 256;
      drawstringGroup.setAttribute("transform", `translate(0, ${dy})`);
    } else {
      drawstringGroup.style.display = "none";
    }
  }

  if (isBack) {
    if (frontNeckGroup) frontNeckGroup.style.display = "none";
    if (frontCollarGroup) frontCollarGroup.style.display = "none";
    if (frontClosureGroup) frontClosureGroup.style.display = "none";
    if (sidePocketsGroup) sidePocketsGroup.style.display = "none";
    if (backCollarGroup) backCollarGroup.style.display = "block";
  } else {
    if (frontNeckGroup) frontNeckGroup.style.display = "block";
    if (frontCollarGroup) frontCollarGroup.style.display = "block";
    if (frontClosureGroup) frontClosureGroup.style.display = "block";
    if (sidePocketsGroup) sidePocketsGroup.style.display = "block";
    if (backCollarGroup) backCollarGroup.style.display = "none";

    // Center line & closure length
    const centerLine = document.getElementById("center-seam-line");
    const placketStitch = document.getElementById("placket-topstitch");
    if (centerLine) centerLine.setAttribute("y2", cut.bottomY);
    if (placketStitch) placketStitch.setAttribute("y2", cut.bottomY);

    const snapsGroup = document.getElementById("coach-snap-buttons-group");
    const zipGroup = document.getElementById("coach-zipper-group");

    if (selectedClosure === "snap") {
      if (snapsGroup) snapsGroup.style.display = "block";
      if (zipGroup) zipGroup.style.display = "none";
    } else if (selectedClosure === "zipper") {
      if (snapsGroup) snapsGroup.style.display = "none";
      if (zipGroup) zipGroup.style.display = "block";
    } else {
      // Double: Snap + Zipper
      if (snapsGroup) snapsGroup.style.display = "block";
      if (zipGroup) zipGroup.style.display = "block";
    }

    // Pockets
    const weltPockets = document.getElementById("welt-pockets");
    const flapPockets = document.getElementById("flap-pockets");
    const innerStitch = document.getElementById("inner-pocket-stitch");
    const ox = cut.pocketOffset?.x || 0;
    const oy = cut.pocketOffset?.y || 0;

    if (weltPockets) {
      weltPockets.style.display = selectedPocket !== "flap" ? "block" : "none";
      const weltL = document.getElementById("welt-pocket-l");
      const weltR = document.getElementById("welt-pocket-r");
      if (weltL) weltL.setAttribute("transform", `translate(${-ox}, ${oy})`);
      if (weltR) weltR.setAttribute("transform", `translate(${ox}, ${oy})`);
    }
    if (flapPockets) {
      flapPockets.style.display = selectedPocket === "flap" ? "block" : "none";
      const flapBodyL = document.getElementById("flap-pocket-body-l");
      const flapLidL = document.getElementById("flap-pocket-lid-l");
      const flapBodyR = document.getElementById("flap-pocket-body-r");
      const flapLidR = document.getElementById("flap-pocket-lid-r");
      if (flapBodyL)
        flapBodyL.setAttribute("transform", `translate(${-ox}, ${oy})`);
      if (flapLidL)
        flapLidL.setAttribute("transform", `translate(${-ox}, ${oy})`);
      if (flapBodyR)
        flapBodyR.setAttribute("transform", `translate(${ox}, ${oy})`);
      if (flapLidR)
        flapLidR.setAttribute("transform", `translate(${ox}, ${oy})`);
    }
    if (innerStitch) {
      innerStitch.style.display = selectedPocket === "inner" ? "block" : "none";
    }
  }

  updatePrintZoneOverlay();
}

function updateCoachColors(hex) {
  const dark = isDark(hex);
  const lum = getLuminance(hex);
  const outlineColor = dark && lum < 42 ? "#52525b" : "#18181b";
  const collarFill = shadeHex(hex, dark ? 9 : -10);
  const innerNeckFill = shadeHex(hex, dark ? -8 : -22);
  const subtleStitch = dark ? "rgba(255,255,255,0.22)" : "rgba(24,24,27,0.25)";
  const drawstringColor = lum > 180 ? "#52525b" : "#e4e4e7";

  const bodyEl = document.getElementById("coach-body");
  if (bodyEl) {
    bodyEl.setAttribute("fill", hex);
    bodyEl.setAttribute("stroke", outlineColor);
  }

  const neckInner = document.getElementById("coach-neck-inner");
  if (neckInner) {
    neckInner.setAttribute("fill", innerNeckFill);
    neckInner.setAttribute("stroke", outlineColor);
  }

  const neckSeam = document.getElementById("coach-neck-inner-seam");
  if (neckSeam) neckSeam.setAttribute("stroke", outlineColor);

  const neckTag = document.getElementById("coach-neck-tag");
  if (neckTag) {
    neckTag.setAttribute(
      "fill",
      dark ? "rgba(255,255,255,0.28)" : "rgba(24,24,27,0.18)",
    );
  }

  [
    "cuff-l",
    "cuff-r",
    "scuff-l",
    "scuff-r",
    "collar-flap-l",
    "collar-flap-r",
    "back-collar-band",
    "welt-pocket-l",
    "welt-pocket-r",
    "flap-pocket-lid-l",
    "flap-pocket-lid-r",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", collarFill);
      el.setAttribute("stroke", outlineColor);
    }
  });

  ["flap-pocket-body-l", "flap-pocket-body-r"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", hex);
      el.setAttribute("stroke", outlineColor);
    }
  });

  [
    "seam-shoulder-l",
    "seam-shoulder-r",
    "seam-armhole-l",
    "seam-armhole-r",
    "center-seam-line",
    "coach-hem-top",
    "coach-hem-bottom",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", outlineColor);
  });

  [
    "cuff-tex-l",
    "cuff-tex-r",
    "placket-topstitch",
    "collar-stitch-l",
    "collar-stitch-r",
    "back-collar-stitch",
    "back-yoke-seam",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", subtleStitch);
  });

  [
    "coach-hem-top",
    "coach-hem-bottom",
    "cuff-tex-l",
    "cuff-tex-r",
    "placket-topstitch",
    "collar-stitch-l",
    "collar-stitch-r",
    "back-collar-stitch",
    "back-yoke-seam",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", subtleStitch);
  });

  ["string-l", "string-r"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", drawstringColor);
  });
}

function updateStageLabels() {
  const cutObj = cuts[selectedCut] || cuts.reguler;
  const liningObj = liningCatalog[selectedLining] || liningCatalog.jaring;
  const closureObj = closureCatalog[selectedClosure] || closureCatalog.snap;

  const cutLabelEl = document.getElementById("active-cut-label");
  if (cutLabelEl) {
    const sleeveTag = selectedSleeve === "pendek" ? " • L. Pendek" : "";
    cutLabelEl.textContent = `${cutObj.label} • ${closureObj.shortLabel} • ${liningObj.shortLabel}${sleeveTag}`;
  }

  const colorDot = document.getElementById("active-color-dot");
  const colorName = document.getElementById("active-color-name");
  if (colorDot) colorDot.style.backgroundColor = selectedColor.hex;
  if (colorName) colorName.textContent = selectedColor.name;

  const viewCaptions = {
    depan: "Tampak Depan",
    belakang: "Tampak Belakang",
    lenganKanan: "Tampak Lengan Kanan",
    lenganKiri: "Tampak Lengan Kiri",
  };
  const currentPrint = selectedPrints[mockupView];
  const captionEl = document.getElementById("mockup-view-caption");
  if (captionEl) {
    const rotDeg = getEffectiveAngleForSide(mockupView);
    const rotBadge =
      mockupView === "lenganKanan" || mockupView === "lenganKiri"
        ? ` • ${rotDeg > 0 ? "+" : ""}${rotDeg}°`
        : "";
    const printLabel =
      currentPrint && !currentPrint.isNone
        ? `${currentPrint.name} (${currentPrint.dim})${rotBadge}`
        : "Polos";
    captionEl.textContent = `${viewCaptions[mockupView] || "Tampak Depan"} • ${printLabel}`;
  }

  const zoomBtn = document.getElementById("toggle-zoom-btn");
  if (zoomBtn) {
    if (mockupView === "lenganKanan" || mockupView === "lenganKiri") {
      zoomBtn.classList.remove("hidden");
      zoomBtn.classList.add("inline-flex");
      zoomBtn.innerHTML = isSleeveZoomed
        ? `<i data-lucide="zoom-out" class="icon-xs"></i><span>Reset Zoom</span>`
        : `<i data-lucide="zoom-in" class="icon-xs"></i><span>Zoom Lengan</span>`;
    } else {
      zoomBtn.classList.add("hidden");
      zoomBtn.classList.remove("inline-flex");
    }
  }
}

// ================= KALKULASI ZONA PELETAKAN SABLON / BORDIR =================
function computePrintZoneGeometry(
  sideKey,
  printItem,
  cutKey = selectedCut,
  sleeveKey = selectedSleeve,
) {
  if (!printItem || printItem.isNone || !printItem.mainZone) return null;

  const cut = cuts[cutKey] || cuts.reguler;
  const sleeveData = cut[sleeveKey] || cut.panjang;
  const mz = printItem.mainZone;
  let x = 0;
  let y = 0;
  let w = mz.w;
  let h = mz.h;
  let rot = 0;

  if (mz.anchor === "chestLeft") {
    x = cut.chestLeft.x;
    y = cut.chestLeft.y;
  } else if (mz.anchor === "chestRight") {
    x = cut.chestRight.x;
    y = cut.chestRight.y;
  } else if (mz.anchor === "center") {
    const cx = cut.centerX || 150;
    let cy = 128 + (mz.offsetY || 0);
    if (sideKey === "depan") {
      cy = 72 + (mz.offsetY || 0);
    } else if (sideKey === "belakang") {
      cy = mz.h <= 34 ? 92 : 142;
    }
    x = cx - w / 2;
    y = cy - h / 2;
  } else if (mz.anchor === "backNeck") {
    const cx = cut.centerX || 150;
    x = cx - w / 2;
    y = 43;
  } else if (mz.anchor === "sleeveR" || mz.anchor === "sleeveL") {
    const isRight = mz.anchor === "sleeveR";
    const anchor = isRight
      ? sleeveData.sleeveRAnchor
      : sleeveData.sleeveLAnchor;
    rot = anchor.rot;

    let cx = anchor.x;
    let cy = anchor.y;

    if (mz.dist) {
      const rad = (Math.abs(rot) * Math.PI) / 180;
      const dirX = isRight ? -Math.sin(rad) : Math.sin(rad);
      const dirY = Math.cos(rad);
      cx += dirX * mz.dist;
      cy += dirY * mz.dist;
    }

    if (mz.offsetIn) {
      cx += isRight ? mz.offsetIn : -mz.offsetIn;
    }

    if (mz.h >= 50 && sleeveKey === "panjang") {
      const rad = (Math.abs(rot) * Math.PI) / 180;
      cx += (isRight ? -Math.sin(rad) : Math.sin(rad)) * 12;
      cy += Math.cos(rad) * 12;
    }

    x = cx - w / 2;
    y = cy - h / 2;
  }

  return {
    x,
    y,
    w,
    h,
    rot,
    cx: x + w / 2,
    cy: y + h / 2,
    dim: printItem.dim,
    name: printItem.name,
  };
}

function updatePrintZoneOverlay() {
  const group = document.getElementById("print-zone-group");
  const rect = document.getElementById("print-zone-rect");
  const img = document.getElementById("print-zone-img");
  const label = document.getElementById("print-zone-label");
  if (!group || !rect || !img || !label) return;

  const currentPrint = selectedPrints[mockupView];
  const geom = computePrintZoneGeometry(
    mockupView,
    currentPrint,
    selectedCut,
    selectedSleeve,
  );

  if (!geom) {
    group.style.display = "none";
    return;
  }

  group.style.display = "block";
  const transformAttr =
    geom.rot !== 0 ? `rotate(${geom.rot} ${geom.cx} ${geom.cy})` : "";

  rect.setAttribute("x", geom.x.toFixed(1));
  rect.setAttribute("y", geom.y.toFixed(1));
  rect.setAttribute("width", geom.w.toFixed(1));
  rect.setAttribute("height", geom.h.toFixed(1));
  if (transformAttr) {
    rect.setAttribute("transform", transformAttr);
  } else {
    rect.removeAttribute("transform");
  }

  const uploadedDataUrl = customDesigns[mockupView]?.dataUrl || null;
  if (uploadedDataUrl) {
    img.setAttribute("href", uploadedDataUrl);
    img.setAttribute("x", (geom.x + 1).toFixed(1));
    img.setAttribute("y", (geom.y + 1).toFixed(1));
    img.setAttribute("width", Math.max(2, geom.w - 2).toFixed(1));
    img.setAttribute("height", Math.max(2, geom.h - 2).toFixed(1));
    if (transformAttr) {
      img.setAttribute("transform", transformAttr);
    } else {
      img.removeAttribute("transform");
    }
    img.style.display = "block";
    rect.setAttribute("fill", "rgba(37, 99, 235, 0.05)");
    rect.setAttribute("stroke", "#2563eb");
  } else {
    img.style.display = "none";
    rect.setAttribute("fill", "rgba(37, 99, 235, 0.22)");
    rect.setAttribute("stroke", "#60a5fa");
  }

  const labelY = Math.min(288, geom.y + geom.h + 8.5);
  label.setAttribute("x", geom.cx.toFixed(1));
  label.setAttribute("y", labelY.toFixed(1));
  label.textContent = geom.dim;
  if (transformAttr) {
    label.setAttribute("transform", transformAttr);
  } else {
    label.removeAttribute("transform");
  }
}

// ================= KONTROL POTONGAN, FURING, PENUTUP, LENGAN, MANSET, TALI & SAKU =================
function setCut(cutKey) {
  if (!cuts[cutKey]) return;
  selectedCut = cutKey;

  document.querySelectorAll(".cut-pill").forEach((btn) => {
    const active = btn.dataset.cut === cutKey;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  renderPriceListTable();
  updateCoachGeometry();
  updateStageLabels();
  renderSizeChart(selectedCut, selectedSleeve);
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setLining(liningKey) {
  if (!liningCatalog[liningKey]) return;
  selectedLining = liningKey;

  document.querySelectorAll(".lining-pill").forEach((btn) => {
    const active = btn.dataset.lining === liningKey;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  const hintEl = document.getElementById("lining-desc-hint");
  if (hintEl) hintEl.textContent = liningCatalog[liningKey].desc;

  updateStageLabels();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setClosure(closureKey) {
  if (!closureCatalog[closureKey]) return;
  selectedClosure = closureKey;

  const activeVar = getActiveVariant();
  if (activeVar) {
    activeVar.closure = closureKey;
  }

  document.querySelectorAll(".closure-pill").forEach((btn) => {
    const active = btn.dataset.closure === closureKey;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  const closureSelect = document.getElementById("variant-closure-select");
  if (closureSelect) closureSelect.value = closureKey;

  updateCoachGeometry();
  updateStageLabels();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setSleeve(sleeveKey) {
  if (sleeveKey !== "pendek" && sleeveKey !== "panjang") return;
  selectedSleeve = sleeveKey;

  const activeVar = getActiveVariant();
  if (activeVar) {
    activeVar.sleeve = sleeveKey;
  }

  document.querySelectorAll(".sleeve-pill").forEach((btn) => {
    const active = btn.dataset.sleeve === sleeveKey;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  const sleeveSelect = document.getElementById("variant-sleeve-select");
  if (sleeveSelect) sleeveSelect.value = sleeveKey;

  ["lenganKanan", "lenganKiri"].forEach((sKey) => {
    if (
      selectedSleeve === "pendek" &&
      selectedPrints[sKey] &&
      selectedPrints[sKey].longOnly
    ) {
      const fallback = printCatalog[sKey].find((p) => !p.longOnly && !p.isNone);
      if (fallback) selectedPrints[sKey] = fallback;
    }
  });

  updateCoachGeometry();
  updateStageLabels();
  renderSizeChart(selectedCut, selectedSleeve);
  renderPrintOptions(activeSide);
  updateSablonSummary();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setCuff(cuffKey) {
  if (!cuffCatalog[cuffKey]) return;
  selectedCuff = cuffKey;

  document.querySelectorAll(".cuff-pill").forEach((btn) => {
    const active = btn.dataset.cuff === cuffKey;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  if (selectedSleeve !== "panjang") {
    setSleeve("panjang");
    return;
  }

  updateCoachGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setDrawstring(mode) {
  if (mode !== "pakai" && mode !== "tanpa") return;
  selectedDrawstring = mode;

  document.querySelectorAll(".drawstring-pill").forEach((btn) => {
    const active = btn.dataset.drawstring === mode;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  updateCoachGeometry();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setPocket(pocketKey) {
  if (!pocketCatalog[pocketKey]) return;
  selectedPocket = pocketKey;

  document.querySelectorAll(".pocket-pill").forEach((btn) => {
    const active = btn.dataset.pocket === pocketKey;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  updateCoachGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setMockupView(viewKey) {
  if (!["depan", "belakang", "lenganKanan", "lenganKiri"].includes(viewKey)) {
    return;
  }
  mockupView = viewKey;
  if (viewKey !== "lenganKanan" && viewKey !== "lenganKiri") {
    isSleeveZoomed = false;
  }

  document.querySelectorAll(".view-pill").forEach((btn) => {
    btn.classList.toggle("view-pill-active", btn.dataset.view === viewKey);
  });

  applySleeveZoomViewBox();
  updateCoachGeometry();
  updateStageLabels();
  refreshIcons();
}

function toggleSleeveZoom() {
  isSleeveZoomed = !isSleeveZoomed;
  applySleeveZoomViewBox();
  updateStageLabels();
  refreshIcons();
}

function applySleeveZoomViewBox() {
  const svg = document.getElementById("coach-svg");
  if (!svg) return;
  if (!isSleeveZoomed) {
    svg.setAttribute("viewBox", "0 0 300 300");
    return;
  }
  if (mockupView === "lenganKanan") {
    svg.setAttribute(
      "viewBox",
      selectedSleeve === "panjang" ? "-12 30 108 212" : "8 30 98 130",
    );
  } else if (mockupView === "lenganKiri") {
    svg.setAttribute(
      "viewBox",
      selectedSleeve === "panjang" ? "204 30 108 212" : "194 30 98 130",
    );
  } else {
    svg.setAttribute("viewBox", "0 0 300 300");
  }
}

// ================= WARNA KAIN & PENCARIAN =================
function setColor(colorObj) {
  if (!colorObj) return;
  selectedColor = colorObj;

  const activeVar = getActiveVariant();
  if (activeVar) {
    activeVar.color = colorObj;
  }

  const colorSelect = document.getElementById("variant-color-select");
  if (colorSelect) colorSelect.value = colorObj.hex;

  updateCoachColors(colorObj.hex);
  updateStageLabels();
  renderSwatches();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setColorByHex(hex) {
  const found = palette.find((c) => c.hex.toLowerCase() === hex.toLowerCase());
  if (found) setColor(found);
}

function handleColorSearch(query) {
  colorSearchQuery = (query || "").trim().toLowerCase();
  const clearBtn = document.getElementById("clear-color-search-btn");
  if (clearBtn) {
    clearBtn.classList.toggle("hidden", colorSearchQuery.length === 0);
  }
  renderSwatches();
}

function clearColorSearch() {
  colorSearchQuery = "";
  const input = document.getElementById("color-search-input");
  const clearBtn = document.getElementById("clear-color-search-btn");
  if (input) input.value = "";
  if (clearBtn) clearBtn.classList.add("hidden");
  renderSwatches();
}

function initFilterBar() {
  const filterBar = document.getElementById("filter-bar");
  if (!filterBar) return;

  filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      filterBar.querySelectorAll(".filter-btn").forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("bg-[#18181b]", isActive);
        b.classList.toggle("text-white", isActive);
        b.classList.toggle("font-bold", isActive);
        b.classList.toggle("bg-[#f1f2ee]", !isActive);
        b.classList.toggle("text-zinc-700", !isActive);
        b.classList.toggle("font-semibold", !isActive);
      });
      renderSwatches();
    });
  });
}

function renderSwatches() {
  const container = document.getElementById("swatches");
  if (!container) return;

  const filtered = palette.filter((c) => {
    const matchCat = activeFilter === "all" || c.cat === activeFilter;
    const matchQuery =
      !colorSearchQuery || c.name.toLowerCase().includes(colorSearchQuery);
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-6 text-center text-xs text-zinc-500">
        Warna "<strong>${colorSearchQuery}</strong>" tidak ditemukan.
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  filtered.forEach((c) => {
    const isActive = c.hex === selectedColor.hex;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `swatch-card ${isActive ? "swatch-card-active" : ""}`;
    btn.onclick = () => setColor(c);

    btn.innerHTML = `
      <span
        class="w-5 h-5 rounded-full border border-black/15 shrink-0 shadow-2xs"
        style="background-color: ${c.hex}"
      ></span>
      <span class="text-xs font-bold text-zinc-800 truncate">${c.name}</span>
    `;
    container.appendChild(btn);
  });
}

function populateVariantColorSelect() {
  const select = document.getElementById("variant-color-select");
  if (!select) return;
  select.innerHTML = palette
    .map(
      (c) =>
        `<option value="${c.hex}" ${
          c.hex === selectedColor.hex ? "selected" : ""
        }>${c.name}</option>`,
    )
    .join("");
}

// ================= UPLOAD DESAIN & TITIK SABLON / BORDIR =================
function triggerDesignUpload(sideKey) {
  const targetSide = sideKey || mockupView || "depan";
  selectPrintSide(targetSide);
  const input = document.getElementById(`upload-${targetSide}`);
  if (input) input.click();
}

function handleDesignUpload(sideKey, inputEl) {
  const file = inputEl?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    customDesigns[sideKey] = {
      name: file.name,
      dataUrl: e.target.result,
    };

    if (!selectedPrints[sideKey] || selectedPrints[sideKey].isNone) {
      const firstValid = printCatalog[sideKey].find(
        (item) =>
          !item.isNone && (!item.longOnly || selectedSleeve === "panjang"),
      );
      if (firstValid) {
        selectedPrints[sideKey] = firstValid;
      }
    }

    selectPrintSide(sideKey);
    renderDesignSlots();
    updatePrintZoneOverlay();
    updateSablonSummary();
    updateOrderTotalsAndWA();
    pulseFloatingStageFeedback();
    refreshIcons();
  };
  reader.readAsDataURL(file);
  inputEl.value = "";
}

function removeCustomDesign(sideKey) {
  customDesigns[sideKey] = null;
  renderDesignSlots();
  updatePrintZoneOverlay();
  updateSablonSummary();
  refreshIcons();
}

function clearAllCustomDesigns() {
  ["depan", "belakang", "lenganKanan", "lenganKiri"].forEach((key) => {
    customDesigns[key] = null;
  });
  renderDesignSlots();
  updatePrintZoneOverlay();
  updateSablonSummary();
  refreshIcons();
}

function handleDropzoneDragOver(event) {
  event.preventDefault();
  const dz = document.getElementById("hero-upload-dropzone");
  if (dz) dz.classList.add("drag-over");
}

function handleDropzoneDragLeave(event) {
  event.preventDefault();
  const dz = document.getElementById("hero-upload-dropzone");
  if (dz) dz.classList.remove("drag-over");
}

function handleDropzoneDrop(event) {
  event.preventDefault();
  const dz = document.getElementById("hero-upload-dropzone");
  if (dz) dz.classList.remove("drag-over");

  const file = event.dataTransfer?.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;

  const targetSide = activeSide || mockupView || "depan";
  const reader = new FileReader();
  reader.onload = (e) => {
    customDesigns[targetSide] = {
      name: file.name,
      dataUrl: e.target.result,
    };

    if (!selectedPrints[targetSide] || selectedPrints[targetSide].isNone) {
      const firstValid = printCatalog[targetSide].find(
        (item) =>
          !item.isNone && (!item.longOnly || selectedSleeve === "panjang"),
      );
      if (firstValid) selectedPrints[targetSide] = firstValid;
    }

    selectPrintSide(targetSide);
    renderDesignSlots();
    updatePrintZoneOverlay();
    updateSablonSummary();
    updateOrderTotalsAndWA();
    pulseFloatingStageFeedback();
    refreshIcons();
  };
  reader.readAsDataURL(file);
}

function renderDesignSlots() {
  const grid = document.getElementById("design-slots-grid");
  const clearAllBtn = document.getElementById("clear-all-designs-btn");
  if (!grid) return;

  const sideMeta = [
    { key: "depan", label: "Sisi Depan" },
    { key: "belakang", label: "Sisi Belakang" },
    { key: "lenganKanan", label: "Lengan Kanan (+31°)" },
    { key: "lenganKiri", label: "Lengan Kiri (-31°)" },
  ];

  const hasAny = sideMeta.some((s) => Boolean(customDesigns[s.key]));
  if (clearAllBtn) {
    clearAllBtn.classList.toggle("hidden", !hasAny);
  }

  grid.innerHTML = sideMeta
    .map((s) => {
      const design = customDesigns[s.key];
      const isSelectedSide = activeSide === s.key;
      if (design) {
        return `
          <div class="flex items-center justify-between gap-2 bg-white border ${
            isSelectedSide
              ? "border-[#2563eb] ring-1 ring-[#2563eb]"
              : "border-blue-200"
          } rounded-xl p-2 shadow-2xs">
            <button
              type="button"
              onclick="selectPrintSide('${s.key}')"
              class="flex items-center gap-2 min-w-0 text-left cursor-pointer flex-1"
            >
              <img
                src="${design.dataUrl}"
                alt="${s.label}"
                class="w-9 h-9 rounded-lg object-contain bg-zinc-100 border border-zinc-200 shrink-0"
              />
              <div class="min-w-0">
                <div class="text-[11px] font-extrabold text-zinc-900 truncate">${s.label}</div>
                <div class="text-[10px] font-semibold text-[#2563eb] truncate">${design.name}</div>
              </div>
            </button>
            <div class="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onclick="triggerDesignUpload('${s.key}')"
                title="Ganti gambar"
                class="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#2563eb] cursor-pointer"
              >
                <i data-lucide="refresh-cw" class="icon-xs"></i>
              </button>
              <button
                type="button"
                onclick="removeCustomDesign('${s.key}')"
                title="Hapus gambar"
                class="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 cursor-pointer"
              >
                <i data-lucide="trash-2" class="icon-xs"></i>
              </button>
            </div>
          </div>
        `;
      }

      return `
        <button
          type="button"
          onclick="triggerDesignUpload('${s.key}')"
          class="flex items-center justify-between gap-2 bg-white/90 hover:bg-white border ${
            isSelectedSide ? "border-[#2563eb]" : "border-blue-200/80"
          } rounded-xl p-2.5 text-left cursor-pointer transition"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-8 h-8 rounded-lg bg-blue-100/80 text-[#2563eb] flex items-center justify-center shrink-0">
              <i data-lucide="image-plus" class="icon-xs"></i>
            </span>
            <div class="min-w-0">
              <div class="text-[11px] font-extrabold text-zinc-900 truncate">${s.label}</div>
              <div class="text-[10px] font-medium text-zinc-500 truncate">Klik untuk upload logo/desain</div>
            </div>
          </div>
          <span class="text-[10px] font-extrabold text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
            + File
          </span>
        </button>
      `;
    })
    .join("");
}

function selectPrintSide(sideKey) {
  if (!printCatalog[sideKey]) return;
  activeSide = sideKey;

  document.querySelectorAll(".side-tab").forEach((tab) => {
    tab.classList.toggle("side-tab-active", tab.dataset.side === sideKey);
  });

  renderDesignSlots();
  renderPrintOptions(sideKey);
  setMockupView(sideKey);
}

function buildMiniCoachSVG(miniObj, isLongSleeve) {
  const bodyPath = isLongSleeve
    ? "M23 7 L15 10 L2 33 L7 36 L16 21 L16 48 L44 48 L44 21 L53 36 L58 33 L45 10 L37 7 Q30 10 23 7 Z"
    : "M23 7 L15 10 L7 23 L15 27 L16 20 L16 48 L44 48 L44 20 L45 27 L53 23 L45 10 L37 7 Q30 10 23 7 Z";

  let zoneMarkup = "";
  if (miniObj) {
    const cx = miniObj.x + miniObj.w / 2;
    const cy = miniObj.y + miniObj.h / 2;
    const rotAttr = miniObj.rot
      ? `transform="rotate(${miniObj.rot} ${cx} ${cy})"`
      : "";
    zoneMarkup = `
      <rect
        x="${miniObj.x}"
        y="${miniObj.y}"
        width="${miniObj.w}"
        height="${miniObj.h}"
        rx="1.2"
        fill="#2563eb"
        fill-opacity="0.32"
        stroke="#2563eb"
        stroke-width="1.2"
        ${rotAttr}
      />
    `;
  }

  return `
    <svg viewBox="0 0 60 52" class="w-12 h-11 shrink-0 rounded-lg bg-white border border-[#e4e5e0] p-1">
      <path d="${bodyPath}" fill="#f4f4f5" stroke="#18181b" stroke-width="1.2" stroke-linejoin="round" />
      <path d="M24 5 Q27 8 30 10 L26 13 L23 8 Z" fill="#e4e4e7" stroke="#18181b" stroke-width="0.95" />
      <path d="M36 5 Q33 8 30 10 L34 13 L37 8 Z" fill="#e4e4e7" stroke="#18181b" stroke-width="0.95" />
      <line x1="30" y1="10" x2="30" y2="48" stroke="#18181b" stroke-width="0.9" />
      ${zoneMarkup}
    </svg>
  `;
}

function renderPrintOptions(sideKey) {
  const grid = document.getElementById("print-options-grid");
  if (!grid) return;

  const list = printCatalog[sideKey] || [];
  const currentSelected = selectedPrints[sideKey];
  const maxArea = Math.max(...list.map((i) => i.area || 0), 1);

  grid.innerHTML = "";
  list.forEach((item) => {
    const isActive = currentSelected && currentSelected.id === item.id;
    const isDisabledLong = item.longOnly && selectedSleeve !== "panjang";
    const pct = item.area
      ? Math.min(100, Math.round((item.area / maxArea) * 100))
      : 0;

    const card = document.createElement("button");
    card.type = "button";
    card.className = `print-card ${isActive ? "print-card-active" : ""} ${
      isDisabledLong ? "opacity-60" : ""
    }`;

    card.onclick = () => {
      if (isDisabledLong) {
        setSleeve("panjang");
      }
      selectedPrints[sideKey] = item;
      if (sideKey === "lenganKanan" || sideKey === "lenganKiri") {
        isSleeveZoomed = !item.isNone;
        applySleeveZoomViewBox();
      }
      renderPrintOptions(sideKey);
      updatePrintZoneOverlay();
      updateStageLabels();
      updateSablonSummary();
      updateOrderTotalsAndWA();
      pulseFloatingStageFeedback();
    };

    const badgeClass = item.isNone
      ? "print-badge print-badge-none"
      : isDisabledLong
        ? "print-badge print-badge-warn"
        : "print-badge";

    card.innerHTML = `
      ${buildMiniCoachSVG(item.mini, selectedSleeve === "panjang")}
      <div class="min-w-0 flex-1 w-full">
        <span class="${badgeClass}">${
          isDisabledLong ? "Khusus L. Panjang" : item.badge
        }</span>
        <div class="text-xs font-extrabold text-zinc-900 leading-snug">
          ${item.name}
        </div>
        <div class="text-[11px] font-bold text-[#2563eb]">${item.dim}</div>
        ${
          !item.isNone
            ? `<div class="area-bar-track"><div class="area-bar-fill" style="width:${pct}%"></div></div>`
            : ""
        }
        <p class="text-[10.5px] text-zinc-500 leading-snug mt-0.5 line-clamp-2">
          ${item.desc}
        </p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function updateSablonSummary() {
  const summaryGrid = document.getElementById("summary-grid");
  const totalSidesBadge = document.getElementById("total-print-sides");

  const sideLabels = {
    depan: "Depan",
    belakang: "Belakang",
    lenganKanan: "L. Kanan",
    lenganKiri: "L. Kiri",
  };

  let activeCount = 0;
  const cells = [];

  Object.keys(sideLabels).forEach((sKey) => {
    const item = selectedPrints[sKey];
    const hasPrint = item && !item.isNone;
    const hasImg = Boolean(customDesigns[sKey]);
    if (hasPrint) activeCount++;

    const deg = getEffectiveAngleForSide(sKey);
    const degText =
      sKey === "lenganKanan" || sKey === "lenganKiri"
        ? ` ${deg > 0 ? "+" : ""}${deg}°`
        : "";

    const tabSub = document.getElementById(`tab-sub-${sKey}`);
    if (tabSub) {
      tabSub.textContent = hasPrint
        ? `${item.name} (${item.dim})${degText}${hasImg ? " • File" : ""}`
        : "Tanpa sablon/bordir";
    }

    cells.push(`
      <div class="flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
        <span class="text-neutral-400 font-semibold">${sideLabels[sKey]}:</span>
        <span class="font-bold truncate ${
          hasPrint ? "text-white" : "text-neutral-500"
        }">
          ${hasPrint ? `${item.dim}${hasImg ? " (File)" : ""}` : "Polos"}
        </span>
      </div>
    `);
  });

  if (totalSidesBadge) {
    totalSidesBadge.textContent =
      activeCount === 0
        ? "Jaket Polos (Tanpa Sablon/Bordir)"
        : `${activeCount} Sisi Aktif`;
  }
  if (summaryGrid) {
    summaryGrid.innerHTML = cells.join("");
  }
}

// ================= SIZE CHART =================
function renderSizeChart(cutKey, sleeveKey) {
  const cut = cuts[cutKey] || cuts.reguler;
  const sleeveData = cut[sleeveKey] || cut.panjang;
  const tbody = document.getElementById("size-chart-body");
  const titleEl = document.getElementById("chart-cut-title");
  const badgeEl = document.getElementById("chart-range-badge");

  if (titleEl) {
    titleEl.textContent = `${cut.label} • ${
      sleeveKey === "panjang" ? "L. Panjang" : "L. Pendek"
    }`;
  }
  if (badgeEl) {
    badgeEl.textContent = `S – ${sizeKeys[sizeKeys.length - 1]} (cm)`;
  }
  if (!tbody) return;

  const rows = sleeveData.sizes.filter((row) => sizeKeys.includes(row.size));
  tbody.innerHTML = rows
    .map((r) => {
      const isSelected = selectedSize === r.size;
      const extra = SIZE_SURCHARGE[r.size] || 0;
      return `
        <tr
          onclick="selectedSize = selectedSize === '${r.size}' ? null : '${r.size}'; renderSizeChart('${cutKey}', '${sleeveKey}');"
          class="cursor-pointer transition ${
            isSelected
              ? "bg-blue-50/90 font-bold text-[#1d4ed8]"
              : "odd:bg-white even:bg-[#fafaf8] hover:bg-blue-50/60 text-zinc-700"
          }"
        >
          <td class="py-1.5 px-3 text-left">
            <div class="flex items-center gap-1.5">
              <span class="inline-flex items-center justify-center min-w-[30px] px-2 py-0.5 rounded-md font-extrabold text-[11px] ${
                isSelected
                  ? "bg-[#2563eb] text-white shadow-2xs"
                  : "bg-zinc-900/5 text-zinc-900"
              }">
                ${r.size}
              </span>
              ${
                extra > 0
                  ? `<span class="text-[9px] font-bold text-[#2563eb]">+${extra / 1000}rb</span>`
                  : ""
              }
            </div>
          </td>
          <td class="py-1.5 px-3 text-center font-semibold tabular-nums">${r.p}</td>
          <td class="py-1.5 px-3 text-center font-semibold tabular-nums">${r.l}</td>
          <td class="py-1.5 px-3 text-center font-semibold tabular-nums">${r.pl}</td>
        </tr>
      `;
    })
    .join("");
}

// ================= 4. VISUALISASI TUMPUKAN JAKET COACH LIPAT 3D =================
function buildFoldedCoachLayerSVG(
  y,
  hex,
  isTop,
  isLongSleeve,
  closureType,
  liningType,
  drawstringMode,
  layerIndex,
) {
  const dark = isDark(hex);
  const topColor = hex;
  const frontEdgeColor = shadeHex(hex, dark ? -6 : -14);
  const rightEdgeColor = shadeHex(hex, dark ? -16 : -28);
  const creaseColor = shadeHex(hex, dark ? -22 : -36);
  const highlightColor = shadeHex(hex, dark ? 22 : 12);
  const collarColor = shadeHex(hex, dark ? 8 : -14);
  const liningColor =
    liningType === "quilting"
      ? "#334155"
      : liningType === "jaring"
        ? "#27272a"
        : shadeHex(hex, dark ? -16 : -38);

  const t = 8.4;

  const drawstringHint =
    drawstringMode === "pakai"
      ? `
        <path
          d="M44 ${y - 4.5} Q42 ${y + 2} 43.5 ${y + 6.5}"
          fill="none"
          stroke="${dark ? "#e4e4e7" : "#52525b"}"
          stroke-width="1"
          stroke-linecap="round"
        />
        <path
          d="M62 ${y - 2.8} Q64 ${y + 3.5} 62.5 ${y + 8}"
          fill="none"
          stroke="${dark ? "#e4e4e7" : "#52525b"}"
          stroke-width="1"
          stroke-linecap="round"
        />
      `
      : "";

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
    ${drawstringHint}
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
    const longSleeveFold = isLongSleeve
      ? `
        <path
          d="M27 ${y - 11.5} L106 ${y - 3.5} L101 ${y + 0.5} L22 ${y - 7.5} Z"
          fill="${shadeHex(hex, dark ? 9 : -8)}"
          stroke="${creaseColor}"
          stroke-width="0.55"
          opacity="0.88"
        />
      `
      : "";

    const zipperLine =
      closureType === "zipper" || closureType === "double"
        ? `
          <line
            x1="84.5"
            y1="${y - 22.2}"
            x2="72"
            y2="${y - 2.2}"
            stroke="#d4d4d8"
            stroke-width="1.2"
            stroke-dasharray="1.3 1.3"
          />
        `
        : "";

    const snapButtons =
      closureType === "snap" || closureType === "double"
        ? `
          <circle cx="82.5" cy="${y - 19.2}" r="1.1" fill="#e4e4e7" stroke="#18181b" stroke-width="0.5" />
          <circle cx="78.5" cy="${y - 12.8}" r="1.1" fill="#e4e4e7" stroke="#18181b" stroke-width="0.5" />
          <circle cx="74.5" cy="${y - 6.4}" r="1.1" fill="#e4e4e7" stroke="#18181b" stroke-width="0.5" />
        `
        : "";

    const collarGraphic = `
      <path
        d="M70 ${y - 30.2} Q86 ${y - 33.8} 102 ${y - 26.8} Q85 ${y - 19} 70 ${y - 30.2} Z"
        fill="${liningColor}"
      />
      <path
        d="M67.5 ${y - 31} Q77 ${y - 26} 84.5 ${y - 22.2} L73.5 ${y - 18.8} Q68 ${y - 24} 67.5 ${y - 31} Z"
        fill="${collarColor}"
        stroke="${creaseColor}"
        stroke-width="0.7"
        stroke-linejoin="round"
      />
      <path
        d="M104.5 ${y - 27} Q93.5 ${y - 24.2} 84.5 ${y - 22.2} L92.5 ${y - 17} Q100.5 ${y - 21} 104.5 ${y - 27} Z"
        fill="${collarColor}"
        stroke="${creaseColor}"
        stroke-width="0.7"
        stroke-linejoin="round"
      />
    `;

    topSurface = `
      <path
        d="M46 ${y - 33} L126 ${y - 25} L94 ${y} L14 ${y - 8} Z"
        fill="${topColor}"
      />
      <line
        x1="84.5"
        y1="${y - 22.2}"
        x2="72"
        y2="${y - 2.2}"
        stroke="${creaseColor}"
        stroke-width="0.8"
      />
      <line
        x1="56"
        y1="${y - 30}"
        x2="26"
        y2="${y - 8}"
        stroke="${creaseColor}"
        stroke-width="0.7"
        opacity="0.24"
      />
      <line
        x1="114"
        y1="${y - 24}"
        x2="84"
        y2="${y - 2}"
        stroke="${creaseColor}"
        stroke-width="0.7"
        opacity="0.24"
      />
      ${longSleeveFold}
      <path
        d="M14 ${y - 8} L94 ${y} L126 ${y - 25}"
        fill="none"
        stroke="${highlightColor}"
        stroke-width="1"
        opacity="0.75"
      />
      ${zipperLine}
      ${snapButtons}
      ${collarGraphic}
    `;
  }

  return `
    <g class="shirt-layer" data-layer="${layerIndex}">
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
        isLongSleeve: v.sleeve === "panjang",
        closure: v.closure || "snap",
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
        layersHTML += buildFoldedCoachLayerSVG(
          y,
          layer.hex,
          isTop,
          layer.isLongSleeve,
          layer.closure,
          selectedLining,
          selectedDrawstring,
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
        const layers = svg.querySelectorAll(".shirt-layer");
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
  const sleeveSelect = document.getElementById("variant-sleeve-select");
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
    const sleeveShort =
      variant.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";
    const closureShort =
      closureCatalog[variant.closure]?.shortLabel || "Kancing Snap";

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
          ${sleeveShort} • ${closureShort}
        </span>
        ${
          isActive
            ? `<span class="sm:hidden text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#2563eb] text-white font-extrabold shrink-0">Aktif</span>`
            : ""
        }
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
  if (sleeveSelect) sleeveSelect.value = activeVar.sleeve;
  if (closureSelect) closureSelect.value = activeVar.closure || "snap";

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
  selectedSleeve = activeVar.sleeve;
  selectedClosure = activeVar.closure || "snap";

  document.querySelectorAll(".sleeve-pill").forEach((btn) => {
    const active = btn.dataset.sleeve === selectedSleeve;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  document.querySelectorAll(".closure-pill").forEach((btn) => {
    const active = btn.dataset.closure === selectedClosure;
    btn.classList.toggle("feature-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  updateCoachGeometry();
  updateCoachColors(selectedColor.hex);
  updateStageLabels();
  renderSizeChart(selectedCut, selectedSleeve);
  renderSwatches();
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
    sleeve: currentVar.sleeve,
    closure: currentVar.closure || "snap",
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
  const sleeveText =
    activeVar.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";
  const closureText =
    closureCatalog[activeVar.closure]?.shortLabel || "Kancing Snap";

  if (editingLabel) {
    editingLabel.textContent = `2. Atur Jumlah Ukuran — ${activeVar.color.name} (${sleeveText} • ${closureText}):`;
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

function buildWhatsAppMessageText() {
  const fabric = getSelectedFabric();
  const liningObj = liningCatalog[selectedLining] || liningCatalog.jaring;
  const cuffObj = cuffCatalog[selectedCuff] || cuffCatalog.karet;
  const pocketObj = pocketCatalog[selectedPocket] || pocketCatalog.welt;
  const drawstringText =
    selectedDrawstring === "pakai" ? "Tali Serut Bawah" : "Tanpa Tali Serut";

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
    if (!item || item.isNone) return "Tanpa sablon/bordir";
    const angleDeg = getEffectiveAngleForSide(side);
    const rotInfo =
      side === "lenganKanan" || side === "lenganKiri"
        ? ` [Auto Rotasi: ${angleDeg > 0 ? "+" : ""}${angleDeg}°]`
        : "";
    const imgNote = customDesigns[side] ? " [File desain terlampir]" : "";
    return `${item.name} (${item.dim})${rotInfo}${imgNote}`;
  };

  const variantsWAText = orderVariants.map((v, idx) => {
    const sub = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
    const baseUnit = getVariantBaseUnitPrice(v);
    const varSubtotal = calculateVariantTotalPrice(v);
    const sleeveLabel =
      v.sleeve === "panjang"
        ? `Lengan Panjang (${cuffObj.shortLabel})`
        : "Lengan Pendek (-10rb)";
    const closureObj = closureCatalog[v.closure] || closureCatalog.snap;
    const closureLabel =
      closureObj.extra > 0
        ? `${closureObj.label} (+${closureObj.extra / 1000}rb)`
        : closureObj.label;
    const breakdown = sizeKeys
      .filter((sz) => (v.quantities[sz] || 0) > 0)
      .map((sz) => {
        const extra = SIZE_SURCHARGE[sz] || 0;
        return extra > 0
          ? `${sz}(+${extra / 1000}rb): ${v.quantities[sz]}`
          : `${sz}: ${v.quantities[sz]}`;
      })
      .join(", ");
    return `  ${idx + 1}) ${v.color.name} (${sleeveLabel} • ${closureLabel}) = ${sub} pcs [${breakdown || "Belum diisi"}] | Dasar ${formatRupiah(baseUnit)} | Subtotal ${formatRupiah(varSubtotal)}`;
  });

  return [
    "Halo Atensi Konveksi, saya mau kirim Spesifikasi Order & konsultasi desain Jaket Coach custom:",
    `• Potongan: ${cuts[selectedCut].label}`,
    `• Bahan Luar: ${fabric.name}`,
    `• Lapisan Furing: ${liningObj.label}${liningObj.extra > 0 ? ` (+${liningObj.extra / 1000}rb)` : ""}`,
    `• Detail Fitur: ${drawstringText} • ${pocketObj.label}${pocketObj.extra > 0 ? ` (+${pocketObj.extra / 1000}rb)` : ""}`,
    `• Sablon/Bordir Depan: ${formatSideWA("depan")}`,
    `• Sablon/Bordir Belakang: ${formatSideWA("belakang")}`,
    `• Lengan Kanan: ${formatSideWA("lenganKanan")}`,
    `• Lengan Kiri: ${formatSideWA("lenganKiri")}`,
    `• Rincian Varian & Jumlah (Total ${grandTotal} pcs):`,
    ...variantsWAText,
    `• Estimasi Total Biaya: ${formatRupiah(totalEstimatedPrice)} (maks. 3 titik sablon / bordir)`,
  ].join("\n");
}

function updateOrderTotalsAndWA() {
  const fabric = getSelectedFabric();
  const liningObj = liningCatalog[selectedLining] || liningCatalog.jaring;
  const cuffObj = cuffCatalog[selectedCuff] || cuffCatalog.karet;
  const pocketObj = pocketCatalog[selectedPocket] || pocketCatalog.welt;

  const grandTotal = orderVariants.reduce(
    (totalSum, v) =>
      totalSum + sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0),
    0,
  );

  const totalQtyText = document.getElementById("total-qty-text");
  const stageTotalBadge = document.getElementById("stage-total-qty-badge");
  if (totalQtyText) totalQtyText.textContent = grandTotal;
  if (stageTotalBadge) stageTotalBadge.textContent = `${grandTotal} pcs`;

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
        const sleeveLabel = v.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";
        const closureLabel =
          closureCatalog[v.closure]?.shortLabel || "Kancing Snap";

        const row = document.createElement("div");
        row.className =
          "flex flex-wrap items-center justify-between gap-2 bg-white border border-[#e4e5e0] rounded-lg px-2.5 py-1.5";
        row.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full border border-black/20" style="background-color:${v.color.hex}"></span>
            <span class="font-bold text-zinc-900">${idx + 1}. ${v.color.name} (${sleeveLabel} • ${closureLabel})</span>
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
      const sleeveTxt =
        activeVar.sleeve === "panjang" ? "L. Panjang" : "L. Pendek (-10rb)";
      const closureObj =
        closureCatalog[activeVar.closure] || closureCatalog.snap;
      const closureTxt =
        closureObj.extra > 0
          ? `${closureObj.shortLabel} (+${closureObj.extra / 1000}rb)`
          : closureObj.shortLabel;

      const extraModelNotes = [];
      if (liningObj.extra > 0)
        extraModelNotes.push(
          `${liningObj.shortLabel} (+${liningObj.extra / 1000}rb)`,
        );
      if (activeVar.sleeve === "panjang" && cuffObj.extra > 0)
        extraModelNotes.push(
          `${cuffObj.shortLabel} (+${cuffObj.extra / 1000}rb)`,
        );
      if (pocketObj.extra > 0)
        extraModelNotes.push(
          `${pocketObj.shortLabel} (+${pocketObj.extra / 1000}rb)`,
        );
      const modelSuffix =
        extraModelNotes.length > 0 ? ` • ${extraModelNotes.join(" • ")}` : "";

      breakdownList.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-1 text-zinc-600">
          <span>Harga dasar satuan (${sleeveTxt} • ${closureTxt}${modelSuffix}):</span>
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

        const sleeveNote =
          v.sleeve === "panjang" ? "L. Panjang" : "L. Pendek (-10rb)";
        const closureObj = closureCatalog[v.closure] || closureCatalog.snap;
        const closureNote =
          closureObj.extra > 0
            ? `${closureObj.shortLabel} (+${closureObj.extra / 1000}rb)`
            : closureObj.shortLabel;

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
                ${orderVariants.length > 1 ? `#${idx + 1} ` : ""}${v.color.name} (${sleeveNote} • ${closureNote})
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
    "depan",
    "belakang",
    "lenganKanan",
    "lenganKiri",
  ].filter(
    (side) => selectedPrints[side] && !selectedPrints[side].isNone,
  ).length;
  const printWarningEl = document.getElementById("est-print-warning");
  if (printWarningEl) {
    printWarningEl.classList.toggle("hidden", activePrintCount <= 3);
  }
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

// ================= GENERATOR SPESIFIKASI ORDER (PNG & PDF) =================
function roundRectCanvas(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function loadImageAsync(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function buildStandaloneCoachSVGString(
  viewKey,
  cutKey,
  sleeveKey,
  colorItem,
  closureKey,
  cuffKey,
  drawstringMode,
  pocketKey,
) {
  const cut = cuts[cutKey] || cuts.reguler;
  const sleeveData = cut[sleeveKey] || cut.panjang;
  const isBack = viewKey === "belakang";

  const dark = isDark(colorItem.hex);
  const lum = getLuminance(colorItem.hex);
  const outlineColor = dark && lum < 42 ? "#52525b" : "#18181b";
  const collarFill = shadeHex(colorItem.hex, dark ? 9 : -10);
  const innerNeckFill = shadeHex(colorItem.hex, dark ? -8 : -22);
  const subtleStitch = dark ? "rgba(255,255,255,0.22)" : "rgba(24,24,27,0.25)";
  const tagFill = dark ? "rgba(255,255,255,0.28)" : "rgba(24,24,27,0.18)";
  const drawstringColor = lum > 180 ? "#52525b" : "#e4e4e7";

  let vb = "0 0 300 300";
  if (viewKey === "lenganKanan") {
    vb = sleeveKey === "panjang" ? "-12 30 108 212" : "8 30 98 130";
  } else if (viewKey === "lenganKiri") {
    vb = sleeveKey === "panjang" ? "204 30 108 212" : "194 30 98 130";
  }

  const bodyPath = isBack ? sleeveData.bodyBack : sleeveData.body;

  const frontNeckMarkup = isBack
    ? ""
    : `
      <path d="M124 18 Q150 21 176 18 L178 31 Q150 35 122 31 Z" fill="${innerNeckFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
      <path d="M124 29 Q150 32 176 29" fill="none" stroke="${outlineColor}" stroke-width="1.1" stroke-linecap="round" />
      <rect x="144" y="22" width="12" height="4" rx="0.9" fill="${tagFill}" />
    `;

  const cuffsMarkup =
    sleeveKey === "panjang"
      ? `
        <path d="${sleeveData.cuffL}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
        <path d="${sleeveData.cuffR}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
        ${
          cuffKey !== "kancing"
            ? `
              <path d="${sleeveData.cuffTexL}" fill="none" stroke="${subtleStitch}" stroke-width="0.9" />
              <path d="${sleeveData.cuffTexR}" fill="none" stroke="${subtleStitch}" stroke-width="0.9" />
            `
            : ""
        }
      `
      : `
        <path d="${sleeveData.scuffL}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
        <path d="${sleeveData.scuffR}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
      `;

  const dy = cut.bottomY - 256;
  const drawstringMarkup =
    drawstringMode === "pakai"
      ? `
        <g transform="translate(0, ${dy})">
          <path d="M145 256 Q141 265 137 272" fill="none" stroke="${drawstringColor}" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="136.6" cy="272.6" r="1.5" fill="#18181b" />
          <path d="M153 256 Q156 266 159 276" fill="none" stroke="${drawstringColor}" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="159.3" cy="276.6" r="1.5" fill="#18181b" />
        </g>
      `
      : "";

  let frontDetailsMarkup = "";
  if (isBack) {
    frontDetailsMarkup = `
      <path d="M124 18 Q150 16 176 18 L185 32 Q150 30 115 32 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.45" stroke-linejoin="round" />
      <path d="M117 30 Q150 28 183 30" fill="none" stroke="${subtleStitch}" stroke-width="0.9" />
      <path d="${cut.backYoke}" fill="none" stroke="${subtleStitch}" stroke-width="0.95" stroke-dasharray="2.5 2.5" />
    `;
  } else {
    const ox = cut.pocketOffset?.x || 0;
    const oy = cut.pocketOffset?.y || 0;
    const pocketsMarkup =
      pocketKey === "flap"
        ? `
          <g transform="translate(${-ox}, ${oy})">
            <path d="M87 170 L119 170 L119 213 L87 213 Z" fill="${colorItem.hex}" stroke="${outlineColor}" stroke-width="1.25" />
            <path d="M86 170 L120 170 L120 181 L103 186 L86 181 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.25" />
            <circle cx="103" cy="180" r="1.7" fill="#d4d4d8" stroke="#18181b" stroke-width="0.75" />
          </g>
          <g transform="translate(${ox}, ${oy})">
            <path d="M181 170 L213 170 L213 213 L181 213 Z" fill="${colorItem.hex}" stroke="${outlineColor}" stroke-width="1.25" />
            <path d="M180 170 L214 170 L214 181 L197 186 L180 181 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.25" />
            <circle cx="197" cy="180" r="1.7" fill="#d4d4d8" stroke="#18181b" stroke-width="0.75" />
          </g>
        `
        : `
          <g transform="translate(${-ox}, ${oy})">
            <path d="M92 166 L99 167 L95 212 L88 211 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
          </g>
          <g transform="translate(${ox}, ${oy})">
            <path d="M208 166 L201 167 L205 212 L212 211 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
          </g>
          ${
            pocketKey === "inner"
              ? `<path d="M104 92 L125 92" fill="none" stroke="#60a5fa" stroke-width="1.3" stroke-dasharray="2.5 2" />`
              : ""
          }
        `;

    const zipperMarkup =
      closureKey === "zipper" || closureKey === "double"
        ? `
          <line x1="150" y1="35" x2="150" y2="${cut.bottomY - 2}" stroke="#27272a" stroke-width="2.6" />
          <line x1="150" y1="35" x2="150" y2="${cut.bottomY - 2}" stroke="#d4d4d8" stroke-width="1.5" stroke-dasharray="2 2" />
          <rect x="147.8" y="60" width="4.4" height="5.5" rx="1" fill="#a1a1aa" stroke="#18181b" stroke-width="0.8" />
          <rect x="148.4" y="65.5" width="3.2" height="7.5" rx="1" fill="#e4e4e7" stroke="#18181b" stroke-width="0.8" />
        `
        : "";

    const snapMarkup =
      closureKey === "snap" || closureKey === "double"
        ? [46, 85, 124, 163, 202, 241]
            .map(
              (sy) => `
              <g transform="translate(150, ${sy})">
                <circle r="2.9" fill="#f4f4f5" stroke="#18181b" stroke-width="1.15" />
                <circle r="1.35" fill="none" stroke="#18181b" stroke-width="0.8" />
              </g>
            `,
            )
            .join("")
        : "";

    const collarMarkup = `
      <path d="M124 18 L113 31 L126 53 L150 35 Q136 28 124 18 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.45" stroke-linejoin="round" />
      <path d="M176 18 L187 31 L174 53 L150 35 Q164 28 176 18 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.45" stroke-linejoin="round" />
      <path d="M115.5 31 L126.5 50.5 L147.5 35" fill="none" stroke="${subtleStitch}" stroke-width="0.95" stroke-dasharray="2 2" />
      <path d="M184.5 31 L173.5 50.5 L152.5 35" fill="none" stroke="${subtleStitch}" stroke-width="0.95" stroke-dasharray="2 2" />
    `;

    frontDetailsMarkup = `
      ${pocketsMarkup}
      <line x1="150" y1="35" x2="150" y2="${cut.bottomY}" stroke="${outlineColor}" stroke-width="1.5" />
      <line x1="154.5" y1="35" x2="154.5" y2="${cut.bottomY}" stroke="${subtleStitch}" stroke-width="0.9" stroke-dasharray="2.5 2.5" />
      ${zipperMarkup}
      ${snapMarkup}
      ${collarMarkup}
    `;
  }

  const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">
      <defs>
        <linearGradient id="woCoachLightH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.06" />
          <stop offset="18%" stop-color="#000000" stop-opacity="0.01" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.05" />
          <stop offset="82%" stop-color="#000000" stop-opacity="0.01" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.06" />
        </linearGradient>
        <linearGradient id="woCoachLightV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.06" />
        </linearGradient>
      </defs>
      ${frontNeckMarkup}
      <path d="${bodyPath}" fill="${colorItem.hex}" stroke="${outlineColor}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" />
      <path d="${bodyPath}" fill="url(#woCoachLightH)" style="mix-blend-mode:multiply" />
      <path d="${bodyPath}" fill="url(#woCoachLightV)" style="mix-blend-mode:multiply" />
      ${cuffsMarkup}
      <path d="${cut.shoulderL}" fill="none" stroke="${outlineColor}" stroke-width="1.4" stroke-linecap="round" />
      <path d="${cut.shoulderR}" fill="none" stroke="${outlineColor}" stroke-width="1.4" stroke-linecap="round" />
      <path d="${sleeveData.armholeL}" fill="none" stroke="${outlineColor}" stroke-width="1.4" stroke-linecap="round" />
      <path d="${sleeveData.armholeR}" fill="none" stroke="${outlineColor}" stroke-width="1.4" stroke-linecap="round" />
      <line x1="${cut.hemX1}" y1="${cut.hemTopY}" x2="${cut.hemX2}" y2="${cut.hemTopY}" stroke="${outlineColor}" stroke-width="1.25" />
      <line x1="${cut.hemX1 - 0.5}" y1="${cut.hemBotY}" x2="${cut.hemX2 + 0.5}" y2="${cut.hemBotY}" stroke="${outlineColor}" stroke-width="1.25" />
      ${drawstringMarkup}
      ${frontDetailsMarkup}
    </svg>
  `;

  return { svgStr, vb: vb.split(" ").map(Number) };
}

async function drawMockupPanelOnCanvas(
  ctx,
  panelRect,
  viewKey,
  titleText,
  cutKey,
  sleeveKey,
  colorItem,
  closureKey,
  cuffKey,
  drawstringMode,
  pocketKey,
) {
  const { x: px, y: py, w: pw, h: ph } = panelRect;

  roundRectCanvas(ctx, px, py, pw, ph, 14);
  ctx.fillStyle = "#f8fafc";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.25;
  ctx.stroke();

  const badgeW = Math.min(pw - 24, 210);
  roundRectCanvas(ctx, px + (pw - badgeW) / 2, py + 12, badgeW, 24, 12);
  ctx.fillStyle = "#e2e8f0";
  ctx.fill();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 11px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(titleText, px + pw / 2, py + 28);

  const { svgStr, vb } = buildStandaloneCoachSVGString(
    viewKey,
    cutKey,
    sleeveKey,
    colorItem,
    closureKey,
    cuffKey,
    drawstringMode,
    pocketKey,
  );
  const [vbX, vbY, vbW, vbH] = vb;

  const availW = pw - 36;
  const availH = ph - 82;
  const aspect = vbW / vbH;
  let destW = availW;
  let destH = destW / aspect;
  if (destH > availH) {
    destH = availH;
    destW = destH * aspect;
  }
  const destX = px + (pw - destW) / 2;
  const destY = py + 44 + (availH - destH) / 2;

  const svgBlob = new Blob([svgStr], {
    type: "image/svg+xml;charset=utf-8",
  });
  const svgUrl = URL.createObjectURL(svgBlob);
  const coachImg = await loadImageAsync(svgUrl);
  if (coachImg) {
    ctx.drawImage(coachImg, destX, destY, destW, destH);
  }
  URL.revokeObjectURL(svgUrl);

  const activePrint = selectedPrints[viewKey];
  const geo = computePrintZoneGeometry(viewKey, activePrint, cutKey, sleeveKey);

  if (geo) {
    const scaleX = destW / vbW;
    const scaleY = destH / vbH;
    const czX = destX + (geo.x - vbX) * scaleX;
    const czY = destY + (geo.y - vbY) * scaleY;
    const czW = geo.w * scaleX;
    const czH = geo.h * scaleY;
    const ccx = czX + czW / 2;
    const ccy = czY + czH / 2;

    ctx.save();
    if (geo.rot !== 0) {
      ctx.translate(ccx, ccy);
      ctx.rotate((geo.rot * Math.PI) / 180);
      ctx.translate(-ccx, -ccy);
    }

    const sideDesign = customDesigns[viewKey];
    const designSrc = sideDesign?.dataUrl || sideDesign?.url || null;

    roundRectCanvas(ctx, czX, czY, czW, czH, 3);
    ctx.fillStyle = designSrc
      ? "rgba(37, 99, 235, 0.04)"
      : "rgba(37, 99, 235, 0.16)";
    ctx.fill();
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    if (designSrc) {
      const artImg = await loadImageAsync(designSrc);
      if (artImg) {
        const pad = 2;
        const boxW = Math.max(4, czW - pad * 2);
        const boxH = Math.max(4, czH - pad * 2);
        const imgRatio = artImg.width / Math.max(1, artImg.height);
        let drawW = boxW;
        let drawH = drawW / imgRatio;
        if (drawH > boxH) {
          drawH = boxH;
          drawW = drawH * imgRatio;
        }
        const drawX = czX + pad + (boxW - drawW) / 2;
        const drawY = czY + pad + (boxH - drawH) / 2;
        ctx.drawImage(artImg, drawX, drawY, drawW, drawH);
      }
    }

    ctx.font = "800 11px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#18181b";
    ctx.strokeText(geo.dim, ccx, czY + czH + 13);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(geo.dim, ccx, czY + czH + 13);
    ctx.restore();
  }

  ctx.fillStyle = !activePrint || activePrint.isNone ? "#64748b" : "#18181b";
  ctx.font = "700 12px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  const rotSuffix =
    geo && geo.rot !== 0 ? ` [${geo.rot > 0 ? "+" : ""}${geo.rot}°]` : "";
  const caption =
    !activePrint || activePrint.isNone
      ? "Polos (Tanpa Sablon/Bordir)"
      : `${activePrint.name} (${activePrint.dim})${rotSuffix}`;
  ctx.fillText(caption, px + pw / 2, py + ph - 12);
  ctx.textAlign = "left";
}

async function generateVisualSpecCardImage() {
  const fabric = getSelectedFabric();
  const liningObj = liningCatalog[selectedLining] || liningCatalog.jaring;
  const cuffObj = cuffCatalog[selectedCuff] || cuffCatalog.karet;
  const pocketObj = pocketCatalog[selectedPocket] || pocketCatalog.welt;
  const activeVar = getActiveVariant();
  const activeClosure = activeVar.closure || selectedClosure || "snap";

  const grandTotal = orderVariants.reduce(
    (totalSum, v) =>
      totalSum + sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0),
    0,
  );
  const totalEstimatedPrice = orderVariants.reduce(
    (sum, v) => sum + calculateVariantTotalPrice(v),
    0,
  );

  const hasRightSleevePrint =
    selectedPrints.lenganKanan && !selectedPrints.lenganKanan.isNone;
  const hasLeftSleevePrint =
    selectedPrints.lenganKiri && !selectedPrints.lenganKiri.isNone;
  const hasAnySleevePrint = hasRightSleevePrint || hasLeftSleevePrint;

  const headerH = 92;
  const topMargin = 20;
  const frontBackBlockH = 370;
  const sleeveBlockH = hasAnySleevePrint ? 245 : 0;
  const variantStripH = 44;
  const mockupSectionH =
    60 + frontBackBlockH + sleeveBlockH + variantStripH + 18;
  const specGridH = 240;
  const tableHeaderH = 40;
  const tableRowH = 40;
  const tableTotalH = 58;
  const orderMatrixH =
    64 + tableHeaderH + orderVariants.length * tableRowH + tableTotalH + 20;
  const footerH = 54;

  const W = 1200;
  const H =
    headerH +
    topMargin +
    mockupSectionH +
    18 +
    specGridH +
    18 +
    orderMatrixH +
    18 +
    footerH;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, W, H);

  // 1. HEADER
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, headerH);

  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, headerH);
  ctx.lineTo(W, headerH);
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "900 28px system-ui, -apple-system, sans-serif";
  ctx.fillText("SPESIFIKASI ORDER JAKET COACH", 44, 57);

  const now = new Date();
  const todayStr = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const statusText = "Status: Konsultasi Desain";
  ctx.font = "800 13px system-ui, -apple-system, sans-serif";
  const statusW = ctx.measureText(statusText).width + 28;
  const statusX = W - 44 - statusW;
  roundRectCanvas(ctx, statusX, 32, statusW, 32, 16);
  ctx.fillStyle = "#eff6ff";
  ctx.fill();
  ctx.strokeStyle = "#bfdbfe";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = "#2563eb";
  ctx.textAlign = "center";
  ctx.fillText(statusText, statusX + statusW / 2, 53);

  ctx.fillStyle = "#64748b";
  ctx.font = "700 14px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`Tanggal: ${todayStr}`, statusX - 18, 53);
  ctx.textAlign = "left";

  let curY = headerH + topMargin;

  // 2. PREVIEW MOCKUP
  roundRectCanvas(ctx, 44, curY, W - 88, mockupSectionH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText("1. VISUAL MOCKUP & TITIK SABLON / BORDIR", 68, curY + 33);

  ctx.fillStyle = "#64748b";
  ctx.font = "600 13px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "right";
  const previewSleeveLabel =
    activeVar.sleeve === "panjang" ? "Lengan Panjang" : "Lengan Pendek";
  const previewClosureLabel =
    closureCatalog[activeClosure]?.shortLabel || "Kancing Snap";
  ctx.fillText(
    `Preview Varian: ${activeVar.color.name} (${previewSleeveLabel} • ${previewClosureLabel})`,
    W - 68,
    curY + 33,
  );
  ctx.textAlign = "left";

  const panelGap = 18;
  const innerW = W - 88 - 48;
  const halfW = (innerW - panelGap) / 2;
  const panelsStartY = curY + 50;

  await drawMockupPanelOnCanvas(
    ctx,
    { x: 68, y: panelsStartY, w: halfW, h: frontBackBlockH },
    "depan",
    "TAMPAK DEPAN",
    selectedCut,
    activeVar.sleeve,
    activeVar.color,
    activeClosure,
    selectedCuff,
    selectedDrawstring,
    selectedPocket,
  );

  await drawMockupPanelOnCanvas(
    ctx,
    {
      x: 68 + halfW + panelGap,
      y: panelsStartY,
      w: halfW,
      h: frontBackBlockH,
    },
    "belakang",
    "TAMPAK BELAKANG",
    selectedCut,
    activeVar.sleeve,
    activeVar.color,
    activeClosure,
    selectedCuff,
    selectedDrawstring,
    selectedPocket,
  );

  let afterPanelsY = panelsStartY + frontBackBlockH + 14;

  if (hasAnySleevePrint) {
    if (hasRightSleevePrint && hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: halfW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "SABLON/BORDIR LENGAN KANAN (+31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        activeClosure,
        selectedCuff,
        selectedDrawstring,
        selectedPocket,
      );
      await drawMockupPanelOnCanvas(
        ctx,
        {
          x: 68 + halfW + panelGap,
          y: afterPanelsY,
          w: halfW,
          h: sleeveBlockH - 14,
        },
        "lenganKiri",
        "SABLON/BORDIR LENGAN KIRI (-31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        activeClosure,
        selectedCuff,
        selectedDrawstring,
        selectedPocket,
      );
    } else if (hasRightSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "SABLON/BORDIR LENGAN KANAN (+31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        activeClosure,
        selectedCuff,
        selectedDrawstring,
        selectedPocket,
      );
    } else if (hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKiri",
        "SABLON/BORDIR LENGAN KIRI (-31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        activeClosure,
        selectedCuff,
        selectedDrawstring,
        selectedPocket,
      );
    }
    afterPanelsY += sleeveBlockH;
  }

  roundRectCanvas(ctx, 68, afterPanelsY, innerW, 36, 10);
  ctx.fillStyle = "#f1f5f9";
  ctx.fill();

  ctx.fillStyle = "#64748b";
  ctx.font = "800 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("VARIAN BAHAN:", 84, afterPanelsY + 22);

  let swX = 194;
  orderVariants.forEach((v) => {
    const slv = v.sleeve === "panjang" ? "L.Pjg" : "L.Pdk";
    const cls =
      v.closure === "zipper"
        ? "Zipper"
        : v.closure === "double"
          ? "Snap+Zip"
          : "Snap";
    const label = `${v.color.name} (${slv} • ${cls})`;
    ctx.beginPath();
    ctx.arc(swX, afterPanelsY + 18, 6.5, 0, Math.PI * 2);
    ctx.fillStyle = v.color.hex;
    ctx.fill();
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = "#18181b";
    ctx.font = "700 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(label, swX + 12, afterPanelsY + 22);
    swX += ctx.measureText(label).width + 30;
  });

  curY += mockupSectionH + 18;

  // 3. SPESIFIKASI BAHAN & TITIK SABLON / BORDIR
  const colW = (W - 88 - 18) / 2;

  roundRectCanvas(ctx, 44, curY, colW, specGridH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText("2. SPESIFIKASI MODEL & BAHAN JAKET", 68, curY + 34);

  const baseRegPrice = fabric.prices[selectedCut] || fabric.prices.reguler;
  const liningSpecTxt = `${liningObj.shortLabel}${liningObj.extra > 0 ? ` (+${liningObj.extra / 1000}rb)` : ""}`;
  const detailFitTxt = `${cuffObj.shortLabel} • ${selectedDrawstring === "pakai" ? "Tali Serut" : "Polos"} • ${pocketObj.shortLabel}`;

  const leftRows = [
    ["Model Potongan", cuts[selectedCut].label],
    ["Bahan Luar", fabric.name],
    ["Lapisan Dalam", liningSpecTxt],
    ["Manset, Tali & Saku", detailFitTxt],
    ["Harga Dasar Bahan", `${formatRupiah(baseRegPrice)} / pcs`],
  ];

  leftRows.forEach(([k, v], i) => {
    const ry = curY + 68 + i * 34;
    if (i > 0) {
      ctx.strokeStyle = "#f1f5f9";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(68, ry - 20);
      ctx.lineTo(44 + colW - 24, ry - 20);
      ctx.stroke();
    }
    ctx.fillStyle = "#64748b";
    ctx.font = "600 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(k, 68, ry);

    ctx.fillStyle = "#18181b";
    ctx.font = "800 13px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(v, 44 + colW - 24, ry);
    ctx.textAlign = "left";
  });

  const rightBoxX = 44 + colW + 18;
  roundRectCanvas(ctx, rightBoxX, curY, colW, specGridH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    "3. DETAIL UKURAN & TITIK SABLON / BORDIR",
    rightBoxX + 24,
    curY + 34,
  );

  const formatSpecSide = (sideKey) => {
    const item = selectedPrints[sideKey];
    if (!item || item.isNone) return "Polos (Tanpa Sablon/Bordir)";
    const deg = getEffectiveAngleForSide(sideKey);
    const rotTxt =
      sideKey === "lenganKanan" || sideKey === "lenganKiri"
        ? ` (${deg > 0 ? "+" : ""}${deg}°)`
        : "";
    const fileTxt = customDesigns[sideKey] ? " • File" : "";
    return `${item.name} • ${item.dim}${rotTxt}${fileTxt}`;
  };

  const rightRows = [
    ["Sisi Depan", formatSpecSide("depan")],
    ["Sisi Belakang", formatSpecSide("belakang")],
    ["Lengan Kanan", formatSpecSide("lenganKanan")],
    ["Lengan Kiri", formatSpecSide("lenganKiri")],
    ["Cakupan Harga", "Maks. 3 titik sablon / bordir"],
  ];

  rightRows.forEach(([k, v], i) => {
    const ry = curY + 68 + i * 34;
    if (i > 0) {
      ctx.strokeStyle = "#f1f5f9";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(rightBoxX + 24, ry - 20);
      ctx.lineTo(rightBoxX + colW - 24, ry - 20);
      ctx.stroke();
    }
    ctx.fillStyle = "#64748b";
    ctx.font = "600 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(k, rightBoxX + 24, ry);

    const isPolos = v.startsWith("Polos");
    ctx.fillStyle = isPolos ? "#94a3b8" : "#18181b";
    ctx.font = isPolos
      ? "600 13px system-ui, -apple-system, sans-serif"
      : "800 13px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(v, rightBoxX + colW - 24, ry);
    ctx.textAlign = "left";
  });

  curY += specGridH + 18;

  // 4. RINCIAN JUMLAH & ESTIMASI BIAYA
  roundRectCanvas(ctx, 44, curY, W - 88, orderMatrixH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText("4. RINCIAN JUMLAH UKURAN & ESTIMASI BIAYA", 68, curY + 34);

  const tblX = 68;
  const tblW = W - 136;
  const tblY = curY + 52;

  const variantColW = 320;
  const qtyColW = 74;
  const subColW = 165;
  const sizeAreaW = tblW - variantColW - qtyColW - subColW;
  const singleSizeW = sizeAreaW / sizeKeys.length;

  roundRectCanvas(ctx, tblX, tblY, tblW, tableHeaderH, 10);
  ctx.fillStyle = "#18181b";
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("Varian Warna / Lengan / Penutup", tblX + 14, tblY + 25);

  ctx.textAlign = "center";
  sizeKeys.forEach((sz, idx) => {
    const cx = tblX + variantColW + singleSizeW * (idx + 0.5);
    ctx.fillText(sz, cx, tblY + 25);
  });

  ctx.fillText("Qty", tblX + variantColW + sizeAreaW + qtyColW / 2, tblY + 25);
  ctx.textAlign = "right";
  ctx.fillText("Subtotal", tblX + tblW - 14, tblY + 25);
  ctx.textAlign = "left";

  let rowY = tblY + tableHeaderH;
  orderVariants.forEach((v, idx) => {
    ctx.fillStyle = idx % 2 === 0 ? "#ffffff" : "#f8fafc";
    ctx.fillRect(tblX, rowY, tblW, tableRowH);

    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(tblX, rowY + tableRowH);
    ctx.lineTo(tblX + tblW, rowY + tableRowH);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(tblX + 18, rowY + tableRowH / 2, 6, 0, Math.PI * 2);
    ctx.fillStyle = v.color.hex;
    ctx.fill();
    ctx.strokeStyle = "#94a3b8";
    ctx.stroke();

    const slvTxt = v.sleeve === "panjang" ? "L.Pjg" : "L.Pdk";
    const clsTxt = closureCatalog[v.closure]?.shortLabel || "Kancing Snap";
    ctx.fillStyle = "#18181b";
    ctx.font = "700 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${v.color.name} (${slvTxt} • ${clsTxt})`,
      tblX + 32,
      rowY + 25,
    );

    ctx.textAlign = "center";
    sizeKeys.forEach((sz, sIdx) => {
      const q = v.quantities[sz] || 0;
      const cx = tblX + variantColW + singleSizeW * (sIdx + 0.5);
      ctx.fillStyle = q > 0 ? "#18181b" : "#94a3b8";
      ctx.font =
        q > 0
          ? "800 13px system-ui, -apple-system, sans-serif"
          : "600 12px system-ui, -apple-system, sans-serif";
      ctx.fillText(String(q), cx, rowY + 25);
    });

    const vQty = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
    const vSub = calculateVariantTotalPrice(v);

    ctx.fillStyle = "#18181b";
    ctx.font = "800 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${vQty}`,
      tblX + variantColW + sizeAreaW + qtyColW / 2,
      rowY + 25,
    );

    ctx.textAlign = "right";
    ctx.fillText(formatRupiah(vSub), tblX + tblW - 14, rowY + 25);
    ctx.textAlign = "left";

    rowY += tableRowH;
  });

  roundRectCanvas(ctx, tblX, rowY + 8, tblW, tableTotalH - 8, 12);
  ctx.fillStyle = "#eff6ff";
  ctx.fill();
  ctx.strokeStyle = "#bfdbfe";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.fillStyle = "#1e3a8a";
  ctx.font = "800 14px system-ui, -apple-system, sans-serif";
  ctx.fillText("TOTAL KESELURUHAN ORDER", tblX + 16, rowY + 38);

  ctx.textAlign = "center";
  ctx.fillStyle = "#1d4ed8";
  ctx.font = "900 16px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `${grandTotal} pcs`,
    tblX + variantColW + sizeAreaW + qtyColW / 2,
    rowY + 39,
  );

  ctx.textAlign = "right";
  ctx.fillStyle = "#18181b";
  ctx.font = "900 19px system-ui, -apple-system, sans-serif";
  ctx.fillText(formatRupiah(totalEstimatedPrice), tblX + tblW - 16, rowY + 40);
  ctx.textAlign = "left";

  curY += orderMatrixH + 18;

  // 5. FOOTER
  ctx.fillStyle = "#64748b";
  ctx.font = "600 12px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `Atensi Konveksi • WhatsApp: ${WHATSAPP_DISPLAY} • Dokumen Spesifikasi Order Jaket Coach`,
    44,
    curY + 24,
  );

  ctx.textAlign = "right";
  ctx.fillText(
    "*Estimasi dapat disesuaikan kembali saat konsultasi desain",
    W - 44,
    curY + 24,
  );
  ctx.textAlign = "left";

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const dataUrl = canvas.toDataURL("image/png");
      resolve({ dataUrl, blob });
    }, "image/png");
  });
}

// ================= MODAL PREVIEW, DOWNLOAD PNG, CETAK PDF & KIRIM WA =================
async function openVisualSpecModal() {
  const modal = document.getElementById("visual-spec-modal");
  const previewImg = document.getElementById("spec-card-preview-img");
  if (!modal) return;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  refreshIcons();

  const { dataUrl, blob } = await generateVisualSpecCardImage();
  generatedSpecDataUrl = dataUrl;
  generatedSpecBlob = blob;

  if (previewImg && dataUrl) {
    previewImg.src = dataUrl;
  }
}

function closeVisualSpecModal() {
  const modal = document.getElementById("visual-spec-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function downloadSpecPNG() {
  if (!generatedSpecDataUrl) return;
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  link.download = `Spesifikasi-Jaket-Coach-Atensi-${stamp}.png`;
  link.href = generatedSpecDataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printSpecPDF() {
  if (!generatedSpecDataUrl) return;
  const printWin = window.open("", "_blank");
  if (!printWin) {
    downloadSpecPNG();
    return;
  }
  printWin.document.write(`
    <!doctype html>
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <title>Spesifikasi Order Jaket Coach - Atensi Konveksi</title>
        <style>
          @page { size: auto; margin: 10mm; }
          body { margin: 0; display: flex; justify-content: center; background: #fff; }
          img { max-width: 100%; height: auto; display: block; }
        </style>
      </head>
      <body>
        <img src="${generatedSpecDataUrl}" onload="setTimeout(function(){ window.print(); }, 250);" />
      </body>
    </html>
  `);
  printWin.document.close();
}

async function shareOrSendVisualToWA() {
  const waText = buildWhatsAppMessageText();
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  // 1. Mobile Native Share (Lampirkan PNG langsung ke WhatsApp)
  if (generatedSpecBlob && navigator.share && navigator.canShare) {
    const file = new File(
      [generatedSpecBlob],
      "Spesifikasi-Jaket-Coach-Atensi.png",
      { type: "image/png" },
    );
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "Spesifikasi Order Jaket Coach - Atensi Konveksi",
          text: waText,
        });
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }
  }

  // 2. Desktop Fallback: Salin gambar ke clipboard + unduh PNG lalu buka WhatsApp Web
  try {
    if (generatedSpecBlob && navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": generatedSpecBlob }),
      ]);
    }
  } catch (_) {
    // Abaikan jika izin clipboard dibatasi browser
  }

  downloadSpecPNG();
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

// ================= INISIALISASI HALAMAN =================
document.addEventListener("DOMContentLoaded", () => {
  initFilterBar();
  populateVariantColorSelect();
  renderPriceListTable();
  updateCoachGeometry();
  updateCoachColors(selectedColor.hex);
  updateStageLabels();
  renderSizeChart(selectedCut, selectedSleeve);
  renderSwatches();
  renderDesignSlots();
  renderPrintOptions(activeSide);
  updateSablonSummary();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  updateMobileFloatingStage();
  refreshIcons();
});
f;
