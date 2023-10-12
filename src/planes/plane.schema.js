import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

export const planeSchema = z.object({
    number: z.number().min(3).max(60),
    model: z.string().min(3).max(60),
    capacity: z.string().min(3).max(60),
    airline: z.enum("flybondi", "jetSMART Airlines", "LATAM airlines", "GOL transportes aereos")
})

export const validatePlane = (data) => {
    const result = planeSchema.safeParse(data)
  
    const { 
      hasError, 
      errorMessages, 
      data: cityPlane
    } =  extractValidationData(result)
  
    return {
      hasError,
      errorMessages,
      cityPlane
    }
  }
  
  export const validatePartialPlane = (data) => {
    const result = planeSchema.partial().safeParse(data)
  
    const {
      hasError,
      errorMessages,
      data: cityPlane,
    } = extractValidationData(result);
  
    return {
      hasError,
      errorMessages,
      cityPlane,
    }
  
  }