import HyperExpress from 'hyper-express'
import pages_middleware from '../../middleware/pages/pages.js'
import auth_middleware from '../../middleware/pages/auth.js'
import admin_middleware from '../../middleware/pages/admin.js'
import getFilesInDirectory from '../../utils/getFilesInDirectory.js'

const regex = new RegExp('^views/(((public|private|admin)/)?)?')
const pages = getFilesInDirectory('./views').map(page => {
  const route = page.replace(regex, '').split('.')[0]
  return {
    filePath: page,
    private: page.startsWith('views/private/'),
    admin: page.startsWith('views/admin/'),
    route: route.startsWith('index') ? '/' : '/' + route,
  }
})

const router = new HyperExpress.Router()

pages.forEach(page => {
  const middlewares = [pages_middleware]
  if (page.private) {
    middlewares.push(auth_middleware)
    if (page.admin) {
      middlewares.push(admin_middleware)
    }
  }

  router.get(page.route, ...middlewares, async (req, res) => {
    await res.render(page.filePath)
  })
})

export default router
