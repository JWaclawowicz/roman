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
        [19, "XIX"]
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman);
    });
    it('does not convert 0 to any roman number', () => {
        expect(toRoman(0)).toEqual("none");
    });
});