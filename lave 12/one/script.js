// js သဘောတရားသည် တကြိမ်မှ တခါသာ အလုပ်လုပ်ပါသည်

// windowမှာ ဘာပေါ်ပေါ် api


// အသွားတခု အပြန်တခု သွားလို့ရသော ကုဒ်ကို 
// Asynchronous
// တစ်ခုစီအတွက် သီးသန့် အလုပ်လုပ်နိုင်


// ဆင့်ခိုနက်
// Synchronous = တခုပီး တစ်ခု ဆက်တိုက်လုပ်သည်၊ အစဥ်တိုင်းပေါ်လာတာကို ခေါ်ပါသည်.
/*
console.log('I');
console.log('eat');
console.log('banna');
console.log('evary');
console.log('day.');


console.log("A")

f
setTimeout (() => {
    console.log("O")
    x;
}, 1500);

console.log("B")
console.log ("c")


function one (call_tow){
    console.log("One")
    call_tow();
}

function tow (){
    console.log("Two")
}
one (tow);

function f1 (){
    console.log ('f1');
}
console.log("letos do i!")
setTimeout(() => {
    
}, (()));

*/


let stocks = {
    fruits: ['strawberry', 'banana', 'apple'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['xhocolate', 'peanuts', 'salary']
}
// console.log(stocks.toppings[1])

let order = (fruit, call_work)=> {
    setTimeout (()=> {
        console.log(`The custoer has selected ${stocks.fruits[fruit]}`);
        call_work();
    }, 1500)
}

let work = ()=> {
    setTimeout(() => {
        console.log('the processing has been startes! wait for 5-mind.')

        setTimeout(() => {
            console.log("အခုလိုအားပေးတဲ့ အတွက် ကျေးဇူးပါ၊ ခေတ္တစောင့်ပါ")

            setTimeout(() => {
                console.log(`${stocks.holder[0]} was added!`)

                setTimeout(() => {
                    console.log(`${stocks.toppings[0]} toppings was assid `)

                    setTimeout(() => {
                        console.log("အားပေးတဲ့ အတွက် ကျေးဇူးပါ မကြာခင် ပြန်တေွ့ကျမယ်နော")
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 0)
}
order(0, work)