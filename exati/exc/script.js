
function x(a) {
    console.log("a")
    console.log("ygn")
}
x("heloo");


const z = function () {
    console.log("hello")
}
z();

let printMe = function (a, b) {
    console.log(a  + b);
}
printMe(10, 20);


let printMe = function (a, b) {
    console.log(2 * (a  + b));
}
printMe(10, 20);


let yangon = function(b, c=4){
    console.log(9 * (b + c));
}
yangon(5);

// (အာကုမန့်)

// {ဘာလေ့ာ ကစ္စဆောင်ရွက်ရန်}
function aa (mg, ko) {
    console.log (mg, ko);
}
aa("ka, la")


// ...b ထဲမှာ အကုန်ထည့်ပေးပါ
// console.log နေရာမှာ return ရေးထည့်လို့ ရပါသည်  ၁တခုပဲ ထွက်ပါသည်
// return တခုပဲ ရေးလို့ရ

function az (a, b) {
    console.log(a);
    console.log(b);
}
az(1, 2, 3, 4, 5, 6, 7, 8,);


function az (a, ...b) {
    return a, b;
}
az(1, 2, 3, 4, 5, 6, 7, 8,);


function az (a, ...b) {
    return a + b;
}
az(1, 2, 3, 4, 5, 6, 7, 8,);



function u (a,b) {
    return a + b ;
}
u(2,3);
5

var x = (a, b) => {
    return a + b;
}
x (2,3);

// =>ပါရင် {} ရှောင်
var x = (a, b) =>  a + b;
x (2,3);


let outer = function () {
    console.log("Outer function ပါနော်");
    function inner () { 
        console.log ("inner function လေးက အတွင်းက");
    }
    inner();
}
outer ();


function x () {
     var a = "hello";
     let b = "first";
     const c = "you";
     console.log(a, b, c);
}
x ();


    var a = "hello";
    let b = "first";
    const c = "you";
function x () {
    console.log (a, b, c);
}


function a() {
    var p = 29;
    console.log(p);
}
a ();

// ဖန်ရှင်နှစ်ထပ်

function outer(a) {

    function inner (b) {
        return a + b;
    }
    let x = inner (3);
    return x;

}
outer(3);

// ၃ထပ်

function one () {
    console.log ("in one");
}
function tow () {
    console.log("in tow");
}
// စက္ကန့်နဲ့ ပေါ်ခြင်း
setTimeout("one, 2000");
tow ();


function one () {
    console.log ("in one");
    setTimeout(tow, 3000);
}
function tow () {
    console.log("in tow");
}
// စက္ကန့်နဲ့ ပေါ်ခြင်း
setTimeout(one, 2000);



function one (cd) {
    console.log ("in one");
    setTimeout(cd, 3000);
}
function tow (m) {
    console.log(m);
}
setTimeout(() => one(() => tow("in tow")), 3000); 
// setTimeout က function msစက္ကန့် ထည်ရ

ကွေ့ကောက်ပိးသွားသည်
callbackHell
ရိုးရှင်းသည်
Promise Chain
resolve - .then .then .then //အလွယ်ရေးနည်း 
(.allSettings /. all)
reject -.catch

.finally


Promise
Resolve (fullfilled), Reject (failed)
                            .catch //ကျဆုံး
.thin //အေင်မြင်         
.thin
        .finally //အကုန်ပီးသွားသောအခါ


js သဘောတရားသည် တကြိမ်မှ တခါသာ အလုပ်လုပ်ပါသည်

windowမှာ ဘာပေါ်ပေါ် api


အသွားတခု အပြန်တခု သွားလို့ရသော ကုဒ်ကို 
Asynchronous
တစ်ခုစီအတွက် သီးသန့် အလုပ်လုပ်နိုင်


ဆင့်ခိုနက်
Synchronous = တခုပီး တစ်ခု ဆက်တိုက်လုပ်သည်၊ အစဥ်တိုင်းပေါ်လာတာကို ခေါ်ပါသည်.

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


for(var e = 0; e <= 10; e++){
// do this
}
// တူ 

forEach (
    function(){
        // do this
    }
)


callbackHell
Promise
Promise.all
Promise.allSettled
Promise.race

async-await(try-catch)
async function all(){
    await f1('yango');
    await f2('mmd');
}
all ();


let အသက် = 18 ;
console.log (
    `${
        အသက် === 18 ? 'you are so so beautiful, so cute!' : 'hello'
    }`
)


let အသက် = 18 ;
console.log (
    `${
        အသက် === 18 ? 'you are so so beautiful, so cute!' : 
        'hello'
    }`
)

userName.trim() === '' စပေ့ပုတ်ခဲ့ရင် နာမည် မထည့်မချင်း မသွားရ

none က အကုန်ဖယ် hidden နေရာယူတယ် မပျောက်ပါ  ဖျောက်
'visible' ကဖော်ပြလိုက်တယ်  block  တခြားတနေရာကဟာကို ယူပြီးလာပေါ်   ပေါ်

shuffleArray ကလားဖန်ထို lorem နဲ့တူ