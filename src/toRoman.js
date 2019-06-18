function toRoman(arabic) {
    let roman = "";
    const arrayOfRoman = ["I", "V", "X", "L", "C"];

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

    function convertTens(arabic) {
        let roman = "";
        if (arabic >= 10 & arabic < 40) {
            roman = arrayOfRoman[2].padEnd(Math.floor(arabic / 10), arrayOfRoman[2]);
        }
        if (arabic >= 40 & arabic < 50) {
            roman = arrayOfRoman[2] + arrayOfRoman[3];
        }
        if (arabic >= 50 & arabic < 90) {
            roman = arrayOfRoman[3].padEnd(Math.floor(arabic / 10) - 4, arrayOfRoman[2]);
        }
        if (arabic >= 90 & arabic < 100) {
            roman = arrayOfRoman[2] + arrayOfRoman[4];
        }   
        return roman;
    }    

    if (arabic == 0) {
        roman = "none";
    }
    if (arabic >=1 & arabic < 10) {
        roman = convertDigits(arabic);
    }
    if (arabic >= 10 & arabic < 100) {
        roman = convertTens(arabic) + convertDigits(arabic % 10);
    }

    return roman;
}

export default toRoman;