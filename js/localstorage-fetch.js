// It allows you to store, read, add, modify, and delete data items for that web site domain.

// local storage - The data is available even after browser closed.
// session storage - sessionStorage object stores data for one session.
// The data is deleted when the browser/tab is closed.

// the storage object will be used whenever we want to store temp information like session id and user id and Token

var userData = {
  name: "reddy",
  id: "123",
};

localStorage.setItem("userData", JSON.stringify(userData));

sessionStorage.setItem("userData", JSON.stringify(userData));

// fetch API
// syntax - fetch keyworj for the url
//The Fetch API interface allows web browser to make HTTP requests to web servers.No need for XMLHttpRequest anymore

async function getData() {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    console.log(json, "my data");

    for (let index = 0; index < json.length; index++) {
      const id = json[index].id;
      let elem = document.createElement("div");
      elem.textContent = "I am div" + id;
      elem.id = "div_" + id;
      elem.style.width = "100px";
      elem.style.height = "50px";
      elem.style.background = "blue";
      elem.style.margin = "10px";
      document.body.appendChild(elem);
      // document.write( "<br/>" + id)
    }
    var ele1 = document
      .getElementById("div_1")
      .addEventListener("click", console.log("hi"));
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

getData();

document.addEventListener("click", function (e) {
  if (e.target.id.split("_")[1]) {
    //   console.log(e.target.id.split("_")[1],'hi')
    console.log("you clicked on", e.target.id.split("_")[1] )
  }
});
