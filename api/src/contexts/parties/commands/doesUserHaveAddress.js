import UserModel from '../../../../db/models/UserModel.js'
import { USER_HAS_NO_ADDRESS } from '../errors.js'

const doesUserHaveAddress = async (userId) => {
	const user = await UserModel.query().findById(userId)
	if (!user.address_id) {
		return USER_HAS_NO_ADDRESS
	}
}

export default doesUserHaveAddress
