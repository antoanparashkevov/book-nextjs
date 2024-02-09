import React, {useEffect, useState} from "react";
import ContactForm from "../UI/ContactForm";

const options = {
	root: null,//the browser viewport
	rootMargin: "0px",
	threshold: "0.1"//indicated at what percentage (0.1 means 10%) of the target's visibility the observer's callback should be executed
};

const ContactSection: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const callback = (entries: IntersectionObserverEntry[], observer) => {
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
		observer.observe(document.getElementById('contact'));

		//clean up function
		return () => observer.unobserve(document.getElementById('contact'));
	}, []);

	return (
		<section id='contact' className="w-full">
			<h1 className="text-[45px] text-purple-500 text-center mb-8 mx-auto">
				Поръчай сега
			</h1>
			<ContactForm />
		</section>
	);
};

export default ContactSection;
