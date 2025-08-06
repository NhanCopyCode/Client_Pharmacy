export const clearAuthStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem('refreshToken');

}