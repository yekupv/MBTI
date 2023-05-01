import React, { useReducer } from "react";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import MyButton from "../../components/UI/Button/MyButton";
import { useNavigate } from "react-router-dom";
import activeReducer from "../../store/activeReducer";
import { motion } from "framer-motion";
import {
	ActiveIndexContext,
	ActiveIndexDispatchContext,
} from "../../context/ActiveIndexContext";
import "./ChoosePersonality.scss";
import PersonalityBlockList from "../../components/PersonalityBlockList/PersonalityBlockList";
const ChoosePersonality = () => {
	const navigate = useNavigate();
	const [activeIndex, dispatch] = useReducer(activeReducer, 0);

	return (
		<ActiveIndexContext.Provider value={activeIndex}>
			<ActiveIndexDispatchContext.Provider value={dispatch}>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.5 }}
					className='choosePersonality'
				>
					<GoBackButton path='/' />
					<div className='choosePersonality__recommendations'>
						<h1>Choose Your Personality</h1>

						<MyButton
							onClick={() =>
								navigate(`/Recommendations/${activeIndex}`)
							}
							disabled={!activeIndex}
						>
							See Recommendations →
						</MyButton>
					</div>
					<PersonalityBlockList />
				</motion.div>
			</ActiveIndexDispatchContext.Provider>
		</ActiveIndexContext.Provider>
	);
};

export default ChoosePersonality;
