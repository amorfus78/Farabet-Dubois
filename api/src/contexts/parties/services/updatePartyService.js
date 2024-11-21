import {
	PARTY_DOES_NOT_EXIST,
	USER_IS_NOT_HOST,
	FAILED_TO_UPDATE_PARTY,
} from '../errors.js'
import doesPartyExist from '../commands/doesPartyExists.js'
import isPartyHost from '../commands/isPartyHost.js'
import updateParty from '../commands/updateParty.js'

const updatePartyService = async (
	partyId,
	name,
	description,
	price,
	start_date,
	number_of_spots,
	consumables_needed,
	type,
	userId
) => {
	const partyExists = await doesPartyExist(partyId)
	if (!partyExists) {
		return [PARTY_DOES_NOT_EXIST, null]
	}	

	const isHost = await isPartyHost(userId, partyId)
	if (!isHost) {
		return [USER_IS_NOT_HOST, null]
	}

	const [error, party] = await updateParty(partyId, name, description, price, start_date, number_of_spots, consumables_needed, type)
	if (error) {
		return [FAILED_TO_UPDATE_PARTY, null]
	}

	return [null, party]
}

export default updatePartyService