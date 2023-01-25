import render from '../../utils/render.js'

const is_authenticated = false

const public_middleware = async (req, res) => {
  console.log('public middleware')
  if (is_authenticated) {
    res.redirect('/')
  }
}

export default public_middleware
