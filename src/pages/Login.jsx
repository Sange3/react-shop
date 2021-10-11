import React from 'react';
import '@styles/Login.scss';
import AuthenticationButton from '@components/authentication-button';

const Login = () => {

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Bienvenido a ¡Que postre!</h1>
				<h2 className="title">Para ver el catalogo debes iniciar sesion</h2>

				<AuthenticationButton />
				
			</div>
		</div>
	);
}

export default Login;
