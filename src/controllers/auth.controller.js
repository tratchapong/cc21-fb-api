// export function register(req, res) {
//  req.send('Register Controller')
// }

export const register = (req, res) => {
	res.send('Register Controller')
}

export const login = (req,res) => {
   res.json({
   msg : 'Login Controller',
   body : req.body
 })
}

export const getMe = (req,res) => {
 res.json({msg : 'GetMe controller'})
}

