import { MongoClient } from 'mongodb';
import { MONGODB_CNX_STR } from '../config/mongodb.js';

const mongoClient = new MongoClient(MONGODB_CNX_STR)

await mongoClient.connect()

export { mongoClient }