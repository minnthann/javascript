
function အာရုံဆွမ်း () {
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        // let Fun1 = true;
        let Fun1 = false;
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
  
  