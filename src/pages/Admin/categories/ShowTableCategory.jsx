import Select from "react-select";
import { useEffect, useState } from "react";

import { Button } from "../../../components/Client";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TableList, TitleHeader } from "../../../components/Admin";
import { adminPath, TABLE_COLUMNS } from "../../../utils/constants";
import { Pagination } from "../../../components";
import categoryService from "../../../services/CategoryService";

function ShowTableCategory() {
	const [listParents, setListParents] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [meta, setMeta] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);

	const fetchCategories = async (params = {}) => {
		setLoading(true);
		try {
			const response = await categoryService.getAll(params);
			setListParents(response.data.listParents);
			setCategories(response.data.data);
			setMeta(response.data.meta);
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	const handleSearch = () => {
		fetchCategories({
			search: searchInput,
			parentId: selectedOption?.value || null,
		});
	};

	const handlePageChange = (page) => {
		fetchCategories({
			search: searchInput,
			parentId: selectedOption?.value || null,
			page,
		});
	};

	const handleParentSelect = (option) => {
		setSelectedOption(option);
		fetchCategories({
			search: searchInput,
			parentId: option?.value || null,
		});
	};

	return (
		<>
			<TitleHeader
				title={"Thêm mới"}
				buttonIcon={<IoMdAddCircle />}
				titleButton={"Thêm mới"}
				to={adminPath.create("categories")}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2 flex-wrap">
				<Select
					className=" text-sm"
					placeholder="Chọn loại danh mục"
					value={selectedOption}
					onChange={handleParentSelect}
					options={[
						{ value: null, label: "Tất cả danh mục cha" },
						...listParents,
					]}
					isClearable
				/>
				{/* <Select
						className=" text-sm"
						placeholder="Chọn loại danh mục"
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={options}
					/> */}
				<input
					className="h-[38px] px-3 outline-0 border 
						border-gray-200 rounded-md text-sm w-[180px]"
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

			<div className="p-3 overflow-y-scroll">
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<TableList
							columns={TABLE_COLUMNS.categories}
							tableBody={categories}
							model={"categories"}
							onDeleteSuccess={fetchCategories}
							service={categoryService}
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

export default ShowTableCategory;
