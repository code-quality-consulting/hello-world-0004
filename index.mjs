export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        if (name === "") { 
            const world = "mundo";
            return "\u00A1Hola " + world + "!";
        }
        return "\u00A1Hola " + name + "!";
    }
    return "Hello " + name + "!";
}
