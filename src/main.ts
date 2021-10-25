import mongoose from 'mongoose'
import databaseConfig from './config/database.config'
import crawler from './crawler'

const DB_CONNECTION_URL = `${databaseConfig.MONGO_HOSTNAME}:${databaseConfig.MONGO_PORT}/${databaseConfig.MONGO_DB}`

mongoose
	.connect(DB_CONNECTION_URL)
	.then(() => {
    crawler()
	})

