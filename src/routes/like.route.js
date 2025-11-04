import { Router } from "express";
import { createLike, deleteLike } from "../controllers/like.controller.js";

const likeRoute = Router()

likeRoute.post('/', createLike)
likeRoute.delete('/:id', deleteLike)

export default likeRoute