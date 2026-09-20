"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  Ruler,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { Product } from "@/types/product";
import { ProductGallery } from "@/components/products/ProductGallery";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/utils";

type ProductDetailClientProps = {
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string>("description");
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    router.push("/checkout");
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) => (prev === section ? "" : section));
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Shop", href: `/${product.category}` },
            { label: product.category, href: `/${product.category}` },
            { label: product.name },
          ]}
        />

        {/* Product Details Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 pb-16">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right Column: Product Information & Purchase Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category, Collection, Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A88B5A] font-semibold">
                  {product.collection} • {product.fabric}
                </span>
                {product.badge && <Badge type={product.badge} />}
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1D1D1B] tracking-tight leading-snug mb-3">
                {product.name}
              </h1>

              {/* SKU & Stock */}
              <div className="flex items-center space-x-3 text-xs text-[#6E6A64] mb-4">
                <span>SKU: {product.sku || product.id.toUpperCase()}</span>
                <span>•</span>
                <span className={product.inStock ? "text-emerald-700 font-medium" : "text-red-600"}>
                  {product.inStock ? "In Stock (Atelier Ready)" : "Out of Stock"}
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline space-x-3 pb-6 border-b border-[#E9E1D5]">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#1D1D1B]">
                  {formatPrice(product.salePrice ?? product.price)}
                </span>
                {product.salePrice && (
                  <span className="text-sm sm:text-base text-[#6E6A64] line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
                {product.salePrice && (
                  <span className="text-xs text-red-700 font-semibold bg-red-50 border border-red-200 px-2 py-0.5">
                    Save {Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                  </span>
                )}
              </div>

              {/* Color indicator */}
              {product.colors && product.colors.length > 0 && (
                <div className="py-4 border-b border-[#E9E1D5]">
                  <p className="text-xs uppercase tracking-wider text-[#6E6A64] mb-2">
                    Color: <span className="font-semibold text-[#1D1D1B]">{product.colors.join(", ")}</span>
                  </p>
                </div>
              )}

              {/* Size Selector */}
              <div className="py-5 border-b border-[#E9E1D5]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-[#1D1D1B] font-semibold">
                    Select Size:
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center space-x-1 text-xs text-[#A88B5A] hover:text-[#1D1D1B] underline underline-offset-4"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[44px] px-3.5 py-2 text-xs border uppercase tracking-wider font-medium transition-colors ${
                          isSelected
                            ? "bg-[#1D1D1B] text-[#F8F5EF] border-[#1D1D1B]"
                            : "bg-[#FAF8F5] text-[#1D1D1B] border-[#D9D2C7] hover:border-[#1D1D1B]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Stepper & Buttons */}
              <div className="py-6 border-b border-[#E9E1D5] space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-xs uppercase tracking-wider text-[#6E6A64]">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-[#D9D2C7] bg-[#FAF8F5]">
                    <button
                      type="button"
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                      className="p-2 text-[#6E6A64] hover:text-[#1D1D1B]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-xs font-semibold text-[#1D1D1B]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="p-2 text-[#6E6A64] hover:text-[#1D1D1B]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added To Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add To Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    className="w-full py-3.5 bg-[#A88B5A] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8C7243] transition-colors flex items-center justify-center space-x-1 disabled:opacity-50"
                  >
                    <span>Buy It Now</span>
                  </button>
                </div>

                {/* Wishlist Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="w-full py-2.5 border border-[#D9D2C7] bg-[#FAF8F5] text-xs uppercase tracking-widest text-[#1D1D1B] hover:border-[#1D1D1B] transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorite ? "fill-[#A88B5A] text-[#A88B5A]" : "text-[#1D1D1B]"
                    }`}
                  />
                  <span>
                    {isFavorite ? "Saved in Wishlist" : "Add to Wishlist"}
                  </span>
                </button>
              </div>

              {/* Delivery Guarantees Highlights */}
              <div className="py-4 grid grid-cols-3 gap-2 text-center text-[10px] text-[#6E6A64] border-b border-[#E9E1D5] bg-[#F0ECE4]/50 p-2">
                <div className="flex flex-col items-center">
                  <Truck className="w-4 h-4 text-[#A88B5A] mb-1" />
                  <span>Free Over Rs. 4,000</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="w-4 h-4 text-[#A88B5A] mb-1" />
                  <span>10-Day Exchanges</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-[#A88B5A] mb-1" />
                  <span>100% In-House Made</span>
                </div>
              </div>

              {/* Accordion Sections */}
              <div className="mt-6 divide-y divide-[#E9E1D5] border-y border-[#E9E1D5]">
                {/* Description */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion("description")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A]"
                  >
                    <span>Description & Details</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === "description" ? "rotate-180 text-[#A88B5A]" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "description" && (
                    <div className="pt-3 text-xs text-[#6E6A64] space-y-3 leading-relaxed">
                      <p>{product.description}</p>
                      {product.details && (
                        <ul className="list-disc pl-4 space-y-1">
                          {product.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* Fabric & Care */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion("care")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A]"
                  >
                    <span>Fabric & Care</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === "care" ? "rotate-180 text-[#A88B5A]" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "care" && (
                    <div className="pt-3 text-xs text-[#6E6A64] space-y-2 leading-relaxed">
                      <p>
                        <strong className="font-semibold text-[#1D1D1B]">Composition:</strong>{" "}
                        {product.fabric}
                      </p>
                      {product.careInstructions && (
                        <ul className="list-disc pl-4 space-y-1">
                          {product.careInstructions.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* Delivery */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion("delivery")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A]"
                  >
                    <span>Shipping & Delivery</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === "delivery" ? "rotate-180 text-[#A88B5A]" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "delivery" && (
                    <div className="pt-3 text-xs text-[#6E6A64] space-y-2 leading-relaxed">
                      <p>• <strong>Lahore Deliveries:</strong> Delivered within 1 working day.</p>
                      <p>• <strong>Nationwide (Karachi, Islamabad, Rawalpindi, etc.):</strong> 2 to 4 working days.</p>
                      <p>• <strong>Shipping Charges:</strong> Free on all orders above Rs. 4,000. Flat Rs. 250 nationwide for smaller orders.</p>
                    </div>
                  )}
                </div>

                {/* Returns */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion("returns")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A]"
                  >
                    <span>10-Day Exchanges & Returns</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === "returns" ? "rotate-180 text-[#A88B5A]" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "returns" && (
                    <div className="pt-3 text-xs text-[#6E6A64] space-y-2 leading-relaxed">
                      <p>We provide a hassle-free 10-day exchange and return policy on unworn garments with original tags intact.</p>
                      <Link href="/returns" className="text-[#A88B5A] underline hover:text-[#1D1D1B]">
                        View full policy & exchange form
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        <RelatedProducts products={relatedProducts} />
      </div>

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] border border-[#E9E1D5] max-w-lg w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-4 right-4 text-[#6E6A64] hover:text-[#1D1D1B]"
            >
              ✕
            </button>
            <h3 className="font-serif text-xl font-normal text-[#1D1D1B] mb-2">
              Ready-To-Wear Standard Size Chart
            </h3>
            <p className="text-xs text-[#6E6A64] mb-4">
              All measurements are in inches. For custom tailoring, visit our Lahore flagship store.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-[#D9D2C7] divide-y divide-[#D9D2C7]">
                <thead className="bg-[#E9E1D5] text-[#1D1D1B] uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-2 border-r border-[#D9D2C7]">Size</th>
                    <th className="p-2 border-r border-[#D9D2C7]">Bust</th>
                    <th className="p-2 border-r border-[#D9D2C7]">Waist</th>
                    <th className="p-2 border-r border-[#D9D2C7]">Hip</th>
                    <th className="p-2">Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E1D5] text-[#1D1D1B]">
                  <tr><td className="p-2 font-semibold border-r border-[#D9D2C7]">XS</td><td className="p-2 border-r border-[#D9D2C7]">34&quot;</td><td className="p-2 border-r border-[#D9D2C7]">30&quot;</td><td className="p-2 border-r border-[#D9D2C7]">37&quot;</td><td className="p-2">40&quot;</td></tr>
                  <tr><td className="p-2 font-semibold border-r border-[#D9D2C7]">S</td><td className="p-2 border-r border-[#D9D2C7]">36&quot;</td><td className="p-2 border-r border-[#D9D2C7]">32&quot;</td><td className="p-2 border-r border-[#D9D2C7]">39&quot;</td><td className="p-2">41&quot;</td></tr>
                  <tr><td className="p-2 font-semibold border-r border-[#D9D2C7]">M</td><td className="p-2 border-r border-[#D9D2C7]">39&quot;</td><td className="p-2 border-r border-[#D9D2C7]">35&quot;</td><td className="p-2 border-r border-[#D9D2C7]">42&quot;</td><td className="p-2">42&quot;</td></tr>
                  <tr><td className="p-2 font-semibold border-r border-[#D9D2C7]">L</td><td className="p-2 border-r border-[#D9D2C7]">42&quot;</td><td className="p-2 border-r border-[#D9D2C7]">38&quot;</td><td className="p-2 border-r border-[#D9D2C7]">45&quot;</td><td className="p-2">43&quot;</td></tr>
                  <tr><td className="p-2 font-semibold border-r border-[#D9D2C7]">XL</td><td className="p-2 border-r border-[#D9D2C7]">45&quot;</td><td className="p-2 border-r border-[#D9D2C7]">41&quot;</td><td className="p-2 border-r border-[#D9D2C7]">48&quot;</td><td className="p-2">44&quot;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E9E1D5] flex justify-between items-center">
              <Link href="/size-guide" className="text-xs text-[#A88B5A] underline hover:text-[#1D1D1B]">
                View Full Illustrated Guide
              </Link>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(false)}
                className="px-4 py-1.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
