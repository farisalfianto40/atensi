const WHATSAPP_NUMBER = "62895413909591";
const WHATSAPP_DISPLAY = "+62 895-4139-09591";

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// ================= DATA PRICE LIST BAHAN, MODEL KORSA, KERAH, PLAKET, BET ATAS, SAKU & VARIASI WARNA =================
const LONG_SLEEVE_EXTRA = 10000;
const ZIPPER_CLOSURE_EXTRA = 8000;
const TWO_TONE_EXTRA = 5000;

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
    id: "american-drill",
    name: "American Drill (Unions / Verlando)",
    shortName: "American Drill",
    prices: {
      pdh: 115000,
      pdl: 125000,
      tactical: 135000,
    },
  },
  {
    id: "japan-drill",
    name: "Japan Drill (Nagata Original)",
    shortName: "Japan Drill",
    prices: {
      pdh: 135000,
      pdl: 145000,
      tactical: 155000,
    },
  },
  {
    id: "ripstop-tornado",
    name: "Ripstop Tornado / Cotton Outdoor",
    shortName: "Ripstop Tornado",
    prices: {
      pdh: 140000,
      pdl: 150000,
      tactical: 160000,
    },
  },
  {
    id: "hisofy-drill",
    name: "Hisofy Drill (Premium Soft)",
    shortName: "Hisofy Drill",
    prices: {
      pdh: 145000,
      pdl: 155000,
      tactical: 165000,
    },
  },
];

const collarCatalog = {
  kemeja: {
    label: "Kerah Kemeja (Standar)",
    shortLabel: "Kerah Kemeja",
    extra: 0,
    desc: "Kerah kemeja standar berkaki tegas, rapi untuk PDH & kantor",
  },
  shanghai: {
    label: "Kerah Shanghai (Mandarin)",
    shortLabel: "Kerah Shanghai",
    extra: 0,
    desc: "Kerah berdiri tegak tanpa daun lipat, modern & minimalis",
  },
  buttondown: {
    label: "Kerah Button-Down",
    shortLabel: "Button-Down",
    extra: 0,
    desc: "Kerah kemeja dengan kancing kecil pengunci di ujung daun kerah",
  },
  revere: {
    label: "Kerah Revere (Kerah Buka)",
    shortLabel: "Kerah Revere",
    extra: 0,
    desc: "Kerah lipat terbuka ala kemeja lapangan / sport kasual",
  },
};

const closureCatalog = {
  kancing_luar: {
    label: "Kancing Luar (Tampak)",
    shortLabel: "Kancing Luar",
    extra: 0,
  },
  kancing_tertutup: {
    label: "Kancing Tertutup (Hidden)",
    shortLabel: "Kancing Tutup",
    extra: 2000,
  },
  resleting: {
    label: "Resleting Full (Zipper)",
    shortLabel: "Resleting",
    extra: ZIPPER_CLOSURE_EXTRA,
  },
};

const epauletCatalog = {
  tanpa: {
    label: "Tanpa Bet Atas",
    shortLabel: "Tanpa Bet",
    extra: 0,
  },
  bet_kancing: {
    label: "Bet Atas Kancing (Skoder)",
    shortLabel: "Bet Kancing",
    extra: 3000,
  },
  bet_velcro: {
    label: "Bet Atas Tactical (Velcro)",
    shortLabel: "Bet Tactical",
    extra: 5000,
  },
};

const pocketCatalog = {
  tanpa: {
    label: "Tanpa Saku",
    shortLabel: "Tanpa Saku",
    extra: 0,
    hasLeftPocket: false,
    hasRightPocket: false,
  },
  tempel1: {
    label: "1 Saku Tempel (Dada Kiri + Slot Pulpen)",
    shortLabel: "1 Saku Tempel",
    extra: 0,
    hasLeftPocket: true,
    hasRightPocket: false,
  },
  tempel2: {
    label: "2 Saku Tempel (Kanan & Kiri)",
    shortLabel: "2 Saku Tempel",
    extra: 2000,
    hasLeftPocket: true,
    hasRightPocket: true,
  },
  tutup2: {
    label: "2 Saku Tutup / Flap PDL Berkancing",
    shortLabel: "2 Saku Tutup PDL",
    extra: 5000,
    hasLeftPocket: true,
    hasRightPocket: true,
  },
  bobok: {
    label: "Saku Bobok / Paspoal Dalam (Dada Kiri)",
    shortLabel: "Saku Bobok",
    extra: 2000,
    hasLeftPocket: true,
    hasRightPocket: false,
  },
};

const colorLayoutCatalog = {
  polos: {
    label: "1 Warna Polos",
    shortLabel: "Polos",
    extra: 0,
    desc: "Seluruh baju menggunakan 1 warna kain utama",
  },
  lengan: {
    label: "Kombinasi Lengan (Two-Tone)",
    shortLabel: "Variasi Lengan",
    extra: TWO_TONE_EXTRA,
    desc: "Badan warna utama + kedua lengan baju menggunakan warna kombinasi",
  },
  setengah_horizontal: {
    label: "Setengah Baju Atas–Bawah",
    shortLabel: "Setengah Atas",
    extra: TWO_TONE_EXTRA,
    desc: "Bagian dada & bahu atas warna kombinasi + badan bawah warna utama",
  },
  setengah_vertikal: {
    label: "Setengah Baju Kanan–Kiri",
    shortLabel: "Setengah Ka-Ki",
    extra: TWO_TONE_EXTRA,
    desc: "Belah tengah vertikal: sisi kanan warna utama & sisi kiri warna kombinasi",
  },
  list_kombinasi: {
    label: "Kombinasi Kerah, Plaket & Saku",
    shortLabel: "Aksen Kerah/Saku",
    extra: TWO_TONE_EXTRA,
    desc: "Badan & lengan warna utama + kerah, plaket, bet, & saku warna aksen",
  },
  custom_bebas: {
    label: "Custom Bebas (Badan, Atas/Lengan & Aksen)",
    shortLabel: "Custom 3 Zona",
    extra: TWO_TONE_EXTRA,
    desc: "Kombinasi 3 zona warna sekaligus: Badan, Lengan + Dada Atas, & Aksen",
  },
};

