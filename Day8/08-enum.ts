/* enum Environment{
    LOCAL ="Local",
    DEVELOPMENT="DEv",
    STAGING= "STG",
    PRODUCTION ="PROD",
}

function runTest(env : Environment){
console.log("Environment " +env);
return env;
}

runTest(Environment.LOCAL); */

enum Environment{
    LOCAL ="Local",
    DEVELOPMENT="DEv",
    STAGING= "STG",
    PRODUCTION ="PROD",
}

function runTest(env : Environment){
console.log("Environment " +env);
return env;
}

runTest(Environment.DEVELOPMENT);