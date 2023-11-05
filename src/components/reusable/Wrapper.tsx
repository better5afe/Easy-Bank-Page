import { WrapperProps } from '../../types/types';

import './Wrapper.scss';

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
	return <div className={`wrapper ${className}`}>{children}</div>;
};

export default Wrapper;
