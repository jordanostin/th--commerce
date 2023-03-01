import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/nav/nav';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { User } from './pages/User';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { addUser } from "./store/slices/user/userSlice";

function App() {

	const user = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(user)
	}, [user]);

	useEffect(() =>{
		const token = localStorage.getItem('jwt');
		if(token && !user.isLogged){
			// faire unre route qui va vérifier le token des users
			axios.get('http://localhost:9001/verify-token')
				.then(data => console.log(data))
		}
	}, [])

	
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
