var React = require('react');

function Footer(props) {
	return React.createElement(
		"footer",
		{ id: "footer" },
		React.createElement(
			"p",
			{ className: "footerText" },
			"For all inquiries: edwardrowens@gmail.com or visit the Contact page"
		)
	);
};

module.exports = Footer;