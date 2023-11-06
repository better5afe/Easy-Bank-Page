import Wrapper from '../../reusable/Wrapper';

import './AboutSection.scss';

const AboutSection = () => {
	return (
		<section className='about'>
			<Wrapper className='about__wrapper'>
				<div className='about__details'>
					<h2 className='about__details-title'>Why choose Easybank?</h2>
					<p className='about__details-text'>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
			</Wrapper>
		</section>
	);
};

export default AboutSection;
