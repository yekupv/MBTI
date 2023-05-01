import React from "react";
import MyButton from "../UI/Button/MyButton";
import "./Greetings.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Greetings = () => {
	const nav = useNavigate(); //to navigate to different pages
	//renders animated div with 2 h tags and div with Mybutton component and div that navigates to /test page
	return (
		<motion.div
			whileInView={{ x: [-300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='greetings'
		>
			<h1>Find out your specialty</h1>
			<h3>
				Get a “freakishly accurate” description of who you are and why
				you do things the way you do.
			</h3>
			<div className='greetings__buttons'>
				<MyButton
					onClick={() => {
						nav("/choose-personality");
					}} //navigates to /choose-personality page when div is clicked
				>
					Choose Personality
				</MyButton>
				<div
					className='greetings__buttons--secondary'
					onClick={() => {
						nav("/test");
					}} //navigates to /test page when div is clicked
				>
					Take the Test →
				</div>
			</div>
		</motion.div>
	);
};

export default Greetings;
