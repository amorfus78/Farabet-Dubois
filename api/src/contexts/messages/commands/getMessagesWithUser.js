import MessageModel from '../../../../db/models/MessageModel.js'

const getMessagesWithUser = async (userId, contactId) => {
	try {
		const messages = await MessageModel.query().where({
			recipient_id: userId,
			sender_id: contactId,
		}).orWhere({
			recipient_id: contactId,
			sender_id: userId,
		}).orderBy('created_at', 'asc')

		return [null, messages]
	} catch (error) {
		return [error, null]
	}
}

export default getMessagesWithUser
