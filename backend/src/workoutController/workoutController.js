import {getObras} from '../workoutServices/workoutService.js'

const login = (req, res)=>{
    res.json('ingresando a la plataforma')
}

const obras = (req,res)=>{
    getObras(req,res)
}

export { login, obras }