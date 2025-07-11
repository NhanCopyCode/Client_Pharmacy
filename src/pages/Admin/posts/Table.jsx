import { useEffect, useState } from "react";

import { Button } from "../../../components/Client";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TableList, TitleHeader } from "../../../components/Admin";
import { adminPath, TABLE_COLUMNS } from "../../../utils/constants";
import { Pagination } from "../../../components";
import postService from "../../../services/PostService";
import { TailSpin } from "react-loader-spinner";

function Table() {
	const [listData, setListData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [meta, setMeta] = useState([]);

	const fetchListData = async (params = {}) => {
		setLoading(true);
		try {
			const response = await postService.getAll(params);

			setListData(response.data.data);

			setMeta(response.data.meta);
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchListData();
	}, []);

	const handleSearch = () => {
		fetchListData({
			search: searchInput,
		});
	};

	const handlePageChange = (page) => {
		fetchListData({
			search: searchInput,
			page,
		});
	};

	return (
		<>
			<TitleHeader
				title={"Thêm mới"}
				buttonIcon={<IoMdAddCircle />}
				titleButton={"Thêm mới"}
				to={adminPath.create("posts")}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2 flex-wrap">
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
					<>
						<TableList
							columns={TABLE_COLUMNS.posts}
							tableBody={listData}
							model={"posts"}
							onDeleteSuccess={fetchListData}
							service={postService}
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

export default Table;
