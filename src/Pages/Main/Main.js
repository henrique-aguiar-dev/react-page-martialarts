import React from 'react';


//Components
import Header from '../../components/Header/Header';
import Headline from '../../components/Headline/Headline';
import Sobre from '../../components/Sobre/Sobre';
import Galeria from '../../components/Galeria/Galeria';
import Modalidades from '../../components/Modalidades/Modalidades';
import Planos from '../../components/Planos/Planos';
import Contato from '../../components/Contato/Contato';
import Onde from '../../components/Onde/Onde';
import Footer from '../../components/Footer/Footer';


//import Footer from '../../components/Footer/Footer';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<Headline />
			<Sobre />
			<Galeria />
			<Modalidades />
			<Planos />
			<Contato />
			<Onde />
			<Footer />
		</>
	);
}
 
export default Main;