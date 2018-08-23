function reverseNumber(n) {
    if (n < 0) {
        n = n + '';
        let str = n.split('');
        str.shift();
        str.push('-');
        return str.reverse().join('');
    } else {
        n = n + '';

        return n.split('').reverse().join('');

    }
}

