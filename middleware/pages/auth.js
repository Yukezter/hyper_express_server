const isAuthenticated = false

const auth_middleware = async (req, res) => {
  console.log('auth middleware')
  if (!isAuthenticated) {
    res.redirect('/auth/login')
  }
}

export default auth_middleware
