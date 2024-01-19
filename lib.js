function generateRandomId() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var randomId = '';
    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * numbers.length);
        randomId += numbers[index];
    }

    return Number(randomId);
}

module.exports = generateRandomId;
