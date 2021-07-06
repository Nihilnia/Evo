//* XHR Object */

var xhr = new XMLHttpRequest();

xhr.open('GET', '2_deneme.txt', true);


//* Processes */
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Success');
            var intoPage = `
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${xhr.responseText}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>         
            `;
            document.querySelector("body").innerHTML += intoPage;
        } else if (xhr.status === 404) {
            console.log("There is not such file like it.");
        }
    }
}


xhr.send();