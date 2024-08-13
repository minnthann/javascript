

function fetchData(url, callback) {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
    }) // Corrected arrow function syntax
      .then((data )=> {callback(null, data)
      })
      // errorမရှိဘူး  dataရှိတယ်
      // null   data
      // error     null
      .catch(error => callback(error, null));
  }
  
  function handleData(error, data) {
    if (error) {
      console.error("An error occurred:", error);
    } else {
      console.log("Data received:", data);
    }
  }
  
  // Example URL (replace with any valid API endpoint)
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  
  // Invoke the fetchData function
  fetchData(url, handleData);

  //invoke
//   console.log("hello")
// fetchData(url, handleData);