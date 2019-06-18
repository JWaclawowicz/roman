function toRoman(arabic) {
    let roman = "";
    const arrayOfRoman = ["I", "V", "X", "L", "C", "D", "M"];

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

    function convertHundreds(arabic) {
        let roman = "";
        if (arabic >= 100 & arabic < 400) {
            roman = arrayOfRoman[4].padEnd(Math.floor(arabic / 100), arrayOfRoman[4]);
        }
        if (arabic >= 400 & arabic < 500) {
            roman = arrayOfRoman[4] + arrayOfRoman[5];
        }
        if (arabic >= 500 & arabic < 900) {
            roman = arrayOfRoman[5].padEnd(Math.floor(arabic / 100) - 4, arrayOfRoman[4]);
        }
        if (arabic >= 900 & arabic < 1000) {
            roman = arrayOfRoman[4] + arrayOfRoman[6];
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
    if (arabic >= 100 & arabic < 1000) {
        roman = convertHundreds(arabic) + convertTens(arabic % 100) + convertDigits(arabic % 10);
    }
 
    return roman;
}

export default toRoman;