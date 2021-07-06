function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    var data = {
        method: "POST",
        body: JSON.stringify({
            userId: 2,
            title: "sample title",
            body: "sample body"
        }),
        headers: new Headers({
            "content-type": "application/json"})
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
