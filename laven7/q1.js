document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('form').onsubmit = function (){
        fetch("./currency.txt")
    // fetch("https://open.er-api.com/v6/latest/USD")
    // ဝဒ်ဆိုက်နာမည်ခေါ် သုံးမယ်
        .then((response) => response.json())
   
        // အပေါ်က ဒေတာ txt rate ကို ပြန်ခေါ်
        .then((data) => {
            // const myCurrency = data.rates.MMK;
    
           const value = document.querySelector('#currency').value;
          const rate = data.rates[value];

          document.querySelector(
            "#result"
          ).textContent = `တစ်ဒေါ်လာလျှင် ${value} ${rate}`;
        //   const rate = data.rates.AUD;
        //   document.querySelector("body").textContent = rate;

        })
        .catch ((error) =>{
            console.log("Error", error);
        });
        return false;
    };
});