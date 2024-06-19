import axios from "axios"
import { apiUrl } from "../configs/envs"



export const soyTaService = async() => {
    const response = await axios.get(`${apiUrl}`)
    return response
}