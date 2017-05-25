var Bacon = require("baconjs");

var stringProperty = Bacon
        .fromArray(['a','b','c','d'])
        .scan('=> ',(acc,b)=> acc+b);

stringProperty.log();