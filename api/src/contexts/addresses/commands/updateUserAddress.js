import UserModel from '../../../../db/models/UserModel.js'

const updateUserAddress = async (userId, addressId) => {
	try {
		await UserModel.query().patch({ address_id: addressId }).where('id', userId)
	} catch (error) {
		return FAILED_TO_UPDATE_USER_ADDRESS
	}
}

export default updateUserAddress
