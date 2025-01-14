const core = require('@actions/core');
const github = require('@actions/github');

try{
    jsNum1 = core.getInput('number1');
    jsNum2 = core.getInput('number2');
    result = parseInt(jsNum1) + parseInt(jsNum2);
    core.setOutput("result", result);
} catch(error){
    core.setFailed(error.message);
}