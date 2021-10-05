/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from 'react';

import './Menu.css';

const Menu = forwardRef((props, ref) => {
	return (
		<nav ref={ref} className={props.className}>
			<ul>
				<li><a href="#sobre">Sobre nós</a></li>
				<li><a href="#modalidades">Modalidades</a></li>
				<li><a href="#planos">Planos</a></li>
				<li><a href="#contato">Matricule-se</a></li>
				<li><a href="#onde">Onde estamos</a></li>
			</ul>
		</nav>
	)
});

export default Menu;