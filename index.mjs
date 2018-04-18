const greeting = {
    "English": "Hello",
    "Spanish": "\u00A1Hola",
    "Russian": "Привет",
    "Greek": "γειά σου"
}

const world = {
    "English": "world",
    "Spanish": "mundo",
    "Russian": "мир",
    "Greek": "κόσμος"
}

export function makeGreeter(language) {
    return function (name = world[language]) {
        return greeting[language] + " " +  name + "!";
    };
}
