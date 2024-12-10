/**
 * Funzione per formattare una stringa
 * - Rimuove spazi superflui
 * - Converte tutti i caratteri in minuscolo
 * 
 * @param {string} input - La stringa da formattare
 * @returns {string} - La stringa formattata
 */
export function formatLower(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return input.trim().toLowerCase();
}