import validate from '../../middlewares/validate.js'
import { verifyTokenValidator, hobbyNameValidator } from '../../validators.js'
import { authenticate } from '../../middlewares/authenticate.js'
import { createHobbyController } from '../../controllers/hobbies/hobbiesController.js'

const hobbiesRoutes = (app) => {
	app.post(
		'/hobbies',
		validate({
			body: {
				name: hobbyNameValidator
			},
			headers: {
				authorization: verifyTokenValidator,
			},
		}),
		authenticate,
		createHobbyController,
	)
}

export default hobbiesRoutes
