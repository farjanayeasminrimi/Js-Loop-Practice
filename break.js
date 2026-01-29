/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
// for(let i = 1; i <= 200; i++){
//   if(i === 100){
//     break
//   }
//   console.log(i);
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
let num = 1;
while(num < 200){
  if(sum+num > 100){
    break;
  }
  sum+=num;
  num++;
}
  console.log(sum);
