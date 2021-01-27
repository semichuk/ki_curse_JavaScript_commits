"use strict";

let num = 15;

function saySomeThing(text)
{
    console.log(text);
    num = 10;
}

function plus(a,b)
{
    return (a + b);
}

function reti()
{
    let num = 20;
    return num;
}

const xreti = reti();

const x = function()
{
    console.log('hello expression');
};

const y = (a,g) => {a + g};

const stri = 'testy';

console.log(stri.toUpperCase());
console.log(stri);