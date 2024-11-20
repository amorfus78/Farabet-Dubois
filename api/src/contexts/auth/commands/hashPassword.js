import config from '../../../config.js'

import crypto from 'crypto'

const { randomBytes } = crypto

const hashPassword = async (
	password,
	salt = randomBytes(config.security.password.saltlen).toString('hex'),
) => {
	const hashedPassword = crypto.pbkdf2Sync(
		password,
		salt,
		config.security.password.iterations,
		config.security.password.keylen,
		config.security.password.digest,
	)
	return [hashedPassword.toString('hex'), salt]
}

export default hashPassword
