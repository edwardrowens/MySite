var React = require('react');

function ResumePresentation(props) {
	return (
		<div>
			<div dangerouslySetInnerHTML={{__html:marked(props.content)}}></div>
			<button className="standardButton" onClick={props.handleDownloadClick}>
				Submit
			</button>
		</div>
	);
};

module.exports = ResumePresentation;