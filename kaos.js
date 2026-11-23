const WHATSAPP_NUMBER = "62895413909591";
const WHATSAPP_DISPLAY = "+62 895-4139-09591";

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// ================= DATA PRICE LIST BAHAN & POTONGAN =================
const LONG_SLEEVE_EXTRA = 5000;

const SIZE_SURCHARGE = {
  S: 0,
  M: 0,
  L: 0,
  XL: 0,
  "2XL": 5000,
  "3XL": 10000,
  "4XL": 15000,
  "5XL": 20000,
};

const ALL_AVAILABLE_SIZES = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
let sizeKeys = ["S", "M", "L", "XL", "2XL", "3XL"];

const fabricCatalog = [
  {
    id: "pe-double-knit",
    name: "PE (Polyester) Double Knit",
    shortName: "PE Double Knit",
    prices: {
      reguler: 50000,
      boxy: 58000,
      oversize: 60000,
    },
  },
  {
    id: "combed-30s",
    name: "Cotton Combed 30s",
    shortName: "Combed 30s",
    prices: {
      reguler: 65000,
      boxy: 73000,
      oversize: 75000,
    },
  },
  {
    id: "combed-24s",
    name: "Cotton Combed 24s",
    shortName: "Combed 24s",
    prices: {
      reguler: 70000,
      boxy: 78000,
      oversize: 80000,
    },
  },
  {
    id: "combed-20s",
    name: "Cotton Combed 20s",
    shortName: "Combed 20s",
    prices: {
      reguler: 75000,
      boxy: 83000,
      oversize: 85000,
    },
  },
];

const cuts = {
  reguler: {
    label: "Reguler",
    pendek: {
      body: "M114 34 L72 48 L14 106 L44 134 L74 104 L74 268 L226 268 L226 104 L256 134 L286 106 L228 48 L186 34 Q150 64 114 34 Z",
      bodyBack:
        "M114 34 L72 48 L14 106 L44 134 L74 104 L74 268 L226 268 L226 104 L256 134 L286 106 L228 48 L186 34 Q150 43 114 34 Z",
      armholeL: "M72 48 Q78 78 74 104",
      armholeR: "M228 48 Q222 78 226 104",
      creaseL: "M77 104 L88 117",
      creaseR: "M223 104 L212 117",
      sleeveL: "M19 101 L49 129",
      sleeveR: "M281 101 L251 129",
      sleeveRAnchor: { x: 48, y: 84, rot: 43 },
      sleeveLAnchor: { x: 252, y: 84, rot: -43 },
      sizes: [
        { size: "S", p: 66, l: 42, pl: 19 },
        { size: "M", p: 69, l: 45, pl: 20 },
        { size: "L", p: 72, l: 49, pl: 21 },
        { size: "XL", p: 75, l: 54, pl: 22 },
        { size: "2XL", p: 78, l: 57, pl: 23 },
        { size: "3XL", p: 80, l: 60, pl: 24 },
        { size: "4XL", p: 82, l: 63, pl: 25 },
        { size: "5XL", p: 84, l: 66, pl: 26 },
      ],
    },
    panjang: {
      body: "M114 34 L72 48 L-4 168 L23 184 L74 112 L74 268 L226 268 L226 112 L277 184 L304 168 L228 48 L186 34 Q150 64 114 34 Z",
      bodyBack:
        "M114 34 L72 48 L-4 168 L23 184 L74 112 L74 268 L226 268 L226 112 L277 184 L304 168 L228 48 L186 34 Q150 43 114 34 Z",
      armholeL: "M72 48 Q79 81 74 112",
      armholeR: "M228 48 Q221 81 226 112",
      creaseL: "M77 112 L88 124",
      creaseR: "M223 112 L212 124",
      sleeveL: "M1.5 159 L28.5 175",
      sleeveR: "M298.5 159 L271.5 175",
      cuffL: "M0.3 161.2 L27.3 177.2 L23 184 L-4 168 Z",
      cuffR: "M299.7 161.2 L272.7 177.2 L277 184 L304 168 Z",
      sleeveRAnchor: { x: 40, y: 114, rot: 43 },
      sleeveLAnchor: { x: 260, y: 114, rot: -43 },
      sizes: [
        { size: "S", p: 66, l: 42, pl: 56 },
        { size: "M", p: 69, l: 45, pl: 58 },
        { size: "L", p: 72, l: 49, pl: 60 },
        { size: "XL", p: 75, l: 54, pl: 62 },
        { size: "2XL", p: 78, l: 57, pl: 64 },
        { size: "3XL", p: 80, l: 60, pl: 65 },
        { size: "4XL", p: 82, l: 63, pl: 66 },
        { size: "5XL", p: 84, l: 66, pl: 67 },
      ],
    },
    shoulderL: "M114 35 L73 48",
    shoulderR: "M186 35 L227 48",
    hemX1: 76,
    hemX2: 224,
    hemTopY: 257,
    hemBotY: 261,
    chestLeft: { x: 168, y: 76 },
    chestRight: { x: 104, y: 76 },
    centerX: 150,
    chestTopY: 74,
  },
  oversize: {
    label: "Oversize",
    pendek: {
      body: "M114 34 L56 52 L4 124 L42 148 L60 116 L60 282 L240 282 L240 116 L258 148 L296 124 L244 52 L186 34 Q150 62 114 34 Z",
      bodyBack:
        "M114 34 L56 52 L4 124 L42 148 L60 116 L60 282 L240 282 L240 116 L258 148 L296 124 L244 52 L186 34 Q150 43 114 34 Z",
      armholeL: "M56 52 Q64 86 60 116",
      armholeR: "M244 52 Q236 86 240 116",
      creaseL: "M63 116 L76 130",
      creaseR: "M237 116 L224 130",
      sleeveL: "M9 119 L46 142",
      sleeveR: "M291 119 L254 142",
      sleeveRAnchor: { x: 36, y: 94, rot: 43 },
      sleeveLAnchor: { x: 264, y: 94, rot: -43 },
      sizes: [
        { size: "S", p: 68, l: 52, pl: 22 },
        { size: "M", p: 71, l: 55, pl: 23 },
        { size: "L", p: 74, l: 58, pl: 24 },
        { size: "XL", p: 77, l: 61, pl: 25 },
        { size: "2XL", p: 80, l: 64, pl: 26 },
        { size: "3XL", p: 82, l: 67, pl: 27 },
        { size: "4XL", p: 84, l: 70, pl: 28 },
        { size: "5XL", p: 86, l: 73, pl: 29 },
      ],
    },
    panjang: {
      body: "M114 34 L56 52 L-12 174 L17 190 L60 120 L60 282 L240 282 L240 120 L283 190 L312 174 L244 52 L186 34 Q150 62 114 34 Z",
      bodyBack:
        "M114 34 L56 52 L-12 174 L17 190 L60 120 L60 282 L240 282 L240 120 L283 190 L312 174 L244 52 L186 34 Q150 43 114 34 Z",
      armholeL: "M56 52 Q64 88 60 120",
      armholeR: "M244 52 Q236 88 240 120",
      creaseL: "M63 120 L76 133",
      creaseR: "M237 120 L224 133",
      sleeveL: "M-6.5 164.5 L22.5 180.5",
      sleeveR: "M306.5 164.5 L277.5 180.5",
      cuffL: "M-8 167 L21 183 L17 190 L-12 174 Z",
      cuffR: "M308 167 L279 183 L283 190 L312 174 Z",
      sleeveRAnchor: { x: 28, y: 120, rot: 43 },
      sleeveLAnchor: { x: 272, y: 120, rot: -43 },
      sizes: [
        { size: "S", p: 68, l: 52, pl: 58 },
        { size: "M", p: 71, l: 55, pl: 60 },
        { size: "L", p: 74, l: 58, pl: 62 },
        { size: "XL", p: 77, l: 61, pl: 64 },
        { size: "2XL", p: 80, l: 64, pl: 66 },
        { size: "3XL", p: 82, l: 67, pl: 67 },
        { size: "4XL", p: 84, l: 70, pl: 68 },
        { size: "5XL", p: 86, l: 73, pl: 69 },
      ],
    },
    shoulderL: "M114 35 L57 52",
    shoulderR: "M186 35 L243 52",
    hemX1: 62,
    hemX2: 238,
    hemTopY: 271,
    hemBotY: 275,
    chestLeft: { x: 174, y: 80 },
    chestRight: { x: 96, y: 80 },
    centerX: 150,
    chestTopY: 76,
  },
  boxy: {
    label: "Boxy",
    pendek: {
      body: "M114 34 L52 50 L6 116 L42 138 L56 110 L56 246 L244 246 L244 110 L258 138 L294 116 L248 50 L186 34 Q150 61 114 34 Z",
      bodyBack:
        "M114 34 L52 50 L6 116 L42 138 L56 110 L56 246 L244 246 L244 110 L258 138 L294 116 L248 50 L186 34 Q150 43 114 34 Z",
      armholeL: "M52 50 Q60 82 56 110",
      armholeR: "M248 50 Q240 82 244 110",
      creaseL: "M59 110 L72 123",
      creaseR: "M241 110 L228 123",
      sleeveL: "M11 111 L46 132",
      sleeveR: "M289 111 L254 132",
      sleeveRAnchor: { x: 35, y: 90, rot: 43 },
      sleeveLAnchor: { x: 265, y: 90, rot: -43 },
      sizes: [
        { size: "S", p: 63, l: 53, pl: 20 },
        { size: "M", p: 66, l: 56, pl: 21 },
        { size: "L", p: 69, l: 59, pl: 22 },
        { size: "XL", p: 72, l: 62, pl: 23 },
        { size: "2XL", p: 75, l: 65, pl: 24 },
        { size: "3XL", p: 77, l: 68, pl: 25 },
        { size: "4XL", p: 79, l: 71, pl: 26 },
        { size: "5XL", p: 81, l: 74, pl: 27 },
      ],
    },
    panjang: {
      body: "M114 34 L52 50 L-10 166 L18 181 L56 114 L56 246 L244 246 L244 114 L282 181 L310 166 L248 50 L186 34 Q150 61 114 34 Z",
      bodyBack:
        "M114 34 L52 50 L-10 166 L18 181 L56 114 L56 246 L244 246 L244 114 L282 181 L310 166 L248 50 L186 34 Q150 43 114 34 Z",
      armholeL: "M52 50 Q60 84 56 114",
      armholeR: "M248 50 Q240 84 244 114",
      creaseL: "M59 114 L72 126",
      creaseR: "M241 114 L228 126",
      sleeveL: "M-5 156.5 L23 171.5",
      sleeveR: "M305 156.5 L277 171.5",
      cuffL: "M-6.2 159 L21.8 174 L18 181 L-10 166 Z",
      cuffR: "M306.2 159 L278.2 174 L282 181 L310 166 Z",
      sleeveRAnchor: { x: 28, y: 114, rot: 43 },
      sleeveLAnchor: { x: 272, y: 114, rot: -43 },
      sizes: [
        { size: "S", p: 63, l: 53, pl: 55 },
        { size: "M", p: 66, l: 56, pl: 57 },
        { size: "L", p: 69, l: 59, pl: 59 },
        { size: "XL", p: 72, l: 62, pl: 61 },
        { size: "2XL", p: 75, l: 65, pl: 63 },
        { size: "3XL", p: 77, l: 68, pl: 64 },
        { size: "4XL", p: 79, l: 71, pl: 65 },
        { size: "5XL", p: 81, l: 74, pl: 66 },
      ],
    },
    shoulderL: "M114 35 L53 50",
    shoulderR: "M186 35 L247 50",
    hemX1: 58,
    hemX2: 242,
    hemTopY: 235,
    hemBotY: 239,
    chestLeft: { x: 175, y: 76 },
    chestRight: { x: 95, y: 76 },
    centerX: 150,
    chestTopY: 72,
  },
};

