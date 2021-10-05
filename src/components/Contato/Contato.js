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
		<section className="contato">
			<div className="container">
				<h1>Matricule-se</h1>
				<div className="form-contato">
					<h2>Entre em contato e/ou agende uma aula experimental</h2>
					<form className="form" method="POST" action="" onSubmit={(e) => e.preventDefault()}>
						<input className="form nome" type="text" name="nome" placeholder="Seu nome..." required />
						<input className="form email" type="email" name="email" placeholder="Seu e-mail..." required />
						<input
							className="form tel"
							id="fone"
							type="tel"
							name="telefone"
							maxLength="14"
							minLength="13"
							placeholder="Telefone p/ contato..."
							onFocus={handleFocus}
							required />
						<select required className="form sel-mod" name="modalidade">
							<option value="" defaultValue>Escolha uma modalidade:</option>
							<option value="Muay Thai">Muay Thai</option>
							<option value="Jiu Jitsu">Jiu Jitsu</option>
							<option value="Tae Kwon Do">Tae Kwon Do</option>
							<option value="MMA Mixed Martial Arts">MMA Mixed Martial Arts</option>
							<option value="Boxe">Boxe</option>
							<option value="Defesa pessoal">Defesa pessoal</option>
						</select>
						<textarea className="form msg" name="mensagem" placeholder="Sua mensagem..." required></textarea>
						<div className="alert-submit">
							<p id="msg-sended">Mensagem enviada com sucesso! Responderemos em breve.</p>
							<p id="msg-error">Erro: mensagem NÃO enviada. Favor conferir os dados informados ou tente novamente
								mais tarde.</p>
						</div>
						<input type="submit" value="Enviar" id="btn-send" />
					</form>
				</div>
			</div>
			<div id="onde"></div>
		</section>
	);
}

export default Contato;