import {
	COULD_NOT_GET_PARTY,
	PARTY_DOES_NOT_EXIST,
	COULD_NOT_JOIN_PARTY,
	USER_ALREADY_PARTICIPANT,
} from '../errors.js'
import getPartyById from '../commands/getPartyById.js'
import isUserParticipant from '../commands/isUserParticipant.js'
import createPartyUser from '../commands/createPartyUser.js'

const joinPartyService = async (partyId, userId) => {
	const [partyError, party] = await getPartyById(partyId)
	if (partyError) {
		return COULD_NOT_GET_PARTY
	}
	if (!party) {
		return PARTY_DOES_NOT_EXIST
	}

	const [isAlreadyParticipantError, isAlreadyParticipant] = await isUserParticipant(partyId, userId)
	if (isAlreadyParticipantError) {
		return COULD_NOT_JOIN_PARTY
	}
	if (isAlreadyParticipant) {
		return USER_ALREADY_PARTICIPANT
	}

	const error = await createPartyUser(partyId, userId)
	if (error) {
		return COULD_NOT_JOIN_PARTY
	}
}

export default joinPartyService
