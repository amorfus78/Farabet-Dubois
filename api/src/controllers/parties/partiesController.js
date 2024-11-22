import {
	USER_HAS_NO_ADDRESS,
	FAILED_TO_CREATE_PARTY,
	COULD_NOT_GET_PARTIES,
	USER_DOES_NOT_EXIST,
	PARTY_DOES_NOT_EXIST,
	USER_IS_NOT_HOST,
	FAILED_TO_UPDATE_PARTY,
	COULD_NOT_GET_PARTY,
	COULD_NOT_JOIN_PARTY,
	USER_ALREADY_PARTICIPANT,
	USER_IS_NOT_ACCEPTED_PARTICIPANT,
	COULD_NOT_GET_PARTICIPANTS,
	PARTICIPANT_NOT_FOUND,
	PARTICIPANT_NOT_IN_PARTY,
	COULD_NOT_UPDATE_PARTICIPANT_STATUS
} from '../../contexts/parties/errors.js'
import HTTP_CODES from '../../httpCodes.js'
import createPartyService from '../../contexts/parties/services/createPartyService.js'
import getAllPartiesForUserService from '../../contexts/parties/services/getAllPartiesForUserService.js'
import updatePartyService from '../../contexts/parties/services/updatePartyService.js'
import searchPartiesService from '../../contexts/parties/services/searchPartiesService.js'
import getPartyByIdService from '../../contexts/parties/services/getPartyByIdService.js'
import joinPartyService from '../../contexts/parties/services/joinPartyService.js'
import getAcceptedParticipantsService from '../../contexts/parties/services/getAcceptedParticipantsService.js'
import getParticipantsService from '../../contexts/parties/services/getParticipantsService.js'
import updateParticipantStatusService from '../../contexts/parties/services/updateParticipantStatusService.js'
export const createPartyController = async (req, res) => {
	const {
		body: {
			name,
			description,
			price,
			start_date,
			number_of_spots,
			consumables_needed,
			type,
		},
		locals: {
			session: {
				userId,
			},
		},
	} = req

	const [error, party] = await createPartyService(
		name,
		description,
		price,
		start_date,
		number_of_spots,
		consumables_needed,
		type,
		userId
	)

	switch (error) {
	case USER_HAS_NO_ADDRESS:
		res.status(HTTP_CODES.BAD_REQUEST).send({ error: USER_HAS_NO_ADDRESS })
		return
	case FAILED_TO_CREATE_PARTY:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_CREATE_PARTY })
		return
	}

	res.status(HTTP_CODES.CREATED).send({ party: party })
}

export const getAllPartiesForUserController = async (req, res) => {
	const userId = req.params.id

	const [error, parties] = await getAllPartiesForUserService(userId)
	switch (error) {
	case COULD_NOT_GET_PARTIES:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_GET_PARTIES })
		return
	case USER_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: USER_DOES_NOT_EXIST })
		return
	}

	res.status(HTTP_CODES.OK).send({ parties: parties })
}

export const updatePartyController = async (req, res) => {
	const {
		params: {
			id,
		},
		body: {
			name,
			description,
			price,
			start_date,
			number_of_spots,
			consumables_needed,
			type,
		},
		locals: {
			session: {
				userId,
			},
		},
	} = req

	const [error, party] = await updatePartyService(
		id,
		name,
		description,
		price,
		start_date,
		number_of_spots,
		consumables_needed,
		type,
		userId
	)

	switch (error) {
	case PARTY_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTY_DOES_NOT_EXIST })
		return
	case USER_IS_NOT_HOST:
		res.status(HTTP_CODES.FORBIDDEN).send({ error: USER_IS_NOT_HOST })
		return
	case FAILED_TO_UPDATE_PARTY:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_UPDATE_PARTY })
		return
	}

	res.status(HTTP_CODES.OK).send({ party: party })
}

