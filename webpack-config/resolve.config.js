const dirVars = require('./base/dirVars.config.js')
const moduleExports = {
	alias: {
		componentDir: dirVars.componentDir,
		cssDir: dirVars.cssDir,
		imgsDir: dirVars.imgsDir,
		jsDir: dirVars.jsDir,
		reducerDir: dirVars.reducerDir,
		vendorDir: dirVars.vendorDir,
	},
}

module.exports = moduleExports
