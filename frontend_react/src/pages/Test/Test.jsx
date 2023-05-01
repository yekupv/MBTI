import React, { useState } from "react";
import { colors, musicGenres } from "../../assets";
import { MyButton, Dropdown } from "../../components";

import "./Test.scss";
import { useNavigate } from "react-router-dom";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import { motion } from "framer-motion";

const Test = () => {
	const navigate = useNavigate();
	const [searchColors, setSearchColors] = useState("");
	const [searchMusic, setSearchMusic] = useState("");
	const [InputValidationError, setInputValidationError] = useState("");
	const changeSearchColor = (e, value) => {
		e ? setSearchColors(e.target.value) : setSearchColors(value);
	};
	const changeSearchMusic = (e, value) => {
		e ? setSearchMusic(e.target.value) : setSearchMusic(value);
	};
	const submitHandler = (e) => {
		e.preventDefault();

		if (!searchColors) {
			setInputValidationError("Please fill out Color field");
			return;
		}
		if (!colors.includes(searchColors)) {
			console.log(colors[0]);
			console.log(searchColors);
			setInputValidationError("Color is invalid");
			return;
		}
		if (!searchMusic) {
			setInputValidationError("Please fill out Music field");
			return;
		}
		if (!musicGenres.includes(searchMusic)) {
			setInputValidationError("Genre is invalid");
			return;
		}
		navigate(
			`/recommendations/${encodeURIComponent(
				searchColors
			)}--${encodeURIComponent(searchMusic)}`
		);
	};
	return (
		<motion.div
			whileInView={{ y: [-20, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className='test__wrapper'
		>
			<GoBackButton path={"/"} />
			{InputValidationError && (
				<motion.div
					whileInView={{ y: [-100, 0] }}
					transition={{ duration: 0.3, staggerChildren: 0.5 }}
					className='error'
				>
					{InputValidationError}
				</motion.div>
			)}

			<div className='test'>
				<form className='container' onSubmit={submitHandler}>
					<Dropdown
						placeholder={"Choose Your Favorite Color"}
						data={colors}
						search={searchColors}
						inputChangeHandler={changeSearchColor}
						label={"Color"}
					/>
					<Dropdown
						placeholder={"Choose Your Favorite Music"}
						data={musicGenres}
						search={searchMusic}
						inputChangeHandler={changeSearchMusic}
						label={"Music Genre"}
					/>
					<MyButton type='submit' value='Submit'>
						Find out your personality
					</MyButton>
				</form>
			</div>
		</motion.div>
	);
};

export default Test;
