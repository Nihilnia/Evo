//* Get- TXT */

function getTxt(){
    fetch("Gloria.txt")
    .then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}

getTxt();


//* JSON */

function getJson(){
    fetch("Gloria.JSON")
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}

getJson();
//* EXTERNAL API */

function getExternalApi(){
    fetch("https://randomuser.me/api/")
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data.results);
    }).catch(err => {
        console.log(err);
    })
}

getExternalApi();



function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    var data = {
        method: "POST",
        body: JSON.parse({
            userId: 2,
            title: "sample title",
            body: "sample body"
        }),
        headers: new Headers({
            "content-type: application/json"})
    }

    fetch(url, data)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
}

postExternalApi();