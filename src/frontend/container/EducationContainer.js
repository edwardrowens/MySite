var React = require('react')
var Title = require('../component/Title')
var DateInformation = require('../component/DateInformation')

function EducationContainer(props) {
    return (
        <div className="resumeBlock">
            <Title text="Education" />
            <DateInformation year="2014"
                title="UCLA"
                subHeading="B.S. Cognitive Science, specialization in computing"
                body="Involved C++ and Java programming courses, courses in statistics, and psychology" />
        </div>
    )
}

module.exports = EducationContainer