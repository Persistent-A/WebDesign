//1. Calculate the sum of array of numbers: nums = [10, 40, 50, 60] using reduce() method.
const num = [10, 40, 50, 60];
const initialValue = 0;
const sum = num.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
})
console.log(sum)


//2. Create an array of objects as below:
//  a. iterate through the object,
//  b. display the name of the people on the UI(index.html),
//  c. whose age is less than or equal to 25.

// let object = [
//     {
//         Id: 1,
//         Name: John,
//         Age:25
//     },
//     {
//         Id: 2,
//         Name: Sam,
//         Age: 28 
//     },
//     {
//         Id: 3,
//         Name: Sara,
//         Age: 23
//     }
// ]



//3. Traverse this array of numbers: nums = [10, 40, 50, 60], transform this array, multiply each element with 3. 
//      So output: [30, 120, 150, 180],
const nums = [10, 40, 50, 60]
const result = nums.map((elements) => {
    return elements * 3
})
console.log(result)

//4. Traverse this array of numbers: nums = [10, 40, 50, 60, 5, 23, 24], create new array of elements, 
//      where each array element when divided by 2, yeilds remainder 0. 


//5. Using setTimeout(), Print values from 1 to 5, where each element need to display after 2 seconds of delay.
//          output:
//              1 *(after 2 sceonds)*
//              2 *(after 2 sceonds)*
//              3 *(after 2 sceonds)*
//              4 *(after 2 sceonds)*
//              5 *(after 2 sceonds)*
const values = [1, 2, 3, 4, 5]
for (let i = 1; i < values.length+1; i++){
    setTimeout( callAfterThreeSeconds = () => {
        const time = 2;
        console.log(`${i} *(after ${time} seconds)*`);
    }, 2000);
}