import { Router } from "express";
import { createPost, deletePost, getAllPosts, updatePost } from "../controllers/post.controller.js";

const postRoute = Router()

postRoute.get('/', getAllPosts)
postRoute.post('/', createPost)
postRoute.delete('/:id', deletePost)
postRoute.put('/:id',updatePost)


export default postRoute