import deepmerge from 'deepmerge'
import findUserById from '../contexts/users/commands/getUser.js'
import HTTP_CODES from '../httpCodes.js'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config.js'
import getUser from '../contexts/users/commands/getUser.js'

export const authenticate = async (req, res, next) => {
	try {
		const { authorization } = req.headers

		const token = authorization.slice(7)

		const jwt = await decodeJWT(token)

		if (!jwt) {
			res.sendStatus(HTTP_CODES.UNAUTHORIZED)
			return
		}

		if (!(await getUser(jwt.userId))) {
			res.sendStatus(HTTP_CODES.UNAUTHORIZED)
			return
		}

		req.locals = deepmerge(req.locals || {}, {
			session: { userId: jwt.userId },
		})

		next()
	} catch (error) {
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' })
	}
}

const decodeJWT = (token) => {
	try {
		const { payload } = jsonwebtoken.verify(
			token,
			config.security.jwt.secret,
		)

		return payload
	} catch (err) {
		if (err instanceof jsonwebtoken.JsonWebTokenError) {
			return false
		}
	}
}
