import express from 'express'
import { createPost } from '../controllers/post.controller.js'
const postRoute = express.Router()

// postRoute.get('/', postController.getAllPosts)
postRoute.post('/', createPost)
// postRoute.put('/:id',upload.single('image'), postController.updatePost)
// postRoute.delete('/:id', postController.deletePost)

export default postRoute