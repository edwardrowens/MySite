var React = require('react');

function decideColors(color, fill) {
	var colors = [];
	
	for (var i=0; i < fill; ++i) {
			colors.push(color);
	}
	for (;i<5;++i) {
			colors.push('#ffffff');
	}
	return colors;
}

var SkillProgressBar = React.createClass({
	render: function() {
		var colors = decideColors(this.props.color, this.props.fill);

		return (
			<div className="skillProgressBarContainer">
				<h3 className="skillProgressBarHeader">{this.props.header}</h3>
				<div className="skillProgressBar">
					<ul className="masteryLevelList">
						<li className="masteryLevel" style={{backgroundColor:colors[0]}}>
							Beginner
						</li>
						<div className="masterLevelDivider"></div>
						<li className="masteryLevel" style={{backgroundColor:colors[1]}}>
							Familiar
						</li>
						<div className="masterLevelDivider"></div>
						<li className="masteryLevel" style={{backgroundColor:colors[2]}}>
							Proficient
						</li>
						<div className="masterLevelDivider"></div>
						<li className="masteryLevel" style={{backgroundColor:colors[3]}}>
							Expert
						</li>
						<div className="masterLevelDivider" style={{backgroundColor:colors[4]}}></div>
						<li className="masteryLevel">
							Master
						</li>
					</ul>
				</div>
			</div>
		);
	}	
});

module.exports = SkillProgressBar;