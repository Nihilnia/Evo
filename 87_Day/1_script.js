let myObj = {
    method: "GET",
    url: "https://randomuser.me/api/?results=5"
}

let request = (obj) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || 'GET', obj.url);


        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status <= 300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }

        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.send();
    });
}

request(myObj)
.then(function(data){
    console.log(JSON.parse(data));
})
.catch(function(err){
    console.log(err);
});