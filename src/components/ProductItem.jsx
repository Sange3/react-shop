import React, { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '@context/AppContext';
import ProductDetail from '@containers/ProductDetail';
import '@styles/ProductItem.scss';

import addCart from '@icons/bt_add_to_cart.svg';

let useClickOutside = (handler) => {
	let domNode = useRef();
  
	useEffect(() => {
	  let maybeHandler = (event) => {
		if (!domNode.current.contains(event.target)) {
		  handler();
		}
	  };
  
	  document.addEventListener("mousedown", maybeHandler);
  
	  return () => {
		document.removeEventListener("mousedown", maybeHandler);
	  };
	});
  
	return domNode;
  };

const ProductItem = ({ product }) => {
	const [toggle, setToggle] = useState(false);
	const { addToCart } = useContext(AppContext);

	let domNode = useClickOutside(() => {
		setToggle(false)
	  });

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div>
			<div className="ProductItem" >
				<img src={product.image} alt={product.title} onClick={() => setToggle((toggle)=>!toggle)} ref={domNode}  />
				<div className="product-info">
					<div >
						<p>${product.price}</p>
						<p>{product.title}</p>
					</div>
					<figure onClick={() => handleClick(product)}>
						<img src={addCart} alt="" />
					</figure>
				</div>

			</div>
			{toggle && <ProductDetail product={product} />}
		</div>
	);
}

export default ProductItem;
