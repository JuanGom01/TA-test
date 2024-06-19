import e, { Router } from "express";
import { soyTaController } from "../controllers/soyTaController";


const soyTaRouter: Router = Router()

soyTaRouter.get("/soyTA", soyTaController)


export default soyTaRouter