const cuts = {
  pdh: {
    label: "PDH / Korsa",
    pendek: {
      body: "M117 31 L72 45 L26 118 L70 137 L78 104 L78 274 L222 274 L222 104 L230 137 L274 118 L228 45 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L72 45 L26 118 L70 137 L78 104 L78 274 L222 274 L222 104 L230 137 L274 118 L228 45 L183 31 Q150 37 117 31 Z",
      armholeL: "M72 45 Q79 74 78 104",
      armholeR: "M228 45 Q221 74 222 104",
      scuffL: "M29.2 112.8 L73.2 131.8 L70 137 L26 118 Z",
      scuffR: "M270.8 112.8 L226.8 131.8 L230 137 L274 118 Z",
      sleeveZoneR: "M72 45 L-20 45 L-20 220 L78 220 L78 104 Q79 74 72 45 Z",
      sleeveZoneL:
        "M228 45 L320 45 L320 220 L222 220 L222 104 Q221 74 228 45 Z",
      sleeveRAnchor: { x: 54, y: 94, rot: 32 },
      sleeveLAnchor: { x: 246, y: 94, rot: -32 },
      sizes: [
        { size: "S", p: 68, l: 49, pl: 23 },
        { size: "M", p: 71, l: 52, pl: 24 },
        { size: "L", p: 74, l: 55, pl: 25 },
        { size: "XL", p: 77, l: 58, pl: 26 },
        { size: "2XL", p: 80, l: 61, pl: 27 },
        { size: "3XL", p: 82, l: 64, pl: 28 },
        { size: "4XL", p: 84, l: 67, pl: 29 },
        { size: "5XL", p: 86, l: 70, pl: 30 },
      ],
    },
    panjang: {
      body: "M117 31 L72 45 L-1 170 L27 184 L78 108 L78 274 L222 274 L222 108 L273 184 L301 170 L228 45 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L72 45 L-1 170 L27 184 L78 108 L78 274 L222 274 L222 108 L273 184 L301 170 L228 45 L183 31 Q150 37 117 31 Z",
      armholeL: "M72 45 Q79 76 78 108",
      armholeR: "M228 45 Q221 76 222 108",
      cuffL: "M4.5 161 L32.5 175 L27 184 L-1 170 Z",
      cuffR: "M295.5 161 L267.5 175 L273 184 L301 170 Z",
      sleeveZoneR: "M72 45 L-25 45 L-25 220 L78 220 L78 108 Q79 76 72 45 Z",
      sleeveZoneL:
        "M228 45 L325 45 L325 220 L222 220 L222 108 Q221 76 228 45 Z",
      sleeveRAnchor: { x: 43, y: 118, rot: 32 },
      sleeveLAnchor: { x: 257, y: 118, rot: -32 },
      sizes: [
        { size: "S", p: 68, l: 49, pl: 58 },
        { size: "M", p: 71, l: 52, pl: 60 },
        { size: "L", p: 74, l: 55, pl: 62 },
        { size: "XL", p: 77, l: 58, pl: 64 },
        { size: "2XL", p: 80, l: 61, pl: 66 },
        { size: "3XL", p: 82, l: 64, pl: 67 },
        { size: "4XL", p: 84, l: 67, pl: 68 },
        { size: "5XL", p: 86, l: 70, pl: 69 },
      ],
    },
    shoulderL: "M117 31 L72 45",
    shoulderR: "M183 31 L228 45",
    hemX1: 79,
    hemX2: 221,
    hemTopY: 268,
    hemBotY: 270.5,
    slitL: { x: 78, y1: 264, y2: 274 },
    slitR: { x: 222, y1: 264, y2: 274 },
    backYoke: "M73 56 L227 56",
    chestLeft: { x: 168, y: 62 },
    chestRight: { x: 106, y: 62 },
    centerX: 150,
    chestTopY: 66,
  },
  pdl: {
    label: "PDL Lapangan",
    pendek: {
      body: "M117 31 L69 46 L22 120 L68 139 L76 106 L76 276 L224 276 L224 106 L232 139 L278 120 L231 46 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L69 46 L22 120 L68 139 L76 106 L76 276 L224 276 L224 106 L232 139 L278 120 L231 46 L183 31 Q150 37 117 31 Z",
      armholeL: "M69 46 Q77 75 76 106",
      armholeR: "M231 46 Q223 75 224 106",
      scuffL: "M25.2 114.8 L71.2 133.8 L68 139 L22 120 Z",
      scuffR: "M274.8 114.8 L228.8 133.8 L232 139 L278 120 Z",
      sleeveZoneR: "M69 46 L-20 46 L-20 220 L76 220 L76 106 Q77 75 69 46 Z",
      sleeveZoneL:
        "M231 46 L320 46 L320 220 L224 220 L224 106 Q223 75 231 46 Z",
      sleeveRAnchor: { x: 51, y: 95, rot: 32 },
      sleeveLAnchor: { x: 249, y: 95, rot: -32 },
      sizes: [
        { size: "S", p: 69, l: 50, pl: 24 },
        { size: "M", p: 72, l: 53, pl: 25 },
        { size: "L", p: 75, l: 56, pl: 26 },
        { size: "XL", p: 78, l: 59, pl: 27 },
        { size: "2XL", p: 81, l: 62, pl: 28 },
        { size: "3XL", p: 83, l: 65, pl: 29 },
        { size: "4XL", p: 85, l: 68, pl: 30 },
        { size: "5XL", p: 87, l: 71, pl: 31 },
      ],
    },
    panjang: {
      body: "M117 31 L69 46 L-3 172 L25 186 L76 110 L76 276 L224 276 L224 110 L275 186 L303 172 L231 46 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L69 46 L-3 172 L25 186 L76 110 L76 276 L224 276 L224 110 L275 186 L303 172 L231 46 L183 31 Q150 37 117 31 Z",
      armholeL: "M69 46 Q77 77 76 110",
      armholeR: "M231 46 Q223 77 224 110",
      cuffL: "M2.5 163 L30.5 177 L25 186 L-3 172 Z",
      cuffR: "M297.5 163 L269.5 177 L275 186 L303 172 Z",
      sleeveZoneR: "M69 46 L-25 46 L-25 220 L76 220 L76 110 Q77 77 69 46 Z",
      sleeveZoneL:
        "M231 46 L325 46 L325 220 L224 220 L224 110 Q223 77 231 46 Z",
      sleeveRAnchor: { x: 40, y: 120, rot: 32 },
      sleeveLAnchor: { x: 260, y: 120, rot: -32 },
      sizes: [
        { size: "S", p: 69, l: 50, pl: 59 },
        { size: "M", p: 72, l: 53, pl: 61 },
        { size: "L", p: 75, l: 56, pl: 63 },
        { size: "XL", p: 78, l: 59, pl: 65 },
        { size: "2XL", p: 81, l: 62, pl: 67 },
        { size: "3XL", p: 83, l: 65, pl: 68 },
        { size: "4XL", p: 85, l: 68, pl: 69 },
        { size: "5XL", p: 87, l: 71, pl: 70 },
      ],
    },
    shoulderL: "M117 31 L69 46",
    shoulderR: "M183 31 L231 46",
    hemX1: 77,
    hemX2: 223,
    hemTopY: 270,
    hemBotY: 272.5,
    slitL: { x: 76, y1: 265, y2: 276 },
    slitR: { x: 224, y1: 265, y2: 276 },
    backYoke: "M70 57 L230 57",
    chestLeft: { x: 168, y: 62 },
    chestRight: { x: 106, y: 62 },
    centerX: 150,
    chestTopY: 66,
  },
  tactical: {
    label: "Tactical",
    pendek: {
      body: "M117 31 L67 47 L20 122 L66 141 L74 108 L74 278 L226 278 L226 108 L234 141 L280 122 L233 47 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L67 47 L20 122 L66 141 L74 108 L74 278 L226 278 L226 108 L234 141 L280 122 L233 47 L183 31 Q150 37 117 31 Z",
      armholeL: "M67 47 Q75 77 74 108",
      armholeR: "M233 47 Q225 77 226 108",
      scuffL: "M23.2 116.8 L69.2 135.8 L66 141 L20 122 Z",
      scuffR: "M276.8 116.8 L230.8 135.8 L234 141 L280 122 Z",
      sleeveZoneR: "M67 47 L-20 47 L-20 220 L74 220 L74 108 Q75 77 67 47 Z",
      sleeveZoneL:
        "M233 47 L320 47 L320 220 L226 220 L226 108 Q225 77 233 47 Z",
      sleeveRAnchor: { x: 49, y: 96, rot: 32 },
      sleeveLAnchor: { x: 251, y: 96, rot: -32 },
      sizes: [
        { size: "S", p: 70, l: 51, pl: 24 },
        { size: "M", p: 73, l: 54, pl: 25 },
        { size: "L", p: 76, l: 57, pl: 26 },
        { size: "XL", p: 79, l: 60, pl: 27 },
        { size: "2XL", p: 82, l: 63, pl: 28 },
        { size: "3XL", p: 84, l: 66, pl: 29 },
        { size: "4XL", p: 86, l: 69, pl: 30 },
        { size: "5XL", p: 88, l: 72, pl: 31 },
      ],
    },
    panjang: {
      body: "M117 31 L67 47 L-5 174 L23 188 L74 112 L74 278 L226 278 L226 112 L277 188 L305 174 L233 47 L183 31 Q150 45 117 31 Z",
      bodyBack:
        "M117 31 L67 47 L-5 174 L23 188 L74 112 L74 278 L226 278 L226 112 L277 188 L305 174 L233 47 L183 31 Q150 37 117 31 Z",
      armholeL: "M67 47 Q75 79 74 112",
      armholeR: "M233 47 Q225 79 226 112",
      cuffL: "M0.5 165 L28.5 179 L23 188 L-5 174 Z",
      cuffR: "M299.5 165 L271.5 179 L277 188 L305 174 Z",
      sleeveZoneR: "M67 47 L-25 47 L-25 220 L74 220 L74 112 Q75 79 67 47 Z",
      sleeveZoneL:
        "M233 47 L325 47 L325 220 L226 220 L226 112 Q225 79 233 47 Z",
      sleeveRAnchor: { x: 38, y: 122, rot: 32 },
      sleeveLAnchor: { x: 262, y: 122, rot: -32 },
      sizes: [
        { size: "S", p: 70, l: 51, pl: 60 },
        { size: "M", p: 73, l: 54, pl: 62 },
        { size: "L", p: 76, l: 57, pl: 64 },
        { size: "XL", p: 79, l: 60, pl: 66 },
        { size: "2XL", p: 82, l: 63, pl: 68 },
        { size: "3XL", p: 84, l: 66, pl: 69 },
        { size: "4XL", p: 86, l: 69, pl: 70 },
        { size: "5XL", p: 88, l: 72, pl: 71 },
      ],
    },
    shoulderL: "M117 31 L67 47",
    shoulderR: "M183 31 L233 47",
    hemX1: 75,
    hemX2: 225,
    hemTopY: 272,
    hemBotY: 274.5,
    slitL: { x: 74, y1: 266, y2: 278 },
    slitR: { x: 226, y1: 266, y2: 278 },
    backYoke: "M68 58 L232 58",
    chestLeft: { x: 168, y: 62 },
    chestRight: { x: 106, y: 62 },
    centerX: 150,
    chestTopY: 66,
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
      desc: "Bagian depan korsa dibiarkan polos.",
      mini: null,
    },
    {
      id: "logo-dada-kiri",
      name: "Logo Dada Kiri",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Paling Populer",
      desc: "Bordir komputer logo kampus, instansi, atau himpunan di dada kiri.",
      mini: { x: 32, y: 15, w: 8, h: 8 },
      mainZone: { anchor: "chestLeft", w: 24, h: 15 },
    },
    {
      id: "logo-dada-kanan",
      name: "Nama / Logo Dada Kanan",
      dim: "9 × 3 cm",
      area: 27,
      badge: "Dada kanan",
      desc: "Bordir nama personel, jabatan, atau logo bendera di dada kanan.",
      mini: { x: 20, y: 16, w: 9, h: 4 },
      mainZone: { anchor: "chestRight", w: 26, h: 12 },
    },
    {
      id: "dada-kiri-kanan",
      name: "Logo Kiri + Nama Kanan",
      dim: "8×8 & 9×3 cm",
      area: 91,
      badge: "Standar Korsa",
      isDualChest: true,
      desc: "Kombinasi standar korsa: logo instansi kiri & nama personel kanan.",
      mini: { x: 32, y: 15, w: 8, h: 8 },
      mainZone: { anchor: "chestLeft", w: 24, h: 15 },
    },
    {
      id: "tulisan-dada",
      name: "Tulisan Tengah Dada",
      dim: "24 × 6 cm",
      area: 144,
      badge: "Tengah",
      desc: "Tipografi memanjang di tengah dada bawah saku.",
      mini: { x: 20, y: 26, w: 20, h: 5.5 },
      mainZone: { anchor: "center", w: 68, h: 18, offsetY: 66 },
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
      desc: "Logo kecil tepat di bawah kerah belakang.",
      mini: { x: 26, y: 11, w: 8, h: 8 },
      mainZone: { anchor: "backNeck", w: 22, h: 20, offsetY: -18 },
    },
    {
      id: "tulisan-punggung",
      name: "Tulisan Punggung",
      dim: "28 × 9 cm",
      area: 252,
      badge: "Paling Populer",
      desc: "Bordir tulisan nama jurusan, instansi, atau divisi di punggung atas.",
      mini: { x: 18, y: 15, w: 24, h: 8 },
      mainZone: { anchor: "center", w: 84, h: 26, offsetY: 4 },
    },
    {
      id: "logo-tulisan-punggung",
      name: "Logo + Tulisan Punggung",
      dim: "26 × 22 cm",
      area: 572,
      badge: "Lengkap",
      desc: "Kombinasi emblem besar + tulisan instansi di tengah punggung.",
      mini: { x: 20, y: 15, w: 20, h: 22 },
      mainZone: { anchor: "center", w: 74, h: 64, offsetY: 16 },
    },
    {
      id: "a4-belakang",
      name: "A4 Punggung Besar",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Maksimal",
      desc: "Bordir / sablon besar di punggung untuk desain utama.",
      mini: { x: 20, y: 15, w: 20, h: 27 },
      mainZone: { anchor: "center", w: 66, h: 90, offsetY: 20 },
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
      id: "bendera-lengan-ka",
      name: "Bendera Merah Putih",
      dim: "6 × 4 cm",
      area: 24,
      badge: "Wajib PDH/PDL",
      desc: "Bordir bendera Merah Putih di lengan kanan atas.",
      mini: { x: 8, y: 20, w: 7, h: 5, rot: 32 },
      mainZone: {
        anchor: "sleeveR",
        w: 18,
        h: 12,
        dist: 12,
        offsetIn: 4,
      },
    },
    {
      id: "logo-lengan-ka",
      name: "Logo / Emblem Lengan",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Standar",
      desc: "Emblem jurusan, fakultas, atau logo K3 di lengan kanan.",
      mini: { x: 10, y: 16, w: 7.5, h: 7.5, rot: 32 },
      mainZone: { anchor: "sleeveR", w: 20, h: 20, dist: 0 },
    },
    {
      id: "teks-lengan-ka",
      name: "Tulisan / Angkatan",
      dim: "9 × 3,5 cm",
      area: 32,
      badge: "Teks singkat",
      desc: "Tulisan angkatan atau divisi melintang di lengan kanan.",
      mini: { x: 9, y: 17, w: 8.5, h: 4.5, rot: 32 },
      mainZone: { anchor: "sleeveR", w: 24, h: 10, dist: 0 },
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
      id: "logo-lengan-ki",
      name: "Logo / Emblem Organisasi",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Paling Populer",
      desc: "Emblem himpunan, perusahaan, atau divisi di lengan kiri.",
      mini: { x: 42.5, y: 16, w: 7.5, h: 7.5, rot: -32 },
      mainZone: { anchor: "sleeveL", w: 20, h: 20, dist: 0 },
    },
    {
      id: "bendera-lengan-ki",
      name: "Badge K3 / Bendera",
      dim: "6 × 4 cm",
      area: 24,
      badge: "Ujung lengan",
      desc: "Badge K3 atau bendera kecil di ujung lengan kiri.",
      mini: { x: 45, y: 20, w: 7, h: 5, rot: -32 },
      mainZone: {
        anchor: "sleeveL",
        w: 18,
        h: 12,
        dist: 12,
        offsetIn: 4,
      },
    },
    {
      id: "teks-lengan-ki",
      name: "Tulisan / Angkatan",
      dim: "9 × 3,5 cm",
      area: 32,
      badge: "Teks singkat",
      desc: "Tulisan angkatan atau web instansi di lengan kiri.",
      mini: { x: 42.5, y: 17, w: 8.5, h: 4.5, rot: -32 },
      mainZone: { anchor: "sleeveL", w: 24, h: 10, dist: 0 },
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

  // Earth / Khaki (8)
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

const colorComboPresets = [
  {
    label: "Navy × Khaki",
    layout: "setengah_horizontal",
    primaryHex: "#1d2d44",
    secondaryHex: "#d6c7b2",
    accentHex: "#1d2d44",
  },
  {
    label: "Hitam × Maroon",
    layout: "lengan",
    primaryHex: "#16171a",
    secondaryHex: "#782327",
    accentHex: "#782327",
  },
  {
    label: "Army × Cream",
    layout: "setengah_horizontal",
    primaryHex: "#3f4a36",
    secondaryHex: "#e6dccb",
    accentHex: "#3f4a36",
  },
  {
    label: "Putih × Navy",
    layout: "list_kombinasi",
    primaryHex: "#f5f5f4",
    secondaryHex: "#1d2d44",
    accentHex: "#1d2d44",
  },
  {
    label: "Charcoal × Mustard",
    layout: "setengah_vertikal",
    primaryHex: "#2e3136",
    secondaryHex: "#d97706",
    accentHex: "#2e3136",
  },
];

let selectedCut = "pdh";
let selectedCollar = "kemeja";
let selectedClosure = "kancing_luar";
let selectedSleeve = "pendek";
let selectedEpaulet = "tanpa";
let selectedPocket = "tempel1";
let selectedFabricId = "american-drill";

let selectedColorLayout = "polos";
let activeColorSlot = "primary"; // 'primary' | 'secondary' | 'accent'
let selectedColor = palette[0]; // Midnight Navy
let selectedSecondaryColor =
  palette.find((p) => p.name === "Sand Beige") || palette[23];
let selectedAccentColor =
  palette.find((p) => p.name === "Mustard Gold") || palette[33];

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
    secondaryColor: selectedSecondaryColor,
    accentColor: selectedAccentColor,
    colorLayout: "polos",
    sleeve: "pendek",
    closure: "kancing_luar",
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
    fabricCatalog.find((f) => f.id === selectedFabricId) || fabricCatalog[0]
  );
}

