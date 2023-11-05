// import HeroBackdropMobile from '../../../assets/images/header/bg-intro-mobile.svg';
// import HeroBackdropDesktop from '../../../assets/images/header/bg-intro-desktop.svg';
import HeroImage from '../../../assets/images/header/image-mockups.png';

import './HeaderHero.scss';

const HeaderHero = () => {
	return (
		<div className='header__hero'>
			<div className='header__hero-carousel'>
				
				<img src={HeroImage} alt='' className='header__hero-carousel-img' />
			</div>
		</div>
	);
};

export default HeaderHero;
