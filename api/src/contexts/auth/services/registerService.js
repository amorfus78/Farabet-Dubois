import { USER_CREATION_FAILED, USER_ALREADY_EXISTS } from '../errors.js'
import doesUserExists from '../commands/doesUserExists.js'
import createUser from '../commands/CreateUser.js'
import hashPassword from '../commands/hashPassword.js'

const registerService = async (data) => {
	const userExists = await doesUserExists(data.email)
	if (userExists) {
		return USER_ALREADY_EXISTS
	}

	const [hashedPassword, salt] = await hashPassword(data.password)

	const error = await createUser(data.email, hashedPassword, salt)
	if (error) {
		return USER_CREATION_FAILED
	}
}

export default registerService
