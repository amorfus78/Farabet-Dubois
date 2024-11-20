import UserModel from '../../../../db/models/UserModel.js'

const getUser = async (userId) => {
	const user = await UserModel.query().findById(userId)
	return user
}

export default getUser
