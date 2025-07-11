import Select from "react-select";
import { useEffect, useState } from "react";

import { Button } from "../../../components/Client";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TableList, TitleHeader } from "../../../components/Admin";
import { adminPath, TABLE_COLUMNS } from "../../../utils/constants";
import { Pagination } from "../../../components";
import productService from "../../../services/ProductService";
import brandService from "../../../services/BrandService";
import categoryService from "../../../services/CategoryService";
import handleExcelUpload from "../../../utils/handleExcelUpload";
import Modal from "react-responsive-modal";
import { IoMdClose } from "react-icons/io";
import { FaFileExcel } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { TailSpin } from "react-loader-spinner";

function ShowTableProduct() {
	const [listCategories, setListCategories] = useState([]);
	const [listBrands, setListBrands] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [meta, setMeta] = useState([]);
	const [selectedBrand, setSelectedBrand] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const [modalExcelIsOpen, setModalExcelOpen] = useState(false);

	const fetchProducts = async (params = {}) => {
		setLoading(true);
		try {
			const response = await productService.getAll(params);
			setProducts(response.data.data);

			//This code for Pagination dont edit this
			setMeta(response.data.meta);
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const fetchListBrandsAndListCategories = async () => {
			try {
				const listBrands =
					await brandService.getSelectBrandsNotDeleted();
				setListBrands(listBrands.data);

				const listCategories =
					await categoryService.getListChildNotDeleted();
				setListCategories(listCategories.data);
			} catch (error) {
				console.error("Errors loading brands/categories: ", error);
			}
		};

		fetchListBrandsAndListCategories();
	}, []);

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleSearch = () => {
		fetchProducts({
			search: searchInput,
			brandId: selectedBrand?.value || null,
			categoryId: selectedCategory?.value || null,
		});
	};

	const handlePageChange = (page) => {
		fetchProducts({
			search: searchInput,
			page,
		});
	};

	const handleBrandSelect = (option) => {
		setSelectedBrand(option);
		fetchProducts({
			search: searchInput,
			brandId: option?.value || null,
			categoryId: selectedCategory?.value || null,
		});
	};

	const handleCategorySelect = (option) => {
		setSelectedCategory(option);
		fetchProducts({
			search: searchInput,
			brandId: selectedBrand?.value || null,
			categoryId: option?.value || null,
		});
	};

	return (
		<>
			<TitleHeader
				title={"Thêm mới"}
				buttonIcon={<IoMdAddCircle />}
				titleButton={"Thêm mới"}
				to={adminPath.create("products")}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2 flex-wrap">
				<Button
					background="bg-success"
					hoverEffect="hover:bg-darkSuccess"
					onClick={() => setModalExcelOpen(true)}
				>
					Tải file excel
				</Button>

				<Select
					className=" text-sm"
					placeholder="Chọn loại danh mục"
					value={selectedCategory}
					onChange={handleCategorySelect}
					options={listCategories}
					isSearchable
					isClearable
				/>
				<Select
					className=" text-sm"
					placeholder="Chọn hãng"
					value={selectedBrand}
					onChange={handleBrandSelect}
					options={listBrands}
					isClearable
					isSearchable
				/>

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
							columns={TABLE_COLUMNS.products}
							tableBody={products}
							model={"products"}
							onDeleteSuccess={fetchProducts}
							service={productService}
						/>
						<Pagination
							meta={meta}
							onPageChange={handlePageChange}
						/>
					</>
				)}
			</div>
			;
			<Modal
				open={modalExcelIsOpen}
				onClose={() => setModalExcelOpen(false)}
				showCloseIcon={false}
				center
			>
				<div className="relative bg-white p-6 rounded-lg w-[400px] shadow-md">
					{/* Close button */}
					<button
						className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
						onClick={() => setModalExcelOpen(false)}
					>
						<IoMdClose />
					</button>

					{/* Title */}
					<h2 className="text-xl font-semibold mb-2 text-center">
						Upload sản phẩm bằng Excel
					</h2>

					<p className="text-sm text-gray-600 text-center mb-4">
						Hệ thống hỗ trợ nhập dữ liệu sản phẩm từ file Excel
						(.xlsx, .xls).
					</p>

					{/* File input */}
					<div className="flex flex-col items-center gap-3">
						<label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 flex items-center gap-2">
							<FaFileExcel />
							Chọn file Excel
							<input
								type="file"
								accept=".xlsx, .xls"
								hidden
								onChange={(e) => {
									handleExcelUpload(
										e,
										"products",
										fetchProducts
									);
									setModalExcelOpen(false); // auto close on upload
								}}
							/>
						</label>

						{/* Download template button (optional) */}
						<button
							className="flex items-center gap-2 text-sm text-green-600 hover:underline cursor-pointer"
							onClick={() => {
								// Hàm tải file mẫu (Excel template)
								window.open(
									"/templates/products_vi_sample.xlsx",
									"_blank"
								);
							}}
						>
							<LuDownload />
							Tải file mẫu Excel
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default ShowTableProduct;
