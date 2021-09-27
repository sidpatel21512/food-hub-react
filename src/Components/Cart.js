import react from "react";
class Cart extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsIncart: 0
        }
    }

    render() {
        return (
            <div className="cart">
                Cart <span>{this.state.itemsIncart}</span>
            </div>
        )
    }
}

export default Cart;