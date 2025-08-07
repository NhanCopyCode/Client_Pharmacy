import Button from "./Button";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { customStyleModalAddAddress } from "../../utils/constants";
import { useState } from "react";

function AccountDetailAddress() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		company: "",
		address1: "",
		country: "Vietnam",
		province: "",
		district: "",
		ward: "",
		zip: "",
		isDefault: false,
	});
	const handleOpenModal = () => {
		setIsOpen(true);
	};

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<>
			<h1 className="text-[19px] uppercase">Đổi mật khẩu</h1>
			<button
				className="mt-8 bg-primary rounded-sm cursor-pointer hover:bg-primary/80 text-white text-sm px-4 h-[45px] font-bold"
				onClick={handleOpenModal}
			>
				Thêm địa chỉ
			</button>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyleModalAddAddress}
				contentLabel="Thêm địa chỉ"
			>
				<div className="p-4 text-[16px] font-bold flex items-center justify-between border-b border-gray-400">
					<h3>Thêm địa chỉ</h3>
					<Button onClick={closeModal}>
						<FaTimes />
					</Button>
				</div>
				<div className="p-4 text-[16px] border-b border-gray-400 flex flex-col gap-4">
					<input
						placeholder="Họ"
						className="rounded-sm border border-gray-300 px-4 py-2 outline-0 w-full"
					/>
					<input
						placeholder="Số điện thoại"
						className="rounded-sm border border-gray-300 px-4 py-2 outline-0 w-full"
					/>
					<input
						placeholder="Công ty"
						className="rounded-sm border border-gray-300 px-4 py-2 outline-0 w-full"
					/>
					<input
						placeholder="Địa chỉ"
						className="rounded-sm border border-gray-300 px-4 py-2 outline-0 w-full"
					/>

					<div className="flex items-center gap-3">
						<input type="checkbox" id="default_address" />
						<label htmlFor="default_address">
							Đây là địa chỉ mặc định ?
						</label>
					</div>
				</div>
				<div className="p-4 text-[16px] flex items-center justify-end gap-3">
					<Button background="bg-white" border="border border-gray-300" color="text-black" hoverEffect="hover:bg-gray-400 hover:text-white">Hủy</Button>
					<Button>Thêm địa chỉ</Button>
				</div>
			</Modal>
		</>
	);
}

export default AccountDetailAddress;
