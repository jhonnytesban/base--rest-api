const express = require('express')
const app = express()
const morgan = require('morgan')
const config = require('./config/index')

const middleware = () => {
  app.use(express.json())
  app.use(morgan('tiny'))
}

const routes = () => {
  app.head('/status', (req, res) => {
    res.status(200).end()
  })
  app.use(`${config.api.prefix}/user`, require('./routes/user.routes'))
}

const start = () => {
  app.listen(config.port, () => {
    console.log(`Servidor levantado en el puerto ${config.port}`)
  })
}

const startServer = () => {
  middleware()
  routes()
  start()
}

module.exports = startServer