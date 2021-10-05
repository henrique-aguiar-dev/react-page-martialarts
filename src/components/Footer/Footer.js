import React from 'react';

import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="box-footer">
					<span>
						<p>Desenvolvido por: Henrique, L.<br />
						Imagens: <a target="_blank" href='https://pixabay.com/' rel="noreferrer">pixabay.com</a> e <a target="_blank" href='https://br.freepik.com' rel="noreferrer">freepik.com</a>;<br />
						Ícones de <a target="_blank" href="https://fontawesome.com/" rel="noreferrer">FontAwesome</a></p>
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;