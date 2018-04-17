const dictionary = [
    {
        language: "English",
        greeting: "Hello",
        world: "world"
    },
    {
        language: "Spanish",
        greeting: "\u00A1Hola",
        world: "mundo"
    },
    {
        language: "Russian",
        greeting: "Привет",
        world: "мир"
    }
];

export function makeGreeter(language) {
    if (language === "Spanish") {
        return function (name = dictionary[1].world) {
            return dictionary[1].greeting + " " + name + "!";
        };
    }
    if (language === "Russian") {
        return function (name = dictionary[2].world) {
            return dictionary[2].greeting + " " + name + "!";
        };
    }
    return function (name = dictionary[0].world) {
        return dictionary[0].greeting + " " +  name + "!";
    };
}
