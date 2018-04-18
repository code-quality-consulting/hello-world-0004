const greeting = {
    "English": "Hello",
    "Spanish": "\u00A1Hola",
    "Russian": "Привет",
    "Greek": "γειά σου",
    "Dutch": "Hallo",
    "German": "Hallo",
    "French": "Bonjour",
    "Korean": "여보세요",
    "Chinese": "你好"
}

const world = {
    "English": "world",
    "Spanish": "mundo",
    "Russian": "мир",
    "Greek": "κόσμος",
    "Dutch": "wereld",
    "German": "Welt",
    "French": "tous le monde",
    "Korean": "세계",
    "Chinese": "世界"
}

export function makeGreeter(language) {
    return function (name = world[language]) {
        if (language === "Chinese") {
            return greeting[language] + " " + name;
        }
        return greeting[language] + " " +  name + "!";
    };
}
