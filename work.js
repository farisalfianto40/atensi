const WHATSAPP_NUMBER = "62895413909591";
const WHATSAPP_DISPLAY = "+62 895-4139-09591";

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// ================= DATA PRICE LIST BAHAN, MODEL WORK SHIRT, LENGAN, JAHITAN, KERAH, PENUTUP, SAKU & SAFETY =================
const LONG_SLEEVE_EXTRA = 10000;
const LONG_SLEEVE_ROLLUP_EXTRA = 13000;
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
      classic: 115000,
      utility: 125000,
      safety: 135000,
    },
  },
  {
    id: "cotton-twill",
    name: "Cotton Twill / Oxford Workwear",
    shortName: "Cotton Twill",
    prices: {
      classic: 130000,
      utility: 140000,
      safety: 150000,
    },
  },
  {
    id: "japan-drill",
    name: "Japan Drill (Nagata Original)",
    shortName: "Japan Drill",
    prices: {
      classic: 135000,
      utility: 145000,
      safety: 155000,
    },
  },
  {
    id: "ripstop-canvas",
    name: "Ripstop Tornado / Baby Canvas Heavy",
    shortName: "Ripstop / Canvas",
    prices: {
      classic: 145000,
      utility: 155000,
      safety: 165000,
    },
  },
];

const sleeveCatalog = {
  pendek: {
    label: "Lengan Pendek",
    shortLabel: "L. Pendek",
    extra: 0,
    isLong: false,
    hasRollupTab: false,
  },
  panjang: {
    label: "Lengan Panjang (Manset)",
    shortLabel: "L. Panjang",
    extra: LONG_SLEEVE_EXTRA,
    isLong: true,
    hasRollupTab: false,
  },
  panjang_skoder: {
    label: "Lengan Panjang + Roll-Up Tab",
    shortLabel: "L.Pjg Roll-Up",
    extra: LONG_SLEEVE_ROLLUP_EXTRA,
    isLong: true,
    hasRollupTab: true,
  },
};

const stitchCatalog = {
  standar: {
    label: "Double Stitch Standar",
    shortLabel: "Double Stitch",
    extra: 0,
  },
  triple_stitch: {
    label: "Triple Stitch Heavy Duty (+Bar-Tack)",
    shortLabel: "Triple Stitch",
    extra: 5000,
  },
  airflow_yoke: {
    label: "Airflow Back Vent (Ventilasi Jaring)",
    shortLabel: "Airflow Vent",
    extra: 8000,
  },
};

const collarCatalog = {
  camp: {
    label: "Kerah Camp / Revere (Kerah Buka)",
    shortLabel: "Kerah Camp",
    extra: 0,
    desc: "Kerah buka datar (Camp/Revere) ikonik khas mechanic, bengkel & barista",
  },
  kemeja: {
    label: "Point Collar (Kerah Kemeja)",
    shortLabel: "Point Collar",
    extra: 0,
    desc: "Kerah kemeja berkaki tegas untuk supervisor, teknisi & seragam kantor",
  },
  buttondown: {
    label: "Kerah Button-Down",
    shortLabel: "Button-Down",
    extra: 0,
    desc: "Kerah dengan kancing kecil pengunci ujung daun kerah agar tetap rapi",
  },
  banded: {
    label: "Banded / Shanghai Collar",
    shortLabel: "Banded Collar",
    extra: 0,
    desc: "Kerah tegak minimalis tanpa daun lipat untuk crew modern & F&B",
  },
};

const closureCatalog = {
  kancing_melamin: {
    label: "Kancing Melamin 4-Lubang (Tahan Panas)",
    shortLabel: "Kancing Melamin",
    extra: 0,
  },
  snap_button: {
    label: "Kancing Jepret Logam (Snap Button)",
    shortLabel: "Snap Button",
    extra: 5000,
  },
  kancing_tertutup: {
    label: "Kancing Tertutup (Hidden Placket)",
    shortLabel: "Hidden Placket",
    extra: 3000,
  },
  resleting: {
    label: "Resleting Full (Heavy Zipper)",
    shortLabel: "Heavy Zipper",
    extra: 8000,
  },
};

const pocketCatalog = {
  dual_button: {
    label: "2 Saku Kancing + Slot Pulpen",
    shortLabel: "2 Saku Kancing",
    extra: 0,
  },
  dual_flap: {
    label: "2 Saku Tutup / Flap Berkancing",
    shortLabel: "2 Saku Flap",
    extra: 4000,
  },
  utility_zip: {
    label: "Utility Flap + Saku Resleting HP",
    shortLabel: "Utility + Zip",
    extra: 7000,
  },
  single_pen: {
    label: "1 Saku Dada Kiri + Sekat Alat",
    shortLabel: "1 Saku Kiri",
    extra: 0,
  },
  tanpa: {
    label: "Tanpa Saku (Polos)",
    shortLabel: "Tanpa Saku",
    extra: 0,
  },
};

const utilityCatalog = {
  tanpa: {
    label: "Standar (Tanpa Reflektor)",
    shortLabel: "Standar",
    extra: 0,
  },
  reflektor: {
    label: "Strip Reflektor Scotchlite (Dada, Punggung & Lengan)",
    shortLabel: "Scotchlite Safety",
    extra: 15000,
  },
  id_velcro: {
    label: "Gantungan ID Card / HT + Velcro Patch Dada",
    shortLabel: "ID Loop + Velcro",
    extra: 5000,
  },
};

const colorLayoutCatalog = {
  polos: {
    label: "1 Warna Solid",
    shortLabel: "Solid",
    extra: 0,
    desc: "Seluruh work shirt menggunakan 1 warna kain solid",
  },
  setengah_horizontal: {
    label: "Two-Tone Dada Atas (Yoke Split)",
    shortLabel: "Two-Tone Atas",
    extra: TWO_TONE_EXTRA,
    desc: "Bagian dada & bahu atas warna kombinasi + badan bawah warna utama",
  },
  lengan: {
    label: "Kombinasi Lengan (Two-Tone Sleeves)",
    shortLabel: "Variasi Lengan",
    extra: TWO_TONE_EXTRA,
    desc: "Badan warna utama + kedua lengan baju menggunakan warna kombinasi",
  },
  setengah_vertikal: {
    label: "Two-Tone Kanan–Kiri (Pit Crew)",
    shortLabel: "Two-Tone Ka-Ki",
    extra: TWO_TONE_EXTRA,
    desc: "Belah tengah vertikal: sisi kanan warna utama & sisi kiri warna kombinasi",
  },
  list_kombinasi: {
    label: "Aksen Kerah, Plaket & Saku",
    shortLabel: "Aksen Kerah/Saku",
    extra: TWO_TONE_EXTRA,
    desc: "Badan & lengan warna utama + kerah, plaket & saku warna aksen kontras",
  },
  custom_bebas: {
    label: "Custom 3 Zona Warna",
    shortLabel: "Custom 3 Zona",
    extra: TWO_TONE_EXTRA,
    desc: "Kombinasi 3 zona warna sekaligus: Badan, Dada/Lengan & Aksen",
  },
};

