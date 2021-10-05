import React, { useLayoutEffect, useState, useRef } from 'react';

import { carouselBuilder } from '../../modules/hcarrousel';

import './Galeria.css';

const Galeria = () => {
	const [width] = useState(window.innerWidth);
	const slidesContainer = useRef(null);
	const bulletsContainer = useRef(null);
	const arrowLeft = useRef(null);
	const arrowRight = useRef(null);


	useLayoutEffect(() => {
		const checkWidthChange = () => {
			if (width !== window.innerWidth) setTimeout(() => window.location.reload(), 0)
		}

		window.addEventListener('resize', checkWidthChange)
	}, [width])

	useLayoutEffect(() => {
		const carousel = {
			slidesContainer: slidesContainer.current,
			allSlides: document.querySelectorAll('.slide-single'),
			bulletsContainer: bulletsContainer.current,
			arrowLeft: arrowLeft.current,
			arrowRight: arrowRight.current,
			autoSlide: true,
			speed: width > 600 ? 2000 : 500,
			interval: 4000
		}

		carouselBuilder(carousel);
	});

	return (
		<section className="galeria">
			<div className="container">
				{width > 600 ? (
					<div className="flexbox carousel-container" ref={slidesContainer} draggable="false">
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust1.webp").default} draggable="false" alt="slides-galery" />
							<img src={require("../../media/ilust2.webp").default} draggable="false" alt="slides-galery" />
							<img src={require("../../media/ilust3.webp").default} draggable="false" alt="slides-galery" />
						</div>
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust4.webp").default} draggable="false" alt="slides-galery" />
							<img src={require("../../media/ilust5.webp").default} draggable="false" alt="slides-galery" />
							<img src={require("../../media/ilust6.webp").default} draggable="false" alt="slides-galery" />
						</div>
					</div>
				) : (
					<div className="flexbox carousel-container" ref={slidesContainer} draggable="false">
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust1.webp").default} draggable="false" alt="slides-galery" />
						</div>
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust2.webp").default} draggable="false" alt="slides-galery" />
						</div>
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust3.webp").default} draggable="false" alt="slides-galery" />
						</div>
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust4.webp").default} draggable="false" alt="slides-galery" />
						</div>
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust5.webp").default} draggable="false" alt="slides-galery" />
						</div>
						<div className="slide-single" draggable="false">
							<img src={require("../../media/ilust6.webp").default} draggable="false" alt="slides-galery" />
						</div>
					</div>
				)}

				<div className="flexbox box-bullets">
					<div className="carousel-bullets" ref={bulletsContainer} ></div>
				</div>
				<i className="fa fa-chevron-left" id="navprev" ref={arrowLeft}></i>
				<i className="fa fa-chevron-right" id="navnext" ref={arrowRight}></i>
			</div>
			<div id="modalidades"></div>
		</section>
	);
}

export default Galeria;