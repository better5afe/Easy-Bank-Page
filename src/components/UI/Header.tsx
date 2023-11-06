import Wrapper from '../reusable/Wrapper';
import HeaderDetails from '../subcomponents/header-sub/HeaderDetails';
import HeaderHero from './HeaderHero';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<Wrapper className='header__wrapper'>
				<HeaderHero />
				<HeaderDetails />
			</Wrapper>
		</header>
	);
};

export default Header;
