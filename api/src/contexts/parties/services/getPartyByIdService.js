import { COULD_NOT_GET_PARTY, PARTY_DOES_NOT_EXIST } from '../errors.js'
import getPartyById from '../commands/getPartyById.js'
import getFreeSpots from '../commands/getFreeSpots.js'

const getPartyByIdService = async (id, userId) => {
	const [error, party] = await getPartyById(id)
	if (error) {
		return [COULD_NOT_GET_PARTY, null]
	}
	if (!party) {
		return [PARTY_DOES_NOT_EXIST, null]
	}

	const [errorFreeSpots, freeSpots] = await getFreeSpots(party)
	if (errorFreeSpots) {
		console.log(errorFreeSpots)
		return [COULD_NOT_GET_PARTY, null]
	}

	return [null, { ...party, freeSpots }]
}

export default getPartyByIdService
