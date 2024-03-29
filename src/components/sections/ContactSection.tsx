import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import ContactForm from "@/components/UI/ContactForm";
const BaseDialog = dynamic(() => import('@/components/UI/BaseDialog'));

import GiftBoxImage from '../../../public/images/gift_box_new_1.webp';

const options: IntersectionObserverInit = {
	root: null,//the browser viewport
	rootMargin: "0px",
	threshold: 0.1//indicated at what percentage (0.1 means 10%) of the target's visibility the observer's callback should be executed
};

const ContactSection: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [closeFromModal, setCloseFromModal] = useState<boolean>(false);

	const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if( entry.target.id === 'contact' && entry.isIntersecting ) {

				const timeoutId = setTimeout(() => {
					setShowModal(true);
					clearTimeout(timeoutId);
				}, 2000)
			}
		})
	};

	useEffect(() => {
		let observer = new IntersectionObserver(callback, options);

		if( !closeFromModal ) {
			observer.observe(document.getElementById('contact')!);
		} else {
			observer.unobserve(document.getElementById('contact')!);
		}

		//clean up function
		return () => observer.unobserve(document.getElementById('contact')!);
	}, [closeFromModal]);

	return (
		<section id='contact' className="w-full">
			{showModal && !closeFromModal &&
				<BaseDialog
					title='Нашите оферти за теб'
					fixed={false}
					tryClose={() => setCloseFromModal(true)}
				>
					<div className='flex flex-wrap justify-center gap-4'>

						<div className={`
								inline-flex flex-col justify-center items-center gap-y-2 p-8 max-w-[350px] w-full
							 	border border-solid border-gray-500 rounded-xl
							`.trim()}
						>
							<strong className="text-base lg:text-[30px] text-red-800">
								34.99лв&nbsp;
							</strong>
							<span className='text-sm lg:text-base'>с подаръчна кутия + безплатна доставка до офис</span>
							<div className='max-w-[50%]'>
								<Image
									src={GiftBoxImage}
									alt='Gift Box Image'
									className='rounded-xl'
								/>
							</div>
						</div>
						<div className={`
								inline-flex flex-col justify-center items-center gap-y-2 p-8 max-w-[350px] w-full
							 	border border-solid border-gray-500 rounded-xl
							`.trim()}
						>
							<div className='flex justify-center items-end gap-x-2 w-full'>
								<p className="relative flex items-baseline">
									<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[60px] lg:w-[70px] h-[3px] bg-black"/>
									<span className="text-base lg:text-[30px] font-extralight">
										49.99лв
									</span>
								</p>
								<p className="flex self-start items-baseline">
								<span className="text-base lg:text-[30px] text-red-800 font-bold">
									24.99лв
								</span>
								</p>
							</div>
							<span className='text-sm lg:text-base'>без подаръчна кутия</span>
						</div>
					</div>
				</BaseDialog>
			}
			<h1 className="text-[45px] text-purple-500 text-center mb-8 mx-auto">
				Поръчай сега
			</h1>
			<ContactForm/>
		</section>
	);
};

export default ContactSection;
