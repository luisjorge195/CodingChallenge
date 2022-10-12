
import express from 'express'
import dotenv from 'dotenv'
import prueba from './src/workoutRoutes/workoutRoutes.js'

dotenv.config();
//TODO: pendiente ingresar cors
const app = express();

app.use(express.json());
app.use('/api/prueba', prueba)
app.listen(process.env.PORT, ()=>{
   return;
})