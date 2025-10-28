import createHttpError from "http-errors"

export const register = (req, res) => {
	res.send('Register Controller')
}

export const login = (req,res,next) => {
  //  throw(new Error('This is my way'))
  // if(req.body.password === 'a1234') {
  //   return next(createHttpError[400]('bad password'))
  // }
   res.json({
   msg : 'Login Controller',
   body : req.body
 })
}

export const getMe = (req,res) => {
 res.json({msg : 'GetMe controller'})
}

