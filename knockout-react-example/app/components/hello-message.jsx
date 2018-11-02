import React from '../../node_modules/react';
import singleton from '../singleton';

class HelloMessage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            color: 'blue',
            phrase: props.phrase && props.phrase()
        };
    }

    changeColor() {
        this.setState({
            color: this.state.color === 'red' ? 'blue' : 'red'
        });
    }

    changeExternalState() {
        singleton.update();
    }

    render() {
        const divStyle = {
            border: '1px solid #999',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#fefefe'
        };
        const boxStyle = {
            width: '10px',
            height: '10px',
            backgroundColor: this.state.color,
            display: 'inline-block'
        };
        return (
        <div style={divStyle}>
            Hello there, I'm a react component that was mounted from within a Knockout app!
            <p>My internal state (color) has the value: {this.state.color} <span style={boxStyle}></span></p>
            <p>The external knockout observable (phrase) is: <strong>{this.state.phrase}</strong></p>
            <button onClick={this.changeColor.bind(this)}>Change the internal state (color)</button>
            <button onClick={this.changeExternalState.bind(this)}>Change the external state (phrase)</button>
        </div>
        );
    }
}

export default HelloMessage;