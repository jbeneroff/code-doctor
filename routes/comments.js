import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {getAllComments, createComment, getComment, updateComment, deleteComment} from "../controllers/comments.js"

const router = Router()


router.get('/comments', restrict, getAllComments)

router.get('/comments/:post_id', getComment)

router.post('/comments', restrict, createComment)

router.put('/comment/:id', restrict, updateComment)

router.delete('/comments/:id', restrict, deleteComment)


export default router