import HyperExpress from 'hyper-express'
import auth_middleware from '../../middleware/api/auth.js'
import * as auth from '../../controllers/auth.js'
import * as account from '../../controllers/account.js'

const api_router = new HyperExpress.Router()

// Public API routes
api_router.post('/auth/login', auth.email_login)
api_router.post('/auth/register', auth.register_email)
api_router.post('/auth/discord/login', auth.discord_login)
api_router.post('/auth/discord/callback', auth.discord_callback)
api_router.post('/logout', auth.logout)

// Private API routes
api_router.get('/accounts/link', auth_middleware, account.link)
api_router.get('/discord/link/callback', auth_middleware, account.link_callback)
api_router.get('/unlink', auth_middleware, account.unlink)
api_router.get('/setPassword', auth_middleware, account.set_password)
api_router.get('/updateProfile', auth_middleware, account.update_profile)

// 404 handler for API routes (not pages)
api_router.all('*', (req, res) => {
  res.status(404).send('NOT_FOUND')
})

export default api_router
