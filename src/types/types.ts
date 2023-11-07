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

interface CardDetails {
	title: string;
	description: string;
}

export interface AboutCardProps extends CardDetails {
	id: string;
	icon: any;
}

export interface ArticleCardProps extends CardDetails {
	image: any;
	alt: string;
	author: string;
}
