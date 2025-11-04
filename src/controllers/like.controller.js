import createHttpError from "http-errors"
import prisma from "../config/prisma.config.js"


export const createLike = async (req, res, next) => {
	const {postId} = req.body
	const postData = await prisma.post.findUnique({
		where : {id: postId}
	})
	if(!postData) {
		return next (createHttpError[401]('cannot like this post'))
	}
	const result = await prisma.like.create({
		data : { userId: req.user.id, postId : postId}
	})
	res.json( {
		message : 'Like done',
		result
	})
}

export const deleteLike = async (req, res, next) => {
	const {id} = req.params
	const result = await prisma.like.delete({
		where : { 
			userId_postId : {
				userId : req.user.id,
				postId : +id
			}
		}
	})
}