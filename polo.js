const WHATSAPP_NUMBER = "62895413909591";
const WHATSAPP_DISPLAY = "+62 895-4139-09591";

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// ================= DATA PRICE LIST BAHAN, POTONGAN, KERAH, PLAKET, LENGAN & SAKU =================
const LONG_SLEEVE_EXTRA = 7000;
const ZIPPER_CLOSURE_EXTRA = 8000;
const POCKET_EXTRA = 3000;
const TIPPED_COLLAR_EXTRA = 2000;

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
    id: "pe-lacoste",
    name: "PE Lacoste Pique",
    shortName: "PE Lacoste",
    prices: {
      reguler: 65000,
      slim: 68000,
      oversize: 75000,
    },
  },
  {
    id: "lacoste-cvc",
    name: "Lacoste CVC Pique 24s",
    shortName: "Lacoste CVC 24s",
    prices: {
      reguler: 85000,
      slim: 88000,
      oversize: 95000,
    },
  },
  {
    id: "combed-24s",
    name: "Cotton Combed 24s (Wangky)",
    shortName: "Combed 24s",
    prices: {
      reguler: 88000,
      slim: 91000,
      oversize: 98000,
    },
  },
  {
    id: "lacoste-cotton",
    name: "Lacoste Cotton Pique 20s",
    shortName: "Lacoste Cotton 20s",
    prices: {
      reguler: 95000,
      slim: 98000,
      oversize: 105000,
    },
  },
];

const collarCatalog = {
  rib: {
    label: "Kerah Rib Rajut",
    shortLabel: "Kerah Rib",
    extra: 0,
    desc: "Kerah rajut elastis tekstur rib standar polo klasik",
  },
  kemeja: {
    label: "Kerah Kemeja (Bahan)",
    shortLabel: "Kerah Kemeja",
    extra: 0,
    desc: "Kerah kain badan dengan kaki kerah & jahitan tindas rapi",
  },
  shanghai: {
    label: "Kerah Shanghai (Mandarin)",
    shortLabel: "Kerah Shanghai",
    extra: 0,
    desc: "Kerah tegak berdiri minimalis tanpa daun kerah lipat",
  },
  tipped: {
    label: "Kerah List Strip (Tipped)",
    shortLabel: "Kerah List",
    extra: TIPPED_COLLAR_EXTRA,
    desc: "Kerah rib dengan 2 garis list kontras di kerah & manset",
  },
};

const closureCatalog = {
  kancing2: {
    label: "Kancing 2",
    shortLabel: "Kancing 2",
    extra: 0,
  },
  kancing3: {
    label: "Kancing 3",
    shortLabel: "Kancing 3",
    extra: 0,
  },
  resleting: {
    label: "Resleting (Zip-Neck)",
    shortLabel: "Resleting",
    extra: ZIPPER_CLOSURE_EXTRA,
  },
};

