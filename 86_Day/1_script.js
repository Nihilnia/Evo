var btnPrintGloria = document.querySelector("#printGloria");
btnPrintGloria.addEventListener('click', printGloria);

function printGloria(){
    document.querySelector("#tableGloria").querySelector('tbody').innerHTML = `
                <tbody>
                </tbody>`;

    var xhrGloria = new XMLHttpRequest();

    xhrGloria.open('GET', "1_Gloria.JSON", true);

    xhrGloria.onload = () => {
        if(xhrGloria.readyState === 4){
            if(xhrGloria.status === 200){
                var parsedJson = JSON.parse(xhrGloria.responseText);
                document.querySelector("#loading").innerHTML += `<img src = '200.gif'/>`;
                
                setTimeout(() =>{
                    var htmlThing ="";

                    parsedJson.forEach((x) =>{
                    htmlThing += `
                    <tr>
                        <td>${x.name}</td>
                        <td>${x.purpose}</td>
                        <td>${x.id}</td>
                    </tr>
                    `;
                })


                document.querySelector("#tableGloria").querySelector('tbody').innerHTML += htmlThing;
                document.querySelector("#loading").innerHTML = `<div id="loading"></div>`;
                htmlThing = "";
                }, 2000)    
                
                

                
            }
        }
    }

    xhrGloria.send();
}





