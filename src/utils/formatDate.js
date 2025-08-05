const pad = (num) => (num < 10 ? `0${num}` : num);

const formatDate = (date) => {
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());
	const seconds = pad(date.getSeconds());

	const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	return formatted;
};

export const formatVietnameseDate = (dateString) => {
	const date = new Date(dateString);

	const day = date.getDate();
	const month = date.getMonth() + 1;

	return `${day} tháng ${month}`
}


export default formatDate;

