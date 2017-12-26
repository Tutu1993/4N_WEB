require('cssDir/animation/videosList.css')

const videos = [{
		img: 'animation/video-1.jpg',
		title: 'Animation',
		summary: '4N claims a totally new and innovating complication of jumping hours and jumping minutes: each minute, the dial of the MVT-01/D01 comes alive to display the new time.',
	},
	{
		img: 'animation/video-2.jpg',
		title: 'Spectacular',
		summary: 'Spectacular and surprising,  this watchmaking complication chants time by its perpetual metamorphosis. Every minute, all five discs dedicated to the minutes come alive.  At the passage of hours, these are now the ten discs of the complication which are set in motion.',
	},
	{
		img: 'animation/video-3.jpg',
		title: 'Magic<br />and poetic',
		summary: 'Echoing to the resonance of the sprung balance which animates the dial, the jumping minutes and hours generate a poetic pulsation during a magic instant, recreated each time.  In successive strata,  the dial displays the subtle complexity of the display mechanism, through its discs carousel.',
	},
	{
		img: 'animation/video-4.jpg',
		title: 'Technical<br />prowess',
		summary: 'The technical and ergonomic stakes have founded the architecture and design of this complication. Three subset can independently enter in motion at the moment of the hour jump : The hour cage on the left side with its 4 discs, the disc of the tens of minutes at the center, and the minute cage with its 5 discs on the right. This display principle which allows the digital hour to stand majestically at the center of the dial, hides an extremely sophisticated kinematics, protected by several patents. The overall movement contains 520 components with 86 rubies.',
	}]

const VideosList = videos.map((video, index) => {
	return (
		<div className="ab-video" key={ index }>
			<div className="ab-v-box">
				<div className="ab-v-img" style={ {background: `black url(${ require('imgsDir/' + video.img) }) no-repeat center center`} }></div>
				<div className="ab-v-play"></div>
				<div className="ab-v-text">
					<h2>{ video.title }</h2>
					<p>{ video.summary }</p>
					<div className="ab-v-logo">
						<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
						<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
					</div>
				</div>
			</div>
		</div>
	)
})

export default VideosList
