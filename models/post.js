import mongoose from "mongoose"
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, required: true}
  }, {timestamps: true}
)

export default mongoose.model("Post", PostSchema)