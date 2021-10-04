import React from 'react';

import './Sobre.css';

const Sobre = () => {
	return (
		<section className="sobre">
			<div className="container">
				<h1>Sobre nós</h1>
				<div className="flexbox">
					<div className="sobre-img"></div>
					<div className="sobre-text">
						<p>Phasellus tempus elit quis dapibus pellentesque. Nam tincidunt condimentum eros nec pulvinar. Fusce in
							erat efficitur, pretium diam in, tristique mi. Cras ut nulla felis. Cras fermentum mauris nec viverra
							pharetra. Phasellus vehicula metus id tellus dignissim, quis vulputate arcu tempus.
							<br />
							<br />
							Vivamus vestibulum nibh at nisl sodales, vitae maximus neque semper. Morbi vel sapien tempus, lobortis
							ex ac, ultrices lacus. Nam eget imperdiet mauris, quis vestibulum nisi. Nulla in arcu non libero
							egestas aliquet.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sobre;