import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {getAllPosts, createPost, getPost, updatePost, deletePost} from "../controllers/posts.js"
import { createComment } from '../controllers/comments.js'

const router = Router({ mergeParams: true })


router.get('/posts', restrict, getAllPosts)

router.get('/posts/:id', getPost)

router.post('/posts', restrict, createPost)

router.post('/posts/:id/comments', restrict, createComment)

router.put('/posts/:id', restrict, updatePost)

router.delete('/posts/:id', restrict, deletePost)


export default router
