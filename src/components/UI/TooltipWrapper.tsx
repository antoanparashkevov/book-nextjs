import React from "react";

const TooltipWrapper: React.FC<{ content: string }> = ({ content }) => {
	return (
		<div
			className="
                absolute left-0 bottom-[23px] min-w-[300px]
                flex flex-col justify-center items-center py-[5px] px-[10px] bg-black text-white
                shadow-md rounded-[5px] backdrop-blur-[5px]
            "
		>
			<p className="font-normal text-sm text-center">{content}</p>
		</div>
	);
};

export default TooltipWrapper;
