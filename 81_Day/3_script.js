//* Buttons
var btnGetEmp = document.querySelector("#btnGetEmp");
var btnClear = document.querySelector("#btnClearConsole");

var imgLoading = document.querySelector("#imgLoading");

btnGetEmp.addEventListener('click', getEmployees);

function getEmployees(){
    var xhrObject = new XMLHttpRequest();
    xhrObject.open('GET', '3_employees.JSON', true);

    imgLoading.style.display = "block";

    setTimeout(() =>{
        
        xhrObject.onload = function(){
            if(this.status === 200){
                console.log(xhrObject.responseText);
                var employeesJSON = JSON.parse(this.responseText);
                console.log(employeesJSON);
    
                let tableEmployees = "";
    
                employeesJSON.Employees.forEach(function(emp){
                    tableEmployees += `
                    <tr>
                        <td>${emp.name}</td>
                        <td>${emp.surname}</td>
                        <td>${emp.age}</td>
                    </tr>
                    `;
    
                    
                })
    
                var empContainer = document.querySelector("#tableEmp");
                empContainer.innerHTML = tableEmployees;
                empContainer.id = "tableEMP";
    
                
    
                
            }
        }
    
        xhrObject.send();
        imgLoading.style.display = "none";
    }, 1500)

    
    
}