const cuts = {
  reguler: {
    label: "Reguler",
    pendek: {
      body: "M117 31 L74 45 L31 116 L75 134 L82 102 L82 272 L218 272 L218 102 L225 134 L269 116 L226 45 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L74 45 L31 116 L75 134 L82 102 L82 272 L218 272 L218 102 L225 134 L269 116 L226 45 L183 31 Q150 37 117 31 Z",
      armholeL: "M74 45 Q81 73 82 102",
      armholeR: "M226 45 Q219 73 218 102",
      creaseL: "M82 102 L82 102",
      creaseR: "M218 102 L218 102",
      sleeveL: "M33.8 111.3 L77.8 129.3",
      sleeveR: "M266.2 111.3 L222.2 129.3",
      scuffL: "M33.8 111.3 L77.8 129.3 L75 134 L31 116 Z",
      scuffR: "M266.2 111.3 L222.2 129.3 L225 134 L269 116 Z",
      scuffTipL: "M32.4 113.6 L76.4 131.6",
      scuffTipR: "M267.6 113.6 L223.6 131.6",
      sleeveRAnchor: { x: 58, y: 94, rot: 31 },
      sleeveLAnchor: { x: 242, y: 94, rot: -31 },
      sizes: [
        { size: "S", p: 67, l: 48, pl: 20 },
        { size: "M", p: 70, l: 51, pl: 21 },
        { size: "L", p: 73, l: 54, pl: 22 },
        { size: "XL", p: 76, l: 57, pl: 23 },
        { size: "2XL", p: 79, l: 60, pl: 24 },
        { size: "3XL", p: 81, l: 63, pl: 25 },
        { size: "4XL", p: 83, l: 66, pl: 26 },
        { size: "5XL", p: 85, l: 69, pl: 27 },
      ],
    },
    panjang: {
      body: "M117 31 L74 45 L0 167 L28 181 L82 106 L82 272 L218 272 L218 106 L272 181 L300 167 L226 45 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L74 45 L0 167 L28 181 L82 106 L82 272 L218 272 L218 106 L272 181 L300 167 L226 45 L183 31 Q150 37 117 31 Z",
      armholeL: "M74 45 Q81 75 82 106",
      armholeR: "M226 45 Q219 75 218 106",
      creaseL: "M82 106 L82 106",
      creaseR: "M218 106 L218 106",
      sleeveL: "M4.5 160 L32.5 174",
      sleeveR: "M295.5 160 L267.5 174",
      cuffL: "M4.5 160 L32.5 174 L28 181 L0 167 Z",
      cuffR: "M295.5 160 L267.5 174 L272 181 L300 167 Z",
      lcuffTipL: "M2.2 163.5 L30.2 177.5",
      lcuffTipR: "M297.8 163.5 L269.8 177.5",
      sleeveRAnchor: { x: 46, y: 118, rot: 31 },
      sleeveLAnchor: { x: 254, y: 118, rot: -31 },
      sizes: [
        { size: "S", p: 67, l: 48, pl: 57 },
        { size: "M", p: 70, l: 51, pl: 59 },
        { size: "L", p: 73, l: 54, pl: 61 },
        { size: "XL", p: 76, l: 57, pl: 63 },
        { size: "2XL", p: 79, l: 60, pl: 65 },
        { size: "3XL", p: 81, l: 63, pl: 66 },
        { size: "4XL", p: 83, l: 66, pl: 67 },
        { size: "5XL", p: 85, l: 69, pl: 68 },
      ],
    },
    shoulderL: "M117 31 L74 45",
    shoulderR: "M183 31 L226 45",
    hemX1: 83,
    hemX2: 217,
    hemTopY: 266,
    hemBotY: 268.5,
    slitL: { x: 82, y1: 262, y2: 272 },
    slitR: { x: 218, y1: 262, y2: 272 },
    backYoke: "M75 52 Q150 58 225 52",
    chestLeft: { x: 166, y: 72 },
    chestRight: { x: 109, y: 72 },
    pocketOffset: { x: 0, y: 0 },
    centerX: 150,
    chestTopY: 70,
  },
  slim: {
    label: "Slim Fit",
    pendek: {
      body: "M117 31 L78 44 L38 110 L78 126 L84 98 Q88 175 84 268 L216 268 Q212 175 216 98 L222 126 L262 110 L222 44 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L78 44 L38 110 L78 126 L84 98 Q88 175 84 268 L216 268 Q212 175 216 98 L222 126 L262 110 L222 44 L183 31 Q150 37 117 31 Z",
      armholeL: "M78 44 Q84 71 84 98",
      armholeR: "M222 44 Q216 71 216 98",
      creaseL: "M84 98 L84 98",
      creaseR: "M216 98 L216 98",
      sleeveL: "M40.8 105.3 L80.8 121.3",
      sleeveR: "M259.2 105.3 L219.2 121.3",
      scuffL: "M40.8 105.3 L80.8 121.3 L78 126 L38 110 Z",
      scuffR: "M259.2 105.3 L219.2 121.3 L222 126 L262 110 Z",
      scuffTipL: "M39.4 107.6 L79.4 123.6",
      scuffTipR: "M260.6 107.6 L220.6 123.6",
      sleeveRAnchor: { x: 62, y: 90, rot: 31 },
      sleeveLAnchor: { x: 238, y: 90, rot: -31 },
      sizes: [
        { size: "S", p: 65, l: 45, pl: 19 },
        { size: "M", p: 68, l: 48, pl: 20 },
        { size: "L", p: 71, l: 51, pl: 21 },
        { size: "XL", p: 74, l: 54, pl: 22 },
        { size: "2XL", p: 77, l: 57, pl: 23 },
        { size: "3XL", p: 79, l: 60, pl: 24 },
        { size: "4XL", p: 81, l: 63, pl: 25 },
        { size: "5XL", p: 83, l: 66, pl: 26 },
      ],
    },
    panjang: {
      body: "M117 31 L78 44 L6 162 L32 176 L84 102 Q88 178 84 268 L216 268 Q212 178 216 102 L268 176 L294 162 L222 44 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L78 44 L6 162 L32 176 L84 102 Q88 178 84 268 L216 268 Q212 178 216 102 L268 176 L294 162 L222 44 L183 31 Q150 37 117 31 Z",
      armholeL: "M78 44 Q84 73 84 102",
      armholeR: "M222 44 Q216 73 216 102",
      creaseL: "M84 102 L84 102",
      creaseR: "M216 102 L216 102",
      sleeveL: "M10.5 155 L36.5 169",
      sleeveR: "M289.5 155 L263.5 169",
      cuffL: "M10.5 155 L36.5 169 L32 176 L6 162 Z",
      cuffR: "M289.5 155 L263.5 169 L268 176 L294 162 Z",
      lcuffTipL: "M8.2 158.5 L34.2 172.5",
      lcuffTipR: "M291.8 158.5 L265.8 172.5",
      sleeveRAnchor: { x: 50, y: 114, rot: 31 },
      sleeveLAnchor: { x: 250, y: 114, rot: -31 },
      sizes: [
        { size: "S", p: 65, l: 45, pl: 56 },
        { size: "M", p: 68, l: 48, pl: 58 },
        { size: "L", p: 71, l: 51, pl: 60 },
        { size: "XL", p: 74, l: 54, pl: 62 },
        { size: "2XL", p: 77, l: 57, pl: 64 },
        { size: "3XL", p: 79, l: 60, pl: 65 },
        { size: "4XL", p: 81, l: 63, pl: 66 },
        { size: "5XL", p: 83, l: 66, pl: 67 },
      ],
    },
    shoulderL: "M117 31 L78 44",
    shoulderR: "M183 31 L222 44",
    hemX1: 85,
    hemX2: 215,
    hemTopY: 262,
    hemBotY: 264.5,
    slitL: { x: 84, y1: 258, y2: 268 },
    slitR: { x: 216, y1: 258, y2: 268 },
    backYoke: "M79 51 Q150 57 221 51",
    chestLeft: { x: 164, y: 72 },
    chestRight: { x: 111, y: 72 },
    pocketOffset: { x: -2, y: 0 },
    centerX: 150,
    chestTopY: 70,
  },
  oversize: {
    label: "Oversize",
    pendek: {
      body: "M117 31 L62 49 L16 126 L62 146 L68 114 L68 282 L232 282 L232 114 L238 146 L284 126 L238 49 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L62 49 L16 126 L62 146 L68 114 L68 282 L232 282 L232 114 L238 146 L284 126 L238 49 L183 31 Q150 37 117 31 Z",
      armholeL: "M62 49 Q69 81 68 114",
      armholeR: "M238 49 Q231 81 232 114",
      creaseL: "M68 114 L68 114",
      creaseR: "M232 114 L232 114",
      sleeveL: "M18.8 121.3 L64.8 141.3",
      sleeveR: "M281.2 121.3 L235.2 141.3",
      scuffL: "M18.8 121.3 L64.8 141.3 L62 146 L16 126 Z",
      scuffR: "M281.2 121.3 L235.2 141.3 L238 146 L284 126 Z",
      scuffTipL: "M17.4 123.6 L63.4 143.6",
      scuffTipR: "M282.6 123.6 L236.6 143.6",
      sleeveRAnchor: { x: 44, y: 102, rot: 31 },
      sleeveLAnchor: { x: 256, y: 102, rot: -31 },
      sizes: [
        { size: "S", p: 69, l: 54, pl: 23 },
        { size: "M", p: 72, l: 57, pl: 24 },
        { size: "L", p: 75, l: 60, pl: 25 },
        { size: "XL", p: 78, l: 63, pl: 26 },
        { size: "2XL", p: 81, l: 66, pl: 27 },
        { size: "3XL", p: 83, l: 69, pl: 28 },
        { size: "4XL", p: 85, l: 72, pl: 29 },
        { size: "5XL", p: 87, l: 75, pl: 30 },
      ],
    },
    panjang: {
      body: "M117 31 L62 49 L-8 174 L21 188 L68 118 L68 282 L232 282 L232 118 L279 188 L308 174 L238 49 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L62 49 L-8 174 L21 188 L68 118 L68 282 L232 282 L232 118 L279 188 L308 174 L238 49 L183 31 Q150 37 117 31 Z",
      armholeL: "M62 49 Q69 83 68 118",
      armholeR: "M238 49 Q231 83 232 118",
      creaseL: "M68 118 L68 118",
      creaseR: "M232 118 L232 118",
      sleeveL: "M-3.5 167 L25.5 181",
      sleeveR: "M303.5 167 L274.5 181",
      cuffL: "M-3.5 167 L25.5 181 L21 188 L-8 174 Z",
      cuffR: "M303.5 167 L274.5 181 L279 188 L308 174 Z",
      lcuffTipL: "M-5.8 170.5 L23.2 184.5",
      lcuffTipR: "M305.8 170.5 L276.8 184.5",
      sleeveRAnchor: { x: 35, y: 124, rot: 31 },
      sleeveLAnchor: { x: 265, y: 124, rot: -31 },
      sizes: [
        { size: "S", p: 69, l: 54, pl: 59 },
        { size: "M", p: 72, l: 57, pl: 61 },
        { size: "L", p: 75, l: 60, pl: 63 },
        { size: "XL", p: 78, l: 63, pl: 65 },
        { size: "2XL", p: 81, l: 66, pl: 67 },
        { size: "3XL", p: 83, l: 69, pl: 68 },
        { size: "4XL", p: 85, l: 72, pl: 69 },
        { size: "5XL", p: 87, l: 75, pl: 70 },
      ],
    },
    shoulderL: "M117 31 L62 49",
    shoulderR: "M183 31 L238 49",
    hemX1: 69,
    hemX2: 231,
    hemTopY: 276,
    hemBotY: 278.5,
    slitL: { x: 68, y1: 272, y2: 282 },
    slitR: { x: 232, y1: 272, y2: 282 },
    backYoke: "M63 56 Q150 62 237 56",
    chestLeft: { x: 172, y: 74 },
    chestRight: { x: 102, y: 74 },
    pocketOffset: { x: 6, y: 2 },
    centerX: 150,
    chestTopY: 72,
  },
};

