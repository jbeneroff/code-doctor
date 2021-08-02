import Comment from '../models/comment.js'
import User from '../models/user.js'
import Post from '../models/post.js'

export const getAllComments = async (req, res) => {

  try {
    // const user = await User.find().populate('user_id')
    // const post = await Post.find().populate('post_id')
    const comments = await Comment.find({}).populate('post_id')
    res.send(comments)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const createComment = async (req, res) => {
  
  try {
    // const user = await User.find({}).populate('user_id')
    // const post = await Post.find({}).populate('post_id')
    const comment = new Comment(req.body)
    comment.postId = req.post
    comment.userId = req.user
    await comment.save()
    res.status(201).json(comment)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getComment = async (req, res) => {
  try {
    const {id} = req.params
    const comment = await Comment.findById(id)
    if (comment) {
      res.json(comment)
    } else {
      res.status(404).json({ error :e.message})
    }
  } catch (e) {
    res.status(500).json({ error: e.message})
  }
}

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const updatedComment = await Comment.findByIdAndUpdate(id, body, { new: true })
    res.send(updatedComment)
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
}

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deletedComment = await Comment.findByIdAndDelete(id)
    res.send(deletedComment)
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
} 