import { useState } from "react";
import Button from "./Button";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { customStylesModal } from "../../utils/constants";
import formatPriceVND from "../../utils/formatPriceVND";
import { toast } from "react-toastify"; 
import Modal from "react-modal";
Modal.setAppElement("#root");
function DiscountItem({ voucher }) {
	const [modalIsOpen, setIsOpen] = useState(false);

	const { code, title, end_date, description,discount_type, discount_value, max_discount_value, min_order_value } = voucher;

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			toast.success("Đã sao chép mã giảm giá!");
		} catch (err) {
			toast.error("Sao chép thất bại!");
		}
	};
	return (
		<>
			<div className="flex items-stretch w-full flex-1 mt-8">
				{/* This div below */}
				<div className="border-2 border-primary border-r-0 rounded-md w-[75px] p-2 shrink-0 flex items-center justify-center after:content-['']">
					<img
						className="w-full object-cover"
						src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/img_coupon_1.jpg?1736388760084"
						alt=""
					/>
				</div>
				<div className="border-2 border-primary rounded-md p-[5px] flex-1 border-l-1">
					<div className="flex items-center justify-between text-[16px]">
						<h4 className="text-black">{code}</h4>
						<Button
							background="bg-none"
							hoverEffect="hover:none"
							color="text-primary"
							buttonHeight="h-[25px]"
							buttonWidth="w-[25px]"
							padding="p-none"
							onClick={openModal}
						>
							<IoIosInformationCircleOutline className="w-full h-full" />
						</Button>
					</div>
					<span className="text-[12px]">{title}</span>
					<div className="flex items-center justify-between">
						<span className="text-primary text-[12px]">
							HSD: {end_date}
						</span>
						<Button fontSize="text-sm" onClick={handleCopy}>
							Sao chép
						</Button>
					</div>
				</div>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStylesModal}
				contentLabel="Example Modal"
			>
				<div className="flex flex-col text-sm">
					<div className="flex items-center justify-between h-[42px] bg-darkBlue p-[10px] text-white">
						<span>Thông tin voucher</span>

						<Button background="bg-none" onClick={closeModal}>
							<LiaTimesSolid className="w-5 h-5" />
						</Button>
					</div>
					<div className="p-[10px] grid grid-cols-12 border-b border-gray-100">
						<div className="text-darkBlue col-span-4">
							Mã giảm giá:
						</div>
						<div className="col-span-8">{code}</div>
					</div>
					<div className="p-[10px] grid grid-cols-12 border-b border-gray-100">
						<div className="text-darkBlue col-span-4">
							Ngày hết hạn:
						</div>
						<div className="col-span-8">{end_date}</div>
					</div>
					<div className="p-[10px] grid grid-cols-12 border-b border-gray-100">
						<div className="text-darkBlue col-span-4">
							Điều kiện:
						</div>
						<div
							className="col-span-8"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>
					</div>
					<div className="p-[10px] grid grid-cols-12 border-b border-gray-100">
						<div className="text-darkBlue col-span-4">
							Giá trị đơn tối thiểu:
						</div>
						<div className="col-span-8">
							{formatPriceVND(min_order_value)}
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default DiscountItem;
