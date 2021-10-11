import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '@styles/ProductDetail.scss';

import close from '@icons/icon_close.png'

const ProductDetail = ({product}) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo product={product} />
		</aside>
	);
}

export default ProductDetail;
