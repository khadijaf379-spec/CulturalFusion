# Cultural Fusion — Complete Next.js + Antigravity Website Research & Build Prompt

## 1. Project Overview

Build a premium, modern, production-quality **Next.js website concept for Cultural Fusion**, a Pakistani women's fashion brand based in Lahore.

The website must feel like a real premium fashion brand website, not a generic e-commerce template.

### Primary Goal

Create a complete multi-page fashion e-commerce experience with:

- Premium editorial design
- Pakistani cultural identity
- Modern luxury fashion presentation
- Product browsing and filtering
- Product detail pages
- Cart
- Wishlist
- Demo checkout
- Search
- Brand storytelling
- Style Edit
- Cultural Human Foundation section
- Blog / Journal
- Store information
- Contact and support pages
- Strong responsive mobile experience
- SEO-friendly architecture
- Accessible UI
- High performance

### Important

This is a **new website concept/redesign**, not a clone of Cultural Fusion's existing website.

Do not copy the existing site's exact layout, text, components, or visual structure.

Use the researched business information as factual reference material, but create a substantially better and more modern user experience.

---

# 2. Research Summary

## Business

**Cultural Fusion**

### Category

Women's clothing / Pakistani fashion / ethnic fashion / accessories

### Main Location

80 Sabzi Mandi, Iqbal Town, Wahdat Road, Near Al-Asar Lab, Kamran Block, Lahore, Pakistan

### Main Phone

+92 312 4644046

### Additional Phone

+92 300 1834046

### International Contact

+92 325 7864046

### Email

contact@culturalfusion.pk

### Official Website

https://culturalfusion.pk/

### International Website

https://culturalfusion.com.pk/

### Current Business Listing

The current business listing shows approximately:

- Rating: 4.4/5
- Reviews: 50
- Category: Clothing store

Do not hard-code these values as permanent website content unless they are intended as a portfolio research reference.

---

# 3. Brand Background

Cultural Fusion's official About Us information states that the brand was founded in 2019.

The brand describes its beginnings as a small home-based stitching operation using two sewing machines and says it developed into an in-house production operation.

The founder is identified as **Islam Shahid**.

Because different online profiles show slightly different founding dates, use:

> Founded in 2019

instead of claiming a specific month unless the business confirms it.

---

# 4. Brand Positioning

The website should communicate:

- Pakistani cultural heritage
- Traditional craftsmanship
- Modern fashion
- Quality fabrics
- Thoughtful design
- In-house production
- Comfortable everyday clothing
- Long-term wardrobe value
- Fashion with purpose

Core positioning:

> Rooted in tradition. Designed for today.

Possible brand message:

> Where Pakistani heritage meets contemporary everyday elegance.

Do not invent unsupported company claims.

---

# 5. Product Research

Cultural Fusion currently offers a broad women's fashion catalogue.

## Clothing Categories

- Printed
- Solids
- Unstitched
- 2 Piece
- 3 Piece
- Lawn
- Khaddar
- Cambric
- Velvet
- Silk
- Dobby
- Georgette
- Shawls

## Accessories

- Dupattas
- Khussas
- Jewellery
- Clutches
- Accessories

## Other

- Kids
- New Arrivals
- Sale
- Exclusive Collection

The catalogue is large and changes frequently, so the Next.js project should use a local structured demo dataset rather than hard-coding a fixed real catalogue.

---

# 6. Current Price Research

Examples found on the current website include approximately:

- 3 Piece Silk Karandi Dress — Rs. 8,490
- 3 Piece Khaddar Printed Dress — Rs. 9,490+
- Khaddar Printed Dress with Shalwar — around Rs. 9,690
- Velvet Dress — around Rs. 16,990
- Velvet Dress with Sharara — around Rs. 19,990
- Unstitched Lawn — approximately Rs. 4,193–6,690

Use realistic Pakistani fashion pricing in demo data.

Examples:

```text
Rs. 4,490
Rs. 5,490
Rs. 6,490
Rs. 8,490
Rs. 9,490
Rs. 12,990
Rs. 16,990
Rs. 19,990
```

Do not present demo products as exact current products unless their information is verified.

---

# 7. Shipping / Service Research

The current official website states information including:

- Free nationwide shipping above Rs. 4,000
- Lahore delivery can be within 1 working day
- 10-day return/exchange policy
- 24/7 support
- PayPak
- Visa
- Mastercard

