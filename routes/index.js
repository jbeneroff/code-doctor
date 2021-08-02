import { Router } from "express"
import userRoutes from './user.js'
import postRoutes from './post.js'
import commentRoutes from './comments.js'

const router = Router()

router.get("/", (req, res) => res.send('This is api root'))

router.use('/', userRoutes)
router.use('/', postRoutes)
router.use('/', commentRoutes)


export default router