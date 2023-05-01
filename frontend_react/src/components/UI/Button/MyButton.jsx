import React from "react";
import "./MyButton.scss";

const MyButton = ({ children, ...props }) => {
	//renders a button with custom styles that spread all given props from parent component to button tag and renders it's children
	return (
		<button {...props} className='myBtn '>
			{children}
		</button>
	);
};

export default MyButton;
