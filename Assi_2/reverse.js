//reverse
//palidrome
//duplicate
//tosum
//pattern


function reverseArray(array){
    const reverseArray = [];
    
    for (let i=array.length-1; i>=0; i--){
        reverseArray.push(array[i]);
    }
    
    return reverseArray;
    }
    
    const numbers = [2,4,6,8,10];
    const reversenumbers = reverseArray(numbers);
    console.log(reversenumbers);