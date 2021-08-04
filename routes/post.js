import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {getAllPosts, getAllUserPosts, createPost, getPost, updatePost, deletePost} from "../controllers/posts.js"
import { createComment, deleteComment } from '../controllers/comments.js'

const router = Router()


router.get('/posts', getAllPosts)

router.get('/posts/:id', getPost)

router.get('/users/:id/posts', getAllUserPosts)

router.post('/posts', restrict, createPost)

router.post('/posts/:id/comments', restrict, createComment)

router.put('/posts/:id', restrict, updatePost)

router.delete('/posts/:id', restrict, deletePost)

router.delete('/posts/:id/comments/:id', restrict, deleteComment)


export default router
