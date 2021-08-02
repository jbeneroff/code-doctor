import { Router } from "express"
import { signUp, signIn, verify } from "../controllers/users.js"

const router = Router()

router.post('/sign-up', signUp)

router.post('/sign-in', signIn)

router.get('/verify', verify)


export default router