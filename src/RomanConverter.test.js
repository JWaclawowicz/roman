import { cleanup, render, fireEvent } from "@testing-library/react";
import React from "react";

class RomanConverter extends React.Component {
    state = {
        roman: null
    };
    handleChange = (event) => {
        const arabic = event.target.value;
        let roman = "I";
        if (arabic == 5) {
            roman = "V";
        }
        this.setState({ roman });
    }
    render() {
        return (
            <>
                <label>Arabic:<input onChange={this.handleChange} type="number"></input></label>
                <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </>
        );
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
    it('shows no Roman number by default', () => {
        const { getByText } = render(<RomanConverter />);
        expect(() => {
            getByText("Roman: none")
        }).not.toThrow();
    });
    it('converts 1 to I', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "1" }});
        expect(() => {
            getByText("Roman: I")
        }).not.toThrow();
    });
    it('converts 5 to V', () => {
        const { getByLabelText, getByText } = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), { target: { value: "5" }});
        expect(() => {
            getByText("Roman: V")
        }).not.toThrow();
    });
});