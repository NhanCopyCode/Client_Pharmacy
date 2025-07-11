import Select from "react-select";
import { useEffect, useState } from "react";

import { Button } from "../../../components/Client";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TableList, TitleHeader } from "../../../components/Admin";
import { adminPath } from "../../../utils/constants";
import { TABLE_HEADS } from "../../../utils/modelConstant";
import brandService from "../../../services/BrandService";
const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
function ShowTableAccount() {
	const [selectedOption, setSelectedOption] = useState(null);
	const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBrands = async () => {
			try {
				const response = await brandService.getAll();
				setBrands(response.data.data);
			} catch (error) {
				console.log("Error: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchBrands();
	}, []);

	return (
		<>
			<TitleHeader
				title={"Thêm mới"}
				buttonIcon={<IoMdAddCircle />}
				titleButton={"Thêm mới"}
				to={adminPath.BRANDS_CREATE}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2 flex-wrap">
				<Select
					className=" text-sm"
					placeholder="Chọn loại bộ đề"
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
				/>
				<Select
					className=" text-sm"
					placeholder="Chọn loại bộ đề"
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
				/>
				<input
					className="h-[38px] px-3 outline-0 border border-gray-200 rounded-md text-sm w-[180px]"
					placeholder="Tìm kiếm..."
				/>
				<Button
					leftIcon={<IoIosSearch />}
					background="bg-none"
					color="text-black"
					border="border border-gray-200"
					rounded="rounded-md"
					hoverEffect="hover:bg-gray-200"
					fontWeight="font-bold"
				>
					Tìm
				</Button>
			</div>

			<div className="p-3 overflow-y-scroll">
				{loading ? (
					<div className="flex justify-center items-center h-40">
						<TailSpin
							height="40"
							width="40"
							color="#4fa94d"
							ariaLabel="tail-spin-loading"
							radius="1"
							visible={true}
						/>
					</div>
				) : (
					<TableList
						tableHead={[...TABLE_HEADS.Brands, "Lựa chọn"]}
						tableBody={brands}
						model={"users"}
					/>
				)}
			</div>
		</>
	);
}

export default ShowTableAccount;
