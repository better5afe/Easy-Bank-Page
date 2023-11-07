import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ActionBtn from '../../reusable/ActionBtn';

import './HeaderDetails.scss';

const HeaderDetails = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);

	const mouseEnterHandler = () => {
		gsap.to('.header__details-btn', { opacity: 0.5, duration: 0.3 });
	};

	const mouseLeaveHandler = () => {
		gsap.to('.header__details-btn', {
			opacity: 1,
			duration: 0.3,
		});
	};

	useLayoutEffect(() => {
		let gsapCtx = gsap.context(() => {
			let headerElements = [
				'.header__details-title',
				'.header__details-text',
				'.header__details-btn',
			];

			headerElements.forEach((element: any, idx: number) => {
				gsap.fromTo(
					element,
					{ opacity: 0 },
					{ opacity: 1, duration: 1, delay: idx }
				);
			});

			gsap.fromTo(
				'.header__details-btn',
				{ scale: 1 },
				{ scale: 1.1, duration: 1.5, delay: 5, repeat: -1, yoyo: true }
			);
		}, headerRef);

		return () => gsapCtx.revert();
	}, []);

	return (
		<div ref={headerRef} className='header__details'>
			<h1 className='header__details-title'>Next generation digital banking</h1>
			<p className='header__details-text'>
				Take your financial life online. Your Easybank account will be a
				one-stop-shop for spending, saving, budgeting, investing, and much more.
			</p>
			<ActionBtn
				className='header__details-btn'
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}
			/>
		</div>
	);
};

export default HeaderDetails;
