const newTaskName = document.querySelector("#newTaskName");
const btnAddTask = document.querySelector("#btnAddTask");
const taskList = document.querySelector("#taskList");

//Control
console.log(newTaskName);
console.log(btnAddTask);
console.log(taskList);

//Task Object
// var allTheTasks = [JSON.parse(localStorage.getItem("All Tasks"))];
let allTheTasks = [];
if (localStorage !== null){
    for (let f = 0; f < localStorage.length; f++){
        allTheTasks.push(localStorage[f]);
    }
}
    localStorage.getItem('All Tasks')
// for (let f = 0; f < localStorage.length; f++){
//     allTheTasks.push(localStorage.getItem(`All Tasks${f}`))
// }
var indexNumb = 0;

var itemValue = 0;

//Listing all the task when the page open
var readTheStorage = JSON.parse(localStorage.getItem("All Tasks"));

if (readTheStorage !== null){
    console.log("All the tasks:");
    readTheStorage.forEach(function(f){
        console.log(f);
        var newItem = document.createElement("li");
        newItem.setAttribute("class", "list-group-item");
        newItem.setAttribute("value", `${itemValue}`);
        newItem.innerHTML = `${f} <i class="fas fa-times" id="deneme"></i>`;
        taskList.appendChild(newItem);
        itemValue += 1;
    })
}





//Button Click - Add New Task
btnAddTask.addEventListener('click', function(f){
    console.log(newTaskName.value);
    
    var newItem = document.createElement("li");
    newItem.setAttribute("class", "list-group-item");
    newItem.setAttribute("value", `${itemValue}`);
    newItem.innerHTML = `${newTaskName.value} <i class="fas fa-times" id="deneme"</i>`;
    f.target.appendChild(newItem);
    taskList.appendChild(newItem);
    itemValue += 1;

    
    //Adding to localStorage
    if (newTaskName.value !== null){
        allTheTasks.push(newTaskName.value);
        localStorage.setItem('All Tasks', JSON.stringify(allTheTasks));
    }


    
});

//Button Click - Delete the Task
const btnDelete = document.querySelectorAll(".fa-times");
btnDelete.forEach(function(everyX){
    everyX.addEventListener('click', function(f){
        f.target.parentElement.remove();
        // console.log(Number(f.target.parentElement.getAttribute("value")));
        readTheStorage.splice(Number(f.target.parentElement.getAttribute("value")), 1);
        localStorage.clear();

        localStorage.setItem('All Tasks', JSON.stringify(readTheStorage));
        // localStorage.removeItem(`All Tasks${delete f.parentElement.textContent}`);
    })
})

