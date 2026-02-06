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
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "Local";
    Environment["DEVELOPMENT"] = "DEv";
    Environment["STAGING"] = "STG";
    Environment["PRODUCTION"] = "PROD";
})(Environment || (Environment = {}));
function runTest(env) {
    console.log("Environment " + env);
    return env;
}
runTest(Environment.DEVELOPMENT);
