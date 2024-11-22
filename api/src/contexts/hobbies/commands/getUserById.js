import UserModel from '../../../../db/models/UserModel.js'

const getUserById = async (user_id) => {
	const user = await UserModel.query().findById(user_id)

	return [null, user]
}

export default getUserById
