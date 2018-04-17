import assert from "assert";
import {makeGreeter} from "./index"

const makeEnglishGreeting = makeGreeter("English");
const makeSpanishGreeting = makeGreeter("Spanish");
const makeRussianGreeting = makeGreeter("Russian");

assert.equal(makeEnglishGreeting(), "Hello world!");
assert.equal(makeEnglishGreeting("Ben"), "Hello Ben!");
assert.equal(makeSpanishGreeting(), "\u00A1Hola mundo!");
assert.equal(
    makeSpanishGreeting("Edgar", "Spanish"), 
    "\u00A1Hola Edgar!"
);
assert.equal(makeRussianGreeting(), "Привет мир!");
console.log("success!");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)
*/
