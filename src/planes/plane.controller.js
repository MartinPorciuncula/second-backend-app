import { AppError, catchAsync } from '../errors/index.js'
import { PlaneService } from './plane.services.js'
import { validatePlane, validatePartialPlane } from "./plane.schema.js";

const planeService = new PlaneService();

export const findAllPlanes = catchAsync(async (req,res,next) => {
     const planes = await planeService.findAllPlanes()
     return res.json(200).json(planes)
})
export const createPlane = catchAsync(async (req,res,next) => {
 const {plane} = req;
 return res.status(200).json(plane)
})
export const findOnePlane = catchAsync(async (req,res,next) => {

    const { hasError, errorMessages, cityPlane } = validatePlane(req.body)

    if(hasError){
        return res.status(422).json({
            status:"error",
            message:errorMessages,
        })
    }

    const plane = await planeService.createPlane(planeData)

})
export const updatePlane = catchAsync(async (req,res,next) => {
 const {plane} = req;
 const { hasError, errorMessages, cityPlane } = validatePartialPlane(req.body)
  if(hasError){
    return res.status(422).json({
        status:"error",
        message:errorMessages,
    })
  }
  const planeUpdated = await planeService.updatePlane(plane, dataPlane)
  return res.status(200).json(planeUpdated)
})
export const deletePlane = catchAsync(async (req,res,next) => {
    const { plane } = req;
    await planeService.deletePlane(plane)
    return res.status(204).json(null)
})