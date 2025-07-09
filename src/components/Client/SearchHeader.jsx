import Tippy from "@tippyjs/react/headless";
import Typewriter from "typewriter-effect";
import { TailSpin } from "react-loader-spinner";
import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Button, SearchHeaderPost, SearchHeaderProduct } from "../Client";
import productService from "../../services/ProductService";
import postService from "../../services/PostService";
import { path } from "../../utils/constants";

function SearchHeader() {
	const [inputValue, setInputValue] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const [tippyWidth, setTippyWidth] = useState(0);
	const [isShowProduct, setShowProduct] = useState(true);
	const [isShowPost, setShowPost] = useState(false);
	const [listProductSearch, setListProductSearch] = useState([]);
	const [listPostSearch, setListPostSearch] = useState([]);
	const [debouncedInput, setDebouncedInput] = useState(inputValue);
	const [productsCount, setProductsCount] = useState(0);
	const [postsCount, setPostsCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const inputRef = useRef(null);
	const widthInput = useRef(null);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		setIsFocus(true);
	};

	const updateWidth = () => {
		if (widthInput.current) {
			setTippyWidth(widthInput.current.offsetWidth);
		}
	};

	const handleShowPost = () => {
		setShowPost(true);
		setShowProduct(false);
	};

	const handleShowProduct = () => {
		setShowProduct(true);
		setShowPost(false);
	};

	useEffect(() => {
		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedInput(inputValue);
		}, 500);

		return () => clearTimeout(handler);
	}, [inputValue]);

	useEffect(() => {
		const fetchListProductAndPost = async () => {
			if (!debouncedInput.trim()) {
				setListProductSearch([]);
				setListPostSearch([]);
				return;
			}

			setIsLoading(true);

			try {
				const productResponse = await productService.search(
					debouncedInput
				);
				const postResponse = await postService.search(debouncedInput);

				setListProductSearch(productResponse?.data?.listProducts || []);
				setListPostSearch(postResponse?.data?.listPosts || []);
				setProductsCount(productResponse?.data?.productsCount);
				setPostsCount(postResponse?.data?.postsCount);
			} catch (error) {
				console.error("Search error:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchListProductAndPost();
	}, [debouncedInput]);

	const handleShowProductSearch = () => {
		setInputValue("");
		setListProductSearch([]);
		setProductsCount(null);
		setListPostSearch([]);
		setPostsCount("");
		setShowProduct(true);
		setShowPost(false);
	};

	return (
		<Tippy
			interactive
			visible={!!inputValue && isFocus}
			placement="bottom-start"
			onClickOutside={() => setIsFocus(false)}
			render={(attrs) => (
				<div
					className="bg-white text-black rounded-md p-[10px] shadow-2xl"
					tabIndex={-1}
					{...attrs}
					style={{ width: tippyWidth }}
				>
					<div className="flex items-center gap-1">
						<Button
							hoverEffect="hover:bg-primary"
							background={`${
								isShowProduct ? "bg-primary" : "bg-darkBlue"
							}`}
							onClick={handleShowProduct}
						>
							Sản phẩm
						</Button>
						<Button
							hoverEffect="hover:bg-primary"
							background={`${
								isShowPost ? "bg-primary" : "bg-darkBlue"
							}`}
							onClick={handleShowPost}
						>
							Tin tức
						</Button>
					</div>

					<div className="">
						{isShowProduct ? (
							<>
								{!!productsCount && (
									<span className="text-success font-bold text-sm pt-4 inline-block">
										Có {productsCount} sản phẩm
									</span>
								)}
								<div className="flex flex-col items-start mt-4 divide-y divide-gray-200 border-b border-gray-200 mb-4">
									{isLoading ? (
										<div className="w-full flex justify-center py-4">
											<TailSpin
												height={30}
												width={30}
												color="#0f172a"
											/>
										</div>
									) : listProductSearch.length === 0 ? (
										<div className="text-center w-full text-gray-500 text-sm py-4">
											Không có kết quả tìm kiếm
										</div>
									) : (
										listProductSearch.map((product) => (
											<SearchHeaderProduct
												key={product.id}
												handleOnClick={
													handleShowProductSearch
												}
												product={product}
											/>
										))
									)}
								</div>
								{!!productsCount && (
									<Button
										to={
											"/" +
											path.DANH_SACH_ITEM_TIM_KIEM +
											`?q=${inputValue}`
										}
										border="border-2 border-primary"
										background="bg-white"
										color="text-darkBlue"
										hoverEffect="hover:bg-primary hover:text-white"
										fontWeight="font-medium"
									>
										Xem tất cả
									</Button>
								)}
							</>
						) : (
							<>
								{!!postsCount && (
									<span className="text-success font-bold text-sm pt-4 inline-block">
										Có {postsCount} bài viết
									</span>
								)}
								<div className="flex flex-col items-start mt-4 divide-y divide-gray-200 border-b border-gray-200 mb-4">
									{isLoading ? (
										<div className="w-full flex justify-center py-4">
											<TailSpin
												height={30}
												width={30}
												color="#0f172a"
											/>
										</div>
									) : listPostSearch.length === 0 ? (
										<div className="text-center w-full text-gray-500 text-sm py-4">
											Không có kết quả tìm kiếm
										</div>
									) : (
										listPostSearch.map((post) => (
											<SearchHeaderPost
												key={post.id}
												handleOnClick={
													handleShowProductSearch
												}
												post={post}
											/>
										))
									)}
								</div>
								{!!postsCount && (
									<Button
										to={path.DANH_SACH_ITEM_TIM_KIEM}
										border="border-2 border-primary"
										background="bg-white"
										color="text-darkBlue"
										hoverEffect="hover:bg-primary hover:text-white"
										fontWeight="font-medium"
									>
										Xem tất cả
									</Button>
								)}
							</>
						)}
					</div>
				</div>
			)}
		>
			<div
				ref={widthInput}
				className="flex flex-1 items-center justify-between bg-white rounded-xl overflow-hidden h-[50px] relative "
			>
				<input
					ref={inputRef}
					className="w-[90%] bg-white outline-none px-[10px] text-black text-sm font-medium h-full"
					value={inputValue}
					onChange={handleInputChange}
					onFocus={() => setIsFocus(true)}
					placeholder=""
				/>
				<div className="absolute left-[10px] w-full text-black font-light text-sm pointer-events-none">
					{inputValue === "" && (
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString("Tìm kiếm sản phẩm...")
									.pauseFor(1000)
									.deleteAll()
									.start();
							}}
							options={{
								delay: 100,
								loop: true,
							}}
						/>
					)}
				</div>
				<IoSearch
					className="p-2 w-10 h-10 mr-2 cursor-pointer font-bold"
					color="darkBlue"
				/>
			</div>
		</Tippy>
	);
}

export default SearchHeader;
