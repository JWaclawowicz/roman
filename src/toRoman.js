function toRoman(arabic) {
    let roman = "none";
    const arrayOfRoman = ["I", "V", "X"];

    function convertDigits(arabic) {
        if (arabic >= 1 & arabic < 4) {
            roman = arrayOfRoman[0].padEnd(arabic, arrayOfRoman[0]);
        }
        if (arabic == 4) {
            roman = arrayOfRoman[0] + arrayOfRoman[1];
        }
        if (arabic >= 5 & arabic < 9) {
            roman = arrayOfRoman[1].padEnd(arabic - 4, arrayOfRoman[0]);
        }
        if (arabic == 9) {
            roman = arrayOfRoman[0] + arrayOfRoman[2];
        }   
        return roman;
    }    

    if (arabic >=1 & arabic < 10) {
        roman = convertDigits(arabic);
    }

    return roman;
}

export default toRoman;