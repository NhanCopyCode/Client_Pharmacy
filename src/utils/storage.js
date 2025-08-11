export const clearAuthStorage = () => {
	localStorage.removeItem("user");
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
	localStorage.removeItem("cart_items");
	localStorage.removeItem("expires_in");
};

export const addAuthStorage = ({ user, accessToken, refreshToken }) => {
	localStorage.setItem("user", JSON.stringify(user));
	localStorage.setItem("access_token", JSON.stringify(accessToken));
	localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
};
