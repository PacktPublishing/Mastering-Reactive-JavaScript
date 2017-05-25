var fs = require('fs');

fs.readFile('this_file_doesnt_exist.txt',function(e,data){
  if(e){
    console.log('An error happened');
    return;
  }
  console.log(data);
});
