var btnGetPost = document.querySelector("#btnGetPost");
var btnGetAll = document.querySelector("#btnGetAll");
var btnClear = document.querySelector("#btnClear");
var inputUser = document.querySelector("#userInput");
var areaPost = document.querySelector("#postArea");

btnGetPost.addEventListener('click', getPost);
btnGetAll.addEventListener('click', getAll);
btnClear.addEventListener('click', clearScreen);

function clearScreen(){
    document.querySelector("#container").innerHTML = `
    <div id="container">
    <div id="processes">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" id="userInput" placeholder="User ID" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <button type="button" id="btnGetPost" class="btn btn-outline-success">User' s Post</button>
        <button type="button" id="btnGetAll" class="btn btn-outline-danger">All Posts</button>
        <button type="button" id="btnClear" class="btn btn-outline-warning">Clear</button>
    </div>
    <div id="postArea"></div>
</div>
    `;

    console.clear();
}


function getPost(){
    var xhrGloria = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/posts";
    xhrGloria.open('GET', url, true);

    var enterInput = inputUser.value;
    
    xhrGloria.onload = function(){
        jsonArray = JSON.parse(xhrGloria.responseText);
        console.log("User ID:", enterInput, "gettin posts..");
        console.log();
        console.log();
        var htmlText = "";

        jsonArray.forEach((x) =>{
            if(x.userId === Number(enterInput) && x.userId % 2 === 1){
                console.log(x);

                htmlText += `
                    <div class="card" style="width: 18rem;" id = "userPost">
                    <img src="/86_Day/img/original.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h6>User ID: ${x.userId} Post: ${x.id}</h6>
                    <h5 class="card-title">User ID: ${x.title}</h5>
                    <p class="card-text">${x.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`;
            }else if(x.userId === Number(enterInput)){
                console.log(x);
                
                htmlText += `
                    <div class="card" style="width: 18rem;" id = "userPost">
                    <img src="/86_Day/img/1524532090_kill bill.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h6>User ID: ${x.userId} Post: ${x.id}</h6>
                    <h5 class="card-title">User ID: ${x.title}</h5>
                    <p class="card-text">${x.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`;
            }
        })

        areaPost.innerHTML += htmlText;
    }

    xhrGloria.send();
}

function getAll(){
    var xhrGloria = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/posts";
    xhrGloria.open('GET', url, true);

    xhrGloria.onload = () =>{
        jsonArray = JSON.parse(xhrGloria.responseText);

        var htmlText = "";

        jsonArray.forEach((x) =>{
            if(x.userId % 2 === 1){
                console.log(x);

                htmlText += `
                    <div class="card" style="width: 18rem;" id = "userPost">
                    <img src="/86_Day/img/original.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h6>User ID: ${x.userId} Post: ${x.id}</h6>
                    <h5 class="card-title">User ID: ${x.title}</h5>
                    <p class="card-text">${x.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`;
            }else if(x.userId % 2 === 0){
                htmlText += `
                    <div class="card" style="width: 18rem;" id = "userPost">
                    <img src="/86_Day/img/1524532090_kill bill.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h6>User ID: ${x.userId} Post: ${x.id}</h6>
                    <h5 class="card-title">User ID: ${x.title}</h5>
                    <p class="card-text">${x.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`;
            }
            
        })

        areaPost.innerHTML += htmlText;
    }

    xhrGloria.send();
}
