import * as pg from 'pg'
const { Pool } = pg.default
import dotenv from 'dotenv';
dotenv.config();
import {config} from '../../enviroments.js'

const configuracion = {
    hostname: process.env.HOST,
    database: 'CodingChallenge',
    user:'postgres',
    password: '123456789',
    port: 5432 
}
// const URI = `postgres://${'postgres'}:${'123456789'}@${process.env.HOST}:${5432}/${'config.dbName'}`;
const pool = new Pool(configuracion)  
export {pool} 