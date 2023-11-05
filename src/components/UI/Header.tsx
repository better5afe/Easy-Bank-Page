import Wrapper from '../reusable/Wrapper';
import HeaderDetails from '../subcomponents/header-sub/HeaderDetails';

const Header = () => {
	return (
		<header className='header'>
			<Wrapper className='header__wrapper'>
				<HeaderDetails />
			</Wrapper>
		</header>
	);
};

export default Header;
