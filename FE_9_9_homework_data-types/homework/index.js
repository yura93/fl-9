/* Task 1, function, which returns type of passed parameter.*/
function findType(n){
	console.log(typeof n);
}
/* Task2, function, which iterates over array and executes function on each element.*/
function forEach(arr,callfunc){

	for(let i = 0; i < arr.length; i++){
	
		callfunc(arr[i]);
	}
	}
/*Task3, function, which returns transformed array based on function, which passed as a parameter. 
Reuse function from task 2 */

function map(arr,callfunc){
	let newArr = [];
forEach(arr, function(elem) {
newArr.push(callfunc(elem))
});
return newArr;
}
/*Task4, function, which returns filtered array based on function, which passed as a parameter.
 Reuse function from task 2.*/

function filter(arr, func) {
    let filtrArr = [];
    forEach(arr, function(el){
        if(func(el)){
            filtrArr.push(el);
        }
    });
    return filtrArr;
}
/*Task5, function, which returns array of names of people, who are over 18 and their favorite fruit 
is apple. Reuse functions from task 2 and 3.*/

function getAdultAppleLovers (data ) {
  let filtr = filter(data, function(el) {
  return el.age > 18 && el.favoriteFruit === 'apple' 
});
  return map(filtr, function(el){
  return el.name
  });
}
/*Task6, function, which returns array of keys of an object.*/

function keys(arr){
  let result = [];
  for (let i in arr) {
    if (i) {
      result.push(i);
    }
  }
  return result;
}

/*Task7, function, which returns array of values of an object.*/

function values(arr){
  let result = [];
  for (let i of arr) {
    if (i) {
      result.push(i);
    }
  }
  return result;
}

/*Task8, function, which returns formatted date.*/

function showFormattedDate (d) {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return `It is ${d.getDate()} of ${month[d.getMonth()]}, ${d.getFullYear()}`;
}
