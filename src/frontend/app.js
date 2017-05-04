var React = require('react')
var ReactDOM = require('react-dom')

var ContentContainer = require('./container/ContentContainer')
var PageLinksContainer = require('./container/PageLinksContainer')

var Application = React.createClass({
	getInitialState: function () {
		return ({
			aboutMeContainerVisible: false,
			educationContainerVisible: false,
			skillsContainerVisible: false,
			workExperienceContainerVisible: false,
			contactContainerVisible: false
		})
	},

	componentDidMount: function () {
		document.title = "Eddie Owens";
	},

	onAboutMeContainerVisible: function (isVisible) {
		this.setState({ aboutMeContainerVisible: isVisible })
	},

	onEducationContainerVisible: function (isVisible) {
		this.setState({ educationContainerVisible: isVisible })
	},

	onSkillsContainerVisible: function (isVisible) {
		this.setState({ skillsContainerVisible: isVisible })
	},

	onWorkExperienceContainerVisible: function (isVisible) {
		this.setState({ workExperienceContainerVisible: isVisible })
	},

	onContactContainerVisible: function(isVisible) {
		this.setState({contactContainerVisible: isVisible})
	},

	render: function (props) {
		return (
			<div>
				<div id="content">
					<ContentContainer onWorkExperienceContainerVisible={this.onWorkExperienceContainerVisible} 
									  onSkillsContainerVisible={this.onSkillsContainerVisible}
									  onEducationContainerVisible={this.onEducationContainerVisible}
									  onAboutMeContainerVisible={this.onAboutMeContainerVisible}
									  onContactContainerVisible={this.onContactContainerVisible}/>
				</div>
				<PageLinksContainer workExperienceContainerVisible={this.state.workExperienceContainerVisible} 
									skillsContainerVisible={this.state.skillsContainerVisible}
									educationContainerVisible={this.state.educationContainerVisible}
									aboutMeContainerVisible={this.state.aboutMeContainerVisible} 
									contactContainerVisible={this.state.contactContainerVisible}/>
			</div>
		)
	}
});

ReactDOM.render(<Application />, document.getElementById("app"))