import AddressModel from '../../../../db/models/AddressModel.js'
import { FAILED_TO_CREATE_ADDRESS } from '../errors.js'

const createAddress = async (data) => {
	try {
		const address = await AddressModel.query().insert(data)
		return [null, address]
	} catch (error) {
		return [FAILED_TO_CREATE_ADDRESS, null]
	}
}

export default createAddress
