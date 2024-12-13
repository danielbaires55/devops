/**
 * Restituisce il codice esadecimale del colore fornito.
 * @param {string} colorName - Il nome del colore ("red", "blue", "green").
 * @returns {string|null} - Il codice esadecimale del colore o null se non è supportato.
 */
function getColorHex(colorName) {
    const colors = {
        red: "#FF0000",
        blue: "#0000FF",
        green: "#00FF00",
    };

    return colors[colorName] || null;
}