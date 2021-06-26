function welcomeEm(){
    var dayZ = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];
    
    var theDate = new Date();
    var msg = "Welcome, today is" + dayZ[theDate.getDate() + 1];
    
    return msg;
}

console.log(welcomeEm());


//* Immadiate Function

(function(name){
    var dayZ = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];
    
    var theDate = new Date();
    var msg = `Welcome ${name} , today is ${dayZ[theDate.getDate() + 1]}.`;
    
    console.log(msg);
}("Gloria")); 