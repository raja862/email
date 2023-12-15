import express from "express"
import {loginUsers,signIn }from "../controller/loginsingup.js"


const routeruser= express.Router()

routeruser.post('/user', loginUsers )
routeruser.post('/login', signIn)

export default routeruser