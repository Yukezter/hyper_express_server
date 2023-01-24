import fs from 'fs'
import path from 'path'

const get_files_in_directory = directory => {
  const files = []
  const get_files_recursively = dir => {
    const filesInDirectory = fs.readdirSync(dir)
    for (const file of filesInDirectory) {
      const absolute = path.join(dir, file)
      if (fs.statSync(absolute).isDirectory()) {
        get_files_recursively(absolute)
      } else {
        files.push(absolute)
      }
    }
  }

  get_files_recursively(directory)
  return files.map(file => file.replace(new RegExp('\\\\', 'g'), '/'))
}

export default get_files_in_directory
