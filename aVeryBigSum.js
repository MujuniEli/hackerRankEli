function aVeryBigSum(ar) {
    // Write your code here
    let result = 0;
    ar.forEach(element=>{
        result+= element;
        
    })
    return result;
}

let arr=[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

aVeryBigSum(arr);