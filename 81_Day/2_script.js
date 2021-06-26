var btnClearConsole = document.querySelector('#clearConsole');
btnClearConsole.addEventListener('click', () => {
    console.clear();
})


var btnGetEmp = document.querySelector("#getEmployees");
btnGetEmp.addEventListener('click', getEmployees);

function getEmployees(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '2_workingWith.JSON', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            var theInfo = JSON.parse(this.responseText);
            console.log(theInfo);
        }
    }


    xhr.send();

};