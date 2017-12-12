import App from 'componentDir/App.js'

ReactDOM.render(
	<App />,
	document.querySelector('#main')
)

const log = console.log.bind(console)

log('apple')
