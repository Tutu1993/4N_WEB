import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import Nav from 'componentDir/Nav.js'
import Footer from 'componentDir/Footer.js'
import Loader from 'componentDir/Loader.js'
import Modal from 'componentDir/modal/Modal.js'
import Welcome from 'componentDir/welcome/Welcome.js'
import Display from 'componentDir/Display.js'

class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
			    <ConnectedRouter history={ history }>
					<div>
						<Nav />
						<Switch>
							<Route exact path="/" component={ Welcome }/>
							<Route exact path="/01-display" component={ Display }/>
						</Switch>
						<Footer />
						<Loader />
						<Modal />
					</div>
			    </ConnectedRouter>
			</Provider>
		)
	}
}

export default App
