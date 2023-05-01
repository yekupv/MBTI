import React, { useState } from "react";
import "./Modal.scss";
import { MdDone } from "react-icons/md";
import Options from "../Options.jsx/Options";
import { motion } from "framer-motion";
const Modal = () => {
	const languages = ["EN", "RU", "KZ"];
	const [activeIndex, setActiveIndex] = useState(0);
	const handleChangeLanguage = (index) => {
		setActiveIndex((state) => index);
		console.log(activeIndex);
	};
	return (
		<motion.div
			whileInView={{ y: [-40, 0] }}
			transition={{ duration: 0.3, staggerChildren: 0.5 }}
			className='modal'
		>
			{languages.map((language, index) => (
				<Options
					key={index}
					language={language}
					isActive={activeIndex === index}
					handleChangeLanguage={() => setActiveIndex(index)}
				/>
			))}
		</motion.div>
	);
};

export default Modal;
