var React = require('react');
var marked = require('marked');

function ResumePresentation(props) {
	return (
		<div>
			<div dangerouslySetInnerHTML={{__html:marked(props.content)}}></div>
			<button id="downloadButton" className="standardButton" onClick={props.handleDownloadClick}>
				Download
			</button>
		</div>
	);
};

module.exports = ResumePresentation;