import React from "react";
import "./SpecialtyBlock.scss";
import Tag from "../UI/Tag/Tag";
import { motion } from "framer-motion";
const SpecialtyBlock = ({ imgUrl, title, descirption, tags }) => {
	return (
		<motion.div
			whileInView={{ y: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='specialtyBlock'
		>
			<img src={imgUrl} alt='specialtyImage' />
			<div className='specialtyBlock__information'>
				<h3>{title}</h3>
				<p>{descirption}</p>
				{tags.map((tag, index) => (
					<Tag title={tag} key={tag + index} />
				))}
			</div>
		</motion.div>
	);
};

export default SpecialtyBlock;
