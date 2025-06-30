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

function ShowTableProduct() {
	const [listCategories, setListCategories] = useState([]);
	const [listBrands, setListBrands] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [meta, setMeta] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);


	const [selectedBrand, setSelectedBrand] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

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
		}

		fetchListBrandsAndListCategories();
		
	}, [])

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
			parentId: selectedOption?.value || null,
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

	const handleParentSelect = (option) => {
		setSelectedOption(option);
		fetchProducts({
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
				to={adminPath.create("products")}
			/>
			<div className="flex items-center justify-end w-full p-3 gap-2">
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

			<div className="p-3">
				{loading ? (
					<p>Loading...</p>
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
		</>
	);
}

export default ShowTableProduct;
