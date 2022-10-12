import {pool} from '../database/workout.js';

const login = (req, res)=>{
    return
}
const getObras = async(req,res) =>{
    try {
        const listadoObras = await pool.query('select * from artistas');
        res.status(201).json(listadoObras.rows[0]);
    } catch (error) {
        console.log(error);
    }
   
   
}
export {login, getObras} 