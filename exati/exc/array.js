// စာလုံးကို တလုံးချင်း ခွဲရေး
Array.from( arrayLike [ mapFn [ thisArg ] ] )

let str = 'hello';

let arr1 = Array.from(str);

console.log(arr1);   // Output: ['h', 'e', 'l', 'l', 'o']

// မြှောက်လို့လည်းရ

let arr4 = Array.from([1, 2, 3], x => x * 2);

console.log(arr4);   // Output: [2, 4, 6]
 
// အက္ခရာ သီးသန့်လည်း ထုက်လို့ရ
let obj = { length: 3, 0: 'a', 1: 'b', 2: 'c' };

let arr5 = Array.from(obj);

console.log(arr5);   // Output: ['a', 'b', 'c']

// lengthထုတ်ပုံ
// 1.	Creating an Array of Numbers:

let arr6 = Array.from({ length: 5 }, (v, i) => i + 1);

console.log(arr6);   // Output: [1, 2, 3, 4, 5]

// 2.	Creating an Array of Squares:

let arr7 = Array.from({ length: 5 }, (v, i) => (i + 1) ** 2);

console.log(arr7);   // Output: [1, 4, 9, 16, 25]

	// Creating an Array of Numbers: { length: 5 } creates an object with a length property. The map function (v, i) => i + 1 generates an array of numbers from 1 to 5.

	// Creating an Array of Squares: Similar to the previous example, but the map function generates the squares of the numbers.


    // ကြိုနှစ်သက်ရာ စကလုံးကို ပြန်ထုတ်လို့ရ
    array[index]
    // Accessing elements in an array using the index is one of the most basic and common operations in JavaScript. Here’s a detailed example demonstrating how to create an array, access its elements using their indices, and perform some basic operations.
    
    Example:1 
    
    // Create an array of fruits
    
    const fruits = ['apple', 'banana', 'cherry', 'date'];
    
    // Access elements using their indices
    
    console.log(fruits[0]); // Output: apple
    
    console.log(fruits[1]); // Output: banana
    
    console.log(fruits[2]); // Output: cherry
    
    console.log(fruits[3]); // Output: date


        // Array
        const fruits = ['apple', 'banana', 'mango', 'orange'];

        // forEach method ကို အသုံးပြုပြီး array ထဲက element တစ်ခုချင်းစီကို print လုပ်မယ်
        fruits.forEach(function(fruit, index) {
            console.log(index + 1 + ': ' + fruit);
        });


        const students = ['John', 'Jane', 'Jack', 'Jill'];

for (let i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`);
}
        // Arrow function နဲ့ ရေးဖို့လည်း ရတယ်
        fruits.forEach((fruit, index) => {
            console.log(index + 1 + ': ' + fruit);
        });
        .then ((xs)=>{
            xs.forEach(()=>{
                setTimeout(()=>{
                    console.log(x);
                }, 2000)
            });    
        })
      
    ရှင်းပြချက်
fruits ဆိုတာ apple, banana, mango, orange ဆိုတဲ့ array ပါ။
fruits.forEach method ကိုအသုံးပြုပြီး fruits array ထဲက element တစ်ခုချင်းစီကို iterate လုပ်တယ်။
function(fruit, index) က array ထဲက element ကို fruit parameter နဲ့လက်ခံပြီး၊ index ကို index parameter နဲ့လက်ခံတယ်။
ထို function ထဲမှာ console.log ကိုအသုံးပြုပြီး index + 1 နဲ့ element ကို print လုပ်တယ်။
forEach ကိုအသုံးပြုတာက code ရေးသားတဲ့အခါမှာ logic ကို လွယ်ကူစွာ ဖတ်ရှုနိုင်အောင် လုပ်ပေးနိုင်တယ်။ forEach method က async operation တွေမှာရော၊ synchronous operation တွေမှာပါ အသုံးပြုနိုင်တယ်။