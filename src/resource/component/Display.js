import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'
import style from 'cssDir/display/display.css'

class DisplayContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null,
		}
		this.handleScroll = this.handleScroll.bind(this)
	}
	componentDidMount() {
		this.setState({
			skrollr: skrollr.init(),
		})
		delay(0).then(() => {
			const { lastPage } = this.props
			if (lastPage !== '') {
				if (lastPage !== '01-display') {
					console.log('F5')
				}
			}
			this.state.skrollr.setScrollTop(400)
			addScrollHandler(this.handleScroll)
		})
	}
	componentWillUnmount() {
		this.state.skrollr.destroy()
		this.setState({
			skrollr: null,
		})
		removeScrollHandler(this.handleScroll)
		this.props.updateLastPage('01-display')
	}
	handleScroll() {
		if (this.state.skrollr.getScrollTop() < 100) {
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['00', '欢迎']
				loaderToNext(date)
				delay(3000).then(() => {
					loaderToReset(date)
					// history.push('/')
				})
			}
		}
		if (this.state.skrollr.getScrollTop() > 13214) {
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['02', '动画']
				loaderToNext(date)
				delay(3000).then(() => {
					loaderToReset(date)
					// history.push('/')
				})
			}
		}
	}
	render() {
		return (
			<div className={ style.box }>
				<div className={ style.functionality } data-1124="left: 0%;" data-1924="left: -50%;">
					<div className={ style.text_box }>
						<h2>功能性</h2>
						<div className={ style.text_word }>
							<p>4N的基本理念是增加表盘上的数字，以便集中显示。<br />为做到这一点，<br />MVT01/D01使用了十个表盘而不是三个：<br />在框架结构内的四个表盘用于显示小时，一个表盘用于显示十分钟，五个表盘用于显示分钟（它们均在一个框架结构内）。这些表盘通过拦截和覆盖以在手表中心位置完美显示时间。数字尺寸极大（5.5毫米），有助舒适性和无与伦比的易读性。虽然跳时功能很常见，但同时具备小时跳时和分钟跳时则是罕见的制表工艺。市场上极为少见这种卓越 钟表产品，原因非常显而易见：分钟跳时的有效扭矩非常低（一小时恰好六十次）。实际上，跳时触发 器和表盘分度机构很可能干扰该运动的等时性。挑战是要设计一个节能的机械跳时触发器和表盘分度机构，特别是涉及的不是三个表盘而是十个。</p>
							<div className={ style.logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
					</div>
					<div className={ style.f_img } data-400="background-position-y: 0px;" data-424="background-position-y: 0px;" data-425="background-position-y: -365px;" data-449="background-position-y: -365px;" data-450="background-position-y: -730px;" data-474="background-position-y: -730px;" data-475="background-position-y: -1095px;" data-499="background-position-y: -1095px;" data-500="background-position-y: -1460px;" data-524="background-position-y: -1460px;" data-525="background-position-y: -1825px;" data-549="background-position-y: -1825px;" data-550="background-position-y: -2190px;" data-574="background-position-y: -2190px;" data-575="background-position-y: -2555px;" data-599="background-position-y: -2555px;" data-600="background-position-y: -2920px;" data-624="background-position-y: -2920px;" data-625="background-position-y: -3285px;" data-649="background-position-y: -3285px;" data-650="background-position-y: -3650px;" data-674="background-position-y: -3650px;" data-675="background-position-y: -4015px;" data-699="background-position-y: -4015px;" data-700="background-position-y: -4380px;" data-724="background-position-y: -4380px;" data-725="background-position-y: -4745px;" data-749="background-position-y: -4745px;" data-750="background-position-y: -5110px;" data-774="background-position-y: -5110px;" data-775="background-position-y: -5475px;" data-799="background-position-y: -5475px;" data-800="background-position-y: -5840px;" data-824="background-position-y: -5840px;" data-825="background-position-y: -6205px;" data-849="background-position-y: -6205px;" data-850="background-position-y: -6570px;" data-874="background-position-y: -6570px;" data-875="background-position-y: -6935px;" data-899="background-position-y: -6935px;" data-900="background-position-y: -7300px;" data-924="background-position-y: -7300px;"></div>
				</div>
				<div className={ style.mechanism } data-1124="left: 100%;" data-1924="left: 0%;" data-5324="left: 0%;" data-6124="left: -50%;">
					<div className={ style.text_box }  data-1124="padding-left: 100%;" data-1924="padding-left: 0%;">
						<h2>机械机构</h2>
						<div className={ style.text_word }  data-1124="padding-left: 250%;" data-1924="padding-left: 0%;">
							<p>4N MVT01 D01表盘分度的主要机构即精密复杂，又极具创新性：每个表盘被连接到一组被固定齿圈啮合的齿轮上。在跳时时，框架旋转，导致所有表盘通过齿圈的方式自己旋转。与传统的齿轮和弹簧或马耳 他十字机构相比，该分度机构保证了最小的能量消耗。<br />由于采用了恒定动力装置，两次跳时之间一个螺旋弹簧翘起，框架被激活开始旋转。<br />这组运动的框架、表盘、表盘分度和卷绕的弹簧是不受发条盒的卷绕程度影响的，跳时不会影响该运动 的等时性，即使卷绕张力很低。MVT01/D01提供237小时或接近10天的动力储存，远远超过所有高级表 型，显示复杂，每一分钟都能完整显示，令人印象深刻。</p>
							<div className={ style.logo } data-1124="padding-left: 500%;" data-1924="padding-left: 0%;">
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
					</div>
					<div className={ style.m_img } data-1124="padding-left: 300%;" data-1924="padding-left: 0%;">
						<div data-2124="top: -670px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-20.png') } />
						</div>
						<div data-2124="top: 860px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-19.png') } />
						</div>
						<div data-2124="top: 770px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-18.png') } />
						</div>
						<div data-2124="top: 680px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-17.png') } />
						</div>
						<div data-2124="top: 590px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-16.png') } />
						</div>
						<div data-2124="top: 500px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-15.png') } />
						</div>
						<div data-2124="top: 410px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-14.png') } />
						</div>
						<div data-2124="top: 320px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-13.png') } />
						</div>
						<div data-2124="top: 230px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-12.png') } />
						</div>
						<div data-2124="top: 140px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-11.png') } />
						</div>
						<div data-2124="top: 50px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-10.png') } />
						</div>
						<div data-2124="top: -40px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-09.png') } />
						</div>
						<div data-2124="top: -130px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-08.png') } />
						</div>
						<div data-2124="top: -220px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-07.png') } />
						</div>
						<div data-2124="top: -310px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-06.png') } />
						</div>
						<div data-2124="top: -400px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-05.png') } />
						</div>
						<div data-2124="top: -490px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-04.png') } />
						</div>
						<div data-2124="top: -580px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-03.png') } />
						</div>
						<div data-2124="top: -670px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-02.png') } />
						</div>
						<div data-2124="top: -760px;" data-5124="top: 0px;">
							<img src={ require('imgsDir/display/mechanism-01.png') } />
						</div>
					</div>
				</div>
				<div className={ style.specific } data-5324="left: 100%;" data-6124="left: 0%;" data-10324="left: 0%;" data-11124="left: -50%;">
					<div className={ style.s_box } data-5524="left: 413px;" data-10324="left: -2800px;">
						<div className={ style.s_title }>
							<h2>具体技术特点</h2>
							<div className={ style.logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
						<div className={ style.s_top_line }>
							<div data-6164="padding-left: 123px;" data-8164="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-01.png') }/>
							</div>
							<div data-7244="padding-left: 144px;" data-9244="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-02.png') }/>
							</div>
							<div data-6364="padding-left: 129px;" data-8364="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-03.png') }/>
							</div>
							<div data-6724="padding-left: 135px;" data-8724="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-04.png') }/>
							</div>
							<div data-7924="padding-left: 160px;" data-9924="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-05.png') }/>
							</div>
						</div>
						<div className={ style.s_bot_line }>
							<div data-6124="padding-left: 122px;" data-8124="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-06.png') }/>
							</div>
							<div data-6244="padding-left: 126px;" data-8244="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-07.png') }/>
							</div>
							<div data-7564="padding-left: 152px;" data-9564="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-08.png') }/>
							</div>
							<div data-6524="padding-left: 132px;" data-8524="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-09.png') }/>
							</div>
							<div data-6964="padding-left: 140px;" data-8964="padding-left: 0px;">
								<img src={ require('imgsDir/display/specific-10.png') }/>
							</div>
						</div>
						<div data-8324="padding-left: 174px;" data-10324="padding-left: 0px;">
							<img src={ require('imgsDir/display/specific-11.png') }/>
						</div>
					</div>
				</div>
				<div className={ style.watchmaking } data-10324="left: 100%;" data-11124="left: 0%;">
					<div className={ style.w_box } data-10324="left: 413px; width: 3000px;" data-12924="left: -1000px; width: 2500px;">
						<div className={ style.w_title }>
							<h2>高级制表</h2>
							<p>4N是基于一个特别创新的制表复合体以及惊人的小时跳时和分钟跳时。许多特性让这款表独一无二：该 复合体的独特性、零件数量（514）、该装置的复杂性以及按照高级制表业最纯粹的传统完全手工打造 的成品质量。</p>
							<div className={ style.logo }>
								<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
								<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
							</div>
						</div>
						<div className={ style.w_top_line }>
							<div data-10924="padding-left: 129px;" data-12124="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-01.png') }/>
							</div>
							<div data-11044="padding-left: 136px;" data-12244="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-02.png') }/>
							</div>
							<div data-11324="padding-left: 145px;" data-12524="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-03.png') }/>
							</div>
							<div data-11764="padding-left: 161px;" data-12964="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-04.png') }/>
							</div>
						</div>
						<div className={ style.w_bot_line }>
							<div data-10964="padding-left: 132px;" data-12164="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-05.png') }/>
							</div>
							<div data-11164="padding-left: 140px;" data-12364="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-06.png') }/>
							</div>
							<div data-11524="padding-left: 152px;" data-12724="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-07.png') }/>
							</div>
							<div data-11764="padding-left: 161px;" data-12964="padding-left: 0px;">
								<img src={ require('imgsDir/display/watchmaking-08.png') }/>
							</div>
						</div>
					</div>
				</div>
				<div className={ style.cover } data-0="opacity: 0.8;" data-400="opacity: 0;" data-12914="opacity: 0;" data-13314="opacity: 0.8;"></div>
			</div>
		)
	}
}

DisplayContainer.propTypes = {
	lastPage: PropTypes.string.isRequired,
	loader: PropTypes.object.isRequired,
	loaderToNext: PropTypes.func.isRequired,
	loaderToReset: PropTypes.func.isRequired,
	updateLastPage: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		lastPage: state.lastPage,
		loader: state.loader,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		loaderToNext: (...args) => store.dispatch(loaderToNext(...args)),
		loaderToReset: (...args) => store.dispatch(loaderToReset(...args)),
		updateLastPage: (...args) => store.dispatch(updateLastPage(...args)),
	}
}
const Display = connect(
	mapStateToProps,
	mapDispatchToProps
)(DisplayContainer)

export default Display
