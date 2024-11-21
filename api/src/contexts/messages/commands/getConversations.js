import MessageModel from '../../../../db/models/MessageModel.js'

const getConversations = async (userId) => {
	try {
		let conversations = await MessageModel.query().select('recipient_id', 'sender_id', 'message', 'created_at').distinct('recipient_id', 'sender_id').where({
			recipient_id: userId,
		}).orWhere({
			sender_id: userId,
		}).orderBy('created_at', 'desc')

		return [null, getConversationsWithLastMessage(conversations)]
	} catch (error) {
		return [error, null]
	}
}

const getConversationsWithLastMessage = (conversations) => {
	let conversationsWithLastMessage = []
	for (const conversation of conversations) {
		const lastMessage = conversations.find(message => message.recipient_id === conversation.recipient_id || message.sender_id === conversation.sender_id)

		const conversationAlreadyExists = conversationsWithLastMessage.find(parsedConversation => parsedConversation.contact_id === conversation.recipient_id || parsedConversation.contact_id === conversation.sender_id)
		if (conversationAlreadyExists) {
			continue
		}

		conversationsWithLastMessage.push({
			contact_id: conversation.recipient_id,
			message: lastMessage.message,
			last_message: lastMessage.created_at,
		})
	}

	return conversationsWithLastMessage
}

export default getConversations