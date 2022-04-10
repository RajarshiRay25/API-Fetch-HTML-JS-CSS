console.log("Start");

myBtn = document.getElementById("myBtn");

content = document.getElementById("content");

function fetchData() {
    url="fetch.txt";
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log(data);
    })
}

console.log("Before Running");
fetchData()
console.log("AFter Running");