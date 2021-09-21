function birthdayCakeCandles(candles) {
    let tallCandles = Math.max(...candles);
    let numOfCandles = 0;

    for(let i = 0; i < candles.length; i++){
        if(candles[i] == tallCandles){
            numOfCandles++
        }
    }
    return numOfCandles;

}

