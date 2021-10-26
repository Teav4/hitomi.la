import dotenv from 'dotenv'

dotenv.config()

export default {
  MONGO_HOSTNAME: process.env.MONGO_HOSTNAME,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_PASSWORD: encodeURIComponent(process.env.MONGO_PASSWORD + ''),
  MONGO_USERNAME: process.env.MONGO_USERNAME
}
