import { MODO_PERSISTENCIA } from '../../config/persistencia.js'
import { RegistroDeVentas } from './RegistroDeVentas.js';

let registroDeVentas

switch (MODO_PERSISTENCIA) {
    case 'file':
        const { DaoArchivo } = await import('../../daos/DaoFile.js')
        const dao = new DaoArchivo('./localStorage/ventas.json')
        registroDeVentas = new RegistroDeVentas(dao)
        break
    default:
        const { mongoClient } = await import('../../database/mongoClient.js')
        const { DaoMongoDb } = await import('../../daos/DaoMongoDb.js')
        const colecionDeVentas = mongoClient.db().collection('ventas')
        const daoMongoDb = new DaoMongoDb(colecionDeVentas)
        registroDeVentas = new RegistroDeVentas(daoMongoDb)
}

export { registroDeVentas } 