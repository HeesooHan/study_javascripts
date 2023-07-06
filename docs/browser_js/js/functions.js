// 표준 function
function calculateSumFirst(first, second){
    return first + second;
}

let third = calculateSumFirst(4, 6);

// let calculateSumSecond = (first, second) => {
//     return first + second;
// } ;

// calculateSumSecond(2, 1)
// 3

let calculateMinusSecond = (first, second) => {
    return first - second;
} ;

// calculateSumSecond(2, 1)
// 1

// callback function
function calculateFourth(funcName, param1, param2){
    let result = funcName(param1, param2);
    result = result + 10;
    return result;
}