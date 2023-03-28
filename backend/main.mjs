import express from "express"
import controller_handle_sign_in from "./controllers/controller_handle_sign_in.mjs"
import controller_handle_sing_up from "./controllers/controller_handle_sing_up.mjs"
import cookieParser from "cookie-parser"
import conttroller_handle_send_message from "./controllers/conttroller_handle_send_message.mjs"
import conttroller_handle_get_message from "./controllers/conttroller_handle_get_message.mjs"
import controller_handle_sign_out from "./controllers/controller_handle_sign_out.mjs"

//

const express_1 = express()

//middleware

express_1.use(express.static("../frontend/public"))
express_1.use(express.json())
express_1.use(cookieParser())

//endpoints

express_1.post("/api/sign_up", controller_handle_sing_up)
express_1.post("/api/sign_in", controller_handle_sign_in)
express_1.get("/api/sign_out", controller_handle_sign_out)
express_1.post("/api/send_message", conttroller_handle_send_message)
express_1.get("/api/get_message", conttroller_handle_get_message)

//

express_1.listen(80)

