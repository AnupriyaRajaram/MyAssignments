const { log } = require("node:console");

let array =[2,4,5,2,1,2];
let arraylength= array.length;
const k =2;
let occurance =0;
for (let index = 0; index < array.length; index++) {
    if (array[index]===k){
        occurance = occurance + 1;
    } 
    
  
}
  console.log(occurance);
