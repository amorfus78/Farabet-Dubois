import MessageModel from '../../../../db/models/MessageModel.js'

const createMessage = async (recipientId, senderId, message) => {
	await MessageModel.query().insert({
		recipient_id: recipientId,
		sender_id: senderId,
		message,
	})
}

export default createMessage
