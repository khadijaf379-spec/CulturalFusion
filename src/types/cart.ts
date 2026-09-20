import { Product } from "./product";

export type CartItem = {
  product: Product;
  selectedSize: string;
  quantity: number;
  selectedColor?: string;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, selectedSize: string, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  freeShippingThreshold: number;
  shippingFee: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
};

export type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  clearWishlist: () => void;
  totalWishlistItems: number;
};
