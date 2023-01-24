const error_middleware = (req, res, err) => {
  console.log('error:', err)
  res.send('error!')
}

export default error_middleware
