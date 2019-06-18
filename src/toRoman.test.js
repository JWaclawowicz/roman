import toRoman from "./toRoman";

describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [9, "IX"]
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman);
    });
    it('does not convert 0 to any roman number', () => {
        expect(toRoman(0)).toEqual("none");
    });
});