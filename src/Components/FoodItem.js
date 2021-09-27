import logo from '../logo.svg';
const FoodItem = (props) => {
    return (
        <div className="food-item">
            <a href="/" className="avatar center">
                <img src={logo} alt={`${props.name} pic`}></img>
            </a>
            <div className="food-detail">
                <div className="food-name">{props.name}</div>
                <div className="food-description">{props.description}</div>
            </div>
        </div>
    )
}

export default FoodItem;