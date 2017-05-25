new Promise(function(resolve,reject){
  reject(new Error('An error occurred'));
}).catch(function(err){
  console.log('Treating the error');
});
