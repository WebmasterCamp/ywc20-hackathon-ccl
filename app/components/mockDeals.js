// mockDeals.js
// mock data สำหรับดีลสินค้า
const mockDeals = [
  {
    id: "1",
    image: "https://www.ikea.com/th/th/images/products/pjaetteryd-picture-the-starry-night-june-1889__1237251_pe917880_s5.jpg?f=xl",
    images: [
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd2.jpg",
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd2_2.jpg",
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd2_3.jpg"
    ],
    title: "Custom Baguette Gemstone Ring by Caitlyn Minimalist",
    price: 791.10,
    oldPrice: 1130.14,
    discount: 30,
    rating: 4.8,
    seller: "CaitlynMinimalist",
    description: "Custom Baguette Gemstone Ring by Caitlyn Minimalist • Personalized Statement Ring • Mothers Ring with Birthstones • Baby Shower Gift • RM106",
    options: {
      finish: ["Gold", "Silver", "Rose Gold"],
      birthstones: [1,2,3,4,5],
      size: ["5", "6", "7", "8", "9"]
    }
  },
  {
    id: "2",
    image: "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd.jpg",
    images: [
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd.jpg",
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd_2.jpg"
    ],
    title: "Custom wax seal stamp kit",
    price: 297.95,
    oldPrice: 595.89,
    discount: 50,
    rating: 4.9,
    seller: "WaxArtisan",
    description: "Custom wax seal stamp kit for creative projects, invitations, and gifts. Includes wax, handle, and accessories.",
    options: {
      color: ["Gold", "Silver", "Bronze"],
      set: ["Basic", "Deluxe"]
    }
  },
  {
    id: "3",
    image: "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd3.jpg",
    images: [
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd3.jpg"
    ],
    title: "Custom Puff Embossed Sweatshirt",
    price: 819.18,
    oldPrice: 1820.21,
    discount: 55,
    rating: 4.8,
    seller: "CozyWear",
    description: "Personalized puff embossed sweatshirt, cozy and stylish for all seasons. Custom text available.",
    options: {
      size: ["S", "M", "L", "XL"],
      color: ["Navy", "Black", "White"]
    }
  },
  {
    id: "4",
    image: "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd4.jpg",
    images: [
      "https://i.etsystatic.com/12345678/r/il/abcd1234/1234567890/il_794xN.1234567890_abcd4.jpg"
    ],
    title: "Clover Pants – PDF Sewing Pattern",
    price: 128.91,
    oldPrice: 322.26,
    discount: 60,
    rating: 4.9,
    seller: "PatternStudio",
    description: "Clover Pants digital PDF sewing pattern. Easy to follow instructions, instant download.",
    options: {
      size: ["XS", "S", "M", "L", "XL"]
    }
  },
];

export default mockDeals; 