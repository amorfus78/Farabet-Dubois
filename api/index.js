import express from 'express'
import bodyParser from 'body-parser'
import knex from 'knex'

import config from './src/config.js'
import init_routes from './src/routes/init_routes.js'
import BaseModel from './db/models/BaseModel.js'

const app = express()

const db = knex(config.db)

BaseModel.knex(db)

app.use(bodyParser.json())

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`)
})

init_routes(app)
