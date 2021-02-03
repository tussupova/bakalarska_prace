import React from "react";

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shoppingList">
                <h1>My list {this.props.name}</h1>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;