function getGlobalModelAddons() {
  const collarAddon = collarCatalog[selectedCollar]?.extra || 0;
  const epauletAddon = epauletCatalog[selectedEpaulet]?.extra || 0;
  const pocketAddon = pocketCatalog[selectedPocket]?.extra || 0;
  return collarAddon + epauletAddon + pocketAddon;
}

function getVariantColorSummary(variant) {
  const layout = variant.colorLayout || "polos";
  if (layout === "polos") {
    return variant.color.name;
  }
  if (layout === "list_kombinasi") {
    return `${variant.color.name} + Aksen ${variant.accentColor.name}`;
  }
  if (layout === "custom_bebas") {
    return `${variant.color.name} × ${variant.secondaryColor.name} × ${variant.accentColor.name}`;
  }
  return `${variant.color.name} × ${variant.secondaryColor.name}`;
}

function getVariantBaseUnitPrice(variant) {
  const fabric = getSelectedFabric();
  const basePrice = fabric.prices[selectedCut] || fabric.prices.pdh;
  const globalAddons = getGlobalModelAddons();
  const sleeveAddon = variant.sleeve === "panjang" ? LONG_SLEEVE_EXTRA : 0;
  const closureAddon = closureCatalog[variant.closure]?.extra || 0;
  const layoutAddon =
    colorLayoutCatalog[variant.colorLayout || "polos"]?.extra || 0;
  return basePrice + globalAddons + sleeveAddon + closureAddon + layoutAddon;
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
  if (sideKey === "lenganKanan") return 32;
  if (sideKey === "lenganKiri") return -32;
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
  const wrapper = document.getElementById("korsa-stage-wrapper");
  const stage = document.getElementById("korsa-stage");
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
    const wrapper = document.getElementById("korsa-stage-wrapper");
    const stage = document.getElementById("korsa-stage");
    if (wrapper && stage) {
      wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
    }
  }
}

function pulseFloatingStageFeedback() {
  if (!isMobileFloatingActive || !window.Motion || !window.Motion.animate) {
    return;
  }
  const stage = document.getElementById("korsa-stage");
  if (stage) {
    Motion.animate(
      stage,
      { scale: [0.985, 1] },
      { type: "spring", stiffness: 420, damping: 24 },
    );
  }
}

