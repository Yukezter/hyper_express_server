import render from '../../utils/render.js'

const isAuthenticated = false

// Attatches a 'render' function to the response object
// The function sends a response back with ejs rendered html
const pages_middleware = (req, res, next) => {
  console.log('pages middleware')

  if (isAuthenticated) {
    return res.redirect('/')
  }

  res.render = async (path = req.path) => {
    try {
      const html = await render(path)
      res.status(200).html(html)
    } catch (err) {
      res.redirect('/404')
    }
  }

  next()
}

export default pages_middleware
