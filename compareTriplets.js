const compareTriplets = (a, b) => {
    let alice = 0;
    let bob = 0;
     a.forEach(element => {
        if(element !== b[a.indexOf(element)]){
            if(element > b[a.indexOf(element)]){
                alice+=1;
            }else{
                bob+=1;
            }
        }
    });
    return(alice, bob);
}

arr=[17, 28, 30];
brr=[99, 16, 8];

compareTriplets(arr, brr);