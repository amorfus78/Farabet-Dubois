import { updateUserController } from '../../controllers/users/userController.js'
import { authenticate } from '../../middlewares/authenticate.js'
import validate from '../../middlewares/validate.js'
import { ageValidator, nameValidator, verifyTokenValidator } from '../../validators.js'

const userRoutes = (app) => {
	app.patch('/users',
		validate({
			body: {
				age: ageValidator,
				first_name: nameValidator,
				last_name: nameValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			},
		}),
		authenticate,
		updateUserController)
}

export default userRoutes
