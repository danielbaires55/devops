// games.js
function gamble(number) {
    const random = Math.floor(Math.random() * 10) + 1;

    if (number === random) {
        return "Jackpot";
    } else if (Math.abs(number - random) <= 3) {
        return "Quasi";
    } else {
        return "Mannaggia";
    }
}

