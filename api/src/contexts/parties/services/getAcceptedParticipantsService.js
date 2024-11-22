import {
	PARTY_DOES_NOT_EXIST,
	COULD_NOT_GET_PARTICIPANTS,
	USER_IS_NOT_ACCEPTED_PARTICIPANT,
} from '../errors.js'
import getPartyByIdService from '../../parties/services/getPartyByIdService.js'
import isUserAcceptedParticipant from '../commands/isUserAcceptedParticipant.js'
import getAcceptedParticipants from '../commands/getAcceptedParticipants.js'

const getAcceptedParticipantsService = async (id, userId) => {
	const [error, party] = await getPartyByIdService(id)
	if (error) {
		return [error, null]
	}
	if (!party) {
		return [PARTY_DOES_NOT_EXIST, null]
	}

	const [errorIsParticipant, isParticipant] = await isUserAcceptedParticipant(party.id, userId)
	if (errorIsParticipant) {
		return [COULD_NOT_GET_PARTICIPANTS, null]
	}
	if (!isParticipant) {
		return [USER_IS_NOT_ACCEPTED_PARTICIPANT, null]
	}

	const [errorParticipants, participants] = await getAcceptedParticipants(party.id)
	if (errorParticipants) {
		return [COULD_NOT_GET_PARTICIPANTS, null]
	}

	return [null, participants]
}

export default getAcceptedParticipantsService
