import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '@context/AppContext';

const OrderItem = ({ item }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (item) => {
		removeFromCart(item);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={item.images[0]} alt="bike" />
			</figure>
			<p>{item.name}</p>
			<p>$ {item.price}</p>
			<img src={close} alt="close" 
			onClick={() => handleRemove(item)}/>
		</div>
	);
}

export default OrderItem;
