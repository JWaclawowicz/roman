import toRoman from "./toRoman";

describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [9, "IX"],
        [10, "X"],
        [12, "XII"],
        [14, "XIV"],
        [18, "XVIII"],
        [19, "XIX"],
        [20, "XX"],
        [36, "XXXVI"],
        [43, "XLIII"],
        [50, "L"],
        [72, "LXXII"],
        [99, "XCIX"],
        [100, "C"],
        [323, "CCCXXIII"],
        [410, "CDX"],
        [500, "D"],
        [999, "CMXCIX"],
        [1000, "M"],
        [2019, "MMXIX"]
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman);
    });
    it('does not convert 0 to any roman number', () => {
        expect(toRoman(0)).toEqual("none");
    });
});