const printCatalog = {
  depan: [
    {
      id: "none",
      name: "Tanpa Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Bagian depan dibiarkan polos.",
      mini: null,
    },
    {
      id: "logo-dada-kiri",
      name: "Logo Dada Kiri",
      dim: "10 × 10 cm",
      area: 100,
      badge: "Dada kiri",
      desc: "Logo kecil di dada kiri, ringkas & rapi.",
      mini: { x: 32, y: 18, w: 9, h: 9 },
      mainZone: { anchor: "chestLeft", w: 28, h: 28 },
    },
    {
      id: "logo-dada-kanan",
      name: "Logo Dada Kanan",
      dim: "10 × 10 cm",
      area: 100,
      badge: "Dada kanan",
      desc: "Logo atau emblem di sisi dada kanan.",
      mini: { x: 19, y: 18, w: 9, h: 9 },
      mainZone: { anchor: "chestRight", w: 28, h: 28 },
    },
    {
      id: "tulisan-dada",
      name: "Tulisan / Nama",
      dim: "25 × 8 cm",
      area: 200,
      badge: "Tengah dada",
      desc: "Tipografi memanjang di tengah dada.",
      mini: { x: 20, y: 19, w: 20, h: 7 },
      mainZone: { anchor: "center", w: 72, h: 23, offsetY: 6 },
    },
    {
      id: "a5-depan",
      name: "A5",
      dim: "15 × 21 cm",
      area: 315,
      badge: "Sedang",
      desc: "Gambar ukuran sedang di tengah dada.",
      mini: { x: 22, y: 18, w: 16, h: 12 },
      mainZone: { anchor: "center", w: 46, h: 62, offsetY: 6 },
    },
    {
      id: "kotak-depan",
      name: "Kotak",
      dim: "20 × 20 cm",
      area: 400,
      badge: "Simetris",
      desc: "Desain kotak/lingkaran di tengah.",
      mini: { x: 21, y: 18, w: 18, h: 18 },
      mainZone: { anchor: "center", w: 60, h: 60, offsetY: 6 },
    },
    {
      id: "a4-depan",
      name: "A4",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Fleksibel",
      desc: "Gambar besar untuk desain utama.",
      mini: { x: 20, y: 18, w: 20, h: 25 },
      mainZone: { anchor: "center", w: 64, h: 88, offsetY: 4 },
    },
    {
      id: "a3-depan",
      name: "A3 (Besar)",
      dim: "29,7 × 42 cm",
      area: 1247,
      badge: "Full Front",
      desc: "Gambar besar selebar badan.",
      mini: { x: 17, y: 17, w: 26, h: 33 },
      mainZone: { anchor: "center", w: 92, h: 124, offsetY: 2 },
    },
  ],
  belakang: [
    {
      id: "none",
      name: "Tanpa Sablon",
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
      dim: "8 × 8 cm",
      area: 64,
      badge: "Punggung atas",
      desc: "Logo brand kecil di bawah kerah.",
      mini: { x: 26, y: 12, w: 8, h: 8 },
      mainZone: { anchor: "backNeck", w: 24, h: 24, offsetY: -18 },
    },
    {
      id: "tulisan-punggung",
      name: "Tulisan Punggung",
      dim: "28 × 10 cm",
      area: 280,
      badge: "Nama / Tim",
      desc: "Tulisan melintang di punggung atas.",
      mini: { x: 18, y: 16, w: 24, h: 8 },
      mainZone: { anchor: "center", w: 82, h: 28, offsetY: -6 },
    },
    {
      id: "a4-belakang",
      name: "A4 Punggung",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Standar",
      desc: "Desain sedang di tengah punggung.",
      mini: { x: 20, y: 16, w: 20, h: 25 },
      mainZone: { anchor: "center", w: 66, h: 90, offsetY: -2 },
    },
    {
      id: "a3-belakang",
      name: "A3 (Besar)",
      dim: "29,7 × 42 cm",
      area: 1247,
      badge: "Populer",
      desc: "Area luas untuk ilustrasi utama.",
      mini: { x: 17, y: 15, w: 26, h: 33 },
      mainZone: { anchor: "center", w: 94, h: 128, offsetY: -2 },
    },
    {
      id: "a2-belakang",
      name: "A2 (Oversized)",
      dim: "42 × 59 cm",
      area: 2478,
      badge: "Maksimal",
      desc: "Sablon ekstra besar streetwear.",
      mini: { x: 15, y: 14, w: 30, h: 39 },
      mainZone: { anchor: "center", w: 112, h: 152, offsetY: -2 },
    },
  ],
  lenganKanan: [
    {
      id: "none",
      name: "Tanpa Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Lengan kanan dibiarkan polos.",
      mini: null,
    },
    {
      id: "label-lengan-ka",
      name: "Label / Bendera",
      dim: "5 × 5 cm",
      area: 25,
      badge: "Ujung lengan",
      desc: "Detail mini di ujung lengan kanan.",
      mini: { x: 5, y: 20, w: 6, h: 6, rot: 43 },
      mainZone: {
        anchor: "sleeveR",
        w: 15,
        h: 15,
        dist: 16,
        offsetIn: 6,
      },
    },
    {
      id: "logo-lengan-ka",
      name: "Logo Lengan",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Standar",
      desc: "Logo sponsor atau emblem divisi.",
      mini: { x: 7, y: 16, w: 8, h: 8, rot: 43 },
      mainZone: { anchor: "sleeveR", w: 22, h: 22, dist: 0 },
    },
    {
      id: "teks-lengan-ka",
      name: "Tulisan Lengan",
      dim: "10 × 4 cm",
      area: 40,
      badge: "Teks singkat",
      desc: "Tulisan melintang di lengan kanan.",
      mini: { x: 6, y: 17, w: 9, h: 4.5, rot: 43 },
      mainZone: { anchor: "sleeveR", w: 26, h: 12, dist: 0 },
    },
    {
      id: "vertikal-lengan-ka",
      name: "Vertikal Lengan",
      dim: "8 × 15 cm",
      area: 120,
      badge: "Memanjang",
      desc: "Desain vertikal mengikuti lengan.",
      mini: { x: 7, y: 14, w: 6, h: 12, rot: 43 },
      mainZone: { anchor: "sleeveR", w: 18, h: 36, dist: 2 },
    },
    {
      id: "full-lengan-ka",
      name: "Full Lengan Panjang",
      dim: "10 × 30 cm",
      area: 300,
      badge: "L. Panjang",
      longOnly: true,
      desc: "Tipografi memanjang ke manset.",
      mini: { x: 6, y: 13, w: 6, h: 15, rot: 43 },
      mainZone: { anchor: "sleeveR", w: 18, h: 64, dist: 4 },
    },
  ],
  lenganKiri: [
    {
      id: "none",
      name: "Tanpa Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Lengan kiri dibiarkan polos.",
      mini: null,
    },
    {
      id: "label-lengan-ki",
      name: "Label / Bendera",
      dim: "5 × 5 cm",
      area: 25,
      badge: "Ujung lengan",
      desc: "Detail mini di ujung lengan kiri.",
      mini: { x: 49, y: 20, w: 6, h: 6, rot: -43 },
      mainZone: {
        anchor: "sleeveL",
        w: 15,
        h: 15,
        dist: 16,
        offsetIn: 6,
      },
    },
    {
      id: "logo-lengan-ki",
      name: "Logo Lengan",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Standar",
      desc: "Logo sponsor atau bendera.",
      mini: { x: 45, y: 16, w: 8, h: 8, rot: -43 },
      mainZone: { anchor: "sleeveL", w: 22, h: 22, dist: 0 },
    },
    {
      id: "teks-lengan-ki",
      name: "Tulisan Lengan",
      dim: "10 × 4 cm",
      area: 40,
      badge: "Teks singkat",
      desc: "Tulisan melintang di lengan kiri.",
      mini: { x: 44, y: 17, w: 9, h: 4.5, rot: -43 },
      mainZone: { anchor: "sleeveL", w: 26, h: 12, dist: 0 },
    },
    {
      id: "vertikal-lengan-ki",
      name: "Vertikal Lengan",
      dim: "8 × 15 cm",
      area: 120,
      badge: "Memanjang",
      desc: "Desain vertikal mengikuti lengan.",
      mini: { x: 47, y: 14, w: 6, h: 12, rot: -43 },
      mainZone: { anchor: "sleeveL", w: 18, h: 36, dist: 2 },
    },
    {
      id: "full-lengan-ki",
      name: "Full Lengan Panjang",
      dim: "10 × 30 cm",
      area: 300,
      badge: "L. Panjang",
      longOnly: true,
      desc: "Tipografi memanjang ke manset.",
      mini: { x: 48, y: 13, w: 6, h: 15, rot: -43 },
      mainZone: { anchor: "sleeveL", w: 18, h: 64, dist: 4 },
    },
  ],
};

