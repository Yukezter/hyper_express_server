const is_admin = false

const admin_middleware = async (req, res) => {
  console.log('admin middleware')
  if (!is_admin) {
    res.status(403).end('Forbidden')
  }
}

export default admin_middleware
