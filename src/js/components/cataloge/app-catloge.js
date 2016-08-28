var React = require('react');
var AppStore = require('../../stores/app-stores');
var AddToCart = require('./app-addToCart');


var AppCatloge = React.createClass({
	getInitialState: function() {
		return {
			cataloge:AppStore.getCatloge() 
		};
	},
	render:function(){
		 var items = this.state.cataloge.map(function(item){
	      return (
	        <tr key={item.id}>
	          <td>{item.name}</td>
	          <td>{item.cost}</td>
	          <td><AddToCart item={item} /></td>
	        </tr>
	      )
    })
    return (
      <table className="table table-hover">
        <tbody>
   			{items}
        </tbody>
      </table>
    )
  }
});


module.exports =  AppCatloge;