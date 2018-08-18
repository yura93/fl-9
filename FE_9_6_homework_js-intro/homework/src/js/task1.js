let price = prompt('Input amount of money');
let discount = prompt('Input amount the discount');
let finalPrice = price * discount / 100;
 if (price <=0){
    console.log('invalid data');
    } else {
    console.log(`Price without discount:${price}; 
                 Discount:${discount} %;
                 Price with discount:${finalPrice.toFixed(2)};
                 Saved:  ${(price - finalPrice).toFixed(2)}`);
  }
