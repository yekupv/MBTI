import React from "react";
import { Greetings } from "../../components";
import "./Main.scss";
import { images } from "../../assets";
import { motion } from "framer-motion";

const Main = () => {
	return (
		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='main'
		>
			<Greetings />
			<img
				className='vector-2'
				src={images.vector3}
				alt='background_vector1'
			/>
			<img
				className='vector-1'
				src={images.vector2}
				alt='background_vector2'
			/>
			<motion.div
				whileInView={{ x: [300, -50], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className='image'
			>
				<img src={images.hero_image} alt='hero_image' />
			</motion.div>
		</motion.div>
	);
};

export default Main;
