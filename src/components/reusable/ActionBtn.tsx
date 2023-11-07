import { ActionBtnProps } from '../../types/types';

import './ActionBtn.scss'

const ActionBtn: React.FC<ActionBtnProps> = ({ className, onMouseEnter, onMouseLeave }) => {
	return <button className={`actionBtn ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Request Invite</button>;
};

export default ActionBtn;
