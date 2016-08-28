var React = require('react');
var AppStore = require('../../stores/app-stores');
var RemoveFromCart = require('./app-removeFromCart');
var IncreaseItem = require('./app-increaseItem');
var DecreaseItem = require('./app-decreaseItem');



var Cart = React.createClass({
getInitialState: function() {
	return {
		cartItems:AppStore.getCart()
	};
},
componentDidMount: function() {
	AppStore.addChangeListener(function(){
		console.log("something changed");
		this.setState({cartItems:AppStore.getCart()});
	}.bind(this));
},
render: function() {
	console.log("render Called again");
	var catalogeItems = this.state.cartItems.map(function(item,i){
			return(
					<tr>
						<td>{item.name}</td>
						<td><DecreaseItem index={i}/>{item.qty}<IncreaseItem index={i}/></td>
						<td><RemoveFromCart/></td>
					</tr>
												
				)
		});

	return (
		<div className="Cart">
			<h1>Your Cart</h1>
			<table className="table table-hover">
			{catalogeItems}
			</table>
			<div className="total-bill">
			   <span>Bill</span>{AppStore.getTotal()}
			</div>
		</div>
		
	);
}
});


module.exports = Cart;