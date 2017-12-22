require('cssDir/global/modal/presseList.css')

class PresseList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { clickFunc } = this.props
		return (
			<div className="gm-presse">
				<h1>文章媒体</h1>
				<div className="gm-click">
					<span>
						<a href="mailto:contactpress@4-n.fr&#9;" target="_blank">contactpress@4-n.fr</a>
					</span>
					<span>文章媒体：
						<a href="http://www.4nparis.com/press/presskit4N_2016_texts.zip">评论文章</a>&nbsp;/&nbsp;
						<a href="http://www.4nparis.com/press/presskit4N_2016_pictures.zip">像片</a>&nbsp;/&nbsp;
						<a href="http://www.4nparis.com/press/presskit4N_2016_videos.zip">短片</a>
					</span>
					<span>
						<a onClick={ clickFunc }>预定4N的新闻通讯</a>
					</span>
				</div>
				<div className="gm-form">
					<span>预定4N的新闻通讯</span>
					<form action="/interface/post.php" method="post">
						<input type="text" name="email" placeholder="email" />
						<input type="submit" name="submit" value="OK" />
					</form>
				</div>
			</div>
		)
	}
}

PresseList.propTypes = {
	clickFunc: PropTypes.func.isRequired,
}

export default PresseList
