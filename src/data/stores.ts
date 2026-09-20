import { Store } from "@/types/blog";

export const STORES: Store[] = [
  {
    id: "lahore-flagship",
    name: "Cultural Fusion — Lahore Flagship",
    address: "80 Sabzi Mandi, Near Al-Asar Lab, Kamran Block, Iqbal Town, Wahdat Road",
    area: "Allama Iqbal Town / Wahdat Road",
    city: "Lahore",
    country: "Pakistan",
    phone: "+92 312 4644046",
    secondaryPhone: "+92 300 1834046",
    email: "contact@culturalfusion.pk",
    hours: "Mon – Sat: 11:00 AM – 10:00 PM | Sun: 2:00 PM – 10:00 PM",
    mapCoordinates: {
      lat: 31.5126,
      lng: 74.2952,
    },
    features: [
      "In-Store Pret & Unstitched Browsing",
      "Made-to-Measure Consultation",
      "Trial Rooms & Styling Assistance",
      "Dedicated Cash on Delivery & Card Terminals (Visa/Mastercard/PayPak)",
      "Curbside Order Pickup Available"
    ]
  }
];

export const BRAND_CONTACT_INFO = {
  mainPhone: "+92 312 4644046",
  alternatePhone: "+92 300 1834046",
  internationalPhone: "+92 325 7864046",
  email: "contact@culturalfusion.pk",
  address: "80 Sabzi Mandi, Iqbal Town, Wahdat Road, Near Al-Asar Lab, Kamran Block, Lahore, Pakistan",
  shippingPolicy: "Free nationwide shipping on orders above Rs. 4,000",
  deliveryTimelines: {
    lahore: "Within 1 working day",
    nationwide: "2 to 4 working days"
  },
  returnPolicy: "10-day return & exchange policy",
  supportHours: "24/7 Online Customer Care"
};
