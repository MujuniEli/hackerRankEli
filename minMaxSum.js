function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((a,b)=>{
        return a + b;
    });
    let min = sum - Math.max(...arr);
    let max = sum - Math.min(...arr);
    
    console.log(min +" "+ max);

}