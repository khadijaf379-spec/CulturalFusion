import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  // --- PRINTED ---
  {
    id: "cf-101",
    slug: "noor-printed-lawn-set",
    name: "Noor Printed Lawn Set",
    category: "printed",
    collection: "Summer Symphony",
    description: "A breezy three-piece printed lawn ensemble featuring intricate floral motifs inspired by Mughal frescoes. Finished with delicate lace trims along the sleeves and an airy digital-printed chiffon dupatta.",
    price: 6490,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sky Blue & Ivory", "Tea Rose"],
    fabric: "Lawn",
    type: "3 Piece Stitched",
    badge: "NEW",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: true,
    pieces: "Shirt, Trousers & Dupatta",
    sku: "CF-SS26-001",
    details: [
      "Digitally printed super fine 80s lawn shirt",
      "Dyed cotton cambric trousers with pin-tuck hems",
      "Featherlight printed crinkle chiffon dupatta",
      "Embroidered neckline patti included"
    ],
    careInstructions: [
      "Dry clean recommended for initial wash",
      "Gentle hand wash in cold water with mild detergent",
      "Do not bleach or tumble dry",
      "Warm iron inside out"
    ]
  },
  {
    id: "cf-102",
    slug: "mehram-khaddar-ensemble",
    name: "Mehram Khaddar Ensemble",
    category: "printed",
    collection: "Heritage Weaves",
    description: "Crafted on premium textured winter khaddar, Mehram combines earthy rust and ochre tones with traditional geometric block-print aesthetics. Tailored into a contemporary straight cut.",
    price: 9490,
    images: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Rust Terracotta", "Deep Indigo"],
    fabric: "Khaddar",
    type: "3 Piece Stitched",
    badge: "BESTSELLER",
    inStock: true,
    featured: true,
    newArrival: false,
    bestSeller: true,
    pieces: "Shirt, Shalwar & Wool Blend Shawl",
    sku: "CF-HW26-002",
    details: [
      "Handloom textured pure khaddar shirt",
      "Traditional pleated khaddar shalwar",
      "Complementary warm wool-blend printed shawl",
      "Wooden button detailing on placket"
    ],
    careInstructions: [
      "Dry clean only for shawls",
      "Wash dark colors separately",
      "Avoid direct harsh sunlight when drying"
    ]
  },
  {
    id: "cf-103",
    slug: "rangoli-printed-suit",
    name: "Rangoli Printed Suit",
    category: "printed",
    collection: "Summer Symphony",
    description: "Joyful celebration of vibrant hues. Featuring miniature Persian floral motifs across a rich saffron lawn canvas with organza sleeve borders and dyed cambric culottes.",
    price: 5490,
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Saffron Yellow", "Emerald Green"],
    fabric: "Lawn",
    type: "2 Piece Stitched",
    badge: "NEW",
    inStock: true,
    featured: false,
    newArrival: true,
    bestSeller: false,
    pieces: "Shirt & Trousers",
    sku: "CF-SS26-003",
    details: [
      "Printed lawn kurta with scalloped neckline",
      "Straight cambric trousers",
      "Pearl bead tassels along hem"
    ],
    careInstructions: [
      "Machine wash cold delicate cycle",
      "Low heat tumble dry",
      "Iron on medium setting"
    ]
  },
  {
    id: "cf-104",
    slug: "gulnaar-khaddar-ensemble",
    name: "Gulnaar Khaddar Ensemble",
    category: "printed",
    collection: "Heritage Weaves",
    description: "Deep garnet red tones layered with antique copper floral vine prints. Comes with a matching twill shawl designed for effortless seasonal grace.",
    price: 9690,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Garnet Crimson"],
    fabric: "Khaddar",
    type: "3 Piece Stitched",
    badge: "LIMITED",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Shirt, Shalwar & Twill Shawl",
    sku: "CF-HW26-004",
    details: [
      "Heavyweight winter khaddar front and back",
      "Dyed khaddar shalwar with embroidered cuffs",
      "Warm printed acrylic twill shawl"
    ],
    careInstructions: ["Professional dry clean recommended"]
  },
  {
    id: "cf-105",
    slug: "darakhshan-printed-cambric",
    name: "Darakhshan Printed Cambric",
    category: "printed",
    collection: "Everyday Pret",
    description: "Sophisticated charcoal and cream botanical pattern on smooth cambric cotton. Tailored with a relaxed modern silhouette for work and casual meetups.",
    price: 4890,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal & Ivory"],
    fabric: "Cambric",
    type: "2 Piece Stitched",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: true,
    pieces: "Kurta & Cigarette Pants",
    sku: "CF-EP26-005",
    details: ["Mandarin collar with threadwork buttons", "Side slit accents", "Tailored ankle-length cigarette pants"],
    careInstructions: ["Machine wash cold with like colors"]
  },
  {
    id: "cf-106",
    slug: "shahi-baugh-printed-lawn",
    name: "Shahi Baugh Printed Lawn",
    category: "printed",
    collection: "Summer Symphony",
    description: "Pastel mint and peach florals framed with ornate ornamental borders. Paired with a delicate digital printed voile dupatta.",
    price: 6890,
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Mint Frost", "Peach Blossom"],
    fabric: "Lawn",
    type: "3 Piece Stitched",
    inStock: true,
    featured: false,
    newArrival: true,
    bestSeller: false,
    pieces: "Shirt, Trousers & Voile Dupatta",
    sku: "CF-SS26-006",
    details: ["Premium Swiss voile dupatta", "Breathable combed lawn shirt", "Straight cut trousers with slit"],
    careInstructions: ["Gentle hand wash or dry clean"]
  },

  // --- SOLIDS ---
  {
    id: "cf-201",
    slug: "ayla-solid-cambric-set",
    name: "Ayla Solid Cambric Set",
    category: "solids",
    collection: "Monochrome Muse",
    description: "An understated, modern classic. Crisp desert sand tone in breathable 100% cambric cotton with tonal stitch details on the band collar and bell sleeves.",
    price: 5490,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Desert Sand", "Olive Ash"],
    fabric: "Cambric",
    type: "2 Piece Stitched",
    badge: "BESTSELLER",
    inStock: true,
    featured: true,
    newArrival: false,
    bestSeller: true,
    pieces: "Kurta & Wide Leg Culottes",
    sku: "CF-MM26-101",
    details: [
      "Relaxed A-line silhouette with side pockets",
      "Band collar with handcrafted fabric potli buttons",
      "Wide-leg palazzo culottes with elasticated waistband"
    ],
    careInstructions: ["Machine wash gentle cycle", "Warm iron"]
  },
  {
    id: "cf-202",
    slug: "zara-ivory-silk-kurta",
    name: "Zara Ivory Silk Kurta",
    category: "solids",
    collection: "Monochrome Muse",
    description: "Luminous ivory raw silk blend kurta accented with delicate tone-on-tone resham embroidery on the neckline and cuff hems. Pure understated luxury.",
    price: 8490,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pure Ivory", "Oatmeal Cream"],
    fabric: "Silk",
    type: "1 Piece Stitched",
    badge: "NEW",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Kurta",
    sku: "CF-MM26-102",
    details: [
      "Raw silk blend with subtle natural sheen",
      "Concealed button placket",
      "Slit cuffs with hand-tacked pearl accents"
    ],
    careInstructions: ["Dry clean only"]
  },
  {
    id: "cf-203",
    slug: "neelam-solid-linen-co-ord",
    name: "Neelam Solid Linen Co-Ord",
    category: "solids",
    collection: "Monochrome Muse",
    description: "Deep midnight cobalt dyed on pure breathable linen. Features a modern boxy cut shirt with tailored drop shoulders and ankle grazing matching trousers.",
    price: 6290,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Midnight Cobalt", "Charcoal Black"],
    fabric: "Linen",
    type: "2 Piece Stitched",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: true,
    pieces: "Boxy Shirt & Straight Pants",
    sku: "CF-MM26-103",
    details: ["Front flap pockets", "Relaxed tailored fit", "Breathable seasonal linen weave"],
    careInstructions: ["Machine wash cold", "Steam iron while damp"]
  },
  {
    id: "cf-204",
    slug: "sadaf-pearl-white-cambric",
    name: "Sadaf Pearl White Cambric",
    category: "solids",
    collection: "Monochrome Muse",
    description: "Pristine pearl white two-piece with intricate white-on-white chikankari inspired embroidery across the front daman and organza sleeve inserts.",
    price: 6990,
    images: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pearl White"],
    fabric: "Cambric",
    type: "2 Piece Stitched",
    badge: "LIMITED",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Kurta & Embroidered Pants",
    sku: "CF-MM26-104",
    details: ["Tone-on-tone embroidered daman", "Organza lace sleeve inserts", "Cotton lining attached in shirt"],
    careInstructions: ["Hand wash in cold water"]
  },
  {
    id: "cf-205",
    slug: "zafran-burnt-orange-set",
    name: "Zafran Burnt Orange Set",
    category: "solids",
    collection: "Monochrome Muse",
    description: "Warm burnt orange kurta set in soft textured slub cotton, detailed with geometric pin-tucks on the chest and neat straight pants.",
    price: 4990,
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Burnt Terracotta"],
    fabric: "Cambric",
    type: "2 Piece Stitched",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: false,
    pieces: "Kurta & Pants",
    sku: "CF-MM26-105",
    details: ["Pin-tuck bodice detailing", "Round neckline with slit", "Comfort-fit elastic trousers"],
    careInstructions: ["Wash separately inside out"]
  },

  // --- UNSTITCHED ---
  {
    id: "cf-301",
    slug: "meher-dobby-three-piece",
    name: "Meher Dobby Three Piece",
    category: "unstitched",
    collection: "Bespoke Weaves",
    description: "Premium unstitched 3-piece featuring self-textured dobby fabric with an embroidered resham organza neckline patti, embroidered sleeves patch, and embroidered chiffon dupatta.",
    price: 7490,
    images: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["Unstitched (3M Fabric)"],
    colors: ["Lilac Haze", "Sage Sage"],
    fabric: "Dobby",
    type: "3 Piece Unstitched",
    badge: "NEW",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Unstitched Fabric Lengths",
    sku: "CF-BW26-201",
    details: [
      "3.0 meters self-textured dobby cotton shirt",
      "2.5 meters dyed cambric trousers",
      "2.5 meters embroidered crinkle chiffon dupatta",
      "1 embroidered neckline patch on organza",
      "1 embroidered sleeve border (1 meter)"
    ],
    careInstructions: ["Professional dry clean recommended for embroidered pieces"]
  },
  {
    id: "cf-302",
    slug: "koh-e-noor-unstitched-lawn",
    name: "Koh-e-Noor Unstitched Lawn",
    category: "unstitched",
    collection: "Bespoke Weaves",
    description: "An unstitched masterpiece with heavy chickenkari embroidered front on luxury pima lawn, combined with digital printed pure silk dupatta and dyed trousers.",
    price: 8990,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["Unstitched (3M Fabric)"],
    colors: ["Buttercream Yellow", "Blush Rose"],
    fabric: "Lawn",
    type: "3 Piece Unstitched",
    badge: "BESTSELLER",
    inStock: true,
    featured: true,
    newArrival: false,
    bestSeller: true,
    pieces: "Unstitched Fabric Lengths",
    sku: "CF-BW26-202",
    details: [
      "1.25m embroidered lawn front",
      "1.25m printed lawn back & sleeves",
      "2.5m medium pure silk digital dupatta",
      "2.5m dyed cambric trousers with organza border"
    ],
    careInstructions: ["Dry clean only"]
  },
  {
    id: "cf-303",
    slug: "samarkand-unstitched-khaddar",
    name: "Samarkand Unstitched Khaddar",
    category: "unstitched",
    collection: "Heritage Weaves",
    description: "Rich winter unstitched khaddar with heritage Kashmiri embroidery motifs on the front neckline and hem, paired with a jacquard woven warm shawl.",
    price: 8490,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["Unstitched (3M Fabric)"],
    colors: ["Deep Forest Green"],
    fabric: "Khaddar",
    type: "3 Piece Unstitched",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: false,
    pieces: "Unstitched Fabric Lengths",
    sku: "CF-BW26-203",
    details: [
      "3.0m heavy textured khaddar shirt",
      "2.5m dyed khaddar trousers",
      "2.5m jacquard woven shawl with fringed edges"
    ],
    careInstructions: ["Dry clean only"]
  },
  {
    id: "cf-304",
    slug: "parisa-unstitched-georgette",
    name: "Parisa Unstitched Georgette",
    category: "unstitched",
    collection: "Bespoke Weaves",
    description: "Flowing midnight navy pure georgette with silver tilla threadwork embroidery along the front panel and a glistening foil printed dupatta.",
    price: 9990,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["Unstitched (3M Fabric)"],
    colors: ["Midnight Navy"],
    fabric: "Georgette",
    type: "3 Piece Unstitched",
    badge: "LIMITED",
    inStock: true,
    featured: false,
    newArrival: true,
    bestSeller: false,
    pieces: "Unstitched Fabric Lengths",
    sku: "CF-BW26-204",
    details: [
      "3.0m pure dyed georgette shirt with tilla embroidery",
      "2.5m dyed raw silk trousers",
      "2.5m foil printed georgette dupatta",
      "Dyed cotton silk slip included"
    ],
    careInstructions: ["Dry clean only"]
  },

  // --- EXCLUSIVE (Festive / Velvet / Silk Karandi) ---
  {
    id: "cf-401",
    slug: "aabroo-velvet-edit",
    name: "Aabroo Velvet Edit",
    category: "exclusive",
    collection: "Velvet Nocturne",
    description: "Luxurious deep royal plum micro-velvet ensemble hand-embellished with antique gold dabka, nakshi, and resham threadwork across the neckline and chaak borders. Styled with a regal tissue gold dupatta.",
    price: 16990,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Royal Plum", "Emerald Forest"],
    fabric: "Velvet",
    type: "3 Piece Stitched",
    badge: "LIMITED",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Velvet Shirt, Silk Pants & Tissue Dupatta",
    sku: "CF-VN26-301",
    details: [
      "Pure 9000 micro-velvet straight silhouette shirt",
      "Handcrafted dabka, kora, and zardozi embroidery",
      "Pure raw silk tapered pants with embroidered cuffs",
      "Zari tissue dupatta with scalloped borders"
    ],
    careInstructions: [
      "Strictly dry clean only",
      "Store in breathable garment bag",
      "Do not spray perfume directly on zari work"
    ]
  },
  {
    id: "cf-402",
    slug: "velvet-sharara-festive-suit",
    name: "Velvet Sharara Festive Suit",
    category: "exclusive",
    collection: "Velvet Nocturne",
    description: "Opulent regal black velvet short kurta paired with a voluminous crushed organza and silk sharara. Features dense antique tilla embroidery along the neckline and hemline.",
    price: 19990,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Midnight Onyx"],
    fabric: "Velvet",
    type: "3 Piece Stitched",
    badge: "LIMITED",
    inStock: true,
    featured: true,
    newArrival: false,
    bestSeller: true,
    pieces: "Velvet Kurti, Silk Sharara & Organza Dupatta",
    sku: "CF-VN26-302",
    details: [
      "Dense hand-embroidered velvet short kurti",
      "Double flare flared silk sharara with cancan netting",
      "Four-sided embroidered organza dupatta with kiran lace"
    ],
    careInstructions: ["Specialist dry clean only"]
  },
  {
    id: "cf-403",
    slug: "shahbano-silk-karandi-suit",
    name: "Shahbano Silk Karandi Suit",
    category: "exclusive",
    collection: "Festive Heirloom",
    description: "Rich amber gold pure silk karandi three-piece. Textured handspun weave with delicate Kashmiri aari embroidery across the daman and paired with an ornate woven silk shawl.",
    price: 12990,
    images: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Amber Gold", "Burgundy Wine"],
    fabric: "Silk Karandi",
    type: "3 Piece Stitched",
    badge: "BESTSELLER",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: true,
    pieces: "Shirt, Trousers & Woven Shawl",
    sku: "CF-FH26-303",
    details: [
      "Pure silk karandi with natural golden slub texture",
      "Intricate aari needlework motifs",
      "Matching dyed karandi trousers with pintucks",
      "Pure woven silk shawl with traditional pallu"
    ],
    careInstructions: ["Dry clean only"]
  },
  {
    id: "cf-404",
    slug: "maheen-raw-silk-formal",
    name: "Maheen Raw Silk Formal",
    category: "exclusive",
    collection: "Festive Heirloom",
    description: "An emerald green pure raw silk long peshwas with gold gotta patti and mirrorwork embroidery, finished with a heavy banarsi woven dupatta.",
    price: 18490,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Emerald Green"],
    fabric: "Silk",
    type: "3 Piece Stitched",
    badge: "LIMITED",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: false,
    pieces: "Peshwas, Churidar & Banarsi Dupatta",
    sku: "CF-FH26-304",
    details: ["Floor length Kalidar peshwas with 16 kalis", "Gotta patti lace finishing", "Pure banarsi zari dupatta"],
    careInstructions: ["Dry clean only"]
  },

  // --- ACCESSORIES (Dupattas, Khussas, Jewellery) ---
  {
    id: "cf-501",
    slug: "chandni-embroidered-chiffon-dupatta",
    name: "Chandni Embroidered Chiffon Dupatta",
    category: "accessories",
    collection: "Artisan Accents",
    description: "Featherlight pure chiffon dupatta framed with 4-sided antique gold sequin scalloped embroidery and delicate pearl tassels at the corners.",
    price: 4490,
    images: [
      "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["2.5 Meters"],
    colors: ["Antique Ivory", "Champagne Gold"],
    fabric: "Chiffon",
    type: "Dupatta",
    badge: "BESTSELLER",
    inStock: true,
    featured: true,
    newArrival: false,
    bestSeller: true,
    pieces: "Dupatta",
    sku: "CF-AA26-401",
    details: [
      "Length: 2.5 meters, Width: 1 meter",
      "Pure chiffon with light shimmer",
      "4-sided embroidered borders with kiran lace"
    ],
    careInstructions: ["Dry clean or steam iron lightly"]
  },
  {
    id: "cf-502",
    slug: "rung-handcrafted-punjabi-khussa",
    name: "Rung Handcrafted Punjabi Khussa",
    category: "accessories",
    collection: "Artisan Accents",
    description: "Authentic handmade leather khussas crafted in Lahore with genuine cowhide leather, embellished with dabka, salma, and multicolored resham embroidery.",
    price: 4990,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Multicolor Gold", "Ruby Red"],
    fabric: "Leather",
    type: "Footwear",
    badge: "NEW",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: true,
    pieces: "Pair of Footwear",
    sku: "CF-AA26-402",
    details: [
      "100% genuine soft leather sole and upper",
      "Padded insole for all-day comfort",
      "Hand-sewn tilla and dabka embroidery by master artisans"
    ],
    careInstructions: [
      "Clean gently with soft dry cloth",
      "Store in shoe pouch provided",
      "Avoid direct water exposure"
    ]
  },
  {
    id: "cf-503",
    slug: "zeenat-polki-kundan-jhumkas",
    name: "Zeenat Polki Kundan Jhumkas",
    category: "accessories",
    collection: "Artisan Accents",
    description: "Traditional 22k antique gold-plated brass jhumkas with authentic jadau polki kundan stones, green meenakari enameling on the back, and dangling seed pearls.",
    price: 5990,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["One Size"],
    colors: ["Antique Gold & Emerald"],
    fabric: "Brass & Kundan",
    type: "Jewellery",
    badge: "LIMITED",
    inStock: true,
    featured: false,
    newArrival: true,
    bestSeller: false,
    pieces: "Pair of Earrings",
    sku: "CF-AA26-403",
    details: [
      "22k micro gold plated brass base",
      "Semi-precious polki kundan stones and freshwater seed pearls",
      "Traditional meenakari enamel work on reverse",
      "Post-back push closure with comfortable silicone back"
    ],
    careInstructions: ["Keep away from moisture, hairspray, and perfume", "Store in airtight pouch"]
  },
  {
    id: "cf-504",
    slug: "shehnai-embroidered-velvet-clutch",
    name: "Shehnai Embroidered Velvet Clutch",
    category: "accessories",
    collection: "Artisan Accents",
    description: "Handcrafted box clutch wrapped in plush midnight black velvet, featuring ornate hand-worked zardozi peacock motifs and a detachable antique gold chain.",
    price: 6490,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["One Size (8x4 inches)"],
    colors: ["Midnight Black & Gold"],
    fabric: "Velvet",
    type: "Bags",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: true,
    pieces: "Clutch Bag",
    sku: "CF-AA26-404",
    details: [
      "Hard shell frame with secure metal clasp",
      "Plush velvet with antique dabka and stones",
      "Detachable 48-inch metallic crossbody chain"
    ],
    careInstructions: ["Wipe clean with dry lint-free cloth"]
  },
  {
    id: "cf-505",
    slug: "motia-silk-organza-shawl",
    name: "Motia Silk Organza Shawl",
    category: "accessories",
    collection: "Artisan Accents",
    description: "Crisp yet ethereal ivory silk organza shawl detailed with white floral threadwork embroidery and scalloped laser-cut borders.",
    price: 5290,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["2.5 Meters"],
    colors: ["Ivory White"],
    fabric: "Organza",
    type: "Shawl",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: false,
    pieces: "Shawl",
    sku: "CF-AA26-405",
    details: ["Pure silk organza fabric", "Delicate white resham floral vines", "Scalloped laser cut edging"],
    careInstructions: ["Dry clean only"]
  },

  // --- SALE ---
  {
    id: "cf-601",
    slug: "anaya-embroidered-cambric-suit",
    name: "Anaya Embroidered Cambric Suit",
    category: "sale",
    collection: "Past Season Favorites",
    description: "Warm mustard yellow cambric two-piece with geometric neckline embroidery and comfortable pleated trousers. High quality everyday pret at a special seasonal price.",
    price: 4490,
    salePrice: 3590,
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Mustard Yellow"],
    fabric: "Cambric",
    type: "2 Piece Stitched",
    badge: "SALE",
    inStock: true,
    featured: true,
    newArrival: false,
    bestSeller: true,
    pieces: "Shirt & Trousers",
    sku: "CF-PF25-501",
    details: ["Embroidered collar and front placket", "Dyed straight trousers", "Breathable 100% cambric cotton"],
    careInstructions: ["Machine wash cold"]
  },
  {
    id: "cf-602",
    slug: "dilruba-printed-dobby-suit",
    name: "Dilruba Printed Dobby Suit",
    category: "sale",
    collection: "Past Season Favorites",
    description: "Rose pink self-dobby printed three piece with organza embroidered sleeves and a lightweight chiffon dupatta.",
    price: 6490,
    salePrice: 4990,
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dusty Rose"],
    fabric: "Dobby",
    type: "3 Piece Stitched",
    badge: "SALE",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: true,
    pieces: "Shirt, Pants & Dupatta",
    sku: "CF-PF25-502",
    details: ["Textured dobby cotton fabric", "Digital print chiffon dupatta", "Lace trim on sleeves"],
    careInstructions: ["Gentle hand wash cold"]
  },
  {
    id: "cf-603",
    slug: "mehrunisa-khaddar-kurta",
    name: "Mehrunisa Khaddar Kurta",
    category: "sale",
    collection: "Past Season Favorites",
    description: "Rich plum purple printed winter khaddar single kurta with contrasting teal patti trim along collar and cuffs.",
    price: 3890,
    salePrice: 2990,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Plum & Teal"],
    fabric: "Khaddar",
    type: "1 Piece Stitched",
    badge: "SALE",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: false,
    pieces: "Kurta Only",
    sku: "CF-PF25-503",
    details: ["Winter weight pure khaddar", "Contrasting sleeve trim", "Side slit pockets"],
    careInstructions: ["Machine wash cold"]
  },
  {
    id: "cf-604",
    slug: "zohra-organza-dupatta-sale",
    name: "Zohra Organza Dupatta",
    category: "sale",
    collection: "Past Season Favorites",
    description: "Gold tissue organza dupatta with antique kiran lace finishing. Elegant companion to any solid kurta or formal suit.",
    price: 3490,
    salePrice: 2490,
    images: [
      "https://images.unsplash.com/photo-1611591477858-a7849993c869?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["2.5 Meters"],
    colors: ["Gold Sheen"],
    fabric: "Organza",
    type: "Dupatta",
    badge: "SALE",
    inStock: true,
    featured: false,
    newArrival: false,
    bestSeller: false,
    pieces: "Dupatta",
    sku: "CF-PF25-504",
    details: ["Glistening gold tissue weave", "Full 2.5 meter length", "Kiran lace attached"],
    careInstructions: ["Dry clean only"]
  },

  // --- ADDITIONAL NEW ARRIVALS & SPECIAL EDITIONS ---
  {
    id: "cf-701",
    slug: "amber-embroidered-jacquard-set",
    name: "Amber Embroidered Jacquard Set",
    category: "printed",
    collection: "Summer Symphony",
    description: "Subtle metallic jacquard weave in soft caramel, enriched with thread embroidery across the neckline and an organza dupatta with gold zari lines.",
    price: 8490,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Caramel Honey"],
    fabric: "Jacquard",
    type: "3 Piece Stitched",
    badge: "NEW",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Shirt, Pants & Organza Dupatta",
    sku: "CF-SS26-701",
    details: ["Self-textured woven jacquard", "Intricate neck embroidery with pearls", "Dyed cambric trousers with organza border"],
    careInstructions: ["Dry clean recommended"]
  },
  {
    id: "cf-702",
    slug: "yasmeen-solids-olive-tunic",
    name: "Yasmeen Solids Olive Tunic",
    category: "solids",
    collection: "Monochrome Muse",
    description: "Minimalist olive green tunic shirt with asymmetrical overlapping neckline and flared cuffs. Contemporary Pakistani workwear at its finest.",
    price: 4990,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Olive Moss"],
    fabric: "Cambric",
    type: "1 Piece Stitched",
    inStock: true,
    featured: false,
    newArrival: true,
    bestSeller: false,
    pieces: "Tunic Kurta",
    sku: "CF-MM26-702",
    details: ["Asymmetric crossover neckline", "Tortoiseshell buttons", "Curved side hemline"],
    careInstructions: ["Machine wash gentle"]
  },
  {
    id: "cf-703",
    slug: "surayya-festive-silk-suit",
    name: "Surayya Festive Silk Suit",
    category: "exclusive",
    collection: "Festive Heirloom",
    description: "Crimson ruby silk kurta with ornate hand-worked gotapatti embellishments across the front daman, styled with silk culottes and a sheer organza dupatta.",
    price: 15490,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Crimson Ruby"],
    fabric: "Silk",
    type: "3 Piece Stitched",
    badge: "LIMITED",
    inStock: true,
    featured: true,
    newArrival: true,
    bestSeller: false,
    pieces: "Shirt, Culottes & Dupatta",
    sku: "CF-FH26-703",
    details: ["Pure medium silk shirt with lining", "Hand-stitched gotapatti embroidery", "Organza dupatta with sequin spray"],
    careInstructions: ["Specialist dry clean only"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "new-in") {
    return PRODUCTS.filter((p) => p.newArrival);
  }
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.newArrival);
}

export function getBestSellers(): Product[] {
  return PRODUCTS.filter((p) => p.bestSeller);
}

export function getRelatedProducts(currentProductId: string, category: string, limit = 4): Product[] {
  return PRODUCTS
    .filter((p) => p.id !== currentProductId && p.category === category)
    .slice(0, limit);
}
