import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller.js";

const postRoute = Router()

postRoute.get('/', getAllPosts)
postRoute.post('/', createPost)


export default postRoute