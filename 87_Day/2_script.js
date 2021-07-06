var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

function getPosts(){

    return new Promise((resolve, reject) => {

        xhr.onload = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText);
            }else{
                reject("Bir hata olustu");
            }
            
        }
    })
}

xhr.send();

getPosts()
.then(data => {
    console.log(JSON.parse(data));
})
.catch(err => {
    console.log(err);
})