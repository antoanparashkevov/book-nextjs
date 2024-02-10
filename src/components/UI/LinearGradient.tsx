import React from "react";

const LinearGradient: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div
			className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
			style={{
				background: 'linear-gradient(0deg,rgba(255, 206, 231, 0.8) 0%, rgba(255, 220, 238, 0.8) 35%, rgba(255, 255, 255, 0.5) 100%)',
				filter: "blur(120px)"
			}}
		/>
	);
};

export default LinearGradient;
