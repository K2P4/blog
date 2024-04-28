/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { HomePage } from "./Page";

const App = () => {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
