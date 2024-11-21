import UserModel from '../../../../db/models/UserModel.js'

const doesUserExist = async (userId) => {
	const user = await UserModel.query().findById(userId)
	return user ? true : false
}

export default doesUserExist
