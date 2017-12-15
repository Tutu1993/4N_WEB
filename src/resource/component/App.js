import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
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
							<Route path="/" render={()=>(
								<div style={ {height: "9000px"} }>
									<div>hello world</div>
									<div>hello world</div>
									<div>hello world</div>
									<div style={ {height: "500px"} }>hello world</div>
									<div>hello world</div>
									<div>hello world</div>
									<div>hello world</div>
									<div data-0="background-color:rgb(0,0,255);" data-500="background-color:rgb(255,0,0);">hello world</div>
								</div>
							)}/>
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
