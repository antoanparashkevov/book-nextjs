import React from "react";

const LinearGradient: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div
			className={`absolute -z-10 pointer-events-none w-[37rem] h-[47rem] ${className}`}
			style={{
				background:
					"linear-gradient(226deg, #9197d1 -78.94%, rgba(255, 157, 1, 0.00) 74.62%)",
				filter: "blur(62px)"
			}}
		/>
	);
};

export default LinearGradient;
