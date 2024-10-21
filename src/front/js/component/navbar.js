import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
	const navigate = useNavigate()

	const handleLogOut = () =>{
		if(window.sessionStorage.getItem('token')){
			window.sessionStorage.removeItem('token')
			navigate("/")
		}
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					{window.sessionStorage.getItem('token')? (<button onClick={() => handleLogOut()} className="btn btn-danger">LogOut</button>): 					<Link to="/signup">
						<button className="btn btn-primary">Signup</button>
					</Link>}

				</div>
			</div>
		</nav>
	);
};
