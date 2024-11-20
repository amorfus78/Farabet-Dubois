import UserModel from '../../../../db/models/UserModel.js'

const getUser = async (email) => {
	const user = await UserModel.query().findOne({ email })
	return user
}

export default getUser
