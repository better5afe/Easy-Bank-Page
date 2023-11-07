import { AboutCardProps } from '../../../types/types';

import './AboutCard.scss';

const AboutCard: React.FC<AboutCardProps> = ({
	id,
	icon,
	title,
	description,
}) => {
	return (
		<li className={`about__cards-card about__cards-card--${id}`}>
			<div className='about__cards-card-icon'>
				<img src={icon} alt='' />
			</div>
			<h3 className='about__cards-card-title'>{title}</h3>
			<p className='about__cards-card-text'>{description}</p>
		</li>
	);
};

export default AboutCard;
