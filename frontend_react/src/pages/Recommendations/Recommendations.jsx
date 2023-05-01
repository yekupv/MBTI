import React, { useEffect, useState } from "react";
import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import "./Recommendations.scss";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getCardTitlebyId, getCardbyCode } from "../../helpers/getCardbyCode";
import { ImSpinner2 } from "react-icons/im";
import PersonalityBlock from "../../components/PersonalityBlock/PersonalityBlock";
import RecommendationList from "../../components/RecommendationList/ReccomendationList";

const Recommendations = () => {
	const { options } = useParams();
	const [recommendations, setRecommendations] = useState({});
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const isPersonalityType = options.length > 1 ? false : true;
	const [color, music] = options.split("--");
	const fetchData = async () => {
		try {
			setIsLoading(true);
			if (isPersonalityType) {
				const type = getCardTitlebyId(options);
				const response = await axios.post(
					`${
						process.env.REACT_APP_API_URL
					}/get_jobs_by_type?type=${encodeURIComponent(type)}`
				);

				const data = response.data;
				setRecommendations(data);
			} else {
				const response = await axios.post(
					`${
						process.env.REACT_APP_API_URL
					}/get_jobs?color=${encodeURIComponent(
						color
					)}&music=${encodeURIComponent(music)}`
				);

				const data = response.data;

				setRecommendations(data);
				setCards((prev) =>
					getCardbyCode(data.color_mbti, data.music_mbti)
				);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{!isLoading ? (
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.5 }}
					className='recommendations'
				>
					<GoBackButton
						path={
							isPersonalityType ? "/choose-personality" : "/test"
						}
					/>

					{!isPersonalityType && (
						<PersonalityBlock
							title={
								"Personality Types based on your preferences"
							}
							interactive={false}
							cards={cards}
						/>
					)}

					<RecommendationList recommendations={recommendations} />
				</motion.div>
			) : (
				<div className='recommendations__loading'>
					<ImSpinner2 className='recommendations__loading-image' />
				</div>
			)}
		</>
	);
};

export default Recommendations;
