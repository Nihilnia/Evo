try{
    console.log(Gloria);
    if(!Gloria){
        throw new ReferenceError('aa');
    }
}catch(e){
    console.log(e);
}