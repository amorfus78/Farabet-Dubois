import config from '../../../config.js'
import crypto from 'crypto'

const isPasswordValid = (password, passwordHash, passwordSalt) => {
	return crypto.pbkdf2Sync(
		password,
		passwordSalt,
		config.security.password.iterations,
		config.security.password.keylen,
		config.security.password.digest,
	).toString('hex') === passwordHash
}

export default isPasswordValid
