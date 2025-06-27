import { useState } from "react";
import Modal from "react-modal";
import { customStylesModal } from "../../utils/constants";
import ReactMarkdown from "react-markdown";
import {  toast } from "react-toastify";

import { GiSevenPointedStar } from "react-icons/gi";
import { MdContentCopy } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";

Modal.setAppElement("#root");
function ModalGenerateText({ service, ...fields }) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [descriptionGenerated, setDescriptionGenerated] = useState("");

	const hasRequiredFields = Object.values(fields).every(val => val && val !== "");
	async function openModal() {

        if (!hasRequiredFields) {
			toast.error(
				"Vui lòng nhập đầy đủ thông tin để AI có thể tạo mô tả."
			);
			return;
		}
        if (descriptionGenerated) {
            setIsOpen(true);
            return;
        } 
        setIsOpen(true);
		await handleGenerateDescription();
	}

	function closeModal() {
		setIsOpen(false);
	}

	const handleGenerateDescription = async () => {
        setDescriptionGenerated("Đang tạo mô tả...")
		const response = await service.generateDescription(fields);

		setDescriptionGenerated(response.data.description);
	};
    const handleCopy = () => {
		if (!descriptionGenerated) return;

		navigator.clipboard
			.writeText(descriptionGenerated)
			.then(() => {
				toast.success("Đã sao chép vào clipboard!");
			})
			.catch(() => {
				toast.error("Không thể sao chép!");
			});
	};
	return (
		<div>
			<div
				className="mt-2 text-primary bold flex items-center gap-2 cursor-pointer"
				onClick={openModal}
			>
				<span>(Dùng AI để tạo mô tả)</span>
				<GiSevenPointedStar />
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStylesModal}
				contentLabel="Example Modal"
			>
				<div className="rounded-2xl bg-white overflow-hidden relative">
					<div className="flex items-center justify-between p-4 border-b border-gray sticky top-0 z-10">
						<Button onClick={handleGenerateDescription}>
							Tạo lại mô tả
						</Button>
						<Button
							background="bg-redColor"
							hoverEffect="hover:bg-darkRed"
							fontSize="text-2xl"
							onClick={closeModal}
						>
							<FaTimes />
						</Button>
					</div>
					<div className="p-4 bg-gray-100 border-b border-gray">
						{descriptionGenerated ? (
							<ReactMarkdown>
								{descriptionGenerated}
							</ReactMarkdown>
						) : (
							"Đang tạo mô tả..."
						)}
					</div>

					<div className="bg-white p-4 flex items-center justify-end">
						<Button
							background="bg-white"
							color="text-black"
							fontSize="text-xl"
							border="border"
							hoverEffect="hover:bg-gray-200"
							onClick={handleCopy}
						>
							<MdContentCopy />
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default ModalGenerateText;
