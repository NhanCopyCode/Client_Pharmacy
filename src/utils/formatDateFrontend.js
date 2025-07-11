function formatDateFrontend(inputDateStr) {
	const date = new Date(inputDateStr);

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); 
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
}

export default formatDateFrontend;