import Comment from '../models/comment.js'
import Post from '../models/post.js'


export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.user })
    res.send(comments)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const createComment = async (req, res) => {
    try {
      const comment = new Comment(req.body)
      comment.postId = req.user
      await comment.save()
      console.log(comment.postId)
      const post = await Post.findById(req.user)
      post.comments.push(comment)
      await post.save()
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