import HTTP_CODES from '../../httpCodes.js'
import createMessageService from '../../contexts/messages/services/createMessageService.js'
import getMessagesWithUserService from '../../contexts/messages/services/getMessagesWithUserService.js'
import getConversationsService from '../../contexts/messages/services/getConversationsService.js'
import { FAILED_TO_CREATE_MESSAGE, NO_USER_FOUND, FAILED_TO_GET_MESSAGES, FAILED_TO_GET_CONVERSATIONS } from '../../contexts/messages/errors.js'

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

export const getMessagesWithUserController = async (req, res) => {
	const userId = req.locals.session.userId
	const contactId = req.locals.query.contact_id

	const [error,messages] = await getMessagesWithUserService(userId, contactId)
	switch (error) {
	case FAILED_TO_GET_MESSAGES:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_GET_MESSAGES })
		return
	case NO_USER_FOUND:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: NO_USER_FOUND })
		return
	}

	res.status(HTTP_CODES.OK).send({ messages })
}

export const getConversationsController = async (req, res) => {
	const userId = req.locals.session.userId

	const [error, conversations] = await getConversationsService(userId)
	switch (error) {
	case FAILED_TO_GET_CONVERSATIONS:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: FAILED_TO_GET_CONVERSATIONS })
		return
	}

	res.status(HTTP_CODES.OK).send({ conversations })
}
