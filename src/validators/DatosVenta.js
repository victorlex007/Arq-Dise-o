import { ErrorArgumentosInvalidos } from '../errors/ErrorArgumentosInvalidos.js'

export class DatosNuevaVenta {
    constructor({ id, cantidad }) {
        this.id = Math.floor(Number(id))
        if (isNaN(this.id))
            throw new ErrorArgumentosInvalidos('id debe ser un numero entero')
        this.cantidad = Math.floor(Number(cantidad))
        if (isNaN(this.cantidad))
            throw new ErrorArgumentosInvalidos('cantidad debe ser un numero entero')
    }
}
