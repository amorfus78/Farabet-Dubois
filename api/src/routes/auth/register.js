import validate from '../../middlewares/validate.js'
import { emailValidator, passwordValidator, nameValidator, ageValidator, postalCodeValidator, cityValidator } from '../../validators.js'

const registerRoute = (app) => {
	app.post(
		"/register",
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
		(req, res) => {
			res.send("register");
		}
	);
};

export default registerRoute;

