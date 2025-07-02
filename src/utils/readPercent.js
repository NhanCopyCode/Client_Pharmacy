export function readPercent(number) {
	const cs = [
		"không",
		"một",
		"hai",
		"ba",
		"bốn",
		"năm",
		"sáu",
		"bảy",
		"tám",
		"chín",
	];

	if (isNaN(number)) return "";
    
	const n = parseInt(number);
    if(n > 100) return "Không được vượt quá 100%";
	if (n === 0) return "Không phần trăm";

	if (n < 10) return cs[n] + " phần trăm";

	const ten = Math.floor(n / 10);
	const unit = n % 10;
	let str = "";

	if (ten === 1) {
		str += "mười ";
	} else {
		str += cs[ten] + " mươi ";
	}

	if (unit === 1) {
		str += "mốt";
	} else if (unit === 5) {
		str += "lăm";
	} else if (unit > 0) {
		str += cs[unit];
	}

	return (
		str.trim().charAt(0).toUpperCase() + str.trim().slice(1) + " phần trăm"
	);
}
