import Express from "express"
import morgan from "morgan"
import cors from "cors"
import soyTaRouter from "./routes/soyTaRouter"

const server = Express()

server.use(morgan("dev"))

server.use(cors())

server.use(soyTaRouter)

export default server





