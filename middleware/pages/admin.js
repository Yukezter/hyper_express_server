const is_admin = false

const admin_middleware = async (req, res) => {
  console.log('admin middleware')
  if (!is_admin) {
    res.redirect('/403')
  }
}

export default admin_middleware
