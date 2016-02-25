require('../css/logo.css');

var React = require('react');

var Logo = React.createClass({
	render: function() {
		return <div>
					<p>Hello, React + Webpack</p>
					<img class="sm-logo" src={require('../img/sm.jpg')} />
				</div>
	}
});


module.exports = Logo;