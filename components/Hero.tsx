/** @format */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import LanguageSelector from "./Button";

const Hero = () => {
	const languages = [
		{ code: "en", name: "English" },
		{ code: "fr", name: "French" },
		// Add more languages as needed
	];

	const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

	const handleSelectLanguage = (code: string) => {
		setSelectedLanguage(code);
		// Perform any other actions when a language is selected
	};

	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
			<div className="hero-map" />

			<div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
				<Image
					src="/camp.svg"
					alt="camp"
					width={50}
					height={50}
					className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
				/>
				<h1 className="bold-52 lg:bold-88">Scan Explore Discover</h1>
				<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
					India, a land of diverse landscapes and rich culture,
					beckons with the majestic Himalayas, vibrant Delhi streets,
					and iconic Taj Mahal. Explore history, spirituality, and
					natural beauty in a tapestry of flavors, colors, and
					traditions.
				</p>

				<div className="my-11 flex flex-wrap gap-5">
					{/* Additional content */}
				</div>

				<div className="flex flex-col w-full gap-3 sm:flex-row">
					<LanguageSelector
						languages={languages}
						onSelectLanguage={handleSelectLanguage}
					/>
				</div>
			</div>

			<div className="relative flex flex-1 items-start">
				{/* Remaining content */}
			</div>
		</section>
	);
};

export default Hero;
