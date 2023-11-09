import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import Wrapper from '../reusable/Wrapper';
import ActionBtn from '../reusable/ActionBtn';
import Logo from '../../assets/images/icons/logo.svg';
import HamburgerIcon from '../../assets/images/icons/icon-hamburger.svg';
import CloseIcon from '../../assets/images/icons/icon-close.svg';

import './Nav.scss';

const Nav = () => {
	const navCtx = useContext(NavContext);

	return (
		<nav className='nav'>
			<Wrapper className='nav__wrapper'>
				<a href='#' className='nav__logo'>
					<img src={Logo} alt='Logo icon' className='Easy bank' />
				</a>
				<button
					className='nav__btn'
					onClick={navCtx.toggleNav}
					aria-label='Navigation button'
				>
					<img
						src={HamburgerIcon}
						alt='Open navigation list'
						className={`nav__btn-icon ${
							navCtx.isOpen && 'nav__btn-icon--hidden'
						}`}
					/>
					<img
						src={CloseIcon}
						alt='Close navigation list'
						className={`nav__btn-icon ${
							!navCtx.isOpen && 'nav__btn-icon--hidden'
						}`}
					/>
				</button>
				<ul
					className={`nav__links ${
						navCtx.isOpen ? 'nav__links--expanded' : ''
					}`}
				>
					<li className='nav__links-item'>
						<a href='#' onClick={navCtx.closeNav}>
							Home
						</a>
					</li>
					<li className='nav__links-item'>
						<a href='#' onClick={navCtx.closeNav}>
							About
						</a>
					</li>
					<li className='nav__links-item'>
						<a href='#' onClick={navCtx.closeNav}>
							Contact
						</a>
					</li>
					<li className='nav__links-item'>
						<a href='#' onClick={navCtx.closeNav}>
							Blog
						</a>
					</li>
					<li className='nav__links-item'>
						<a href='#' onClick={navCtx.closeNav}>
							Careers
						</a>
					</li>
				</ul>
				<ActionBtn className='nav__actionBtn' />
			</Wrapper>
		</nav>
	);
};

export default Nav;
