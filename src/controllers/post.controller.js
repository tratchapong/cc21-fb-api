import prisma from "../config/prisma.config.js"

export const createPost = async (req,res,next) => {
	const {message, image} = req.body

	const data = { message, image, userId : req.user.id }
	
	const rs = await prisma.post.create( {data})
	res.status(201).json({
		message: 'Create post done',
		result : rs
	})
}