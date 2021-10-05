import React from 'react';

import './Planos.css';

const Planos = () => {
	return (
		<section className="planos">
			<div className="container">
				<h1>Planos</h1>
				<div className="flexbox">
					<div className="planos-single">
						<h2>Mensal</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean luctus vulputate pulvinar. Proin
							bibendum
							dolor id molestie lacinia.</p>
						<p className="preco-final">R$ 99,99</p>
					</div>
					<div className="planos-single">
						<h2>Trimestral</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean luctus vulputate pulvinar. Proin
							bibendum
							dolor id molestie lacinia.</p>
						<p className="preco-inicial"><s>De R$ 299,97</s></p>
						<p className="preco-final">R$ 269,99</p>
					</div>
					<div className="planos-single">
						<h2>Semestral</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean luctus vulputate pulvinar. Proin
							bibendum
							dolor id molestie lacinia.</p>
						<p className="preco-inicial">De <s>R$ 599,94</s></p>
						<p className="preco-final">R$ 509,94</p>
					</div>
				</div>
			</div>
			<div id="contato"></div>
		</section>
	);
}

export default Planos;