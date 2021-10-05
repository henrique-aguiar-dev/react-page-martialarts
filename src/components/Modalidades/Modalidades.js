import React from 'react';

import './Modalidades.css';

const Modalidades = () => {
	return (
		<section className="modalidades">
			<div className="container">
				<h1>Modalidades</h1>
				<div className="flexbox">
					<div className="mod-left">
						<p>Diversas modalidades de acordo com o seu objetivo:</p>
						<ul>
							<li><i className="fa fa-check" aria-hidden="true"><span>Muay Thai</span></i></li>
							<li><i className="fa fa-check" aria-hidden="true"><span>Jiu Jitsu</span></i></li>
							<li><i className="fa fa-check" aria-hidden="true"><span>Tae Kwon Do</span></i></li>
							<li><i className="fa fa-check" aria-hidden="true"><span>Mixed Martial arts (MMA)</span></i></li>
							<li><i className="fa fa-check" aria-hidden="true"><span>Boxe</span></i></li>
							<li><i className="fa fa-check" aria-hidden="true"><span>Defesa Pessoal</span></i></li>
						</ul>
					</div>
					<div className="mod-right"></div>
				</div>
			</div>
			<div id="planos"></div>
		</section>
	);
}

export default Modalidades;