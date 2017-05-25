try{
  throw new Error('An error occurred');
}catch(err){
  console.log('Treating the error');
}finally{
  console.log('Last computation');
}
