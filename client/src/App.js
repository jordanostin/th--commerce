import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./store/slices/user/userSlice";
import { Home } from "./pages/home/Home";

function App() {

	const user = useSelector(state => state);
	const dispatch = useDispatch();
	
	useEffect(() => {
		console.log(user)
	},[user])

	useEffect(() =>{

		const token = localStorage.getItem('token');
		const headers = {
			'Authorization': `Bearer ${token}`
		};

		console.log(user.user.isLogged)

		if(token){
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
				<Home />
			</>
	);
}

export default App;
