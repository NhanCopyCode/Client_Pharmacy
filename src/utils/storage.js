export const clearAuthStorage = () => {
	localStorage.removeItem("user");
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
	localStorage.removeItem("cart_items");
	localStorage.removeItem("expires_in");
	localStorage.removeItem("cart_quantity");
};

export const addAuthStorage = ({ user, access_token, refresh_token }) => {
	localStorage.setItem("user", JSON.stringify(user));
	localStorage.setItem("access_token", JSON.stringify(access_token));
	localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
};
