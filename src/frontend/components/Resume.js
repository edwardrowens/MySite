var React = require('react');
var ResumePresentation = require('./ResumePresentation');
var DateInformation = require('./DateInformation');
var SkillProgressBar = require('./SkillProgressBar');

var Resume = React.createClass({
	componentDidMount: function() {
		document.title = "Resume";
	},
	
	render: function() {
		return (
			<div id="resumeContainer">
				<div id="resume">
					<div id="experienceBlocks">
						<div className="resumeBlock">
							<h2>Work Experience</h2>
							<DateInformation yearLink="http://www.chpconsulting.com/"
											 year="2015"
											 title="Consultant"
											 subHeading="CHP Consulting"
											 body={"Aided in developing, maintaining, and testing a large scale, OS agnostic, " + 
												"and efficient web app in the asset finance industry used by multiple "+
												"clients internationally to service portfolios ranging from one to millions " +
												"of contracts. I accomplished this task utilizing Java and test driven development"}/>
							<DateInformation yearLink="http://www.ucdmc.ucdavis.edu/mindinstitute/research/solomon_lab/index.html"
											 year="2014"
											 title="Junior Specialist"
											 subHeading="UC Davis MIND Institute"
											 body={"Utilized applied mathematical techniques (i.e. graph theory) to investigate "+
												"functional connectivity between regions of interest in the brain."}/>
							<DateInformation yearLink="http://rissmanlab.psych.ucla.edu/rissmanlab/Home.html"
											 year="2013"
											 title="Research Assistant"
											 subHeading="Rissman Memory Laboratory"
											 body={"Programmed in many different languages such as Bash and MATLAB to conduct between " +
												"group analyses and inverse normalize subject’s to their native space for manual tracing"}/>
							
						</div>
						<div className="resumeBlock">
							<h2>Education</h2>
							<DateInformation year="2014"
											title="UCLA"
											subHeading="B.S. Cognitive Science, specialization in computing"
											body=""/>
							
						</div>
					</div>
					<div id="skillBlocks">
						<div className="resumeBlock">
							<h2>Skills</h2>
							<h3>Languages</h3>
							<SkillProgressBar header='Java'
											color='#cc99ff'
											fill={4}/>
							<SkillProgressBar header='C++'
											color='#cc99ff'
											fill={4}/>
							<SkillProgressBar header='JavaScript'
											color='#cc99ff'
											fill={3}/>
							<SkillProgressBar header='HTML/CSS'
											color='#cc99ff'
											fill={2}/>
							<SkillProgressBar header='Linux Scripting'
											color='#cc99ff'
											fill={2}/>
							<SkillProgressBar header='SQL'
											color='#cc99ff'
											fill={2}/>				  
							<h3>Frameworks</h3>
							<SkillProgressBar header='Boost'
											color='#66a3ff'
											fill={3}/>
							<SkillProgressBar header='Google Guice'
											color='#66a3ff'
											fill={3}/>
							<SkillProgressBar header='React'
											color='#66a3ff'
											fill={2}/>
							<SkillProgressBar header='Express'
											color='#66a3ff'
											fill={2}/>
						</div>
					</div>
				</div>
				<form method="get" action="/downloads/resume">
					<button id="downloadButton" className="standardButton" type="submit">
						Download
					</button>
				</form>
			</div>
		);
	}
});

module.exports = Resume;