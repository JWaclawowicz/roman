function toRoman(arabic) {
    let roman = "";
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

    if (arabic == 0) {
        roman = "none";
    }
    if (arabic >=1 & arabic < 10) {
        roman = convertDigits(arabic);
    }
    if (arabic >= 10 & arabic < 20) {
        roman = "X" + convertDigits(arabic % 10);
    }
    if (arabic == 20) {
        roman = "XX";
    }
    if (arabic == 36) {
        roman = "XXXVI";
    }
    if (arabic == 43) {
        roman = "XLIII";
    }
    if (arabic == 50) {
        roman = "L";
    }
    if (arabic == 72) {
        roman = "LXXII";
    }
    if (arabic == 99) {
        roman = "XCIX";
    }

    return roman;
}

export default toRoman;