function spin(number) {
    const random = Math.floor(Math.random() * 37);

    if (number === random) {
        return "Hai vinto al 100%!";
    } else if (Math.floor(number / 10) === Math.floor(random / 10)) {
        return "Vicino, ma non abbastanza.";
    } else {
        return "Riprova la fortuna!";
    }
}
