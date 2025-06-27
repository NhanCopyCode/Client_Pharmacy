import PropTypes from "prop-types";
import { Button } from "../Client";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { adminPath } from "../../utils/constants";
import Swal from "sweetalert2";

function GroupActionButton({ id, model, onDeleteSuccess, service }) {
	const handleDelete = async () => {
		const result = await Swal.fire({
			title: "Bạn có chắc chắn muốn xóa?",
			text: "Hành động này không thể hoàn tác!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Xóa",
			cancelButtonText: "Hủy",
		});

		if (result.isConfirmed) {
			try {
				await service.deleteById(id);
				if (onDeleteSuccess) onDeleteSuccess();

				Swal.fire("Đã xóa!", "Dữ liệu đã được xóa.", "success");
			} catch (error) {
				console.error("Delete error:", error);
				Swal.fire("Lỗi!", "Không thể xóa dữ liệu.", "error");
			}
		}
	};

	return (
		<div className="flex items-center gap-2">
			<Button
				background="bg-redColor"
				hoverEffect="hover:bg-darkRed"
				onClick={handleDelete}
			>
				Xóa
			</Button>

			<Button
				background="bg-success"
				subClass="whitespace-nowrap"
				hoverEffect="hover:bg-darkSuccess"
				to={adminPath.edit(model, id)}
			>
				Cập nhật
			</Button>

			<Button
				rightIcon={
					<FaRegEye className="text-black group-hover:text-white transition-colors duration-200" />
				}
				border="border border-gray"
				background="bg-transparent"
				hoverEffect="hover:bg-gray"
				to={adminPath.detail(model, id)}
			/>
		</div>
	);
}

GroupActionButton.propTypes = {
	id: PropTypes.number.isRequired,
	model: PropTypes.string.isRequired,
};

export default GroupActionButton;
