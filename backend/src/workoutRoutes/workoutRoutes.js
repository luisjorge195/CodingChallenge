import express from 'express'
const router = express.Router()
import { login, obras, registro } from '../workoutController/workoutController.js'

router.post('/login', login)
router.get('/obras', obras)
router.post('/registro', registro)

export default router;