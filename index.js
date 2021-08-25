// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3,9,23,64,2,8,28,93];

console.log (ages); 

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let firstElemen = ages.shift(); 
let lastElemen = ages.pop(); 
let val = lastElemen - firstElemen;

console.log (val);



// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).


let newLength = ages.push (45);

let firstElement = ages.shift();
let lastElement = ages.pop(); 
let result = lastElement - firstElement; 

console.log (result);


// c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0;

for (let i = 0; i<ages.length; i++) {
    sum = sum + ages[i].length;
}

var averageAge = sum / ages.length

console.log (averageAge);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam','Tommy','Sally','Buck','Bob'];

console.log (names);


// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console 

var sumNames = 0;

for (let i=0; i<names.length; i++) { 
     sumNames = sumNames + names[i].length;
}

var averageName = sumNames / names.length

console.log (averageName);


//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

var finalName = "";

for (let i=0; i<names.length; i++) {
    finalName = (finalName + names[i] + " ")
}
console.log (finalName);

//3.	How do you access the last element of any array?

let ar = [1, 2, 3, 4, 5, 6, 7, 8];
let last = ar.slice(-1);
console.log(last);



//4.	How do you access the first element of any array?


let frstElement = ar.shift();

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let namesArr = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLengths = [];

for ( i=0 ; i<namesArr.length ; i++ ){
	nameLengths.push(namesArr[i].length);
}

console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sumElement = 0;
 
for ( i=0 ; i<nameLengths.length ; i++ ){
	sumElement += nameLengths[i];	
}
console.log(sumElement);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordMultiplier (word, n) {
    var wordStore = "";

    for (let i=0; i<n; i++) {
        wordStore = (wordStore + word);
    }
    return wordStore;
}

console.log (wordMultiplier()); 


// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(Omose, Edobor) {
	return first + " " + last;
}


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arr = [1,2,3,4,5,6,7,8,9];
	let res = processArray (arr);
	console.log (res);

function processArray (args){
	
    let sum = 0;
	 for (i=0 ; i< args.length ; i++){
	 sum += args[i];	
	}
 	 
	 if (sum > 100) 
	 return true;
	 else 
	 return false;
}


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function testFunction (args){
    let sum = 0;
    for (i=0 ; i< args.length ; i++){
    sum += args[i];	
    }
    
    return sum/args.length;
}

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function testFunction (args1 , args2){
    var sum1 = 0, sum2 = 0;
    for (i=0 ; i< args1.length ; i++){
    sum1 += args2[i];	
    }
    for (i=0 ; i< args2.length ; i++){
    sum2 += args2[i];	
    }
    
   if ((sum1 / args1.length) > (sum2 / args12.length))
   return true;
   else
   return false;	
}


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside){
        if (moneyInPocket > 10.50)
            return true;
    }
    else 
        return false;
    }
    

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function simpleCalculator () {
   
const operator = prompt('Enter operator ( either +, -, * or / ): ');
    
  
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
    
    
let result;
    
   
if (operator == '+') {
    result = number1 + number2;
    }
else if (operator == '-') {
    result = number1 - number2;
    }
else if (operator == '*') {
    result = number1 * number2;
    }
else {
    result = number1 / number2;
    }
   
    console.log(result);
    }
    