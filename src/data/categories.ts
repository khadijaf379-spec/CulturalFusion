export type CategoryMeta = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "printed",
    name: "Printed",
    slug: "printed",
    description: "Vibrant botanical motifs, vintage paisley, and contemporary geometric prints crafted on lightweight luxury lawn and cambric.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    itemCount: 8,
  },
  {
    id: "solids",
    name: "Solids",
    slug: "solids",
    description: "Minimalist monochrome silhouettes with artisanal tailored necklines, pure cambric, and breathable daily luxury.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    itemCount: 6,
  },
  {
    id: "unstitched",
    name: "Unstitched",
    slug: "unstitched",
    description: "Bespoke fabric lengths with embroidered organza patches, fine voile dupattas, and premium cambric trousers.",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=900&q=80",
    itemCount: 6,
  },
  {
    id: "exclusive",
    name: "Exclusive",
    slug: "exclusive",
    description: "Opulent micro-velvet, raw silk karandi, hand-embellished tilla zardozi, and festive silhouettes for memorable evenings.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    itemCount: 6,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Artisanal Punjabi khussas with hand-embroidered dabka, pure silk dupattas, and handcrafted kundan jewellery.",
    image: "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=900&q=80",
    itemCount: 6,
  },
  {
    id: "sale",
    name: "Sale",
    slug: "sale",
    description: "Special seasonal discounts on selected pret, unstitched collections, and accessories.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",
    itemCount: 7,
  },
];
