import { FAILED_TO_CREATE_ADDRESS, FAILED_TO_UPDATE_USER_ADDRESS } from '../errors.js'
import createAddressCommand from '../commands/createAddress.js'
import updateUserAddress from '../commands/updateUserAddress.js'

const createAddress = async (userId, data) => {
	let [error, address] = await createAddressCommand(data)
	if (error) {
		return FAILED_TO_CREATE_ADDRESS
	}
	error = await updateUserAddress(userId, address.id)
	if (error) {
		return FAILED_TO_UPDATE_USER_ADDRESS
	}
}

export default createAddress