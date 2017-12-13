const path = require('path')
const dirVars = require('./base/dirVars.config.js')
const entryConfig = {}

entryConfig.vendor = ['history', 'prop-types', 'react', 'react-dom', 'react-redux', 'react-router-dom', 'react-router-redux', 'redux', 'redux-thunk', 'jsDir/global.js']

entryConfig.index = path.resolve(dirVars.appDir, 'index.js')

module.exports = entryConfig
