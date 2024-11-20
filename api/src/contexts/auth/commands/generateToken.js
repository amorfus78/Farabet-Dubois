import config from '../../../config.js'
import jwt from 'jsonwebtoken'

const generateToken = async (user) => {
	const token = jwt.sign(
		{
			payload: {
				userId: user.id
			}
		},
		config.security.jwt.secret,
		{
			expiresIn: config.security.jwt.expiresIn
		}
	)
	return token
}

export default generateToken
