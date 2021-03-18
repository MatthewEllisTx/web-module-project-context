import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const ProductsContext = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log(item)
		if(cart.filter( product => product.id === item.id).length === 0) // no duplicates in cart
			setCart([ ...cart, item ])
	};

	const providerValues = {
		cart,
		products,
		addItem,
	}

	return (
		<ProductsContext.Provider value={providerValues}>
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products products={products} addItem={addItem} />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</div>
		</ProductsContext.Provider>
	);
}

export default App;
