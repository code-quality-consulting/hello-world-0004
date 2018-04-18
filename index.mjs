const greeting = {
    "English": "Hello",
    "Spanish": "\u00A1Hola",
    "Russian": "Привет",
    "Greek": "γειά σου",
    "Dutch": "Hallo"
}

const world = {
    "English": "world",
    "Spanish": "mundo",
    "Russian": "мир",
    "Greek": "κόσμος",
    "Dutch": "wereld"
}

export function makeGreeter(language) {
    return function (name = world[language]) {
        return greeting[language] + " " +  name + "!";
    };
}
