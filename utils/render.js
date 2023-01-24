import ejs from 'ejs'

const render = path =>
  new Promise((resolve, reject) => {
    ejs.renderFile(path, (err, str) => {
      if (err) {
        reject(err)
      } else {
        resolve(str)
      }
    })
  })

export default render
