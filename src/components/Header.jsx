import React, { useState, useContext, useRef, useEffect } from 'react';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext'
import MyOrder from '@containers/MyOrder';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from './authentication-button';
import '@styles/Header.scss';


import menu from '@icons/icon_menu.svg'
import logo from '@logos/create-react-app.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg'

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

const Header = () => {
	const { isAuthenticated, user } = useAuth0();
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	
	let domNode = useClickOutside(() => {
		setToggleOrders(false);
		setToggle(false)
	  });

	


	return (
		<nav ref={domNode}>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				
				<ul>
					<li>
						<a href="/list">Productos</a>
					</li>

				</ul>
				
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={() => setToggle((toggle)=>!toggle)} >
						{isAuthenticated ? user.name : 'Bienvenido'}
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders((toggleOrders)=>!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder /> }
		</nav>
	);
}


export default Header;
