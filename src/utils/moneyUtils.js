// src/utils/readMoneyVND.js

export function readMoneyVND(number) {
	const dv = ["", "nghìn", "triệu", "tỷ", "nghìn tỷ", "triệu tỷ"];
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

	number = parseInt(number);
	if (number === 0) return "Không đồng";

	let result = "";
	let i = 0;

	while (number > 0) {
		const block = number % 1000;
		if (block > 0) {
			result = readBlock(block, cs) + " " + dv[i] + " " + result;
		}
		number = Math.floor(number / 1000);
		i++;
	}

	result = result.trim().replace(/\s+/g, " ");
	result = result.charAt(0).toUpperCase() + result.slice(1) + " đồng";
	return result;
}

function readBlock(number, cs) {
	if (number < 100) {
		return readTen(number, cs);
	}

	const hundred = Math.floor(number / 100);
	const tenUnit = number % 100;
	let str = "";

	str += cs[hundred] + " trăm ";

	if (tenUnit > 0) {
		str += readTen(tenUnit, cs);
	}

	return str.trim();
}

function readTen(number, cs) {
	if (number < 10) return cs[number];

	const ten = Math.floor(number / 10);
	const unit = number % 10;
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

	return str.trim();
}
