import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ActionBtn from '../../reusable/ActionBtn';

import './HeaderDetails.scss';

const HeaderDetails = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const timeline = useRef<GSAPTimeline>();

	useLayoutEffect(() => {
		let gsapCtx = gsap.context(() => {}, headerRef);

		timeline.current = gsap.timeline({
			defaults: {
				duration: 1,
			},
		});

		timeline.current
			.fromTo('.header__details-title', { opacity: 0 }, { opacity: 1 })
			.fromTo('.header__details-text', { opacity: 0 }, { opacity: 1 })
			.fromTo('.header__details-btn', { opacity: 0 }, { opacity: 1 });

		timeline.current.play();

		return () => gsapCtx.revert();
	}, []);

	return (
		<div ref={headerRef} className='header__details'>
			<h1 className='header__details-title'>Next generation digital banking</h1>
			<p className='header__details-text'>
				Take your financial life online. Your Easybank account will be a
				one-stop-shop for spending, saving, budgeting, investing, and much more.
			</p>
			<ActionBtn className='header__details-btn' />
		</div>
	);
};

export default HeaderDetails;
