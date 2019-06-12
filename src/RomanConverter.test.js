import { cleanup, render } from "@testing-library/react";
import React from "react";

class RomanConverter extends React.Component {
    render() {
        return <label>Arabic:<input type="number"></input></label>;
    }
}

describe('<RomanConverter />', () => {
    afterEach(cleanup);

    it('has an input field', () => {
        const { getByLabelText } = render(<RomanConverter />);
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });
});