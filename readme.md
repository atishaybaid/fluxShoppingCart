Flux Shopping Cart Software Design 

description->A scopiing cart with two vies 1)Catlog view and  cart view

Actions 
1)Add To cart 
2)Remove From cart
3)Increase Item 
4)Descrease Item 


Constants->All actions types


Dispatcher>We will be using facebooks dispatchers,there will be a custom function 
handleViewActions using type of the action and a single payload.


App-Actions->Corresponding actions to be passed to dispatcher, along with the required payloads(type of action,coreosponding field)

Stores->contains all the data.

1)function or loop to generate dummy data.
2)Functionality to capture the event,rerender the view.
3)All the logic of the action goes here.
4)Switch method to capture actions.
5)Node's eventEmmiter to emit and caoture events



controller/views->rerendering when state changes
Different component;
1)Add to cart component
2)Increase Quantity
3)Decrease Quantity




