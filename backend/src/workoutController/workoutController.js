import {insertarFavoritos, registrarUsuarios, loginUsuarios} from '../workoutServices/workoutService.js'
import { validatorHandler } from '../middleware/validatorHandler.js'
import { parametrosRegistro, parametrosLogin } from '../schemas/registroUsuarios.Schema.js'

const login = (validatorHandler(parametrosLogin, 'body'), (req, res)=>{
    const body = req.body;
    loginUsuarios(body, res);

})

const obras = (req,res)=>{
    insertarFavoritos(req,res)
}

const registro = (validatorHandler(parametrosRegistro, 'body'),(req,res)=>{
    const body = req.body;
    registrarUsuarios(body, res)
})

export { login, obras, registro }