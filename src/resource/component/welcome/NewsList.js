import { Link } from 'react-router-dom'
require('cssDir/welcome/newsList.css')

const newsArr = [
	{
		time: '30 三月 2017',
		title: '4N SAPPHIRE PLANET BLUE',
		img: require('imgsDir/welcome/170330032559.jpg'),
		href: '/news',
	},
	{
		time: '18 十一月 2016',
		title: '4N & Camille LACOURT',
		img: require('imgsDir/welcome/161118104010.jpg'),
		href: '/news',
	},
	{
		time: '24 十月 2016',
		title: '4N SAPPHIRE PLANET 2016',
		img: require('imgsDir/welcome/161024150404.jpg'),
		href: '/news',
	},
	{
		time: '24 十月 2016',
		title: '4N AT SALON QP 2016',
		img: require('imgsDir/welcome/161024145536.jpg'),
		href: '/news',
	},
]
const NewsList = newsArr.map((value, index) => {
	return (
		<div key={ index }>
			<div className="wb-list-head">
				<span>{ value.time }</span>
				<div className="wb-list-logo">
					<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
					<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
				</div>
			</div>
			<div className="wb-list-title">{ value.title }</div>
			<div className="wb-list-img" style={ {background: `url(${ value.img }) no-repeat center center`, backgroundSize: 'contain'} }></div>
			<Link className="wb-list-link" to={ value.href }>了解更多</Link>
		</div>
	)
})

export default NewsList
