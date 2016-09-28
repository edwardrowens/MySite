var React = require('react');

function DateInformation(props) {
	return (
		<div className="dateInformationContainer">
			<div className="dateInformationYear">
				<h2 className="dateInformationYearText">{props.year}</h2>
			</div>
			<div className="dateInformationHead">
				<h2 className="dateInformationHeadText">{props.title}</h2>
				<p className="dateInformationSubheadingText">{props.subHeading}</p>
			</div>
			<div className="dateInformationBody">
				<p className="dateInformationBodyText">{props.body}</p>
			</div>
		</div>
	);
};

module.exports = DateInformation;