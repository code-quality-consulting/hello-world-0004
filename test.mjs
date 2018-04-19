import assert from "assert";
import {makeGreeter} from "./index"

const greet = {
    "english": makeGreeter("English"),
    "spanish": makeGreeter("Spanish"),
    "russian": makeGreeter("Russian"),
    "greek": makeGreeter("Greek"),
    "dutch": makeGreeter("Dutch"),
    "german": makeGreeter("German"),
    "french": makeGreeter("French"),
    "korean": makeGreeter("Korean"),
    "japanese": makeGreeter("Japanese"),
    "chinese": makeGreeter("Chinese"),
    "hebrew": makeGreeter("Hebrew")
};

assert.equal(greet.english(), "Hello world!");
assert.equal(greet.english("Ben"), "Hello Ben!");
assert.equal(greet.spanish(), "\u00A1Hola mundo!");
assert.equal(
    greet.spanish("Edgar", "Spanish"), 
    "\u00A1Hola Edgar!"
);
assert.equal(greet.russian(), "Привет мир!");
assert.equal(greet.greek(), "γειά σου κόσμος!");
assert.equal(greet.dutch(), "Hallo wereld!");
assert.equal(greet.german("Zach"), "Hallo Zach!");
assert.equal(greet.french("Madame"), "Bonjour Madame!");
assert.equal(greet.korean(), "여보세요 세계!");
assert.equal(greet.japanese(), "こんにちは 世界!");
assert.equal(greet.chinese(), "你好 世界");
assert.equal(greet.hebrew(), "םלוע םולש");
console.log("success!");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)
*/
