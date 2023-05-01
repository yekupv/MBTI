import React from "react";
import "./Tag.scss";

const Tag = ({ title, ...props }) => {
	// const colors = [
	// 	"#8360c3",
	// 	"#2ebf91",
	// 	"#677FB3",
	// 	"#2FBF92",
	// 	"#FFFFFF",
	// 	"#7E639F",
	// 	"#88F8A1",
	// 	"#DBFF76",
	// 	"#BEA2FA",
	// 	"#88FABC",
	// ];

	// function getRandomColor() {
	// 	const index = Math.floor(Math.random() * colors.length);
	// 	return colors[index];
	// }
	// const color = getRandomColor();

	return (
		// for adding random color. Need to rewrite <div {...props} className='tag' style={{ backgroundColor: color }}>
		<div {...props} className='tag'>
			{title}
		</div>
	);
};

export default Tag;
