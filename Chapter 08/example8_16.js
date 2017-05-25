var Rx = require('rx');

Rx.Observable
  .of(
    {name:'Mary',lastName:'Jane'},
    {name:'John',lastName:'Doe'},
    {name:'Jean',lastName:'Carter'},
    {name:'Erich',lastName:'Oliveira'})
    .groupBy(
      (person)=>person.name[0],
      (person)=>person.name+' '+person.lastName
    ).flatMap(
      (personObservable)=>personObservable.toArray()
    ).map(
      (arr)=>'Names starting with '+arr[0][0]+': '+arr.join()
    ).subscribe((str)=>console.log(str));

