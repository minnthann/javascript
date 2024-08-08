const flights = [
    {
        "departureIATA": "RGN",
        "arrivalIATA": "BKK",
        "departureTime": "09:00",
        "departureDate": "Feb 01, 2024",
        "arrivalDate": "Feb 01, 2024",
        "arrivalTime": "10:00",
        "status": "OK",
        "duration": "1h 00m"
    },
    {
        "departureIATA": "BKK",
        "arrivalIATA": "RGN",
        "departureTime": "13:00",
        "departureDate": "Feb 01, 2024",
        "arrivalTime": "14:00",
        "status": "Delayed",
        "duration": "1h 00m"
    },
    {
        "departureIATA": "TPE",
        "arrivalIATA": "JFK",
        "departureTime": "06:00",
        "departureDate": "Jan 03, 2024",
        "departureDate": "Jan 03, 2024",
        "arrivalTime": "09:00",
        "status": "OK",
        "duration": "17h 00m"
    },
    {
        "departureIATA": "JFK",
        "arrivalIATA": "TPE",
        "departureTime": "13:00",
        "departureDate": "Jan 01, 2024",
        "arrivalTime": "06:00",
        "arrivalDate": "Jan 01, 2024",
        "status": "Delayed",
        "duration": "17h 00m"
    },
    {
        "departureIATA": "RGN",
        "arrivalIATA": "TPE",
        "departureTime": "13:00",
        "departureDate": "Jan 01, 2024",
        "arrivalTime": "06:00",
        "arrivalDate": "Jan 01, 2024",
        "status": "Delayed",
        "duration": "17h 00m"
    },
    {
        "departureIATA": "RGN",
        "arrivalIATA": "JFK",
        "departureTime": "13:00",
        "departureDate": "Jan 01, 2024",
        "arrivalTime": "06:00",
        "arrivalDate": "Jan 01, 2024",
        "status": "Delayed",
        "duration": "17h 00m"
    }
  ];


// function createOption(){
//     let dept = document.querySelector("#departure");
//     let arri = document.querySelector("#arrival");

//     for (let i=0; i< airports.length; i++){
//         let ap = airports[i];
//         let option =document.createElement("option");
//         option.value = ap.iata;
//         option.textContent =`${ap.name} (${ap.iata})`;
//         dept.appendChild(option);
//         arri.appendChild(option.cloneNode(true));
//     }
// }

// createOption();


// airports.forEach((ap)=> {
//     let option = document.createElement("option");
//     option.value = ap.iata;
//     option.textContent = `${ap.name} (${ap.iata})`;
//     dept.appendChild(option);
//     arri.appendChild(option.cloneNode(true));
// })

// function checkingFlight(){
//     let deptVal = document.querySelector("#departure").value;
//     let arriVal = document.querySelector("#arrival").value;
//     let result = document.querySelector("#result");
    
//     if(!deptVal || !arriVal) {
//         result.innerHTML = `<p>တစ်ခုကျန်နေသေးတယ်</p> `;
//         return;
//     }

//     let flight = flights.find (
//         (f) => f.departureIATA === deptVal && f.arrivalIATA === arriVal
//     );
//     console.log(flight);
//     let deptF = airports.find((df) => df.iata === deptVal);
//     console.log(deptF);
//     let arriF = airports.find((af) => af.iata === arriVal);
//     console.log(arriF);

//     if (flight && deptF && arriF) {
//         result.innerHTML = `
//         <h1>လေကြောင်းခရီးစဥ်</h1>
//         <ul>
//             <li> ထွက်ခွါမည့်လေဆိပ်- ${deptF.name} (${deptF.iata})</li>
//         </ul>` ;
//     }else{
//         result.innerHTML = `<p>  မှားနေပါတယ်</p>`;
//     }
// }

// document.addEventListener("DOMContentLoaded", ()=>{
//     createOption();
//     // checkingFlight();
//     document
//     .querySelector("#checkStatus")
//     .addEventListener("click", checkingFlight);
// });
