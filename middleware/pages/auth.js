const is_authenticated = false

const auth_middleware = async (req, res) => {
  console.log('auth middleware')
  if (!is_authenticated) {
    res.redirect('/auth/login')
  }
}

export default auth_middleware
