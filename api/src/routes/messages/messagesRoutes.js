import { messageValidator, verifyTokenValidator, idValidator } from '../../validators.js'
import { createMessageController } from '../../controllers/messages/messageController.js'
import { authenticate } from '../../middlewares/authenticate.js'
import validate from '../../middlewares/validate.js'

const messagesRoutes = (app) => {
	app.post(
		'/messages',
		validate({
			body: {
				message: messageValidator,
				recipient_id: idValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			},
		}),
		authenticate,
		createMessageController
	)
}

export default messagesRoutes
