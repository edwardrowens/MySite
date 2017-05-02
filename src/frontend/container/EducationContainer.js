var React = require('react')
var Title = require('../component/Title')
var WorkExperienceComponent = require('../component/WorkExperienceComponent')

function EducationContainer(props) {
    return (
        <div className="resumeBlock">
            <Title text="Education" />
            <WorkExperienceComponent year="2014"
                title="UCLA"
                subHeading="B.S. Cognitive Science, specialization in computing"
                body="Involved C++ and Java programming courses, courses in statistics, and psychology" />
        </div>
    )
}

module.exports = EducationContainer