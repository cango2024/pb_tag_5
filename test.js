const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 499.99 },
    { name: "Kopfhörer", price: 99.99 },
    { name: "Monitor", price: 199.99 },
    { name: "Tastatur", price: 49.99 },
    { name: "Maus", price: 29.99 },
    { name: "Drucker", price: 149.99 },
    { name: "Tablet", price: 299.99 },
    { name: "Lautsprecher", price: 79.99 },
    { name: "USB-Stick", price: 19.99 }
];

console.log("Willkommen im Online-Shop!");

read.question("Wie lautet dein Name? ", (name) => {
    console.log(`\nHallo ${name}! Hier sind unsere Produkte:`);
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - ${product.price.toFixed(2)}€`);
    });

    read.question("\nBitte gib die Nummer des gewünschten Produkts ein: ", (productNumber) => {
        const selectedProduct = products[parseInt(productNumber) - 1];

        if (!selectedProduct) {
            console.log("Fehler: Ungültige Produktauswahl!");
            read.close();
            return;
        }

        read.question("Wie viele möchtest du kaufen? ", (quantity) => {
            quantity = parseInt(quantity);
            const totalPrice = selectedProduct.price * quantity;
            let finalPrice = totalPrice;

            if (totalPrice > 1000) {
                finalPrice *= 0.9;
                console.log("Du hast einen Rabatt von 10% erhalten!");
            }

            console.log(`\n${name}, du hast ${quantity}x ${selectedProduct.name} bestellt.`);
            console.log(`Gesamtpreis: ${finalPrice.toFixed(2)}€`);
            read.close();
        });
    });
});
