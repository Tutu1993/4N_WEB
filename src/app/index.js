require('cssDir/global/normalize.css')

import App from 'jsDir/app.js'

ReactDOM.render(
	<App />,
	document.querySelector('#main')
)

const log = console.log.bind(console)

log('apple')
