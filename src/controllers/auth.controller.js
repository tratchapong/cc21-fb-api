import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import createHttpError from "http-errors"
import identityKeyUtil from "../utils/identity-key.util.js"
import prisma from "../config/prisma.config.js"
import { loginSchema, registerSchema } from '../validations/schema.js'
import { createUser, getUserBy } from '../services/user.service.js'

export const register = async (req, res, next) => {
  const { identity, firstName, lastName, password, confirmPassword } = req.body
  // validation
  const user = registerSchema.parse(req.body)
  const identityKey = user.email ? 'email' : 'mobile'
  // find user if already have registered
  const haveUser = await getUserBy(identityKey, identity)
  if (haveUser) {
    return next(createHttpError[409]('This user already register'))
  }
  const result = await createUser(user)
  res.json({
    msg: 'Register Successful',
    result
  })
}

export const login = async (req, res, next) => {
  const { identity, password } = req.body
  const user = loginSchema.parse(req.body)
  const foundUser = await getUserBy(user.email? 'email' : 'mobile', identity)
  // have no this user
  if(!foundUser) {
    return next(createHttpError[401]('Invalid Login'))
  }
  // check password
  let pwOk = await bcrypt.compare(password, foundUser.password)
  if(!pwOk) {
    return next(createHttpError[401]('Invalid Login'))
  }
  const payload = { id: foundUser.id }
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d'
  })
  const {password: pw, createdAt, updatedAt, ...userData} = foundUser
  res.json({
    msg: 'Login Successful',
    token: token,
    user : userData
  })
}

export const getMe = (req, res) => {
  res.json({ user: req.user })
}

