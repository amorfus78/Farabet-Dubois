import {
	PARTY_DOES_NOT_EXIST,
	COULD_NOT_GET_PARTICIPANTS,
	USER_IS_NOT_HOST,
} from '../errors.js'
import getPartyByIdService from '../../parties/services/getPartyByIdService.js'
import isPartyHost from '../commands/isPartyHost.js'
import getParticipants from '../commands/getParticipants.js'

const getParticipantsService = async (partyId, userId) => {
	const [error, party] = await getPartyByIdService(partyId)
	if (error) {
		return [error, null]
	}
	if (!party) {
		return [PARTY_DOES_NOT_EXIST, null]
	}

	const isHost = await isPartyHost(userId, partyId)
	if (!isHost) {
		return [USER_IS_NOT_HOST, null]
	}

	const [errorParticipants, participants] = await getParticipants(partyId)
	if (errorParticipants) {
		return [COULD_NOT_GET_PARTICIPANTS, null]
	}

	return [null, participants]
}

export default getParticipantsService
