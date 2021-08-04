import { Router } from "express"
import { signUp, signIn, verify, getAllUsers, getUser} from "../controllers/users.js"
import { getAllUserPosts } from "../controllers/posts.js"
const router = Router()

router.post('/sign-up', signUp)

router.post('/sign-in', signIn)

router.get('/verify', verify)

router.get('/users', getAllUsers)

router.get('/users/:id', getUser)

export default router