These policies can change.

Therefore, when implementing the portfolio concept:

- Clearly structure these as editable configuration/content
- Do not claim they are permanently current
- Do not invent additional shipping guarantees

---

# 8. Cultural Human Foundation

Cultural Fusion's website states that:

> 5% of every sale goes toward the Cultural Human Foundation.

This should become an important storytelling section.

## Section title

FASHION WITH PURPOSE

## Suggested message

> Every purchase carries a purpose.

Explain that the brand states that 5% of every sale is contributed to the Cultural Human Foundation.

### Important

Do NOT invent:

- Number of beneficiaries
- Number of families helped
- Donation totals
- Schools built
- Projects completed
- Charity statistics
- Impact percentages other than the stated 5%

Only use verified information.

---

# 9. Style Edit Research

The current website includes a Style Edit featuring fashion/editorial imagery and names such as:

- Sara Khan
- Kinza Hashmi
- Sidra Niazi
- Sahar Hashmi
- Muniba Mazari
- Laiba Khurram
- Zainab Shabbir
- Shifa Yousafzai
- Hina Khan
- Laraib Rahim

### Important

Do not label any person as:

- Brand ambassador
- Official ambassador
- Partner
- Sponsored celebrity
- Collaborator

unless the relationship is verified.

For the new website, present this as:

> THE STYLE EDIT

with editorial inspiration and verified featured content.

---

# 10. Design Direction

The website should feel like a premium Pakistani fashion editorial website.

## Visual keywords

- Elegant
- Editorial
- Premium
- Minimal
- Cultural
- Sophisticated
- Feminine
- Modern
- Warm
- Fashion-forward

## Avoid

- Generic SaaS UI
- Excessive gradients
- Excessive rounded cards
- Bright neon colors
- Heavy shadows
- Overloaded layouts
- Cheap-looking animations
- Generic stock-template appearance

---

# 11. Color Palette

Use a warm luxury palette.

```text
Warm Ivory      #F8F5EF
Soft Beige      #E9E1D5
Deep Charcoal   #1D1D1B
Muted Text      #6E6A64
Antique Gold    #A88B5A
White           #FFFFFF
```

Use antique gold sparingly.

The overall website should remain primarily ivory, beige, white and charcoal.

---

# 12. Typography

Use:

### Display font

Playfair Display

### Body font

Inter

Use `next/font/google`.

Typography hierarchy:

- Large editorial hero headings
- Elegant serif section titles
- Clean sans-serif navigation
- Readable product information
- Spacious body text

---

# 13. Technology Stack

Use ONLY the following primary stack:

- Next.js latest stable
- React
- TypeScript
- App Router
- Tailwind CSS
- ESLint

Recommended:

- lucide-react
- framer-motion or Motion
- react-hook-form
- zod

Do NOT use:

- Vite
- Create React App
- Vue
- Angular
- PHP
- WordPress
- Bootstrap as the primary styling framework

---

# 14. Project Setup

Use:

```bash
npx create-next-app@latest cultural-fusion
```

