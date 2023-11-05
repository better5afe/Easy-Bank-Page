import Wrapper from '../reusable/Wrapper';
import HeaderDetails from '../subcomponents/header-sub/HeaderDetails';
import HeaderHero from '../subcomponents/header-sub/HeaderHero';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
				<HeaderHero />
			<Wrapper className='header__wrapper'>
				<HeaderDetails />
			</Wrapper>
		</header>
	);
};

export default Header;
