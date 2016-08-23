var React = require('react');
var AppActions = require('../actions/app-actions');

var App = React.createClass({
	handleClick:function(){
		console.log("handleClick called");
		AppActions.addItem("add this item");
	},
	render: function() {
		return (
			<h1 onClick={this.handleClick}>My Flux App</h1>
		);
	}
});


module.exports = App;