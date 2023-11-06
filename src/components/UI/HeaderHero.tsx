import HeroMobileBg from '../../assets/images/header/HeroMobileBg';
import HeroDesktopBgLeft from '../../assets/images/header/HeroDesktopBgLeft';
import HeroDesktopBgRight from '../../assets/images/header/HeroDesktopBgRight';

import './HeaderHero.scss';

const HeaderHero = () => {
	return (
		<div className='header__hero'>
			<div className='header__hero-bg'>
				<HeroMobileBg className='header__hero-bg-icon header__hero-bg-icon--mobile' />
				<HeroDesktopBgLeft className='header__hero-bg-icon header__hero-bg-icon--desktop header__hero-bg-icon--desktop--left' />
				<HeroDesktopBgRight className='header__hero-bg-icon header__hero-bg-icon--desktop header__hero-bg-icon--desktop--right' />
			</div>
		</div>
	);
};

export default HeaderHero;
