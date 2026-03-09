export type ProductDepartment = "apparel" | "general";

export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  department: ProductDepartment;
  inStock: boolean;
  badge: string;
  description: string;
  imageLabel: string;
  imageClass: string;
};

export const products: Product[] = [
  {
    id: "mens-corporate-shirt",
    title: "Men's Corporate Shirt",
    price: 18500,
    category: "Men's Fashion",
    department: "apparel",
    inStock: true,
    badge: "Best Seller",
    description: "Crisp long-sleeve office shirt with a polished regular fit.",
    imageLabel: "Formalwear",
    imageClass: "from-slate-900 via-slate-700 to-slate-500",
  },
  {
    id: "ankara-print-dress",
    title: "Ankara Print Dress",
    price: 29500,
    category: "Women's Apparel",
    department: "apparel",
    inStock: true,
    badge: "New Arrival",
    description: "Statement Ankara dress tailored for weekend and event wear.",
    imageLabel: "Ankara",
    imageClass: "from-amber-500 via-rose-500 to-fuchsia-600",
  },
  {
    id: "tailored-senator-set",
    title: "Tailored Senator Set",
    price: 54000,
    category: "Men's Fashion",
    department: "apparel",
    inStock: true,
    badge: "Premium",
    description: "Refined two-piece native set finished with clean structured lines.",
    imageLabel: "Native Set",
    imageClass: "from-emerald-700 via-emerald-500 to-teal-400",
  },
  {
    id: "womens-blazer-co-ord",
    title: "Women's Blazer Co-ord",
    price: 48500,
    category: "Women's Apparel",
    department: "apparel",
    inStock: false,
    badge: "Restocking",
    description: "Smart co-ord with a tailored blazer and matching trousers.",
    imageLabel: "Set",
    imageClass: "from-cyan-800 via-sky-600 to-blue-400",
  },
  {
    id: "rechargeable-standing-fan",
    title: "Rechargeable Standing Fan",
    price: 82000,
    category: "Home Goods",
    department: "general",
    inStock: true,
    badge: "Hot Deal",
    description: "Power-saving standing fan with rechargeable battery backup.",
    imageLabel: "Cooling",
    imageClass: "from-sky-800 via-cyan-600 to-teal-400",
  },
  {
    id: "premium-bedding-set",
    title: "Premium Bedding Set",
    price: 36500,
    category: "Home Goods",
    department: "general",
    inStock: true,
    badge: "Everyday Essential",
    description: "Soft-touch duvet cover and pillowcase set for modern bedrooms.",
    imageLabel: "Bedroom",
    imageClass: "from-indigo-900 via-blue-700 to-cyan-500",
  },
  {
    id: "bluetooth-home-speaker",
    title: "Bluetooth Home Speaker",
    price: 27000,
    category: "Gadgets",
    department: "general",
    inStock: true,
    badge: "Top Rated",
    description: "Portable wireless speaker with rich bass and clear vocals.",
    imageLabel: "Audio",
    imageClass: "from-slate-950 via-slate-700 to-blue-500",
  },
  {
    id: "three-burner-gas-cooker",
    title: "3-Burner Gas Cooker",
    price: 69500,
    category: "Kitchen",
    department: "general",
    inStock: true,
    badge: "Family Pick",
    description: "Reliable tabletop cooker designed for fast daily meal prep.",
    imageLabel: "Kitchen",
    imageClass: "from-stone-800 via-stone-600 to-orange-400",
  },
  {
    id: "office-study-chair",
    title: "Office Study Chair",
    price: 58500,
    category: "Office & School",
    department: "general",
    inStock: false,
    badge: "Limited Stock",
    description: "Ergonomic chair built for home office and study sessions.",
    imageLabel: "Workspace",
    imageClass: "from-zinc-800 via-slate-600 to-cyan-400",
  },
  {
    id: "smart-rechargeable-lantern",
    title: "Smart Rechargeable Lantern",
    price: 14500,
    category: "Essentials",
    department: "general",
    inStock: true,
    badge: "Kubwa Favorite",
    description: "Compact emergency light with multiple brightness levels.",
    imageLabel: "Lighting",
    imageClass: "from-yellow-500 via-amber-400 to-orange-300",
  },
  {
    id: "non-stick-cookware-set",
    title: "Non-Stick Cookware Set",
    price: 44500,
    category: "Kitchen",
    department: "general",
    inStock: true,
    badge: "Bundle Value",
    description: "Complete cookware set for everyday family meals and batch prep.",
    imageLabel: "Cookware",
    imageClass: "from-red-700 via-orange-500 to-amber-400",
  },
  {
    id: "kids-school-backpack",
    title: "Kids School Backpack",
    price: 12000,
    category: "Office & School",
    department: "general",
    inStock: true,
    badge: "Fresh Drop",
    description: "Durable backpack with padded straps and multiple compartments.",
    imageLabel: "Backpack",
    imageClass: "from-violet-700 via-fuchsia-500 to-pink-400",
  },
];

export const formatNaira = (price: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

export const shopCategories = Array.from(
  new Set(products.map((product) => product.category)),
);

export const apparelProducts = products.filter(
  (product) => product.department === "apparel",
);

export const generalProducts = products.filter(
  (product) => product.department === "general",
);
