import UserModel from '../../../../db/models/UserModel.js'

const doesUserExists = async (email) => {
	const user = await UserModel.query().findOne({ email })
	console.log(user)
	return user ? true : false
}

export default doesUserExists