const cuts = {
  classic: {
    label: "Classic Work",
    chartTitle: "Classic Work Fit",
    pendek: {
      body: "M116 30 L68 45 L22 120 L68 140 L76 105 L76 274 L224 274 L224 105 L232 140 L278 120 L232 45 L184 30 Q150 44 116 30 Z",
      bodyBack:
        "M116 30 L68 45 L22 120 L68 140 L76 105 L76 274 L224 274 L224 105 L232 140 L278 120 L232 45 L184 30 Q150 37 116 30 Z",
      armholeL: "M68 45 Q76 74 76 105",
      armholeR: "M232 45 Q224 74 224 105",
      scuffL: "M25.2 114.8 L71.2 134.8 L68 140 L22 120 Z",
      scuffR: "M274.8 114.8 L228.8 134.8 L232 140 L278 120 Z",
      sleeveZoneR: "M68 45 L-20 45 L-20 220 L76 220 L76 105 Q76 74 68 45 Z",
      sleeveZoneL:
        "M232 45 L320 45 L320 220 L224 220 L224 105 Q224 74 232 45 Z",
      sleeveRAnchor: { x: 51, y: 95, rot: 32 },
      sleeveLAnchor: { x: 249, y: 95, rot: -32 },
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
      body: "M116 30 L68 45 L-3 172 L25 186 L76 110 L76 274 L224 274 L224 110 L275 186 L303 172 L232 45 L184 30 Q150 44 116 30 Z",
      bodyBack:
        "M116 30 L68 45 L-3 172 L25 186 L76 110 L76 274 L224 274 L224 110 L275 186 L303 172 L232 45 L184 30 Q150 37 116 30 Z",
      armholeL: "M68 45 Q76 77 76 110",
      armholeR: "M232 45 Q224 77 224 110",
      cuffL: "M2.5 163 L30.5 177 L25 186 L-3 172 Z",
      cuffR: "M297.5 163 L269.5 177 L275 186 L303 172 Z",
      sleeveZoneR: "M68 45 L-25 45 L-25 220 L76 220 L76 110 Q76 77 68 45 Z",
      sleeveZoneL:
        "M232 45 L325 45 L325 220 L224 220 L224 110 Q224 77 232 45 Z",
      sleeveRAnchor: { x: 40, y: 120, rot: 32 },
      sleeveLAnchor: { x: 260, y: 120, rot: -32 },
      sizes: [
        { size: "S", p: 70, l: 51, pl: 59 },
        { size: "M", p: 73, l: 54, pl: 61 },
        { size: "L", p: 76, l: 57, pl: 63 },
        { size: "XL", p: 79, l: 60, pl: 65 },
        { size: "2XL", p: 82, l: 63, pl: 67 },
        { size: "3XL", p: 84, l: 66, pl: 68 },
        { size: "4XL", p: 86, l: 69, pl: 69 },
        { size: "5XL", p: 88, l: 72, pl: 70 },
      ],
    },
    shoulderL: "M116 30 L68 45",
    shoulderR: "M184 30 L232 45",
    hemX1: 77,
    hemX2: 223,
    hemTopY: 268,
    hemBotY: 270.5,
    backYoke: "M71 57 L229 57",
    chestLeft: { x: 168, y: 63 },
    chestRight: { x: 106, y: 63 },
    centerX: 150,
    chestTopY: 66,
  },
  utility: {
    label: "Utility / Crew",
    chartTitle: "Utility / Crew Relaxed",
    pendek: {
      body: "M116 30 L66 46 L20 122 L66 142 L74 107 L74 276 L226 276 L226 107 L234 142 L280 122 L234 46 L184 30 Q150 44 116 30 Z",
      bodyBack:
        "M116 30 L66 46 L20 122 L66 142 L74 107 L74 276 L226 276 L226 107 L234 142 L280 122 L234 46 L184 30 Q150 37 116 30 Z",
      armholeL: "M66 46 Q74 76 74 107",
      armholeR: "M234 46 Q226 76 226 107",
      scuffL: "M23.2 116.8 L69.2 136.8 L66 142 L20 122 Z",
      scuffR: "M276.8 116.8 L230.8 136.8 L234 142 L280 122 Z",
      sleeveZoneR: "M66 46 L-20 46 L-20 220 L74 220 L74 107 Q74 76 66 46 Z",
      sleeveZoneL:
        "M234 46 L320 46 L320 220 L226 220 L226 107 Q226 76 234 46 Z",
      sleeveRAnchor: { x: 49, y: 97, rot: 32 },
      sleeveLAnchor: { x: 251, y: 97, rot: -32 },
      sizes: [
        { size: "S", p: 71, l: 53, pl: 25 },
        { size: "M", p: 74, l: 56, pl: 26 },
        { size: "L", p: 77, l: 59, pl: 27 },
        { size: "XL", p: 80, l: 62, pl: 28 },
        { size: "2XL", p: 83, l: 65, pl: 29 },
        { size: "3XL", p: 85, l: 68, pl: 30 },
        { size: "4XL", p: 87, l: 71, pl: 31 },
        { size: "5XL", p: 89, l: 74, pl: 32 },
      ],
    },
    panjang: {
      body: "M116 30 L66 46 L-5 174 L23 188 L74 112 L74 276 L226 276 L226 112 L277 188 L305 174 L234 46 L184 30 Q150 44 116 30 Z",
      bodyBack:
        "M116 30 L66 46 L-5 174 L23 188 L74 112 L74 276 L226 276 L226 112 L277 188 L305 174 L234 46 L184 30 Q150 37 116 30 Z",
      armholeL: "M66 46 Q74 79 74 112",
      armholeR: "M234 46 Q226 79 226 112",
      cuffL: "M0.5 165 L28.5 179 L23 188 L-5 174 Z",
      cuffR: "M299.5 165 L271.5 179 L277 188 L305 174 Z",
      sleeveZoneR: "M66 46 L-25 46 L-25 220 L74 220 L74 112 Q74 79 66 46 Z",
      sleeveZoneL:
        "M234 46 L325 46 L325 220 L226 220 L226 112 Q226 79 234 46 Z",
      sleeveRAnchor: { x: 38, y: 122, rot: 32 },
      sleeveLAnchor: { x: 262, y: 122, rot: -32 },
      sizes: [
        { size: "S", p: 71, l: 53, pl: 60 },
        { size: "M", p: 74, l: 56, pl: 62 },
        { size: "L", p: 77, l: 59, pl: 64 },
        { size: "XL", p: 80, l: 62, pl: 66 },
        { size: "2XL", p: 83, l: 65, pl: 68 },
        { size: "3XL", p: 85, l: 68, pl: 69 },
        { size: "4XL", p: 87, l: 71, pl: 70 },
        { size: "5XL", p: 89, l: 74, pl: 71 },
      ],
    },
    shoulderL: "M116 30 L66 46",
    shoulderR: "M184 30 L234 46",
    hemX1: 75,
    hemX2: 225,
    hemTopY: 270,
    hemBotY: 272.5,
    backYoke: "M69 58 L231 58",
    chestLeft: { x: 169, y: 63 },
    chestRight: { x: 105, y: 63 },
    centerX: 150,
    chestTopY: 66,
  },
  safety: {
    label: "Safety / PDL",
    chartTitle: "Safety / PDL Lapangan",
    pendek: {
      body: "M116 30 L67 45 L21 121 L67 141 L75 106 L75 275 L225 275 L225 106 L233 141 L279 121 L233 45 L184 30 Q150 44 116 30 Z",
      bodyBack:
        "M116 30 L67 45 L21 121 L67 141 L75 106 L75 275 L225 275 L225 106 L233 141 L279 121 L233 45 L184 30 Q150 37 116 30 Z",
      armholeL: "M67 45 Q75 75 75 106",
      armholeR: "M233 45 Q225 75 225 106",
      scuffL: "M24.2 115.8 L70.2 135.8 L67 141 L21 121 Z",
      scuffR: "M275.8 115.8 L229.8 135.8 L233 141 L279 121 Z",
      sleeveZoneR: "M67 45 L-20 45 L-20 220 L75 220 L75 106 Q75 75 67 45 Z",
      sleeveZoneL:
        "M233 45 L320 45 L320 220 L225 220 L225 106 Q225 75 233 45 Z",
      sleeveRAnchor: { x: 50, y: 96, rot: 32 },
      sleeveLAnchor: { x: 250, y: 96, rot: -32 },
      sizes: [
        { size: "S", p: 70, l: 52, pl: 24 },
        { size: "M", p: 73, l: 55, pl: 25 },
        { size: "L", p: 76, l: 58, pl: 26 },
        { size: "XL", p: 79, l: 61, pl: 27 },
        { size: "2XL", p: 82, l: 64, pl: 28 },
        { size: "3XL", p: 84, l: 67, pl: 29 },
        { size: "4XL", p: 86, l: 70, pl: 30 },
        { size: "5XL", p: 88, l: 73, pl: 31 },
      ],
    },
    panjang: {
      body: "M116 30 L67 45 L-4 173 L24 187 L75 111 L75 275 L225 275 L225 111 L276 187 L304 173 L233 45 L184 30 Q150 44 116 30 Z",
      bodyBack:
        "M116 30 L67 45 L-4 173 L24 187 L75 111 L75 275 L225 275 L225 111 L276 187 L304 173 L233 45 L184 30 Q150 37 116 30 Z",
      armholeL: "M67 45 Q75 78 75 111",
      armholeR: "M233 45 Q225 78 225 111",
      cuffL: "M1.5 164 L29.5 178 L24 187 L-4 173 Z",
      cuffR: "M298.5 164 L270.5 178 L276 187 L304 173 Z",
      sleeveZoneR: "M67 45 L-25 45 L-25 220 L75 220 L75 111 Q75 78 67 45 Z",
      sleeveZoneL:
        "M233 45 L325 45 L325 220 L225 220 L225 111 Q225 78 233 45 Z",
      sleeveRAnchor: { x: 39, y: 121, rot: 32 },
      sleeveLAnchor: { x: 261, y: 121, rot: -32 },
      sizes: [
        { size: "S", p: 70, l: 52, pl: 59 },
        { size: "M", p: 73, l: 55, pl: 61 },
        { size: "L", p: 76, l: 58, pl: 63 },
        { size: "XL", p: 79, l: 61, pl: 65 },
        { size: "2XL", p: 82, l: 64, pl: 67 },
        { size: "3XL", p: 84, l: 67, pl: 68 },
        { size: "4XL", p: 86, l: 70, pl: 69 },
        { size: "5XL", p: 88, l: 73, pl: 70 },
      ],
    },
    shoulderL: "M116 30 L67 45",
    shoulderR: "M184 30 L233 45",
    hemX1: 76,
    hemX2: 224,
    hemTopY: 269,
    hemBotY: 271.5,
    backYoke: "M70 57 L230 57",
    chestLeft: { x: 168, y: 63 },
    chestRight: { x: 106, y: 63 },
    centerX: 150,
    chestTopY: 66,
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
      name: "Logo Dada Kiri (Atas Saku)",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Paling Populer",
      desc: "Bordir komputer logo perusahaan, bengkel, atau instansi di atas saku kiri.",
      mini: { x: 33, y: 14, w: 8, h: 8 },
      mainZone: { anchor: "chestLeft", w: 26, h: 24 },
    },
    {
      id: "logo-teks-kiri",
      name: "Logo + Teks Unit / Divisi",
      dim: "9 × 6 cm",
      area: 54,
      badge: "Seragam Perusahaan",
      desc: "Logo disertai tulisan nama departemen atau posisi di bawahnya.",
      mini: { x: 32, y: 14, w: 10, h: 6.5 },
      mainZone: { anchor: "chestLeft", w: 30, h: 19 },
    },
    {
      id: "patch-velcro-kiri",
      name: "Patch Velcro Dada Kiri",
      dim: "8 × 5 cm",
      area: 40,
      badge: "Crew / Lapangan",
      desc: "Emblem bordir dengan perekat velcro lepas-pasang di dada kiri.",
      mini: { x: 33, y: 15, w: 9, h: 5.5 },
      mainZone: { anchor: "chestLeft", w: 28, h: 16 },
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
      name: "Bordir Nama Karyawan",
      dim: "10 × 2,5 cm",
      area: 25,
      badge: "Standar Seragam",
      desc: "Bordir nama personel atau jabatan di atas saku dada kanan.",
      mini: { x: 18, y: 16, w: 10, h: 3.5 },
      mainZone: { anchor: "chestRight", w: 30, h: 10 },
    },
    {
      id: "logo-k3-kanan",
      name: "Logo Safety K3 / Brand",
      dim: "8 × 8 cm",
      area: 64,
      badge: "Safety / Workshop",
      desc: "Logo K3 (Keselamatan Kesehatan Kerja), sponsor, atau logo kedua.",
      mini: { x: 19, y: 14, w: 8, h: 8 },
      mainZone: { anchor: "chestRight", w: 26, h: 24 },
    },
    {
      id: "bendera-nama-kanan",
      name: "Bendera + Nama Personel",
      dim: "10 × 6 cm",
      area: 60,
      badge: "Lapangan / PDL",
      desc: "Kombinasi emblem bendera di atas dan bordir nama karyawan di bawah.",
      mini: { x: 18, y: 14, w: 10, h: 6.5 },
      mainZone: { anchor: "chestRight", w: 30, h: 19 },
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
      desc: "Bagian punggung kemeja dibiarkan polos.",
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
      name: "Tulisan Perusahaan / Crew",
      dim: "26 × 10 cm",
      area: 260,
      badge: "Paling Populer",
      desc: "Tulisan identitas perusahaan, bengkel, atau instansi melintang di punggung.",
      mini: { x: 18, y: 16, w: 24, h: 9 },
      mainZone: { anchor: "backCenter", w: 86, h: 30, cy: 102 },
    },
    {
      id: "a4-punggung",
      name: "Logo + Teks Punggung (A4)",
      dim: "21 × 29,7 cm",
      area: 624,
      badge: "Standar Besar",
      desc: "Kombinasi logo utama dan tulisan besar di tengah punggung.",
      mini: { x: 20, y: 15, w: 20, h: 24 },
      mainZone: { anchor: "backCenter", w: 70, h: 88, cy: 142 },
    },
    {
      id: "a3-punggung",
      name: "Full Punggung (A3)",
      dim: "29,7 × 42 cm",
      area: 1247,
      badge: "Full Artwork",
      desc: "Grafis atau emblem full punggung ukuran maksimal.",
      mini: { x: 18, y: 14, w: 24, h: 31 },
      mainZone: { anchor: "backCenter", w: 94, h: 122, cy: 152 },
    },
  ],
  lengan: [
    {
      id: "none",
      name: "Tanpa Bordir/Sablon",
      dim: "Polos",
      area: 0,
      badge: "Opsional",
      isNone: true,
      desc: "Kedua bagian lengan dibiarkan polos.",
      mini: null,
    },
    {
      id: "bendera-lengan-kanan",
      name: "Bendera Merah Putih (L. Kanan)",
      dim: "7 × 4,5 cm",
      area: 31.5,
      badge: "Standar PDH/PDL",
      desc: "Bordir emblem Bendera Merah Putih di lengan kanan atas.",
      mini: { x: 10, y: 15, w: 6, h: 4 },
      mainZone: { anchor: "sleeveRight", w: 22, h: 14 },
    },
    {
      id: "logo-lengan-kiri",
      name: "Logo Divisi / K3 (L. Kiri)",
      dim: "7 × 7 cm",
      area: 49,
      badge: "Emblem Lengan",
      desc: "Logo keselamatan K3, bendera, atau emblem unit di lengan kiri.",
      mini: { x: 44, y: 14, w: 6, h: 6 },
      mainZone: { anchor: "sleeveLeft", w: 22, h: 22 },
    },
    {
      id: "kedua-lengan",
      name: "Emblem Kedua Lengan (Ka-Ki)",
      dim: "7 × 5 cm (×2)",
      area: 70,
      badge: "Full Uniform",
      desc: "Bendera di lengan kanan + logo perusahaan/K3 di lengan kiri.",
      mini: { x: 10, y: 15, w: 6, h: 4, mirror: true },
      mainZone: { anchor: "bothSleeves", w: 21, h: 15 },
    },
  ],
};

