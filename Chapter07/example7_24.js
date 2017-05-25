var clickObservableFactory = function(element){
  return Rx.Observable.fromEvent(element,'click');
};

window.observerFactory = function(observable){
  return Rx.Observer.create(function(value){
    var node = document.createElement("li");                 
    var textnode = document.createTextNode("clicked");       
    node.appendChild(textnode);                             
    document.getElementById("container").appendChild(node);
  });
};

