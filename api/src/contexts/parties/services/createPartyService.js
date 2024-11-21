import doesUserHaveAddress from '../commands/doesUserHaveAddress.js'
import createParty from '../commands/createParty.js'
import { FAILED_TO_CREATE_PARTY, USER_HAS_NO_ADDRESS } from '../errors.js'

const createPartyService = async (name, description, price, start_date, number_of_spots, consumables_needed, type, userId) => {
	const addressError = await doesUserHaveAddress(userId)
	if (addressError) {
		return [null, USER_HAS_NO_ADDRESS]
	}

	const [error, party] = await createParty(name, description, price, start_date, number_of_spots, consumables_needed, type, userId)
	if (error) {
		return [null, FAILED_TO_CREATE_PARTY]
	}

	return [null, party]
}

export default createPartyService
