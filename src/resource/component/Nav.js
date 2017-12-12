import { Link } from 'react-router-dom'
import style from 'cssDir/global/nav.css'

class Nav extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<nav className={ style.nav }>
				<Link to="/" className={ style.logo }></Link>
				<div className={ style.link }>
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
