const { question } = require("readline-sync")

const produkte =[
{name: "laptop", preis: 999.99},
{name: "smartphone", preis: 499.99},
{name: "kopfhörer", preis: 99.99},
{name: "monitor", preis: 199.99},
{name: "tastatur", preis: 49.99},
{name: "maus", preis: 29.99},
{name: "drucker", preis: 149.99},
{name: "tablet", preis: 199.99},
{name: "lautsprecher",preis: 79.99},
{name: "usbstick", preis: 19.99},
];

console.log("Willkommen im online-shop")
const name = question("Wie lautet dein name")

console.log(`Hallo ${namen}! Hier sind unsere Produkte:`);
console.log(produkte)


