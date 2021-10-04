import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	:root {
		--hover-dark: rgba(0, 0, 0, 0.5);
		--hover-yellow: rgb(243, 231, 69);
		--grad-blue-white: linear-gradient(to bottom, rgb(31, 39, 114) 0%, rgb(83, 24, 24) 100%);
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-family: "Montserrat";
		background-color: black;
		scroll-behavior: smooth;
	}

	section,
	footer {
		width: 100%;
		padding: 50px 2%;
		text-align: center;
	}

	section.sobre,
	section.planos,
	section.onde {
		background-color: white;
	}

	h1,
	h2,
	p,
	a,
	span {
		font-weight: normal;
	}

	h1 {
		font-size: 42px;
		margin-bottom: 30px;
	}

	h2 {
		font-size: 32px;
		margin-bottom: 10px;
	}

	a {
		text-decoration: none;
	}

	li {
		list-style-type: none;
	}

	.container {
		max-width: 1000px;
		height: 100%;
		margin: 0 auto;
		text-align: center;
	}

	.flexbox {
		width: 100%;
		display: inline-flex;
		flex-wrap: wrap;
	}

	@media (max-width: 950px) {
		section {
			padding: 40px 5%;
		}

		h1 {
			font-size: 36px;
			margin-bottom: 20px;
		}

		h2 {
			font-size: 24px;
		}
	}

`