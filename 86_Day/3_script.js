var btnPost = document.querySelector("#btnPost");
btnPost.addEventListener('click', postIt);

function postIt(){
    var xhrGloria = new XMLHttpRequest();
    xhrGloria.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhrGloria.setRequestHeader('Content-type', 'application/json; charset = utf-8');

    var content = {
        name: "Gloria",
        purpose: "Exercise",
        id: 0
    };

    var jsonContent = JSON.stringify(content);

    xhrGloria.onload = () => {
        if(xhrGloria.status === 201 && xhrGloria.readyState === 4){
            console.log("Post process success..");
            console.log(xhrGloria.responseText);
            console.log();
        }
    }

    xhrGloria.send(jsonContent);
}