import React from "react";
import Link from "next/link";
import Icon from "../UI/Icon";
import ArrowIcon from "../../../public/icons/arrow.svg";

const ActionButton: React.FC<{
	children: Readonly<React.ReactNode>;
	className?: string;
	href: string;
}> = ({ children, className, href }) => {
	return (
		<Link
			href={href || "/"}
			className={`flex items-center gap-x-1 text-sm lg:text-lg font-bold ${className || ""}`}
		>
			{children}
			<Icon
				src={ArrowIcon}
				alt="Arrow Icon"
				className='w-4 h-4 lg:w-[24px] lg:h-[24px]'
			/>
		</Link>
	);
};

export default ActionButton;
