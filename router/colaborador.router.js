import express from "express";
const router = express.Router()
import colaboradorController from "../controller/colaborador.controller.js";



router.post('/colaborador', colaboradorController.createColaborador)



export default router