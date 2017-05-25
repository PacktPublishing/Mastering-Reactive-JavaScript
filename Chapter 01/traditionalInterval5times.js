var count = 0;

var intervalId = setInterval(()=>{
    console.log(new Date());
    count++;
    if(count===5){
        clearInterval(intervalId);
    }
},1000);
