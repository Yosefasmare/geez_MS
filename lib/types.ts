export interface PropertyImage {
  id: string;
  secureUrl: string;
  altText?: string | null;
  isCover: boolean;
}

export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string; // Prisma Decimals typically map to strings in TypeScript
  currency: string;
  location: string;
  propertyType: "HOUSE" | "APARTMENT" | "VILLA" | "LAND" | "COMMERCIAL" | "OTHER";
  listingType: "SALE" | "RENT";
  status: "AVAILABLE" | "SOLD" | "RENTED" | "RESERVED" | "DRAFT";
  bedrooms?: number | null;
  bathrooms?: number | null;
  area?: string | null;
  floors?: number | null;
  yearBuilt?: number | null;
  featured: boolean;
  images?: PropertyImage[];
}

export interface DetailedProperty {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  currency: string;
  location: string;
  propertyType: "HOUSE" | "APARTMENT" | "VILLA" | "LAND" | "COMMERCIAL" | "OTHER";
  listingType: "SALE" | "RENT";
  status: "AVAILABLE" | "SOLD" | "RENTED" | "RESERVED" | "DRAFT";
  bedrooms?: number | null;
  bathrooms?: number | null;
  area?: string | null;
  floors?: number | null;
  yearBuilt?: number | null;
  featured: boolean;
  createdAt?: Date | string;
  updatedAt?: string;
  images?: {
    id?: string;
    secureUrl: string;
    altText?: string | null;
    isCover?: boolean;
    createdAt?: string
  }[];
}

export interface InquiryDataType {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message?: string;
  type: 'GENERAL' | 'PROPERTY'
  propertyId?: string;
}