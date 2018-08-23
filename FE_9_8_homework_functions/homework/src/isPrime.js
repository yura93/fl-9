function isPrime(a){
	let two = 2;
    if(a < two) {
    return false;
    }
    for (let i = two; i < a; i++) {
        if(a%i===0){
        return false;
        }
    }
    return true;
}
