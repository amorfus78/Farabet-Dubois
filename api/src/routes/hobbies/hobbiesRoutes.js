import validate from '../../middlewares/validate.js'
import { verifyTokenValidator, hobbyNameValidator, idValidator } from '../../validators.js'
import { authenticate } from '../../middlewares/authenticate.js'
import { createHobbyController, attachHobbyToUserController, getHobbiesController } from '../../controllers/hobbies/hobbiesController.js'

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

	app.post('/attach-hobby/:hobby_id',
		validate({
			params: {
				hobby_id: idValidator,
			},
		}),
		authenticate,
		attachHobbyToUserController,
	)

	app.get('/hobbies',
		authenticate,
		getHobbiesController,
	)
}

export default hobbiesRoutes
