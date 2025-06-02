// mockDeals.js
// mock data สำหรับดีลสินค้า
const mockDeals = [
  {
    id: "1",
    image: "https://i.pinimg.com/736x/ed/af/af/edafaf4d4adf4d7c90c6c9f1c7122eda.jpg",
    images: [
      "https://i.pinimg.com/736x/14/a2/2e/14a22e22ac4b93d56aee848ff24c2235.jpg",
      "https://i.pinimg.com/736x/99/63/c5/9963c583eedfd04d23bde7023c0b893d.jpg",
    ],
    title: "Custom Baguette Gemstone Ring by Caitlyn Minimalist",
    price: 791.10,
    oldPrice: 1130.14,
    discount: 30,
    rating: 4.8,
    seller: "Vincent Willem van Gogh",
    description: "ใจกลางของภาพ ราตรีประดับดาว เป็นหมู่บ้านแซ็ง-เรมี-เดอ-พรอว็องส์ ภายใต้ท้องฟ้าที่ม้วนตัวเป็นก้นหอย ซึ่งเป็นมุมที่มองจากสถานบำบัดไปยังทิศเหนือ ทิวเขาอาลปีย์ (Alpilles) ที่เห็นไกลออกไปทางด้านขวาดูจะประสานกับภูมิทัศน์ แต่ที่จริงแล้วดูเหมือนว่าเนินเขาตรงกลางในภาพจะมาจากบริเวณที่อยู่ทางด้านใต้ของสถานบำบัด ต้นไซเพรสทางด้านซ้ายถูกเขียนเพิ่มภายหลัง สิ่งที่น่าสนใจอีกอย่างหนึ่งคือ ฟัน โคคได้เปลี่ยนตำแหน่งของกลุ่มดาวหมีใหญ่จากทางเหนือมาเป็นทางใต้แล้วครั้งหนึ่งในภาพ ราตรีประดับดาวเหนือแม่น้ำโรน",
    options: {
      size: ["3", "4", "5", "6", "7"]
    }
  },
  {
    id: "2",
    image: "https://cdn.discordapp.com/attachments/1373323244567789588/1378948859920781392/4aa7e0cc3076c0f966ac202d37397886.png?ex=683e75b3&is=683d2433&hm=8cc6671106372a22bc8ad5ad210567ecd8ae58bda3b1bc0dfee0ebff32c42973&",
    images: [
      "https://cdn.discordapp.com/attachments/1373323244567789588/1378948860390412378/e6edb71245a3484d029f5b8d449c2be8.png?ex=683e75b3&is=683d2433&hm=9fbe8caa7ff6479563fe3397a0a8ac496d1f96b3d88d5f0416f4789f1b9ee67a&",
    ],
    title: "พวงกุญแจผ้าแมวเหมียว",
    price: 60,
    oldPrice: 90,
    discount: 33,
    rating: 4.4,
    seller: "นางสาวสมหญิง",
    description: "วัสดุ: ผ้าสักหลาด เทคนิค: เย็บมือด้วยไหมปัก ดีไซน์: รูปสัตว์น่ารัก เช่น หมี แมว หรือรูปทรงน่ารักอื่น ๆ",
    options: {
    }
  },
  {
    id: "3",
    image: "https://cdn.discordapp.com/attachments/1373323244567789588/1378950244812980294/404124744ff47ee9e595c908e5d67c24.png?ex=683e76fe&is=683d257e&hm=cac352fd126500e05ff455106279fbed85d1e3f35fcd8c7576afcb6f86f9a58d&",
    images: [
      "https://cdn.discordapp.com/attachments/1373323244567789588/1378950245144199270/ba0971fbf2c682fb2350548eee8fa8c9.png?ex=683e76fe&is=683d257e&hm=dd0db419d786a188371037c8fbafcfbde701a87807b848a4015771242227c9ea&"
    ],
    title: "Wooden Craft by Somchai",
    price: 250,
    oldPrice: 290,
    discount: 20,
    rating: 4.3,
    seller: "นายสมชาย",
    description: "ชะลอมไม้ไผ่แพ็คเกจจิ้ง สำหรับบรรจุภัณฑ์ที่เก๋ไม่ซ้ำใคร ",
    options: {
      size: ["S", "M", "L", "XL"],
    }
  },
  {
    id: "4",
    image: "https://cdn.discordapp.com/attachments/1373323244567789588/1378955279995109436/46fa855b0c59204a4adad9ee809d1f6d.png?ex=683e7bae&is=683d2a2e&hm=d92f5af170c7eae4ce5c2b44227c834866fabdc567ff9020e0e1ca6c30f32e73&",
    images: [
      "https://cdn.discordapp.com/attachments/1373323244567789588/1378950885576806420/1cea788348057ef7a4aa21e82ce49a2b.png?ex=683e7796&is=683d2616&hm=cb9108bc0c01b4b236733bc878774bb401faa0d956b46b6ea12ef3be11dceb60&"
    ],
    title: "กระเป๋าสาน Sustain Tote",
    price: 450,
    oldPrice: 750,
    discount: 40,
    rating: 4.5,
    seller: "นางสาวสมใจ",
    description: "กระเป๋าสานจากพลาสติกรีไซเคิล มี 3 ขนาด (S, M, L) น้ำหนักเบา ทนทาน เช็ดล้างทำความสะอาดง่าย เหมาะสำหรับใช้ในชีวิตประจำวันหรือเป็นของขวัญที่มีความหมาย",
    options: {
      size: ["S", "M", "L"]
    }
  },
];

export default mockDeals; 