import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import axiosInstance from "../services/api/axiosInstance";

// const handleExcelUpload = async (e, model, onSuccessCallback) => {
// 	console.log("file đã được chọn");
// 	const file = e.target.files[0];
// 	if (!file) return;

// 	const reader = new FileReader();
// 	reader.onload = async (evt) => {
// 		const binaryStr = evt.target.result;
// 		const workbook = XLSX.read(binaryStr, { type: "binary" });
// 		const worksheet = workbook.Sheets[workbook.SheetNames[0]];
// 		const jsonData = XLSX.utils.sheet_to_json(worksheet);

// 		if (!jsonData.length) {
// 			Swal.fire({
// 				icon: "warning",
// 				title: "Lỗi",
// 				text: "Không có dữ liệu trong file Excel!",
// 			});
// 			e.target.value = "";
// 			return;
// 		}

// 		try {
// 			const res = await axiosInstance.post(`${model}/import`, {
// 				file: jsonData,
// 			});

// 			if (res) {
// 				Swal.fire({
// 					icon: "success",
// 					title: "Thành công!",
// 					text: `Dữ liệu ${model} đã được nhập thành công.`,
// 					timer: 2000,
// 					showConfirmButton: false,
// 				});
// 			}

// 			if (typeof onSuccessCallback === "function") {
// 				onSuccessCallback(); 
// 			}
// 		} catch (error) {
// 			console.error("Import failed:", error);
// 			Swal.fire({
// 				icon: "error",
// 				title: "Lỗi",
// 				text: "Đã xảy ra lỗi khi import dữ liệu.",
// 			});
// 		} finally {
// 			e.target.value = ""; 
// 		}
// 	};

// 	reader.readAsBinaryString(file);
// };

const handleExcelUpload = async (e, model, onSuccessCallback) => {
	const file = e.target.files[0];
	if (!file) return;

	const formData = new FormData();
	formData.append("file", file); // ✅ gửi file thực sự

	try {
		const res = await axiosInstance.post(`${model}/import`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		if (res) {
			Swal.fire({
				icon: "success",
				title: "Thành công!",
				text: `Dữ liệu ${model} đã được nhập thành công.`,
				timer: 2000,
				showConfirmButton: false,
			});
		}

		if (typeof onSuccessCallback === "function") {
			onSuccessCallback();
		}
	} catch (error) {
		console.error("Import failed:", error);
		Swal.fire({
			icon: "error",
			title: "Lỗi",
			text: "Đã xảy ra lỗi khi import dữ liệu.",
		});
	} finally {
		e.target.value = "";
	}
};


export default handleExcelUpload;
