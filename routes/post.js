import { Router } from 'express'
import restrict from '../helpers/restrict.js'
import {getAllPosts, createPost, getPost, updatePost, deletePost} from "../controllers/posts.js"

const router = Router()


router.get('/posts', restrict, getAllPosts)

router.get('/posts/:id', getPost)

router.post('/posts', restrict, createPost)

router.put('/posts/:id', restrict, updatePost)

router.delete('/posts/:id', restrict, deletePost)


export default router
