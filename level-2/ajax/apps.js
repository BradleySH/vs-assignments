//  XMLHttpRequest

//  how do we create a request (xhr)
// what parts of this object are important for our request 

//  xhr.onreadystatechnage
//  xhr.readyState
//  xhr.status



//  xhr.open()
//  xhr.send()
// url: https://swapi.co/api/people
//  xhr.response Text

 const xhr = new XMLHttpRequest()
         // method  // URL                       // async
//  xhr.open("GET", "https://swapi.dev/api/people", true)
//  xhr.send()


 xhr.onreadystatechange = function(){
     if(xhr.readyState === 4 && xhr.status === 2){
         //console.log(typeof xhr.responseText);
         //giant string returned
         const JSONdata = xhr.responseText
         const data = JSON.parse(JSONdata)
         console.log(data);
         showData(data)

     } else if(xhr.readyState === 4 && xhr.status !== 200){
         console.log(xhr.responseText);
     }
 }

 function showData(luke){
     const h1 = document.createElement("h1")
     h1.textContent = luke.name
     document.body.appendChild(h1)
 }
 xhr.open("GET", "https://swapi.dev/api/people", true)
 xhr.send()


// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const jsonData = xhr.responseText;
//         const data = JSON.parse(jsonData);
//         const name = data.name;
//         document.getElementById("demo1").textContent = "JSON results: " + jsonData;
//         document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
//         spaceshipurl = data.starships[0];
//         console.log(spaceshipurl);
//     }
// };

// xhr.open("GET", "http://swapi.dev/api/people/1/", true);
// xhr.send();
//xhr.readyState
//stage 1 - request has been sent
//      2
//      3
//      4 - this is what we need

//xhr.status
    // 200
    // 404 - not found
    // 201
    // 500