import { Router } from "express";
import { createPost, deletePost, getAllPosts } from "../controllers/post.controller.js";

const postRoute = Router()

postRoute.get('/', getAllPosts)
postRoute.post('/', createPost)
postRoute.delete('/:id', deletePost)


export default postRoute