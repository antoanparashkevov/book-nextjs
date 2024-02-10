import React from "react";

const LinearGradient: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div
			className={`absolute -z-10 pointer-events-none inset-0 ${className}`}
			style={{
				background:
					"linear-gradient(226deg, #9197d1 -90%, rgba(255, 157, 1, 0.00) 60%)",
				filter: "blur(120px)"
			}}
		/>
	);
};

export default LinearGradient;
