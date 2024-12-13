/**
 * La funzione spin accetta un numero intero tra 0 e 36 come input e lo confronta con un numero casuale
 * generato nello stesso intervallo. Restituisce:
 * - "Hai vinto al 100%!" se il numero generato corrisponde all'input.
 * - "Vicino, ma non abbastanza." se i numeri appartengono alla stessa decina.
 * - "Riprova la fortuna!" in tutti gli altri casi.
 * 
 * @param {number} number - Numero compreso tra 0 e 36 fornito in input
 * @returns {string} - Risultato del confronto
 */
export function spin(number) {
    const random = Math.floor(Math.random() * 37);

    if (number === random) {
        return "Hai vinto al 100%!";
    } else if (Math.floor(number / 10) === Math.floor(random / 10)) {
        return "Vicino, ma non abbastanza.";
    } else {
        return "Riprova la fortuna!";
    }
}