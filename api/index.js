import express from 'express'
import bodyParser from 'body-parser'

import config from './src/config.js'
import init_routes from './src/routes/init_routes.js'

const app = express()

app.use(bodyParser.json())

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`)
})

init_routes(app)