// ================= PALET WARNA LENGKAP (36 WARNA WORKWEAR & INDUSTRIAL) =================
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

// ================= KONDISI AWAL WORK SHIRT =================
const DEFAULT_PRIMARY_COLOR =
  palette.find((p) => p.name === "Midnight Navy") || palette[8];
const DEFAULT_SECONDARY_COLOR =
  palette.find((p) => p.name === "Light Grey") || palette[4];
const DEFAULT_ACCENT_COLOR =
  palette.find((p) => p.name === "Oranye Safety") || palette[30];

let selectedCut = "classic";
let selectedSleeve = "pendek";
let selectedStitch = "standar";
let selectedCollar = "camp";
let selectedClosure = "kancing_melamin";
let selectedPocket = "dual_button";
let selectedUtility = "tanpa";
let selectedColorLayout = "polos";
let selectedFabricId = "american-drill";

let selectedColor = DEFAULT_PRIMARY_COLOR;
let selectedSecondaryColor = DEFAULT_SECONDARY_COLOR;
let selectedAccentColor = DEFAULT_ACCENT_COLOR;
let activeColorSlot = "primary"; // "primary" | "secondary" | "accent"

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
  lengan: null,
};

const selectedPrints = {
  dadaKiri: printCatalog.dadaKiri[1],
  dadaKanan: printCatalog.dadaKanan[1],
  belakang: printCatalog.belakang[2],
  lengan: printCatalog.lengan[0],
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
    color: DEFAULT_PRIMARY_COLOR,
    secondaryColor: DEFAULT_SECONDARY_COLOR,
    accentColor: DEFAULT_ACCENT_COLOR,
    colorLayout: "polos",
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
    fabricCatalog.find((f) => f.id === "american-drill") ||
    fabricCatalog[0]
  );
}

function getGlobalModelAddons() {
  const stitchAddon = stitchCatalog[selectedStitch]?.extra || 0;
  const collarAddon = collarCatalog[selectedCollar]?.extra || 0;
  const closureAddon = closureCatalog[selectedClosure]?.extra || 0;
  const pocketAddon = pocketCatalog[selectedPocket]?.extra || 0;
  const utilityAddon = utilityCatalog[selectedUtility]?.extra || 0;
  return stitchAddon + collarAddon + closureAddon + pocketAddon + utilityAddon;
}

function getVariantBaseUnitPrice(variant) {
  const fabric = getSelectedFabric();
  const basePrice = fabric.prices[selectedCut] || fabric.prices.classic;
  const globalAddons = getGlobalModelAddons();
  const sleeveAddon = sleeveCatalog[variant.sleeve]?.extra || 0;
  const layoutAddon =
    (variant.colorLayout || selectedColorLayout) !== "polos"
      ? TWO_TONE_EXTRA
      : 0;
  return Math.max(50000, basePrice + globalAddons + sleeveAddon + layoutAddon);
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
  const wrapper = document.getElementById("shirt-stage-wrapper");
  const stage = document.getElementById("shirt-stage");
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
    const wrapper = document.getElementById("shirt-stage-wrapper");
    const stage = document.getElementById("shirt-stage");
    if (wrapper && stage) {
      wrapper.style.minHeight = `${stage.offsetHeight + MOBILE_FLOATING_BOTTOM_OFFSET}px`;
    }
  }
}

