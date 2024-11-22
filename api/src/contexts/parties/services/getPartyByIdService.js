import { COULD_NOT_GET_PARTY, PARTY_DOES_NOT_EXIST } from '../errors.js'
import getPartyById from '../commands/getPartyById.js'

const getPartyByIdService = async (id, userId) => {
	const [error, party] = await getPartyById(id)
	if (error) {
		return [COULD_NOT_GET_PARTY, null]
	}
	if (!party) {
		return [PARTY_DOES_NOT_EXIST, null]
	}

	return [null, party]
}

export default getPartyByIdService
