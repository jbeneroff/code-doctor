import Comment from '../models/comment.js'
import Post from '../models/post.js'
import User from '../models/user.js'


export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.user })
    res.send(comments)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const createComment = async (req, res) => {
  const {id} = req.params
  try {

    const user = await User.findById(req.user)
    const post = await Post.findById(req.post)

    const comment = new Comment(id, req.body)

    comment.userId = req.user
    comment.postId = req.post

    user.comments.push(comment)
    await user.save()
  
    post.comments.push(comment)
    await post.save()
    
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