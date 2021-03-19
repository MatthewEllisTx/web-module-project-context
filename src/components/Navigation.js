import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ProductsContext } from '../App'

function Navigation(){
	const { cart } = useContext(ProductsContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
