// FizzBuzz
for (let count = 0; count <= 100; count += 1){
 if (count % 3 == 0 && count % 5 == 0){
   console.log(count + ": FizzBuzz");
 }
 else if (count % 3 == 0){
   console.log(count + ": Fizz")
 } 
 else if (count % 5 == 0){
   console.log(count + ": Buzz")
 }
}
