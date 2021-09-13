function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
        ar.forEach(element => {
        sum += element;
    });
    return sum;
}

let ar = [1, 2, 3, 4, 10, 11];
simpleArraySum(ar);