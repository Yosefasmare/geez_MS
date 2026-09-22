"use server"

import { db } from "@/prisma/db"
import { InquiryDataType } from "../types"

export const sendInquiry = async (inquiryData: InquiryDataType) => {
    try {

       await db.orm.public.Inquiry.create(inquiryData)

       return{
        success: true,
        error: ""
       }
        
    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: "Unexpected error occuerd"
        }
    }
}