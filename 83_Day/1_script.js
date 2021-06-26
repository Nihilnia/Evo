//* Elementz
var btnPost = document.querySelector("#btnPost");


//* Eventz
btnPost.addEventListener('click', postIt);

//* Function
function postIt(){

    var xhr = new XMLHttpRequest();
    var data = {
        userId: 1,
        title: "denemeTitle",
        body: "denemeBody"
    }

    var jsoN = JSON.stringify(data);
    var url = "https://jsonplaceholder.typicode.com/posts";

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset = utf-8');

    xhr.onload = function(){

        if(xhr.status === 201 && xhr.readyState === 4){
            console.log("The information below is sent to server:");
            console.log(xhr.responseText);
        }
        
    }


    xhr.send();

}