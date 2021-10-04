import React from 'react';

import Mask from '../../modules/phonemask';

import './Contato.css';

const Contato = () => {
	const loadMask = (input) => {
		const phoneMask = new Mask(input);
		phoneMask.mask();
	}

	const handleFocus = (event) => {
		const inputPhone = event.target;

		loadMask(inputPhone)
		
		inputPhone.placeholder = '(__)____-____';
		inputPhone.addEventListener('focusout', e => inputPhone.placeholder = 'Telefone p/ contato...');
		inputPhone.addEventListener('paste', e => e.preventDefault());
	}

	return (
		<h1>EIta</h1>
	);
}

export default Contato;