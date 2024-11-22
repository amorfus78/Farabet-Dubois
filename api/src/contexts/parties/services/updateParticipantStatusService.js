import {
	COULD_NOT_UPDATE_PARTICIPANT_STATUS,
	COULD_NOT_GET_PARTY,
	USER_IS_NOT_HOST,
	PARTICIPANT_NOT_FOUND,
	PARTICIPANT_NOT_IN_PARTY,
} from '../errors.js'
import isPartyHost from '../commands/isPartyHost.js'
import getPartyById from '../commands/getPartyById.js'
import getParticipantById from '../commands/getParticipantById.js'
import updateParticipantStatus from '../commands/updateParticipantStatus.js'

export const updateParticipantStatusService = async (partyId, participantId, status, userId) => {
	const [partyError, party] = await getPartyById(partyId)
	if (partyError) return [COULD_NOT_GET_PARTY, null]

	const isHost = await isPartyHost(userId, partyId)
	if (!isHost) return [USER_IS_NOT_HOST, null]

	const [participantError, participant] = await getParticipantById(participantId)
	if (participantError || !participant) return [PARTICIPANT_NOT_FOUND, null]

	if (participant.party_id != partyId) return [PARTICIPANT_NOT_IN_PARTY, null]

	const [updateError, updatedParticipant] = await updateParticipantStatus(participantId, status)
	if (updateError) return [COULD_NOT_UPDATE_PARTICIPANT_STATUS, null]

	return [null, updatedParticipant]
}

export default updateParticipantStatusService