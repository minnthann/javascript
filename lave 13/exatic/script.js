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


function selectfruit() {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            console.log("Selected fruit");
            resolve();
        }, 1000)
    });
}
function chopFruit (){
    return new Promise ((resolve)=> {
        setTimeout (()=> {
            console.log("Chopped fruit");
            resolve();
        }, 1000)
    });
}

function processOrder () {
    selectfruit()
    .then(chopFruit)
    .then(()=>{
        console.log("Order processed");
    })
    .catch ((error)=>{
        console.log("Error:", error);
    }, );
}
processOrder();

// selectfruit
// chopFruit
// orderprocessed
// အပေါ်အောက်တူပီ
function selectfruit(callback) {
        setTimeout (() =>{
            console.log("Selected fruit");
            callback();
        }, 1000)
}
function chopFruit (callback){
        setTimeout (()=> {
            console.log("Chopped fruit");
            callback();
        }, 1000)
}
function processOrder(){
    selectfruit(()=> {
        chopFruit(()=> {
            console.log("Order processed");
        });
    });
}
processOrder();

let x = function(z){
    setTimeout(function(){
        console.log('9')
    }, 2000)
    z();
}

let y = function(){
    console.log('7');
}
x(y);

// 7
// 2se 9

let x = {
    A:[1, 2, 3, 4],
    B: [5, 6, 7, 8]
}
let write = ()=> {
    return new Promise((res, rej) =>{
        if(mess){
            res("yes")
        }else{
            rej('no')
        }
    })
}
write()
.then ((msg) =>{
    console.log(msg);
})
.catch((erro) =>{
    console.log(erro);
})