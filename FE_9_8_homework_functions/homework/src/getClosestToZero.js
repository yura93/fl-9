function getClosestToZero(...arr){
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(arr[0])) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
}