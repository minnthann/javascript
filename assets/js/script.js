// Step 1 getting connection
// alert("welcome!");


// Step 2
// var counter = 0; 
// counter = counter + 1;  အပေါ်အောက်တူ

// counter += 1;
// alert(counter);

// querySelector ရှာကြည့်

// step 3 

// let counter = 0;
// counter = counter + 1;
//  အတိုချုပ်ပုံ
// counter +=1;
// counter ++;



// step 3 
let counter = 0;

function count (){
    counter ++;
    document.querySelector ('h1').innerHTML = counter ;
    
    if (counter % 10 ===0) {
        alert(`သိပ်တော်တာပဲ အခုနံပါတ်က $ {counter}`);
    }
}



// 2
// document.querySelector ('h1').innerHTML = counter ;




// 1
// let counter = 0;
// document.querySelector ('h1').innerHTML = "hello yangon!"

// function count (){
//     alert(counter);
// }