var React = require('react');
var WorkExperienceComponent = require('./../component/WorkExperienceComponent')
var Title = require('./../component/Title')

function WorkExperienceContainer(props) {
    return (
        <div className="resumeBlock">
            <Title text="Experience" />
            <WorkExperienceComponent yearLink="https://gamblitgaming.com/"
                year="2016"
                title="Software Engineer"
                subHeading="Gamblit Gaming"
                body={"Platform engineer working with both Java and C++ on multiple " +
                    "enhancements including in app purchases for all games which were " +
                    "ported onto our hardware. I also built the integration test framework " + 
                    "that is being used to test the core software in all of Gamblit's products. I Used Spring, Maven, Git, and " +
                    "many other libraries to perform my tasks."} />
            <WorkExperienceComponent yearLink="http://www.chpconsulting.com/"
                year="2015"
                title="Consultant"
                subHeading="CHP Consulting"
                body={"Aided in developing, maintaining, and testing a large scale, OS agnostic, " +
                    "and efficient web app in the asset finance industry used by multiple " +
                    "clients internationally to service portfolios ranging from one to millions " +
                    "of contracts. I accomplished this task utilizing Java and test driven development"} />
            <WorkExperienceComponent yearLink="http://www.ucdmc.ucdavis.edu/mindinstitute/research/solomon_lab/index.html"
                year="2014"
                title="Junior Specialist"
                subHeading="UC Davis MIND Institute"
                body={"Utilized applied mathematical techniques (i.e. graph theory) to investigate " +
                    "functional connectivity between regions of interest in the brain."} />
            <WorkExperienceComponent yearLink="http://rissmanlab.psych.ucla.edu/rissmanlab/Home.html"
                year="2013"
                title="Research Assistant"
                subHeading="Rissman Memory Laboratory"
                body={"Programmed in many different languages such as Bash and MATLAB to conduct between " +
                    "group analyses and inverse normalize subject’s to their native space for manual tracing"} />
        </div>
    )
}

module.exports = WorkExperienceContainer;