import registerRoute from './auth/register.js'
import loginRoute from './auth/login.js'
import userRoutes from './users/userRoutes.js'

const init_routes = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello World')
	})

	registerRoute(app)
	loginRoute(app)
	userRoutes(app)
}

export default init_routes
