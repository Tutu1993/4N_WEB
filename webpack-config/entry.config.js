const path = require('path')
const dirVars = require('./base/dirVars.config.js')
const entryConfig = {}

entryConfig.vendor = ['prop-types', 'react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'jsDir/global.js']

entryConfig.index = path.resolve(dirVars.appDir, 'index.js')

module.exports = entryConfig
