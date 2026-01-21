
//` Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
//palindrome, then test your function with various strings and print the results. 
let companyname = "madam"

let reversestring=""
    
let split = companyname.split("");
let length1= split.length


for (let i=length1-1; i>=0; i--)
{
   
    reversestring+=split[i]

}
console.log(reversestring);

if (companyname===reversestring){
    console.log("the given string "+companyname+" is a palindrome");
}

    else{
        console.log("the given string "+companyname+" is not a palindrome");
        
    } 

    //Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 

    let oddnumber =""
function printOddNumbers(){
      for(let i=1; i<=25;i++) {
            if (i%2 !==0){
                console.log(i);
                               
            }


        }
           
}
    printOddNumbers();


// JavaScript Functions

// Function Declaration  
function userProfile(name){
console.log("Hello ".concat(name) +"!" )

}
 userProfile("Anu")

 //Arrow Function  

 const  double = (a)=> a*a;
    console.log(double(12));
    
  //Anonymous Function  
  

     
    setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);     
  
//Callback Function 

function getUserData(callback){

    setTimeout(()=>{        
     callback()        
    },3000)    
 
}
getUserData(callback)

function callback(){
console.log("Call Back Function” after 3 seconds...");
}