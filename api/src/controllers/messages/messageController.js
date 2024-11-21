import HTTP_CODES from '../../httpCodes.js'
import createMessageService from '../../contexts/messages/services/createMessageService.js'
import { FAILED_TO_CREATE_MESSAGE, NO_USER_FOUND } from '../../contexts/messages/errors.js'

export const createMessageController = async (req, res) => {
	const recipientId = req.locals.body.recipient_id
	const senderId = req.locals.session.userId
	const message = req.locals.body.message

	const error = await createMessageService(recipientId, senderId, message)
	switch (error) {
	case FAILED_TO_CREATE_MESSAGE:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_CREATE_MESSAGE })
		return
	case NO_USER_FOUND:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: NO_USER_FOUND })
		return
	}

	res.status(HTTP_CODES.CREATED).send({ message: 'Message created successfully' })
}