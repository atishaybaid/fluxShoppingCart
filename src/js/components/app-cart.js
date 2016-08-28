var React = require('react');
var AppStore = require('../stores/app-stores');
var RemoveFromCart = require('../components/app-removeFromCart');
var IncreaseItem = require('../components/app-increaseItem');
var DecreaseItem = require('../components/app-decreaseItem');



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
			return(<div className="cart">
					<tr>
						<td>{item.name}</td>
						<td><DecreaseItem index={i}/>{item.qty}<IncreaseItem index={i}/></td>
						<td><RemoveFromCart/></td>
					</tr>

					<div className="total-bill">
						<span>Bill</span>{AppStore.getTotal()}
					</div>
				 </div>

					
				)
		});

	return (
		<div className="Cart">
		<h1>Your Cart</h1>
		<table className="table table-hover">
		{catalogeItems}
		</table>
		</div>
		
	);
}
});


module.exports = Cart;