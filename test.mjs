import assert from "assert";
import {makeGreeting, makeGreeter} from "./index"

const makeEnglishGreeting = makeGreeter("English");
const makeSpanishGreeting = makeGreeter("Spanish");

assert.equal(makeEnglishGreeting(), "Hello world!");
assert.equal(makeEnglishGreeting("Ben"), "Hello Ben!");
assert.equal(makeSpanishGreeting(), "\u00A1Hola mundo!");
assert.equal(makeGreeting("Edgar", "Spanish"), "\u00A1Hola Edgar!")
console.log("success!");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)
*/
