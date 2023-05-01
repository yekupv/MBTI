import React from "react";
import "./Input.scss";
const Input = ({ placeholder, searchPromt, onChange, name, ...props }) => {
	//render custom input tag with serachpromt prop as a value and onchange function from props to onchange value
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
