import {Request, Response} from "express"
import { soyTaService } from "../service/soyTaService"

export const soyTaController = async(req: Request, res: Response)=>{
    try{
        const respuesta = await soyTaService()
        res.status(200).json(respuesta.data)
    }
    catch(err) {
        res.status(500).json(err)
    }
}