// ================= PALET WARNA LENGKAP (36 WARNA) =================
const palette = [
  // Hijau (8)
  { name: "Forest Green", hex: "#2d5a46", cat: "hijau" },
  { name: "Botol Emerald", hex: "#14532d", cat: "hijau" },
  { name: "Army Green", hex: "#3f4a36", cat: "hijau" },
  { name: "Olive Moss", hex: "#5a6842", cat: "hijau" },
  { name: "Matcha Green", hex: "#748c69", cat: "hijau" },
  { name: "Sage Leaf", hex: "#879b8e", cat: "hijau" },
  { name: "Deep Teal", hex: "#25756b", cat: "hijau" },
  { name: "Mint Pastel", hex: "#a7f3d0", cat: "hijau" },

  // Netral (8)
  { name: "Putih Bersih", hex: "#f5f5f4", cat: "netral" },
  { name: "Broken White", hex: "#ece7dc", cat: "netral" },
  { name: "Abu Misty", hex: "#cbd2d9", cat: "netral" },
  { name: "Light Grey", hex: "#d4d4d8", cat: "netral" },
  { name: "Slate Grey", hex: "#64748b", cat: "netral" },
  { name: "Dark Grey", hex: "#4b5563", cat: "netral" },
  { name: "Charcoal", hex: "#2e3136", cat: "netral" },
  { name: "Hitam Jet", hex: "#16171a", cat: "netral" },

  // Biru (6)
  { name: "Baby Blue", hex: "#bae6fd", cat: "biru" },
  { name: "Sky Mist", hex: "#8ecae6", cat: "biru" },
  { name: "Denim Blue", hex: "#5c7cfa", cat: "biru" },
  { name: "Royal Blue", hex: "#3568c8", cat: "biru" },
  { name: "Indigo Denim", hex: "#415a77", cat: "biru" },
  { name: "Midnight Navy", hex: "#1d2d44", cat: "biru" },

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
let selectedFabricId = "combed-24s";
let selectedSleeve = "pendek";
let selectedColor = palette[0];
let activeFilter = "all";
let colorSearchQuery = "";
let selectedSize = null;

let activeSide = "depan";
let mockupView = "depan";
let isSleeveZoomed = false;

let isMobileFloatingActive = false;
let isMobileFloatingDetailExpanded = false;
let cachedStageExpandedHeight = 0;

const customDesigns = {
  depan: null,
  belakang: null,
  lenganKanan: null,
  lenganKiri: null,
};

const selectedPrints = {
  depan: printCatalog.depan[1],
  belakang: printCatalog.belakang[0],
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
    color: palette[0],
    sleeve: "pendek",
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
    fabricCatalog.find((f) => f.id === "combed-24s") ||
    fabricCatalog[0]
  );
}

function getVariantBaseUnitPrice(variant) {
  const fabric = getSelectedFabric();
  const basePrice = fabric.prices[selectedCut] || fabric.prices.reguler;
  const sleeveAddon = variant.sleeve === "panjang" ? LONG_SLEEVE_EXTRA : 0;
  return basePrice + sleeveAddon;
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
  if (sideKey === "lenganKanan") return 43;
  if (sideKey === "lenganKiri") return -43;
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
  const wrapper = document.getElementById("tee-stage-wrapper");
  const stage = document.getElementById("tee-stage");
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
    const wrapper = document.getElementById("tee-stage-wrapper");
    const stage = document.getElementById("tee-stage");
    if (wrapper && stage) {
      wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
    }
  }
}

function pulseFloatingStageFeedback() {
  if (!isMobileFloatingActive || !window.Motion || !window.Motion.animate) {
    return;
  }
  const stage = document.getElementById("tee-stage");
  if (stage) {
    Motion.animate(
      stage,
      { scale: [0.985, 1] },
      { type: "spring", stiffness: 420, damping: 24 },
    );
  }
}

function toggleMobileFloatingDetail() {
  const stage = document.getElementById("tee-stage");
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

// ================= RENDER TABEL PRICE LIST RESPONSIF (TANPA SCROLL SAMPING DI HP) =================
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
                ? "border-[#2563eb] bg-[#2563eb] text-white"
                : "border-zinc-300 bg-white"
            }"
          >
            ${isRowSelected ? '<i data-lucide="check" class="icon-xs"></i>' : ""}
          </span>
          <span class="leading-snug ${
            isRowSelected
              ? "font-bold text-zinc-900"
              : "font-medium text-zinc-700"
          }">
            <span class="sm:hidden">${fab.shortName}</span>
            <span class="hidden sm:inline">${fab.name}</span>
          </span>
        </button>
      </td>
      ${priceCellsHTML}
    `;
    tbody.appendChild(tr);
  });

  refreshIcons();
}

// ================= VISUALISASI TUMPUKAN KAOS LIPAT 3D =================
function buildFoldedShirtLayerSVG(y, hex, isTop, isLongSleeve, layerIndex) {
  const dark = isDark(hex);
  const topColor = hex;
  const frontEdgeColor = shadeHex(hex, dark ? -6 : -14);
  const rightEdgeColor = shadeHex(hex, dark ? -16 : -28);
  const creaseColor = shadeHex(hex, dark ? -22 : -36);
  const highlightColor = shadeHex(hex, dark ? 22 : 12);
  const collarRibColor = shadeHex(hex, dark ? -10 : -20);
  const collarInnerColor = shadeHex(hex, dark ? -20 : -42);

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
    const longSleeveFold = isLongSleeve
      ? `
        <path
          d="M27 ${y - 11.5} L106 ${y - 3.5} L101 ${y + 0.5} L22 ${y - 7.5} Z"
          fill="${shadeHex(hex, dark ? 8 : -7)}"
          stroke="${creaseColor}"
          stroke-width="0.55"
          opacity="0.85"
        />
      `
      : "";

    topSurface = `
      <path
        d="M46 ${y - 33} L126 ${y - 25} L94 ${y} L14 ${y - 8} Z"
        fill="${topColor}"
      />
      <line
        x1="56"
        y1="${y - 30}"
        x2="26"
        y2="${y - 8}"
        stroke="${creaseColor}"
        stroke-width="0.7"
        opacity="0.22"
      />
      <line
        x1="114"
        y1="${y - 24}"
        x2="84"
        y2="${y - 2}"
        stroke="${creaseColor}"
        stroke-width="0.7"
        opacity="0.22"
      />
      ${longSleeveFold}
      <path
        d="M14 ${y - 8} L94 ${y} L126 ${y - 25}"
        fill="none"
        stroke="${highlightColor}"
        stroke-width="1"
        opacity="0.75"
      />
      <path
        d="M68 ${y - 30.8} Q86 ${y - 35.5} 104 ${y - 27.2} L101 ${y - 25.5} Q86 ${y - 31} 71 ${y - 29} Z"
        fill="${collarRibColor}"
      />
      <path
        d="M71 ${y - 29.8} Q86 ${y - 32.5} 101 ${y - 26.5} Q85 ${y - 16} 71 ${y - 29.8} Z"
        fill="${collarInnerColor}"
      />
      <path
        d="M68 ${y - 30.8} Q84 ${y - 13.5} 104 ${y - 27.2} L101 ${y - 26.5} Q84 ${y - 17} 71 ${y - 29.8} Z"
        fill="${collarRibColor}"
        stroke="${creaseColor}"
        stroke-width="0.6"
      />
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
        layersHTML += buildFoldedShirtLayerSVG(
          y,
          layer.hex,
          isTop,
          layer.isLongSleeve,
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

// ================= MANAJEMEN MULTI-VARIAN & ESTIMASI HARGA (RAMAH HP) =================
function renderVariantManager() {
  const listEl = document.getElementById("variant-pills-list");
  const countLabel = document.getElementById("variant-count-label");
  const colorSelect = document.getElementById("variant-color-select");
  const sleeveSelect = document.getElementById("variant-sleeve-select");
  const modeBtn = document.getElementById("stack-mode-toggle-btn");

  if (!listEl) return;
  countLabel.textContent = orderVariants.length;
  listEl.innerHTML = "";

  orderVariants.forEach((variant, index) => {
    const isActive = variant.id === activeVariantId;
    const subtotal = sizeKeys.reduce(
      (sum, sz) => sum + (variant.quantities[sz] || 0),
      0,
    );
    const sleeveShort =
      variant.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";

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
          ${sleeveShort}
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
  if (colorSelect.options.length === 0) {
    palette.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.hex;
      opt.textContent = p.name;
      colorSelect.appendChild(opt);
    });
  }
  colorSelect.value = activeVar.color.hex;
  sleeveSelect.value = activeVar.sleeve;

  modeBtn.textContent =
    stackDisplayMode === "combined"
      ? "Tampilan: Gabungan"
      : "Tampilan: Varian Aktif";
  modeBtn.className =
    stackDisplayMode === "combined" && orderVariants.length > 1
      ? "text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1d4ed8] border border-blue-200 cursor-pointer transition touch-manipulation"
      : "text-[11px] font-bold px-2.5 py-1 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 border border-[#e4e5e0] cursor-pointer transition touch-manipulation";

  refreshIcons();
}

function selectOrderVariant(variantId) {
  activeVariantId = variantId;
  const activeVar = getActiveVariant();
  selectedColor = activeVar.color;
  selectedSleeve = activeVar.sleeve;

  applyColorToMockup(selectedColor, false);
  applySleeveToMockup(selectedSleeve, false);
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
    activeVar.sleeve === "panjang" ? "Lengan Panjang" : "Lengan Pendek";
  editingLabel.textContent = `2. Atur Jumlah Ukuran — ${activeVar.color.name} (${sleeveText}):`;

  const subtotal = sizeKeys.reduce(
    (sum, sz) => sum + (activeVar.quantities[sz] || 0),
    0,
  );
  subtotalLabel.textContent = `Subtotal Varian: ${subtotal} pcs`;

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
    if (item.isNone) return "Tanpa sablon";
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
      v.sleeve === "panjang" ? "Lengan Panjang (+5rb)" : "Lengan Pendek";
    const breakdown = sizeKeys
      .filter((sz) => (v.quantities[sz] || 0) > 0)
      .map((sz) => {
        const extra = SIZE_SURCHARGE[sz] || 0;
        return extra > 0
          ? `${sz}(+${extra / 1000}rb): ${v.quantities[sz]}`
          : `${sz}: ${v.quantities[sz]}`;
      })
      .join(", ");
    return `  ${idx + 1}) ${v.color.name} (${sleeveLabel}) = ${sub} pcs [${breakdown || "Belum diisi"}] | Dasar ${formatRupiah(baseUnit)} | Subtotal ${formatRupiah(varSubtotal)}`;
  });

  return [
    "Halo Atensi Konveksi, saya mau kirim Spesifikasi Order & konsultasi desain kaos custom:",
    `• Potongan: ${cuts[selectedCut].label}`,
    `• Jenis Bahan: ${fabric.name}`,
    `• Sablon Depan: ${formatSideWA("depan")}`,
    `• Sablon Belakang: ${formatSideWA("belakang")}`,
    `• Lengan Kanan: ${formatSideWA("lenganKanan")}`,
    `• Lengan Kiri: ${formatSideWA("lenganKiri")}`,
    `• Rincian Varian & Jumlah (Total ${grandTotal} pcs):`,
    ...variantsWAText,
    `• Estimasi Total Biaya: ${formatRupiah(totalEstimatedPrice)} (maks. 3 warna/posisi sablon)`,
  ].join("\n");
}

