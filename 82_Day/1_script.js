//* Elements
var btnGetPost = document.querySelector("#btnGetPost");
var btnGetPostAll = document.querySelector("#btnGetPostAll");
var textUserID = document.querySelector("#textUserID");
var containerPost = document.querySelector("#containerPost");


//* Events
btnGetPost.addEventListener('click', getPost);

//* Api Processes

function getPost(){
    var _Gloria = new XMLHttpRequest();
    _Gloria.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
    
    _Gloria.onload = function(){
        var inputUserID = Number(textUserID.value);

        if(this.status === 200){
            console.log("Succesful");
            
            var jsonDB = JSON.parse(this.responseText);

            var xHtml = "";

            jsonDB.forEach(function(x, key){
                if(inputUserID === x.userId){
                    xHtml += `
                    <div class="card">
                        <div class="card-header">
                            Quote_${key + 1}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p>${x.title}</p>
                            <footer class="blockquote-footer"><cite title="Source Title">${x.body}</cite></footer>
                            </blockquote>
                        </div>
                    </div>`;
                }
            })

            containerPost.innerHTML = xHtml;
            
        }
    }

    _Gloria.send();
}