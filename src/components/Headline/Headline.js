import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import './Headline.css';

import Logo from './Logo';

const Headline = () => {
	const [indexBg, setIndexBg] = useState(1);
	const boxSlides = useRef(null);
	const headline = useRef(null);
	//console.log(indexBg)

	useLayoutEffect(() => {
		const slidesLength = boxSlides.current.childNodes.length;

		setTimeout(() => {
			indexBg < slidesLength ? setIndexBg(indexBg + 1) : setIndexBg(1);
		}, 5000);
	});

	useEffect(() => {
		const slides = boxSlides.current.childNodes;
		
		const changeBgAndSlide = () => {
			headline.current.animate([{ opacity: 1 }, { opacity: 0 }], 2500);
			headline.current.className = `headline headline-bg${indexBg}`;
			headline.current.animate([{ opacity: 0 }, { opacity: 1 }], 2500);
			slides.forEach(slide => slide.style.display = 'none');
			slides[indexBg - 1].style.display = 'block';
		}

		changeBgAndSlide();

	}, [indexBg])

	return (
		<section className="headline headline-bg1" ref={headline}>
			<Logo />
			<div className="box-slides" ref={boxSlides}>
				<div className="slides-headline sh1">
					<h1>Defesa pessoal</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
				<div className="slides-headline sh2">
					<h1>Esporte</h1>
					<p>Aenean luctus vulputate pulvinar. Proin bibendum
						dolor id molestie lacinia.</p>
				</div>
				<div className="slides-headline sh3">
					<h1>Estilo de vida</h1>
					<p>Aenean luctus vulputate pulvinar. Proin bibendum
						dolor id molestie lacinia.</p>
				</div>
			</div>
			<div className="button">
				<a className="btn-more" href="#sobre">Saiba mais</a>
			</div>
			<div id="sobre"></div>
		</section>
	);
}

export default Headline;