import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Wrapper from '../../reusable/Wrapper';
import ArticleCard from './ArticleCard';
import MoneyImg from '../../../assets/images/articles/image-currency.jpg';
import RestaurantImg from '../../../assets/images/articles/image-restaurant.jpg';
import PlaneImg from '../../../assets/images/articles/image-plane.jpg';
import ConfettiImg from '../../../assets/images/articles/image-confetti.jpg';

import './ArticlesSection.scss';

gsap.registerPlugin(ScrollTrigger);

const articles = [
	{
		image: MoneyImg,
		alt: 'Paper bills of different currencies',
		author: 'Claire Robinson',
		title: 'Receive money in any currency with no fees',
		description: `The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …`,
	},
	{
		image: RestaurantImg,
		alt: 'Close up on a restaurant dish',
		author: 'Wilson Hutton',
		title: 'Treat yourself without worrying about money',
		description: `Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`,
	},
	{
		image: PlaneImg,
		alt: 'Wing of the plane in front of clouds and sunset',
		author: 'Wilson Hutton',
		title: 'Take your Easybank card wherever you go',
		description: `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …`,
	},
	{
		image: ConfettiImg,
		alt: 'Colorful confetti on a light blue background',
		author: 'Claire Robinson',
		title: 'Our invite-only Beta accounts are now live!',
		description: `After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...`,
	},
];

const ArticlesSection = () => {
	const articlesSectionRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		const articles = gsap.utils.toArray('.articles__card');

		let mm = gsap.matchMedia();

		gsap.set('.articles__card', { rotateY: -90, opacity: 0 });

		const animateCards = (article: any, delay: number) => {
			gsap.to(article, {
				rotateY: 0,
				opacity: 1,
				duration: 2,
				delay,
				scrollTrigger: {
					trigger: article,
					start: 'top center',
					end: 'top bottom',
				},
			});
		};

		mm.add(
			'(max-width: 767px)',
			() => {
				articles.forEach((article: any) => {
					animateCards(article, 0);
				});
			},
			articlesSectionRef
		);

		mm.add(
			'(min-width: 768px) and (max-width: 1199px)',
			() => {
				articles.forEach((article: any, idx: number) => {
					let delay = idx === 2 || idx === 0 ? 0 : 1.5;

					animateCards(article, delay);
				});
			},
			articlesSectionRef
		);

		mm.add(
			'(min-width: 1200px)',
			() => {
				articles.forEach((article: any, idx: number) => {
					animateCards(article, idx * 0.5);
				});
			},
			articlesSectionRef
		);
	}, []);

	return (
		<section ref={articlesSectionRef} className='articles'>
			<Wrapper className='articles__wrapper'>
				<h2 className='articles__title'>Latest articles</h2>
				<ul className='articles__cards'>
					{articles.map((article, idx) => (
						<ArticleCard
							key={idx}
							image={article.image}
							alt={article.alt}
							author={article.author}
							title={article.title}
							description={article.description}
						/>
					))}
				</ul>
			</Wrapper>
		</section>
	);
};

export default ArticlesSection;
