const is_authenticated = false

const auth_middleware = async (req, res) => {
  console.log('auth middleware')
  if (!is_authenticated) {
    res.status(403).end('Forbidden')
  }
}

export default auth_middleware
