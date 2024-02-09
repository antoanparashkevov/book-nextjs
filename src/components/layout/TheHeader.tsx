import React from "react";
import ActionButton from "../UI/ActionButton";
import Link from "next/link";

const TheHeader: React.FC = () => {
	return (
		<nav className="flex justify-between items-center w-full min-h-full">
			<h3 className="cursor-pointer text-purple-500 flex-grow text-center">
				<Link href="/">69+ вълнуващи места за любов</Link>
			</h3>
			<ul role="list">
				<li>
					<ActionButton className="text-purple-500" href="#contact">
						Купи сега
					</ActionButton>
				</li>
			</ul>
		</nav>
	);
};

export default TheHeader;
