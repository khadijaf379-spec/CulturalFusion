import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cultural Fusion — Contemporary Pakistani Luxury Fashion",
    template: "%s | Cultural Fusion",
  },
  description:
    "Rooted in tradition, designed for today. Explore luxury Pakistani women's fashion, printed lawn, minimalist solids, bespoke unstitched fabrics, and handcrafted Punjabi khussas based in Lahore.",
  keywords: [
    "Cultural Fusion",
    "Pakistani fashion",
    "Lahore designer wear",
    "luxury lawn",
    "unstitched suits",
    "velvet ensembles",
    "khaddar",
    "Punjabi khussa",
    "ready to wear pret",
  ],
  authors: [{ name: "Cultural Fusion Atelier" }],
  creator: "Cultural Fusion",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://culturalfusion.pk",
    siteName: "Cultural Fusion",
    title: "Cultural Fusion — Contemporary Pakistani Luxury Fashion",
    description:
      "Rooted in tradition. Designed for today. Luxury women's clothing, unstitched & pret collections from Lahore.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Cultural Fusion Luxury Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultural Fusion — Pakistani Luxury Fashion",
    description: "Rooted in tradition, designed for today.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8F5EF] text-[#1D1D1B]">
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Header />
            <CartDrawer />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
