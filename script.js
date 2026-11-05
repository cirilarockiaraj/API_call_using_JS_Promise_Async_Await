const api_url = document.querySelector("#apiUrl").value || null; //Get the API URL from the input field or set it to null if not provided

const fetchButton = document.querySelector("#fetchButton");
const promiseChainingResponse = document.querySelector(
  "#promiseChainingResponse",
);
const asyncAwaitResponse = document.querySelector("#asyncAwaitResponse");

// Fetch data using Promise chaining
fetchButton.addEventListener("click",() => {
  // Clear previous responses
  promiseChainingResponse.innerHTML = "";
  const response = fetch(api_url); //Get the promise data from the API using fetch
  promiseChainingResponse.innerHTML = "Loading..."; //Display loading message while waiting for the response
  response
    .then((response) => response.json())
    .then((data) => {
      promiseChainingResponse.innerHTML = JSON.stringify(data, null, 2); //Convert the javascript object to a JSON string and display it in the HTML element
      console.log("Promise chaining response:", data);
    })
    .catch((error) => {
      promiseChainingResponse.innerHTML = `Error: ${error}`; //error handling
      console.error("Error fetching data:", error);
    });

    //Async/Await implementation
    fetchData();
});


async function fetchData() {
  try {
    asyncAwaitResponse.innerHTML = "";
    const response = await fetch(api_url); //Get the promise data from the API using fetch
    asyncAwaitResponse.innerHTML = "Loading..."; //Display loading message while waiting for the response
    const data = await response.json(); //Wait for the response to be converted to JSON
    asyncAwaitResponse.innerHTML = JSON.stringify(data, null, 2); //Convert the javascript object to a JSON string and display it in the HTML element
    console.log("Async/Await response:", data);
  } catch (error) {
    asyncAwaitResponse.innerHTML = `Error: ${error}`; //error handling
    console.error("Error fetching data:", error);
  }
}