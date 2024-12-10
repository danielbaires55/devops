
export function formatIT(value) {
    const num = parseFloat(value);
    if (isNaN(num)) {
        throw new Error("Invalid input, expected a number or a string representing a number.");
    }
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(num);
}