


function createOption(){
    let dept = document.querySelector("#departure");
    let arri = document.querySelector("#arrival");

    for (let i=0; i< airports.length; i++){
        let ap = airports[i];
        let option =document.createElement("option");
        option.value = ap.iata;
        option.textContent =`${ap.name} (${ap.iata})`;
        dept.appendChild(option);
        arri.appendChild(option.cloneNode(true));
    }
}

// createOption();


// airports.forEach((ap)=> {
//     let option = document.createElement("option");
//     option.value = ap.iata;
//     option.textContent = `${ap.name} (${ap.iata})`;
//     dept.appendChild(option);
//     arri.appendChild(option.cloneNode(true));
// })

function checkingFlight(){
    let deptVal = document.querySelector("#departure").value;
    let arriVal = document.querySelector("#arrival").value;
    let result = document.querySelector("#result");
    
    if(!deptVal || !arriVal) {
        result.innerHTML = `<p>တစ်ခုကျန်နေသေးတယ်</p> `;
        return;
    }

    let flight = flights.find (
        (f) => f.departureIATA === deptVal && f.arrivalIATA === arriVal
    );
    console.log(flight);
    let deptF = airports.find((df) => df.iata === deptVal);
    console.log(deptF);
    let arriF = airports.find((af) => af.iata === arriVal);
    console.log(arriF);

    if (flight && deptF && arriF) {
        result.innerHTML = `
        <h1>လေကြောင်းခရီးစဥ်</h1>
        <ul>
            <li> ထွက်ခွါမည့်လေဆိပ်- ${deptF.name} (${deptF.iata})</li>
        </ul>` ;
    }else{
        result.innerHTML = `<p>  မှားနေပါတယ်</p>`;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    createOption();
    // checkingFlight();
    document
    .querySelector("#departure")
    .addEventListener("change", checkingFlight);

    document
    .querySelector("#arrival")
    .addEventListener("change", checkingFlight);
});
