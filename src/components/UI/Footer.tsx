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
						alt='Easy Bank Logo'
						className='footer__socials-logo'
					/>
					<ul className='footer__socials-links'>
						<a href='#'>
							<IconFacebook />
						</a>
						<a href='#'>
							<IconYouTube />
						</a>
						<a href='#'>
							<IconTwitter />
						</a>
						<a href='#'>
							<IconPinterest />
						</a>
						<a href='#'>
							<IconInstagram />
						</a>
					</ul>
				</div>
				<ul className='footer__links'>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
					<li>
						<a href='#'>Blog</a>
					</li>
					<li>
						<a href='#'>Careers</a>
					</li>
					<li>
						<a href='#'>Support</a>
					</li>
					<li>
						<a href='#'>Privacy Policy</a>
					</li>
				</ul>
				<div className='footer__credits'>
					<ActionBtn className='footer__credits-btn' />
					<p className='footer__credits-copyrights'>&copy; Easybank. All Rights Reserved</p>
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
