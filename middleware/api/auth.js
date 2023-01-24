const isAuthenticated = false

const auth_middleware = async (req, res) => {
  console.log('auth middleware')
  if (!isAuthenticated) {
    res.status(403).send('FORBIDDEN')
  }
}

export default auth_middleware
