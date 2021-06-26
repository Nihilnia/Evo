var [a, b] = [10, 20];
console.log(a, b);

[e, f, ...Gloria] = [22, 33, 44, 55];
console.log(e, f, Gloria);

({c, d} = {c: 40, d: 50});
console.log(c, d);


//*Array Destructing

var deneme = ["de", "ne", "me", "mememme", "asdas"];
[cc, dd, ...ee] = deneme;
console.log(cc, dd, ee);

//*Object Destructing

var den = {
    ha: "aaa",
    haha: "bbb"
};

var {ha, haha} = den;
console.log(ha, haha);