Recommended selections:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
App Router: Yes
src directory: Yes
Import alias: @/*
```

---

# 15. Folder Structure

Use a scalable architecture similar to:

```text
cultural-fusion/
│
├── public/
│   └── images/
│       ├── products/
│       ├── categories/
│       ├── campaigns/
│       ├── banners/
│       ├── stores/
│       └── blog/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── new-in/
│   │   ├── printed/
│   │   ├── solids/
│   │   ├── unstitched/
│   │   ├── exclusive/
│   │   ├── accessories/
│   │   ├── sale/
│   │   │
│   │   ├── products/
│   │   │   └── [slug]/
│   │   │
│   │   ├── search/
│   │   ├── cart/
│   │   ├── wishlist/
│   │   ├── checkout/
│   │   │   └── success/
│   │   │
│   │   ├── about/
│   │   ├── our-story/
│   │   ├── foundation/
│   │   ├── style-edit/
│   │   ├── stores/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── size-guide/
│   │   ├── shipping/
│   │   ├── returns/
│   │   ├── faq/
│   │   ├── contact/
│   │   │
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── home/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── blog/
│   │   └── ui/
│   │
│   ├── context/
│   │   ├── CartContext.tsx
│   │   └── WishlistContext.tsx
│   │
│   ├── data/
│   │   ├── products.ts
│   │   ├── categories.ts
│   │   ├── collections.ts
│   │   ├── stores.ts
│   │   ├── blog.ts
│   │   └── style-edit.ts
│   │
│   ├── lib/
│   │
│   └── types/
│       ├── product.ts
│       ├── category.ts
│       ├── store.ts
│       └── blog.ts
│
└── package.json
```

---

# 16. Header

Create a premium sticky header.

## Announcement Bar

Display:

> FREE SHIPPING ON ORDERS ABOVE RS. 4,000

Make this configurable.

## Desktop Navigation

```text
NEW IN
PRINTED
SOLIDS
UNSTITCHED
EXCLUSIVE
ACCESSORIES
SALE
```

Right-side actions:

- Search
- Account
- Wishlist
- Cart

Use Lucide icons.

## Mobile Header

Use:

```text
Menu | CULTURAL FUSION | Search / Cart
```

Create a polished mobile drawer.

---

# 17. Homepage

Build the homepage in this order:

```text
Announcement Bar
Header
Hero
Shop By Category
New Arrivals
Editorial Campaign
Featured Collection
Fashion With Purpose
Style Edit
Our Story
Cultural Journal
Newsletter
Footer
```

---

# 18. Hero Section

Create a full-width editorial fashion hero.

Suggested headline:

> THE ART OF EVERYDAY ELEGANCE

Supporting line:

> Rooted in tradition. Designed for today.

Buttons:

```text
SHOP NEW IN
EXPLORE COLLECTION
```

Use high-quality fashion imagery.

Do not use random low-quality stock images.

If image assets are unavailable, create clearly structured local placeholders that can easily be replaced.

---

# 19. Shop By Category

Create a visual category grid.

Categories:

- Printed
- Solids
- Unstitched
- 2 Piece
- 3 Piece
- Dupattas
- Khussas
- Jewellery
- Accessories

Use large editorial category images.

---

# 20. New Arrivals

Display a horizontal or responsive product grid.

Each card should include:

- Product image
- Hover image
- Product name
- Price
- Sale price if applicable
- Badge
- Wishlist button
- Quick Add

Example badges:

```text
NEW
BESTSELLER
LIMITED
SALE
```

Do not overuse badges.

---

# 21. Editorial Campaign

Create a large visual storytelling section.

Example:

> A MODERN EXPRESSION OF HERITAGE

Supporting copy:

> Thoughtfully designed silhouettes, rich textures and timeless Pakistani craftsmanship come together for the modern wardrobe.

CTA:

> DISCOVER THE COLLECTION

---

# 22. Product Data

Create at least **30 realistic demo products**.

Never use:

```text
Product 1
Product 2
Test Dress
Demo Product
```

Use realistic fashion names.

Examples:

```text
Noor Printed Lawn Set
Mehram Khaddar Ensemble
Zara Ivory Silk Kurta
Aabroo Velvet Edit
Meher Dobby Three Piece
Rangoli Printed Suit
Ayla Solid Cambric Set
Gulnaar Khaddar Ensemble
```

Use original demo names rather than falsely representing them as exact current Cultural Fusion products.

---

# 23. Product TypeScript Model

Use:

```ts
export type Product = {
  id: string
  slug: string
  name: string
  category: string
  collection: string
  description: string
  price: number
  salePrice?: number
  images: string[]
  sizes: string[]
  colors?: string[]
  fabric: string
  type: string
  badge?: string
  inStock: boolean
  featured?: boolean
  newArrival?: boolean
  bestSeller?: boolean
}
```

You can extend this model if needed.

---

# 24. Category Pages

Create:

```text
/new-in
/printed
/solids
/unstitched
/exclusive
/accessories
/sale
```

Each page must contain:

- Breadcrumb
- Page title
- Intro description
- Product count
- Filters
- Sort
- Product grid
- Pagination or load-more behavior

---

# 25. Product Filters

Support:

- Category
- Price
- Size
- Fabric
- Color
- Availability

Sorting:

```text
Featured
Newest
Price: Low to High
Price: High to Low
```

Mobile should use a filter drawer.

---

# 26. Product Detail Page

Route:

```text
/products/[slug]
```

Include:

- Large image gallery
- Thumbnail navigation
- Image zoom
- Mobile image swipe
- Product name
- Rating display
- Price
- Sale price
- Description
- Fabric
- Color
- Size selector
- Quantity selector
- Add to Cart
- Buy Now
- Wishlist
- Availability

Accordion sections:

```text
DESCRIPTION
FABRIC & CARE
DELIVERY
RETURNS
```

Add:

> YOU MAY ALSO LIKE

with related products.

Use `generateMetadata()` for product SEO.

---

# 27. Search

Route:

```text
/search
```

Support searching by:

- Product name
- Category
- Collection
- Fabric

Example:

```text
/search?q=khaddar
```

Show:

- Search term
- Results count
- Product grid
- Empty search state

---

# 28. Cart

Implement a real front-end cart using React Context.

Features:

- Add item
- Remove item
- Increase quantity
- Decrease quantity
- Select size
- Show subtotal
- Show estimated shipping
- Show total
- Continue shopping
- Proceed to checkout

Persist cart in `localStorage`.

Create both:

```text
Cart Drawer
/cart
```

---

# 29. Wishlist

Implement:

```text
WishlistContext.tsx
```

Persist wishlist in localStorage.

Features:

- Add product
- Remove product
- Move to cart
- Empty wishlist state

Route:

```text
/wishlist
```

---

# 30. Checkout

Route:

```text
/checkout
```

Use:

- React Hook Form
- Zod

Fields:

```text
Full Name
Email
Phone
Address
City
Postal Code
```

Payment options:

```text
Cash on Delivery
Demo Card Payment
```

Do NOT integrate a real payment gateway.

Clearly keep payment functionality as a demo/portfolio implementation.

---

# 31. Checkout Success

Route:

```text
/checkout/success
```

Show:

> ORDER CONFIRMED

Generate a realistic demo order number such as:

```text
CF-2026-48291
```

Include:

- Order summary
- Customer details
- Estimated delivery message
- Continue shopping button

---

# 32. About Page

Route:

```text
/about
```

Tell the brand story using only verified or carefully worded information.

Sections:

```text
WHO WE ARE
OUR PHILOSOPHY
CRAFTSMANSHIP
OUR APPROACH
FASHION WITH PURPOSE
```

---

# 33. Our Story

Route:

```text
/our-story
```

Use a visual timeline:

```text
2019
Beginning of Cultural Fusion

EARLY YEARS
Small-scale stitching operation

GROWTH
Development of in-house production

TODAY
Modern Pakistani fashion brand
```

Avoid inventing exact milestones that have not been verified.

---

# 34. Foundation Page

Route:

```text
/foundation
```

Hero:

> FASHION WITH PURPOSE

Main statement:

> Every purchase carries a purpose.

Explain the brand's stated contribution:

> Cultural Fusion states that 5% of every sale goes toward the Cultural Human Foundation.

Use beautiful editorial imagery.

Do not invent charity statistics.

---

# 35. Style Edit

Route:

```text
/style-edit
```

Make this feel like a fashion magazine.

Include:

- Editorial cards
- Outfit inspiration
- Styling guides
- Featured looks
- Cultural fashion stories

Use verified personality/celebrity references only where appropriate.

---

# 36. Blog / Cultural Journal

Routes:

```text
/blog
/blog/[slug]
```

Create at least six articles.

Suggested topics:

1. How to Style a Pakistani 3-Piece Suit
2. Understanding Pakistani Fabrics
3. How to Care for Khaddar
4. Printed vs Solid: Which Style Fits Your Wardrobe?
5. Five Ways to Style a Dupatta
6. Building a Modern Pakistani Wardrobe

Each article should have:

- Title
- Slug
- Date
- Category
- Cover image
- Excerpt
- Content
- Related articles

Use:

```ts
generateStaticParams()
generateMetadata()
```

---

# 37. Stores Page

Route:

```text
/stores
```

Show the main verified Lahore store.

### Store Information

```text
Cultural Fusion

80 Sabzi Mandi
Iqbal Town, Wahdat Road
Near Al-Asar Lab
Kamran Block
Lahore, Pakistan

Phone:
+92 312 4644046
```

Include:

- Store card
- Phone button
- Directions button
- Opening hours
- Map placeholder

Do not add the second Lahore address found online as a store branch unless Cultural Fusion confirms it.

---

# 38. Size Guide

Route:

```text
/size-guide
```

Create:

- XS
- S
- M
- L
- XL
- XXL

Include:

```text
Bust
Waist
Hip
Length
```

Add:

> HOW TO MEASURE

with a simple visual guide.

Make measurements editable because exact brand sizing should be confirmed before production.

---

# 39. FAQ

Route:

```text
/faq
```

Questions:

- How long does delivery take?
- What payment methods are available?
- Do you offer Cash on Delivery?
- How can I track my order?
- What is the exchange policy?
- What sizes are available?
- Do you ship internationally?
- How can I contact customer support?

Use an accessible accordion.

---

# 40. Shipping Page

Route:

```text
/shipping
```

Use only verified current policy information.

Make shipping rules easy to edit.

Example:

> Free nationwide shipping above Rs. 4,000.

Do not invent delivery times for cities that have not been verified.

---

# 41. Returns Page

Route:

```text
/returns
```

Use the current stated 10-day return/exchange information only as a configurable policy.

Clearly separate:

- Return eligibility
- Exchange
- Damaged item process
- Contact procedure

If exact conditions are unknown, write:

> Please confirm the final return conditions with Cultural Fusion before publishing.

---

# 42. Contact Page

Route:

```text
/contact
```

Show:

```text
+92 312 4644046
+92 300 1834046

contact@culturalfusion.pk
```

Create a contact form:

```text
Name
Email
Phone
Subject
Message
```

Validate with Zod.

Show success/error states.

---

# 43. Footer

Create a large premium footer.

Columns:

### SHOP

- New In
- Printed
- Solids
- Unstitched
- Exclusive
- Accessories
- Sale

### HELP

- Contact
- FAQ
- Shipping
- Returns
- Size Guide

### ABOUT

- Our Story
- Foundation
- Style Edit
- Journal
- Stores

### CONNECT

- Instagram
- Facebook
- TikTok
- LinkedIn

Only add social URLs after verifying the official accounts.

---

# 44. Responsive Design

Test at:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
```

Requirements:

- No horizontal scrolling
- No broken grids
- No clipped buttons
- Mobile-friendly navigation
- Mobile filter drawer
- Touch-friendly buttons
- Responsive typography
- Responsive product gallery
- Responsive footer

The mobile experience should feel deliberately designed, not simply desktop shrunk down.

---

# 45. Animations

Use subtle premium animations.

Examples:

- Hero text reveal
- Image fade-in
- Product hover image transition
- Scroll reveal
- Cart drawer animation
- Mobile menu animation
- Wishlist feedback
- Button hover states
- Page transitions

Respect:

```css
prefers-reduced-motion
```

Do not make the website feel like an animation demo.

---

# 46. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- ARIA labels
- Accessible modals
- Accessible drawers
- Form labels
- Proper heading hierarchy
- Image alt text
- Sufficient contrast
- Accessible buttons
- Accessible navigation

---

# 47. SEO

Use Next.js Metadata API.

Implement:

- Page titles
- Meta descriptions
- Open Graph
- Twitter/X metadata
- Canonical URLs
- Product metadata
- Blog metadata
- `generateMetadata()`
- Structured semantic HTML
- Descriptive image alt text

Create appropriate metadata for each route.

---

# 48. Performance

Use:

- `next/image`
- `next/font`
- Server Components by default
- Client Components only where interaction is required
- Lazy loading where appropriate
- Dynamic imports when useful
- Optimized images
- Minimal JavaScript
- Avoid unnecessary dependencies

---

# 49. Error and Empty States

Create polished states for:

- Product not found
- Page not found
- Empty cart
- Empty wishlist
- No search results
- Form validation errors
- Checkout errors
- Loading states
- Product image loading
- Failed interactions

Use skeleton loaders where appropriate.

---

# 50. Components

Create reusable components.

## Layout

```text
Header
Footer
AnnouncementBar
```

## Navigation

```text
DesktopNavigation
MobileNavigation
MegaMenu
SearchOverlay
```

## Home

```text
Hero
CategoryGrid
NewArrivals
EditorialSection
FoundationSection
StyleEditSection
BrandStorySection
NewsletterSection
```

## Products

```text
ProductCard
ProductGrid
ProductGallery
ProductInfo
SizeSelector
ColorSelector
QuantitySelector
AddToCartButton
WishlistButton
FilterSidebar
MobileFilters
SortDropdown
RelatedProducts
```

## Cart

```text
CartDrawer
CartItem
CartSummary
```

## Checkout

```text
CheckoutForm
OrderSummary
```

## Blog

```text
BlogCard
BlogGrid
```

## UI

```text
Button
Badge
Modal
Accordion
Breadcrumb
Skeleton
```

---

# 51. Data Architecture

Keep demo content separated from components.

Use:

```text
src/data/products.ts
src/data/categories.ts
src/data/collections.ts
src/data/stores.ts
src/data/blog.ts
src/data/style-edit.ts
```

Do not place large product arrays directly inside page components.

---

# 52. State Management

For this portfolio/demo implementation:

### Cart

Use:

```text
CartContext
```

### Wishlist

Use:

```text
WishlistContext
```

Persist both with `localStorage`.

Do not introduce Redux unless there is a real requirement.

---

# 53. Images

Use high-quality fashion imagery.

Preferred visual subjects:

- Pakistani women's fashion
- Pakistani textile details
- Elegant studio portraits
- Traditional embroidery
- Fabric close-ups
- Dupattas
- Pakistani architectural/cultural backgrounds
- Minimal editorial fashion photography

Never use copyrighted images in a production website without permission.

For the portfolio concept, structure image paths so they can easily be replaced by licensed/client-provided assets.

---

# 54. Homepage Copy Direction

Suggested hero:

> THE ART OF EVERYDAY ELEGANCE

Supporting text:

> Rooted in tradition. Designed for today.

CTA:

> SHOP NEW IN

Secondary CTA:

> EXPLORE COLLECTION

---

# 55. Brand Story Copy Direction

Possible section:

> ROOTED IN CULTURE

> Cultural Fusion brings together the richness of Pakistani heritage and the ease of contemporary everyday fashion.

Keep the language elegant and concise.

Do not make unsupported claims about awards, certifications, market share, customer numbers or international presence.

---

# 56. Fashion With Purpose Copy

Suggested structure:

```text
FASHION WITH PURPOSE

Every purchase carries a purpose.

Cultural Fusion states that 5% of every sale
supports the Cultural Human Foundation.

DISCOVER OUR FOUNDATION
```

---

# 57. Newsletter

Create:

> JOIN THE CULTURAL JOURNAL

Supporting copy:

> Be the first to discover new collections, styling stories and seasonal edits.

Input:

```text
Enter your email
```

CTA:

```text
SUBSCRIBE
```

Use front-end validation.

Do not connect to a real email marketing provider unless specifically requested.

---

# 58. E-Commerce Behavior

The website should feel functional.

A visitor should be able to:

```text
Homepage
   ↓
Category
   ↓
Product
   ↓
Select Size
   ↓
Add to Cart
   ↓
Cart
   ↓
Checkout
   ↓
Order Confirmation
```

Also:

```text
Search
   ↓
Results
   ↓
Product
```

And:

```text
Wishlist
   ↓
Move to Cart
```

---

# 59. Antigravity Development Phases

Build the project in phases.

## Phase 1 — Project Setup

Create Next.js project.

Install dependencies.

Configure:

- TypeScript
- Tailwind
- ESLint
- Fonts
- Lucide
- Motion
- React Hook Form
- Zod

---

## Phase 2 — Design System

Create:

- Colors
- Typography
- Spacing
- Buttons
- Badges
- Containers
- Borders
- Responsive breakpoints

Build the visual foundation first.

---

## Phase 3 — Global Layout

Build:

- Announcement bar
- Header
- Desktop navigation
- Mobile navigation
- Footer

Test on desktop and mobile.

---

## Phase 4 — Product Data

Create:

- Product types
- 30+ demo products
- Categories
- Collections
- Product images
- Blog data
- Store data

---

## Phase 5 — Product Components

Build:

- Product card
- Product grid
- Product gallery
- Product information
- Size selector
- Quantity selector
- Wishlist
- Add to cart

---

## Phase 6 — Homepage

Build the full homepage.

Ensure:

- Strong visual hierarchy
- Premium spacing
- Editorial photography
- Clear CTAs
- Responsive layout

---

## Phase 7 — Category Pages

Implement:

```text
/new-in
/printed
/solids
/unstitched
/exclusive
/accessories
/sale
```

Add filtering and sorting.

---

## Phase 8 — Product Details

Implement:

```text
/products/[slug]
```

Add:

- Gallery
- Product information
- Size
- Color
- Quantity
- Cart
- Wishlist
- Related products
- SEO metadata

---

## Phase 9 — Search

Implement:

```text
/search
```

Support query parameters.

---

## Phase 10 — Cart

Implement:

- CartContext
- Cart drawer
- Cart page
- Local storage
- Totals

---

## Phase 11 — Wishlist

Implement:

- WishlistContext
- Wishlist page
- Local storage
- Move-to-cart behavior

---

## Phase 12 — Checkout

Build:

```text
/checkout
/checkout/success
```

Use React Hook Form + Zod.

Demo payments only.

---

## Phase 13 — Brand Pages

Build:

```text
/about
/our-story
/foundation
/style-edit
```

---

## Phase 14 — Journal

Build:

```text
/blog
/blog/[slug]
```

Add six or more articles.

---

## Phase 15 — Support Pages

Build:

```text
/stores
/size-guide
/shipping
/returns
/faq
/contact
```

---

## Phase 16 — Responsive Refinement

Test every page at:

```text
320
375
390
414
768
1024
1280
1440
1920
```

Fix all responsive problems.

---

## Phase 17 — Accessibility

Check:

- Keyboard
- Focus
- Screen-reader labels
- Forms
- Dialogs
- Navigation
- Color contrast

---

## Phase 18 — SEO

Implement:

- Metadata
- Open Graph
- Canonical URLs
- Product metadata
- Blog metadata
- Alt text

---

## Phase 19 — Performance

Check:

- Image optimization
- Font loading
- Client component usage
- Bundle size
- Lazy loading
- Unnecessary re-renders

---

## Phase 20 — Final QA

Run:

```bash
npm run lint
npm run build
```

Fix every error.

Then manually test:

```text
Homepage
Navigation
Mobile menu
Search
Category filters
Sorting
Product details
Add to cart
Cart drawer
Cart page
Wishlist
Checkout
Order success
Blog
About
Foundation
Contact
FAQ
Shipping
Returns
404
```

---

# 60. Final Quality Standard

The finished project should look like a **premium Pakistani fashion brand website**.

It must NOT look like:

- A student project
- A generic Next.js starter
- A basic Shopify clone
- A Bootstrap template
- A generic AI-generated website

It should communicate:

```text
CULTURE
CRAFT
ELEGANCE
MODERNITY
PURPOSE
```

---

# 61. Important Content Rules

Never invent:

- Awards
- Certifications
- Celebrity endorsements
- Brand ambassadors
- Partnerships
- Customer counts
- Sales numbers
- Charity statistics
- Store branches
- Manufacturing statistics
- Reviews
- Testimonials
- Product claims
- Exact policy details that have not been verified

If information is uncertain, make it editable or use a neutral placeholder.

---

# 62. Production Architecture

The code must be:

- Modular
- Maintainable
- Type-safe
- Reusable
- Component-based
- SEO-friendly
- Responsive
- Accessible

Avoid:

- Giant components
- Repeated markup
- Hard-coded duplicate data
- Unnecessary client components
- Unused dependencies
- Console errors
- Broken links
- Hydration warnings

---

# 63. Final Antigravity Instruction

You are building a complete premium fashion e-commerce website concept for **Cultural Fusion**, a Pakistani women's fashion brand.

Use Next.js App Router + TypeScript + Tailwind CSS.

Build it phase-by-phase.

Do not stop after creating the homepage.

Continue until all required pages, components, product flows, responsive layouts, accessibility, SEO, error states and final QA are implemented.

The result should be polished enough to demonstrate to a real client as a professional website redesign concept.

Prioritize:

1. Premium visual design
2. Realistic fashion content
3. Excellent responsive UX
4. Functional shopping flow
5. Clean Next.js architecture
6. Accessibility
7. SEO
8. Performance
9. Maintainability
10. Client-ready presentation

Before finishing, run:

```bash
npm run lint
npm run build
```

Fix all errors and warnings that can be resolved.

The final website should feel like a sophisticated Pakistani fashion editorial-commerce experience rather than a generic AI-generated template.
