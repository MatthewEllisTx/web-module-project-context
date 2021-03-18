import React, { useContext } from 'react';

// Components
import Product from './Product';

// Context
import { ProductsContext } from '../App';

function Products(){
	const { products, addItem } = useContext(ProductsContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
