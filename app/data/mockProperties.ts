export interface Property {
  id: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  propertyType: "Apartment" | "House" | "Villa" | "Land" | "Commercial";
  listingType: "For Sale" | "For Rent";
  status: "AVAILABLE" | "FOR RENT" | "FOR SALE" | "SOLD";
  bedrooms: number | string;
  bathrooms: number | string;
  area: string;
  image: string;
  featured?: boolean;
}

export interface DetailedProperty {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  formattedPrice: string;
  location: string;
  neighborhood: string;
  city: string;
  propertyType: "Apartment" | "House" | "Villa" | "Land" | "Commercial";
  listingType: "For Sale" | "For Rent";
  status: "Available" | "For Sale" | "For Rent" | "Sold";
  bedrooms: number;
  bathrooms: number;
  area: string;
  areaNum: number;
  floors: number;
  yearBuilt: number;
  featured: boolean;
  images: string[];
  amenities: string[];
  propertyId: string;
  nearbyPoints: { label: string; time: string }[];
  contactInfo: {
    phone1: string;
    phone2: string;
    email: string;
    officeLocation: string;
  };
}

export const mockDetailedProperty: DetailedProperty = {
  id: "1",
  slug: "entoto-ridge-villa",
  title: "Entoto Ridge Villa",
  description: `Designed for modern family living, this residence combines generous interior spaces with carefully considered architectural details. Nestled along the lush green contours of Entoto, the home offers sweeping elevated views across Addis Ababa while maintaining complete privacy and peaceful seclusion.

The layout seamlessly connects light-filled double-height living areas with private garden terraces, featuring custom woodwork, expansive double-glazed floor-to-ceiling windows, and high-efficiency modern insulation. The master wing features a private panoramic balcony, walk-in dressing suite, and an en-suite bathroom finished in natural stone.

Outdoors, meticulously landscaped gardens provide a serene setting for quiet retreat or entertaining guests. Complete with state-of-the-art security systems, dedicated staff quarters, high-capacity water reserve tanks, and automated generator backup, this property offers a seamless and dependable modern lifestyle in one of the city's most desirable micro-climates.`,
  price: 2200000,
  currency: "ETB",
  formattedPrice: "ETB 2,200,000",
  location: "Entoto, Addis Ababa",
  neighborhood: "Entoto Ridge",
  city: "Addis Ababa",
  propertyType: "Villa",
  listingType: "For Sale",
  status: "Available",
  bedrooms: 4,
  bathrooms: 5,
  area: "620 m²",
  areaNum: 620,
  floors: 2,
  yearBuilt: 2025,
  featured: true,
  propertyId: "PROP-001",
  images: [
    "/prop-villa.png",
    "/hero-property.png",
    "/about-realestate.png",
    "/prop-penthouse.png",
    "/prop-kazanchis.png",
    "/prop-commercial.png",
    "/prop-villa.png",
    "/hero-property.png",
  ],
  amenities: [
    "Private Garden",
    "Swimming Pool",
    "Covered Parking",
    "Modern Kitchen",
    "Master Suite",
    "Large Windows",
    "24/7 Security",
    "Water Storage",
    "Backup Power",
    "Panoramic Balcony",
    "Staff Quarters",
    "High-Speed Fiber Ready",
  ],
  nearbyPoints: [
    { label: "Main Road Access", time: "10 min" },
    { label: "Shopping & Dining", time: "15 min" },
    { label: "Bole International Airport", time: "20 min" },
    { label: "International Schools", time: "12 min" },
  ],
  contactInfo: {
    phone1: "+251 941 912 041",
    phone2: "+251 929 018 171",
    email: "yeabsirakebede720@gmail.com",
    officeLocation: "Bole, Selam City Mall - 4th Floor, Addis Ababa",
  },
};

export function getDetailedPropertyBySlug(slug: string): DetailedProperty {
  return {
    ...mockDetailedProperty,
    slug: slug || mockDetailedProperty.slug,
  };
}

