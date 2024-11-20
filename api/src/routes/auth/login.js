import validate from '../../middlewares/validate.js'
import { emailValidator, passwordValidator } from '../../validators.js'

import loginController from '../../controllers/auth/loginController.js'

const loginRoute = (app) => {
	app.post('/login',
		validate({
			body: {
				email: emailValidator,
				password: passwordValidator
			},
		}),
		loginController
	)
}

export default loginRoute
