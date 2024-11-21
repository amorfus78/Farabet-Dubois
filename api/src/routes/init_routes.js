import registerRoute from './auth/register.js'
import loginRoute from './auth/login.js'
import userRoutes from './users/userRoutes.js'
import addressRoutes from './addresses/addressesRoutes.js'
const init_routes = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello World')
	})

	registerRoute(app)
	loginRoute(app)
	userRoutes(app)
	addressRoutes(app)
}

export default init_routes
