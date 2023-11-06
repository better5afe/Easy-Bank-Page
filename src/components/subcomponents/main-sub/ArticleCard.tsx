import { ArticleCardProps } from '../../../types/types';

import './ArticleCard.scss';

const ArticleCard: React.FC<ArticleCardProps> = ({
	image,
	alt,
	author,
	title,
	description,
}) => {
	return (
		<li className='articles__card'>
			<div className='articles__card-top'>
				<img src={image} alt={alt} className='articles__card-top-img' />
			</div>
			<div className='articles__card-bottom'>
				<small className='articles__card-bottom-author'>By {author}</small>
				<h4 className='articles__card-bottom-title'>
					<a href='#'>{title}</a>
				</h4>
				<p className='articles__card-bottom-text'>{description}</p>
			</div>
		</li>
	);
};

export default ArticleCard;
