import Comment from '../models/comment.js'
import User from '../models/user.js'
import Post from '../models/post.js'

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({ userId: req.user })
    res.send(comments)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const createComment = async (req, res) => {
  try {
    //Makes new comment
    const comment = new Comment(req.body)
    comment.userId = req.user
    await comment.save()
    const user = await User.findById(req.user)
    user.comments.push(comment)
    await user.save()
    const post = await Post.findById(req.params.id)
    post.comments.push(comment)
    await post.save()
    res.status(201).json(post)
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