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
import { TailSpin } from "react-loader-spinner";

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
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedPromotion, setSelectedPromotion] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (
			initialData &&
			!initialized &&
			promotions.length > 0 &&
			products.length > 0 &&
			categories.length > 0
		) {
			const matchedPromotion = promotions.find(
				(opt) => opt.value === initialData.id
			);
			setSelectedPromotion(matchedPromotion || null);

			const matchedProducts = initialData.products
				.map((prod) => products.find((p) => p.value === prod.id))
				.filter(Boolean);
			setSelectedProducts(matchedProducts);

			const flatCategories = categories.flatMap((group) => group.options);
			const matchedCategories = initialData.categories
				.map((cat) => flatCategories.find((c) => c.value === cat.id))
				.filter(Boolean);
			setSelectedCategory(matchedCategories);

			setInitialized(true);
		}
	}, [initialData, promotions, products, categories, initialized]);

	const fetchData = async () => {
		try {
			setLoading(true);
			const resProduct =
				await productService.getAllProductsNoPagination();
			const resPromotion = await promotionService.getPromotionAvailable();
			const resCategory = await categoryService.getCategoryAvailable();

			const allPromotions = resPromotion.data.data;
			setPromotions(
				allPromotions.map((p) => ({
					value: p.id,
					label: p.title,
				}))
			);
			setCategories(
				resCategory.data.map((parent) => ({
					label: parent.name,
					options: (parent.children || []).map((child) => ({
						value: child.id,
						label: child.name,
					})),
				}))
			);

			const newProducts = resProduct.data.data;
			setProducts(
				newProducts.map((p) => ({
					value: p.id,
					label: p.title,
				}))
			);
		} catch (e) {
			console.error("Error loading data:", e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleSubmit = async () => {
		const formData = new FormData();
		if (mode === "edit") {
			formData.append("id", initialData.id);
		}
		formData.append("promotion_id", selectedPromotion.value);
		selectedProducts.forEach((p) => {
			formData.append(`product_ids[]`, p.value);
		});
		selectedCategory.forEach((c) => {
			formData.append(`category_ids[]`, c.value);
		});

		console.log("formdata: ", formData);

		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list("promotions-products")}
				title={mode === "edit" ? "Chỉnh sửa" : "Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3">
				{loading ? (
					<div className="flex justify-center items-center py-10">
						<TailSpin height="48" width="48" color="#2563eb" />
					</div>
				) : (
					<table className="table-auto w-full">
						<tbody>
							<tr className="grid grid-cols-12 gap-2">
								<td className="col-span-3 p-2">
									Chọn khuyến mãi
								</td>
								<td className="col-span-9 p-2">
									<Select
										options={promotions}
										value={selectedPromotion}
										onChange={setSelectedPromotion}
										className="w-full"
										placeholder="Chọn khuyến mãi"
										noOptionsMessage={() =>
											"Không có khuyến mãi nào hiện tại"
										}
									/>
									<span className="text-redColor">
										{errors.promotion}
									</span>
								</td>
							</tr>

							<tr className="grid grid-cols-12 gap-2">
								<td className="col-span-3 p-2">
									Sản phẩm áp dụng
								</td>
								<td className="col-span-9 p-2">
									<Select
										isMulti
										options={products}
										value={selectedProducts}
										onChange={setSelectedProducts}
										className="w-full"
										placeholder="Chọn sản phẩm"
									/>
									<span className="text-redColor">
										{errors.products}
									</span>
								</td>
							</tr>

							<tr className="grid grid-cols-12 gap-2">
								<td className="col-span-3 p-2">
									Danh mục áp dụng
								</td>
								<td className="col-span-9 p-2">
									<Select
										isMulti
										options={categories}
										value={selectedCategory}
										onChange={setSelectedCategory}
										className="w-full"
										placeholder="Chọn danh mục sản phẩm"
										noOptionsMessage={() =>
											"Không có danh mục nào hiện tại"
										}
									/>
									<span className="text-redColor">
										{errors.products}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				)}

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
						disabled={loading}
					>
						{mode === "edit" ? "Cập nhật" : "Lưu"}
					</Button>
				</div>
			</div>
		</>
	);
}

export default Form;
