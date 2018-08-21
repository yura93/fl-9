let range = 5,
    attempts = 3,
    totalPrize = 0,
    currentPrize = 10,
    prize = 10,
    randomNumber = 0,
    userGuess = 0,
    cont = true,
     one = 1,
     five = 5,
     ten =10,
    start = confirm('Do you want to play a game?');


if (start) {
    while (start) {
        while (cont) {
           for (attempts = 3; attempts > 0; attempts--) {
            
                userGuess = Number(prompt(`Enter a number from 0 to ${range}\n
                    Attempts left: ${attempts}\n
                    Total prize: ${totalPrize}$\n
                    Possible prize on current attempt: ${currentPrize}$`, '0'));
                if (userGuess === randomNumber) {
                    prize*=3;
                    range*=2;
                    attempts=4;
                    totalPrize+=currentPrize;
                    currentPrize=prize;
                   randomNumber = Math.floor( Math.random() * ( range + one));
                    cont = confirm('Do you want to continue?');
                    if (!cont) {
                        break;
                    }
                } else {
                    currentPrize = Math.floor(currentPrize/2);
                }
            }
            alert('Thank you for a game. Your prize is: ' + totalPrize);
            cont = confirm('Do you want to play again?');
           range = five;
            totalPrize = 0;
           currentPrize = ten;
            prize = ten;
        }
        start = false;
    }
} else {
    alert('You did not become a millionaire,but can')
}
