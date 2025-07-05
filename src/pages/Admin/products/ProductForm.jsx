import { useState, useEffect } from "react";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button, ModalGenerateText } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import Select from "react-select";
import { readMoneyVND } from "../../../utils/moneyUtils";
import productService from "../../../services/ProductService";
import brandService from "../../../services/BrandService";
import categoryService from "../../../services/CategoryService";



function ProductForm({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [inventory, setInventory] = useState("");
	const [description, setDescription] = useState("");
	const [approved, setApproved] = useState(false);
	const [initialized, setInitialized] = useState(false);
	const [listBrands, setListBrands] = useState([]);
	const [listCategories, setListCategories] = useState([]);
	const [selectedBrandOption, setSelectedBrandOption] = useState(null);
	const [selectedCategoryOption, setSelectedCategoryOption] = useState(null);
	const [images, setImages] = useState([]);
	const [outstanding, setOutstanding] = useState(false);

	useEffect(() => {
		const fetchListParents = async () => {
			try {
				const listBrands =
					await brandService.getSelectBrandsNotDeleted();
				const listCategories = await categoryService.getListChild();
				setListBrands(listBrands.data);
				setListCategories(listCategories.data);
				if (mode === "create") {
					setSelectedBrandOption(null);
					setSelectedCategoryOption(null);
				}
			} catch (error) {
				console.log("error: ", error);
			}
		};

		fetchListParents();
	}, []);

	useEffect(() => {
		if (
			initialData &&
			listBrands.length > 0 &&
			listCategories.length > 0 &&
			!initialized
		) {
			setTitle(initialData.title || "");
			setPrice(initialData.price || "");
			setInventory(initialData.inventory || "");
			setDescription(initialData.description || "");

			const matchedBrandOption = listBrands.find(
				(opt) => opt.value === initialData.brandId
			);
			setSelectedBrandOption(matchedBrandOption);

			const matchedCategoryOption = listCategories.find(
				(opt) => opt.value === initialData.categoryId
			);
			setSelectedCategoryOption(matchedCategoryOption);
			setApproved(Boolean(initialData.approved));

			if (Array.isArray(initialData.images)) {
				const formattedImages = initialData.images.map((url) => ({
					data_url: url.image,
				}));
				setImages(formattedImages);
			}
			setOutstanding(Boolean(initialData.outstanding));

			setInitialized(true);
		}
	}, [initialData, initialized, listBrands, listCategories]);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("price", price);
		formData.append("inventory", inventory);
		formData.append("description", description);
		formData.append("brandId", selectedBrandOption?.value || 0);
		formData.append("categoryId", selectedCategoryOption?.value || 0);
		formData.append("approved", approved ? 1 : 0);
		formData.append("outstanding", outstanding ? 1 : 0);

		if (mode === "edit") {
			formData.append("id", initialData.id);
		}

		await onSubmit({ formData, images });
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list("products")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Tên sản phẩm
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<span className="text-redColor">
									{errors.title}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh sản phẩm
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploadBrand
									images={images}
									setImages={setImages}
									isUploadMultiple={true}
								/>

								<span className="text-redColor">
									{errors.image}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Giá sản phẩm
							</td>
							<td className="flex flex-col col-span-9">
								<div className=" p-[10px] w-full">
									<input
										type="number"
										className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
										value={price}
										onChange={(e) =>
											setPrice(e.target.value)
										}
									/>
								</div>
								{price && (
									<span className="text-success">
										{readMoneyVND(price)}
									</span>
								)}

								<span className="text-redColor">
									{errors.price}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Số hàng trong kho
							</td>
							<td className="flex flex-col col-span-9">
								<div className=" p-[10px] w-full">
									<input
										type="number"
										className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
										value={inventory}
										onChange={(e) =>
											setInventory(e.target.value)
										}
									/>
								</div>

								<span className="text-redColor">
									{errors.inventory}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="category">Chọn hãng</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<Select
									id="category"
									className=" text-sm"
									placeholder="Chọn hãng"
									value={selectedBrandOption}
									onChange={setSelectedBrandOption}
									options={listBrands}
									isSearchable={true}
									isClearable={true}
								/>
								<span className="text-redColor">
									{errors.brandId}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="category">Chọn danh mục</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<Select
									id="category"
									className=" text-sm"
									placeholder="Chọn danh mục"
									value={selectedCategoryOption}
									onChange={setSelectedCategoryOption}
									options={listCategories}
									isSearchable={true}
									isClearable={true}
								/>

								<span className="text-redColor">
									{errors.categoryId}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<span>Mô tả sản phẩm</span>
								<ModalGenerateText
									service={productService}
									name={title}
									description={description}
									price={price}
								/>
							</td>
							<td className="col-span-9 p-[10px]">
								<TiptapEditor
									placeholder="Nhập mô tả hãng"
									initialContent={description}
									onChange={setDescription}
								/>
								<span className="text-redColor">
									{errors.description}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label>Nổi bật</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="checkbox"
									checked={outstanding}
									onChange={(e) =>
										setOutstanding(e.target.checked)
									}
									className="w-5 h-5 accent-blue-600"
								/>
								<span className="text-redColor">
									{errors.outstanding}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Duyệt</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="checkbox"
									checked={approved}
									onChange={(e) =>
										setApproved(e.target.checked)
									}
									className="w-5 h-5 accent-blue-600"
								/>

								<span className="text-redColor">
									{errors.approved}
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

export default ProductForm;
