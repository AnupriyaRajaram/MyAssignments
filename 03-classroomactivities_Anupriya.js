 
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

 

 


//Home Assignment: String
//Example 1: 
let s =  "Hello World" 
let splitedwords = s.split(/\s+/);
let lastword=splitedwords[splitedwords.length-1]
let length=lastword.length

console.log(length);

//Example 2:
let a = " fly me   to   the moon"

let splitedwords2 = a.split(/\s+/);
let lastword2=splitedwords2[splitedwords2.length-1]
let length2 =lastword2.length
console.log(length2);  

 //Example 3:  
 //Write a function to check if two strings are anagrams
 const  words = (word)=> word.split('').sort().join('');
let compare1 = (words("listen"))
let comapre2 = (words("silent"))

if (compare1=== comapre2){
    console.log("Given names are anagram");}

    else{
       console.log("Given names are not anagram"); 
    }
    


  

