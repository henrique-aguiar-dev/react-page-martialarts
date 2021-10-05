/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

import { slideUp, slideDown } from '../../modules/custom-lib'

import Menu from './Menu/Menu';

import './Header.css';

const Header = () => {
	const menuMobile = useRef(null);
	const menuParent = useRef(null);
	const [clicked, setClicked] = useState(false);
	const [width, setWidth] = useState({ width: window.innerWidth });
	const [headerHeight, setHeaderHeight] = useState(110);

	useEffect(() => {
		const handleResize = () => setWidth({ width: window.innerWidth })
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)

	}, [width]);

	useEffect(() => {
		const resizeMenu = () => {
			menuParent.current.className = `flexbox header-flex height-${headerHeight}`;
			menuMobile.current.style.top = `${headerHeight}px`;
		}

		resizeMenu();

	}, [headerHeight]);

	useLayoutEffect(() => {
		const handleScroll = () => window.scrollY > 100 ? setHeaderHeight(70) : setHeaderHeight(110);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const handleClickMenuIcon = (event) => {
		const watchClickOutside = (e) => {
			if (e.target.localName !== 'li' && e.target !== event.target) {
				setClicked(false);
				slideUp(menuMobile.current, 500);
			}
		}

		if (!clicked) {
			setClicked(true);
			slideDown(menuMobile.current, 500);
		} else {
			setClicked(false);
			slideUp(menuMobile.current, 500);
		}

		window.addEventListener('click', e => watchClickOutside(e))

		return () => window.removeEventListener('click', watchClickOutside);
	}

	return (

		<header>
			<div ref={menuParent} className="flexbox header-flex height-1">
				<div className="header-left">
					<a href="#">
						<div className="logo"></div>
					</a>
				</div>
				<div className="header-right">
					<div className="icon-menu-mob">
						<i onClick={handleClickMenuIcon} className="fa fa-bars" aria-hidden="true"></i>
					</div>
					<Menu className="menu-desktop" />
					<Menu className="menu-mobile" ref={menuMobile}/>
				</div>
			</div>
		</header>
	)
}

export default Header;
