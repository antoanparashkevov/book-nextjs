'use client';

import React, { Fragment } from "react";

import HeroSection from "@/components/sections/HeroSection";
import SeparationLine from "@/components/UI/SeparationLine";
import DescriptionSection from "@/components/sections/DescriptionSection";
import ContactSection from "@/components/sections/ContactSection";

const HomePage: React.FC = () => {
	return (
		<Fragment>
			<HeroSection />
			<SeparationLine/>
			<DescriptionSection/>
			<SeparationLine/>
			<ContactSection/>
		</Fragment>
	);
};

export default HomePage;
