// resolve, reject
function အာရုံဆွမ်း () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      reject("အာရုံဆွမ်း စားပီးပီ")
    }, 2000)
  })
}

function နေ့ဆွမ်း () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("နေ့ဆွမ်း စားပီးပီ")
    }, 2400)
  })
}

function ဘုရားဝတ်တတ် () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("ဘုရားဝတ်တတ် ပီးပီ")
  }, 2500)
})
}

function စာကျက် () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("စာကျက် ပီးပီ")
  }, 2500)
})
}

// အာရုံဆွမ်း ()
// .then((val) => {
//   console.log(val);
//   return နေ့ဆွမ်း();
// })
// .then((val) => {
//   console.log(val);
//   return ဘုရားဝတ်တတ် ();
// })

// .then((val) => {
//   console.log(val);
//   return ဘုရားဝတ်တတ် ();
// })

// .then((val) => {
//   console.log(val);
//   return စာကျက် ();
// })

function အာရုံဆွမ်း () {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      let Fun1 = true;
      if(Fun1) {
        resolve("အာရုဏ်ဆွမ်း ကိစ္စ dome");
      }else { 
        reject("အာရုံဆွမ်းတော့ ငတ်ပီ )MG");
      }
    }, 3000);
  });
}

အာရုံဆွမ်း()
.then ((e) => {
  console.log(e);
})
.catch((w) => {
  console.log (w);
})


/*
အာရုံဆွမ်း (cd) {
setTimeout (() => {
  console.log
  })
}


အာရုံဆွမ်း (() =>{ 
နေ့ဆွမ်း(() => { 
ဘုရားဝတ်တတ် (() => { 
  console.log("end")
})
})
})


let fruits = ["apple", "banana", "cucumber", "orange", "carrot"];
fruits.forEach ((e, i)=> {
    setTimeout(()=> {
        console.log(e);
    }, i * 1000)//တခုချင်းဆီ ထုတ်ပြဖို့ မြှာက်ပါ
})
count ();

*/