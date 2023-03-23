import { Router } from 'express'
import { postVentas } from '../controllers/ventas.controller.js'

export const ventasRouter = Router()
ventasRouter.post('/', postVentas)
