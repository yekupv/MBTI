import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import "./PersonalityBlock.scss";
import { motion } from "framer-motion";

import {
	ActiveIndexContext,
	ActiveIndexDispatchContext,
} from "../../context/ActiveIndexContext";

const PersonalityBlock = ({ title, cards, interactive, ...props }) => {
	const activeIndex = useContext(ActiveIndexContext);
	const dispatch = useContext(ActiveIndexDispatchContext);
	return (
		<motion.div
			whileInView={{ y: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='personality_block'
		>
			{title && <h2>{title}</h2>}

			<div className='cards'>
				{cards.map((card) => (
					<Card
						interactive={interactive}
						key={card.id}
						{...props}
						imgUrl={card.imgUrl}
						personality_title={card.personality_title}
						MBTICode={card.MBTICode}
						background_color={card.background_color}
						isActive={activeIndex === card.id}
						onSelect={() => {
							dispatch({
								type: "added",
								id: card.id,
							});
						}}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default PersonalityBlock;
