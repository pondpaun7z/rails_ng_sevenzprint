const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const html =  require('./loaders/html')
const sass =  require('./loaders/sass')

environment.loaders.append('typescript', typescript)
environment.loaders.insert('html', html)
environment.loaders.insert('sass', sass)

module.exports = environment
