function staircase(n) {
    for (let i = 0; i < n; i++){
        let step = "";
        for(let num = 1; num <= n; num++){
            if(num >= n - i){
                step += "#";
            }else {
                step += " ";
            }
        }

        console.log(step)
    }
}
    return staircase(6);