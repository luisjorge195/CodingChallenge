import express from 'express'
const router = express.Router()
import { login, obras } from '../workoutController/workoutController.js'

router.post('/login', login)
router.get('/obras', obras)


export default router;