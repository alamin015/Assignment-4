/*
problem-1 
*simple mathematical problem.
*/ 
function mindGame(num) {
    let result;
    let inputType = typeof num;
    if(inputType === "number"){
        result = (((num*3)+10)/2)-5;
    }else {
        result = "Please input valid number";
    }
    return result;
}



/* 
*problem-2 
*check input string length even or odd;
*/ 

function evenOdd(str){
    let result;
    let inputType = typeof str;
    if(inputType === "string") {
        let len = str.length;
        if(len%2===0){
            result = "even";
        }else{
            result = "odd";
        }
    }else {
        result = "Please input valid String";
    }
    
    return result;
}



/* 
*problem-3 
*check output result is greater or less then 7;
*/ 
function isLGSeven(num) {
    let inputType = typeof num;
    let result;
    if(inputType === "number"){
        let subst = num - 7;
        if(subst < 7){
            result = subst;
        }else {
            result = num*2;
        }
    }else {
        result = "Please input valid number";
    }
    return result;
    
}


/* 
*problem-4 
*Find how much bad data are exist in input;
*/
function findingBadData(arr){
    let result=0;
    let inputType = typeof arr;
    if(inputType === "object" && arr.length >0){
        for(let items of arr){
            if(items <=0){
                result++;
            }
        }
    }else{
        result = "Please input valid Array";
    }


    return result;
}


/* 
*problem-5 
*Find total diamond you can convert changing gems;
*/
function gemsToDiamond(gems1,gems2,gems3) {
    let inputType1 = typeof gems1;
    let inputType2 = typeof gems2;
    let inputType3 = typeof gems3;
    let result;
    if(inputType1 === "number" && inputType2==="number" && inputType3==="number"){
        let diamondNum1 = gems1*21;
        let diamondNum2 = gems2*32;
        let diamondNum3 = gems3*43;
        let totalDiamond = diamondNum1 + diamondNum2 + diamondNum3;
        if(totalDiamond > 2000){
            result = totalDiamond - 2000;
        }else {
            result = totalDiamond;
        }
    }else {
        result = "Please input valid number";
    }
    
    return result;
}
