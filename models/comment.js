import mongoose from "mongoose"
const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    // userId: {type: Schema.Types.ObjectId, ref: 'User'},
    postId: {type: Schema.Types.ObjectId, ref: 'Post'},
    content: {type: String, required: true}
  }, {timestamps: true}
)

export default mongoose.model("Comment", CommentSchema)