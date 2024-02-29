//task #1
function greet(name) {
    let beginningGreeting = `Привет ${name}!`;
    return beginningGreeting;
}
console.log(greet("Danil"));

// task #2
function printSumAndProduct(n){
	let sumNumber = 0;
	let factorialNumber = 1;
	for (let index = 1; index <= n; index++){
		sumNumber += index;
		factorialNumber *= index;
	}
	console.log('Сумма чисел:', sumNumber);
	console.log('Факториал чисел:', factorialNumber);
}
printSumAndProduct(10)

// task #3
function countDown(n){
	for (let index = n; index >= 1; index--){
		console.log(index)
	}
}
countDown(5)

//task #4
function getArraySum(undestend) {
    let sumArray = 0;
    for (let index = 0; index < undestend.length; index++) {
        sumArray += undestend[index];
    }
    console.log("Выходные данные:", sumArray);
}
getArraySum([1, 2]);

//task #5
function isNumberInArray(n) {
    for (let index = 0; index < n.length; index++) {
        // console.log(n[index] === 5)
        if (n[index] === 5) {
            console.log("число 5 есть в массиве: true");
        }
        // } else {
        // 		console.log("числа 5 нет в массиве: false");
        // }
    }
}
isNumberInArray([1, 3, 4, 7, 9, 7]);

// task #6
function getEvenElements(n) {
    for (let index = 0; index < n.length; index++) {
        let ternar = n[index] % 2;
        if (ternar === 0) {
            console.log(n[index]);
        }
    }
}

getEvenElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
