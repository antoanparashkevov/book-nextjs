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
			className={`flex items-center gap-x-1 text-sm font-bold ${className || ""}`}
		>
			{children}
			<Icon
				src={ArrowIcon}
				alt="Arrow Icon"
				width={15}
				height={15}
			/>
		</Link>
	);
};

export default ActionButton;
