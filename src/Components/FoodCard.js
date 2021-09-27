const FoodCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">{props.children}</div>
            <div className="card-footer">
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default FoodCard;