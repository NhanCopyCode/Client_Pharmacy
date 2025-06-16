import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export  function AuthProvider({ children }) {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const [token, setToken] = useState(localStorage.getItem("token") || null);

	const loginUser = (data) => {
		setToken(data.access_token);
		setUser(data.user);
		localStorage.setItem("token", data.access_token);
		localStorage.setItem("user", JSON.stringify(data.user));
	};

	const logoutUser = () => {
		setUser(null);
		setToken(null);
		localStorage.clear();
	};

	return (
		<AuthContext.Provider value={{ user, token, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
}

