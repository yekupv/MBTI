import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./GoBackButton.scss";

const GoBackButton = ({ path }) => {
	return (
		<Link className='goBackButton' to={path}>
			<RiArrowGoBackFill />
			<p>Go back</p>
		</Link>
	);
};

export default GoBackButton;
