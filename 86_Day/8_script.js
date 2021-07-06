var inputNumber = document.querySelector("#inputNumber");
var btnGetPeople = document.querySelector("#btnGetPeople");
var divFemalez = document.querySelector("#femaleZ");
var divMalez = document.querySelector("#maleZ");

btnGetPeople.addEventListener('click', getPeople);


function getPeople(){
    
    var url = "https://randomuser.me/api/?results=" + inputNumber.value;
    console.log(url);

        var xhrGloria = new XMLHttpRequest();
        xhrGloria.open('GET', url, true);

        xhrGloria.onload = function(){
            if(xhrGloria.readyState === 4 && xhrGloria.status === 200){
                var people = JSON.parse(xhrGloria.responseText);
                console.log(people);

                people.results.forEach((x) => {
                    if(x.gender === "female"){
                        divFemalez.innerHTML += `
                        <div class="card">
                        <img src="${x.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${x.name.title} ${x.name.first} ${x.name.last} </h5>
                            <p class="card-text">${x.location.timezone.description}</p>
                            <a href="${x.picture.large}" class="btn btn-primary">See her</a>
                        </div>
                        </div>
                        `;
                    }else{
                        divMalez.innerHTML += `
                        <div class="card">
                        <img src="${x.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${x.name.title} ${x.name.first} ${x.name.last} </h5>
                            <p class="card-text">${x.location.timezone.description}</p>
                            <a href="${x.picture.large}" class="btn btn-primary">See him</a>
                        </div>
                        </div>
                        `;
                    }
                });
            }
        }
        xhrGloria.send();
}