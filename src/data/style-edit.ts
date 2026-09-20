export type StyleLook = {
  id: string;
  title: string;
  subtitle: string;
  featuredPersonality?: string;
  image: string;
  lookDescription: string;
  keyPieces: string[];
  stylingTips: string;
};

export const STYLE_EDITS: StyleLook[] = [
  {
    id: "look-1",
    title: "Ivory Minimalist Grace",
    subtitle: "Understated elegance styled with raw silk and antique kundan",
    featuredPersonality: "Kinza Hashmi",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    lookDescription: "A vision in serene monochrome. Clean-cut ivory silk paired with delicate tone-on-tone embroidery, reflecting effortless daytime sophistication.",
    keyPieces: ["Zara Ivory Silk Kurta", "Zeenat Polki Kundan Jhumkas"],
    stylingTips: "Keep makeup dewy with nude lips. Sweep hair into a soft low bun to accentuate the handcrafted band collar."
  },
  {
    id: "look-2",
    title: "The Regal Velvet Statement",
    subtitle: "Deep plum micro-velvet designed for ceremonial evenings",
    featuredPersonality: "Sara Khan",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
    lookDescription: "Embodying modern aristocracy with plush velvet, intricate gold dabka embellishment, and glistening tissue dupatta drapery.",
    keyPieces: ["Aabroo Velvet Edit", "Shehnai Embroidered Velvet Clutch"],
    stylingTips: "Accentuate the deep jewel tones with a classic berry lip and antique gold heirloom jewelry."
  },
  {
    id: "look-3",
    title: "Lawn in Full Bloom",
    subtitle: "Heritage botanical prints celebrating seasonal vibrance",
    featuredPersonality: "Sidra Niazi",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    lookDescription: "Mughal garden inspired motifs on airy lawn, balanced with tailored cigarette trousers and a flowing digital printed chiffon dupatta.",
    keyPieces: ["Noor Printed Lawn Set", "Rung Handcrafted Punjabi Khussa"],
    stylingTips: "Pair with natural waves and handcrafted leather khussas for high-comfort social lunches."
  },
  {
    id: "look-4",
    title: "The Festive Sharara Drama",
    subtitle: "Architectural flare meets traditional hand-embroidery",
    featuredPersonality: "Zainab Shabbir",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    lookDescription: "A dramatic black velvet kurti paired with voluminous crushed silk sharara, delivering an arresting silhouette for wedding celebrations.",
    keyPieces: ["Velvet Sharara Festive Suit", "Chandni Embroidered Chiffon Dupatta"],
    stylingTips: "Drape the dupatta over one arm and let the flared sharara hemline command the room's attention."
  }
];
