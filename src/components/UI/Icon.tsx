"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import TooltipWrapper from "./TooltipWrapper";

type tooltipOptions = {
	activateTooltip: boolean;
	tooltipContent: string;
};

export type iconProps = {
	parentClassName?: string | [] | {};
	className?: string;
	src: string | StaticImport;
	width?: number;
	height?: number;
	alt: string;
	href?: string;
	target?: string;
	tooltipOptions?: tooltipOptions;
};

const Icon: React.FC<iconProps> = ({
	parentClassName,
	className,
	src,
	width,
	height,
	alt,
	href,
	target,
	tooltipOptions
}) => {
	const [showTooltip, setShowTooltip] = useState<boolean>(false);

	return (
		<div
			className={`
                ${parentClassName || ""}
                ${tooltipOptions?.activateTooltip ? "cursor-pointer" : ""}
                relative
            `}
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
			{tooltipOptions?.activateTooltip && showTooltip && (
				<TooltipWrapper content={tooltipOptions.tooltipContent} />
			)}
		</div>
	);
};

export default Icon;
