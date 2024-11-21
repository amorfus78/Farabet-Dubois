import {
	USER_HAS_NO_ADDRESS,
	FAILED_TO_CREATE_PARTY,
} from '../../contexts/parties/errors.js'
import HTTP_CODES from '../../httpCodes.js'
import createPartyService from '../../contexts/parties/services/createPartyService.js'

const createPartyController = async (req, res) => {
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

export default createPartyController
