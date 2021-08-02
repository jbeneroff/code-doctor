import { Router } from "express"
import userRoutes from './user.js'
import postRoutes from './post.js'

const router = Router()

router.get("/", (req, res) => res.send('This is api root'))

router.use('/', userRoutes)
router.use('/', postRoutes)


export default router