function pulseFloatingStageFeedback() {
  if (!isMobileFloatingActive || !window.Motion || !window.Motion.animate) {
    return;
  }
  const stage = document.getElementById("shirt-stage");
  if (stage) {
    Motion.animate(
      stage,
      { scale: [0.985, 1] },
      { type: "spring", stiffness: 420, damping: 24 },
    );
  }
}

function toggleMobileFloatingDetail() {
  const stage = document.getElementById("shirt-stage");
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

  const cutCols = ["classic", "utility", "safety"];
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

// ================= SINKRONISASI GEOMETRI & WARNA SVG WORK SHIRT =================
function updateHeaderSpecLabel() {
  const cutLabel = document.getElementById("active-cut-label");
  if (cutLabel) {
    const cName = cuts[selectedCut]?.label || "Classic Work";
    const sName = sleeveCatalog[selectedSleeve]?.shortLabel || "L. Pendek";
    const colName = collarCatalog[selectedCollar]?.shortLabel || "Kerah Camp";
    cutLabel.textContent = `${cName} • ${sName} • ${colName}`;
  }
}

function updateWorkShirtGeometry() {
  const cut = cuts[selectedCut] || cuts.classic;
  const sleeveInfo = sleeveCatalog[selectedSleeve] || sleeveCatalog.pendek;
  const sleeveGeom = sleeveInfo.isLong ? cut.panjang : cut.pendek;
  const isBack = mockupView === "belakang" || mockupView === "zoomPunggung";

  const bodyPath = isBack ? sleeveGeom.bodyBack : sleeveGeom.body;
  ["shirt-body", "shirt-light-h", "shirt-clip-path"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("d", bodyPath);
  });

  const shoulderL = document.getElementById("seam-shoulder-l");
  const shoulderR = document.getElementById("seam-shoulder-r");
  if (shoulderL) shoulderL.setAttribute("d", cut.shoulderL);
  if (shoulderR) shoulderR.setAttribute("d", cut.shoulderR);

  const armholeL = document.getElementById("seam-armhole-l");
  const armholeR = document.getElementById("seam-armhole-r");
  if (armholeL) armholeL.setAttribute("d", sleeveGeom.armholeL);
  if (armholeR) armholeR.setAttribute("d", sleeveGeom.armholeR);

  const hemTop = document.getElementById("shirt-hem-top");
  const hemBot = document.getElementById("shirt-hem-bottom");
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

  // Manset / Lipatan Lengan Pendek vs Panjang
  const shortCuffGroup = document.getElementById("shirt-short-cuff-group");
  const longCuffGroup = document.getElementById("shirt-long-cuff-group");
  const rollupGroup = document.getElementById("shirt-rollup-tab-group");

  if (sleeveInfo.isLong) {
    if (shortCuffGroup) shortCuffGroup.style.display = "none";
    if (longCuffGroup) longCuffGroup.style.display = "block";
    const cuffL = document.getElementById("shirt-cuff-l");
    const cuffR = document.getElementById("shirt-cuff-r");
    if (cuffL) cuffL.setAttribute("d", sleeveGeom.cuffL);
    if (cuffR) cuffR.setAttribute("d", sleeveGeom.cuffR);
    if (rollupGroup) {
      rollupGroup.style.display = sleeveInfo.hasRollupTab ? "block" : "none";
    }
  } else {
    if (shortCuffGroup) shortCuffGroup.style.display = "block";
    if (longCuffGroup) longCuffGroup.style.display = "none";
    if (rollupGroup) rollupGroup.style.display = "none";
    const scuffL = document.getElementById("shirt-scuff-l");
    const scuffR = document.getElementById("shirt-scuff-r");
    if (scuffL) scuffL.setAttribute("d", sleeveGeom.scuffL);
    if (scuffR) scuffR.setAttribute("d", sleeveGeom.scuffR);
  }

  // Zona Two-Tone Lengan
  const zoneSleeveR = document.getElementById("zone-sleeve-r");
  const zoneSleeveL = document.getElementById("zone-sleeve-l");
  if (zoneSleeveR) zoneSleeveR.setAttribute("d", sleeveGeom.sleeveZoneR);
  if (zoneSleeveL) zoneSleeveL.setAttribute("d", sleeveGeom.sleeveZoneL);

  const activeVar = getActiveVariant();
  const layout = activeVar.colorLayout || selectedColorLayout;
  const zoneYokeTop = document.getElementById("zone-yoke-top");
  const zoneSleevesGroup = document.getElementById("zone-sleeves-group");
  const zoneVerticalHalf = document.getElementById("zone-vertical-half");

  if (zoneYokeTop) {
    zoneYokeTop.style.display =
      layout === "setengah_horizontal" || layout === "custom_bebas"
        ? "block"
        : "none";
  }
  if (zoneSleevesGroup) {
    zoneSleevesGroup.style.display =
      layout === "lengan" || layout === "custom_bebas" ? "block" : "none";
  }
  if (zoneVerticalHalf) {
    zoneVerticalHalf.style.display =
      layout === "setengah_vertikal" ? "block" : "none";
  }

  // Triple Stitch & Airflow Back Vent
  const tripleGroup = document.getElementById("triple-stitch-group");
  if (tripleGroup) {
    tripleGroup.style.display =
      selectedStitch === "triple_stitch" ? "block" : "none";
  }

  const airflowGroup = document.getElementById("airflow-vent-group");
  if (airflowGroup) {
    airflowGroup.style.display =
      isBack && selectedStitch === "airflow_yoke" ? "block" : "none";
  }

  // Reflektor Scotchlite
  const refGroup = document.getElementById("reflector-group");
  const refFrontGroup = document.getElementById("reflector-front-group");
  const refBackGroup = document.getElementById("reflector-back-group");
  if (refGroup) {
    if (selectedUtility === "reflektor") {
      refGroup.style.display = "block";
      if (refFrontGroup)
        refFrontGroup.style.display = isBack ? "none" : "block";
      if (refBackGroup) refBackGroup.style.display = isBack ? "block" : "none";
    } else {
      refGroup.style.display = "none";
    }
  }

  // Grup Depan vs Belakang
  const frontCollarGroup = document.getElementById("front-collar-group");
  const frontClosureGroup = document.getElementById("front-closure-group");
  const pocketsGroup = document.getElementById("shirt-pockets-group");
  const sleevePocketGroup = document.getElementById("sleeve-utility-pocket");
  const idVelcroGroup = document.getElementById("utility-id-velcro-group");
  const backCollarGroup = document.getElementById("back-collar-group");
  const backYokeSeam = document.getElementById("back-yoke-seam");

  if (backYokeSeam) {
    backYokeSeam.setAttribute("d", cut.backYoke);
  }

  if (isBack) {
    if (frontCollarGroup) frontCollarGroup.style.display = "none";
    if (frontClosureGroup) frontClosureGroup.style.display = "none";
    if (pocketsGroup) pocketsGroup.style.display = "none";
    if (sleevePocketGroup) sleevePocketGroup.style.display = "none";
    if (idVelcroGroup) idVelcroGroup.style.display = "none";
    if (backCollarGroup) backCollarGroup.style.display = "block";
    if (backYokeSeam) backYokeSeam.style.display = "block";
  } else {
    if (frontCollarGroup) frontCollarGroup.style.display = "block";
    if (frontClosureGroup) frontClosureGroup.style.display = "block";
    if (pocketsGroup) pocketsGroup.style.display = "block";
    if (sleevePocketGroup) {
      sleevePocketGroup.style.display =
        selectedPocket === "utility_zip" ? "block" : "none";
    }
    if (idVelcroGroup) {
      idVelcroGroup.style.display =
        selectedUtility === "id_velcro" ? "block" : "none";
    }
    if (backCollarGroup) backCollarGroup.style.display = "none";
    if (backYokeSeam) backYokeSeam.style.display = "none";

    // Kerah depan
    ["camp", "kemeja", "buttondown", "banded"].forEach((colKey) => {
      const el = document.getElementById(`collar-${colKey}-group`);
      if (el) el.style.display = selectedCollar === colKey ? "block" : "none";
    });

    // Penutup depan
    ["kancing_melamin", "snap_button", "kancing_tertutup", "resleting"].forEach(
      (clKey) => {
        const el = document.getElementById(`closure-${clKey}-group`);
        if (el) el.style.display = selectedClosure === clKey ? "block" : "none";
      },
    );

    // Saku dada
    ["dual_button", "dual_flap", "utility_zip", "single_pen"].forEach(
      (pkKey) => {
        const el = document.getElementById(`pockets-${pkKey}-group`);
        if (el) el.style.display = selectedPocket === pkKey ? "block" : "none";
      },
    );
  }

  updateHeaderSpecLabel();
  updatePrintZoneOverlay();
}

