function FizzBuzz(n) {
    
  for (let i = 1; i <= n; i++) {
  if (i%3 === 0) {
  console.log ("Fizz");
}       
  else if (i%5 === 0) {
  console.log ("Buzz"); 
}
  else if (i%5 === 0 && i%3 ===0) {
  console.log("FizzBuzz");
}
//else if (i%5 === 0 || i%3) {
  //console.log(FizzBuzz);
//}
          
  else {
  console.log(i);
}   
}
}
FizzBuzz(100);