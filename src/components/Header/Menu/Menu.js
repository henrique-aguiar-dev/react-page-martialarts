/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Menu.css';

const Menu = (props) => {
	return (
		<nav className={props.className}>
			<ul>
				<li><a href="#sobre">Sobre nós</a></li>
				<li><a href="#modalidades">Modalidades</a></li>
				<li><a href="#planos">Planos</a></li>
				<li><a href="#contato">Matricule-se</a></li>
				<li><a href="#onde">Onde estamos</a></li>
			</ul>
		</nav>
	)
}

export default Menu;