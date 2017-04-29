var React = require('react')
var Title = require('../component/Title')

function ContactContainer(props) {
    return (
        <div id="contactContainer">
            <Title text="Contact" />
            <ul>
                <li>
                    <a href="mailto:edwardrowens@gmail.com"><img src="resources/assets/emailLogo.png" /></a>
                </li>
                <li>
                    <a href="https://github.com/edwardrowens" target="_blank"><img src="resources/assets/GitHubLogo.png" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/edward-owens-9a36aaaa" target="_blank"><img src="resources/assets/LinkedInLogo.png" /></a>
                </li>
            </ul>
        </div>
    )
}

module.exports = ContactContainer;