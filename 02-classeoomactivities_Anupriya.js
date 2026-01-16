function isOddOrEven(number){

    if (number % 2 === 0){
        console.log("number is Even")
    }
    else {        console.log("number is odd")   }

}

function isNumberType(number){
    if (number > 0) {
        console.log("given number is greated than zero");
    }
       else if (number <0){
            console.log("Given number is lesser than zero");
           
        }
else{
    console.log("given number is Zero");
}      
    }

function launchBrowser(broswername){
    if (broswername ==="IE"){
        console.log("Browser name is IE");
               
    }
    else if(broswername==="safari")
    {
        console.log("Browser name is safari");
        
    }
    else if(broswername==="Edge")
    {
        console.log("Browser name is Edge");
        
    }
   else
    {
        console.log("Browser name is unsupported");
        
    }
}

function runTests(test){

switch(test){
    case "sanity":
        console.log("Test type is sanity");
        break;
         case "regression":
        console.log("Test type is regression");
        break
         
         default:
        console.log("Test type is smoke"); 
        
        
}

}


 function printGender(genderType){
    let color ='brown'
if (genderType==="Female")
{ var age = 30
    let  color = "pink"
    console.log("Color is" , color);
    
 }
 console.log("age is" , age);

 }




    let number =0;
    let broswername ="Edge"     
    let test ="regr"
    let genderType ="Female";

isOddOrEven(number);
isNumberType(number)
launchBrowser(broswername)
runTests(test)
printGender(genderType)

 
  console.log(genderType);









