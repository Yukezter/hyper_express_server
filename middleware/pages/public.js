import render from '../../utils/render.js'

const isAuthenticated = false

const public_middleware = (req, res, next) => {
  console.log('pages middleware')

  if (isAuthenticated) {
    return res.redirect('/')
  }

  next()
}

export default public_middleware
