import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/nav/nav';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { User } from './pages/User';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./store/slices/user/userSlice";

function App() {

	const user = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() =>{

		const token = localStorage.getItem('token');
		const headers = {
			'Authorization': `Bearer ${token}`
		};

		if(token && !user.logged){
			fetch('http://localhost:9001/verify-token', {headers})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					dispatch(addUser(data.user))
				})
				.catch(err => console.log(err))
		}
	},[])

	
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
