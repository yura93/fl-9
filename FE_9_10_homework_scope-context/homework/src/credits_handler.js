/*Task #1*/

function userCard(key) {
  let balance = 100,
      transactionLimit = 100,
      historyLogs = [],
      tax = 0.5,
      hundredPercent = 100;

  return {
    getCardOptions: () => {
      return {
        key,
        balance,
        transactionLimit,
        historyLogs
      };
    },
    putCredits: amount => {
      balance += amount;
      historyLogs.push({
        operationType: 'Received credits',
        credtis: amount,
        operationTime: new Date().toLocaleString()
      });
    },
    takeCredits: amount => {
      if (amount <= balance || amount <= transactionLimit) {
        balance -= amount;
        historyLogs.push({
          operationType: 'Withdrawal of credit',
          credtis: amount,
          operationTime: new Date().toLocaleString('en-GB')
        });
      } else {
        console.log(
          ' The amount exceeds your balance or transaction limit'
        );
      }
    },
    setTransactionLimit: lim => {
      transactionLimit = lim;
      historyLogs.push({
        operationType: 'Transaction limit change',
        credtis: lim,
        operationTime: new Date().toLocaleString('en-GB')
      });
    },
   transferCredits(amount, usersCard) {
            const tax = 0.05,
                  amountAndTax = amount * tax + amount;
            
            if (amountAndTax > balance) {
                console.log(`The amount exceeds your balance`);
            } else if (amountAndTax > transactionLimit) {
                console.log(`The amount exceeds your balance or transaction limit`);
            } else {
                this.takeCredits(amountAndTax);
                usersCard.putCredits(amount);
            }
        }
  



  };
}

/*Task #2*/

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.max = 3;
  }

  addCard() {
    if (this.cards.length < this.max) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.log("You've reached maximum amount of cards!");
    }
  }
  getCardByKey(key) {
    return this.cards[key - 1];
  }
}

