import { Provider } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import CounterBox from 'componentDir/CounterBox.js'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
			    <ConnectedRouter history={history}>
					<div>
						<ul>
							<li><Link to="/">Home</Link></li>
						</ul>
						<hr/>
						<Switch>
							<Route path="/" component={CounterBox}/>
						</Switch>
					</div>
			    </ConnectedRouter>
			</Provider>
		)
	}
}

export default App
