import { Link } from 'react-router-dom'
import style from 'cssDir/index/index.css'

class Index extends React.Component {
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
		const img = require('imgsDir/index/161118104010.jpg')
		console.log(img)
		return (
			<div className={ style.box }>
				<div className={ style.welcome } data-0="top: 0%" data-400="top: -100%">
					<span>欢迎4N网站</span>
				</div>
				<div className={ style.welcome_img } data-0="left: -850px;" data-800="left: 0px;"></div>
				<div className={ style.list_box } data-800="left: 100%;" data-4800="left: -150%;">
					<div>
						<div className={ style.list_head }>
							<span>18 十一月 2016</span>
							<div className={ style.list_logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
						<div className={ style.list_title }>
							4N & Camille LACOURT
						</div>
						<div className={ style.list_img}></div>
						<Link className={ style.list_link } to="/news">了解更多</Link>
					</div>
					<div>
						<div className={ style.list_head }>
							<span>18 十一月 2016</span>
							<div className={ style.list_logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
						<div className={ style.list_title }>
							4N & Camille LACOURT
						</div>
						<div className={ style.list_img}></div>
						<Link className={ style.list_link } to="/news">了解更多</Link>
					</div>
					<div>
						<div className={ style.list_head }>
							<span>18 十一月 2016</span>
							<div className={ style.list_logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
						<div className={ style.list_title }>
							4N & Camille LACOURT
						</div>
						<div className={ style.list_img}></div>
						<Link className={ style.list_link } to="/news">了解更多</Link>
					</div>
					<div>
						<div className={ style.list_head }>
							<span>18 十一月 2016</span>
							<div className={ style.list_logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
						<div className={ style.list_title }>
							4N & Camille LACOURT
						</div>
						<div className={ style.list_img}></div>
						<Link className={ style.list_link } to="/news">了解更多</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Index
