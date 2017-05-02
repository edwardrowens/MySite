var React = require('react');

function WorkExperienceComponent(props) {
	return (
		<div className="workExperienceContainer">
			<a href={props.yearLink} target="_blank">
				<div id="workExperienceYearContainer">
					<div className="workExperienceYear">
						<h2 className="workExperienceYearText">{props.year}</h2>
					</div>
				</div>
			</a>
			<div className="workExperienceHead">
				<h3 className="workExperienceHeadText">{props.title}</h3>
				<p className="workExperienceSubheadingText">{props.subHeading}</p>
			</div>
			<div className="workExperienceBody">
				<p className="workExperienceBodyText">{props.body}</p>
			</div>
		</div>
	);
};

module.exports = WorkExperienceComponent;