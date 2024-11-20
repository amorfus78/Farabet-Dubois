import { USER_UPDATE_FAILED } from '../errors.js'
import UserModel from '../../../../db/models/UserModel.js'


const updateUser = async (userId, data) => {
	try {
		await UserModel.query()
			.patch(data)
			.findById(userId)
		return null
	} catch (error) {
		return USER_UPDATE_FAILED
	}
}

export default updateUser
