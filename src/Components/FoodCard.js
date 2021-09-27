import { SharedStateContext } from "../contexts/SharedStateContext";

const FoodCard = (props) => {
    return (
        <SharedStateContext.Consumer>{((context) => {
            const {addToCart} = context;
            return (
                <div className="card">
                    <div className="card-body">{props.children}</div>
                    <div className="card-footer">
                        <button onClick={e => addToCart(props.children.props)}>Add To Cart</button>
                    </div>
                </div>
            )
        })
        }

        </SharedStateContext.Consumer>
    )
}

export default FoodCard;