// let getData = ''

//တောင်းနည်းလေးမျိုး
// fetch(getData)
// fetch('https://', {
// })
// .then

// GET 

// POST, body   ထည့်
// put
// delete

// let url = 'https'
// fetch url, {

// }

fetch('https://', {
    method: 'GET'//ရိုသေလေးစားစွာတောင်းပုံ
})
// ရှိတယ် မရှိဘူး အကြောင်းပန်
.then (response =>{
    // အကယ်၍အဆင်ပြေရင်
    if (response.ok){
        console.log("success:");
    }else {
        console.log("not succese");
    }
    return response.json();
    // console.log(response)
})
// ရရင်အကြောင်းကြား
.then ((data)=> {
    console.log(data);
})
// နက်ဝက် error
.catch(error => {
    console.log ("error:", error)
})
// .catch (data => console.log(data));
//မှန်မှန် 
// .catch

Promise.allSettled

Promise.race //အမြန်ဆုံး တခုကို အရင်ပြ

