import React, {Component} from 'react';
import Menu from "./Menu";

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    reset() {
        this.setState(state => ({
            count:0
        }))
    }

    render() {
        return(
            <div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h2>Счетчик: {this.state.count}</h2>
            </div>
        )
    }
}


    ClassComponent.defaultProps =
        {
            numbers: [1, 2, 3, 4, 5]
        }

    export default ClassComponent;