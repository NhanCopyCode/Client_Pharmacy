import Select from "react-select";
import { useEffect, useState } from "react";

import { Button } from "../../../components/Client";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TableList, TitleHeader } from "../../../components/Admin";
import brandService from "../../../services/BrandService";
import { adminPath } from "../../../utils/constants";
import { TABLE_COLUMNS } from "../../../utils/constants";
import Pagination from "../../../components/Pagination";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
function ShowTableBrand({ model }) {
	const [selectedOption, setSelectedOption] = useState(null);
	const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [meta, setMeta] = useState([]);

	const fetchBrands = async (params = {}) => {
		setLoading(true);
		try {
			const response = await brandService.getAll(params);
			setBrands(response.data.data);
			setMeta(response.data.meta);
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBrands();
	}, []);

	const handleSearch = () => {
		fetchBrands({ search: searchInput });
	};

	const handlePageChange = (page) => {
		fetchBrands({ search: searchInput, page });
	};

	return (
		<>
			<TitleHeader
				title={"Thêm mới"}
				buttonIcon={<IoMdAddCircle />}
				titleButton={"Thêm mới"}
				to={adminPath.create(model)}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2">
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
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSearch();
						}
					}}
				/>
				<Button
					leftIcon={<IoIosSearch />}
					background="bg-none"
					color="text-black"
					border="border border-gray-200"
					rounded="rounded-md"
					hoverEffect="hover:bg-gray-200"
					fontWeight="font-bold"
					onClick={handleSearch}
				>
					Tìm
				</Button>
			</div>

			<div className="p-3">
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<TableList
							columns={TABLE_COLUMNS.brands}
							tableBody={brands}
							model={"brands"}
							onDeleteSuccess={fetchBrands}
						/>
						<Pagination
							meta={meta}
							onPageChange={handlePageChange}
						/>
					</>
				)}
			</div>
		</>
	);
}

export default ShowTableBrand;
