import React from "react";
import "./Input.scss";
const Input = ({ placeholder, searchPromt, onChange, name, ...props }) => {
	return (
		<input
			{...props}
			name={name}
			className='input'
			type='text'
			placeholder={placeholder}
			value={searchPromt}
			onChange={(e) => onChange(e, undefined)}
		/>
	);
};

export default Input;
