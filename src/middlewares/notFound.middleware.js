import createHttpError from "http-errors"

export default (req, res, next) => {
	// res.status(404).json({ message: : 'Path not found'})
	return next( createHttpError.NotFound() )
}