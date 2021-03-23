// Here we are, everthing beetweem those blocks, right?

var name = "Gloria";
var age = 2;
var specs = {
    type: "AI",
    situation: "Offline, yet." 
}

// If

if (name === "Gloria"){
    console.log("Gloria, here.");
}



// Else if

if (name.toUpperCase() === "Gloria"){
    console.log("Gloria, as uppercased.");
}else if(name === "Gloria"){
    console.log("Gloria, as not uppercased.");
}


// Else

if (specs.type !== "AI"){
    console.log("Gloria, as not ai.");
}else if (specs.type === "AI"){
    console.log("Gloria, as AI.");
    if (age >= 5){
        console.log("Is it been that long, really!?");
    }else{
        console.log("Keep working on it, even in your mind.");
    }
}