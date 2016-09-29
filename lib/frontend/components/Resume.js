var React = require('react');
var ResumePresentation = require('./ResumePresentation');
var DateInformation = require('./DateInformation');
var SkillProgressBar = require('./SkillProgressBar');

var Resume = React.createClass({
	/* 	getInitialState: function() {
 	return {content:""};
 },
 
 componentWillMount: function() {
 	var request = new XMLHttpRequest();
 	request.open('GET', 'resources/documents/webResume.txt', false);
 	request.send();
 
 	if (request.status === 200) {
 		this.setState({content: request.responseText});
 	} else {
 		this.setState({content: "The content could not be loaded."});
 		alert('Request unsuccessful: ' + request.status + ' from ' + request.responseURL);
 	}
 }, */

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ id: 'resume' },
				React.createElement(
					'div',
					{ className: 'resumeBlock' },
					React.createElement(
						'h1',
						null,
						'Work Experience'
					),
					React.createElement(DateInformation, { year: '2015',
						title: 'Consultant',
						subHeading: 'CHP Consulting',
						body: "Aided in developing, maintaining, and testing a large scale, OS agnostic, " + "and efficient web app in the asset finance industry used by multiple " + "clients internationally to service portfolios ranging from one to millions " + "of contracts. I accomplished this task utilizing Java and test driven development" }),
					React.createElement(DateInformation, { year: '2014',
						title: 'Junior Specialist',
						subHeading: 'UC Davis MIND Institute',
						body: "Utilized applied mathematical techniques (i.e. graph theory) to investigate " + "functional connectivity between regions of interest in the brain." }),
					React.createElement(DateInformation, { year: '2013',
						title: 'Research Assistant',
						subHeading: 'Rissman Memory Laboratory',
						body: "Programmed in many different languages such as Bash and MATLAB to conduct between " + "group analyses and inverse normalize subject’s to their native space for manual tracing" })
				),
				React.createElement(
					'div',
					{ className: 'resumeBlock' },
					React.createElement(
						'h1',
						null,
						'Education'
					),
					React.createElement(DateInformation, { year: '2014',
						title: 'UCLA',
						subHeading: 'B.S. Cognitive Science, specialization in computing',
						body: '' })
				),
				React.createElement(
					'div',
					{ className: 'resumeBlock' },
					React.createElement(
						'h1',
						null,
						'Languages'
					),
					React.createElement(SkillProgressBar, { color: '#cc99ff',
						fill: 4,
						header: 'Java' }),
					React.createElement(SkillProgressBar, { color: '#cc99ff',
						fill: 4,
						header: 'C++' }),
					React.createElement(SkillProgressBar, { color: '#cc99ff',
						fill: 3,
						header: 'JavaScript' }),
					React.createElement(SkillProgressBar, { color: '#cc99ff',
						fill: 2,
						header: 'SQL' }),
					React.createElement(SkillProgressBar, { color: '#cc99ff',
						fill: 2,
						header: 'Linux Scripting' })
				)
			),
			React.createElement(
				'form',
				{ method: 'get', action: '/downloads/resume' },
				React.createElement(
					'button',
					{ id: 'downloadButton', className: 'standardButton', type: 'submit' },
					'Download'
				)
			)
		);
	}
});

module.exports = Resume;