import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import addedToCart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState(false);

	const handleClick = () => {
		setCart(!cart);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}> 
					
					{cart
					? <img src={addedToCart} alt="" />
					: <img src={addToCart} alt="" />}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
