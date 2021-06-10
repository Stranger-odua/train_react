import React, {Component} from 'react';


class FComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Button pressed'
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => {this.props.updateData(this.state.name)}}> Press button</button>
            </div>
        )
    }

}

export default FComponent;