export const searchPartiesController = async (req, res) => {
	const {
		query: {
			city,
			type,
		},
	} = req

	const [error, parties] = await searchPartiesService(city, type)
	switch (error) {
	case COULD_NOT_GET_PARTIES:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_GET_PARTIES })
		return
	}

	res.status(HTTP_CODES.OK).send({ parties: parties })
}

export const getPartyByIdController = async (req, res) => {
	const id = req.params.id
	const userId = req.locals.session.userId

	const [error, party] = await getPartyByIdService(id, userId)
	switch (error) {
	case PARTY_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTY_DOES_NOT_EXIST })
		return
	case COULD_NOT_GET_PARTY:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_GET_PARTY })
		return
	}

	res.status(HTTP_CODES.OK).send({ party: party })
}

export const joinPartyController = async (req, res) => {
	const {
		params: {
			id,
		},
		locals: {
			session: {
				userId,
			},
		},
	} = req

	const [error] = await joinPartyService(id, userId)
	switch (error) {
	case PARTY_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTY_DOES_NOT_EXIST })
		return
	case COULD_NOT_JOIN_PARTY:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_JOIN_PARTY })
		return
	case COULD_NOT_GET_PARTY:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_GET_PARTY })
		return
	case USER_ALREADY_PARTICIPANT:
		res.status(HTTP_CODES.BAD_REQUEST).send({ error: USER_ALREADY_PARTICIPANT })
		return
	}

	res.status(HTTP_CODES.OK).send({ message: 'Joined party, waiting for host to accept' })
}

export const getAcceptedParticipantsController = async (req, res) => {
	const {
		params: {
			id,
		},
		locals: {
			session: {
				userId,
			},
		},
	} = req

	const [error, participants] = await getAcceptedParticipantsService(id, userId)
	switch (error) {
	case PARTY_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTY_DOES_NOT_EXIST })
		return
	case COULD_NOT_GET_PARTICIPANTS:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_GET_PARTICIPANTS })
		return
	case USER_IS_NOT_ACCEPTED_PARTICIPANT:
		res.status(HTTP_CODES.FORBIDDEN).send({ error: USER_IS_NOT_ACCEPTED_PARTICIPANT })
		return
	}

	res.status(HTTP_CODES.OK).send({ participants: participants })
}

export const getParticipantsController = async (req, res) => {
	const {
		params: {
			id,
		},
		locals: {
			session: {
				userId,
			},
		},
	} = req

	const [error, participants] = await getParticipantsService(id, userId)
	switch (error) {
	case PARTY_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTY_DOES_NOT_EXIST })
		return
	case COULD_NOT_GET_PARTICIPANTS:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_GET_PARTICIPANTS })
		return
	case USER_IS_NOT_HOST:
		res.status(HTTP_CODES.FORBIDDEN).send({ error: USER_IS_NOT_HOST })
		return
	}

	res.status(HTTP_CODES.OK).send({ participants: participants })
}

export const updateParticipantStatusController = async (req, res) => {
	const {
		params: {
			partyId,
			participantId,
		},
		body: {
			status,
		},
		locals: {
			session: {
				userId: userId,
			},
		},
	} = req

	console.log(partyId, participantId, status, userId)

	const [error] = await updateParticipantStatusService(partyId, participantId, status, userId)
	switch (error) {
	case PARTY_DOES_NOT_EXIST:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTY_DOES_NOT_EXIST })
		return
	case USER_IS_NOT_HOST:
		res.status(HTTP_CODES.FORBIDDEN).send({ error: USER_IS_NOT_HOST })
		return
	case PARTICIPANT_NOT_FOUND:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: PARTICIPANT_NOT_FOUND })
		return
	case PARTICIPANT_NOT_IN_PARTY:
		res.status(HTTP_CODES.BAD_REQUEST).send({ error: PARTICIPANT_NOT_IN_PARTY })
		return
	case COULD_NOT_UPDATE_PARTICIPANT_STATUS:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: COULD_NOT_UPDATE_PARTICIPANT_STATUS })
		return
	}

	res.status(HTTP_CODES.OK).send({ message: 'Participant status updated' })
}
