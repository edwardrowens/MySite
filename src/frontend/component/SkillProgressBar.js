var React = require('react');
var SkillProgressBarService = require('../services/SkillProgressBarService');

var SkillProgressBar = React.createClass({
	render: function() {
		var colors = SkillProgressBarService.decideColors(this.props.color, this.props.fill);

		return (
			<div className="skillProgressBarContainer">
			<h5 className="skillProgressBarHeader">{this.props.header}</h5>
				<div className="skillProgressBar">
					<ul className="masteryLevelList">
						<li className="masteryLevel" style={{backgroundColor:colors[0], borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
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