import { ClassNameProps } from '../../types/types';

import './ActionBtn.scss'

const ActionBtn: React.FC<ClassNameProps> = ({ className }) => {
	return <button className={`actionBtn ${className}`}>Request Invite</button>;
};

export default ActionBtn;
