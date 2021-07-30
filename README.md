# code-doctor


## Schemas
User
```
const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_digest: { type: String, required: true, select: false}
  },
  { timestamps: true }
)
```
Post
```
const  PostSchema= new Schema(
  {
    title: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, required: true}
  }, {timestamps: true})
)
```
Comment
```
const CommentSchema = new Schema(
  {
    userId: {type:Schema.Types.Object, ref: 'User'},
    postId: {type: Schema.Types.ObjectId, ref: 'Post'},
    content: {type: String, required: true}
   }, {timestamps: true})
)
```

## Whimsical Diagram
https://whimsical.com/MDUmac39tzhHxfgXzog9ra
## Team Expectations

## Overview
A forum for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users' posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.
## MVP

## PMVP

