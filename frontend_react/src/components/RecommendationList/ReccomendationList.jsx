import React from "react";
import "./RecommendationList.scss";
const RecommendationList = ({ recommendations }) => {
	//takes as a prop recommendation object from parent component api response and renders all information from that response if there is any
	return (
		<div className='recommendation-list'>
			{recommendations.color_rec && (
				<div className='recommendation-list__colors'>
					<h1>Recommended Colors</h1>
					<ul>
						{recommendations.color_rec &&
							recommendations.color_rec.map((color) => (
								<li key={color}>{color}</li>
							))}
					</ul>
				</div>
			)}
			{recommendations.music_rec && (
				<div className='recommendation-list__music'>
					<h1>Recommended Music</h1>
					<ul>
						{recommendations.music_rec &&
							recommendations.music_rec.map((music) => (
								<li key={music}>{music}</li>
							))}
					</ul>
				</div>
			)}

			<div className='recommendation-list__jobs'>
				<h1>Recommended Jobs</h1>
				<ul>
					{recommendations.job_rec &&
						Object.entries(recommendations.job_rec).map(
							([mbti, jobs]) => (
								<li key={mbti}>
									<h4>{mbti}</h4>
									<ul>
										{jobs.map((job) => (
											<li key={job}>{job}</li>
										))}
									</ul>
								</li>
							)
						)}
				</ul>
			</div>
		</div>
	);
};

export default RecommendationList;
