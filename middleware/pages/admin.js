const isAdmin = false

const admin_middleware = async (req, res) => {
  console.log('admin middleware')
  if (!isAdmin) {
    res.redirect('/403')
  }
}

export default admin_middleware
