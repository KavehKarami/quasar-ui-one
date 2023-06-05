var rimraf = require('rimraf'),
  path = require('path')

rimraf.sync(path.resolve(__dirname, '../dist/*'))
rimraf.sync(path.resolve(__dirname, '../static/*'))
console.log(` 💥 Cleaned build artifacts.\n`)
