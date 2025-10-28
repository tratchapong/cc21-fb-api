export default (err,req,res,next)=>{
	console.log(err.message)
	res.status(err.status || 500)
	res.json({
		status : err.status || 500,
		message : err.message || 'Server Error!!'
	})
}