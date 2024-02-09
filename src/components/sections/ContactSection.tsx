import React from "react";
import ContactForm from "../UI/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section className="w-full">
			<h1 className="text-[45px] text-purple-500 text-center mb-8 mx-auto">
				Поръчай сега
			</h1>
			<ContactForm />
		</section>
	);
};

export default ContactSection;