const printCatalog = {
  depan: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Bagian depan polo dibiarkan polos.",
      mini: null,
    },
    {
      id: "logo-dada-kiri",
      name: "Logo Dada Kiri",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Paling Populer",
      desc: "Bordir/sablon logo perusahaan atau komunitas di dada kiri.",
      mini: { x: 32, y: 18, w: 8, h: 8 },
      mainZone: { anchor: "chestLeft", w: 25, h: 25 },
    },
    {
      id: "logo-dada-kanan",
      name: "Logo Dada Kanan",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Dada kanan",
      desc: "Logo sponsor, nama personel, atau emblem di dada kanan.",
      mini: { x: 20, y: 18, w: 8, h: 8 },
      mainZone: { anchor: "chestRight", w: 25, h: 25 },
    },
    {
      id: "tulisan-dada",
      name: "Tulisan / Nama",
      dim: "24 × 7 cm",
      area: 168,
      badge: "Tengah dada",
      desc: "Tipografi memanjang di bawah plaket kancing.",
      mini: { x: 20, y: 26, w: 20, h: 6 },
      mainZone: { anchor: "center", w: 66, h: 20, offsetY: 46 },
    },
    {
      id: "a5-depan",
      name: "Grafis Sedang (A5)",
      dim: "15 × 20 cm",
      area: 300,
      badge: "Sablon DTF",
      desc: "Ilustrasi atau emblem besar di bagian tengah dada.",
      mini: { x: 22, y: 25, w: 16, h: 12 },
      mainZone: { anchor: "center", w: 46, h: 56, offsetY: 46 },
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
      desc: "Bagian punggung dibiarkan polos.",
      mini: null,
    },
    {
      id: "logo-tengkuk",
      name: "Logo Tengkuk",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Punggung atas",
      desc: "Logo brand kecil tepat di bawah kerah belakang.",
      mini: { x: 26, y: 11, w: 8, h: 8 },
      mainZone: { anchor: "backNeck", w: 22, h: 22, offsetY: -22 },
    },
    {
      id: "tulisan-punggung",
      name: "Tulisan Punggung",
      dim: "28 × 10 cm",
      area: 280,
      badge: "Instansi / Event",
      desc: "Tulisan nama instansi, divisi, atau panitia di punggung.",
      mini: { x: 18, y: 16, w: 24, h: 8 },
      mainZone: { anchor: "center", w: 80, h: 28, offsetY: -4 },
    },
    {
      id: "a4-belakang",
      name: "A4 Punggung",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Standar",
      desc: "Logo & tulisan kombinasi berukuran sedang di punggung.",
      mini: { x: 20, y: 16, w: 20, h: 25 },
      mainZone: { anchor: "center", w: 64, h: 86, offsetY: 0 },
    },
    {
      id: "a3-belakang",
      name: "A3 (Besar)",
      dim: "29,7 × 42 cm",
      area: 1247,
      badge: "Maksimal",
      desc: "Area luas di punggung untuk desain/ilustrasi utama.",
      mini: { x: 18, y: 15, w: 24, h: 33 },
      mainZone: { anchor: "center", w: 88, h: 120, offsetY: 0 },
    },
  ],
  lenganKanan: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Lengan kanan dibiarkan polos.",
      mini: null,
    },
    {
      id: "label-lengan-ka",
      name: "Bendera / Badge",
      dim: "5 × 5 cm",
      area: 25,
      badge: "Ujung lengan",
      desc: "Bordir bendera Merah Putih atau badge kecil di lengan kanan.",
      mini: { x: 8, y: 21, w: 6, h: 6, rot: 31 },
      mainZone: {
        anchor: "sleeveR",
        w: 15,
        h: 15,
        dist: 14,
        offsetIn: 5,
      },
    },
    {
      id: "logo-lengan-ka",
      name: "Logo Lengan",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Standar",
      desc: "Logo divisi, sponsor, atau emblem di lengan kanan.",
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
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Lengan kiri dibiarkan polos.",
      mini: null,
    },
    {
      id: "label-lengan-ki",
      name: "Bendera / Badge",
      dim: "5 × 5 cm",
      area: 25,
      badge: "Ujung lengan",
      desc: "Bordir bendera atau badge kecil di lengan kiri.",
      mini: { x: 46, y: 21, w: 6, h: 6, rot: -31 },
      mainZone: {
        anchor: "sleeveL",
        w: 15,
        h: 15,
        dist: 14,
        offsetIn: 5,
      },
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
  // Biru (6)
  { name: "Midnight Navy", hex: "#1d2d44", cat: "biru" },
  { name: "Royal Blue", hex: "#3568c8", cat: "biru" },
  { name: "Denim Blue", hex: "#5c7cfa", cat: "biru" },
  { name: "Indigo Denim", hex: "#415a77", cat: "biru" },
  { name: "Sky Mist", hex: "#8ecae6", cat: "biru" },
  { name: "Baby Blue", hex: "#bae6fd", cat: "biru" },

  // Netral (8)
  { name: "Putih Bersih", hex: "#f5f5f4", cat: "netral" },
  { name: "Broken White", hex: "#ece7dc", cat: "netral" },
  { name: "Abu Misty", hex: "#cbd2d9", cat: "netral" },
  { name: "Light Grey", hex: "#d4d4d8", cat: "netral" },
  { name: "Slate Grey", hex: "#64748b", cat: "netral" },
  { name: "Dark Grey", hex: "#4b5563", cat: "netral" },
  { name: "Charcoal", hex: "#2e3136", cat: "netral" },
  { name: "Hitam Jet", hex: "#16171a", cat: "netral" },

  // Hijau (8)
  { name: "Forest Green", hex: "#2d5a46", cat: "hijau" },
  { name: "Botol Emerald", hex: "#14532d", cat: "hijau" },
  { name: "Army Green", hex: "#3f4a36", cat: "hijau" },
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
let selectedCollar = "rib";
let selectedClosure = "kancing2";
let selectedSleeve = "pendek";
let selectedPocket = "tanpa";
let selectedFabricId = "lacoste-cvc";
let selectedColor = palette[0];
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
    closure: "kancing2",
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
    fabricCatalog.find((f) => f.id === "lacoste-cvc") ||
    fabricCatalog[0]
  );
}

function getGlobalModelAddons() {
  const collarAddon = collarCatalog[selectedCollar]?.extra || 0;
  const pocketAddon = selectedPocket === "pakai" ? POCKET_EXTRA : 0;
  return collarAddon + pocketAddon;
}

function getVariantBaseUnitPrice(variant) {
  const fabric = getSelectedFabric();
  const basePrice = fabric.prices[selectedCut] || fabric.prices.reguler;
  const globalAddons = getGlobalModelAddons();
  const sleeveAddon = variant.sleeve === "panjang" ? LONG_SLEEVE_EXTRA : 0;
  const closureAddon = closureCatalog[variant.closure]?.extra || 0;
  return basePrice + globalAddons + sleeveAddon + closureAddon;
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
  if (sideKey === "lenganKanan") return 31;
  if (sideKey === "lenganKiri") return -31;
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
  const wrapper = document.getElementById("polo-stage-wrapper");
  const stage = document.getElementById("polo-stage");
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
    const wrapper = document.getElementById("polo-stage-wrapper");
    const stage = document.getElementById("polo-stage");
    if (wrapper && stage) {
      wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
    }
  }
}

function pulseFloatingStageFeedback() {
  if (!isMobileFloatingActive || !window.Motion || !window.Motion.animate) {
    return;
  }
  const stage = document.getElementById("polo-stage");
  if (stage) {
    Motion.animate(
      stage,
      { scale: [0.985, 1] },
      { type: "spring", stiffness: 420, damping: 24 },
    );
  }
}

