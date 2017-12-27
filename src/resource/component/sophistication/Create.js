require('cssDir/sophistication/create.css')

class Create extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { isToggle } = this.props
		const text = !isToggle ? (
			<div>
				Audemars Piguet于1875年创立于La Vallée de Joux中心位置的Le Brassus。这家著名机构通过其多项 钟表创新建立了声誉，其中有些创新特别关注数字时间显示。 1921年，Audemars Piguet打造了首只跳时腕表。传奇的星轮，带有三个选择表盘的“漫游时间”手表，于1990年面世。<br />同一时间，Giulio Papi和Dominique Renaud根据他们在Audemars Piguet (AP)获得的经验，创建 了自己的复合机械表企业。该企业增长迅速，促使其创始人寻找一位合作伙伴。1992年，Audemars Piguet成为大股东，该公司更名为Audemars Piguet (Renaud et Papi) SA。这些年来，它以确立了自己在高端精密钟表生产领域的领导者地位。<br />今天，APRP可以宣称自己创造了世界上一些最精致的手表，包括Harry Winston Opus 8、超凡脱俗的 Chanel J12和Rafael Nadal的Tourbillon (RM027)。
			</div>
		) :(
			<div>
				秉承这一著名遗产的精神 Audemars Piguet Renaud & Papi (APRP)同意开发和制造MVT01/D01。APRP将其专业和技术特长赋予了4N品牌。事实上，该工厂的创新精神、其高度先进的生产方法和完美的 技术能力，赋予了它无与伦比的声誉，清晰地奠定了4N在当代制表业内的地位。<br />这种合作关系带来了大量技术创新：完全手工打造的精密成品配得上高级制表业的声誉，并且选择和使 用了优质材料。这种出色程度也体现在表面上的螺钉摆轮的开发以及围绕双发条盒建立的10天动力储存 运动中。<br />这一卓越运动包含了514个零件，其中有78颗红宝石。
			</div>
		)
		return (
			<div className="sb-create" data-2200="left: 0%;" data-3000="left: -50%;">
				<div className="sb-text-box">
					<h2>制造</h2>
					<div className="sb-text-word">
						<p style={{ height: !isToggle ? "272px" : "187px" }}>
							{ text }
						</p>
						<div className="sb-logo">
							<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
							<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
						</div>
					</div>
				</div>
				<div className="sb-c-img">
					<div data-600="top: 0px;" data-800="top: -475px;" data-900="top: -475px;" data-1100="top: -950px;" data-1200="top: -950px;" data-1400="top: -1425px;" data-1500="top: -1425px;" data-1700="top: -1900px;" data-1800="top: -1900px;" data-2000="top: -2375px;">
						<img src={ require('imgsDir/sophistication/create-1.jpg') } />
						<img src={ require('imgsDir/sophistication/create-2.jpg') } />
						<img src={ require('imgsDir/sophistication/create-3.jpg') } />
						<img src={ require('imgsDir/sophistication/create-4.jpg') } />
						<img src={ require('imgsDir/sophistication/create-5.jpg') } />
						<img src={ require('imgsDir/sophistication/create-6.jpg') } />
					</div>
				</div>
			</div>
		)
	}
}

Create.propTypes = {
	isToggle: PropTypes.bool.isRequired,
}

export default Create
