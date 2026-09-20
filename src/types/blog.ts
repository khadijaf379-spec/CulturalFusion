export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  date: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
};

export type Store = {
  id: string;
  name: string;
  address: string;
  area: string;
  city: string;
  country: string;
  phone: string;
  secondaryPhone?: string;
  email: string;
  hours: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
};
