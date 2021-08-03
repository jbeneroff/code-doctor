import { Router } from "express"
import { signUp, signIn, verify, getAllUsers} from "../controllers/users.js"

const router = Router()

router.post('/sign-up', signUp)

router.post('/sign-in', signIn)

router.get('/verify', verify)

router.get('/users', getAllUsers)

// router.get('/users/:id',getUserPosts)

export default router