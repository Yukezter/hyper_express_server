import fs from 'fs'
import path from 'path'

const getFilesInDirectory = directory => {
  const files = []
  const getFilesRecursively = dir => {
    const filesInDirectory = fs.readdirSync(dir)
    for (const file of filesInDirectory) {
      const absolute = path.join(dir, file)
      if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute)
      } else {
        files.push(absolute)
      }
    }
  }

  getFilesRecursively(directory)
  return files.map(file => file.replace(new RegExp('\\\\', 'g'), '/'))
}

export default getFilesInDirectory
