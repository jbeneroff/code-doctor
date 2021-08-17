# code-doctor

https://codedoctor.netlify.app/[Code Doctor]

## Overview
A forum for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users' posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.

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
const  PostSchema = new Schema(
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


## MVP
- Front End: React App, CRUD for posts and comments, sign-in/sign-up/sign-out for users.
- Front End: Home page, all posts for user, single post with comments + update/delete, create new post.
- Back End: MongoDB, Mongoose, Express, CRUD for posts and comments, sign-in/sign-up/verify for users.
- Authentication/ Authorization


#### Client (Front End)

-  6 separate components 
- Use only React for DOM Manipulation.
- Authentication
- Landing Screen
- Listing Screen
- Detail Screen

#### Server (Back End)
- Authentication

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

![Home](https://user-images.githubusercontent.com/85003025/127893181-0e220225-ac1d-4a6f-a1d4-ad336d376888.png)
![CreateNew](https://user-images.githubusercontent.com/85003025/127893190-dc156e3b-b447-43a6-9b1c-ea8908e8d6ee.png)
![DeletePost](https://user-images.githubusercontent.com/85003025/127893195-9ac0fe2e-9b28-41cc-bfe2-f5e391fde9db.png)
![Home](https://user-images.githubusercontent.com/85003025/127893201-5c76a8e7-8320-4475-a136-681b3ad1c769.png)
![SignIn](https://user-images.githubusercontent.com/85003025/127893207-4e6318d1-931b-479b-894c-98c1151c36cc.png)
![SignUp](https://user-images.githubusercontent.com/85003025/127893216-52c84f67-cfb7-447b-bd72-797d1330f044.png)
![UpdatePost](https://user-images.githubusercontent.com/85003025/127893222-6788fe22-b3f2-42fd-bdcf-6972e886f219.png)
![UserProfile](https://user-images.githubusercontent.com/85003025/127893227-01448d03-5c1e-4f4e-8c26-0b02711488e0.png)


## Timeframe

| Component                              | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal and Approval          |    H     |      6hrs      |      6hrs     |     6hrs   |
| Front End Components          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Front End Views          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Front End Services        |    H     |      3hrs      |     3hrs     |     3hrs    |
| Front End Routes          |    H     |      3hrs      |      3hrs     |     3hrs    |
| Back End Database          |    H     |      3hrs      |      3hrs     |     3hrs    |
| Back End Authentication/Authorization         |    H     |      3hrs      |     3hrs     |   3hrs    |
| Front End Authentication/Authorization         |    H     |      3hrs      |     3hrs      |    3hrs    |
| Back End Models         |    H     |      3hrs      |     3hrs      |    3hrs     |
| Back End Controllers          |    H     |      3hrs      |     3hrs     |    3hrs     |
| Back End Routes         |    H     |      3hrs      |     3hrs    |    3hrs     |
| CSS styling         |    H     |      6hrs      |     6hrs    |     10hrs    |
| Media Queries        |    H     |      2hrs      |     1hrs    |    1hrs     |
| Debugging        |    H     |      6hrs      |     6hrs    |    6hrs     |
| PMVP code snippets         |    M     |      3hrs      |     1hrs      |    1hrs    |
| PMVP Search bar         |    M     |      3hrs      |     1hrs     |     1hrs    |
| PMVP voting system         |    M     |      3hrs      |    1hrs     |     1hrs    |
| PMVP mark comments as answer         |    M     |      3hrs      |     0hrs     |     0hrs    |
| Total |    H     |           |          |        |

## Weekly Breakdown

| Day        | Deliverable                                          | Status   |
| ---------- | ---------------------------------------------------- | -------- |
| July 30    | Project Ideas/ README.md   | Complete |
| Aug 2    | README/ Proposal | Complete |
| Aug 3    | PseudoCode/Coding                 | Complete |
| Aug 4   |  Coding/MVP                                               | Complete |
| Aug 5    | MVP                                           | Complete |
| Aug 6 | MVP/PMVP                                                 | Complete |
| Aug 9    | PMVP                                       | Complete |
| Aug 10    | Presentations                                        | Complete |

[https://github.com/users/jbeneroff/projects/1]
