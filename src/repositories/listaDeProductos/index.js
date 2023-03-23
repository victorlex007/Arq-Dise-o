import { MODO_PERSISTENCIA } from '../../config/persistencia.js'
import { ListaDeProductos } from './ListaDeProductos.js'

let listaDeProductos

switch (MODO_PERSISTENCIA) {
    case 'file':
        const { DaoArchivo } = await import('../../daos/DaoFile.js')
        const dao = new DaoArchivo('./localStorage/productos.json')
        listaDeProductos = new ListaDeProductos(dao)
        break
    default:
        const { mongoClient } = await import('../../database/mongoClient.js')
        const { DaoMongoDb } = await import('../../daos/DaoMongoDb.js')
        const colecionDeProductos = mongoClient.db().collection('products')
        const daoMongoDb = new DaoMongoDb(colecionDeProductos)
        listaDeProductos = new ListaDeProductos(daoMongoDb)
}


export { listaDeProductos } 
