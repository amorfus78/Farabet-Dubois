import UserModel from '../../../../db/models/UserModel.js'
import { USER_CREATION_FAILED } from '../errors.js'

const createUser = async (email, hashedPassword, salt) => {
	try {
		await UserModel.query().insert({
			email,
			password_hash: hashedPassword,
			password_salt: salt,
		})
		return
	} catch (error) {
		return USER_CREATION_FAILED
	}
}

export default createUser
