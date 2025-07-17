import { useState, useEffect } from "react";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import Select from "react-select";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import productService from "../../../services/ProductService";
import promotionService from "../../../services/PromotionService";
import categoryService from "../../../services/CategoryService";

function Form({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [initialized, setInitialized] = useState(false);
	const [products, setProducts] = useState([]);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [promotions, setPromotions] = useState([]);
	const [selectedPromotion, setSelectedPromotion] = useState(null);

	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const fetchData = async (currentPage = 1) => {
		try {
			setLoading(true);
			const resProduct = await productService.getAll({
				page: currentPage,
				perPage: 10,
			});
			const resPromotion =
				await promotionService.getAllPromoNoPagination();

			const allPromotions = resPromotion.data.data;
			setPromotions(
				allPromotions.map((p) => ({
					value: p.id,
					label: p.title,
				}))
			);

			const newProducts = resProduct.data.data;
			setProducts((prev) => [
				...prev,
				...newProducts.map((p) => ({
					value: p.id,
					label: p.title,
				})),
			]);

			if (
				!resProduct.data.meta ||
				currentPage >= resProduct.data.meta.last_page
			) {
				setHasMore(false);
			}
		} catch (e) {
			console.error("Error loading data:", e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(page);
	}, [page]);

	useEffect(() => {
		// if (initialData && !initialized) {
		// 	setName(initialData.name || "");
		// 	setSrc(initialData.src || "");
		// 	if (initialData.image && typeof initialData.image === "string") {
		// 		setImage([{ data_url: initialData.image }]);
		// 	}
		// 	setApproved(Boolean(initialData.approved));
		// 	setInitialized(true);
		// }
	}, [initialData, initialized]);

	const handleSubmit = async () => {
		const formData = new FormData();
		if (mode === "edit") {
			formData.append("id", initialData.id);
		}
		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list("videos")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 ">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Chọn khuyến mãi</td>
							<td className="col-span-9 p-2">
								<Select
									options={promotions}
									value={selectedPromotion}
									onChange={setSelectedPromotion}
									className="w-full"
									placeholder="Chọn khuyến mãi"
								/>
								<span className="text-redColor">
									{errors.promotion}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Sản phẩm áp dụng</td>
							<td className="col-span-9 p-2">
								<Select
									isMulti
									options={products}
									value={selectedProducts}
									onChange={setSelectedProducts}
									className="w-full"
									placeholder="Chọn sản phẩm"
								/>
								{hasMore && (
									<div className="mt-2">
										<Button
											background="bg-primary"
											hoverEffect="hover:bg-darkBlue"
											onClick={() =>
												setPage((prev) => prev + 1)
											}
											disabled={loading}
										>
											{loading
												? "Đang tải..."
												: "Tải thêm sản phẩm"}
										</Button>
									</div>
								)}
								<span className="text-redColor">
									{errors.products}
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex items-center justify-end gap-2 mt-4">
					<Button
						background="bg-gray"
						color="text-white"
						hoverEffect="hover:bg-gray/90"
						to={adminPath.list(model)}
					>
						Đóng
					</Button>
					<Button
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
						onClick={handleSubmit}
					>
						{mode === "edit" ? "Cập nhật" : "Lưu"}
					</Button>
				</div>
			</div>
		</>
	);
}

export default Form;
