import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChoosePersonality, Main, Recommendations, Test } from "../pages";

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/choose-personality' element={<ChoosePersonality />} />
			<Route
				path={`/recommendations/:options`}
				element={<Recommendations />}
			/>
			<Route path='/test' element={<Test />} />
		</Routes>
	);
};

export default AppRouter;
