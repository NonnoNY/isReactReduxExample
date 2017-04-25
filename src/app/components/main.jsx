const React = require('react');

// container component!!!!
var Main = (props) => {
	return (
		<div>
			<div className="row">
				<p>Main</p>
				<div className="columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;