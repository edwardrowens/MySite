var React = require('react')
var ReactDOM = require('react-dom')

var ContentContainer = require('./container/ContentContainer')
var PageLinksContainer = require('./container/PageLinksContainer')
var VisibilitySensorWindow = require('./component/VisibilitySensorWindow')

var Application = React.createClass({
	getInitialState: function () {
		return ({
			aboutMeContainerVisible: false,
			educationContainerVisible: false,
			skillsContainerVisible: false,
			workExperienceContainerVisible: false,
			contactContainerVisible: false,
			atBottom: false,
			initialHash: '#aboutme'
		})
	},

	updateUrl: function (hash) {
		if (history.pushState) {
			history.replaceState({}, '', hash)
		} else {
			location.hash = hash
		}
	},

	onscroll: function () {
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
			this.setState({ atBottom: true })
		} else {
			this.setState({ atBottom: false })
		}
	},

	componentDidMount: function () {
		document.title = "Eddie Owens";
		window.onscroll = this.onscroll
		this.updateUrl(this.state.initialHash)
	},

	componentWillMount: function () {
		var startingHash = location.hash ? location.hash : "#aboutme"
		this.setState({initialHash: startingHash})
	},

	onAboutMeContainerVisible: function (isVisible) {
		if (!this.state.atBottom) {
			if (isVisible) {
				this.updateUrl("#aboutme")
			}
			this.setState({ aboutMeContainerVisible: isVisible })
		} else {
			this.setState({ aboutMeContainerVisible: false })
		}
	},

	onEducationContainerVisible: function (isVisible) {
		if (!this.state.atBottom) {
			if (isVisible) {
				this.updateUrl("#education")
			}
			this.setState({ educationContainerVisible: isVisible })
		} else {
			this.setState({ educationContainerVisible: false })
		}
	},

	onSkillsContainerVisible: function (isVisible) {
		if (!this.state.atBottom) {
			if (isVisible) {
				this.updateUrl("#skills")
			}
			this.setState({ skillsContainerVisible: isVisible })
		} else {
			this.setState({ skillsContainerVisible: false })
		}
	},

	onWorkExperienceContainerVisible: function (isVisible) {
		if (!this.state.atBottom) {
			if (isVisible) {
				this.updateUrl("#experience")
			}
			this.setState({ workExperienceContainerVisible: isVisible })
		} else {
			this.setState({ workExperienceContainerVisible: false })
		}
	},

	onContactContainerVisible: function (isVisible) {
		var v = isVisible || this.state.atBottom
		if (v) {
			this.updateUrl("#contact")
		}
		this.setState({ contactContainerVisible: v })
	},

	render: function (props) {
		return (
			<div>
				<VisibilitySensorWindow />
				<div id="content">
					<ContentContainer containmentId={'visibilitySensorWindow'}
						onAboutMeContainerVisible={this.onAboutMeContainerVisible}
						onWorkExperienceContainerVisible={this.onWorkExperienceContainerVisible}
						onSkillsContainerVisible={this.onSkillsContainerVisible}
						onEducationContainerVisible={this.onEducationContainerVisible}
						onContactContainerVisible={this.onContactContainerVisible} />
				</div>
				<PageLinksContainer workExperienceContainerVisible={this.state.workExperienceContainerVisible}
					skillsContainerVisible={this.state.skillsContainerVisible}
					educationContainerVisible={this.state.educationContainerVisible}
					aboutMeContainerVisible={this.state.aboutMeContainerVisible}
					contactContainerVisible={this.state.contactContainerVisible} />
			</div>
		)
	}
});

ReactDOM.render(<Application />, document.getElementById("app"))