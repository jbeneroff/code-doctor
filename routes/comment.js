import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {getAllComments, createComment, getComment, updateComment, deleteComment} from "../controllers/comments.js"

const router = Router({mergeParams: true})


router.get('/comments/:post_id', restrict, getAllComments)
//go to Users/ -> copy post id -> go to this path

router.get('/comments/:id', getComment)

router.post('/comments', restrict, createComment)

router.put('/comments/:id', restrict, updateComment)

router.delete('/comments/:id', restrict, deleteComment)


export default router
