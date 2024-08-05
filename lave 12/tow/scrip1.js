
let teashop = {
    tea: ['ချို့ဆိမ့်', 'ကျဆိမ့်', 'ပုံမှန်'],
    food: ['နန်းကြီးသုပ်', 'အီကြာကွေး', 'ပေါက်စီ'],
    drink: ['ကိုလာ', 'စတင်း', 'သံပရာ']
}

let order = (one, call_work)=> {
    setTimeout (()=> {
        console.log(`အကိုမှာ ထားတဲ့ ${teashop.tea[one]} ရပါပီ`);
        call_work();
    }, 1500)
}

let work = ()=> {
    setTimeout(() => {
        console.log('အခုသောက်လိုက်တော့နော်')

        setTimeout(() => {
            console.log("အခုလိုအားပေးတဲ့ အတွက် ကျေးဇူးပါ၊ ခေတ္တစောင့်ပါ")

            setTimeout(() => {
                console.log(`${teashop.food[1]} ၂ ပွဲ`)

                setTimeout(() => {
                    console.log(`${teashop.drink[0]} ၃ ခွက် `)

                    setTimeout(() => {
                        console.log("အားပေးတဲ့ အတွက် ကျေးဇူးပါ မကြာခင် ပြန်တွေ့ကျမယ်နော့်")
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 0)
}
order(2, work);






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
