const dotenv = require('dotenv')

const envFound = dotenv.config()
if (!envFound) {
  throw new Error('No se encontrĂ³ el archivo .env')
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  port: process.env.PORT,
  api: {
    prefix: '/api/v1' 
  }
}