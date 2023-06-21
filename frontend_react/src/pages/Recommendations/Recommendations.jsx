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
	const { options } = useParams(); // takes parameters from url
	const [recommendations, setRecommendations] = useState({}); //state to store response data from api
	const [cards, setCards] = useState([]); //state to store cards array from response
	const [isLoading, setIsLoading] = useState(false); // loading state
	const isPersonalityType = options.length > 2 ? false : true; // determines from where navigation was from, if parameters length is equal to 2 that means that navigation was from choose-personality page
	const [color, music] = options.split("--"); //splits given parameters by -- to two variables
	//fetches data from api, if was navigated from choose personality page post to get_jobs_by_type route, if navigation was from test page post request is send to get_jobs route
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
	//fetches data on initial render
	useEffect(() => {
		fetchData();
	}, []);

	//if data was fetched renders motion div with gobackbutton compoennt, and if ispersonality type is true render presonality block componet using as a cards array cards state from response
	//and recommendationList component  with recommendations props from response data. if data is still fetching renders loading spinner to indicate loading
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
