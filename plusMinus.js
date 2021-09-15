function plusMinus(arr) {
    // Write your code here
    let length = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive++;
        }else if(arr[i] < 0){
            negative++;
        }else {
             zero++;
        }
    }

    let posValue = positive/length;
    let negValue = negative/length;
    let zeroValue = zero/length;

    console.log(posValue.toFixed(6));
    console.log(negValue.toFixed(6));
    console.log(zeroValue.toFixed(6));


}