// games.js
/**
 * La funzione gamble genera un numero random tra 1 e 10
 * e valuta quanto il numero fornito in input è vicino al
 * numero generato. Restituisce:
 * - "Jackpot" se i numeri sono identici.
 * - "Quasi" se la differenza è entro 3.
 * - "Mannaggia" altrimenti.
 * @param {number} number - Numero compreso tra 1 e 10 fornito in input
 * @returns {string} - Risultato della valutazione
 */
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
