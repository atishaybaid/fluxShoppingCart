var React = require('react');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');



var changeEvent = 'change';
//fill the data
var _catalog = [];

for(var i = 0;i<10;i++){
 _catalog.push({
 	id:i+1,
 	name:'item'+i,
 	cost:50*i,
 	qty:0,
 	inCart:false
 });

}


var _cartItems = [];

function _removeItem(index){
	_cartItems.splice(index,1);
};

function _increaseItem(index){
	console.log(" at _increaseItem of store");
	_cartItems[index].qty++;
};

function _decreaseItem(index){
	console.log("at _decreaseItem");
	_cartItems[index].qty--;
};


function _addItem(item){
	item['qty'] = 1;
	item['inCart'] = true;
	_cartItems.push(item);
	console.log(_cartItems);
}






var AppStore = Object.assign(EventEmitter.prototype,{
	emitChange:function(){
		console.log("at emit change");
		this.emit(changeEvent);
	},
	addChangeListener:function(callback){
		this.on(changeEvent,callback);
	},
	removeChangeListener:function(callback){
		this.removeListener(changeEvent,callback);
	},
	displatcherIndex:AppDispatcher.register(function(payload){
		var action = payload.action;
		console.log(action.actionType);
		switch(action.actionType){
			case  AppConstants.ADD_ITEM:
				_addItem(action.item);
				break;

			case  AppConstants.REMOVE_ITEM:
				_removeItem(action.item);
				break;
			
			case  AppConstants.INCREASE_ITEM:
				_increaseItem(action.item);
				break;

			case  AppConstants.DECREASE_ITEM:
				_decreaseItem(action.item);
				break;


		};
		
		AppStore.emitChange();

		return true;
	}),
	getCatloge:function(){
		return _catalog;
	},
	getCart:function(){
		return _cartItems; 
	},
	getTotal:function(){
		var totalBill = calculateBill(_cartItems);
		return totalBill;


	}


});

function calculateBill(_cartItems){
	var amount =0;
	_cartItems.forEach(function(item){
		console.log(item);
		amount = amount + item.cost*item.qty;
	});
	console.log(amount);
	return amount;
}



module.exports =  AppStore;
