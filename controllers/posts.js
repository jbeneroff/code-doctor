import Post from '../models/post.js'
import User from '../models/user.js'


export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.send(posts)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const {id} = req.params
    const post = await Post.findById(id).populate({ path: 'comments', populate: { path: 'userId' } })
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({ error :e.message})
    }
  } catch (e) {
    res.status(500).json({ error: e.message})
  }
}

export const getAllUserPosts = async (req, res) => {
  try {
    
    const user = await User.findById(req.params.id)
    const post = await Post.find({userId: req.params.id})
    res.json(post) 
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    post.userId = req.user
    await post.save()
    const user = await User.findById(req.user)
    user.posts.push(post) 
    await user.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true })
    res.send(updatedPost)
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPost = await Post.findByIdAndDelete(id)
    res.send(deletedPost)
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
} 