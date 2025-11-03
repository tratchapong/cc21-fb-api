import prisma from "../config/prisma.config.js"


export const createPost = async (req, res) => {
	const {message, image} = req.body

	const data = {message, image, userId: req.user}

	const result = await prisma.post.create( {data })

	res.status(201).json({
		message : 'Create new Post done',
		result
	})
}