function updateWorkShirtColors(primaryHex, secondaryHex, accentHex) {
  const activeVar = getActiveVariant();
  const pHex = primaryHex || activeVar.color.hex;
  const sHex =
    secondaryHex || activeVar.secondaryColor?.hex || selectedSecondaryColor.hex;
  const aHex =
    accentHex || activeVar.accentColor?.hex || selectedAccentColor.hex;
  const layout = activeVar.colorLayout || selectedColorLayout;

  const dark = isDark(pHex);
  const lum = getLuminance(pHex);
  const outlineColor = dark && lum < 38 ? "#52525b" : "#18181b";
  const subtleStitch = dark ? "rgba(255,255,255,0.22)" : "rgba(24,24,27,0.25)";

  // Warna Badan Utama
  const bodyEl = document.getElementById("shirt-body");
  if (bodyEl) {
    bodyEl.setAttribute("fill", pHex);
    bodyEl.setAttribute("stroke", outlineColor);
  }

  // Warna Zona Two-Tone (Yoke Atas / Lengan / Vertikal Kiri)
  [
    "zone-yoke-top",
    "zone-sleeve-r",
    "zone-sleeve-l",
    "zone-vertical-half",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("fill", sHex);
  });

  // Tentukan warna aksen untuk Kerah, Plaket, Saku & Manset
  const hasAccentLayout =
    layout === "list_kombinasi" || layout === "custom_bebas";
  const accentTargetHex = hasAccentLayout
    ? aHex
    : layout === "lengan"
      ? sHex
      : shadeHex(pHex, dark ? 10 : -11);

  const collarPlacketPocketHex = hasAccentLayout
    ? aHex
    : shadeHex(pHex, dark ? 10 : -11);

  const cuffTargetHex =
    layout === "lengan" || layout === "custom_bebas"
      ? shadeHex(sHex, isDark(sHex) ? 10 : -11)
      : hasAccentLayout
        ? aHex
        : shadeHex(pHex, dark ? 10 : -11);

  [
    "shirt-scuff-l",
    "shirt-scuff-r",
    "shirt-cuff-l",
    "shirt-cuff-r",
    "rollup-tab-l",
    "rollup-tab-r",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("fill", cuffTargetHex);
      el.setAttribute("stroke", outlineColor);
    }
  });

  // Kerah, Plaket Tengah & Flap Saku
  document
    .querySelectorAll(
      ".shirt-collar-part, .shirt-placket-part, .shirt-pocket-accent",
    )
    .forEach((el) => {
      el.setAttribute("fill", collarPlacketPocketHex);
      el.setAttribute("stroke", outlineColor);
    });

  // Badan Saku Utama
  document.querySelectorAll(".shirt-pocket-body").forEach((el) => {
    el.setAttribute(
      "fill",
      hasAccentLayout ? shadeHex(aHex, isDark(aHex) ? -8 : 8) : pHex,
    );
    el.setAttribute("stroke", outlineColor);
  });

  // Garis Jahitan & Outline
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

  ["shirt-hem-top", "shirt-hem-bottom"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("stroke", subtleStitch);
  });

  // Update Badge Indikator Warna Aktif
  const colorDot = document.getElementById("active-color-dot");
  const colorName = document.getElementById("active-color-name");
  if (colorDot) colorDot.style.backgroundColor = pHex;
  if (colorName) {
    if (layout === "polos") {
      colorName.textContent = activeVar.color.name;
    } else if (layout === "custom_bebas") {
      colorName.textContent = `${activeVar.color.name} + ${activeVar.secondaryColor.name} + ${activeVar.accentColor.name}`;
    } else {
      colorName.textContent = `${activeVar.color.name} + ${activeVar.secondaryColor.name}`;
    }
  }

  // Update Swatch Mini pada Slot Warna (Primary / Secondary / Accent)
  const pSlotDot = document.getElementById("slot-primary-dot");
  const pSlotName = document.getElementById("slot-primary-name");
  if (pSlotDot) pSlotDot.style.backgroundColor = pHex;
  if (pSlotName) pSlotName.textContent = activeVar.color.name;

  const sSlotDot = document.getElementById("slot-secondary-dot");
  const sSlotName = document.getElementById("slot-secondary-name");
  if (sSlotDot) sSlotDot.style.backgroundColor = sHex;
  if (sSlotName) sSlotName.textContent = activeVar.secondaryColor.name;

  const aSlotDot = document.getElementById("slot-accent-dot");
  const aSlotName = document.getElementById("slot-accent-name");
  if (aSlotDot) aSlotDot.style.backgroundColor = aHex;
  if (aSlotName) aSlotName.textContent = activeVar.accentColor.name;

  void accentTargetHex;
}

// ================= KONTROL FITUR CUSTOM WORK SHIRT =================
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
  updateWorkShirtGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();

  if (window.Motion && window.Motion.animate) {
    Motion.animate(
      "#shirt-svg",
      { scale: [0.96, 1] },
      { type: "spring", stiffness: 320, damping: 22 },
    );
  }
}

