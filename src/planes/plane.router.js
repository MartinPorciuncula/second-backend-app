import { Router } from "express";

import {
    findAllPlanes,
    createPlane,
    findOnePlane,
    updatePlane,
    deletePlane,
  } from './plane.controller.js'


export const router = Router()

router.route("/")
.get(findAllPlanes)
  .post(createPlane)

  router.route("/:id")
.get(findOnePlane)
.patch(updatePlane)
.delete(deletePlane)



