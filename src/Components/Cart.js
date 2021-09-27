import react from "react";
import { SharedStateContext } from "../contexts/SharedStateContext";
class Cart extends react.Component {
    static contextType = SharedStateContext;
    constructor(props) {
        super(props);
        this.state = {
            itemsIncart: 0
        }
    }

    render() {
        const { cartItems } = this.context;
        return (
            <div className="cart">
                Cart <span>{cartItems.length}</span>
            </div>
        )
    }
}

export default Cart;