export const mockProperties: Property[] = [
  {
    id: "prop-1",
    title: "The Royal Bole Penthouse",
    slug: "royal-bole-penthouse",
    location: "Bole Atlas, Addis Ababa",
    price: "ETB 38,500,000",
    propertyType: "Apartment",
    listingType: "For Sale",
    status: "FOR SALE",
    bedrooms: 3,
    bathrooms: 3.5,
    area: "260 m²",
    image: "/prop-penthouse.png",
    featured: true,
  },
  {
    id: "prop-2",
    title: "Entoto Ridge Villa",
    slug: "entoto-ridge-villa",
    location: "Entoto, Addis Ababa",
    price: "ETB 2,200,000",
    propertyType: "Villa",
    listingType: "For Sale",
    status: "AVAILABLE",
    bedrooms: 4,
    bathrooms: 5,
    area: "620 m²",
    image: "/prop-villa.png",
    featured: true,
  },
  {
    id: "prop-3",
    title: "Kazanchis Horizon Luxury Suite",
    slug: "kazanchis-horizon-suite",
    location: "Kazanchis Financial District, Addis Ababa",
    price: "ETB 180,000 / mo",
    propertyType: "Apartment",
    listingType: "For Rent",
    status: "FOR RENT",
    bedrooms: 2,
    bathrooms: 2,
    area: "145 m²",
    image: "/prop-kazanchis.png",
    featured: false,
  },
  {
    id: "prop-4",
    title: "Old Airport Diplomatic Villa",
    slug: "old-airport-diplomatic-villa",
    location: "Old Airport, Addis Ababa",
    price: "ETB 68,000,000",
    propertyType: "Villa",
    listingType: "For Sale",
    status: "AVAILABLE",
    bedrooms: 6,
    bathrooms: 5.5,
    area: "580 m²",
    image: "/hero-property.png",
    featured: true,
  },
  {
    id: "prop-5",
    title: "Selam City Mall Retail Unit",
    slug: "selam-city-mall-retail-unit",
    location: "Bole, Selam City Mall 4th Floor",
    price: "ETB 24,000,000",
    propertyType: "Commercial",
    listingType: "For Sale",
    status: "FOR SALE",
    bedrooms: "N/A",
    bathrooms: 2,
    area: "120 m²",
    image: "/prop-commercial.png",
    featured: false,
  },
  {
    id: "prop-6",
    title: "Summit Parkview Family Residence",
    slug: "summit-parkview-residence",
    location: "Summit, Addis Ababa",
    price: "ETB 28,500,000",
    propertyType: "House",
    listingType: "For Sale",
    status: "AVAILABLE",
    bedrooms: 4,
    bathrooms: 3,
    area: "320 m²",
    image: "/about-realestate.png",
    featured: false,
  },
  {
    id: "prop-7",
    title: "Sar Bet Contemporary Residence",
    slug: "sar-bet-contemporary-residence",
    location: "Sar Bet, Addis Ababa",
    price: "ETB 22,000,000",
    propertyType: "House",
    listingType: "For Sale",
    status: "SOLD",
    bedrooms: 4,
    bathrooms: 3,
    area: "290 m²",
    image: "/prop-villa.png",
    featured: false,
  },
  {
    id: "prop-8",
    title: "Ayat Garden View Apartment",
    slug: "ayat-garden-view-apartment",
    location: "Ayat Zone 3, Addis Ababa",
    price: "ETB 95,000 / mo",
    propertyType: "Apartment",
    listingType: "For Rent",
    status: "FOR RENT",
    bedrooms: 3,
    bathrooms: 2,
    area: "160 m²",
    image: "/prop-kazanchis.png",
    featured: false,
  },
  {
    id: "prop-9",
    title: "Lideta Commercial Office Floor",
    slug: "lideta-commercial-office-floor",
    location: "Lideta Commercial Corridor, Addis Ababa",
    price: "ETB 34,000,000",
    propertyType: "Commercial",
    listingType: "For Sale",
    status: "AVAILABLE",
    bedrooms: "N/A",
    bathrooms: 4,
    area: "250 m²",
    image: "/prop-commercial.png",
    featured: false,
  },
];

