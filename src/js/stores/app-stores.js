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
 	cost:50*i
 });

}


var _cartItems = [];

function _removeItem(index){
	_cartItems.splice(index,1);
};

function _increaseItem(index){
	_cartItems[index].qty++;
};

function _decreaseItem(index){
	_cartItems[index].qty--;
};


function _addItem(item){
	item['qty'] = 1;
	_cartItems.push(item);
}






var AppStore = Object.assign(EventEmitter.prototype,{
	emitChange:function(){
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
		switch(action.actionType){
			case  AppConstants.ADD_ITEM:
				_addItem(action.item);
				break;

			case  AppConstants.REMOVE_ITEM:
				_removeItem(action.item);
				break;
			
			case  AppConstants.INCRESE_ITEM:
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
	}

});



module.exports =  AppStore;
