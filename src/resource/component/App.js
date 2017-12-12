import { Provider } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import Nav from 'componentDir/Nav.js'
import Footer from 'componentDir/Footer.js'
import CounterBox from 'componentDir/CounterBox.js'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
			    <ConnectedRouter history={history}>
					<div>
						<Nav />
						<Switch>
							<Route path="/" component={CounterBox}/>
						</Switch>
						<Footer />
					</div>
			    </ConnectedRouter>
			</Provider>
		)
	}
}

export default App
