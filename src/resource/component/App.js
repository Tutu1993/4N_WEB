import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import Nav from 'componentDir/Nav.js'
import Footer from 'componentDir/Footer.js'
import Modal from 'componentDir/Modal.js'
import Index from 'componentDir/Index.js'
import Display01 from 'componentDir/Display01.js'

class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
			    <ConnectedRouter history={ history }>
					<div>
						<Nav />
						<Switch>
							<Route exact path="/" component={ Index }/>
							<Route exact path="/01-display" component={ Display01 }/>
						</Switch>
						<Footer />
						<Modal />
					</div>
			    </ConnectedRouter>
			</Provider>
		)
	}
}

export default App
