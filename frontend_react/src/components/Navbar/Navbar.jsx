import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal/Modal";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const primaryIconColor = "#E171B8";
	const hoverIconColor = "#524A65";
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Link to='/'>
					<h1>HOME</h1>
				</Link>
			</div>
			<div className='app__navbar-language'>
				{/* #524A65  #E171B8*/}
				<MdLanguage
					style={{
						cursor: "pointer",
						transition: "all 0.3s ease-in",
					}}
					size={"2rem"}
					color={isActive ? primaryIconColor : hoverIconColor}
					onClick={() => {
						setIsActive((state) => !state);
					}}
				/>
				{isActive && <Modal />}
			</div>
		</nav>
	);
};

export default Navbar;
