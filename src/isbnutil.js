/**
 * Returns true if c is a digit character
 */
function isCharNumber(c) {
    return c >= "0" && c <= "9";
}

function checkISBN10(isbn) {
    // in ISBN10 the last digit can be an X, and this represents 10
    let justDigits = Array.from(isbn)
        .filter((c) => isCharNumber(c) || c === "X")
        .map((c) => (isCharNumber(c) ? parseInt(c) : 10));

    if (justDigits.length !== 10) {
        return false;
    }

    let index = 0;
    let multiplier = 10;
    let sum = 0;
    while (index < 10) {
        sum += multiplier * justDigits[index];
        index++;
        multiplier--;
    }

    return sum % 11 === 0;
}

function checkISBN13(isbn) {
    let justDigits = Array.from(isbn)
        .filter(isCharNumber)
        .map((c) => parseInt(c));

    if (justDigits.length !== 13) {
        return false;
    }

    let index = 0;
    let weight = 1;
    let sum = 0;
    while (index < 13) {
        sum += weight * justDigits[index];
        index++;
        // weight alternates between 1 and 3
        weight = weight === 1 ? 3 : 1;
    }

    return sum % 10 === 0;
}

/**
 * Count the number of digits to figure out which length of isbn it is,
 * and call the correct validator
 */
function checkISBN(isbn) {
    let numDigits = Array.from(isbn).filter(isCharNumber).length;

    if (numDigits < 13) {
        return checkISBN10(isbn);
    } else {
        return checkISBN13(isbn);
    }
}

export { checkISBN };