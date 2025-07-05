import { Editor } from "../../../components/Admin";

import { TitleHeader } from "../../../components/Admin";
import { Button } from "../../../components/Client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";

import { ImageUpload } from "../../../components/Admin";

function AddNewAccount() {
	return (
		<>
			<TitleHeader
				to={adminPath.BRANDS}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">Tên hãng</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh hãng
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUpload />
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Mô tả hãng</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<Editor placeholder="Nhập mô tả hãng" />
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Duyệt</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									id="test"
									type="checkbox"
									className="border border-gray-300 w-3 h-3 scale-150 accent-blue-600 rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex items-center justify-end gap-2 mt-4">
					<Button
						background="bg-gray"
						color="text-white"
						hoverEffect="hover:bg-gray/90"
					>
						Đóng
					</Button>
					<Button
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
					>
						Lưu
					</Button>
				</div>
			</div>
		</>
	);
}

export default AddNewAccount;
