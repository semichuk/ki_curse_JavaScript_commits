'use strict';

function learnjs(lang, callback){
    console.log(`I learn ${lang}`);
    callback();
}

function done(){
    console.log('I have gone this curse');
}

learnjs('js',done);