function updateOrderTotalsAndWA() {
  const fabric = getSelectedFabric();
  const grandTotal = orderVariants.reduce(
    (totalSum, v) =>
      totalSum + sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0),
    0,
  );

  document.getElementById("total-qty-text").textContent = grandTotal;
  document.getElementById("stage-total-qty-badge").textContent =
    `${grandTotal} pcs`;

  const activeVar = getActiveVariant();

  const multiBox = document.getElementById("multi-variant-summary-box");
  const multiRows = document.getElementById("multi-variant-rows");
  if (orderVariants.length > 1) {
    multiBox.classList.remove("hidden");
    multiRows.innerHTML = "";
    orderVariants.forEach((v, idx) => {
      const sub = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
      const breakdown = sizeKeys
        .filter((sz) => (v.quantities[sz] || 0) > 0)
        .map((sz) => `${sz}:${v.quantities[sz]}`)
        .join(", ");
      const sleeveLabel =
        v.sleeve === "panjang" ? "Lengan Panjang" : "Lengan Pendek";

      const row = document.createElement("div");
      row.className =
        "flex flex-wrap items-center justify-between gap-2 bg-white border border-[#e4e5e0] rounded-lg px-2.5 py-1.5";
      row.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full border border-black/20" style="background-color:${v.color.hex}"></span>
          <span class="font-bold text-zinc-900">${idx + 1}. ${v.color.name} (${sleeveLabel})</span>
          <span class="text-[11px] text-zinc-500">[${breakdown || "0 pcs"}]</span>
        </div>
        <span class="font-extrabold text-zinc-950">${sub} pcs</span>
      `;
      multiRows.appendChild(row);
    });
  } else {
    multiBox.classList.add("hidden");
  }

  const minNote = document.getElementById("min-order-note");
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

  // ================= PERHITUNGAN ESTIMASI HARGA =================
  document.getElementById("est-spec-badge").textContent =
    `${cuts[selectedCut].label} • ${fabric.name}`;

  const breakdownList = document.getElementById("est-breakdown-list");
  breakdownList.innerHTML = "";
  let totalEstimatedPrice = 0;

  if (grandTotal === 0) {
    const unitP = getVariantBaseUnitPrice(activeVar);
    const sleeveTxt =
      activeVar.sleeve === "panjang" ? "L. Panjang (+Rp 5.000)" : "L. Pendek";
    breakdownList.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-1 text-zinc-600">
        <span>Harga dasar satuan (${sleeveTxt}):</span>
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
        v.sleeve === "panjang" ? "L. Panjang (+5rb)" : "L. Pendek";

      const jumboDetails = sizeKeys
        .filter(
          (sz) => (SIZE_SURCHARGE[sz] || 0) > 0 && (v.quantities[sz] || 0) > 0,
        )
        .map(
          (sz) => `${sz} (${v.quantities[sz]}×+${SIZE_SURCHARGE[sz] / 1000}rb)`,
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
              ${orderVariants.length > 1 ? `#${idx + 1} ` : ""}${v.color.name} (${sleeveNote})
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

  const formattedTotal = formatRupiah(totalEstimatedPrice);
  document.getElementById("est-total-price").textContent = formattedTotal;

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
  ].filter((side) => !selectedPrints[side].isNone).length;
  document
    .getElementById("est-print-warning")
    .classList.toggle("hidden", activePrintCount <= 3);
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

// ================= PELETAKAN SABLON & UPLOAD PER SISI =================
function buildMiniTeeSVG(opt) {
  let overlay = "";
  if (opt.isNone) {
    overlay = `
      <line x1="22" y1="22" x2="38" y2="38" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>
      <line x1="38" y1="22" x2="22" y2="38" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>
    `;
  } else if (opt.mini) {
    const m = opt.mini;
    const cx = m.x + m.w / 2;
    const cy = m.y + m.h / 2;
    const rotAttr = m.rot ? `transform="rotate(${m.rot} ${cx} ${cy})"` : "";
    overlay = `
      <rect
        x="${m.x}"
        y="${m.y}"
        width="${m.w}"
        height="${m.h}"
        rx="1"
        fill="#3b82f6"
        stroke="#1d4ed8"
        stroke-width="1"
        ${rotAttr}
      />
    `;
  }

  return `
    <svg viewBox="0 0 60 60" class="w-10 h-10 sm:w-13 sm:h-13 shrink-0">
      <path
        d="M22 7 L13 10 L3 21 L9 27 L15 21 L15 54 L45 54 L45 21 L51 27 L57 21 L47 10 L38 7 Q30 13 22 7 Z"
        fill="#f4f4f5"
        stroke="#d4d4d8"
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      ${overlay}
    </svg>
  `;
}

function renderDesignSlots() {
  const container = document.getElementById("design-slots-grid");
  const sideMeta = [
    { key: "depan", label: "Depan" },
    { key: "belakang", label: "Belakang" },
    { key: "lenganKanan", label: "Lengan Kanan (+43°)" },
    { key: "lenganKiri", label: "Lengan Kiri (-43°)" },
  ];

  let hasAnyDesign = false;
  container.innerHTML = "";

  sideMeta.forEach(({ key, label }) => {
    const design = customDesigns[key];
    if (design) hasAnyDesign = true;
    const isCurrentSide = activeSide === key;
    const isSleeveSide = key === "lenganKanan" || key === "lenganKiri";
    const autoAngle = getAutoAngleForSide(key);

    const card = document.createElement("div");
    card.className = `rounded-xl border p-2.5 flex flex-col justify-between gap-2 transition ${
      isCurrentSide
        ? "bg-white border-[#2563eb] ring-2 ring-blue-500/20 shadow-xs"
        : "bg-white border-blue-200/80 hover:border-blue-400"
    }`;

    const topBlockHTML = design
      ? `
        <div
          onclick="selectPrintSide('${key}')"
          class="cursor-pointer flex items-center gap-2"
          title="Klik untuk lihat di mockup"
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
      `
      : `
        <div class="flex items-center justify-between gap-2">
          <div
            onclick="selectPrintSide('${key}')"
            class="cursor-pointer min-w-0"
          >
            <div class="text-xs font-extrabold text-zinc-900 truncate">
              ${label}
            </div>
            <div class="text-[10px] font-medium text-zinc-500">
              ${
                isSleeveSide
                  ? `Auto ${autoAngle > 0 ? "+" : ""}${autoAngle}° terkunci`
                  : "Klik untuk unggah"
              }
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

    card.innerHTML = topBlockHTML;
    container.appendChild(card);
  });

  const clearAllBtn = document.getElementById("clear-all-designs-btn");
  clearAllBtn.classList.toggle("hidden", !hasAnyDesign);
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

    activeSide = side;
    mockupView = side;
    isSleeveZoomed =
      (side === "lenganKanan" || side === "lenganKiri") &&
      !selectedPrints[side].isNone;

    document.querySelectorAll(".side-tab").forEach((tab) => {
      tab.classList.toggle("side-tab-active", tab.dataset.side === side);
    });

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
  ["depan", "belakang", "lenganKanan", "lenganKiri"].forEach((side) => {
    customDesigns[side] = null;
    const input = document.getElementById(`upload-${side}`);
    if (input) input.value = "";
  });
  updateAllPrintUI();
}

function renderPrintOptions() {
  const grid = document.getElementById("print-options-grid");
  const list = printCatalog[activeSide].filter(
    (opt) => !opt.longOnly || selectedSleeve === "panjang",
  );
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
      if (activeSide === "lenganKanan" || activeSide === "lenganKiri") {
        isSleeveZoomed = !opt.isNone;
      }
      updateAllPrintUI();
      pulseFloatingStageFeedback();
    };

    btn.innerHTML = `
      <div class="flex items-center justify-between w-full sm:w-auto gap-1.5">
        ${buildMiniTeeSVG(opt)}
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
            ? `<div class="text-[10px] sm:text-[11px] font-semibold text-zinc-400 mt-1.5">Tanpa sablon</div>`
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
  mockupView = side;
  isSleeveZoomed =
    (side === "lenganKanan" || side === "lenganKiri") &&
    !selectedPrints[side].isNone;

  document.querySelectorAll(".side-tab").forEach((tab) => {
    tab.classList.toggle("side-tab-active", tab.dataset.side === side);
  });

  renderDesignSlots();
  renderPrintOptions();
  updateMockupViewAndPrint();
}

function setMockupView(view) {
  selectPrintSide(view);
}

function toggleSleeveZoom() {
  isSleeveZoomed = !isSleeveZoomed;
  updateMockupViewAndPrint();
}

function computePrintZoneGeometry(viewKey, cutKey, sleeveKey) {
  const c = cuts[cutKey];
  const sleeveSpec = c[sleeveKey];
  const activePrint = selectedPrints[viewKey];
  if (!activePrint || activePrint.isNone || !activePrint.mainZone) {
    return null;
  }

  const z = activePrint.mainZone;
  let x = 0,
    y = 0,
    w = z.w,
    h = z.h,
    rot = 0,
    cx = 0,
    cy = 0;

  if (z.anchor === "chestLeft") {
    x = c.chestLeft.x;
    y = c.chestLeft.y;
  } else if (z.anchor === "chestRight") {
    x = c.chestRight.x;
    y = c.chestRight.y;
  } else if (z.anchor === "center" || z.anchor === "backNeck") {
    x = c.centerX - w / 2;
    y = c.chestTopY + (z.offsetY || 0);
  } else if (z.anchor === "sleeveR") {
    const anchor = sleeveSpec.sleeveRAnchor;
    rot = 43;
    const rad = (rot * Math.PI) / 180;
    const dist = z.dist || 0;
    const offsetIn = z.offsetIn || 0;
    cx = anchor.x - Math.sin(rad) * dist + Math.cos(rad) * offsetIn;
    cy = anchor.y + Math.cos(rad) * dist + Math.sin(rad) * offsetIn;
    x = cx - w / 2;
    y = cy - h / 2;
  } else if (z.anchor === "sleeveL") {
    const anchor = sleeveSpec.sleeveLAnchor;
    rot = -43;
    const rad = (rot * Math.PI) / 180;
    const dist = z.dist || 0;
    const offsetIn = z.offsetIn || 0;
    cx = anchor.x - Math.sin(rad) * dist - Math.cos(rad) * offsetIn;
    cy = anchor.y + Math.cos(rad) * dist - Math.sin(rad) * offsetIn;
    x = cx - w / 2;
    y = cy - h / 2;
  }

  cx = x + w / 2;
  cy = y + h / 2;

  return {
    x,
    y,
    w,
    h,
    rot,
    cx,
    cy,
    dim: activePrint.dim,
    name: activePrint.name,
  };
}

function updateMockupViewAndPrint() {
  const c = cuts[selectedCut];
  const sleeveSpec = c[selectedSleeve];
  const svg = document.getElementById("tee-svg");
  const isBack = mockupView === "belakang";

  document.querySelectorAll(".view-pill").forEach((pill) => {
    pill.classList.toggle("view-pill-active", pill.dataset.view === mockupView);
  });

  const bodyPath = isBack ? sleeveSpec.bodyBack : sleeveSpec.body;
  document.getElementById("tee-body").setAttribute("d", bodyPath);
  document.getElementById("tee-light-h").setAttribute("d", bodyPath);
  document.getElementById("tee-light-v").setAttribute("d", bodyPath);

  document.getElementById("front-neck-group").style.display = isBack
    ? "none"
    : "block";

  const collarOuter = document.getElementById("tee-collar-outer");
  const collarInner = document.getElementById("tee-collar-inner");
  if (isBack) {
    collarOuter.setAttribute(
      "d",
      "M111 35 Q150 47 189 35 L186 31 Q150 41 114 31 Z",
    );
    collarInner.setAttribute("d", "M116 34 Q150 42 184 34");
  } else {
    collarOuter.setAttribute(
      "d",
      "M111 35 Q150 69 189 35 L186 31 Q150 60 114 31 Z",
    );
    collarInner.setAttribute("d", "M116 34 Q150 58 184 34");
  }

  const zoomBtn = document.getElementById("toggle-zoom-btn");
  if (mockupView === "lenganKanan" || mockupView === "lenganKiri") {
    zoomBtn.classList.remove("hidden");
    zoomBtn.innerHTML = isSleeveZoomed
      ? `<i data-lucide="zoom-out" class="icon-xs"></i><span>Full</span>`
      : `<i data-lucide="zoom-in" class="icon-xs"></i><span>Zoom</span>`;
    refreshIcons();
    if (isSleeveZoomed) {
      if (selectedSleeve === "panjang") {
        svg.setAttribute(
          "viewBox",
          mockupView === "lenganKanan" ? "-20 26 125 180" : "195 26 125 180",
        );
      } else {
        svg.setAttribute(
          "viewBox",
          mockupView === "lenganKanan" ? "-12 22 135 135" : "177 22 135 135",
        );
      }
    } else {
      svg.setAttribute("viewBox", "0 0 300 300");
    }
  } else {
    zoomBtn.classList.add("hidden");
    svg.setAttribute("viewBox", "0 0 300 300");
  }

  const activePrint = selectedPrints[mockupView];
  const sideDesign = customDesigns[mockupView];
  const zoneGroup = document.getElementById("print-zone-group");
  const zoneRect = document.getElementById("print-zone-rect");
  const zoneImg = document.getElementById("print-zone-img");
  const zoneLabel = document.getElementById("print-zone-label");

  const sideNames = {
    depan: "Tampak Depan",
    belakang: "Tampak Belakang",
    lenganKanan: "Lengan Kanan",
    lenganKiri: "Lengan Kiri",
  };

  const rotDeg = getEffectiveAngleForSide(mockupView);
  const rotBadge =
    mockupView === "lenganKanan" || mockupView === "lenganKiri"
      ? ` • ${rotDeg > 0 ? "+" : ""}${rotDeg}°`
      : "";

  document.getElementById("mockup-view-caption").textContent =
    activePrint.isNone
      ? `${sideNames[mockupView]} • Tanpa Sablon (Polos)`
      : `${sideNames[mockupView]} • ${activePrint.name} (${activePrint.dim})${rotBadge}`;

  const geo = computePrintZoneGeometry(mockupView, selectedCut, selectedSleeve);
  if (!geo) {
    zoneGroup.style.display = "none";
    return;
  }

  zoneGroup.style.display = "block";
  if (geo.rot !== 0) {
    zoneGroup.setAttribute(
      "transform",
      `rotate(${geo.rot} ${geo.cx} ${geo.cy})`,
    );
  } else {
    zoneGroup.removeAttribute("transform");
  }

  zoneRect.setAttribute("x", geo.x);
  zoneRect.setAttribute("y", geo.y);
  zoneRect.setAttribute("width", geo.w);
  zoneRect.setAttribute("height", geo.h);

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

  zoneLabel.setAttribute("x", geo.cx);
  zoneLabel.setAttribute("y", geo.y + geo.h + 9);
  zoneLabel.textContent = activePrint.dim;
}

function updateAllPrintUI() {
  ["depan", "belakang", "lenganKanan", "lenganKiri"].forEach((side) => {
    const item = selectedPrints[side];
    const hasImg = Boolean(customDesigns[side]);
    const subEl = document.getElementById(`tab-sub-${side}`);
    const deg = getEffectiveAngleForSide(side);
    const degText =
      side === "lenganKanan" || side === "lenganKiri"
        ? ` ${deg > 0 ? "+" : ""}${deg}°`
        : "";
    subEl.textContent = item.isNone
      ? "Tanpa sablon"
      : `${item.name} (${item.dim})${degText}${hasImg ? " • File" : ""}`;
  });

  const summaryGrid = document.getElementById("summary-grid");
  const labels = {
    depan: "Depan",
    belakang: "Belakang",
    lenganKanan: "Lengan Ka",
    lenganKiri: "Lengan Ki",
  };
  let activeCount = 0;
  summaryGrid.innerHTML = "";

  ["depan", "belakang", "lenganKanan", "lenganKiri"].forEach((side) => {
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

  document.getElementById("total-print-sides").textContent =
    activeCount === 0
      ? "Kaos Polos (Tanpa Sablon)"
      : `${activeCount} Sisi Sablon Aktif`;

  renderDesignSlots();
  renderPrintOptions();
  updateMockupViewAndPrint();
  updateOrderTotalsAndWA();
}

function renderSizeChart(cutKey, sleeveKey) {
  const c = cuts[cutKey];
  const sleeveSpec = c[sleeveKey];
  const sleeveShort = sleeveKey === "panjang" ? "L. Panjang" : "L. Pendek";
  document.getElementById("chart-cut-title").textContent =
    `${c.label} • ${sleeveShort}`;
  const rangeBadge = document.getElementById("chart-range-badge");
  if (rangeBadge) {
    rangeBadge.textContent = `S – ${sizeKeys[sizeKeys.length - 1]} (cm)`;
  }

  const tbody = document.getElementById("size-chart-body");
  tbody.innerHTML = "";

  const visibleRows = sleeveSpec.sizes.filter((r) => sizeKeys.includes(r.size));

  visibleRows.forEach((row) => {
    const isSelected = selectedSize === row.size;
    const extra = SIZE_SURCHARGE[row.size] || 0;
    const tr = document.createElement("tr");
    tr.className = isSelected
      ? "bg-blue-50/90 transition-colors cursor-pointer"
      : "odd:bg-white even:bg-[#fafaf8] hover:bg-blue-50/60 transition-colors cursor-pointer";

    tr.onclick = () => {
      selectedSize = selectedSize === row.size ? null : row.size;
      renderSizeChart(selectedCut, selectedSleeve);
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
      }">${row.pl}</td>
    `;
    tbody.appendChild(tr);
  });
}

function applySleeveToMockup(sleeveKey, animate = true) {
  selectedSleeve = sleeveKey;
  const c = cuts[selectedCut];
  const sleeveSpec = c[sleeveKey];

  document.querySelectorAll(".sleeve-pill").forEach((el) => {
    el.classList.toggle("sleeve-pill-active", el.dataset.sleeve === sleeveKey);
  });

  document
    .getElementById("seam-armhole-l")
    .setAttribute("d", sleeveSpec.armholeL);
  document
    .getElementById("seam-armhole-r")
    .setAttribute("d", sleeveSpec.armholeR);
  document.getElementById("crease-l").setAttribute("d", sleeveSpec.creaseL);
  document.getElementById("crease-r").setAttribute("d", sleeveSpec.creaseR);
  document
    .getElementById("stitch-sleeve-l")
    .setAttribute("d", sleeveSpec.sleeveL);
  document
    .getElementById("stitch-sleeve-r")
    .setAttribute("d", sleeveSpec.sleeveR);

  const cuffsGroup = document.getElementById("long-sleeve-cuffs");
  if (sleeveKey === "panjang") {
    cuffsGroup.style.display = "block";
    document.getElementById("cuff-l").setAttribute("d", sleeveSpec.cuffL);
    document.getElementById("cuff-r").setAttribute("d", sleeveSpec.cuffR);
  } else {
    cuffsGroup.style.display = "none";
    if (selectedPrints.lenganKanan.longOnly) {
      selectedPrints.lenganKanan = printCatalog.lenganKanan[2];
    }
    if (selectedPrints.lenganKiri.longOnly) {
      selectedPrints.lenganKiri = printCatalog.lenganKiri[2];
    }
  }

  const sleeveShort = sleeveKey === "panjang" ? "L. Panjang" : "L. Pendek";
  document.getElementById("active-cut-label").textContent =
    `${c.label} • ${sleeveShort}`;
  renderSizeChart(selectedCut, sleeveKey);
  updateAllPrintUI();

  if (animate && window.Motion && window.Motion.animate) {
    Motion.animate(
      "#tee-svg",
      { scale: [0.96, 1] },
      { type: "spring", stiffness: 320, damping: 22 },
    );
  }
}

function setSleeve(sleeveKey) {
  const activeVar = getActiveVariant();
  activeVar.sleeve = sleeveKey;
  applySleeveToMockup(sleeveKey, true);
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setCut(cutKey) {
  selectedCut = cutKey;
  const c = cuts[cutKey];

  document.querySelectorAll(".cut-pill").forEach((el) => {
    el.classList.toggle("cut-pill-active", el.dataset.cut === cutKey);
  });

  document.getElementById("seam-shoulder-l").setAttribute("d", c.shoulderL);
  document.getElementById("seam-shoulder-r").setAttribute("d", c.shoulderR);

  const hemTop = document.getElementById("tee-hem-top");
  hemTop.setAttribute("x1", c.hemX1);
  hemTop.setAttribute("x2", c.hemX2);
  hemTop.setAttribute("y1", c.hemTopY);
  hemTop.setAttribute("y2", c.hemTopY);

  const hemBot = document.getElementById("tee-hem-bottom");
  hemBot.setAttribute("x1", c.hemX1);
  hemBot.setAttribute("x2", c.hemX2);
  hemBot.setAttribute("y1", c.hemBotY);
  hemBot.setAttribute("y2", c.hemBotY);

  renderPriceListTable();
  applySleeveToMockup(selectedSleeve, true);
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function applyColorToMockup(item, animate = true) {
  selectedColor = item;
  const dark = isDark(item.hex);

  const outlineColor = shadeHex(item.hex, dark ? -18 : -32);
  const stitchColor = shadeHex(item.hex, dark ? 26 : -22);
  const ribColor = shadeHex(item.hex, dark ? -6 : -18);
  const neckInnerColor = shadeHex(item.hex, dark ? -14 : -42);

  const body = document.getElementById("tee-body");
  body.setAttribute("fill", item.hex);
  body.setAttribute("stroke", outlineColor);

  document
    .getElementById("tee-neck-inner")
    .setAttribute("fill", neckInnerColor);

  const collarOuter = document.getElementById("tee-collar-outer");
  collarOuter.setAttribute("fill", ribColor);
  collarOuter.setAttribute("stroke", outlineColor);

  ["cuff-l", "cuff-r"].forEach((id) => {
    const cuff = document.getElementById(id);
    if (cuff) {
      cuff.setAttribute("fill", ribColor);
      cuff.setAttribute("stroke", outlineColor);
    }
  });

  document
    .getElementById("tee-collar-inner")
    .setAttribute("stroke", stitchColor);

  [
    "seam-shoulder-l",
    "seam-shoulder-r",
    "stitch-sleeve-l",
    "stitch-sleeve-r",
    "tee-hem-top",
    "tee-hem-bottom",
  ].forEach((id) => {
    document.getElementById(id).setAttribute("stroke", stitchColor);
  });

  ["seam-armhole-l", "seam-armhole-r", "crease-l", "crease-r"].forEach((id) => {
    document.getElementById(id).setAttribute("stroke", outlineColor);
  });

  document.getElementById("active-color-dot").style.backgroundColor = item.hex;
  document.getElementById("active-color-name").textContent = item.name;

  renderPalette();

  if (animate && window.Motion && window.Motion.animate) {
    Motion.animate(
      "#tee-svg",
      { y: [-4, 0] },
      { type: "spring", stiffness: 360, damping: 24 },
    );
  }
}

function setColor(item) {
  const activeVar = getActiveVariant();
  activeVar.color = item;
  applyColorToMockup(item, true);
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateAllPrintUI();
  pulseFloatingStageFeedback();
}

function setColorByHex(hex) {
  const found = palette.find((p) => p.hex === hex);
  if (found) setColor(found);
}

// ================= PENCARIAN & FILTER PALET WARNA =================
function handleColorSearch(val) {
  colorSearchQuery = (val || "").trim().toLowerCase();
  const clearBtn = document.getElementById("clear-color-search-btn");
  if (clearBtn) {
    clearBtn.classList.toggle("hidden", colorSearchQuery.length === 0);
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

function renderPalette() {
  const wrap = document.getElementById("swatches");
  if (!wrap) return;

  let list = palette;
  if (colorSearchQuery.length > 0) {
    list = palette.filter((p) =>
      p.name.toLowerCase().includes(colorSearchQuery),
    );
  } else if (activeFilter !== "all") {
    list = palette.filter((p) => p.cat === activeFilter);
  }

  wrap.innerHTML = "";

  if (list.length === 0) {
    wrap.innerHTML = `
      <div class="col-span-full py-5 px-4 rounded-xl border border-dashed border-zinc-300 bg-[#fafaf8] text-center space-y-2">
        <div class="text-xs font-bold text-zinc-700">
          Warna "<span class="text-[#2563eb]">${colorSearchQuery}</span>" tidak ditemukan di daftar.
        </div>
        <button
          type="button"
          onclick="clearColorSearch()"
          class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-zinc-900 text-white cursor-pointer"
        >
          <span>Tampilkan Semua Warna</span>
        </button>
      </div>
    `;
    return;
  }

  list.forEach((item) => {
    const active = item.hex === selectedColor.hex;
    const b = document.createElement("button");
    b.type = "button";
    b.title = item.name;
    b.dataset.hex = item.hex;
    b.className = `swatch-card ${active ? "swatch-card-active" : ""}`;
    b.onclick = () => setColor(item);

    b.innerHTML = `
      <span
        class="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-black/20 shrink-0 shadow-2xs flex items-center justify-center"
        style="background-color: ${item.hex}"
      >
        ${
          active
            ? `<i data-lucide="check" class="icon-xs ${
                isDark(item.hex) ? "text-white" : "text-zinc-900"
              }"></i>`
            : ""
        }
      </span>
      <span class="text-xs font-bold leading-tight truncate ${
        active ? "text-zinc-950" : "text-zinc-700"
      }">
        ${item.name}
      </span>
    `;
    wrap.appendChild(b);
  });

  refreshIcons();
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.onclick = () => {
    activeFilter = btn.dataset.filter;
    if (colorSearchQuery.length > 0) {
      clearColorSearch();
    }
    document.querySelectorAll(".filter-btn").forEach((el) => {
      const active = el === btn;
      el.className = active
        ? "filter-btn px-3 py-1.5 rounded-full text-xs font-bold bg-[#18181b] text-white cursor-pointer"
        : "filter-btn px-3 py-1.5 rounded-full text-xs font-semibold bg-[#f1f2ee] text-zinc-700 hover:bg-[#e4e5e0] cursor-pointer";
    });
    renderPalette();
  };
});

// ================= GENERATOR SPESIFIKASI ORDER =================
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

function buildStandaloneShirtSVGString(viewKey, cutKey, sleeveKey, colorItem) {
  const c = cuts[cutKey];
  const sleeveSpec = c[sleeveKey];
  const isBack = viewKey === "belakang";
  const dark = isDark(colorItem.hex);

  const outlineColor = shadeHex(colorItem.hex, dark ? -18 : -32);
  const stitchColor = shadeHex(colorItem.hex, dark ? 26 : -22);
  const ribColor = shadeHex(colorItem.hex, dark ? -6 : -18);
  const neckInnerColor = shadeHex(colorItem.hex, dark ? -14 : -42);

  let vb = "0 0 300 300";
  if (viewKey === "lenganKanan") {
    vb = sleeveKey === "panjang" ? "-20 26 125 180" : "-12 22 135 135";
  } else if (viewKey === "lenganKiri") {
    vb = sleeveKey === "panjang" ? "195 26 125 180" : "177 22 135 135";
  }

  const bodyPath = isBack ? sleeveSpec.bodyBack : sleeveSpec.body;
  const neckGroup = isBack
    ? ""
    : `
      <path d="M114 34 Q150 26 186 34 L180 55 Q150 66 120 55 Z" fill="${neckInnerColor}" />
      <rect x="143" y="34" width="14" height="6" rx="1" fill="rgba(255,255,255,0.22)" />
    `;

  const cuffsMarkup =
    sleeveKey === "panjang"
      ? `
        <path d="${sleeveSpec.cuffL}" fill="${ribColor}" stroke="${outlineColor}" stroke-width="1.15" stroke-linejoin="round" />
        <path d="${sleeveSpec.cuffR}" fill="${ribColor}" stroke="${outlineColor}" stroke-width="1.15" stroke-linejoin="round" />
      `
      : "";

  const collarOuterD = isBack
    ? "M111 35 Q150 47 189 35 L186 31 Q150 41 114 31 Z"
    : "M111 35 Q150 69 189 35 L186 31 Q150 60 114 31 Z";
  const collarInnerD = isBack
    ? "M116 34 Q150 42 184 34"
    : "M116 34 Q150 58 184 34";

  const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">
      <defs>
        <linearGradient id="woLightH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.12" />
          <stop offset="14%" stop-color="#000000" stop-opacity="0.02" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.09" />
          <stop offset="86%" stop-color="#000000" stop-opacity="0.02" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.12" />
        </linearGradient>
        <linearGradient id="woLightV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06" />
          <stop offset="45%" stop-color="#000000" stop-opacity="0" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.1" />
        </linearGradient>
      </defs>
      ${neckGroup}
      <path d="${bodyPath}" fill="${colorItem.hex}" stroke="${outlineColor}" stroke-width="1.5" stroke-linejoin="round" />
      <path d="${bodyPath}" fill="url(#woLightH)" style="mix-blend-mode:multiply" />
      <path d="${bodyPath}" fill="url(#woLightV)" style="mix-blend-mode:multiply" />
      ${cuffsMarkup}
      <path d="${c.shoulderL}" fill="none" stroke="${stitchColor}" stroke-width="1.2" stroke-linecap="round" />
      <path d="${c.shoulderR}" fill="none" stroke="${stitchColor}" stroke-width="1.2" stroke-linecap="round" />
      <path d="${sleeveSpec.armholeL}" fill="none" stroke="${outlineColor}" stroke-width="1.25" stroke-linecap="round" />
      <path d="${sleeveSpec.armholeR}" fill="none" stroke="${outlineColor}" stroke-width="1.25" stroke-linecap="round" />
      <path d="${sleeveSpec.creaseL}" fill="none" stroke="${outlineColor}" stroke-width="1.1" stroke-linecap="round" opacity="0.55" />
      <path d="${sleeveSpec.creaseR}" fill="none" stroke="${outlineColor}" stroke-width="1.1" stroke-linecap="round" opacity="0.55" />
      <path d="${sleeveSpec.sleeveL}" fill="none" stroke="${stitchColor}" stroke-width="1.2" stroke-dasharray="3 3" stroke-linecap="round" />
      <path d="${sleeveSpec.sleeveR}" fill="none" stroke="${stitchColor}" stroke-width="1.2" stroke-dasharray="3 3" stroke-linecap="round" />
      <path d="${collarOuterD}" fill="${ribColor}" stroke="${outlineColor}" stroke-width="1.2" stroke-linejoin="round" />
      <path d="${collarInnerD}" fill="none" stroke="${stitchColor}" stroke-width="1.2" stroke-dasharray="2.5 2.5" stroke-linecap="round" />
      <line x1="${c.hemX1}" y1="${c.hemTopY}" x2="${c.hemX2}" y2="${c.hemTopY}" stroke="${stitchColor}" stroke-width="1.2" stroke-dasharray="3.5 3" stroke-linecap="round" />
      <line x1="${c.hemX1}" y1="${c.hemBotY}" x2="${c.hemX2}" y2="${c.hemBotY}" stroke="${stitchColor}" stroke-width="1.2" stroke-dasharray="3.5 3" stroke-linecap="round" />
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
) {
  const { x: px, y: py, w: pw, h: ph } = panelRect;

  roundRectCanvas(ctx, px, py, pw, ph, 14);
  ctx.fillStyle = "#f8fafc";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.25;
  ctx.stroke();

  const badgeW = Math.min(pw - 24, 178);
  roundRectCanvas(ctx, px + (pw - badgeW) / 2, py + 12, badgeW, 24, 12);
  ctx.fillStyle = "#e2e8f0";
  ctx.fill();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 11px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(titleText, px + pw / 2, py + 28);

  const { svgStr, vb } = buildStandaloneShirtSVGString(
    viewKey,
    cutKey,
    sleeveKey,
    colorItem,
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
  const teeImg = await loadImageAsync(svgUrl);
  if (teeImg) {
    ctx.drawImage(teeImg, destX, destY, destW, destH);
  }
  URL.revokeObjectURL(svgUrl);

  const geo = computePrintZoneGeometry(viewKey, cutKey, sleeveKey);
  const activePrint = selectedPrints[viewKey];

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
    roundRectCanvas(ctx, czX, czY, czW, czH, 3);
    ctx.fillStyle = sideDesign
      ? "rgba(37, 99, 235, 0.04)"
      : "rgba(37, 99, 235, 0.16)";
    ctx.fill();
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    if (sideDesign && sideDesign.url) {
      const artImg = await loadImageAsync(sideDesign.url);
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

  ctx.fillStyle = activePrint.isNone ? "#64748b" : "#18181b";
  ctx.font = "700 12px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  const rotSuffix =
    geo && geo.rot !== 0 ? ` [${geo.rot > 0 ? "+" : ""}${geo.rot}°]` : "";
  const caption = activePrint.isNone
    ? "Polos (Tanpa Sablon)"
    : `${activePrint.name} (${activePrint.dim})${rotSuffix}`;
  ctx.fillText(caption, px + pw / 2, py + ph - 12);
  ctx.textAlign = "left";
}

async function generateVisualSpecCardImage() {
  const fabric = getSelectedFabric();
  const activeVar = getActiveVariant();
  const grandTotal = orderVariants.reduce(
    (totalSum, v) =>
      totalSum + sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0),
    0,
  );
  const totalEstimatedPrice = orderVariants.reduce(
    (sum, v) => sum + calculateVariantTotalPrice(v),
    0,
  );

  const hasRightSleevePrint = !selectedPrints.lenganKanan.isNone;
  const hasLeftSleevePrint = !selectedPrints.lenganKiri.isNone;
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
  ctx.fillText("SPESIFIKASI ORDER", 44, 57);

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
  ctx.fillText("1. VISUAL MOCKUP & TITIK SABLON", 68, curY + 33);

  ctx.fillStyle = "#64748b";
  ctx.font = "600 13px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "right";
  const previewSleeveLabel =
    activeVar.sleeve === "panjang" ? "Lengan Panjang" : "Lengan Pendek";
  ctx.fillText(
    `Preview Varian: ${activeVar.color.name} (${previewSleeveLabel})`,
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
  );

  let afterPanelsY = panelsStartY + frontBackBlockH + 14;

  if (hasAnySleevePrint) {
    if (hasRightSleevePrint && hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: halfW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "SABLON LENGAN KANAN (+43°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
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
        "SABLON LENGAN KIRI (-43°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
      );
    } else if (hasRightSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "SABLON LENGAN KANAN (+43°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
      );
    } else if (hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKiri",
        "SABLON LENGAN KIRI (-43°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
      );
    }
    afterPanelsY += sleeveBlockH;
  }

  roundRectCanvas(ctx, 68, afterPanelsY, innerW, 36, 10);
  ctx.fillStyle = "#f1f5f9";
  ctx.fill();

  ctx.fillStyle = "#64748b";
  ctx.font = "800 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("WARNA KAIN:", 84, afterPanelsY + 22);

  let swX = 186;
  orderVariants.forEach((v) => {
    const slv = v.sleeve === "panjang" ? "L.Pjg" : "L.Pdk";
    const label = `${v.color.name} (${slv})`;
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
    swX += ctx.measureText(label).width + 32;
  });

  curY += mockupSectionH + 18;

  // 3. SPESIFIKASI BAHAN & TITIK SABLON
  const colW = (W - 88 - 18) / 2;

  roundRectCanvas(ctx, 44, curY, colW, specGridH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText("2. SPESIFIKASI MODEL & BAHAN", 68, curY + 34);

  const baseRegPrice = fabric.prices[selectedCut] || fabric.prices.reguler;
  const leftRows = [
    ["Model Potongan", cuts[selectedCut].label],
    ["Jenis Bahan", fabric.name],
    ["Harga Dasar Kain", `${formatRupiah(baseRegPrice)} / pcs`],
    ["Ketentuan Lengan", "Pendek (Standar) / Panjang (+5rb)"],
    ["Ketentuan Jumbo", "2XL (+5rb), kelipatan +5rb/ukuran"],
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
  ctx.fillText("3. DETAIL UKURAN & TITIK SABLON", rightBoxX + 24, curY + 34);

  const formatSpecSide = (sideKey) => {
    const item = selectedPrints[sideKey];
    if (item.isNone) return "Polos (Tanpa Sablon)";
    const deg = getEffectiveAngleForSide(sideKey);
    const rotTxt =
      sideKey === "lenganKanan" || sideKey === "lenganKiri"
        ? ` (${deg > 0 ? "+" : ""}${deg}°)`
        : "";
    const fileTxt = customDesigns[sideKey] ? " • File" : "";
    return `${item.name} • ${item.dim}${rotTxt}${fileTxt}`;
  };

  const rightRows = [
    ["Sablon Depan", formatSpecSide("depan")],
    ["Sablon Belakang", formatSpecSide("belakang")],
    ["Lengan Kanan", formatSpecSide("lenganKanan")],
    ["Lengan Kiri", formatSpecSide("lenganKiri")],
    ["Cakupan Harga", "Maks. 3 warna / posisi sablon"],
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
  ctx.fillText("4. RINCIAN JUMLAH & ESTIMASI BIAYA", 68, curY + 34);

  const tblX = 68;
  const tblW = W - 88 - 48;
  const tblY = curY + 52;

  roundRectCanvas(ctx, tblX, tblY, tblW, tableHeaderH, 8);
  ctx.fillStyle = "#18181b";
  ctx.fill();

  const variantColW = 300;
  const qtyColW = 90;
  const subtotalColW = 165;
  const sizesAreaW = tblW - variantColW - qtyColW - subtotalColW;
  const singleSizeW = sizesAreaW / sizeKeys.length;

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 11px system-ui, -apple-system, sans-serif";
  ctx.fillText("VARIAN WARNA & LENGAN", tblX + 14, tblY + 24);

  ctx.textAlign = "center";
  sizeKeys.forEach((sz, idx) => {
    const sx = tblX + variantColW + idx * singleSizeW + singleSizeW / 2;
    ctx.fillText(sz, sx, tblY + 24);
  });
  ctx.fillText("QTY", tblX + variantColW + sizesAreaW + qtyColW / 2, tblY + 24);
  ctx.textAlign = "right";
  ctx.fillText("ESTIMASI SUBTOTAL", tblX + tblW - 14, tblY + 24);
  ctx.textAlign = "left";

  orderVariants.forEach((v, rIdx) => {
    const rowY = tblY + tableHeaderH + rIdx * tableRowH;
    if (rIdx % 2 === 1) {
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(tblX, rowY, tblW, tableRowH);
    }

    ctx.beginPath();
    ctx.arc(tblX + 20, rowY + 20, 6.5, 0, Math.PI * 2);
    ctx.fillStyle = v.color.hex;
    ctx.fill();
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1;
    ctx.stroke();

    const sleeveShort = v.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";
    ctx.fillStyle = "#18181b";
    ctx.font = "700 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${rIdx + 1}. ${v.color.name} (${sleeveShort})`,
      tblX + 34,
      rowY + 24,
    );

    ctx.textAlign = "center";
    sizeKeys.forEach((sz, idx) => {
      const val = v.quantities[sz] || 0;
      const sx = tblX + variantColW + idx * singleSizeW + singleSizeW / 2;
      ctx.fillStyle = val > 0 ? "#18181b" : "#cbd5e1";
      ctx.font =
        val > 0
          ? "800 12px system-ui, -apple-system, sans-serif"
          : "600 12px system-ui, -apple-system, sans-serif";
      ctx.fillText(String(val), sx, rowY + 24);
    });

    const rowQty = sizeKeys.reduce((s, sz) => s + (v.quantities[sz] || 0), 0);
    const rowPrice = calculateVariantTotalPrice(v);

    ctx.fillStyle = "#18181b";
    ctx.font = "800 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${rowQty} pcs`,
      tblX + variantColW + sizesAreaW + qtyColW / 2,
      rowY + 24,
    );

    ctx.textAlign = "right";
    ctx.fillStyle = "#18181b";
    ctx.font = "800 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(formatRupiah(rowPrice), tblX + tblW - 14, rowY + 24);
    ctx.textAlign = "left";
  });

  const totalBarY = tblY + tableHeaderH + orderVariants.length * tableRowH + 8;
  roundRectCanvas(ctx, tblX, totalBarY, tblW, tableTotalH - 8, 10);
  ctx.fillStyle = "#eff6ff";
  ctx.fill();
  ctx.strokeStyle = "#bfdbfe";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = "#1e3a8a";
  ctx.font = "800 14px system-ui, -apple-system, sans-serif";
  ctx.fillText(`TOTAL ORDER: ${grandTotal} PCS`, tblX + 16, totalBarY + 31);

  ctx.textAlign = "right";
  ctx.fillStyle = "#2563eb";
  ctx.font = "900 19px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `ESTIMASI TOTAL: ${formatRupiah(totalEstimatedPrice)}`,
    tblX + tblW - 16,
    totalBarY + 32,
  );
  ctx.textAlign = "left";

  curY += orderMatrixH + 18;

  // 5. FOOTER
  ctx.fillStyle = "#64748b";
  ctx.font = "600 12px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    "Atensi Konveksi • WhatsApp Konsultasi: " + WHATSAPP_DISPLAY,
    44,
    curY + 22,
  );

  ctx.textAlign = "right";
  ctx.fillText(
    "*Estimasi harga dapat disesuaikan setelah pengecekan file desain final",
    W - 44,
    curY + 22,
  );
  ctx.textAlign = "left";

  generatedSpecDataUrl = canvas.toDataURL("image/png");
  await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      generatedSpecBlob = blob;
      resolve();
    }, "image/png");
  });

  return generatedSpecDataUrl;
}

