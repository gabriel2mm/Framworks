function CPFValidation(CPFString) {
    var rest;
    var sum = 0;

    CPFString = replaceSpecialCharacters(CPFString);

    var numbersInvalid = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];
    if (numbersInvalid.includes(CPFString))
        return false;

    for (i = 1; i <= 9; i++) sum = sum + parseInt(CPFString.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(CPFString.substring(9, 10))) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(CPFString.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(CPFString.substring(10, 11))) return false;

    return true;
}

function CNPJStringValidation(CNPJStringString) {
    var size, numbers, digits, sum, pos;

    CNPJStringString = replaceSpecialCharacters(CNPJStringString);

    var numbersInvalid = ["00000000000000", "11111111111111", "22222222222222", "33333333333333", "44444444444444", "55555555555555", "66666666666666", "77777777777777", "88888888888888", "99999999999999"];
    if (numbersInvalid.includes(CPFString)) return false;

    size = CNPJString.length - 2
    numbers = CNPJString.substring(0, size);
    digits = CNPJString.substring(size);
    sum = 0;
    pos = size - 7;

    for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;

    if (result != digits.charAt(0)) return false;

    size = size + 1;
    numbers = CNPJString.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
            pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(1)) return false;

    return true;
}

function replaceSpecialCharacters(str) {
    return str.replace(/[^\d]+/g, '');
}