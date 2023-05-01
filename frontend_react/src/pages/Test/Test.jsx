import React, { useState } from "react";
import { colors, musicGenres } from "../../assets";
import { MyButton, Dropdown } from "../../components";

import "./Test.scss";
import { useNavigate } from "react-router-dom";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import { motion } from "framer-motion";

const Test = () => {
	const navigate = useNavigate();
	const [searchColors, setSearchColors] = useState(""); //state for colors input value
	const [searchMusic, setSearchMusic] = useState(""); //state for music input value
	const [InputValidationError, setInputValidationError] = useState(""); //state for validation error that occurs when input is incorrect
	//handler function to set state on inputs onchange event
	const changeSearchColor = (e, value) => {
		//if there is an event sets state to events target value otherwise, sets state to provided value
		e ? setSearchColors(e.target.value) : setSearchColors(value);
	};
	const changeSearchMusic = (e, value) => {
		e ? setSearchMusic(e.target.value) : setSearchMusic(value);
	};
	//submit handler function which validates inputs and navigates to recommendation page if inputs are valid
	const submitHandler = (e) => {
		e.preventDefault();
		//empty color input
		if (!searchColors) {
			setInputValidationError("Please fill out Color field");
			return;
		}
		//provided input value is not from colors array
		if (!colors.includes(searchColors)) {
			console.log(colors[0]);
			console.log(searchColors);
			setInputValidationError("Color is invalid");
			return;
		}
		//empty music genre input
		if (!searchMusic) {
			setInputValidationError("Please fill out Music field");
			return;
		}
		//provided input value is not from musicGenres array
		if (!musicGenres.includes(searchMusic)) {
			setInputValidationError("Genre is invalid");
			return;
		}
		//navigates to page
		navigate(
			`/recommendations/${encodeURIComponent(
				searchColors
			)}--${encodeURIComponent(searchMusic)}`
		);
	};

	//renders animated div with gobackbutton compoentn and condionally renders error prompt if there is any error then renders div with form which has 2 dropdown components and submit button
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
