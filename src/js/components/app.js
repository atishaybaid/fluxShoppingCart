var React = require('react');
var AppCatloge = require('../components/app-catloge'); 
var Cart = require('../components/app-cart');



var App = React.createClass({
	handleClick:function(){
		console.log("handleClick called");
		AppActions.addItem("add this item");
	},
	render: function() {
		return (
			<div className="mainComponent">
				<h1>Let's Shop</h1>
				
				<AppCatloge/>
				<Cart/>

			</div>
			

		);
	}
});


module.exports = App;