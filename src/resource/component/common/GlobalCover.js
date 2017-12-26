require('cssDir/common/globalCover.css')

class GlobalCover extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="global-cover" { ...this.props }></div>
		)
	}
}

export default GlobalCover
