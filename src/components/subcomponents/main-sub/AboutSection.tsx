import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Wrapper from '../../reusable/Wrapper';
import AboutCard from './AboutCard';
import IconBanking from '../../../assets/images/icons/icon-online.svg';
import IconBudgeting from '../../../assets/images/icons/icon-budgeting.svg';
import IconOnboarding from '../../../assets/images/icons/icon-onboarding.svg';
import IconAPI from '../../../assets/images/icons/icon-api.svg';

import './AboutSection.scss';

gsap.registerPlugin(ScrollTrigger);

const aboutCards = [
	{
		icon: IconBanking,
		title: 'Online Banking',
		description:
			'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
	},
	{
		icon: IconBudgeting,
		title: 'Simple Budgeting',
		description: `See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.`,
	},
	{
		icon: IconOnboarding,
		title: 'Fast Onboarding',
		description: `We don't do branches. Open your account in minutes online and start taking control of your finances right away.`,
	},
	{
		icon: IconAPI,
		title: 'Open API',
		description: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
	},
];

const AboutSection = () => {
	const aboutSectionRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		const cards = gsap.utils.toArray('.about__card');

		let mm = gsap.matchMedia();

		function animateCards(viewport: string) {
			cards.forEach((card: any, idx: number) => {
				const props =
					viewport === 'desktop'
						? { y: idx % 2 === 0 ? -100 : 100 }
						: { x: idx % 2 === 0 ? -100 : 100 };
				gsap.fromTo(
					card,
					{ ...props, opacity: 0 },
					{
						x: 0,
						y: 0,
						opacity: 1,
						duration: 2,
						delay: idx * 0.5,
						scrollTrigger: {
							trigger: card,
							start: 'top center',
							end: 'top bottom',
						},
					}
				);
			});
		}

		mm.add('(max-width: 1199px', () => animateCards('mobile'), aboutSectionRef);
		mm.add(
			'(min-width: 1200px)',
			() => animateCards('desktop'),
			aboutSectionRef
		);

		return () => mm.revert();
	}, []);

	return (
		<section ref={aboutSectionRef} className='about'>
			<Wrapper className='about__wrapper'>
				<div className='about__details'>
					<h2 className='about__details-title'>Why choose Easybank?</h2>
					<p className='about__details-text'>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
				<ul className='about__cards'>
					{aboutCards.map((aboutCard, idx) => (
						<AboutCard
							key={idx}
							icon={aboutCard.icon}
							title={aboutCard.title}
							description={aboutCard.description}
						/>
					))}
				</ul>
			</Wrapper>
		</section>
	);
};

export default AboutSection;
