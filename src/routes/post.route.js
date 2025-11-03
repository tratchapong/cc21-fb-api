import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";

const postRoute = Router()

postRoute.post('/', createPost)


export default postRoute