import React from "react";
import "./Card.scss";
import { motion } from "framer-motion";
const Card = ({
	imgUrl,
	personality_title,
	MBTICode,
	background_color,
	isActive,
	onSelect,
	interactive,

	...props
}) => {
	//renders a card with condional classnames, and onclick dispatches activeIndex state in parent comonent
	return (
		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className={
				"card " +
				(isActive ? "activeCard" : "") +
				(interactive ? "" : "noninteractive")
			}
			onClick={onSelect}
			style={{ backgroundColor: background_color }}
			{...props}
		>
			<img src={imgUrl} alt='Personality_image' />
			<h3>{personality_title}</h3>
			<p>{MBTICode}</p>
		</motion.div>
	);
};

export default Card;
