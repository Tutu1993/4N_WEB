import { Link } from 'react-router-dom'

require('cssDir/global/nav.css')

class Nav extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<nav className="global-nav">
				<Link to="/" className="gn-logo"></Link>
				<div className="gn-link">
					<a href="https://twitter.com/4N_PARIS" target="_blank" rel="nofollow"></a>
					<a href="https://www.facebook.com/4Nwatches" target="_blank" rel="nofollow"></a>
					<a href="http://www.pinterest.com/francoisquentin/4n" target="_blank" rel="nofollow"></a>
					<a href="http://www.pinterest.com/francoisquentin/4n" target="_blank" rel="nofollow"></a>
					<a href="http://www.youtube.com/user/4Nwatch/videos" target="_blank" rel="nofollow"></a>
				</div>
			</nav>
		)
	}
}

export default Nav
