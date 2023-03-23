import { ventasService } from '../services/ventas.service.js'
import { DatosNuevaVenta } from '../validators/DatosNuevaVenta.js'

export async function postVentas(req, res, next) {
    try {
        const datosNuevaVentas = new DatosNuevaVenta(req.body)
        const venta = await ventasService.vender(datosNuevaVentas)
        res.status(201).json(venta)
    } catch (error) {
        next(error)
    }
}