

/*
Promise
Resolve (fullfilled), Reject (failed)
                            .catch //ကျဆုံး
.thin //အေင်မြင်         
.thin
        .finally //အကုန်ပီးသွားသောအခါ
*/

let stocks = {
    fruits: ['strawberry', 'banana', 'apple'],
    holder: ['cone', 'cuo', 'stick'],
    toppings: ['chocolate', 'peanuts', 'salary']
}
let shop_open = false;
// let shop_open = true;

let x = (time, process) => {
    return new Promise ((res, rej)=>{ 
    if(shop_open){
        setTimeout(() => {
            res(process())
        }, time)
  
    }else {
        setTimeout(() => {
            rej("no") 
        }, 2000)
    }
    })
}

x (2000, ()=> {console.log(`${stocks.fruits[0]}was seleted.`)})

.then (()=>{
    return x (1000, () =>console.log("process has been stated now"))
})
.then (()=>{
    return x (1000, () =>console.log(`${stocks.holder[1]} has been chosen!`))
})
.then (()=>{
    return x (2000, () =>console.log(`${stocks.toppings[1]} topping has been selected `))
})
.then (()=>{
    return x (2000, () =>console.log("Now your order is ready to pick up!"))
})
.then (()=>{
    return x (2000, () =>console.log("Enjoy your anack!"))
})
.catch ((err)=>{
    console.log(err);
})
.finally (()=>{
    setTimeout(()=>{
        console.log("ပြန်လည်ဆုံတွေကျမယ်နော်")
    }, 3000)
})




/*


let teashop = {
    tea: ['ချို့ဆိမ့်', 'ကျဆိမ့်', 'ပုံမှန်'],
    food: ['နန်းကြီးသုပ်', 'အီကြာကွေး', 'ပေါက်စီ'],
    drink: ['ကိုလာ', 'စတင်း', 'သံပရာ']
}
let shop_open = true;
// console.log(stocks.toppings[1])

let order = ()=> {
    return new Promise ((resolve, reject)=> {
        // ဆိုင်ဖွင့်တယ်ဆိုရင်
        if(shop_open){
            setTimeout(() => {
                resolve("hello");
            }, 1000);
//  မဖွင့်ဘူဆိုရင် 
      }else{
            reject("ဒီနေ့ဆိုင်ပိတ်ပါသည်");
        }
    });
};

order()
.then ((x) =>{
    console.log("x")
    return order();
    })

.catch((error) =>{
    console.log(error)
})

//  အချိန် အလုပ်
*/
