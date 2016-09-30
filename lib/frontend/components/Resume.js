var React = require('react');
var ResumePresentation = require('./ResumePresentation');
var DateInformation = require('./DateInformation');
var SkillProgressBar = require('./SkillProgressBar');

var Resume = React.createClass({
	componentDidMount: function () {
		document.title = "Resume";
	},

	render: function () {
		return React.createElement(
			'div',
			{ id: 'resumeContainer' },
			React.createElement(
				'div',
				{ id: 'resume' },
				React.createElement(
					'div',
					{ id: 'experienceBlocks' },
					React.createElement(
						'div',
						{ className: 'resumeBlock' },
						React.createElement(
							'h2',
							null,
							'Work Experience'
						),
						React.createElement(DateInformation, { yearLink: 'http://www.chpconsulting.com/',
							year: '2015',
							title: 'Consultant',
							subHeading: 'CHP Consulting',
							body: "Aided in developing, maintaining, and testing a large scale, OS agnostic, " + "and efficient web app in the asset finance industry used by multiple " + "clients internationally to service portfolios ranging from one to millions " + "of contracts. I accomplished this task utilizing Java and test driven development" }),
						React.createElement(DateInformation, { yearLink: 'http://www.ucdmc.ucdavis.edu/mindinstitute/research/solomon_lab/index.html',
							year: '2014',
							title: 'Junior Specialist',
							subHeading: 'UC Davis MIND Institute',
							body: "Utilized applied mathematical techniques (i.e. graph theory) to investigate " + "functional connectivity between regions of interest in the brain." }),
						React.createElement(DateInformation, { yearLink: 'http://rissmanlab.psych.ucla.edu/rissmanlab/Home.html',
							year: '2013',
							title: 'Research Assistant',
							subHeading: 'Rissman Memory Laboratory',
							body: "Programmed in many different languages such as Bash and MATLAB to conduct between " + "group analyses and inverse normalize subject’s to their native space for manual tracing" })
					),
					React.createElement(
						'div',
						{ className: 'resumeBlock' },
						React.createElement(
							'h2',
							null,
							'Education'
						),
						React.createElement(DateInformation, { year: '2014',
							title: 'UCLA',
							subHeading: 'B.S. Cognitive Science, specialization in computing',
							body: '' })
					)
				),
				React.createElement(
					'div',
					{ id: 'skillBlocks' },
					React.createElement(
						'div',
						{ className: 'resumeBlock' },
						React.createElement(
							'h2',
							null,
							'Skills'
						),
						React.createElement(
							'h3',
							null,
							'Languages'
						),
						React.createElement(SkillProgressBar, { header: 'Java',
							color: '#cc99ff',
							fill: 4 }),
						React.createElement(SkillProgressBar, { header: 'C++',
							color: '#cc99ff',
							fill: 4 }),
						React.createElement(SkillProgressBar, { header: 'JavaScript',
							color: '#cc99ff',
							fill: 3 }),
						React.createElement(SkillProgressBar, { header: 'HTML/CSS',
							color: '#cc99ff',
							fill: 2 }),
						React.createElement(SkillProgressBar, { header: 'Linux Scripting',
							color: '#cc99ff',
							fill: 2 }),
						React.createElement(SkillProgressBar, { header: 'SQL',
							color: '#cc99ff',
							fill: 2 }),
						React.createElement(
							'h3',
							null,
							'Frameworks'
						),
						React.createElement(SkillProgressBar, { header: 'Boost',
							color: '#66a3ff',
							fill: 3 }),
						React.createElement(SkillProgressBar, { header: 'Google Guice',
							color: '#66a3ff',
							fill: 3 }),
						React.createElement(SkillProgressBar, { header: 'React',
							color: '#66a3ff',
							fill: 2 }),
						React.createElement(SkillProgressBar, { header: 'Express',
							color: '#66a3ff',
							fill: 2 })
					)
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