import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';

import './Overlay.scss';

const Overlay = () => {
	const navCtx = useContext(NavContext);

	return (
		<div
			className={`overlay ${
				navCtx.isOpen ? 'overlay--visible' : 'delayed overlay--hidden'
			}`}
		/>
	);
};

export default Overlay;
