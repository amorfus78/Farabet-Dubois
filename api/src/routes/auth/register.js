import validate from '../../middlewares/validate.js'
import { emailValidator, passwordValidator, nameValidator, ageValidator, postalCodeValidator, cityValidator } from '../../validators.js'

import registerController from '../../controllers/auth/registerController.js'

const registerRoute = (app) => {
	app.post(
		'/register',
		validate({
			body: {
				email: emailValidator,
				password: passwordValidator,
				first_name: nameValidator,
				last_name: nameValidator,
				age: ageValidator,
				postal_code: postalCodeValidator,
				city: cityValidator,
			},
		}),
		registerController
	)
}

export default registerRoute

