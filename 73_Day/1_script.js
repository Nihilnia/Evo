//* Call */

var welcome = function (){
    console.log("Welcome", this.name);
}

var Nihil = {
    name: "Nihil",
    age: 10
}

var Gloria = {
    name: "Gloria",
    age: 12
}

welcome.call(Nihil);
welcome.call(Gloria);

//* Apply */

welcome.apply(Nihil);
welcome.apply(Gloria);


//* Bind */

welcomeNihil = welcome.bind(Nihil);
welcomeGloria = welcome.bind(Gloria);

welcomeNihil();
welcomeGloria();

//NOTE: If the function doesn't get any argument;
//usage of the call and apply are the same

//But if the function getting parameter/s
//their usage is bit different, Like so:

var greetings = function(p1, p2) {
    console.log(`Welcome ${this.name}
    Are you interested in ${p1} and ${p2}?`);
}

greetings.call(Nihil, "Python", "JavaScript");
greetings.apply(Gloria, ["Python", "JavaScript"]);

greetingsNihil = greetings.bind(Nihil);
greetingsGloria = greetings.bind(Gloria);
greetingsNihil("Angular", "Asp.NET");
greetingsGloria ("Angular", "Asp.NET");