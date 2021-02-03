import React, {Component} from 'react'

class Auto extends Component {
    state = {
        localNumber: 1
    }

    increment = () => {
        this.setState({localNumber: this.state.localNumber + 1})
    }

    render() {
        return (
            <div onClick={this.increment}>
                <div>Nazev auta: {this.props.name}</div>
                <div>Cislo auta: {this.state.localNumber}</div>
            </div>
        )
    }
}

export default Auto;
