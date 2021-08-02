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
  }, {timestamps: true}
)
```
Comment
```
const CommentSchema = new Schema(
  {
    userId: {type: Schema.Types.Object, ref: 'User'},
    postId: {type: Schema.Types.ObjectId, ref: 'Post'},
    content: {type: String, required: true}
   }, {timestamps: true}
)
```

## Whimsical Diagram

https://whimsical.com/MDUmac39tzhHxfgXzog9ra

## Team Expectations

https://docs.google.com/document/d/1jy-tOdlzclQPYQr4zjqm0O3nZxDCwMjsFNJab7kv8uU/edit

## Overview
A forum for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users' posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.

## MVP
- Front End: React App, CRUD for posts and comments, sign-in/sign-up/sign-out for users.
- Front End: Home page, all posts for user, single post with comments + update/delete, create new post.
- Back End: MongoDB, Mongoose, Express, CRUD for posts and comments, sign-in/sign-up/verify for users.
- Authentication/ Authorization


#### Client (Front End)

-  6 separate components 
- Use only React for DOM Manipulation.
- Authentication!
- Landing Screen
- Listing Screen
- Detail Screen

#### Server (Back End)
- Authentication!

#### Styling
- Be styled with CSS.
- Use flexbox (display: flex) or CSS Grid.
- Implement responsive design on 2 screen sizes (including desktop) using a media query (mobile).

#### Linting
- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow camelCase and kebab-case conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes/comments are okay).

#### Deployment
- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via Heroku.
- Deploy the MongoDB database on MongoDB Atlas.

#### Procedural
- Have frequent commits from every team member dating  back to the very beginning of the project. 
- Total Commits: 50+ commits
- Use effective and safe branching and merging processes.


## PMVP
- code snippets in posts and comments.
- search bar for all posts
- voting system for comments
- user can mark a comment as 'Answer'

## Wire Frame

## Timeframe

| Component                              | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Total |    H     |           |          |        |

## Weekly Breakdown

| Day        | Deliverable                                          | Status   |
| ---------- | ---------------------------------------------------- | -------- |
| July 30    | Project Ideas/ README.md   | Incomplete |
| Aug 2    | README/ Proposal | Incomplete |
| Aug 3    | PseudoCode/Coding                 | Incomplete |
| Aug 4   |  Coding/MVP                                               | Incomplete |
| Aug 5    | MVP                                           | Incomplete |
| Aug 6 | MVP/PMVP                                                 | Incomplete |
| Aug 9    | PMVP                                       | Incomplete |
| Aug 10    | Presentations                                        | Incomplete |


