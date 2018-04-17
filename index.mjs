const greeting = {
    "English": "Hello",
    "Spanish": "\u00A1Hola",
    "Russian": "Привет"
}

const world = {
    "English": "world",
    "Spanish": "mundo",
    "Russian": "мир"
}

export function makeGreeter(language) {
    return function (name = world[language]) {
        return greeting[language] + " " +  name + "!";
    };
}
