import path from 'path'
import fs from 'fs'

const dir = path.resolve('assets')

var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript',
}

const serve_static_handler = (req, res) => {
  const file = path.join(dir, req.path.replace('/assets', ''))
  if (file.indexOf(dir + path.sep) !== 0) {
    return res.status(403).end('Forbidden')
  }

  const type = mime[path.extname(file).slice(1)] || 'text/plain'
  const stream = fs.createReadStream(file)

  stream.on('open', () => {
    res.set('Content-Type', type)
    stream.pipe(res)
  })

  stream.on('error', () => {
    res.set('Content-Type', 'text/plain')
    res.status(404).send('Not found')
  })
}

export default serve_static_handler
