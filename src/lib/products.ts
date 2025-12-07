export type Product = {
  id: string;
  name: string;
  category: "metal" | "gift";
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
};

export const products: Product[] = [
  // --- THE PREMIUM COLLECTION (Metal) ---
  {
    id: "metal-a4",
    name: "Classic Metal Print (A4)",
    category: "metal",
    price: 4500,
    image: "/images/metal-a4.jpg",
    description: "The perfect starter size. 8x12 inches of high-definition aluminum.",
    isNew: true,
  },
  {
    id: "metal-a3",
    name: "Gallery Metal Print (A3)",
    category: "metal",
    price: 8500,
    image: "/images/metal-a3.jpg",
    description: "Make a statement. 12x16 inches. Perfect for wedding portraits.",
  },
  
  // --- THE GIFT COLLECTION (Mugs/Slates) ---
  {
    id: "mug-magic",
    name: "Magic Changing Mug",
    category: "gift",
    price: 1850,
    image: "/images/mug.jpg",
    description: "Black when cold, reveals your photo when hot.",
  },
  {
    id: "rock-slate",
    name: "Granite Rock Slate",
    category: "gift",
    price: 2800,
    image: "/images/slate.jpg",
    description: "Your photo printed on natural stone with chipped edges.",
  },
];