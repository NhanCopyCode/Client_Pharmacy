import { useEffect, useState } from "react";

import { Button } from "../../../components/Client";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TableList, TitleHeader } from "../../../components/Admin";
import { adminPath, TABLE_COLUMNS } from "../../../utils/constants";
import { Pagination } from "../../../components";
import promotionService from "../../../services/PromotionService";


function ShowTablePromotion() {
	const [promotions, setPromotions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [meta, setMeta] = useState([]);

	const fetchPromotion = async (params = {}) => {
		setLoading(true);
		try {
			const response = await promotionService.getAll(params);
			
			setPromotions(response.data.data);

			setMeta(response.data.meta);
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchPromotion();
	}, []);

	const handleSearch = () => {
		fetchPromotion({
			search: searchInput,
		});
	};

	const handlePageChange = (page) => {
		fetchPromotion({
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
				to={adminPath.create("promotions")}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2">
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

			<div className="p-3">
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<TableList
							columns={TABLE_COLUMNS.promotions}
							tableBody={promotions}
							model={"promotions"}
							onDeleteSuccess={fetchPromotion}
							service={promotionService}
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

export default ShowTablePromotion;
