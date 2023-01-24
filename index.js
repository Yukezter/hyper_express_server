import HyperExpress from 'hyper-express'

import ignore_favicon_middleware from './middleware/pages/favicon.js'
import serve_static_handler from './handlers/serve_static_handler.js'
import not_found_handler from './handlers/not_found_handler.js'
import error_handler from './handlers/error_handler.js'
import api_router from './routes/api/index.js'
import pages_router from './routes/pages/index.js'

const server = new HyperExpress.Server()
const PORT = process.env.PORT || 8000

server.use('/api', api_router)
server.use('/favicon.ico', ignore_favicon_middleware)
server.use('/assets', serve_static_handler)
server.use(pages_router)
server.set_not_found_handler(not_found_handler)
server.set_error_handler(error_handler)

server
  .listen(PORT)
  .then(socket => console.log(`Server started on port ${PORT}`))
  .catch(error => console.log(`Failed to start server on port ${PORT}`))
