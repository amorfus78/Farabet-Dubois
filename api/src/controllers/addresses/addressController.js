import { FAILED_TO_CREATE_ADDRESS, FAILED_TO_UPDATE_USER_ADDRESS } from '../../contexts/addresses/errors.js'
import createAddress from '../../contexts/addresses/services/createAddress.js'
import HTTP_CODES from '../../httpCodes.js'

const createAddressController = async (req, res) => {
	const userId = req.locals.session.userId
	const data = req.body
	const error = await createAddress(userId, data)
	switch (error) {
	case FAILED_TO_CREATE_ADDRESS:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_CREATE_ADDRESS })
		return
	case FAILED_TO_UPDATE_USER_ADDRESS:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_UPDATE_USER_ADDRESS })
		return
	}
	res.status(HTTP_CODES.NO_CONTENT).send()
}

export default createAddressController
