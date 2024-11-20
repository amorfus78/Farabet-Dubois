import UserModel from '../../../../db/models/UserModel.js'
import { USER_CREATION_FAILED } from '../errors.js'

const createUser = async (
	email,
	hashedPassword,
	salt,
	first_name,
	last_name,
	age,
	postal_code,
	city,
) => {
	try {
		await UserModel.query().insert({
			email,
			first_name,
			last_name,
			age,
			postal_code,
			city,
			password_hash: hashedPassword,
			password_salt: salt,
		})
		return
	} catch {
		return USER_CREATION_FAILED
	}
}

export default createUser
