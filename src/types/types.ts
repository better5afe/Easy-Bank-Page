export interface ChildrenProps {
	children: React.ReactNode;
}

export interface ClassNameProps {
	className: string;
}

type voidFn = () => void;

export interface WrapperProps extends ChildrenProps, ClassNameProps {}

export interface NavContextProps {
	isOpen: boolean;
	toggleNav: voidFn;
	closeNav: voidFn;
}
