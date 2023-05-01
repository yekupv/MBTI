import React from "react";
import PersonalityBlock from "../PersonalityBlock/PersonalityBlock";
import { Analysts, Diplomats, Sentinels, Explorers } from "../../assets";
const PersonalityBlockList = () => {
	//renders 4 personalityBlock
	return (
		<div>
			<PersonalityBlock
				title='Analysts'
				interactive={true}
				cards={Analysts}
			/>
			<PersonalityBlock
				title='Diplomats'
				interactive={true}
				cards={Diplomats}
			/>
			<PersonalityBlock
				title='Sentinels'
				interactive={true}
				cards={Sentinels}
			/>
			<PersonalityBlock
				title='Explorers'
				interactive={true}
				cards={Explorers}
			/>
		</div>
	);
};

export default PersonalityBlockList;
