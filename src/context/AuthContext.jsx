import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export  function AuthProvider({ children }) {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const [token, setToken] = useState(localStorage.getItem("token") || null);
	const [refreshToken, setRefreshToken] = useState(
		localStorage.getItem("refresh_token") || null
	);

	const loginUser = (data) => {
		setToken(data.access_token);
		setRefreshToken(data.refresh_token);
		setUser(data.user);
		localStorage.setItem("token", data.access_token);
		localStorage.setItem("refresh_token", data.refresh_token);
		localStorage.setItem("user", JSON.stringify(data.user));
	};

	const logoutUser = () => {
		setUser(null);
		setToken(null);
		setRefreshToken(null);
		localStorage.clear();
	};

	return (
		<AuthContext.Provider value={{ user, token, refreshToken, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
}

