// Write a function that returns the product of 2 numbers
function product(x, y) {
  
  let product = 0;
  product = x * y;
  return product;

}

//product(5,4);

// Write a function that returns whether a given number is even
function isEven(num) {
  
  if(num % 2 == 0){
    //return(`el número ${num} es par`);
    return true;
  }
  else{

    //return(`el numero ${num} es impar`);
    return false;

    }
  }
//isEven(100);

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  
  if(a > b){
    //return (`el numero ${a} es mas grande que ${b}`);
    return a;
  }
    else{
      //return (`el numero ${b} es mas grande que ${a}`);
      return b;
    }

  }
//maxOfTwoNumbers(10,5);

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
 
if (a>b && a>c){
  return a;
}
else if(b>a && b>c){
  return b;
}
else{
  return c;
}

}
// Calculate the sum of an array of numbers
function sumArray(numbers) {
  suma=0;
  for(let i = 0; i < numbers.length; i++){

    suma+=numbers[i];
    
  }
  return suma;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  
  mayor=0;

  for(i =0; i<numbers.length;i++){

    if(numbers[i]>mayor){
      mayor=numbers[i];
    }

  }
  return mayor;
}

// Return the longest string in an array
function longestString(strings) {
  
  let mayorString =[];

  for(i=0;i<strings.length;i++){

    if(strings[i].length>mayorString){
      mayorString=strings[i];
    }
  }
  return mayorString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  
  if(wordsArr.indexOf(word) != -1){

    return true;
  }
  else{
    return false;
  }
   
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

  let noDuplicate =[];

for (i=0;i<string.length;i++){
if(string[i]!=noDuplicate){

  noDuplicate=string[i];
}
else{
  return noDuplicate;
}

}
  }
  
}


  


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  
  return (personObj.firstName+' '+personObj.lastName);
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
