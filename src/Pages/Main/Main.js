import React from 'react';
import Galeria from '../../components/Galeria/Galeria';

//Components
import Header from '../../components/Header/Header';
import Headline from '../../components/Headline/Headline';
import Sobre from '../../components/Sobre/Sobre';

//import Footer from '../../components/Footer/Footer';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<Headline />
			<Sobre />
			<Galeria />
		</>
	);
}
 
export default Main;