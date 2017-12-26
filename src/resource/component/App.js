import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import Nav from 'componentDir/global/Nav.js'
import Footer from 'componentDir/global/Footer.js'
import Loader from 'componentDir/global/Loader.js'
import Modal from 'componentDir/modal/Modal.js'
import Welcome from 'componentDir/welcome/Welcome.js'
import Display from 'componentDir/display/Display.js'
import Animation from 'componentDir/animation/Animation.js'

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
							<Route exact path="/02-animation" component={ Animation }/>
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
