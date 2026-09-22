"use server"

import { db } from "@/prisma/db"
import { DetailedProperty, Property } from "../types";

export const getProperties = async (isHome: boolean = false, options?: {page: number,location: string,propertyType: string,listingType:string,minPrice?:number,maxPrice?:number} ) => {
    try {


        let propertyData;
        let propertyCount;

      const currentPage = options?.page || 1


        if(isHome){
            propertyData = await db.orm.public.Property.where({
                status: "AVAILABLE",
                featured: true
                
            })
             .select('id', 'title', 'area', 'bathrooms', 'bedrooms', 'currency', 'location', 'status', 'slug', 'propertyType', 'price','listingType')
             .orderBy(p=> p.createdAt.desc())
            .include("images",(images) => images.where({isCover: true}))
            .limit(3)
            .all()

        } else {


          const result = await db.orm.public.Property
          .where({ status: "AVAILABLE" })
          .aggregate((a) => ({ total: a.count() }));
        
         propertyCount = result.total;

            const skipCount = (currentPage -1 || 0) * 12 //page limt
 
            let query = db.orm.public.Property
               .where({ status: "AVAILABLE",} )
               .select('id', 'title', 'area', 'bathrooms', 'bedrooms', 'currency', 'location', 'status', 'slug', 'propertyType', 'price','listingType')
               .orderBy(p=> p.createdAt.desc())
               .include('images', (images) => images.where({ isCover: true }))
               .limit(12)
               .offset(skipCount)


               if (options?.location && options.location.trim() !== "") {
                  query = query.where((p) => p.location.eq(options.location!));
                }
                if (options?.listingType && options.listingType.trim() !== "") {
                  query = query.where((p) => p.listingType.eq(options.listingType.toLocaleUpperCase()! as 'SALE' | 'RENT'));
                }
                if (options?.propertyType && options.propertyType.trim() !== "") {
                  query = query.where((p) => p.propertyType.eq(options.propertyType.toLocaleUpperCase()! as "HOUSE" | "APARTMENT" | "VILLA" | "LAND" | "COMMERCIAL" | "OTHER"));
                }

               if (options?.minPrice !== undefined) {
                 query = query.where((p) => p.price.gte(String(options.minPrice!)));
               }
                 if (options?.maxPrice !== undefined) {
                 query = query.where((p) => p.price.lte(String(options.maxPrice!)));
               }

               propertyData = await query.all()

        }

        

        return {
            data: propertyData as unknown as Property[],
            propertyCount: propertyCount as unknown   as number,
            error: ""
        }


        
    } catch (error) {
        console.log(error)
        return {
            data: [],
            error: "unexpected error occered"
        }
    }
}


export const getPropertyDetail = async (slug:string) => {

    try {

        const data = await db.orm.public.Property.where({slug: slug}).include("images").first()
        return {
            data: data as unknown as DetailedProperty,
            error: null
        }

        
    } catch (error) {
        console.log(error)
        return {
            data: null,
            error: "Unexpected error occerd: server"
        }
    }
}