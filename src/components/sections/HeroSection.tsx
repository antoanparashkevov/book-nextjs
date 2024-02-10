import React from "react";
import Image from "next/image";
import Link from "next/link";

import BookCover from "../../../public/images/book_cover.jpg";
import LinearGradient from "../UI/LinearGradient";

const HeroSection: React.FC = () => {
	return (
		<section className="relative lg:flex lg:gap-x-14 lg:items-center w-full">
			<LinearGradient className="top-8 right-0" />
			<div className="flex flex-col items-start lg:flex-shrink-0 max-w-[36rem] w-full mb-8">
				<h1 className="text-xl lg:text-2xl mb-16 animate-showContent">
					<span className="text-purple-500">69+</span>&nbsp;Вълнуващи места за
					любов
				</h1>

				<p className="text-lg mb-8 animate-showContent-smallDelay">
					Вкарай доза&nbsp;
					<span className="text-purple-500">приключение</span>&nbsp;в своето
					ежедневие!
				</p>

				<Link
					href="#contact"
					className="base-btn animate-showContent-bigDelay mb-4"
				>
					Купи сега
				</Link>
				<div className="flex items-center justify-start w-full gap-x-2 lg:gap-x-0 animate-showContent-bigDelay mb-3">
					<strong className="text-base lg:text-[30px] text-red-800">
						34.99лв&nbsp;
					</strong>
					<span className='text-[1rem] lg:text-base'>с подаръчна кутия + безплатна доставка до офис</span>
				</div>
				<div className="flex items-end h-[55px] w-full animate-showContent-bigDelay mb-3">
					<p className="relative flex items-baseline">
						<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[60px] lg:w-[70px] h-[3px] bg-black" />
						<span className="text-base lg:text-[30px] font-extralight">
							49.99лв
						</span>
					</p>
					<p className="flex self-start items-baseline">
						<span className="text-base md:text-[30px] text-red-800 font-bold">
							24.99лв
						</span>
					</p>
					<span className='text-sm lg:text-base'>без подаръчна кутия</span>
				</div>
			</div>

			<div className="flex-grow">
				<Image
					src={BookCover}
					alt="Book cover"
					className="rounded-xl"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
