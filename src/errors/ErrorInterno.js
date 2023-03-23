export class ErrorIdNoEncontrado extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.tipo = 'ERROR_INTERNO'
    }
}
