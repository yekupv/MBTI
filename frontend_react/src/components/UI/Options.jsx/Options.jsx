import React from "react";
import { MdDone } from "react-icons/md";
import "./Options.scss";
import { motion } from "framer-motion";

const Options = ({ language, isActive, handleChangeLanguage }) => {
	return (
		<motion.div
			whileInView={{ y: [-20, 0], opacity: [0, 1] }}
			whileHover={{}}
			transition={{ duration: 0.5 }}
			onClick={handleChangeLanguage}
			className={"option " + (isActive ? "activeOption" : "")}
		>
			<motion.p>{language}</motion.p>
			<motion.span>
				<MdDone
					style={{
						display: isActive ? "" : "none",
						transition: "display 5s ease-in",
					}}
				/>
			</motion.span>
		</motion.div>
	);
};

export default Options;
