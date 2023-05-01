import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.scss";
import Input from "../Input/Input";
import { useDebounce } from "../../../hooks/debounce";
import { motion } from "framer-motion";

const Dropdown = ({
	placeholder,
	data,
	search,
	inputChangeHandler,
	label = "color",
}) => {
	const [visible, setVisible] = useState(false); //state to show dropdown list
	const [filteredData, setFilteredData] = useState(data); //filtered data based on users input
	const debounced = useDebounce(search); //debounce hook to timeout input value so filtering is not called everytime user changes input(perfomance tip)
	const dropdownRef = useRef(null);
	// setfiltered data filter data based on inputs value
	useEffect(() => {
		setFilteredData(
			data.filter((entry) => {
				return entry
					.toLowerCase()
					.replace(/\s/g, "")
					.includes(search.toLowerCase());
			})
		);
	}, [debounced]); //dependency array to optimize perfomance
	//sets dropdown list to false if user clicked somewhere outside list
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setVisible(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);
	//renders input component and dropdown list
	return (
		<div className='dropdown' ref={dropdownRef}>
			<h4>{label}</h4>
			<Input
				name={label}
				id='input'
				placeholder={placeholder}
				searchPromt={search}
				onChange={inputChangeHandler}
				onFocus={() => setVisible(!visible)}
			/>

			{visible && (
				<motion.div
					whileInView={{ y: [-15, 0] }}
					transition={{ duration: 0.3, staggerChildren: 0.5 }}
					className='dropdown__list'
				>
					{filteredData.map((color) => (
						<div
							className='dropdown__item'
							key={color}
							onClick={() => {
								inputChangeHandler(undefined, color);
								setVisible(false);
							}}
						>
							{color}
						</div>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default Dropdown;
