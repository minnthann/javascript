let p = new Promise ((resolve, reject)=>{
    let a = 2+2;
    if (a ===3){
        resolve("success");
    }else {
        reject("failed");
    }
});

p.then ((message) =>{
    console.log("this is in the then" + message);
}).catch((message) => {
    console.log("this is in the catch" + message);
});

//failed

let a = new Promise ((resolve, rej)=>{
    let b= 3+2;
    if (b ===5){
        resolve("အမှန်");
    }else {
        rej ("အမှား");
    }
});

a.then ((mgs)=>{
    console.log("အဖြေက " + mgs);
}).catch ((mgs)=> {
    console.log("အဖြေက " + mgs);
});

// အမှန်

// functionအတွင်းဆို တရားဝင်  legal
// functionအပြင်ကဆို အခွင့်အရေးမဲ့  1st class citizen
// legal
function f1(){
    console.log('f1');
}
// 1st class citizen
console.log("let's do it");

setTimeout(() =>{console.log('in settimeout');}, 2000);

f1();
f1();
f1();
f1();

// lte's do it
// f1 f1 f1 f1
// jin settimeout

const tom = () => console.log("Tom");
const jerry = () => console.log("Jerry");

const cartoom = () => {
    console.log("Cartoon");
    setTimeout(tom, 5000);

    new Promise((resolve, reject) =>
        resolve("should it be right afrer Tom, before Jerry?")
    ).then(resolve => console.log(resolve))
    jerry();
}
cartoom();

// cartioom
// jerry
// should i be right afrer tom, before jerry?
// 5se Tom