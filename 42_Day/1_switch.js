var _Gloria = {
    type: "AI",
    situation: "Offline"
};

switch (_Gloria.type){

    case "AI":
        console.log("Gloria AI.");
        break;

    case "Not AI":
        console.log("Not AI, yet.");
        break;
        
    default:
        console.log("IDK..");
};

// Another example (dynamic)

switch (new Date().getDay()){
    case 0:
        console.log("Today is the sunday.");
        break;

    case 1:
        console.log("Today is the monday.");
        break;

    case 2:
        console.log("Today is the tuesday.");
        break;

    case 3:
        console.log("Today is the wednesday.");
        break;

    case 4:
        console.log("Today is the thursday.");
        break;

    case 5:
        console.log("Today is the friday.");
        break;

    default:
        console.log("Today is the saturday.");
}

// And we can make it like this

switch (new Date().getDay()){
    

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Today is the weekday.");
        break;
    case 0:
    case 6:
        console.log("Today is the weekend.");
        break;
}