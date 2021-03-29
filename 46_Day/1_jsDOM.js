//Reaching to document object

let _Gloria = window.document;

//Reaching a particular object

let headTag = _Gloria.head;
console.log("Here is the head tag", headTag);
console.log();


for (let f = 0; f < _Gloria.all.length; f++){
    console.log("Item number:" + (f + 1), _Gloria.all[f]);
}

//For example: Title

let theTitle = _Gloria.title;
console.log("Title of the page:", theTitle);

//Some methods of document object

let examples;
examples = window.document;

examples = document.all;
examples = document.all.length;
examples = document.all[5];

examples = document.head;
examples = document.body;
examples = document.anchors;
examples = document.URL;
examples = document.domain;
examples = document.images;
examples = document.title;
examples = document.forms;
examples = document.forms[0];
examples = document.forms[0].id;
examples = document.forms[0].method;
examples = document.forms[0].action;

examples = document.scripts;
examples = document.scripts[2];
examples = document.scripts[2].getAttribute('src');