function toggleMobileFloatingDetail() {
  const stage = document.getElementById("korsa-stage");
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

  const cutCols = ["pdh", "pdl", "tactical"];
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

// ================= KONTROL KERAH, KANCING/RESLETING, BET ATAS, SAKU & VARIASI WARNA =================
function setCollar(collarKey) {
  if (!collarCatalog[collarKey]) return;
  selectedCollar = collarKey;

  document.querySelectorAll(".collar-pill").forEach((el) => {
    el.classList.toggle("collar-pill-active", el.dataset.collar === collarKey);
  });

  const hintEl = document.getElementById("collar-desc-hint");
  if (hintEl) {
    hintEl.textContent = collarCatalog[collarKey].desc;
  }

  applyColorsAndPartsToMockup(true);
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
      "closure-pill-active",
      el.dataset.closure === closureKey,
    );
  });

  applyColorsAndPartsToMockup(true);
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setEpaulet(epauletKey) {
  if (!epauletCatalog[epauletKey]) return;
  selectedEpaulet = epauletKey;

  document.querySelectorAll(".epaulet-pill").forEach((el) => {
    el.classList.toggle(
      "epaulet-pill-active",
      el.dataset.epaulet === epauletKey,
    );
  });

  applyColorsAndPartsToMockup(true);
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setPocket(pocketKey) {
  if (!pocketCatalog[pocketKey]) return;
  selectedPocket = pocketKey;

  document.querySelectorAll(".pocket-pill").forEach((el) => {
    el.classList.toggle("pocket-pill-active", el.dataset.pocket === pocketKey);
  });

  const alertBox = document.getElementById("pocket-print-alert");
  if (alertBox) {
    alertBox.classList.toggle("hidden", pocketKey === "tanpa");
  }

  applyColorsAndPartsToMockup(true);
  updateMockupViewAndPrint();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setColorLayout(layoutKey) {
  if (!colorLayoutCatalog[layoutKey]) return;
  selectedColorLayout = layoutKey;
  const activeVar = getActiveVariant();
  activeVar.colorLayout = layoutKey;

  if (layoutKey === "list_kombinasi" && activeColorSlot === "secondary") {
    activeColorSlot = "accent";
  } else if (
    (layoutKey === "lengan" ||
      layoutKey === "setengah_horizontal" ||
      layoutKey === "setengah_vertikal") &&
    activeColorSlot === "accent"
  ) {
    activeColorSlot = "secondary";
  } else if (layoutKey === "polos") {
    activeColorSlot = "primary";
  }

  document.querySelectorAll(".color-layout-pill").forEach((el) => {
    el.classList.toggle(
      "color-layout-pill-active",
      el.dataset.layout === layoutKey,
    );
  });

  const descEl = document.getElementById("color-layout-desc");
  if (descEl) {
    descEl.textContent = colorLayoutCatalog[layoutKey].desc;
  }

  renderSubcolorTargetTabs();
  renderColorPresets();
  applyColorsAndPartsToMockup(true);
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setActiveColorSlot(slot) {
  activeColorSlot = slot;
  renderSubcolorTargetTabs();
  renderPalette();
}

function swapVariantColors() {
  const activeVar = getActiveVariant();
  const layout = activeVar.colorLayout || selectedColorLayout;
  if (layout === "list_kombinasi") {
    const temp = activeVar.color;
    activeVar.color = activeVar.accentColor;
    activeVar.accentColor = temp;
  } else if (layout === "custom_bebas") {
    const temp = activeVar.color;
    activeVar.color = activeVar.secondaryColor;
    activeVar.secondaryColor = activeVar.accentColor;
    activeVar.accentColor = temp;
  } else {
    const temp = activeVar.color;
    activeVar.color = activeVar.secondaryColor;
    activeVar.secondaryColor = temp;
  }

  selectedColor = activeVar.color;
  selectedSecondaryColor = activeVar.secondaryColor;
  selectedAccentColor = activeVar.accentColor;

  renderSubcolorTargetTabs();
  applyColorsAndPartsToMockup(true);
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function applyColorComboPreset(presetIdx) {
  const preset = colorComboPresets[presetIdx];
  if (!preset) return;

  const pColor = palette.find((p) => p.hex === preset.primaryHex) || palette[0];
  const sColor =
    palette.find((p) => p.hex === preset.secondaryHex) || palette[23];
  const aColor = palette.find((p) => p.hex === preset.accentHex) || sColor;

  const activeVar = getActiveVariant();
  activeVar.color = pColor;
  activeVar.secondaryColor = sColor;
  activeVar.accentColor = aColor;
  activeVar.colorLayout = preset.layout;

  selectedColor = pColor;
  selectedSecondaryColor = sColor;
  selectedAccentColor = aColor;
  selectedColorLayout = preset.layout;
  activeColorSlot = preset.layout === "list_kombinasi" ? "accent" : "secondary";

  setColorLayout(preset.layout);
}

function renderSubcolorTargetTabs() {
  const panel = document.getElementById("multi-color-controls-panel");
  const container = document.getElementById("subcolor-target-tabs");
  const slotLabel = document.getElementById("active-color-slot-label");
  if (!panel || !container) return;

  const activeVar = getActiveVariant();
  const layout = activeVar.colorLayout || selectedColorLayout;

  if (layout === "polos") {
    panel.classList.add("hidden");
    if (slotLabel) {
      slotLabel.textContent = `Pilih Warna Utama (${activeVar.color.name}):`;
    }
    return;
  }

  panel.classList.remove("hidden");

  let slots = [];
  if (layout === "lengan") {
    slots = [
      { key: "primary", title: "Warna Badan", color: activeVar.color },
      {
        key: "secondary",
        title: "Warna Lengan",
        color: activeVar.secondaryColor,
      },
    ];
  } else if (layout === "setengah_horizontal") {
    slots = [
      { key: "primary", title: "Badan Bawah", color: activeVar.color },
      {
        key: "secondary",
        title: "Setengah Atas",
        color: activeVar.secondaryColor,
      },
    ];
  } else if (layout === "setengah_vertikal") {
    slots = [
      { key: "primary", title: "Sisi Kanan", color: activeVar.color },
      {
        key: "secondary",
        title: "Sisi Kiri",
        color: activeVar.secondaryColor,
      },
    ];
  } else if (layout === "list_kombinasi") {
    slots = [
      { key: "primary", title: "Badan & Lengan", color: activeVar.color },
      {
        key: "accent",
        title: "Kerah, Plaket & Saku",
        color: activeVar.accentColor,
      },
    ];
  } else if (layout === "custom_bebas") {
    slots = [
      { key: "primary", title: "Badan Utama", color: activeVar.color },
      {
        key: "secondary",
        title: "Atas & Lengan",
        color: activeVar.secondaryColor,
      },
      {
        key: "accent",
        title: "Aksen Kerah/Saku",
        color: activeVar.accentColor,
      },
    ];
  }

  if (!slots.some((s) => s.key === activeColorSlot)) {
    activeColorSlot = slots[0].key;
  }

  container.innerHTML = slots
    .map((s) => {
      const isSelected = s.key === activeColorSlot;
      return `
        <button
          type="button"
          onclick="setActiveColorSlot('${s.key}')"
          class="color-slot-tab p-2 rounded-xl border text-left flex items-center gap-2 cursor-pointer ${
            isSelected
              ? "color-slot-tab-active border-[#2563eb]"
              : "border-[#e4e5e0] bg-white hover:border-zinc-400"
          }"
        >
          <span
            class="w-5 h-5 rounded-full border border-black/20 shrink-0 shadow-2xs"
            style="background-color: ${s.color.hex}"
          ></span>
          <div class="min-w-0 flex-1">
            <div class="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              ${s.title}
            </div>
            <div class="text-xs font-extrabold text-zinc-900 truncate">
              ${s.color.name}
            </div>
          </div>
        </button>
      `;
    })
    .join("");

  const activeSlotObj =
    slots.find((s) => s.key === activeColorSlot) || slots[0];
  if (slotLabel) {
    slotLabel.textContent = `Pilih Warna untuk "${activeSlotObj.title}" (${activeSlotObj.color.name}):`;
  }
}

function renderColorPresets() {
  const bar = document.getElementById("color-presets-bar");
  if (!bar) return;

  bar.innerHTML = colorComboPresets
    .map(
      (preset, idx) => `
      <button
        type="button"
        onclick="applyColorComboPreset(${idx})"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 border border-[#e4e5e0] hover:border-blue-300 text-[11px] font-bold text-zinc-800 cursor-pointer transition"
      >
        <span class="flex items-center -space-x-1">
          <span class="w-3 h-3 rounded-full border border-black/20" style="background-color: ${preset.primaryHex}"></span>
          <span class="w-3 h-3 rounded-full border border-black/20" style="background-color: ${preset.secondaryHex}"></span>
        </span>
        <span>${preset.label}</span>
      </button>
    `,
    )
    .join("");
}

// ================= VISUALISASI TUMPUKAN KORSA LIPAT 3D =================
function buildFoldedShirtLayerSVG(
  y,
  primaryHex,
  secondaryHex,
  accentHex,
  layout,
  isTop,
  isLongSleeve,
  layerIndex,
) {
  const dark = isDark(primaryHex);
  const topColor = primaryHex;
  const frontEdgeColor = shadeHex(primaryHex, dark ? -6 : -14);
  const rightEdgeColor = shadeHex(primaryHex, dark ? -16 : -28);
  const creaseColor = shadeHex(primaryHex, dark ? -22 : -36);
  const highlightColor = shadeHex(primaryHex, dark ? 22 : 12);

  const hasSecondary =
    layout === "lengan" ||
    layout === "setengah_horizontal" ||
    layout === "setengah_vertikal" ||
    layout === "custom_bebas";
  const hasAccent = layout === "list_kombinasi" || layout === "custom_bebas";

  const collarColor = hasAccent
    ? accentHex
    : hasSecondary
      ? secondaryHex
      : shadeHex(primaryHex, dark ? -8 : -18);
  const collarDark = isDark(collarColor);
  const collarInnerColor = shadeHex(collarColor, collarDark ? -16 : -36);

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
    const sleeveBandColor = hasSecondary
      ? secondaryHex
      : shadeHex(primaryHex, dark ? 8 : -7);
    const longSleeveFold =
      isLongSleeve || hasSecondary
        ? `
        <path
          d="M27 ${y - 11.5} L106 ${y - 3.5} L101 ${y + 0.5} L22 ${y - 7.5} Z"
          fill="${sleeveBandColor}"
          stroke="${creaseColor}"
          stroke-width="0.55"
          opacity="0.92"
        />
      `
        : "";

    const halfTopOverlay =
      layout === "setengah_horizontal" || layout === "custom_bebas"
        ? `
        <path
          d="M46 ${y - 33} L126 ${y - 25} L110 ${y - 12.5} L30 ${y - 20.5} Z"
          fill="${secondaryHex}"
        />
      `
        : layout === "setengah_vertikal"
          ? `
        <path
          d="M86 ${y - 29} L126 ${y - 25} L94 ${y} L54 ${y - 4} Z"
          fill="${secondaryHex}"
        />
      `
          : "";

    topSurface = `
      <path
        d="M46 ${y - 33} L126 ${y - 25} L94 ${y} L14 ${y - 8} Z"
        fill="${topColor}"
      />
      ${halfTopOverlay}
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
      <!-- Plaket Tengah Lipatan -->
      <path
        d="M86 ${y - 27} L55 ${y - 4}"
        stroke="${collarColor}"
        stroke-width="3.2"
        stroke-linecap="round"
      />
      <!-- Kerah Lipat Korsa -->
      <path
        d="M71 ${y - 29.8} Q86 ${y - 33} 101 ${y - 26.5} Q85 ${y - 18} 71 ${y - 29.8} Z"
        fill="${collarInnerColor}"
      />
      <path
        d="M68 ${y - 31} L85 ${y - 23} L74 ${y - 18.5} Z"
        fill="${collarColor}"
        stroke="${creaseColor}"
        stroke-width="0.6"
      />
      <path
        d="M104 ${y - 27.2} L85 ${y - 23} L97 ${y - 17} Z"
        fill="${collarColor}"
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
        secondaryHex: (v.secondaryColor || selectedSecondaryColor).hex,
        accentHex: (v.accentColor || selectedAccentColor).hex,
        layout: v.colorLayout || "polos",
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
          layer.secondaryHex,
          layer.accentHex,
          layer.layout,
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

// ================= MANAJEMEN MULTI-VARIAN & ESTIMASI HARGA =================
function renderVariantManager() {
  const listEl = document.getElementById("variant-pills-list");
  const countLabel = document.getElementById("variant-count-label");
  const colorSelect = document.getElementById("variant-color-select");
  const sleeveSelect = document.getElementById("variant-sleeve-select");
  const closureSelect = document.getElementById("variant-closure-select");
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
    const closureShort =
      closureCatalog[variant.closure]?.shortLabel || "Kancing Luar";
    const layout = variant.colorLayout || "polos";
    const colorSummary = getVariantColorSummary(variant);

    const secondDotHex =
      layout === "list_kombinasi"
        ? variant.accentColor.hex
        : variant.secondaryColor.hex;

    const pill = document.createElement("div");
    pill.className = `flex items-center justify-between sm:inline-flex gap-2 px-3 py-2.5 sm:py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer touch-manipulation ${
      isActive
        ? "bg-[#18181b] text-white border-[#18181b] shadow-xs"
        : "bg-white text-zinc-800 border-[#e4e5e0] hover:border-zinc-400"
    }`;
    pill.onclick = () => selectOrderVariant(variant.id);

    pill.innerHTML = `
      <div class="flex items-center gap-2 min-w-0">
        <span class="flex items-center -space-x-1 shrink-0">
          <span
            class="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full border border-white/40"
            style="background-color: ${variant.color.hex}"
          ></span>
          ${
            layout !== "polos"
              ? `<span class="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full border border-white/40" style="background-color: ${secondDotHex}"></span>`
              : ""
          }
        </span>
        <span class="truncate">#${index + 1} ${colorSummary}</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded-md shrink-0 ${
          isActive ? "bg-white/15 text-[#93c5fd]" : "bg-[#f1f2ee] text-zinc-600"
        }">
          ${sleeveShort} • ${closureShort}
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
                aria-label="Hapus varian ${colorSummary}"
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
  if (closureSelect) closureSelect.value = activeVar.closure || "kancing_luar";

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
  selectedSecondaryColor = activeVar.secondaryColor || selectedSecondaryColor;
  selectedAccentColor = activeVar.accentColor || selectedAccentColor;
  selectedColorLayout = activeVar.colorLayout || "polos";
  selectedSleeve = activeVar.sleeve;
  selectedClosure = activeVar.closure || "kancing_luar";

  document.querySelectorAll(".color-layout-pill").forEach((el) => {
    el.classList.toggle(
      "color-layout-pill-active",
      el.dataset.layout === selectedColorLayout,
    );
  });
  const descEl = document.getElementById("color-layout-desc");
  if (descEl && colorLayoutCatalog[selectedColorLayout]) {
    descEl.textContent = colorLayoutCatalog[selectedColorLayout].desc;
  }

  document.querySelectorAll(".closure-pill").forEach((el) => {
    el.classList.toggle(
      "closure-pill-active",
      el.dataset.closure === selectedClosure,
    );
  });

  renderSubcolorTargetTabs();
  applySleeveToMockup(selectedSleeve, false);
  applyColorsAndPartsToMockup(false);
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
    secondaryColor: currentVar.secondaryColor || selectedSecondaryColor,
    accentColor: currentVar.accentColor || selectedAccentColor,
    colorLayout: currentVar.colorLayout || "polos",
    sleeve: currentVar.sleeve,
    closure: currentVar.closure || "kancing_luar",
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
    closureCatalog[activeVar.closure]?.shortLabel || "Kancing Luar";
  const colorSummary = getVariantColorSummary(activeVar);

  if (editingLabel) {
    editingLabel.textContent = `2. Atur Jumlah Ukuran — ${colorSummary} (${sleeveText} • ${closureText}):`;
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
      v.sleeve === "panjang" ? "Lengan Panjang (+10rb)" : "Lengan Pendek";
    const closureLabel = closureCatalog[v.closure]?.label || "Kancing Luar";
    const layoutLabel =
      colorLayoutCatalog[v.colorLayout || "polos"]?.shortLabel || "Polos";
    const colorSummary = getVariantColorSummary(v);

    const breakdown = sizeKeys
      .filter((sz) => (v.quantities[sz] || 0) > 0)
      .map((sz) => {
        const extra = SIZE_SURCHARGE[sz] || 0;
        return extra > 0
          ? `${sz}(+${extra / 1000}rb): ${v.quantities[sz]}`
          : `${sz}: ${v.quantities[sz]}`;
      })
      .join(", ");
    return `  ${idx + 1}) ${colorSummary} [${layoutLabel}] (${sleeveLabel}, ${closureLabel}) = ${sub} pcs [${breakdown || "Belum diisi"}] | Dasar ${formatRupiah(baseUnit)} | Subtotal ${formatRupiah(varSubtotal)}`;
  });

  return [
    "Halo Atensi Konveksi, saya mau kirim Spesifikasi Order & konsultasi desain baju Korsa / PDL / PDH:",
    `• Model Potongan: ${cuts[selectedCut].label}`,
    `• Jenis Bahan: ${fabric.name}`,
    `• Jenis Kerah: ${collarCatalog[selectedCollar].label}`,
    `• Bet Atas / Bahu: ${epauletCatalog[selectedEpaulet].label}`,
    `• Jenis Saku: ${pocketCatalog[selectedPocket].label}`,
    `• Bordir/Sablon Depan: ${formatSideWA("depan")}`,
    `• Bordir/Sablon Belakang: ${formatSideWA("belakang")}`,
    `• Lengan Kanan: ${formatSideWA("lenganKanan")}`,
    `• Lengan Kiri: ${formatSideWA("lenganKiri")}`,
    `• Rincian Varian & Jumlah (Total ${grandTotal} pcs):`,
    ...variantsWAText,
    `• Estimasi Total Biaya: ${formatRupiah(totalEstimatedPrice)} (include maks. 3 titik bordir komputer)`,
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
        const sleeveLabel = v.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";
        const closureLabel =
          closureCatalog[v.closure]?.shortLabel || "Kancing Luar";
        const colorSummary = getVariantColorSummary(v);

        const row = document.createElement("div");
        row.className =
          "flex flex-wrap items-center justify-between gap-2 bg-white border border-[#e4e5e0] rounded-lg px-2.5 py-1.5";
        row.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full border border-black/20" style="background-color:${v.color.hex}"></span>
            <span class="font-bold text-zinc-900">${idx + 1}. ${colorSummary} (${sleeveLabel} • ${closureLabel})</span>
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
        activeVar.sleeve === "panjang"
          ? "L. Panjang (+Rp 10.000)"
          : "L. Pendek";
      const closureTxt =
        closureCatalog[activeVar.closure]?.shortLabel || "Kancing Luar";
      const layoutTxt =
        colorLayoutCatalog[activeVar.colorLayout || "polos"]?.shortLabel ||
        "Polos";

      breakdownList.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-1 text-zinc-600">
          <span>Harga dasar satuan (${sleeveTxt} • ${closureTxt} • ${layoutTxt}):</span>
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

        const sleeveNote = v.sleeve === "panjang" ? "L. Panjang" : "L. Pendek";
        const closureNote =
          closureCatalog[v.closure]?.shortLabel || "Kancing Luar";
        const colorSummary = getVariantColorSummary(v);

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
                ${orderVariants.length > 1 ? `#${idx + 1} ` : ""}${colorSummary} (${sleeveNote} • ${closureNote})
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
  ].filter((side) => !selectedPrints[side].isNone).length;
  const printWarn = document.getElementById("est-print-warning");
  if (printWarn) {
    printWarn.classList.toggle("hidden", activePrintCount <= 3);
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

// ================= PELETAKAN BORDIR / SABLON & UPLOAD PER SISI =================
function buildMiniKorsaSVG(opt) {
  let overlay = "";
  if (opt.isNone) {
    overlay = `
      <line x1="22" y1="22" x2="38" y2="38" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>
      <line x1="38" y1="22" x2="22" y2="38" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>
    `;
  } else if (opt.isDualChest) {
    overlay = `
      <rect x="32" y="15" width="8" height="8" rx="1" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.9" />
      <rect x="20" y="16" width="9" height="4" rx="1" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.9" />
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
        d="M23 7 L14 10 L4 23 L11 27 L15 21 L15 54 L45 54 L45 21 L49 27 L56 23 L46 10 L37 7 Q30 11 23 7 Z"
        fill="#f4f4f5"
        stroke="#d4d4d8"
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <line x1="30" y1="10" x2="30" y2="54" stroke="#d4d4d8" stroke-width="1" />
      ${overlay}
    </svg>
  `;
}

function renderDesignSlots() {
  const container = document.getElementById("design-slots-grid");
  if (!container) return;

  const sideMeta = [
    { key: "depan", label: "Depan" },
    { key: "belakang", label: "Belakang" },
    { key: "lenganKanan", label: "Lengan Kanan (+32°)" },
    { key: "lenganKiri", label: "Lengan Kiri (-32°)" },
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
  if (!grid) return;

  const list = printCatalog[activeSide];
  const currentChoice = selectedPrints[activeSide];

  grid.innerHTML = "";

  list.forEach((opt) => {
    const isActive = currentChoice.id === opt.id;
    const barPercent =
      opt.area === 0
        ? 0
        : Math.min(100, Math.max(6, Math.round((opt.area / 650) * 100)));

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
        ${buildMiniKorsaSVG(opt)}
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

  const hasPocket = selectedPocket !== "tanpa";
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
    y = hasPocket ? c.chestLeft.y : 72;
    h = hasPocket ? z.h : 20;
  } else if (z.anchor === "chestRight") {
    x = c.chestRight.x;
    y = hasPocket ? c.chestRight.y : 73;
    h = hasPocket ? z.h : 15;
  } else if (z.anchor === "center" || z.anchor === "backNeck") {
    x = c.centerX - w / 2;
    y = c.chestTopY + (z.offsetY || 0);
  } else if (z.anchor === "sleeveR") {
    const anchor = sleeveSpec.sleeveRAnchor;
    rot = 32;
    const rad = (rot * Math.PI) / 180;
    const dist = z.dist || 0;
    const offsetIn = z.offsetIn || 0;
    cx = anchor.x - Math.sin(rad) * dist + Math.cos(rad) * offsetIn;
    cy = anchor.y + Math.cos(rad) * dist + Math.sin(rad) * offsetIn;
    x = cx - w / 2;
    y = cy - h / 2;
  } else if (z.anchor === "sleeveL") {
    const anchor = sleeveSpec.sleeveLAnchor;
    rot = -32;
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
    isDualChest: Boolean(activePrint.isDualChest),
  };
}

function updateMockupViewAndPrint() {
  const c = cuts[selectedCut];
  const sleeveSpec = c[selectedSleeve];
  const svg = document.getElementById("korsa-svg");
  const isBack = mockupView === "belakang";

  document.querySelectorAll(".view-pill").forEach((pill) => {
    pill.classList.toggle("view-pill-active", pill.dataset.view === mockupView);
  });

  const bodyPath = isBack ? sleeveSpec.bodyBack : sleeveSpec.body;
  const clipPathEl = document.getElementById("korsa-clip-path");
  if (clipPathEl) clipPathEl.setAttribute("d", bodyPath);

  const outlineEl = document.getElementById("korsa-body-outline");
  if (outlineEl) outlineEl.setAttribute("d", bodyPath);

  const lightH = document.getElementById("korsa-light-h");
  if (lightH) lightH.setAttribute("d", bodyPath);

  const lightV = document.getElementById("korsa-light-v");
  if (lightV) lightV.setAttribute("d", bodyPath);

  const frontNeckGroup = document.getElementById("front-neck-group");
  if (frontNeckGroup) frontNeckGroup.style.display = isBack ? "none" : "block";

  const frontCollarGroup = document.getElementById("front-collar-group");
  if (frontCollarGroup)
    frontCollarGroup.style.display = isBack ? "none" : "block";

  const backCollarGroup = document.getElementById("back-collar-group");
  if (backCollarGroup)
    backCollarGroup.style.display = isBack ? "block" : "none";

  const frontPlacketGroup = document.getElementById("front-placket-group");
  if (frontPlacketGroup)
    frontPlacketGroup.style.display = isBack ? "none" : "block";

  const pocketsGroup = document.getElementById("pockets-group");
  if (pocketsGroup) {
    pocketsGroup.style.display =
      !isBack && selectedPocket !== "tanpa" ? "block" : "none";
  }

  const backYokeSeam = document.getElementById("back-yoke-seam");
  if (backYokeSeam) {
    backYokeSeam.setAttribute("d", c.backYoke);
    backYokeSeam.style.display = isBack ? "block" : "none";
  }

  const tacticalVent = document.getElementById("tactical-vent-group");
  if (tacticalVent) {
    tacticalVent.style.display =
      isBack && selectedCut === "tactical" ? "block" : "none";
  }

  // Flip horizontal split zone when viewing back so wearer's left stays consistent
  const activeVar = getActiveVariant();
  const layout = activeVar.colorLayout || selectedColorLayout;
  const halfLeftRect = document.getElementById("color-zone-half-left");
  if (halfLeftRect && layout === "setengah_vertikal") {
    halfLeftRect.setAttribute("x", isBack ? "-20" : "150");
  }

  const zoomBtn = document.getElementById("toggle-zoom-btn");
  if (zoomBtn && svg) {
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
            mockupView === "lenganKanan" ? "-15 26 125 180" : "190 26 125 180",
          );
        } else {
          svg.setAttribute(
            "viewBox",
            mockupView === "lenganKanan" ? "-5 24 130 130" : "175 24 130 130",
          );
        }
      } else {
        svg.setAttribute("viewBox", "0 0 300 300");
      }
    } else {
      zoomBtn.classList.add("hidden");
      svg.setAttribute("viewBox", "0 0 300 300");
    }
  }

  const activePrint = selectedPrints[mockupView];
  const sideDesign = customDesigns[mockupView];
  const zoneGroup = document.getElementById("print-zone-group");
  const zoneRect = document.getElementById("print-zone-rect");
  const zoneImg = document.getElementById("print-zone-img");
  const zoneLabel = document.getElementById("print-zone-label");

  const zoneGroup2 = document.getElementById("print-zone-group-2");
  const zoneRect2 = document.getElementById("print-zone-rect-2");
  const zoneLabel2 = document.getElementById("print-zone-label-2");

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

  const captionEl = document.getElementById("mockup-view-caption");
  if (captionEl) {
    captionEl.textContent = activePrint.isNone
      ? `${sideNames[mockupView]} • Polos (Tanpa Bordir/Sablon)`
      : `${sideNames[mockupView]} • ${activePrint.name} (${activePrint.dim})${rotBadge}`;
  }

  const geo = computePrintZoneGeometry(mockupView, selectedCut, selectedSleeve);
  if (!geo) {
    if (zoneGroup) zoneGroup.style.display = "none";
    if (zoneGroup2) zoneGroup2.style.display = "none";
    return;
  }

  if (zoneGroup) {
    zoneGroup.style.display = "block";
    if (geo.rot !== 0) {
      zoneGroup.setAttribute(
        "transform",
        `rotate(${geo.rot} ${geo.cx} ${geo.cy})`,
      );
    } else {
      zoneGroup.removeAttribute("transform");
    }
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
    zoneLabel.textContent = geo.isDualChest ? "Logo 8×8" : activePrint.dim;
  }

  if (zoneGroup2) {
    if (mockupView === "depan" && geo.isDualChest) {
      const hasPocket = selectedPocket !== "tanpa";
      const rx = c.chestRight.x;
      const ry = hasPocket ? c.chestRight.y + 2 : 74;
      const rw = 26;
      const rh = 11;
      zoneGroup2.style.display = "block";
      if (zoneRect2) {
        zoneRect2.setAttribute("x", rx);
        zoneRect2.setAttribute("y", ry);
        zoneRect2.setAttribute("width", rw);
        zoneRect2.setAttribute("height", rh);
      }
      if (zoneLabel2) {
        zoneLabel2.setAttribute("x", rx + rw / 2);
        zoneLabel2.setAttribute("y", ry + rh + 8);
        zoneLabel2.textContent = "Nama 9×3";
      }
    } else {
      zoneGroup2.style.display = "none";
    }
  }
}

function updateAllPrintUI() {
  ["depan", "belakang", "lenganKanan", "lenganKiri"].forEach((side) => {
    const item = selectedPrints[side];
    const hasImg = Boolean(customDesigns[side]);
    const subEl = document.getElementById(`tab-sub-${side}`);
    if (!subEl) return;
    const deg = getEffectiveAngleForSide(side);
    const degText =
      side === "lenganKanan" || side === "lenganKiri"
        ? ` ${deg > 0 ? "+" : ""}${deg}°`
        : "";
    subEl.textContent = item.isNone
      ? "Tanpa bordir/sablon"
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
  if (summaryGrid) {
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
  }

  const totalSidesEl = document.getElementById("total-print-sides");
  if (totalSidesEl) {
    totalSidesEl.textContent =
      activeCount === 0
        ? "Korsa Polos (Tanpa Bordir)"
        : `${activeCount} Sisi Bordir/Sablon Aktif`;
  }

  renderDesignSlots();
  renderPrintOptions();
  updateMockupViewAndPrint();
  updateOrderTotalsAndWA();
}

function renderSizeChart(cutKey, sleeveKey) {
  const c = cuts[cutKey];
  const sleeveSpec = c[sleeveKey];
  const sleeveShort = sleeveKey === "panjang" ? "L. Panjang" : "L. Pendek";
  const chartTitle = document.getElementById("chart-cut-title");
  if (chartTitle) {
    chartTitle.textContent = `${c.label} • ${sleeveShort}`;
  }
  const rangeBadge = document.getElementById("chart-range-badge");
  if (rangeBadge) {
    rangeBadge.textContent = `S – ${sizeKeys[sizeKeys.length - 1]} (cm)`;
  }

  const tbody = document.getElementById("size-chart-body");
  if (!tbody) return;
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

  const armL = document.getElementById("seam-armhole-l");
  const armR = document.getElementById("seam-armhole-r");
  if (armL) armL.setAttribute("d", sleeveSpec.armholeL);
  if (armR) armR.setAttribute("d", sleeveSpec.armholeR);

  const sleeveZoneR = document.getElementById("color-zone-sleeve-r");
  const sleeveZoneL = document.getElementById("color-zone-sleeve-l");
  if (sleeveZoneR) sleeveZoneR.setAttribute("d", sleeveSpec.sleeveZoneR);
  if (sleeveZoneL) sleeveZoneL.setAttribute("d", sleeveSpec.sleeveZoneL);

  const shortCuffs = document.getElementById("short-sleeve-cuffs");
  const longCuffs = document.getElementById("long-sleeve-cuffs");
  const sleeveTabGroup = document.getElementById("sleeve-tab-group");

  if (sleeveKey === "panjang") {
    if (shortCuffs) shortCuffs.style.display = "none";
    if (longCuffs) longCuffs.style.display = "block";
    const cuffL = document.getElementById("cuff-l");
    const cuffR = document.getElementById("cuff-r");
    if (cuffL) cuffL.setAttribute("d", sleeveSpec.cuffL);
    if (cuffR) cuffR.setAttribute("d", sleeveSpec.cuffR);
    if (sleeveTabGroup) {
      sleeveTabGroup.style.display =
        selectedCut === "pdl" || selectedCut === "tactical" ? "block" : "none";
    }
  } else {
    if (shortCuffs) shortCuffs.style.display = "block";
    if (longCuffs) longCuffs.style.display = "none";
    const scuffL = document.getElementById("scuff-l");
    const scuffR = document.getElementById("scuff-r");
    if (scuffL) scuffL.setAttribute("d", sleeveSpec.scuffL);
    if (scuffR) scuffR.setAttribute("d", sleeveSpec.scuffR);
  }

  applyColorsAndPartsToMockup(false);
  renderSizeChart(selectedCut, sleeveKey);
  updateAllPrintUI();

  if (animate && window.Motion && window.Motion.animate) {
    Motion.animate(
      "#korsa-svg",
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

  const shL = document.getElementById("seam-shoulder-l");
  const shR = document.getElementById("seam-shoulder-r");
  if (shL) shL.setAttribute("d", c.shoulderL);
  if (shR) shR.setAttribute("d", c.shoulderR);

  const hemTop = document.getElementById("korsa-hem-top");
  if (hemTop) {
    hemTop.setAttribute("x1", c.hemX1);
    hemTop.setAttribute("x2", c.hemX2);
    hemTop.setAttribute("y1", c.hemTopY);
    hemTop.setAttribute("y2", c.hemTopY);
  }

  const hemBot = document.getElementById("korsa-hem-bottom");
  if (hemBot) {
    hemBot.setAttribute("x1", c.hemX1);
    hemBot.setAttribute("x2", c.hemX2);
    hemBot.setAttribute("y1", c.hemBotY);
    hemBot.setAttribute("y2", c.hemBotY);
  }

  const slitL = document.getElementById("korsa-slit-l");
  if (slitL) {
    slitL.setAttribute("x1", c.slitL.x);
    slitL.setAttribute("x2", c.slitL.x);
    slitL.setAttribute("y1", c.slitL.y1);
    slitL.setAttribute("y2", c.slitL.y2);
  }

  const slitR = document.getElementById("korsa-slit-r");
  if (slitR) {
    slitR.setAttribute("x1", c.slitR.x);
    slitR.setAttribute("x2", c.slitR.x);
    slitR.setAttribute("y1", c.slitR.y1);
    slitR.setAttribute("y2", c.slitR.y2);
  }

  renderPriceListTable();
  applySleeveToMockup(selectedSleeve, true);
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

// ================= SINKRONISASI WARNA & KOMPONEN KORSA KE SVG =================
function applyColorsAndPartsToMockup(animate = true) {
  const activeVar = getActiveVariant();
  const primary = activeVar.color;
  const secondary = activeVar.secondaryColor || selectedSecondaryColor;
  const accent = activeVar.accentColor || selectedAccentColor;
  const layout = activeVar.colorLayout || selectedColorLayout;
  const closure = activeVar.closure || selectedClosure;

  selectedColor = primary;
  selectedSecondaryColor = secondary;
  selectedAccentColor = accent;
  selectedColorLayout = layout;
  selectedClosure = closure;

  const pDark = isDark(primary.hex);
  const outlineColor = shadeHex(primary.hex, pDark ? -18 : -34);
  const pStitch = shadeHex(primary.hex, pDark ? 24 : -22);
  const pPartShade = shadeHex(primary.hex, pDark ? -6 : -14);
  const pNeckInner = shadeHex(primary.hex, pDark ? -14 : -42);

  // 1. Base Body Color
  const bodyBase = document.getElementById("korsa-body-base");
  if (bodyBase) bodyBase.setAttribute("fill", primary.hex);

  const outlineEl = document.getElementById("korsa-body-outline");
  if (outlineEl) outlineEl.setAttribute("stroke", outlineColor);

  // 2. Color Variation Zones
  const zoneHalfTop = document.getElementById("color-zone-half-top");
  const zoneHalfLeft = document.getElementById("color-zone-half-left");
  const zoneSleeveR = document.getElementById("color-zone-sleeve-r");
  const zoneSleeveL = document.getElementById("color-zone-sleeve-l");
  const seamHalfTop = document.getElementById("seam-half-top");
  const seamHalfVert = document.getElementById("seam-half-vert");

  const showHalfTop =
    layout === "setengah_horizontal" || layout === "custom_bebas";
  const showHalfVert = layout === "setengah_vertikal";
  const showSleeves = layout === "lengan" || layout === "custom_bebas";

  if (zoneHalfTop) {
    zoneHalfTop.style.display = showHalfTop ? "block" : "none";
    zoneHalfTop.setAttribute("fill", secondary.hex);
  }
  if (seamHalfTop) {
    seamHalfTop.style.display = showHalfTop ? "block" : "none";
    seamHalfTop.setAttribute("stroke", outlineColor);
  }

  if (zoneHalfLeft) {
    zoneHalfLeft.style.display = showHalfVert ? "block" : "none";
    zoneHalfLeft.setAttribute("fill", secondary.hex);
    zoneHalfLeft.setAttribute("x", mockupView === "belakang" ? "-20" : "150");
  }
  if (seamHalfVert) {
    seamHalfVert.style.display = showHalfVert ? "block" : "none";
    seamHalfVert.setAttribute("stroke", outlineColor);
  }

  if (zoneSleeveR) {
    zoneSleeveR.style.display = showSleeves ? "block" : "none";
    zoneSleeveR.setAttribute("fill", secondary.hex);
  }
  if (zoneSleeveL) {
    zoneSleeveL.style.display = showSleeves ? "block" : "none";
    zoneSleeveL.setAttribute("fill", secondary.hex);
  }

  // 3. Determine Component Colors (Collar, Placket, Epaulets, Pockets, Cuffs)
  const useAccent = layout === "list_kombinasi" || layout === "custom_bebas";
  const useUpperSecondary = layout === "setengah_horizontal";

  const collarColor = useAccent
    ? accent.hex
    : useUpperSecondary
      ? secondary.hex
      : pPartShade;
  const collarDark = isDark(collarColor);
  const collarStitch = shadeHex(collarColor, collarDark ? 24 : -22);
  const neckInnerFill = useAccent
    ? shadeHex(accent.hex, collarDark ? -12 : -36)
    : useUpperSecondary
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -12 : -36)
      : pNeckInner;

  const placketColor = useAccent ? accent.hex : pPartShade;
  const pocketColor = useAccent ? accent.hex : primary.hex;
  const pocketFlapColor = useAccent
    ? shadeHex(accent.hex, isDark(accent.hex) ? -8 : -16)
    : pPartShade;

  const cuffColor = useAccent
    ? accent.hex
    : showSleeves
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -6 : -14)
      : pPartShade;

  const epauletColor = useAccent
    ? accent.hex
    : showSleeves || useUpperSecondary
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -6 : -14)
      : pPartShade;

  // Neck Inner
  const neckInnerEl = document.getElementById("korsa-neck-inner");
  if (neckInnerEl) {
    neckInnerEl.setAttribute("fill", neckInnerFill);
    neckInnerEl.setAttribute("stroke", outlineColor);
  }

  // 4. Collar Visibility & Colors
  const collarKemejaGroup = document.getElementById("collar-kemeja-group");
  const collarShanghaiGroup = document.getElementById("collar-shanghai-group");
  const collarRevereGroup = document.getElementById("collar-revere-group");
  const buttondownDots = document.getElementById("collar-buttondown-dots");

  if (collarKemejaGroup) {
    collarKemejaGroup.style.display =
      selectedCollar === "kemeja" || selectedCollar === "buttondown"
        ? "block"
        : "none";
  }
  if (buttondownDots) {
    buttondownDots.style.display =
      selectedCollar === "buttondown" ? "block" : "none";
  }
  if (collarShanghaiGroup) {
    collarShanghaiGroup.style.display =
      selectedCollar === "shanghai" ? "block" : "none";
  }
  if (collarRevereGroup) {
    collarRevereGroup.style.display =
      selectedCollar === "revere" ? "block" : "none";
  }

  const flapL = document.getElementById("collar-flap-l");
  const flapR = document.getElementById("collar-flap-r");
  if (flapL) {
    flapL.setAttribute("fill", collarColor);
    flapL.setAttribute("stroke", outlineColor);
  }
  if (flapR) {
    flapR.setAttribute(
      "fill",
      layout === "setengah_vertikal" ? secondary.hex : collarColor,
    );
    flapR.setAttribute("stroke", outlineColor);
  }
  ["collar-stitch-l", "collar-stitch-r"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", collarStitch);
  });

  const shanghaiBody = document.getElementById("shanghai-band-body");
  const shanghaiStitch = document.getElementById("shanghai-band-stitch");
  if (shanghaiBody) {
    shanghaiBody.setAttribute("fill", collarColor);
    shanghaiBody.setAttribute("stroke", outlineColor);
  }
  if (shanghaiStitch) shanghaiStitch.setAttribute("stroke", collarStitch);

  const revereV = document.getElementById("revere-neck-v");
  const revereL = document.getElementById("revere-flap-l");
  const revereR = document.getElementById("revere-flap-r");
  if (revereV) {
    revereV.setAttribute("fill", neckInnerFill);
    revereV.setAttribute("stroke", outlineColor);
  }
  if (revereL) {
    revereL.setAttribute("fill", collarColor);
    revereL.setAttribute("stroke", outlineColor);
  }
  if (revereR) {
    revereR.setAttribute(
      "fill",
      layout === "setengah_vertikal" ? secondary.hex : collarColor,
    );
    revereR.setAttribute("stroke", outlineColor);
  }

  const backCollarBand = document.getElementById("back-collar-band");
  const backCollarStitch = document.getElementById("back-collar-stitch");
  if (backCollarBand) {
    backCollarBand.setAttribute("fill", collarColor);
    backCollarBand.setAttribute("stroke", outlineColor);
  }
  if (backCollarStitch) backCollarStitch.setAttribute("stroke", collarStitch);

  // 5. Placket & Closure (Kancing Luar / Kancing Tutup / Resleting)
  const placketBox = document.getElementById("placket-box");
  const placketTopHalf = document.getElementById("placket-top-half");
  const buttonsGroup = document.getElementById("placket-buttons-group");
  const hiddenGroup = document.getElementById("placket-hidden-group");
  const zipperGroup = document.getElementById("placket-zipper-group");

  if (placketBox) {
    placketBox.setAttribute("fill", placketColor);
    placketBox.setAttribute("stroke", outlineColor);
  }
  if (placketTopHalf) {
    placketTopHalf.style.display = showHalfTop ? "block" : "none";
    placketTopHalf.setAttribute("fill", useAccent ? accent.hex : secondary.hex);
    placketTopHalf.setAttribute("stroke", outlineColor);
  }
  if (buttonsGroup) {
    buttonsGroup.style.display = closure === "kancing_luar" ? "block" : "none";
  }
  if (hiddenGroup) {
    hiddenGroup.style.display =
      closure === "kancing_tertutup" ? "block" : "none";
  }
  if (zipperGroup) {
    zipperGroup.style.display = closure === "resleting" ? "block" : "none";
  }

  // 6. Epaulets / Bet Atas
  const epauletGroup = document.getElementById("epaulet-group");
  const epStrapL = document.getElementById("epaulet-strap-l");
  const epStrapR = document.getElementById("epaulet-strap-r");
  const epBtnL = document.getElementById("epaulet-btn-l");
  const epBtnR = document.getElementById("epaulet-btn-r");
  const epVelcroL = document.getElementById("epaulet-velcro-l");
  const epVelcroR = document.getElementById("epaulet-velcro-r");

  if (epauletGroup) {
    epauletGroup.style.display = selectedEpaulet !== "tanpa" ? "block" : "none";
  }
  if (epStrapL) {
    epStrapL.setAttribute("fill", epauletColor);
    epStrapL.setAttribute("stroke", outlineColor);
  }
  if (epStrapR) {
    epStrapR.setAttribute(
      "fill",
      layout === "setengah_vertikal" ? secondary.hex : epauletColor,
    );
    epStrapR.setAttribute("stroke", outlineColor);
  }
  const isBetKancing = selectedEpaulet === "bet_kancing";
  const isBetVelcro = selectedEpaulet === "bet_velcro";
  if (epBtnL) epBtnL.style.display = isBetKancing ? "block" : "none";
  if (epBtnR) epBtnR.style.display = isBetKancing ? "block" : "none";
  if (epVelcroL) {
    epVelcroL.style.display = isBetVelcro ? "block" : "none";
    epVelcroL.setAttribute("stroke", outlineColor);
  }
  if (epVelcroR) {
    epVelcroR.style.display = isBetVelcro ? "block" : "none";
    epVelcroR.setAttribute("stroke", outlineColor);
  }

  // 7. Pockets (Tanpa / Tempel 1 / Tempel 2 / Tutup 2 PDL / Bobok)
  const isBack = mockupView === "belakang";
  const pocketsGroup = document.getElementById("pockets-group");
  if (pocketsGroup) {
    pocketsGroup.style.display =
      !isBack && selectedPocket !== "tanpa" ? "block" : "none";
  }

  const pTempelL = document.getElementById("pocket-tempel-l");
  const pTempelR = document.getElementById("pocket-tempel-r");
  const pTutupGroup = document.getElementById("pocket-tutup-group");
  const pBobokL = document.getElementById("pocket-bobok-l");

  if (pTempelL) {
    pTempelL.style.display =
      selectedPocket === "tempel1" || selectedPocket === "tempel2"
        ? "block"
        : "none";
  }
  if (pTempelR) {
    pTempelR.style.display = selectedPocket === "tempel2" ? "block" : "none";
  }
  if (pTutupGroup) {
    pTutupGroup.style.display = selectedPocket === "tutup2" ? "block" : "none";
  }
  if (pBobokL) {
    pBobokL.style.display = selectedPocket === "bobok" ? "block" : "none";
  }

  const leftPocketFill =
    layout === "setengah_vertikal" && !useAccent ? secondary.hex : pocketColor;
  const leftPocketFlapFill =
    layout === "setengah_vertikal" && !useAccent
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -8 : -16)
      : pocketFlapColor;

  const pTempelLBody = document.getElementById("pocket-tempel-l-body");
  const pTempelLHem = document.getElementById("pocket-tempel-l-hem");
  if (pTempelLBody) {
    pTempelLBody.setAttribute("fill", leftPocketFill);
    pTempelLBody.setAttribute("stroke", outlineColor);
  }
  if (pTempelLHem) pTempelLHem.setAttribute("stroke", outlineColor);

  const pTempelRBody = document.getElementById("pocket-tempel-r-body");
  const pTempelRHem = document.getElementById("pocket-tempel-r-hem");
  if (pTempelRBody) {
    pTempelRBody.setAttribute("fill", pocketColor);
    pTempelRBody.setAttribute("stroke", outlineColor);
  }
  if (pTempelRHem) pTempelRHem.setAttribute("stroke", outlineColor);

  const pTutupRBody = document.getElementById("pocket-tutup-r-body");
  const pTutupRFlap = document.getElementById("pocket-tutup-r-flap");
  const pTutupLBody = document.getElementById("pocket-tutup-l-body");
  const pTutupLFlap = document.getElementById("pocket-tutup-l-flap");
  if (pTutupRBody) {
    pTutupRBody.setAttribute("fill", pocketColor);
    pTutupRBody.setAttribute("stroke", outlineColor);
  }
  if (pTutupRFlap) {
    pTutupRFlap.setAttribute("fill", pocketFlapColor);
    pTutupRFlap.setAttribute("stroke", outlineColor);
  }
  if (pTutupLBody) {
    pTutupLBody.setAttribute("fill", leftPocketFill);
    pTutupLBody.setAttribute("stroke", outlineColor);
  }
  if (pTutupLFlap) {
    pTutupLFlap.setAttribute("fill", leftPocketFlapFill);
    pTutupLFlap.setAttribute("stroke", outlineColor);
  }

  const pBobokWelt = document.getElementById("pocket-bobok-l-welt");
  if (pBobokWelt) {
    pBobokWelt.setAttribute("fill", leftPocketFlapFill);
    pBobokWelt.setAttribute("stroke", outlineColor);
  }

  // 8. Cuffs & Seams
  ["scuff-l", "cuff-l"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", cuffColor);
      el.setAttribute("stroke", outlineColor);
    }
  });
  ["scuff-r", "cuff-r"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute(
        "fill",
        layout === "setengah_vertikal" && !useAccent
          ? shadeHex(secondary.hex, isDark(secondary.hex) ? -6 : -14)
          : cuffColor,
      );
      el.setAttribute("stroke", outlineColor);
    }
  });

  [
    "seam-shoulder-l",
    "seam-shoulder-r",
    "seam-armhole-l",
    "seam-armhole-r",
    "back-yoke-seam",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", outlineColor);
  });
  ["korsa-hem-top", "korsa-hem-bottom"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", pStitch);
  });

  // 9. Update Stage Top Badges
  const cutLabel = document.getElementById("active-cut-label");
  if (cutLabel) {
    const cutShort =
      selectedCut === "pdh"
        ? "PDH"
        : selectedCut === "pdl"
          ? "PDL"
          : "Tactical";
    const collarShort =
      collarCatalog[selectedCollar]?.shortLabel || "Kerah Kemeja";
    const closureShort = closureCatalog[closure]?.shortLabel || "Kancing Luar";
    cutLabel.textContent = `${cutShort} • ${collarShort} • ${closureShort}`;
  }

  const colorDot1 = document.getElementById("active-color-dot");
  const colorDot2 = document.getElementById("active-color-dot-2");
  const colorNameEl = document.getElementById("active-color-name");

  if (colorDot1) colorDot1.style.backgroundColor = primary.hex;
  if (colorDot2) {
    if (layout === "polos") {
      colorDot2.classList.add("hidden");
    } else {
      colorDot2.classList.remove("hidden");
      colorDot2.style.backgroundColor =
        layout === "list_kombinasi" ? accent.hex : secondary.hex;
    }
  }
  if (colorNameEl) {
    colorNameEl.textContent = getVariantColorSummary(activeVar);
  }

  if (animate && window.Motion && window.Motion.animate) {
    Motion.animate(
      "#korsa-svg",
      { y: [-4, 0] },
      { type: "spring", stiffness: 360, damping: 24 },
    );
  }
}

