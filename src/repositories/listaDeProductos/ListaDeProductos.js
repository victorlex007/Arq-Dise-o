import { ErrorIdNoEncontrado } from '../../errors/ErrorIdNoEncontrado.js'
import { Producto } from '../../models/Producto.js'

export class ListaDeProductos {
    #dao

    constructor(dao) {
        this.#dao = dao
    }

    async buscarPorId(id) {
        const dto = await this.#dao.buscarPorId(id)
        if (!dto) throw new ErrorIdNoEncontrado(id)
        return new Producto(dto)
    }

    async guardar(prod) {
        try {
            const dto = await this.#dao.buscarPorId(prod.id)
            await this.#dao.actualizar(prod.id, prod.datos())
        } catch {
            await this.#dao.guardar(prod.datos())
        }
    }
}
