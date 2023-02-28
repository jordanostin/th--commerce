import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/nav/nav';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { User } from './pages/User';

function App() {

	
	return(
			<>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Nav />}/>
						<Route path='/login' element={<Login/>}/>
						<Route path='/register' element={<Register/>}/>
						<Route path='/user' element={<User />}/>
					</Routes>
				</BrowserRouter>
			</>
	);
}

export default App;
