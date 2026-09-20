export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  sizes: string[];
  colors?: string[];
  fabric: string;
  type: string;
  badge?: "NEW" | "BESTSELLER" | "LIMITED" | "SALE";
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  details?: string[];
  careInstructions?: string[];
  sku?: string;
  pieces?: string;
};

export type FilterState = {
  category?: string;
  fabric?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: "featured" | "newest" | "price-asc" | "price-desc";
  inStockOnly?: boolean;
};
