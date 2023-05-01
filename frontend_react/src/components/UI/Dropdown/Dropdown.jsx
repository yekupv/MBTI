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
	const [visible, setVisible] = useState(false);
	const [filteredData, setFilteredData] = useState(data);
	const debounced = useDebounce(search);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setFilteredData(
			data.filter((entry) => {
				return entry
					.toLowerCase()
					.replace(/\s/g, "")
					.includes(search.toLowerCase());
			})
		);
	}, [debounced]);

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