function toggleMobileFloatingDetail() {
  const stage = document.getElementById("polo-stage");
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

  const cutCols = ["reguler", "slim", "oversize"];
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

// ================= SINKRONISASI GEOMETRI SVG POLO SHIRT =================
function updatePoloGeometry() {
  const cut = cuts[selectedCut] || cuts.reguler;
  const sleeveData = cut[selectedSleeve] || cut.pendek;
  const isBack = mockupView === "belakang";

  const bodyPath = isBack ? sleeveData.bodyBack : sleeveData.body;
  ["polo-body", "polo-light-h", "polo-light-v"].forEach((id) => {
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

  const creaseL = document.getElementById("crease-l");
  const creaseR = document.getElementById("crease-r");
  if (creaseL) creaseL.setAttribute("d", sleeveData.creaseL);
  if (creaseR) creaseR.setAttribute("d", sleeveData.creaseR);

  const stitchL = document.getElementById("stitch-sleeve-l");
  const stitchR = document.getElementById("stitch-sleeve-r");
  if (stitchL) stitchL.setAttribute("d", sleeveData.sleeveL);
  if (stitchR) stitchR.setAttribute("d", sleeveData.sleeveR);

  const shortCuffs = document.getElementById("short-sleeve-cuffs");
  const longCuffs = document.getElementById("long-sleeve-cuffs");
  const isTipped = selectedCollar === "tipped";

  if (selectedSleeve === "panjang") {
    if (shortCuffs) shortCuffs.style.display = "none";
    if (longCuffs) longCuffs.style.display = "block";
    const cuffL = document.getElementById("cuff-l");
    const cuffR = document.getElementById("cuff-r");
    const lTipL = document.getElementById("lcuff-tip-l");
    const lTipR = document.getElementById("lcuff-tip-r");
    if (cuffL) cuffL.setAttribute("d", sleeveData.cuffL);
    if (cuffR) cuffR.setAttribute("d", sleeveData.cuffR);
    if (lTipL) {
      lTipL.setAttribute("d", sleeveData.lcuffTipL);
      lTipL.style.display = isTipped ? "block" : "none";
    }
    if (lTipR) {
      lTipR.setAttribute("d", sleeveData.lcuffTipR);
      lTipR.style.display = isTipped ? "block" : "none";
    }
  } else {
    if (shortCuffs) shortCuffs.style.display = "block";
    if (longCuffs) longCuffs.style.display = "none";
    const scuffL = document.getElementById("scuff-l");
    const scuffR = document.getElementById("scuff-r");
    const sTipL = document.getElementById("scuff-tip-l");
    const sTipR = document.getElementById("scuff-tip-r");
    if (scuffL) scuffL.setAttribute("d", sleeveData.scuffL);
    if (scuffR) scuffR.setAttribute("d", sleeveData.scuffR);
    if (sTipL) {
      sTipL.setAttribute("d", sleeveData.scuffTipL);
      sTipL.style.display = isTipped ? "block" : "none";
    }
    if (sTipR) {
      sTipR.setAttribute("d", sleeveData.scuffTipR);
      sTipR.style.display = isTipped ? "block" : "none";
    }
  }

  const hemTop = document.getElementById("polo-hem-top");
  const hemBot = document.getElementById("polo-hem-bottom");
  if (hemTop) {
    hemTop.setAttribute("x1", cut.hemX1);
    hemTop.setAttribute("x2", cut.hemX2);
    hemTop.setAttribute("y1", cut.hemTopY);
    hemTop.setAttribute("y2", cut.hemTopY);
  }
  if (hemBot) {
    hemBot.setAttribute("x1", cut.hemX1);
    hemBot.setAttribute("x2", cut.hemX2);
    hemBot.setAttribute("y1", cut.hemBotY);
    hemBot.setAttribute("y2", cut.hemBotY);
  }

  const slitL = document.getElementById("polo-slit-l");
  const slitR = document.getElementById("polo-slit-r");
  if (slitL) {
    slitL.setAttribute("x1", cut.slitL.x);
    slitL.setAttribute("x2", cut.slitL.x);
    slitL.setAttribute("y1", cut.slitL.y1);
    slitL.setAttribute("y2", cut.slitL.y2);
  }
  if (slitR) {
    slitR.setAttribute("x1", cut.slitR.x);
    slitR.setAttribute("x2", cut.slitR.x);
    slitR.setAttribute("y1", cut.slitR.y1);
    slitR.setAttribute("y2", cut.slitR.y2);
  }

  const frontNeckGroup = document.getElementById("front-neck-group");
  const frontCollarGroup = document.getElementById("front-collar-group");
  const frontPlacketGroup = document.getElementById("front-placket-group");
  const backCollarGroup = document.getElementById("back-collar-group");
  const backYokeSeam = document.getElementById("back-yoke-seam");
  const chestPocketGroup = document.getElementById("chest-pocket-group");

  if (backYokeSeam) {
    backYokeSeam.setAttribute("d", cut.backYoke);
    backYokeSeam.style.display = "none";
  }

  if (isBack) {
    if (frontNeckGroup) frontNeckGroup.style.display = "none";
    if (frontCollarGroup) frontCollarGroup.style.display = "none";
    if (frontPlacketGroup) frontPlacketGroup.style.display = "none";
    if (chestPocketGroup) chestPocketGroup.style.display = "none";
    if (backCollarGroup) backCollarGroup.style.display = "block";

    const backTip = document.getElementById("back-collar-tip");
    if (backTip) backTip.style.display = isTipped ? "block" : "none";
  } else {
    if (frontNeckGroup) frontNeckGroup.style.display = "block";
    if (frontCollarGroup) frontCollarGroup.style.display = "block";
    if (frontPlacketGroup) frontPlacketGroup.style.display = "block";
    if (backCollarGroup) backCollarGroup.style.display = "none";

    if (chestPocketGroup) {
      if (selectedPocket === "pakai") {
        chestPocketGroup.style.display = "block";
        const ox = cut.pocketOffset?.x || 0;
        const oy = cut.pocketOffset?.y || 0;
        chestPocketGroup.setAttribute("transform", `translate(${ox}, ${oy})`);
      } else {
        chestPocketGroup.style.display = "none";
      }
    }

    const foldedFlaps = document.getElementById("folded-collar-flaps");
    const shanghaiBand = document.getElementById("shanghai-collar-band");
    const ribLines = document.getElementById("collar-rib-lines");
    const shirtStitch = document.getElementById("collar-shirt-stitch");
    const tippedStripes = document.getElementById("collar-tipped-stripes");

    if (selectedCollar === "shanghai") {
      if (foldedFlaps) foldedFlaps.style.display = "none";
      if (shanghaiBand) shanghaiBand.style.display = "block";
    } else {
      if (foldedFlaps) foldedFlaps.style.display = "block";
      if (shanghaiBand) shanghaiBand.style.display = "none";
      if (ribLines) {
        ribLines.style.display =
          selectedCollar === "rib" || selectedCollar === "tipped"
            ? "block"
            : "none";
      }
      if (shirtStitch) {
        shirtStitch.style.display =
          selectedCollar === "kemeja" ? "block" : "none";
      }
      if (tippedStripes) {
        tippedStripes.style.display =
          selectedCollar === "tipped" ? "block" : "none";
      }
    }

    const placketBox = document.getElementById("placket-box");
    const buttonsGroup = document.getElementById("placket-buttons-group");
    const zipperGroup = document.getElementById("placket-zipper-group");
    const btn3 = document.getElementById("btn-slot-3");

    if (placketBox) {
      placketBox.setAttribute(
        "d",
        selectedClosure === "kancing3"
          ? "M145.5 43 L154.5 43 L154.5 106 L145.5 106 Z"
          : "M145.5 43 L154.5 43 L154.5 94 L145.5 94 Z",
      );
    }

    if (selectedClosure === "resleting") {
      if (buttonsGroup) buttonsGroup.style.display = "none";
      if (zipperGroup) zipperGroup.style.display = "block";
    } else {
      if (buttonsGroup) buttonsGroup.style.display = "block";
      if (zipperGroup) zipperGroup.style.display = "none";
      if (btn3) {
        btn3.style.display = selectedClosure === "kancing3" ? "block" : "none";
      }
    }
  }

  updatePrintZoneOverlay();
}

function updatePoloColors(hex) {
  const dark = isDark(hex);
  const lum = getLuminance(hex);
  const outlineColor = dark && lum < 42 ? "#52525b" : "#18181b";
  const collarFill = shadeHex(hex, dark ? 8 : -9);
  const innerNeckFill = shadeHex(hex, dark ? -8 : -22);
  const placketFill = shadeHex(hex, dark ? 5 : -5);
  const subtleStitch = dark ? "rgba(255,255,255,0.22)" : "rgba(24,24,27,0.25)";
  const tipColor = dark ? "#f8fafc" : "#1e293b";

  const bodyEl = document.getElementById("polo-body");
  if (bodyEl) {
    bodyEl.setAttribute("fill", hex);
    bodyEl.setAttribute("stroke", outlineColor);
  }

  const neckInner = document.getElementById("polo-neck-inner");
  if (neckInner) {
    neckInner.setAttribute("fill", innerNeckFill);
    neckInner.setAttribute("stroke", outlineColor);
  }

  const neckSeam = document.getElementById("polo-neck-inner-seam");
  if (neckSeam) neckSeam.setAttribute("stroke", outlineColor);

  const neckTag = document.getElementById("polo-neck-tag");
  if (neckTag) {
    neckTag.setAttribute(
      "fill",
      dark ? "rgba(255,255,255,0.25)" : "rgba(24,24,27,0.18)",
    );
  }

  [
    "scuff-l",
    "scuff-r",
    "cuff-l",
    "cuff-r",
    "collar-flap-l",
    "collar-flap-r",
    "shanghai-band-body",
    "back-collar-band",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", collarFill);
      el.setAttribute("stroke", outlineColor);
    }
  });

  const placketBox = document.getElementById("placket-box");
  if (placketBox) {
    placketBox.setAttribute("fill", placketFill);
    placketBox.setAttribute("stroke", outlineColor);
  }

  const pocketBody = document.getElementById("chest-pocket-body");
  if (pocketBody) {
    pocketBody.setAttribute("fill", hex);
    pocketBody.setAttribute("stroke", outlineColor);
  }

  const pocketStitch = document.getElementById("chest-pocket-stitch");
  if (pocketStitch) pocketStitch.setAttribute("stroke", outlineColor);

  [
    "seam-shoulder-l",
    "seam-shoulder-r",
    "seam-armhole-l",
    "seam-armhole-r",
    "polo-slit-l",
    "polo-slit-r",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", outlineColor);
  });

  [
    "polo-hem-top",
    "polo-hem-bottom",
    "rib-tex-l",
    "rib-tex-r",
    "shirt-stitch-l",
    "shirt-stitch-r",
    "shanghai-band-stitch",
    "back-collar-stitch",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", subtleStitch);
  });

  [
    "scuff-tip-l",
    "scuff-tip-r",
    "lcuff-tip-l",
    "lcuff-tip-r",
    "tip-l1",
    "tip-l2",
    "tip-r1",
    "tip-r2",
    "back-collar-tip",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", tipColor);
  });
}

