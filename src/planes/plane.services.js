import Plane from "./plane.model.js";

export class PlaneService{
    async findAllPlanes(){
        return await Plane.findAll()
    }
    async createPlane(data){
        return await Plane.create(data)
    } 
    async findOnePlane(id){
        return await Plane.findOne({
            where : {
                id,
                status:true
            }
        })
    }
    async updatePlane(data){
        return await Plane.update(data)
    }
    async deletePlane(data){
        return await Plane.update({status: false})
    }
}