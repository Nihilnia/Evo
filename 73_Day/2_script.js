$(document).ready(function(){
    console.log("Everything is ready to go.");

    var theNumbCheck = {
     numbCheck: function(p){
        if (typeof p !== "number"){
            console.log("Given parameter is not a number!");
        }else{
            var min = 0;
            var max = 100;

            if (p >= min && p <= max){
                console.log("The number is in the range");
            }else{
                console.log("The number is not in the range");
            }
        }
    }
};

    console.log("Normal usage:");
    theNumbCheck.numbCheck(20);

    console.log();

    //* Usage with Call */

    var Nihil = {
        
    };
    console.log("Call usage:");
    theNumbCheck.numbCheck.call(Nihil, 40);

});
