function toRoman(arabic) {
    let roman = "";
    const arrayOfRoman = ["I", "V", "X", "L", "C", "D", "M"];

    function convertOneDigitToRoman(arabic, i, x) {
		let convertedDigit = "";
		if (arabic >= (1 * x) & arabic < (4 * x)) {
			convertedDigit = arrayOfRoman[i].padEnd(Math.floor(arabic / x), arrayOfRoman[i]);
		}
		if (arabic >= (4 * x) & arabic < (5 * x)) {
			convertedDigit = arrayOfRoman[i] + arrayOfRoman[i+1];
		}
		if (arabic >= (5 * x) & arabic < (9 * x)) {
			convertedDigit = arrayOfRoman[i+1].padEnd(Math.floor(arabic / x) - 4, arrayOfRoman[i]);
		}
		if (arabic >= (9 * x) & arabic < (10 * x)) {
			convertedDigit = arrayOfRoman[i] + arrayOfRoman[i+2];
		}
		return convertedDigit;
	}

    function convertDigits(arabic) {
        return convertOneDigitToRoman(arabic, 0, 1);
    }    

    function convertTens(arabic) {
        return convertOneDigitToRoman(arabic, 2, 10);
    }    

    function convertHundreds(arabic) {
        return convertOneDigitToRoman(arabic, 4, 100);
    }    

    function convertThousands(arabic) {
        return convertOneDigitToRoman(arabic, 6, 1000);
    }    

    function convertToRoman(arabic) {
        let romanNumber = "";
        if (arabic >= 1 & arabic < 10) {
            romanNumber = convertDigits(arabic);
        }
        if (arabic >= 10 & arabic < 100) {
            romanNumber = convertTens(arabic) + convertToRoman(arabic % 10);
        }
        if (arabic >= 100 & arabic < 1000) {
            romanNumber = convertHundreds(arabic) + convertToRoman(arabic % 100);
        }
        if (arabic >= 1000 & arabic < 4000) {
            romanNumber = convertThousands(arabic) + convertToRoman(arabic % 1000);
        }
        return romanNumber;
    }

    if (arabic == 0) {
        roman = "none";
    } else {
        roman = convertToRoman(arabic);
    }
 
    return roman;
}

export default toRoman;