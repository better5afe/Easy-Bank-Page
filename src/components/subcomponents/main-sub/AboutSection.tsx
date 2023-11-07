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
		id: 'banking',
		icon: IconBanking,
		title: 'Online Banking',
		description:
			'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
	},
	{
		id: 'budgeting',
		icon: IconBudgeting,
		title: 'Simple Budgeting',
		description: `See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.`,
	},
	{
		id: 'onboarding',
		icon: IconOnboarding,
		title: 'Fast Onboarding',
		description: `We don’t do branches. Open your account in minutes online and start taking control of your finances right away.`,
	},
	{
		id: 'api',
		icon: IconAPI,
		title: 'Open API',
		description: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
	},
];

const AboutSection = () => {
	const aboutSectionRef = useRef<HTMLElement | null>(null);
	const timeline = useRef<GSAPTimeline>(
		gsap.timeline({
			defaults: {
				opacity: 0,
			},
		})
	);

	useLayoutEffect(() => {
		const cards = gsap.utils.toArray('.about__cards-card');

		let mm = gsap.matchMedia();

		let tl = timeline.current;

		mm.add(
			'(max-width: 1999px',
			() => {
				cards.forEach((card: any, idx: number) => {
					gsap.fromTo(
						card,
						{
							x: idx % 2 === 0 ? -100 : 100,
							opacity: 0,
						},
						{
							x: 0,
							opacity: 1,
							duration: 2,
							scrollTrigger: card,
						}
					);
				});
			},
			aboutSectionRef
		);

		mm.add(
			'(min-width: 1200px)',
			() => {
				cards.forEach((card: any, idx: number) => {
					gsap.fromTo(
						card,
						{
							y: idx % 2 === 0 ? -100 : 100,
							opacity: 0,
						},
						{
							y: 0,
							opacity: 1,
							duration: 2,
							delay: idx,
							scrollTrigger: 'about',
						}
					);
				});
			},
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
							id={aboutCard.id}
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
