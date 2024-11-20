import validate from '../../middlewares/validate.js'
import { emailValidator, passwordValidator, nameValidator, ageValidator, postalCodeValidator, cityValidator } from '../../validators.js'

import registerController from '../../controllers/auth/registerController.js'

const registerRoute = (app) => {
	app.post(
		'/register',
		validate({
			body: {
				email: emailValidator,
				password: passwordValidator
			},
		}),
		registerController
	)
}

export default registerRoute

