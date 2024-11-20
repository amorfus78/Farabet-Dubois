import getUser from '../commands/getUser.js'
import updateUser from '../commands/updateUser.js'
import { USER_NOT_FOUND, USER_UPDATE_FAILED } from '../errors.js'

const updateUserService = async (userId, data) => {
	const error = await updateUser(userId, data)
	if (error) {
		return USER_UPDATE_FAILED
	}
}

export default updateUserService
