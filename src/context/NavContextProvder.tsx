import { useState } from 'react';
import { NavContext } from './nav-context';
import { ChildrenProps } from '../types/types';

export const NavContextProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prev) => {
			return !prev;
		});
	};

	const closeNavHandler = () => {
		setIsNavOpen(false);
	};

	return (
		<NavContext.Provider
			value={{
				isOpen: isNavOpen,
				toggleNav: toggleNavHandler,
				closeNav: closeNavHandler,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};
