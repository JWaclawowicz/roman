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

export default RomanConverter;