function updateStageLabels() {
  const cutObj = cuts[selectedCut] || cuts.reguler;
  const collarObj = collarCatalog[selectedCollar] || collarCatalog.rib;
  const closureObj = closureCatalog[selectedClosure] || closureCatalog.kancing2;

  const cutLabelEl = document.getElementById("active-cut-label");
  if (cutLabelEl) {
    cutLabelEl.textContent = `${cutObj.label} • ${collarObj.shortLabel} • ${closureObj.shortLabel}`;
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

// ================= KALKULASI ZONA PELETAKAN BORDIR / SABLON =================
function computePrintZoneGeometry(
  sideKey,
  printItem,
  cutKey = selectedCut,
  sleeveKey = selectedSleeve,
  pocketMode = selectedPocket,
) {
  if (!printItem || printItem.isNone || !printItem.mainZone) return null;

  const cut = cuts[cutKey] || cuts.reguler;
  const sleeveData = cut[sleeveKey] || cut.pendek;
  const mz = printItem.mainZone;
  let x = 0;
  let y = 0;
  let w = mz.w;
  let h = mz.h;
  let rot = 0;

  if (mz.anchor === "chestLeft") {
    if (pocketMode === "pakai") {
      const ox = cut.pocketOffset?.x || 0;
      const oy = cut.pocketOffset?.y || 0;
      w = Math.min(mz.w, 18);
      h = Math.min(mz.h, 18);
      x = 179.5 + ox - w / 2;
      y = 81 + oy;
    } else {
      x = cut.chestLeft.x;
      y = cut.chestLeft.y;
    }
  } else if (mz.anchor === "chestRight") {
    x = cut.chestRight.x;
    y = cut.chestRight.y;
  } else if (mz.anchor === "center") {
    const cx = cut.centerX || 150;
    let cy = 128 + (mz.offsetY || 0);
    if (sideKey === "depan") {
      cy = 72 + (mz.offsetY || 0);
      if (mz.h >= 45) cy = 136;
    } else if (sideKey === "belakang") {
      cy = mz.h <= 32 ? 86 : 132;
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
    selectedPocket,
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

// ================= KONTROL POTONGAN, KERAH, PLAKET, LENGAN & SAKU =================
function setCut(cutKey) {
  if (!cuts[cutKey]) return;
  selectedCut = cutKey;

  document.querySelectorAll(".cut-pill").forEach((btn) => {
    const active = btn.dataset.cut === cutKey;
    btn.classList.toggle("cut-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  renderPriceListTable();
  updatePoloGeometry();
  updateStageLabels();
  renderSizeChart(selectedCut, selectedSleeve);
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setCollar(collarKey) {
  if (!collarCatalog[collarKey]) return;
  selectedCollar = collarKey;

  document.querySelectorAll(".collar-pill").forEach((btn) => {
    const active = btn.dataset.collar === collarKey;
    btn.classList.toggle("collar-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  const hintEl = document.getElementById("collar-desc-hint");
  if (hintEl) hintEl.textContent = collarCatalog[collarKey].desc;

  updatePoloGeometry();
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
    btn.classList.toggle("closure-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  const closureSelect = document.getElementById("variant-closure-select");
  if (closureSelect) closureSelect.value = closureKey;

  updatePoloGeometry();
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
    btn.classList.toggle("sleeve-pill-active", active);
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

  updatePoloGeometry();
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

function setPocket(pocketKey) {
  if (pocketKey !== "tanpa" && pocketKey !== "pakai") return;
  selectedPocket = pocketKey;

  document.querySelectorAll(".pocket-pill").forEach((btn) => {
    const active = btn.dataset.pocket === pocketKey;
    btn.classList.toggle("pocket-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  const alertBox = document.getElementById("pocket-print-alert");
  if (alertBox) {
    alertBox.classList.toggle("hidden", pocketKey !== "pakai");
  }

  updatePoloGeometry();
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
  updatePoloGeometry();
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
  const svg = document.getElementById("polo-svg");
  if (!svg) return;
  if (!isSleeveZoomed) {
    svg.setAttribute("viewBox", "0 0 300 300");
    return;
  }
  if (mockupView === "lenganKanan") {
    svg.setAttribute(
      "viewBox",
      selectedSleeve === "panjang" ? "-15 30 120 165" : "0 30 120 140",
    );
  } else if (mockupView === "lenganKiri") {
    svg.setAttribute(
      "viewBox",
      selectedSleeve === "panjang" ? "195 30 120 165" : "180 30 120 140",
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

  updatePoloColors(colorObj.hex);
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

// ================= UPLOAD DESAIN & TITIK BORDIR / SABLON =================
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

function buildMiniPoloSVG(miniObj, isLongSleeve) {
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
      <path d="M24 5 Q30 8 36 5 L34 10 L30 11 L26 10 Z" fill="#e4e4e7" stroke="#18181b" stroke-width="1" />
      <rect x="29" y="10" width="2" height="9" fill="#ffffff" stroke="#18181b" stroke-width="0.9" />
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
      ${buildMiniPoloSVG(item.mini, selectedSleeve === "panjang")}
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
        : "Tanpa bordir/sablon";
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
        ? "Polo Polos (Tanpa Bordir/Sablon)"
        : `${activeCount} Sisi Aktif`;
  }
  if (summaryGrid) {
    summaryGrid.innerHTML = cells.join("");
  }
}

// ================= SIZE CHART =================
function renderSizeChart(cutKey, sleeveKey) {
  const cut = cuts[cutKey] || cuts.reguler;
  const sleeveData = cut[sleeveKey] || cut.pendek;
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

// ================= 4. VISUALISASI TUMPUKAN POLO LIPAT 3D =================
function buildFoldedPoloLayerSVG(
  y,
  hex,
  isTop,
  isLongSleeve,
  closureType,
  collarType,
  layerIndex,
) {
  const dark = isDark(hex);
  const topColor = hex;
  const frontEdgeColor = shadeHex(hex, dark ? -6 : -14);
  const rightEdgeColor = shadeHex(hex, dark ? -16 : -28);
  const creaseColor = shadeHex(hex, dark ? -22 : -36);
  const highlightColor = shadeHex(hex, dark ? 22 : 12);
  const collarRibColor = shadeHex(hex, dark ? 6 : -16);
  const collarInnerColor = shadeHex(hex, dark ? -18 : -40);
  const placketFillColor = shadeHex(hex, dark ? 4 : -8);
  const tipStripeColor = dark ? "#f8fafc" : "#1e293b";

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

    const placketGraphic =
      closureType === "resleting"
        ? `
          <line
            x1="84"
            y1="${y - 22.5}"
            x2="78.5"
            y2="${y - 13.5}"
            stroke="#1e293b"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <line
            x1="84"
            y1="${y - 22.5}"
            x2="78.5"
            y2="${y - 13.5}"
            stroke="#cbd5e1"
            stroke-width="0.9"
            stroke-dasharray="1.3 1.3"
          />
        `
        : `
          <path
            d="M82 ${y - 23} L86.5 ${y - 22.5} L81 ${y - 13.5} L76.5 ${y - 14} Z"
            fill="${placketFillColor}"
            stroke="${creaseColor}"
            stroke-width="0.55"
          />
          <circle cx="83" cy="${y - 20.4}" r="0.95" fill="#f8fafc" stroke="#18181b" stroke-width="0.45" />
          <circle cx="80.6" cy="${y - 16.4}" r="0.95" fill="#f8fafc" stroke="#18181b" stroke-width="0.45" />
        `;

    const collarGraphic =
      collarType === "shanghai"
        ? `
          <path
            d="M68 ${y - 30.8} Q86 ${y - 35.5} 104 ${y - 27.2} L101 ${y - 25} Q86 ${y - 30.5} 71 ${y - 28.5} Z"
            fill="${collarRibColor}"
            stroke="${creaseColor}"
            stroke-width="0.65"
          />
          <path
            d="M71 ${y - 29} Q86 ${y - 31.8} 101 ${y - 25.8} Q85 ${y - 18.5} 71 ${y - 29} Z"
            fill="${collarInnerColor}"
          />
        `
        : `
          <path
            d="M70 ${y - 30.2} Q86 ${y - 33.8} 102 ${y - 26.8} Q85 ${y - 19} 70 ${y - 30.2} Z"
            fill="${collarInnerColor}"
          />
          <path
            d="M68 ${y - 30.8} Q77 ${y - 26} 84.5 ${y - 22.2} L74.5 ${y - 19.5} Q68.5 ${y - 24.5} 68 ${y - 30.8} Z"
            fill="${collarRibColor}"
            stroke="${creaseColor}"
            stroke-width="0.65"
            stroke-linejoin="round"
          />
          <path
            d="M104 ${y - 27.2} Q93.5 ${y - 24.2} 84.5 ${y - 22.2} L91.5 ${y - 17.8} Q99.5 ${y - 21.5} 104 ${y - 27.2} Z"
            fill="${collarRibColor}"
            stroke="${creaseColor}"
            stroke-width="0.65"
            stroke-linejoin="round"
          />
          ${
            collarType === "tipped"
              ? `
                <path
                  d="M69.2 ${y - 29.2} L75.2 ${y - 20.8} L82.8 ${y - 22.8}"
                  fill="none"
                  stroke="${tipStripeColor}"
                  stroke-width="0.7"
                />
                <path
                  d="M102.5 ${y - 26.2} L91.2 ${y - 19.2} L85.5 ${y - 22.4}"
                  fill="none"
                  stroke="${tipStripeColor}"
                  stroke-width="0.7"
                />
              `
              : ""
          }
        `;

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
      ${placketGraphic}
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
        closure: v.closure || "kancing2",
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
        layersHTML += buildFoldedPoloLayerSVG(
          y,
          layer.hex,
          isTop,
          layer.isLongSleeve,
          layer.closure,
          selectedCollar,
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
      closureCatalog[variant.closure]?.shortLabel || "Kancing 2";

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
  if (closureSelect) closureSelect.value = activeVar.closure || "kancing2";

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
  selectedClosure = activeVar.closure || "kancing2";

  document.querySelectorAll(".sleeve-pill").forEach((btn) => {
    const active = btn.dataset.sleeve === selectedSleeve;
    btn.classList.toggle("sleeve-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  document.querySelectorAll(".closure-pill").forEach((btn) => {
    const active = btn.dataset.closure === selectedClosure;
    btn.classList.toggle("closure-pill-active", active);
    btn.classList.toggle("bg-[#fafaf8]", !active);
    btn.classList.toggle("text-zinc-800", !active);
  });

  updatePoloGeometry();
  updatePoloColors(selectedColor.hex);
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
    closure: currentVar.closure || "kancing2",
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
    closureCatalog[activeVar.closure]?.shortLabel || "Kancing 2";

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
  const collarObj = collarCatalog[selectedCollar] || collarCatalog.rib;
  const pocketText =
    selectedPocket === "pakai" ? "Saku Dada Kiri (+3rb)" : "Tanpa Saku";

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
    if (!item || item.isNone) return "Tanpa bordir/sablon";
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
      v.sleeve === "panjang" ? "Lengan Panjang (+7rb)" : "Lengan Pendek";
    const closureLabel =
      v.closure === "resleting"
        ? "Resleting (+8rb)"
        : closureCatalog[v.closure]?.label || "Kancing 2";
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
    "Halo Atensi Konveksi, saya mau kirim Spesifikasi Order & konsultasi desain Polo Shirt custom:",
    `• Potongan: ${cuts[selectedCut].label}`,
    `• Jenis Bahan: ${fabric.name}`,
    `• Model Kerah: ${collarObj.label}${collarObj.extra > 0 ? " (+2rb)" : ""}`,
    `• Variasi Saku: ${pocketText}`,
    `• Bordir/Sablon Depan: ${formatSideWA("depan")}`,
    `• Bordir/Sablon Belakang: ${formatSideWA("belakang")}`,
    `• Lengan Kanan: ${formatSideWA("lenganKanan")}`,
    `• Lengan Kiri: ${formatSideWA("lenganKiri")}`,
    `• Rincian Varian & Jumlah (Total ${grandTotal} pcs):`,
    ...variantsWAText,
    `• Estimasi Total Biaya: ${formatRupiah(totalEstimatedPrice)} (maks. 3 titik bordir / sablon)`,
  ].join("\n");
}

function updateOrderTotalsAndWA() {
  const fabric = getSelectedFabric();
  const collarObj = collarCatalog[selectedCollar] || collarCatalog.rib;
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
          closureCatalog[v.closure]?.shortLabel || "Kancing 2";

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
        activeVar.sleeve === "panjang" ? "L. Panjang (+7rb)" : "L. Pendek";
      const closureTxt =
        activeVar.closure === "resleting"
          ? "Resleting (+8rb)"
          : closureCatalog[activeVar.closure]?.shortLabel || "Kancing 2";
      const extraModelNotes = [];
      if (collarObj.extra > 0) extraModelNotes.push("Kerah List (+2rb)");
      if (selectedPocket === "pakai") extraModelNotes.push("Saku (+3rb)");
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
          v.sleeve === "panjang" ? "L. Panjang (+7rb)" : "L. Pendek";
        const closureNote =
          v.closure === "resleting"
            ? "Resleting (+8rb)"
            : closureCatalog[v.closure]?.shortLabel || "Kancing 2";

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

function buildStandalonePoloSVGString(
  viewKey,
  cutKey,
  sleeveKey,
  colorItem,
  collarKey,
  closureKey,
  pocketKey,
) {
  const cut = cuts[cutKey] || cuts.reguler;
  const sleeveData = cut[sleeveKey] || cut.pendek;
  const isBack = viewKey === "belakang";
  const isTipped = collarKey === "tipped";

  const dark = isDark(colorItem.hex);
  const lum = getLuminance(colorItem.hex);
  const outlineColor = dark && lum < 42 ? "#52525b" : "#18181b";
  const collarFill = shadeHex(colorItem.hex, dark ? 8 : -9);
  const innerNeckFill = shadeHex(colorItem.hex, dark ? -8 : -22);
  const placketFill = shadeHex(colorItem.hex, dark ? 5 : -5);
  const subtleStitch = dark ? "rgba(255,255,255,0.22)" : "rgba(24,24,27,0.25)";
  const tipColor = dark ? "#f8fafc" : "#1e293b";
  const tagFill = dark ? "rgba(255,255,255,0.25)" : "rgba(24,24,27,0.18)";

  let vb = "0 0 300 300";
  if (viewKey === "lenganKanan") {
    vb = sleeveKey === "panjang" ? "-15 30 120 165" : "0 30 120 140";
  } else if (viewKey === "lenganKiri") {
    vb = sleeveKey === "panjang" ? "195 30 120 165" : "180 30 120 140";
  }

  const bodyPath = isBack ? sleeveData.bodyBack : sleeveData.body;

  const frontNeckMarkup = isBack
    ? ""
    : `
      <path d="M123 20 Q150 24 177 20 L174 34 Q150 38 126 34 Z" fill="${innerNeckFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
      <path d="M128 33 Q150 35 172 33" fill="none" stroke="${outlineColor}" stroke-width="1.15" stroke-linecap="round" />
      <rect x="145" y="25" width="10" height="4" rx="0.8" fill="${tagFill}" />
    `;

  const cuffsMarkup =
    sleeveKey === "panjang"
      ? `
        <path d="${sleeveData.cuffL}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        <path d="${sleeveData.cuffR}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        ${
          isTipped
            ? `
              <path d="${sleeveData.lcuffTipL}" fill="none" stroke="${tipColor}" stroke-width="1.25" />
              <path d="${sleeveData.lcuffTipR}" fill="none" stroke="${tipColor}" stroke-width="1.25" />
            `
            : ""
        }
      `
      : `
        <path d="${sleeveData.scuffL}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        <path d="${sleeveData.scuffR}" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        ${
          isTipped
            ? `
              <path d="${sleeveData.scuffTipL}" fill="none" stroke="${tipColor}" stroke-width="1.3" />
              <path d="${sleeveData.scuffTipR}" fill="none" stroke="${tipColor}" stroke-width="1.3" />
            `
            : ""
        }
      `;

  let frontDetailsMarkup = "";
  if (isBack) {
    frontDetailsMarkup = `
      <path d="M123 20 Q150 23 177 20 L183 31 Q150 37 117 31 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
      <path d="M119 29.5 Q150 35 181 29.5" fill="none" stroke="${subtleStitch}" stroke-width="0.9" />
      ${
        isTipped
          ? `<path d="M118.5 29.5 Q150 35.2 181.5 29.5" fill="none" stroke="${tipColor}" stroke-width="1.3" />`
          : ""
      }
    `;
  } else {
    const ox = cut.pocketOffset?.x || 0;
    const oy = cut.pocketOffset?.y || 0;
    const pocketMarkup =
      pocketKey === "pakai"
        ? `
          <g transform="translate(${ox}, ${oy})">
            <path d="M166 76 L193 76 L193 102 L179.5 109 L166 102 Z" fill="${colorItem.hex}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
            <path d="M167 81 L192 81" fill="none" stroke="${outlineColor}" stroke-width="1" />
          </g>
        `
        : "";

    const placketD =
      closureKey === "kancing3"
        ? "M145.5 43 L154.5 43 L154.5 106 L145.5 106 Z"
        : "M145.5 43 L154.5 43 L154.5 94 L145.5 94 Z";

    const closureHardwareMarkup =
      closureKey === "resleting"
        ? `
          <line x1="150" y1="44" x2="150" y2="108" stroke="#1e293b" stroke-width="3" />
          <line x1="150" y1="44" x2="150" y2="108" stroke="#cbd5e1" stroke-width="1.8" stroke-dasharray="2 2" />
          <rect x="147.8" y="58" width="4.4" height="5.5" rx="1" fill="#94a3b8" stroke="#18181b" stroke-width="0.8" />
          <rect x="148.4" y="63" width="3.2" height="7.5" rx="1" fill="#e2e8f0" stroke="#18181b" stroke-width="0.8" />
        `
        : `
          <circle cx="150" cy="48" r="2.15" fill="#f8fafc" stroke="#18181b" stroke-width="1.15" />
          <circle cx="150" cy="73" r="2.15" fill="#f8fafc" stroke="#18181b" stroke-width="1.15" />
          ${
            closureKey === "kancing3"
              ? `<circle cx="150" cy="97" r="2.15" fill="#f8fafc" stroke="#18181b" stroke-width="1.15" />`
              : ""
          }
        `;

    let collarMarkup = "";
    if (collarKey === "shanghai") {
      collarMarkup = `
        <path d="M122 25 Q150 37 178 25 L182 34 Q150 47 118 34 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        <path d="M121 28 Q150 40 179 28 M119 32 Q150 44 181 32" fill="none" stroke="${subtleStitch}" stroke-width="0.9" stroke-dasharray="2 2" />
      `;
    } else {
      const ribTex =
        collarKey === "rib" || collarKey === "tipped"
          ? `
            <path d="M121 26 L133 49 M127 29 L139 48 M134 33 L144 46" fill="none" stroke="${subtleStitch}" stroke-width="0.7" />
            <path d="M179 26 L167 49 M173 29 L161 48 M166 33 L156 46" fill="none" stroke="${subtleStitch}" stroke-width="0.7" />
          `
          : "";
      const shirtStitch =
        collarKey === "kemeja"
          ? `
            <path d="M119.5 31 L133.5 50.5 L148 43" fill="none" stroke="${subtleStitch}" stroke-width="1" stroke-dasharray="2 2" />
            <path d="M180.5 31 L166.5 50.5 L152 43" fill="none" stroke="${subtleStitch}" stroke-width="1" stroke-dasharray="2 2" />
          `
          : "";
      const tippedLines =
        collarKey === "tipped"
          ? `
            <path d="M119.5 31 L133.5 50.5 L148 43" fill="none" stroke="${tipColor}" stroke-width="1.3" stroke-linejoin="round" />
            <path d="M121.8 30.2 L134.2 47.4 L146 41.4" fill="none" stroke="${tipColor}" stroke-width="0.9" stroke-linejoin="round" />
            <path d="M180.5 31 L166.5 50.5 L152 43" fill="none" stroke="${tipColor}" stroke-width="1.3" stroke-linejoin="round" />
            <path d="M178.2 30.2 L165.8 47.4 L154 41.4" fill="none" stroke="${tipColor}" stroke-width="0.9" stroke-linejoin="round" />
          `
          : "";

      collarMarkup = `
        <path d="M123 20 Q136 33 150 44 L133 53 Q121 41 117 31 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
        <path d="M177 20 Q164 33 150 44 L167 53 Q179 41 183 31 Z" fill="${collarFill}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
        ${ribTex}
        ${shirtStitch}
        ${tippedLines}
      `;
    }

    frontDetailsMarkup = `
      ${pocketMarkup}
      <path d="${placketD}" fill="${placketFill}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
      ${closureHardwareMarkup}
      ${collarMarkup}
    `;
  }

  const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">
      <defs>
        <linearGradient id="woPoloLightH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.06" />
          <stop offset="16%" stop-color="#000000" stop-opacity="0.01" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.05" />
          <stop offset="84%" stop-color="#000000" stop-opacity="0.01" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.06" />
        </linearGradient>
        <linearGradient id="woPoloLightV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04" />
          <stop offset="50%" stop-color="#000000" stop-opacity="0" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      ${frontNeckMarkup}
      <path d="${bodyPath}" fill="${colorItem.hex}" stroke="${outlineColor}" stroke-width="1.45" stroke-linejoin="round" stroke-linecap="round" />
      <path d="${bodyPath}" fill="url(#woPoloLightH)" style="mix-blend-mode:multiply" />
      <path d="${bodyPath}" fill="url(#woPoloLightV)" style="mix-blend-mode:multiply" />
      ${cuffsMarkup}
      <path d="${cut.shoulderL}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <path d="${cut.shoulderR}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <path d="${sleeveData.armholeL}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <path d="${sleeveData.armholeR}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <line x1="${cut.hemX1}" y1="${cut.hemTopY}" x2="${cut.hemX2}" y2="${cut.hemTopY}" stroke="${subtleStitch}" stroke-width="0.9" stroke-dasharray="2.5 2.5" />
      <line x1="${cut.hemX1}" y1="${cut.hemBotY}" x2="${cut.hemX2}" y2="${cut.hemBotY}" stroke="${subtleStitch}" stroke-width="0.9" stroke-dasharray="2.5 2.5" />
      <line x1="${cut.slitL.x}" y1="${cut.slitL.y1}" x2="${cut.slitL.x}" y2="${cut.slitL.y2}" stroke="${outlineColor}" stroke-width="1.6" />
      <line x1="${cut.slitR.x}" y1="${cut.slitR.y1}" x2="${cut.slitR.x}" y2="${cut.slitR.y2}" stroke="${outlineColor}" stroke-width="1.6" />
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
  collarKey,
  closureKey,
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

  const { svgStr, vb } = buildStandalonePoloSVGString(
    viewKey,
    cutKey,
    sleeveKey,
    colorItem,
    collarKey,
    closureKey,
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
  const poloImg = await loadImageAsync(svgUrl);
  if (poloImg) {
    ctx.drawImage(poloImg, destX, destY, destW, destH);
  }
  URL.revokeObjectURL(svgUrl);

  const activePrint = selectedPrints[viewKey];
  const geo = computePrintZoneGeometry(
    viewKey,
    activePrint,
    cutKey,
    sleeveKey,
    pocketKey,
  );

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
      ? "Polos (Tanpa Bordir/Sablon)"
      : `${activePrint.name} (${activePrint.dim})${rotSuffix}`;
  ctx.fillText(caption, px + pw / 2, py + ph - 12);
  ctx.textAlign = "left";
}

async function generateVisualSpecCardImage() {
  const fabric = getSelectedFabric();
  const collarObj = collarCatalog[selectedCollar] || collarCatalog.rib;
  const activeVar = getActiveVariant();
  const activeClosure = activeVar.closure || selectedClosure || "kancing2";

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
  ctx.fillText("SPESIFIKASI ORDER POLO SHIRT", 44, 57);

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
  ctx.fillText("1. VISUAL MOCKUP & TITIK BORDIR / SABLON", 68, curY + 33);

  ctx.fillStyle = "#64748b";
  ctx.font = "600 13px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "right";
  const previewSleeveLabel =
    activeVar.sleeve === "panjang" ? "Lengan Panjang" : "Lengan Pendek";
  const previewClosureLabel =
    closureCatalog[activeClosure]?.shortLabel || "Kancing 2";
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
    selectedCollar,
    activeClosure,
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
    selectedCollar,
    activeClosure,
    selectedPocket,
  );

  let afterPanelsY = panelsStartY + frontBackBlockH + 14;

  if (hasAnySleevePrint) {
    if (hasRightSleevePrint && hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: halfW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "BORDIR/SABLON LENGAN KANAN (+31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        selectedCollar,
        activeClosure,
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
        "BORDIR/SABLON LENGAN KIRI (-31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        selectedCollar,
        activeClosure,
        selectedPocket,
      );
    } else if (hasRightSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "BORDIR/SABLON LENGAN KANAN (+31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        selectedCollar,
        activeClosure,
        selectedPocket,
      );
    } else if (hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKiri",
        "BORDIR/SABLON LENGAN KIRI (-31°)",
        selectedCut,
        activeVar.sleeve,
        activeVar.color,
        selectedCollar,
        activeClosure,
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
  ctx.fillText("VARIAN KAIN:", 84, afterPanelsY + 22);

  let swX = 186;
  orderVariants.forEach((v) => {
    const slv = v.sleeve === "panjang" ? "L.Pjg" : "L.Pdk";
    const cls =
      v.closure === "resleting"
        ? "Zip"
        : closureCatalog[v.closure]?.shortLabel || "Knc 2";
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

  // 3. SPESIFIKASI BAHAN & TITIK BORDIR / SABLON
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
  const collarTextSpec = `${collarObj.shortLabel}${collarObj.extra > 0 ? " (+2rb)" : ""}`;
  const pocketTextSpec =
    selectedPocket === "pakai" ? "Saku Dada (+3rb)" : "Tanpa Saku";

  const leftRows = [
    ["Model Potongan", cuts[selectedCut].label],
    ["Jenis Bahan", fabric.name],
    ["Kerah & Saku", `${collarTextSpec} • ${pocketTextSpec}`],
    ["Harga Dasar Kain", `${formatRupiah(baseRegPrice)} / pcs`],
    ["Ketentuan Tambahan", "L.Pjg +7rb • Zip +8rb • 2XL+ +5rb"],
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
    "3. DETAIL UKURAN & TITIK BORDIR / SABLON",
    rightBoxX + 24,
    curY + 34,
  );

  const formatSpecSide = (sideKey) => {
    const item = selectedPrints[sideKey];
    if (!item || item.isNone) return "Polos (Tanpa Bordir/Sablon)";
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
    ["Cakupan Harga", "Maks. 3 titik bordir / sablon"],
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

  const variantColW = 340;
  const qtyColW = 85;
  const subtotalColW = 160;
  const sizesAreaW = tblW - variantColW - qtyColW - subtotalColW;
  const singleSizeW = sizesAreaW / sizeKeys.length;

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 11px system-ui, -apple-system, sans-serif";
  ctx.fillText("VARIAN WARNA, LENGAN & PLAKET", tblX + 14, tblY + 24);

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

    const sleeveShort = v.sleeve === "panjang" ? "L.Pjg" : "L.Pdk";
    const closureShort = closureCatalog[v.closure]?.shortLabel || "Kancing 2";
    ctx.fillStyle = "#18181b";
    ctx.font = "700 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${rIdx + 1}. ${v.color.name} (${sleeveShort} • ${closureShort})`,
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
  if (!modal || !imgEl) return;

  const dataUrl = await generateVisualSpecCardImage();
  imgEl.src = dataUrl;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  refreshIcons();
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
  link.download = `Spesifikasi-Order-Polo-Atensi-Konveksi-${Date.now()}.png`;
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
        <title>Spesifikasi Order Polo Shirt - Atensi Konveksi</title>
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
        `Spesifikasi-Order-Polo-Atensi-Konveksi-${Date.now()}.png`,
        { type: "image/png" },
      );
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Spesifikasi Order Polo Shirt - Atensi Konveksi",
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
  initFilterBar();
  populateVariantColorSelect();
  updatePoloGeometry();
  updatePoloColors(selectedColor.hex);
  updateStageLabels();
  renderSwatches();
  renderDesignSlots();
  renderPrintOptions(activeSide);
  updateSablonSummary();
  renderSizeChart(selectedCut, selectedSleeve);
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
