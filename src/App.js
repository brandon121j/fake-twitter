import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';
import Login from './components/pages/Login';
import Main from './components/pages/Main';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index element={<Login />}></Route>
					<Route path="/main" element={<Main />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
