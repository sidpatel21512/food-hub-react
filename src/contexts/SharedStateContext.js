import react, { createContext } from 'react';

export const SharedStateContext = createContext();

class SharedStateContextProvider extends react.Component {
    state = {
        cartItems: []
    }

    addToCart = (item) => {
        console.log('i', item);
        this.setState({cartItems: [...this.state.cartItems, item]});
    }
    render() {
        return (
            <SharedStateContext.Provider value={{ ...this.state , addToCart: this.addToCart}}>
                {this.props.children}
            </SharedStateContext.Provider>
        );
    }
}

export default SharedStateContextProvider;