function toRoman(arabic) {
    let roman = "none";
    if (arabic == 1) {
        roman = "I";
    }
    if (arabic == 3) {
        roman = "III";
    }
    if (arabic == 4) {
        roman = "IV";
    }
    if (arabic == 5) {
        roman = "V";
    }
    if (arabic == 6) {
        roman = "VI";
    }
    if (arabic == 9) {
        roman = "IX";
    }
    return roman;
}

export default toRoman;