var React = require('react');

function DateInformation(props) {
	return (
		<div className="dateInformationContainer">
			<a href={props.yearLink} target="_blank">
				<div className="dateInformationYear">
					<h2 className="dateInformationYearText">{props.year}</h2>
				</div>
			</a>
			<div className="dateInformationHead">
				<h3 className="dateInformationHeadText">{props.title}</h3>
				<p className="dateInformationSubheadingText">{props.subHeading}</p>
			</div>
			<div className="dateInformationBody">
				<p className="dateInformationBodyText">{props.body}</p>
			</div>
		</div>
	);
};

module.exports = DateInformation;