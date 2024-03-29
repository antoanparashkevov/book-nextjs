"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type iconProps = {
	parentClassName?: string | [] | {};
	onClick?: () => void;
	className?: string;
	src: string | StaticImport;
	width?: number;
	height?: number;
	alt: string;
	href?: string;
	target?: string;
};

const Icon: React.FC<iconProps> = ({
	parentClassName = '',
	onClick,
	className,
	src,
	width,
	height,
	alt,
	href,
	target,
}) => {
	const [showTooltip, setShowTooltip] = useState<boolean>(false);

	return (
		<div
			className={`relative ${parentClassName}`.trim()}
			onClick={onClick}
			onMouseOver={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			{href && target && (
				<a
					href={href}
					target={target}
					rel="noreferrer"
					className="absolute inset-0"
				/>
			)}
			<Image
				className={className || ""}
				src={src}
				alt={alt}
				width={width}
				height={height}
				priority
			/>
		</div>
	);
};

export default Icon;
