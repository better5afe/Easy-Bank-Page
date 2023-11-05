import ActionBtn from '../../reusable/ActionBtn';

import './HeaderDetails.scss'

const HeaderDetails = () => {
	return (
		<div className='header__details'>
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
