const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const html =  require('./loaders/html')

environment.loaders.append('typescript', typescript)
environment.loaders.insert('html', html)

module.exports = environment
