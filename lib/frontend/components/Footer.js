var React = require('react');

function Footer(props) {
	return React.createElement(
		"footer",
		{ className: "footer" },
		React.createElement(
			"p",
			{ className: "footerText" },
			"For all inquiries, email me at edwardrowens@gmail.com"
		)
	);
};

module.exports = Footer;