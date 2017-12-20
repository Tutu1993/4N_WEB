import { store, history } from 'jsDir/store.js'

class Display01 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null
		}
	}
	componentDidMount() {
		this.setState({
			skrollr: skrollr.init()
		})
	}
	componentWillUnmount() {
		this.state.skrollr.destroy()
		this.setState({
			skrollr: null
		})
	}
	render() {
		return (
			<div>
				Hello World!
			</div>
		)
	}
}

export default Display01
