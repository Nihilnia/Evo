//* XHR Object */
var xhr = new XMLHttpRequest();

//* Processes*/
xhr.open('GET', 'Gloria.txt', true);

xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            setTimeout(() =>{
                console.log(xhr.responseText);
            }, 2000);
            console.log("request finished and response is ready..");
        }
    }
}

xhr.send();