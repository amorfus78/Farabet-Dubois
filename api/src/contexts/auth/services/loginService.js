import { USER_NOT_FOUND, INVALID_PASSWORD } from '../errors.js'
import doesUserExists from '../commands/doesUserExists.js'
import getUser from '../commands/getUser.js'
import isPasswordValid from '../commands/isPasswordValid.js'
import generateToken from '../commands/generateToken.js'

const loginService = async (data) => {
	const userExists = doesUserExists(data.email)
	if (!userExists) {
		return [USER_NOT_FOUND, null]
	}

	const user = await getUser(data.email)

	if (!isPasswordValid(data.password, user.password_hash, user.password_salt)) {
		return [INVALID_PASSWORD, null]
	}

	const token = await generateToken(user)
	return [null, token]
}

export default loginService
