import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {getAllComments, createComment, getComment, updateComment, deleteComment} from "../controllers/comments.js"

const router = Router({mergeParams: true})


router.put('/comments/:id', restrict, updateComment)


export default router
