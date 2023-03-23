import { ErrorIdNoEncontrado } from '../errors/ErrorIdNoEncontrado.js'

export class DaoMemoria {
    #cosas
    constructor() {
        this.#cosas = []
    }

    guardar(dto) {
        this.#cosas.push(dto)
    }

    buscarPorId(id) {
        const dto = this.#cosas.find(c => c.id === id)
        if (!dto) throw new ErrorIdNoEncontrado(id)
    }
}