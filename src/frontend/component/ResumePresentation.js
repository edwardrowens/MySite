var React = require('react');
var marked = require('marked');

function ResumePresentation(props) {
	return (
		<div>
			<div dangerouslySetInnerHTML={{__html:marked(props.content)}}></div>
			<form method="get" action="/downloads/resume">
				<button id="downloadButton" className="standardButton" type="submit">
					Download
				</button>
			</form>
		</div> 
	);
};

module.exports = ResumePresentation;