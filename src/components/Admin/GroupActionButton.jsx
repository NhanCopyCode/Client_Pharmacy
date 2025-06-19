import PropTypes from "prop-types";
import { Button } from "../Client";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { adminPath } from "../../utils/constants";

function GroupActionButton({ id, model }) {
	const handleDelete = () => {
		console.log(`Delete ${model} with id: ${id}`);
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
				to={ adminPath.edit(model, id)}
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
				to={ adminPath.detail(model, id)}
			></Button>
		</div>
	);
}

GroupActionButton.propTypes = {
	id: PropTypes.number.isRequired,
	model: PropTypes.string.isRequired,
};

export default GroupActionButton;
