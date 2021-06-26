// ES5

var machineZ = {
    category: "Phonez",
    names: ["Iphone1, Iphone2, Iphone3"],
    call: function(){
        self.cat = this.category;
        this.names.map(function(x){
            console.log(`${self.cat} ${x}`);
        })
    }
};

machineZ.call();


//ES6

var xMachinez = {
    category: "Computerz",
    names: ["Comp1, Comp2, Comp3"],
    printEm: function(){
        this.names.map((name) =>{
            console.log(`${this.category}, ${name}`)
        })
    }
};

xMachinez.printEm();


//* Other Examples

function Game(){
    this.live = 0,
    this.addLive = function(){
        self.live = this.live;
        this.oneUp = setInterval(function(){
            console.log(++self.live);
        }, 2000)
    }
}

var oyuncu01 = new Game();
oyuncu01.addLive();


//? with ES6

function xGame(){
    this.live = 0,
    this.addLive = function(){
        this.oneUp = setInterval(() => console.log(++this.live), 2000);
    }
}

var player01 = new xGame();
player01.addLive();