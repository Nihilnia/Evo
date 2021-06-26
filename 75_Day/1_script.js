//Reference Error
//Type Error
//Syntax Error


var Gloria = {
    name: "_Gloria"
}

try{
    console.log(Gloria.email);
    if(!Gloria.email){
        throw new Error('Haaaa');
    }
}catch(e){
    console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);
    // console.log(typeof e);
}finally{
    console.log("I am always working bitchez.");
}