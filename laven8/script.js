// resolve, reject
function အာရုံဆွမ်း () {
  return new Promise ((resolve, reject) => {
    if(true){
    setTimeout(() => {
      resolve("အာရုံဆွမ်း စားပီးပီ");
    }, 2000)
  }else {
    // reject"erro";
  }
  });
}

function နေ့ဆွမ်း () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("နေ့ဆွမ်း စားပီးပီ");
    }, 2400)
  });
}

function ဘုရားဝတ်တတ် () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ဘုရားဝတ်တတ် ပီးပီ");
  }, 1000)
});
}

function စာကျက် () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("စာကျက် ပီးပီ");
  }, 2500)
})
}

အာရုံဆွမ်း ()
.then((val) => {
  console.log(val);
  return နေ့ဆွမ်း();
})
.then((val) => {
  console.log(val);
  return ဘုရားဝတ်တတ် ();
})

.then((val) => {
  console.log(val);
  return စာကျက် ();
})

/*
အာရုံဆွမ်း () {
setTimeout (() => {
  console.log();
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