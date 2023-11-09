import Wrapper from '../reusable/Wrapper';
import ActionBtn from '../reusable/ActionBtn';
import Logo from '../../assets/images/icons/logo-footer.svg';
import IconFacebook from '../../assets/images/icons/IconFacebook';
import IconYouTube from '../../assets/images/icons/IconYouTube';
import IconTwitter from '../../assets/images/icons/IconTwitter';
import IconPinterest from '../../assets/images/icons/IconPinterest';
import IconInstagram from '../../assets/images/icons/IconInstagram';

import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<Wrapper className='footer__wrapper'>
				<div className='footer__socials'>
					<img
						src={Logo}
						alt='Easy bank'
						className='footer__socials-logo'
					/>
					<div className='footer__socials-links'>
						<a href='#' aria-label='Go to our facebook page'>
							<IconFacebook />
						</a>
						<a href='#' aria-label='Go to our youtube channel'>
							<IconYouTube />
						</a>
						<a href='#' aria-label='Go to our twitter page'>
							<IconTwitter />
						</a>
						<a href='#' aria-label='Go to our pinterest page'>
							<IconPinterest />
						</a>
						<a href='#' aria-label='Go to our instagram page'>
							<IconInstagram />
						</a>
					</div>
				</div>
				<div className='footer__links footer__links--left'>
					<a href='#'>About Us</a>

					<a href='#'>Contact</a>

					<a href='#'>Blog</a>
				</div>
				<div className='footer__links footer__links--right'>
					<a href='#'>Careers</a>

					<a href='#'>Support</a>

					<a href='#'>Privacy Policy</a>
				</div>
				<div className='footer__credits'>
					<ActionBtn className='footer__credits-btn' />
					<p className='footer__credits-copyrights'>
						&copy; Easybank. All Rights Reserved
					</p>
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
