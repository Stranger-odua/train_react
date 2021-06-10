import React, {Component} from 'react';
import FComponent from "./FComponent";


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Button not pressed'
        }
        this.updateData = this.updateData.bind(this)
    }

    updateData = (value) => {
        this.setState({
            name: value
        })
    }


    render() {
        return (
            <div>
                <p>State: {this.state.name}</p>


                <FComponent updateData={this.updateData}/>

            </div>
        )
    }
}


export default ClassComponent;