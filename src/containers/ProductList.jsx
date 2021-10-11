import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'http://localhost:3000/products'

const ProductList = () => {
	const [query, setQuery] = useState("")
	const products = useGetProducts(API);
	return (
		<section className="main-container">
		<input className="search" placeholder="¿Que estas buscando?" onChange={event => setQuery(event.target.value)} />
			<div className="ProductList">
				
				{
					products.filter(product => {
						if (query === '') {
							return product;
						} else if (product.title.toLowerCase().includes(query.toLowerCase())) {
							return product;
						}
					}).map(product => (
						<ProductItem product={product} key={product.id} />
					))}

			</div>
		</section>
	);
}

export default ProductList;
