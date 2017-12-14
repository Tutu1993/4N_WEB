import { Provider } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import Nav from 'componentDir/Nav.js'
import Footer from 'componentDir/Footer.js'
import Modal from 'componentDir/Modal.js'
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
			    <ConnectedRouter history={history}>
					<div>
						<Nav />
						<Switch>
							<Route path="/" render={()=>(<div>
								hello world
								<div>hello world</div>
								<div>hello world</div>
								<div>hello world</div>
								<div>hello world</div>
								<div>hello world</div>
								<div>hello world</div>
								<div>hello world</div>
								<div>hello world</div>
								</div>)}/>
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
