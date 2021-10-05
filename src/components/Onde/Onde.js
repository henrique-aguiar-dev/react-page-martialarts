import React from 'react';

import './Onde.css';

const Onde = () => {
	return (
		<section className="onde">
			<div className="container">
				<h1>Onde estamos</h1>
				<div className="flexbox">
					<div className="onde-left">
						<div className="map"></div>
					</div>
					<div className="onde-right">
						<h2>Endereço, telefone, redes sociais:</h2>
						<p>ENDEREÇO:<br />
							Rua Lorem Ipsum, nº 999. Silor Domor.<br />
							Fugiat-MA. CEP: 99.999-999</p>
						<p><i className="fa fa-phone" aria-hidden="true"></i>TELEFONE: (99)3333-3333</p>
						<a target="_blank" title="Atendimento via Whatsapp" href="https://api.whatsapp.com/send?phone=559999999999" rel="noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp: (99)99999-9999</a><br />
						<a target="_blank" title="Nossa página no Facebook" href="https://facebook.com" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a><br />
						<a target="_blank" title="Nosso perfil no Instagram" href="https://instagram.com" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Onde;