function setSleeve(sleeveKey) {
  if (!sleeveCatalog[sleeveKey]) return;
  selectedSleeve = sleeveKey;
  const activeVar = getActiveVariant();
  activeVar.sleeve = sleeveKey;

  document.querySelectorAll(".sleeve-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.sleeve === sleeveKey);
  });

  const sleeveColHeader = document.getElementById("chart-sleeve-col-header");
  if (sleeveColHeader) {
    sleeveColHeader.textContent = sleeveCatalog[sleeveKey].isLong
      ? "Pjg Lengan"
      : "Lengan Pdk";
  }

  renderSizeChart(selectedCut);
  updateWorkShirtGeometry();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setStitch(stitchKey) {
  if (!stitchCatalog[stitchKey]) return;
  selectedStitch = stitchKey;

  document.querySelectorAll(".stitch-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.stitch === stitchKey);
  });

  if (stitchKey === "airflow_yoke" && mockupView === "depan") {
    setMockupView("belakang");
  } else {
    updateWorkShirtGeometry();
  }

  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
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

  updateWorkShirtGeometry();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setClosure(closureKey) {
  if (!closureCatalog[closureKey]) return;
  selectedClosure = closureKey;

  document.querySelectorAll(".closure-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.closure === closureKey,
    );
  });

  updateWorkShirtGeometry();
  renderQtyControls();
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setPocket(pocketKey) {
  if (!pocketCatalog[pocketKey]) return;
  selectedPocket = pocketKey;

  document.querySelectorAll(".pocket-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.pocket === pocketKey);
  });

  updateWorkShirtGeometry();
  renderQtyControls();
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

  updateWorkShirtGeometry();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setColorLayout(layoutKey) {
  if (!colorLayoutCatalog[layoutKey]) return;
  selectedColorLayout = layoutKey;
  const activeVar = getActiveVariant();
  activeVar.colorLayout = layoutKey;

  document.querySelectorAll(".layout-pill").forEach((el) => {
    el.classList.toggle("feature-pill-active", el.dataset.layout === layoutKey);
  });

  const hintEl = document.getElementById("layout-desc-hint");
  if (hintEl) {
    hintEl.textContent = colorLayoutCatalog[layoutKey].desc;
  }

  // Tampilkan/sembunyikan pemilih slot warna kombinasi
  const multiColorSlotsBox = document.getElementById("multi-color-slots-box");
  const accentSlotBtn = document.getElementById("slot-accent-btn");
  if (multiColorSlotsBox) {
    multiColorSlotsBox.classList.toggle("hidden", layoutKey === "polos");
  }
  if (accentSlotBtn) {
    accentSlotBtn.classList.toggle(
      "hidden",
      layoutKey !== "custom_bebas" && layoutKey !== "list_kombinasi",
    );
  }

  if (layoutKey === "polos") {
    activeColorSlot = "primary";
  } else if (
    (layoutKey === "list_kombinasi" || layoutKey === "custom_bebas") &&
    activeColorSlot === "secondary" &&
    layoutKey === "list_kombinasi"
  ) {
    activeColorSlot = "accent";
  }

  syncColorSlotButtons();
  updateWorkShirtGeometry();
  updateWorkShirtColors();
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setActiveColorSlot(slotName) {
  activeColorSlot = slotName;
  syncColorSlotButtons();
  renderPalette();
}

function syncColorSlotButtons() {
  ["primary", "secondary", "accent"].forEach((slot) => {
    const btn = document.getElementById(`slot-${slot}-btn`);
    if (btn) {
      btn.classList.toggle("color-slot-active", activeColorSlot === slot);
    }
  });
}

// ================= PALET WARNA & PENCARIAN WARNA =================
function renderPalette() {
  const container = document.getElementById("swatches");
  if (!container) return;

  const activeVar = getActiveVariant();
  const q = colorSearchQuery.trim().toLowerCase();

  let currentSlotHex = activeVar.color.hex;
  if (activeColorSlot === "secondary") {
    currentSlotHex = activeVar.secondaryColor.hex;
  } else if (activeColorSlot === "accent") {
    currentSlotHex = activeVar.accentColor.hex;
  }

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
    const isSelected = currentSlotHex === item.hex;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `swatch-card ${isSelected ? "swatch-card-active" : ""}`;
    btn.onclick = () => applyColorToActiveSlot(item);

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

function applyColorToActiveSlot(colorObj) {
  const activeVar = getActiveVariant();
  if (activeColorSlot === "secondary") {
    selectedSecondaryColor = colorObj;
    activeVar.secondaryColor = colorObj;
  } else if (activeColorSlot === "accent") {
    selectedAccentColor = colorObj;
    activeVar.accentColor = colorObj;
  } else {
    selectedColor = colorObj;
    activeVar.color = colorObj;
  }

  updateWorkShirtColors();
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
  pulseFloatingStageFeedback();
}

function setColor(colorObj) {
  selectedColor = colorObj;
  const activeVar = getActiveVariant();
  activeVar.color = colorObj;
  updateWorkShirtColors();
  renderPalette();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
}

function setColorByHex(hex) {
  const found = palette.find((p) => p.hex === hex);
  if (found) setColor(found);
}

function setSecondaryColorByHex(hex) {
  const found = palette.find((p) => p.hex === hex);
  if (!found) return;
  selectedSecondaryColor = found;
  const activeVar = getActiveVariant();
  activeVar.secondaryColor = found;
  updateWorkShirtColors();
  renderPalette();
  renderVariantManager();
  renderFoldedStacks(false);
  updateOrderTotalsAndWA();
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
function buildMiniWorkShirtSVG(opt) {
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
    if (m.mirror) {
      const mirrorX = 60 - m.x - m.w;
      overlay += `
        <rect
          x="${mirrorX}"
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
  }

  return `
    <svg viewBox="0 0 60 60" class="w-10 h-10 sm:w-13 sm:h-13 shrink-0">
      <path
        d="M23 7 L14 11 L6 25 L14 29 L16 22 L16 53 L44 53 L44 22 L46 29 L54 25 L46 11 L37 7 Q30 10 23 7 Z"
        fill="#f4f4f5"
        stroke="#d4d4d8"
        stroke-width="1.3"
        stroke-linejoin="round"
      />
      <line x1="30" y1="10" x2="30" y2="53" stroke="#d4d4d8" stroke-width="1" />
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
    { key: "lengan", label: "Lengan" },
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
          title="Klik untuk lihat di mockup work shirt"
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
  ["dadaKiri", "dadaKanan", "belakang", "lengan"].forEach((side) => {
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
        ${buildMiniWorkShirtSVG(opt)}
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
  updateWorkShirtGeometry();
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

  updateWorkShirtGeometry();
}

function toggleStageZoom() {
  if (mockupView === "zoomDada") {
    setMockupView("depan");
  } else if (mockupView === "zoomPunggung") {
    setMockupView("belakang");
  }
}

function computePrintZoneGeometry(sideKey, cutKey, sleeveKey) {
  const cut = cuts[cutKey] || cuts.classic;
  const sleeveInfo = sleeveCatalog[sleeveKey] || sleeveCatalog.pendek;
  const sleeveGeom = sleeveInfo.isLong ? cut.panjang : cut.pendek;
  const activePrint = selectedPrints[sideKey];
  if (!activePrint || activePrint.isNone || !activePrint.mainZone) {
    return null;
  }

  const z = activePrint.mainZone;
  let x = 0;
  let y = 0;
  const w = z.w;
  const h = z.h;
  let rot = 0;
  let mirrorBox = null;

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
  } else if (z.anchor === "sleeveRight") {
    x = sleeveGeom.sleeveRAnchor.x - w / 2;
    y = sleeveGeom.sleeveRAnchor.y - h / 2;
    rot = sleeveGeom.sleeveRAnchor.rot;
  } else if (z.anchor === "sleeveLeft") {
    x = sleeveGeom.sleeveLAnchor.x - w / 2;
    y = sleeveGeom.sleeveLAnchor.y - h / 2;
    rot = sleeveGeom.sleeveLAnchor.rot;
  } else if (z.anchor === "bothSleeves") {
    x = sleeveGeom.sleeveRAnchor.x - w / 2;
    y = sleeveGeom.sleeveRAnchor.y - h / 2;
    rot = sleeveGeom.sleeveRAnchor.rot;
    mirrorBox = {
      x: sleeveGeom.sleeveLAnchor.x - w / 2,
      y: sleeveGeom.sleeveLAnchor.y - h / 2,
      w,
      h,
      cx: sleeveGeom.sleeveLAnchor.x,
      cy: sleeveGeom.sleeveLAnchor.y,
      rot: sleeveGeom.sleeveLAnchor.rot,
    };
  }

  return {
    x,
    y,
    w,
    h,
    cx: x + w / 2,
    cy: y + h / 2,
    rot,
    mirrorBox,
    dim: activePrint.dim,
    name: activePrint.name,
  };
}

function updatePrintZoneOverlay() {
  const svg = document.getElementById("shirt-svg");
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
  const zoneMirrorGroup = document.getElementById("print-zone-mirror-group");
  const zoneMirrorRect = document.getElementById("print-zone-mirror-rect");
  const zoneMirrorImg = document.getElementById("print-zone-mirror-img");
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

  const geo = computePrintZoneGeometry(
    displaySide,
    selectedCut,
    selectedSleeve,
  );
  if (!geo) {
    if (zoneGroup) zoneGroup.style.display = "none";
    return;
  }

  if (zoneGroup) {
    zoneGroup.style.display = "block";
    zoneGroup.setAttribute("onclick", `triggerDesignUpload('${displaySide}')`);
  }

  const rotTransform = geo.rot ? `rotate(${geo.rot} ${geo.cx} ${geo.cy})` : "";

  if (zoneRect) {
    zoneRect.setAttribute("x", geo.x);
    zoneRect.setAttribute("y", geo.y);
    zoneRect.setAttribute("width", geo.w);
    zoneRect.setAttribute("height", geo.h);
    zoneRect.setAttribute("transform", rotTransform);
  }

  if (zoneImg && zoneRect) {
    if (sideDesign && sideDesign.url) {
      zoneImg.setAttribute("href", sideDesign.url);
      zoneImg.setAttribute("x", geo.x + 1);
      zoneImg.setAttribute("y", geo.y + 1);
      zoneImg.setAttribute("width", Math.max(2, geo.w - 2));
      zoneImg.setAttribute("height", Math.max(2, geo.h - 2));
      zoneImg.setAttribute("transform", rotTransform);
      zoneImg.style.display = "block";
      zoneRect.setAttribute("fill", "rgba(37, 99, 235, 0.05)");
    } else {
      zoneImg.style.display = "none";
      zoneRect.setAttribute("fill", "rgba(37, 99, 235, 0.22)");
    }
  }

  if (zoneMirrorGroup && zoneMirrorRect && zoneMirrorImg) {
    if (geo.mirrorBox) {
      const mb = geo.mirrorBox;
      const mRot = mb.rot ? `rotate(${mb.rot} ${mb.cx} ${mb.cy})` : "";
      zoneMirrorGroup.style.display = "block";
      zoneMirrorRect.setAttribute("x", mb.x);
      zoneMirrorRect.setAttribute("y", mb.y);
      zoneMirrorRect.setAttribute("width", mb.w);
      zoneMirrorRect.setAttribute("height", mb.h);
      zoneMirrorRect.setAttribute("transform", mRot);

      if (sideDesign && sideDesign.url) {
        zoneMirrorImg.setAttribute("href", sideDesign.url);
        zoneMirrorImg.setAttribute("x", mb.x + 1);
        zoneMirrorImg.setAttribute("y", mb.y + 1);
        zoneMirrorImg.setAttribute("width", Math.max(2, mb.w - 2));
        zoneMirrorImg.setAttribute("height", Math.max(2, mb.h - 2));
        zoneMirrorImg.setAttribute("transform", mRot);
        zoneMirrorImg.style.display = "block";
        zoneMirrorRect.setAttribute("fill", "rgba(37, 99, 235, 0.05)");
      } else {
        zoneMirrorImg.style.display = "none";
        zoneMirrorRect.setAttribute("fill", "rgba(37, 99, 235, 0.22)");
      }
    } else {
      zoneMirrorGroup.style.display = "none";
    }
  }

  if (zoneLabel) {
    zoneLabel.setAttribute("x", geo.cx);
    zoneLabel.setAttribute("y", geo.y + geo.h + 8.5);
    zoneLabel.textContent = activePrint.dim;
  }
}

function updateAllPrintUI() {
  ["dadaKiri", "dadaKanan", "belakang", "lengan"].forEach((side) => {
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
    lengan: "Lengan",
  };
  let activeCount = 0;

  if (summaryGrid) {
    summaryGrid.innerHTML = "";
    ["dadaKiri", "dadaKanan", "belakang", "lengan"].forEach((side) => {
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
        ? "Work Shirt Polos (Tanpa Bordir)"
        : `${activeCount} Titik Aktif`;
  }

  renderDesignSlots();
  renderPrintOptions();
  updatePrintZoneOverlay();
  updateOrderTotalsAndWA();
}

// ================= SIZE CHART =================
function renderSizeChart(cutKey) {
  const c = cuts[cutKey] || cuts.classic;
  const sleeveInfo = sleeveCatalog[selectedSleeve] || sleeveCatalog.pendek;
  const geom = sleeveInfo.isLong ? c.panjang : c.pendek;

  const chartTitle = document.getElementById("chart-cut-title");
  if (chartTitle) {
    chartTitle.textContent = `${c.chartTitle || c.label} (${sleeveInfo.shortLabel})`;
  }
  const rangeBadge = document.getElementById("chart-range-badge");
  if (rangeBadge) {
    rangeBadge.textContent = `S – ${sizeKeys[sizeKeys.length - 1]} (cm)`;
  }

  const tbody = document.getElementById("size-chart-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const visibleRows = geom.sizes.filter((r) => sizeKeys.includes(r.size));

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
      }">${row.pl}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= VISUALISASI TUMPUKAN WORK SHIRT LIPAT 3D =================
function buildFoldedShirtLayerSVG(
  y,
  primaryHex,
  secondaryHex,
  accentHex,
  layout,
  sleeveType,
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

  const collarAccent =
    layout === "list_kombinasi" || layout === "custom_bebas"
      ? accentHex
      : shadeHex(primaryHex, dark ? 11 : -14);

  const sleeveInfo = sleeveCatalog[sleeveType] || sleeveCatalog.pendek;
  const t = sleeveInfo.isLong ? 9.4 : 7.8;

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
    const twoToneOverlay =
      layout === "setengah_horizontal" || layout === "custom_bebas"
        ? `<path d="M46 ${y - 33} L126 ${y - 25} L110 ${y - 12.5} L30 ${y - 20.5} Z" fill="${secondaryHex}" opacity="0.92" />`
        : layout === "setengah_vertikal"
          ? `<path d="M86 ${y - 29} L126 ${y - 25} L94 ${y} L54 ${y - 4} Z" fill="${secondaryHex}" opacity="0.92" />`
          : layout === "lengan"
            ? `<path d="M35 ${y - 24} L54 ${y - 22} L34 ${y - 6} L14 ${y - 8} Z" fill="${secondaryHex}" opacity="0.9" />`
            : "";

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

    topSurface = `
      <path
        d="M46 ${y - 33} L126 ${y - 25} L94 ${y} L14 ${y - 8} Z"
        fill="${topColor}"
      />
      ${twoToneOverlay}
      ${reflectorStripe}
      <path
        d="M14 ${y - 8} L94 ${y} L126 ${y - 25}"
        fill="none"
        stroke="${highlightColor}"
        stroke-width="1"
        opacity="0.75"
      />
      <!-- Plaket Kancing Tengah Lipatan -->
      <path
        d="M84 ${y - 25} L54 ${y - 4}"
        stroke="${collarAccent}"
        stroke-width="3"
        stroke-linecap="round"
      />
      <circle cx="76" cy="-19.5" r="1.2" transform="translate(0, ${y})" fill="#f4f4f5" />
      <circle cx="67" cy="-13" r="1.2" transform="translate(0, ${y})" fill="#f4f4f5" />
      <circle cx="58" cy="-6.8" r="1.2" transform="translate(0, ${y})" fill="#f4f4f5" />
      <!-- Kerah Lipat Work Shirt -->
      <path
        d="M71 ${y - 29.8} Q86 ${y - 33} 101 ${y - 26.5} Q85 ${y - 19} 71 ${y - 29.8} Z"
        fill="${shadeHex(primaryHex, dark ? -12 : -34)}"
      />
      <path
        d="M69 ${y - 31} L84 ${y - 24} L73 ${y - 18.5} Z"
        fill="${collarAccent}"
        stroke="${creaseColor}"
        stroke-width="0.6"
      />
      <path
        d="M103 ${y - 27.2} L84 ${y - 24} L96 ${y - 17} Z"
        fill="${collarAccent}"
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
        secondaryHex: v.secondaryColor?.hex || selectedSecondaryColor.hex,
        accentHex: v.accentColor?.hex || selectedAccentColor.hex,
        layout: v.colorLayout || selectedColorLayout,
        sleeve: v.sleeve || "pendek",
        hasReflector: selectedUtility === "reflektor",
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
          layer.sleeve,
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
      sleeveCatalog[variant.sleeve]?.shortLabel || "L. Pendek";
    const layoutTag =
      (variant.colorLayout || "polos") !== "polos"
        ? ` • ${colorLayoutCatalog[variant.colorLayout]?.shortLabel}`
        : "";

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
        <span class="truncate">#${index + 1} ${variant.color.name}${layoutTag}</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded-md shrink-0 ${
          isActive ? "bg-white/15 text-[#93c5fd]" : "bg-[#f1f2ee] text-zinc-600"
        }">
          ${sleeveShort}
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
  if (sleeveSelect) sleeveSelect.value = activeVar.sleeve || "pendek";

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
  selectedSecondaryColor = activeVar.secondaryColor || DEFAULT_SECONDARY_COLOR;
  selectedAccentColor = activeVar.accentColor || DEFAULT_ACCENT_COLOR;
  selectedColorLayout = activeVar.colorLayout || "polos";
  selectedSleeve = activeVar.sleeve || "pendek";

  document.querySelectorAll(".sleeve-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.sleeve === selectedSleeve,
    );
  });
  document.querySelectorAll(".layout-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.layout === selectedColorLayout,
    );
  });

  setColorLayout(selectedColorLayout);
  updateWorkShirtGeometry();
  updateWorkShirtColors();
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
    secondaryColor: currentVar.secondaryColor || DEFAULT_SECONDARY_COLOR,
    accentColor: currentVar.accentColor || DEFAULT_ACCENT_COLOR,
    colorLayout: currentVar.colorLayout || "polos",
    sleeve: currentVar.sleeve || "pendek",
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
  const sleeveText = sleeveCatalog[activeVar.sleeve]?.shortLabel || "L. Pendek";

  if (editingLabel) {
    editingLabel.textContent = `2. Atur Jumlah Ukuran — ${activeVar.color.name} (${sleeveText}):`;
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
    const sleeveLabel = sleeveCatalog[v.sleeve]?.label || "Lengan Pendek";
    const layoutKey = v.colorLayout || "polos";
    const colorDesc =
      layoutKey === "polos"
        ? v.color.name
        : layoutKey === "custom_bebas"
          ? `${v.color.name} + ${v.secondaryColor.name} + ${v.accentColor.name} (${colorLayoutCatalog[layoutKey].shortLabel})`
          : `${v.color.name} + ${v.secondaryColor.name} (${colorLayoutCatalog[layoutKey].shortLabel})`;

    const breakdown = sizeKeys
      .filter((sz) => (v.quantities[sz] || 0) > 0)
      .map((sz) => {
        const extra = SIZE_SURCHARGE[sz] || 0;
        return extra > 0
          ? `${sz}(+${extra / 1000}rb): ${v.quantities[sz]}`
          : `${sz}: ${v.quantities[sz]}`;
      })
      .join(", ");
    return `  ${idx + 1}) ${colorDesc} (${sleeveLabel}) = ${sub} pcs [${breakdown || "Belum diisi"}] | Dasar ${formatRupiah(baseUnit)} | Subtotal ${formatRupiah(varSubtotal)}`;
  });

  return [
    "Halo Atensi Konveksi, saya mau kirim Spesifikasi Order & konsultasi desain Work Shirt Custom:",
    `• Model Potongan: ${cuts[selectedCut].label}`,
    `• Jenis Bahan Kain: ${fabric.name}`,
    `• Model Kerah: ${collarCatalog[selectedCollar].label}`,
    `• Penutup Depan: ${closureCatalog[selectedClosure].label}`,
    `• Konfigurasi Saku: ${pocketCatalog[selectedPocket].label}`,
    `• Konstruksi Jahitan: ${stitchCatalog[selectedStitch].label}`,
    `• Fitur Safety / Utilitas: ${utilityCatalog[selectedUtility].label}`,
    `• Bordir/Sablon Dada Kiri: ${formatSideWA("dadaKiri")}`,
    `• Bordir/Sablon Dada Kanan: ${formatSideWA("dadaKanan")}`,
    `• Bordir/Sablon Punggung: ${formatSideWA("belakang")}`,
    `• Bordir/Sablon Lengan: ${formatSideWA("lengan")}`,
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
        const sleeveLabel = sleeveCatalog[v.sleeve]?.shortLabel || "L. Pendek";

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
        sleeveCatalog[activeVar.sleeve]?.shortLabel || "L. Pendek";
      const collarTxt =
        collarCatalog[selectedCollar]?.shortLabel || "Kerah Camp";
      const pocketTxt =
        pocketCatalog[selectedPocket]?.shortLabel || "2 Saku Kancing";

      breakdownList.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-1 text-zinc-600">
          <span>Harga dasar satuan (${sleeveTxt} • ${collarTxt} • ${pocketTxt}):</span>
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

        const sleeveNote = sleeveCatalog[v.sleeve]?.shortLabel || "L. Pendek";

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
    "lengan",
  ].filter((side) => !selectedPrints[side].isNone).length;
  const printWarn = document.getElementById("est-print-warning");
  if (printWarn) {
    printWarn.classList.toggle("hidden", activePrintCount <= 3);
  }
}

// ================= GENERATOR SPESIFIKASI ORDER (PNG / PDF) & MODAL =================
function cloneWorkShirtSvgForSnapshot(viewMode) {
  const origSvg = document.getElementById("shirt-svg");
  if (!origSvg) return null;

  const clone = origSvg.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("viewBox", "0 0 300 300");
  clone.setAttribute("width", "320");
  clone.setAttribute("height", "320");

  const cut = cuts[selectedCut] || cuts.classic;
  const sleeveInfo = sleeveCatalog[selectedSleeve] || sleeveCatalog.pendek;
  const sleeveGeom = sleeveInfo.isLong ? cut.panjang : cut.pendek;
  const isBack = viewMode === "belakang";
  const bodyPath = isBack ? sleeveGeom.bodyBack : sleeveGeom.body;

  clone
    .querySelectorAll("#shirt-body, #shirt-light-h, #shirt-clip-path")
    .forEach((el) => {
      el.setAttribute("d", bodyPath);
    });

  const toggleDisplay = (selector, show) => {
    const el = clone.querySelector(selector);
    if (el) el.style.display = show ? "block" : "none";
  };

  toggleDisplay("#front-collar-group", !isBack);
  toggleDisplay("#front-closure-group", !isBack);
  toggleDisplay("#shirt-pockets-group", !isBack);
  toggleDisplay(
    "#sleeve-utility-pocket",
    !isBack && selectedPocket === "utility_zip",
  );
  toggleDisplay(
    "#utility-id-velcro-group",
    !isBack && selectedUtility === "id_velcro",
  );
  toggleDisplay("#back-collar-group", isBack);
  toggleDisplay("#back-yoke-seam", isBack);
  toggleDisplay(
    "#airflow-vent-group",
    isBack && selectedStitch === "airflow_yoke",
  );
  toggleDisplay(
    "#reflector-front-group",
    !isBack && selectedUtility === "reflektor",
  );
  toggleDisplay(
    "#reflector-back-group",
    isBack && selectedUtility === "reflektor",
  );
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
  const frontSvg = cloneWorkShirtSvgForSnapshot("depan");
  const backSvg = cloneWorkShirtSvgForSnapshot("belakang");

  const [
    frontImg,
    backImg,
    designDadaKiri,
    designDadaKanan,
    designBelakang,
    designLengan,
  ] = await Promise.all([
    renderSvgElementToImage(frontSvg),
    renderSvgElementToImage(backSvg),
    loadImageFromDataUrl(customDesigns.dadaKiri?.url),
    loadImageFromDataUrl(customDesigns.dadaKanan?.url),
    loadImageFromDataUrl(customDesigns.belakang?.url),
    loadImageFromDataUrl(customDesigns.lengan?.url),
  ]);

  const designImgs = {
    dadaKiri: designDadaKiri,
    dadaKanan: designDadaKanan,
    belakang: designBelakang,
    lengan: designLengan,
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
  ctx.fillText("ATENSI KONVEKSI — SPESIFIKASI ORDER WORK SHIRT", 56, 74);

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
    const geo = computePrintZoneGeometry(sideKey, selectedCut, selectedSleeve);
    if (!geo) return;
    const scale = targetBox.size / 300;
    const zx = targetBox.x + geo.x * scale;
    const zy = targetBox.y + geo.y * scale;
    const zw = geo.w * scale;
    const zh = geo.h * scale;

    const uploadedImg = designImgs[sideKey];
    if (uploadedImg) {
      ctx.drawImage(uploadedImg, zx, zy, zw, zh);
      if (geo.mirrorBox) {
        const mzx = targetBox.x + geo.mirrorBox.x * scale;
        const mzy = targetBox.y + geo.mirrorBox.y * scale;
        ctx.drawImage(uploadedImg, mzx, mzy, zw, zh);
      }
    } else {
      ctx.save();
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(zx, zy, zw, zh);
      ctx.fillStyle = "rgba(37, 99, 235, 0.16)";
      ctx.fillRect(zx, zy, zw, zh);
      if (geo.mirrorBox) {
        const mzx = targetBox.x + geo.mirrorBox.x * scale;
        const mzy = targetBox.y + geo.mirrorBox.y * scale;
        ctx.strokeRect(mzx, mzy, zw, zh);
        ctx.fillRect(mzx, mzy, zw, zh);
      }
      ctx.restore();
    }
  };

  drawZoneOnSnapshot("dadaKiri", frontBox);
  drawZoneOnSnapshot("dadaKanan", frontBox);
  drawZoneOnSnapshot("lengan", frontBox);
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
    `Preview Warna: ${activeVar.color.name} (${sleeveCatalog[activeVar.sleeve]?.shortLabel || "L. Pendek"})`,
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
  ctx.fillText("SPESIFIKASI KONSTRUKSI & MATERIAL WORK SHIRT", 630, 190);

  const fabric = getSelectedFabric();
  const specRows = [
    ["Model Potongan", cuts[selectedCut].label],
    ["Jenis Bahan Kain", fabric.name],
    ["Model Kerah", collarCatalog[selectedCollar].label],
    ["Penutup Depan", closureCatalog[selectedClosure].label],
    ["Konfigurasi Saku", pocketCatalog[selectedPocket].label],
    ["Konstruksi Jahitan", stitchCatalog[selectedStitch].label],
    ["Safety & Utilitas", utilityCatalog[selectedUtility].label],
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
    { key: "lengan", label: "Lengan" },
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

    const sleeveTxt = sleeveCatalog[v.sleeve]?.shortLabel || "L. Pendek";
    ctx.fillStyle = "#18181b";
    ctx.font = "700 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `Varian #${idx + 1}: ${v.color.name} (${sleeveTxt}) — [${breakdown || "Belum diisi"}]`,
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
      "Spesifikasi-WorkShirt-Atensi-Konveksi.png",
      { type: "image/png" },
    );
    if (navigator.canShare({ files: [specFile] })) {
      try {
        await navigator.share({
          files: [specFile],
          title: "Spesifikasi Order Work Shirt Custom - Atensi Konveksi",
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
  link.download = `Spesifikasi-WorkShirt-Atensi-${Date.now()}.png`;
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
        <title>Spesifikasi Order Work Shirt - Atensi Konveksi</title>
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
  document.querySelectorAll(".sleeve-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.sleeve === selectedSleeve,
    );
  });
  document.querySelectorAll(".stitch-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.stitch === selectedStitch,
    );
  });
  document.querySelectorAll(".collar-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.collar === selectedCollar,
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
  document.querySelectorAll(".utility-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.utility === selectedUtility,
    );
  });
  document.querySelectorAll(".layout-pill").forEach((el) => {
    el.classList.toggle(
      "feature-pill-active",
      el.dataset.layout === selectedColorLayout,
    );
  });

  const collarHint = document.getElementById("collar-desc-hint");
  if (collarHint && collarCatalog[selectedCollar]) {
    collarHint.textContent = collarCatalog[selectedCollar].desc;
  }

  const layoutHint = document.getElementById("layout-desc-hint");
  if (layoutHint && colorLayoutCatalog[selectedColorLayout]) {
    layoutHint.textContent = colorLayoutCatalog[selectedColorLayout].desc;
  }
}

// ================= INISIALISASI HALAMAN =================
function initWorkShirtConfigurator() {
  syncInitialFeaturePills();
  initFilterButtons();
  renderPriceListTable();
  renderPalette();
  renderDesignSlots();
  renderPrintOptions();
  renderSizeChart(selectedCut);
  updateWorkShirtGeometry();
  updateWorkShirtColors();
  renderVariantManager();
  renderQtyControls();
  renderFoldedStacks(false);
  updateAllPrintUI();
  updateOrderTotalsAndWA();
  updateMobileFloatingStage();
  refreshIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWorkShirtConfigurator);
} else {
  initWorkShirtConfigurator();
}
