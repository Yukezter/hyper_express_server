const not_found_middleware = async (req, res) => {
  res.redirect('/404')
}

export default not_found_middleware
