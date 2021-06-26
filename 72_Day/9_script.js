function question(hobby){

    switch(hobby){
    
        case "car":
            return function(name){
                console.log("Do you have a car", name, "?");
            }
        break;
        
        case "book":
            return function(name){
                console.log("What is your fav book", name, "?");
            }
        break;

        case "software":
            return function(name, type){
                console.log("Are you interested in", type, ",", name, "?");
            }
        break;

        default:
            return function(name){
                console.log("Are you disco?", name);
            }
        
    
    };

};

var questionBook = question('book');
questionBook("nihil");

var questionSoftware = question('software');
questionSoftware("nihil", "JS");