function setColor(item, slotOverride = null) {
  const activeVar = getActiveVariant();
  const layout = activeVar.colorLayout || selectedColorLayout;
  const targetSlot =
    slotOverride || (layout === "polos" ? "primary" : activeColorSlot);

  if (targetSlot === "secondary") {
    activeVar.secondaryColor = item;
    selectedSecondaryColor = item;
  } else if (targetSlot === "accent") {
    activeVar.accentColor = item;
    selectedAccentColor = item;
  } else {
    activeVar.color = item;
    selectedColor = item;
  }

  renderSubcolorTargetTabs();
  applyColorsAndPartsToMockup(true);
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateAllPrintUI();
  pulseFloatingStageFeedback();
}

function setColorByHex(hex, slot = null) {
  const found = palette.find((p) => p.hex === hex);
  if (found) setColor(found, slot);
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

function getCurrentlyEditingColorObj() {
  const activeVar = getActiveVariant();
  const layout = activeVar.colorLayout || selectedColorLayout;
  if (layout === "polos" || activeColorSlot === "primary") {
    return activeVar.color;
  }
  if (activeColorSlot === "secondary") {
    return activeVar.secondaryColor || selectedSecondaryColor;
  }
  return activeVar.accentColor || selectedAccentColor;
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

  const currentSlotColor = getCurrentlyEditingColorObj();

  list.forEach((item) => {
    const active = item.hex === currentSlotColor.hex;
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

// ================= GENERATOR SPESIFIKASI ORDER (PNG / PDF) =================
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

function buildStandaloneKorsaSVGString(viewKey, cutKey, variant) {
  const c = cuts[cutKey];
  const sleeveKey = variant.sleeve;
  const closureKey = variant.closure || selectedClosure;
  const layout = variant.colorLayout || "polos";
  const primary = variant.color;
  const secondary = variant.secondaryColor || selectedSecondaryColor;
  const accent = variant.accentColor || selectedAccentColor;

  const sleeveSpec = c[sleeveKey];
  const isBack = viewKey === "belakang";
  const pDark = isDark(primary.hex);

  const outlineColor = shadeHex(primary.hex, pDark ? -18 : -34);
  const pStitch = shadeHex(primary.hex, pDark ? 24 : -22);
  const pPartShade = shadeHex(primary.hex, pDark ? -6 : -14);
  const pNeckInner = shadeHex(primary.hex, pDark ? -14 : -42);

  const showHalfTop =
    layout === "setengah_horizontal" || layout === "custom_bebas";
  const showHalfVert = layout === "setengah_vertikal";
  const showSleeves = layout === "lengan" || layout === "custom_bebas";
  const useAccent = layout === "list_kombinasi" || layout === "custom_bebas";
  const useUpperSecondary = layout === "setengah_horizontal";

  const collarColor = useAccent
    ? accent.hex
    : useUpperSecondary
      ? secondary.hex
      : pPartShade;
  const collarDark = isDark(collarColor);
  const collarStitch = shadeHex(collarColor, collarDark ? 24 : -22);
  const neckInnerFill = useAccent
    ? shadeHex(accent.hex, collarDark ? -12 : -36)
    : useUpperSecondary
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -12 : -36)
      : pNeckInner;

  const placketColor = useAccent ? accent.hex : pPartShade;
  const pocketColor = useAccent ? accent.hex : primary.hex;
  const pocketFlapColor = useAccent
    ? shadeHex(accent.hex, isDark(accent.hex) ? -8 : -16)
    : pPartShade;
  const cuffColor = useAccent
    ? accent.hex
    : showSleeves
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -6 : -14)
      : pPartShade;
  const epauletColor = useAccent
    ? accent.hex
    : showSleeves || useUpperSecondary
      ? shadeHex(secondary.hex, isDark(secondary.hex) ? -6 : -14)
      : pPartShade;

  let vb = "0 0 300 300";
  if (viewKey === "lenganKanan") {
    vb = sleeveKey === "panjang" ? "-15 26 125 180" : "-5 24 130 130";
  } else if (viewKey === "lenganKiri") {
    vb = sleeveKey === "panjang" ? "190 26 125 180" : "175 24 130 130";
  }

  const bodyPath = isBack ? sleeveSpec.bodyBack : sleeveSpec.body;
  const clipId = `woClip_${viewKey}`;

  const colorZonesMarkup = `
    <g clip-path="url(#${clipId})">
      <rect x="-20" y="0" width="340" height="300" fill="${primary.hex}" />
      ${showHalfTop ? `<rect x="-20" y="0" width="340" height="126" fill="${secondary.hex}" />` : ""}
      ${showHalfVert ? `<rect x="${isBack ? -20 : 150}" y="0" width="170" height="300" fill="${secondary.hex}" />` : ""}
      ${showSleeves ? `<path d="${sleeveSpec.sleeveZoneR}" fill="${secondary.hex}" /><path d="${sleeveSpec.sleeveZoneL}" fill="${secondary.hex}" />` : ""}
      ${showHalfTop ? `<line x1="65" y1="126" x2="235" y2="126" stroke="${outlineColor}" stroke-width="1.25" />` : ""}
      ${showHalfVert ? `<line x1="150" y1="20" x2="150" y2="290" stroke="${outlineColor}" stroke-width="1.2" />` : ""}
    </g>
  `;

  const cuffsMarkup =
    sleeveKey === "panjang"
      ? `
        <path d="${sleeveSpec.cuffL}" fill="${cuffColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        <path d="${sleeveSpec.cuffR}" fill="${layout === "setengah_vertikal" && !useAccent ? shadeHex(secondary.hex, -10) : cuffColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        <circle cx="14.5" cy="172.5" r="1.6" fill="#f8fafc" stroke="#18181b" stroke-width="0.9" />
        <circle cx="285.5" cy="172.5" r="1.6" fill="#f8fafc" stroke="#18181b" stroke-width="0.9" />
      `
      : `
        <path d="${sleeveSpec.scuffL}" fill="${cuffColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
        <path d="${sleeveSpec.scuffR}" fill="${layout === "setengah_vertikal" && !useAccent ? shadeHex(secondary.hex, -10) : cuffColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
      `;

  const epauletMarkup =
    selectedEpaulet !== "tanpa"
      ? `
        <path d="M74 44 L112 32 L114 39 L77 51 Z" fill="${epauletColor}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <path d="M226 44 L188 32 L186 39 L223 51 Z" fill="${layout === "setengah_vertikal" ? secondary.hex : epauletColor}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        ${
          selectedEpaulet === "bet_kancing"
            ? `<circle cx="108" cy="37.2" r="1.9" fill="#f8fafc" stroke="#18181b" stroke-width="1" /><circle cx="192" cy="37.2" r="1.9" fill="#f8fafc" stroke="#18181b" stroke-width="1" />`
            : `<rect x="83" y="41.5" width="19" height="5.5" rx="1" transform="rotate(-18 83 41.5)" fill="none" stroke="${outlineColor}" stroke-width="1" stroke-dasharray="2 1.5" /><rect x="198" y="35.5" width="19" height="5.5" rx="1" transform="rotate(18 198 35.5)" fill="none" stroke="${outlineColor}" stroke-width="1" stroke-dasharray="2 1.5" />`
        }
      `
      : "";

  const leftPocketFill =
    layout === "setengah_vertikal" && !useAccent ? secondary.hex : pocketColor;
  const leftPocketFlapFill =
    layout === "setengah_vertikal" && !useAccent
      ? shadeHex(secondary.hex, -12)
      : pocketFlapColor;

  let pocketsMarkup = "";
  if (!isBack) {
    if (selectedPocket === "tempel1" || selectedPocket === "tempel2") {
      pocketsMarkup += `
        <path d="M167 80 L197 80 L197 110 L182 117 L167 110 Z" fill="${leftPocketFill}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <line x1="168" y1="86" x2="196" y2="86" stroke="${outlineColor}" stroke-width="1" />
        <line x1="174" y1="80" x2="174" y2="113" stroke="${outlineColor}" stroke-width="0.9" stroke-dasharray="2 1.5" />
      `;
    }
    if (selectedPocket === "tempel2") {
      pocketsMarkup += `
        <path d="M103 80 L133 80 L133 110 L118 117 L103 110 Z" fill="${pocketColor}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <line x1="104" y1="86" x2="132" y2="86" stroke="${outlineColor}" stroke-width="1" />
      `;
    }
    if (selectedPocket === "tutup2") {
      pocketsMarkup += `
        <path d="M102 84 L134 84 L134 115 L118 121 L102 115 Z" fill="${pocketColor}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <path d="M101 80 L135 80 L135 90 L118 96 L101 90 Z" fill="${pocketFlapColor}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <circle cx="118" cy="89.5" r="1.6" fill="#f8fafc" stroke="#18181b" stroke-width="0.9" />
        <path d="M166 84 L198 84 L198 115 L182 121 L166 115 Z" fill="${leftPocketFill}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <path d="M165 80 L199 80 L199 90 L182 96 L165 90 Z" fill="${leftPocketFlapFill}" stroke="${outlineColor}" stroke-width="1.25" stroke-linejoin="round" />
        <circle cx="182" cy="89.5" r="1.6" fill="#f8fafc" stroke="#18181b" stroke-width="0.9" />
      `;
    }
    if (selectedPocket === "bobok") {
      pocketsMarkup += `<rect x="166" y="83" width="32" height="5.5" rx="1" fill="${leftPocketFlapFill}" stroke="${outlineColor}" stroke-width="1.2" />`;
    }
  }

  let placketMarkup = "";
  if (!isBack) {
    let closureDetails = "";
    if (closureKey === "kancing_luar") {
      closureDetails = [52, 86, 120, 154, 188, 222, 256]
        .map(
          (cy) =>
            `<circle cx="150" cy="${cy}" r="2.1" fill="#f8fafc" stroke="#18181b" stroke-width="1.1" />`,
        )
        .join("");
    } else if (closureKey === "kancing_tertutup") {
      closureDetails = `
        <circle cx="150" cy="46" r="2" fill="#f8fafc" stroke="#18181b" stroke-width="1.1" />
        <line x1="147.2" y1="52" x2="147.2" y2="272" stroke="${outlineColor}" stroke-width="0.9" stroke-dasharray="2.5 2" opacity="0.6" />
      `;
    } else if (closureKey === "resleting") {
      closureDetails = `
        <line x1="150" y1="43" x2="150" y2="273" stroke="#1e293b" stroke-width="3" />
        <line x1="150" y1="43" x2="150" y2="273" stroke="#cbd5e1" stroke-width="1.8" stroke-dasharray="2 2" />
        <rect x="147.6" y="64" width="4.8" height="5.5" rx="1" fill="#94a3b8" stroke="#18181b" stroke-width="0.8" />
        <rect x="148.3" y="69.5" width="3.4" height="8" rx="1" fill="#e2e8f0" stroke="#18181b" stroke-width="0.8" />
      `;
    }

    placketMarkup = `
      <rect x="145.5" y="42" width="9" height="232" fill="${placketColor}" stroke="${outlineColor}" stroke-width="1.3" />
      ${showHalfTop ? `<rect x="145.5" y="42" width="9" height="84" fill="${useAccent ? accent.hex : secondary.hex}" stroke="${outlineColor}" stroke-width="1.3" />` : ""}
      ${closureDetails}
    `;
  }

  let collarMarkup = "";
  if (isBack) {
    collarMarkup = `
      <path d="M123 19 Q150 22 177 19 L183 31 Q150 37 117 31 Z" fill="${collarColor}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
      <path d="M119 29.5 Q150 35 181 29.5" fill="none" stroke="${collarStitch}" stroke-width="0.9" opacity="0.35" />
    `;
  } else if (selectedCollar === "shanghai") {
    collarMarkup = `
      <path d="M123 19 Q150 23 177 19 L174 34 Q150 38 126 34 Z" fill="${neckInnerFill}" stroke="${outlineColor}" stroke-width="1.35" />
      <path d="M122 24 Q150 36 178 24 L182 34 Q150 47 118 34 Z" fill="${collarColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
      <path d="M121 27.5 Q150 39.5 179 27.5" fill="none" stroke="${collarStitch}" stroke-width="0.9" stroke-dasharray="2 2" />
    `;
  } else if (selectedCollar === "revere") {
    collarMarkup = `
      <path d="M123 19 L150 58 L177 19 L174 34 L150 58 L126 34 Z" fill="${neckInnerFill}" stroke="${outlineColor}" stroke-width="1.2" />
      <path d="M123 19 L150 58 L127 56 L122 44 L115 31 Z" fill="${collarColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
      <path d="M177 19 L150 58 L173 56 L178 44 L185 31 Z" fill="${layout === "setengah_vertikal" ? secondary.hex : collarColor}" stroke="${outlineColor}" stroke-width="1.35" stroke-linejoin="round" />
    `;
  } else {
    collarMarkup = `
      <path d="M123 19 Q150 23 177 19 L174 34 Q150 38 126 34 Z" fill="${neckInnerFill}" stroke="${outlineColor}" stroke-width="1.35" />
      <path d="M123 19 Q136 33 150 43 L131 53 Q119 41 116 30 Z" fill="${collarColor}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
      <path d="M177 19 Q164 33 150 43 L169 53 Q181 41 184 30 Z" fill="${layout === "setengah_vertikal" ? secondary.hex : collarColor}" stroke="${outlineColor}" stroke-width="1.4" stroke-linejoin="round" />
      ${
        selectedCollar === "buttondown"
          ? `<circle cx="132" cy="48.5" r="1.4" fill="#f8fafc" stroke="#18181b" stroke-width="0.85" /><circle cx="168" cy="48.5" r="1.4" fill="#f8fafc" stroke="#18181b" stroke-width="0.85" />`
          : ""
      }
    `;
  }

  const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}">
      <defs>
        <clipPath id="${clipId}">
          <path d="${bodyPath}" />
        </clipPath>
      </defs>
      ${colorZonesMarkup}
      <path d="${bodyPath}" fill="none" stroke="${outlineColor}" stroke-width="1.45" stroke-linejoin="round" />
      ${cuffsMarkup}
      <path d="${c.shoulderL}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <path d="${c.shoulderR}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <path d="${sleeveSpec.armholeL}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <path d="${sleeveSpec.armholeR}" fill="none" stroke="${outlineColor}" stroke-width="1.35" stroke-linecap="round" />
      <line x1="${c.hemX1}" y1="${c.hemTopY}" x2="${c.hemX2}" y2="${c.hemTopY}" stroke="${pStitch}" stroke-width="0.95" stroke-dasharray="2.5 2.5" opacity="0.45" />
      ${isBack ? `<path d="${c.backYoke}" fill="none" stroke="${outlineColor}" stroke-width="1.25" />` : ""}
      ${epauletMarkup}
      ${pocketsMarkup}
      ${placketMarkup}
      ${collarMarkup}
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
  variant,
) {
  const { x: px, y: py, w: pw, h: ph } = panelRect;

  roundRectCanvas(ctx, px, py, pw, ph, 14);
  ctx.fillStyle = "#f8fafc";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.25;
  ctx.stroke();

  const badgeW = Math.min(pw - 24, 188);
  roundRectCanvas(ctx, px + (pw - badgeW) / 2, py + 12, badgeW, 24, 12);
  ctx.fillStyle = "#e2e8f0";
  ctx.fill();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 11px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(titleText, px + pw / 2, py + 28);

  const { svgStr, vb } = buildStandaloneKorsaSVGString(
    viewKey,
    cutKey,
    variant,
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
  const korsaImg = await loadImageAsync(svgUrl);
  if (korsaImg) {
    ctx.drawImage(korsaImg, destX, destY, destW, destH);
  }
  URL.revokeObjectURL(svgUrl);

  const geo = computePrintZoneGeometry(viewKey, cutKey, variant.sleeve);
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

    ctx.font = "800 10.5px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#18181b";
    ctx.strokeText(geo.isDualChest ? "Logo 8×8" : geo.dim, ccx, czY + czH + 12);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(geo.isDualChest ? "Logo 8×8" : geo.dim, ccx, czY + czH + 12);
    ctx.restore();

    if (viewKey === "depan" && geo.isDualChest) {
      const c = cuts[cutKey];
      const hasPocket = selectedPocket !== "tanpa";
      const rx = destX + (c.chestRight.x - vbX) * scaleX;
      const ry = destY + ((hasPocket ? c.chestRight.y + 2 : 74) - vbY) * scaleY;
      const rw = 26 * scaleX;
      const rh = 11 * scaleY;
      roundRectCanvas(ctx, rx, ry, rw, rh, 2);
      ctx.fillStyle = "rgba(37, 99, 235, 0.16)";
      ctx.fill();
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 2]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = "800 10px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 2.8;
      ctx.strokeStyle = "#18181b";
      ctx.strokeText("Nama 9×3", rx + rw / 2, ry + rh + 11);
      ctx.fillStyle = "#ffffff";
      ctx.fillText("Nama 9×3", rx + rw / 2, ry + rh + 11);
    }
  }

  ctx.fillStyle = activePrint.isNone ? "#64748b" : "#18181b";
  ctx.font = "700 12px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  const rotSuffix =
    geo && geo.rot !== 0 ? ` [${geo.rot > 0 ? "+" : ""}${geo.rot}°]` : "";
  const caption = activePrint.isNone
    ? "Polos (Tanpa Bordir/Sablon)"
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
  const specGridH = 274;
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
  ctx.fillText("SPESIFIKASI ORDER KORSA / PDL / PDH", 44, 57);

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
    closureCatalog[activeVar.closure]?.shortLabel || "Kancing Luar";
  ctx.fillText(
    `Preview: ${getVariantColorSummary(activeVar)} (${previewSleeveLabel} • ${previewClosureLabel})`,
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
    activeVar,
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
    activeVar,
  );

  let afterPanelsY = panelsStartY + frontBackBlockH + 14;

  if (hasAnySleevePrint) {
    if (hasRightSleevePrint && hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: halfW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "LENGAN KANAN (+32°)",
        selectedCut,
        activeVar,
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
        "LENGAN KIRI (-32°)",
        selectedCut,
        activeVar,
      );
    } else if (hasRightSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKanan",
        "LENGAN KANAN (+32°)",
        selectedCut,
        activeVar,
      );
    } else if (hasLeftSleevePrint) {
      await drawMockupPanelOnCanvas(
        ctx,
        { x: 68, y: afterPanelsY, w: innerW, h: sleeveBlockH - 14 },
        "lenganKiri",
        "LENGAN KIRI (-32°)",
        selectedCut,
        activeVar,
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
    const label = `${getVariantColorSummary(v)} (${slv})`;
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

  // 3. SPESIFIKASI DETAIL KORSA & TITIK BORDIR
  const colW = (W - 88 - 18) / 2;

  roundRectCanvas(ctx, 44, curY, colW, specGridH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = "#18181b";
  ctx.font = "800 15px system-ui, -apple-system, sans-serif";
  ctx.fillText("2. SPESIFIKASI MODEL & FITUR KORSA", 68, curY + 34);

  const leftRows = [
    ["Model & Bahan", `${cuts[selectedCut].label} • ${fabric.shortName}`],
    ["Jenis Kerah", collarCatalog[selectedCollar].label],
    ["Bet Atas / Bahu", epauletCatalog[selectedEpaulet].label],
    ["Jenis Saku Dada", pocketCatalog[selectedPocket].label],
    [
      "Pola Variasi Warna",
      colorLayoutCatalog[activeVar.colorLayout || "polos"].label,
    ],
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
    ctx.font = "600 12.5px system-ui, -apple-system, sans-serif";
    ctx.fillText(k, 68, ry);

    ctx.fillStyle = "#18181b";
    ctx.font = "800 12.5px system-ui, -apple-system, sans-serif";
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
    if (item.isNone) return "Polos (Tanpa Bordir/Sablon)";
    const deg = getEffectiveAngleForSide(sideKey);
    const rotTxt =
      sideKey === "lenganKanan" || sideKey === "lenganKiri"
        ? ` (${deg > 0 ? "+" : ""}${deg}°)`
        : "";
    const fileTxt = customDesigns[sideKey] ? " • File" : "";
    return `${item.name} • ${item.dim}${rotTxt}${fileTxt}`;
  };

  const rightRows = [
    ["Depan", formatSpecSide("depan")],
    ["Belakang", formatSpecSide("belakang")],
    ["Lengan Kanan", formatSpecSide("lenganKanan")],
    ["Lengan Kiri", formatSpecSide("lenganKiri")],
    [
      "Plaket Depan",
      closureCatalog[activeVar.closure || selectedClosure].label,
    ],
    ["Cakupan Harga", "Include maks. 3 titik bordir komputer"],
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
    ctx.font = "600 12.5px system-ui, -apple-system, sans-serif";
    ctx.fillText(k, rightBoxX + 24, ry);

    const isPolos = v.startsWith("Polos");
    ctx.fillStyle = isPolos ? "#94a3b8" : "#18181b";
    ctx.font = isPolos
      ? "600 12.5px system-ui, -apple-system, sans-serif"
      : "800 12.5px system-ui, -apple-system, sans-serif";
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
    const closureShort = closureCatalog[v.closure]?.shortLabel || "Kancing";
    ctx.fillStyle = "#18181b";
    ctx.font = "700 11.5px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `${rIdx + 1}. ${getVariantColorSummary(v)} (${sleeveShort} • ${closureShort})`,
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
  link.download = `Spesifikasi-Order-Korsa-Atensi-Konveksi-${Date.now()}.png`;
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
        <title>Spesifikasi Order Korsa - Atensi Konveksi</title>
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
        `Spesifikasi-Order-Korsa-Atensi-Konveksi-${Date.now()}.png`,
        { type: "image/png" },
      );
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Spesifikasi Order Korsa - Atensi Konveksi",
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
  renderSubcolorTargetTabs();
  renderColorPresets();
  applySleeveToMockup(selectedSleeve, false);
  applyColorsAndPartsToMockup(false);
  renderPalette();
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