async function openVisualSpecModal() {
  const modal = document.getElementById("visual-spec-modal");
  const imgEl = document.getElementById("spec-card-preview-img");
  const dataUrl = await generateVisualSpecCardImage();
  imgEl.src = dataUrl;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  refreshIcons();
}

function closeVisualSpecModal() {
  const modal = document.getElementById("visual-spec-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function downloadSpecPNG() {
  if (!generatedSpecDataUrl) return;
  const link = document.createElement("a");
  link.download = `Spesifikasi-Order-Atensi-Konveksi-${Date.now()}.png`;
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
        <title>Spesifikasi Order - Atensi Konveksi</title>
        <style>
          @page { size: auto; margin: 10mm; }
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: #ffffff;
          }
          img {
            max-width: 100%;
            height: auto;
            display: block;
          }
        </style>
      </head>
      <body>
        <img src="${generatedSpecDataUrl}" onload="setTimeout(function(){ window.print(); window.close(); }, 250);" />
      </body>
    </html>
  `);
  printWin.document.close();
}

async function shareOrSendVisualToWA() {
  if (!generatedSpecBlob || !generatedSpecDataUrl) {
    await generateVisualSpecCardImage();
  }

  const waMessage = buildWhatsAppMessageText();
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  if (generatedSpecBlob && navigator.share && navigator.canShare) {
    try {
      const file = new File(
        [generatedSpecBlob],
        `Spesifikasi-Order-Atensi-Konveksi-${Date.now()}.png`,
        { type: "image/png" },
      );
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Spesifikasi Order - Atensi Konveksi",
          text: waMessage,
        });
        return;
      }
    } catch (err) {
      if (err && err.name === "AbortError") {
        return;
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
    } catch (_) {
      // Abaikan jika browser memblokir izin clipboard otomatis
    }
  }

  downloadSpecPNG();
  window.open(waUrl, "_blank", "noopener");
}

// ================= INISIALISASI HALAMAN =================
function initApp() {
  renderPriceListTable();
  applyColorToMockup(selectedColor, false);
  applySleeveToMockup(selectedSleeve, false);
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  updateMobileFloatingStage();
  refreshIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
