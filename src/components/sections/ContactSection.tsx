import React from "react";
import ContactForm from "../UI/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section className="w-full">
			<h1 className="w-[80%] text-[45px] mb-4 text-center mx-auto">
				Sign Up <span className="text-orange-500">Now</span> And Let&apos;s
				Build Your <span className='text-orange-500'>Dream-Looking</span> Website Together
			</h1>
			<ContactForm />
		</section>
	);
};

export default ContactSection;
