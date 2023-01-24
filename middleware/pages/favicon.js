const favicon_middleware = (req, res, next) => {
  console.log('favicon middleware')
  if (req.originalUrl.includes('favicon.ico')) {
    return res.sendStatus(204)
  }

  next()
}

export default favicon_middleware
