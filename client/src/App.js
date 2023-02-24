import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/nav/nav';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Nav />}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
				</Routes>
			</BrowserRouter>
		</>
		
	);
}

export default App;
