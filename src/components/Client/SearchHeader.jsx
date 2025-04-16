import Tippy from "@tippyjs/react/headless";
import Typewriter from "typewriter-effect";

import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Button, SearchHeaderPost, SearchHeaderProduct } from "../Client";

function SearchHeader() {
	const [inputValue, setInputValue] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const [tippyWidth, setTippyWidth] = useState(0);
	const [isShowProduct, setShowProduct] = useState(true);
	const [isShowPost, setShowPost] = useState(false);
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

	return (
		<Tippy
			interactive
			visible={!!inputValue && isFocus}
			placement="bottom-start"
			onClickOutside={() => setIsFocus(false)}
			render={(attrs) => (
				<div
					className="bg-white text-black rounded-md p-[10px] shadow-md"
					tabIndex={-1}
					{...attrs}
					style={{ width: tippyWidth }}
				>
					<div className="flex items-center gap-1 ">
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
						<span className="text-success font-bold text-sm pt-4 inline-block">
							Có 2 sản phẩm
						</span>
						<div className="flex flex-col items-start mt-4 divide-y divide-gray-200 border-b-1 border-gray-200 mb-4">
							{isShowProduct && (
								<>
									<SearchHeaderProduct />
									<SearchHeaderProduct />
									<SearchHeaderProduct />
								</>
							)}

							{isShowPost && (
								<>
									<SearchHeaderPost />
									<SearchHeaderPost />
									<SearchHeaderPost />
								</>
							)}
						</div>
						<Button
							border="border-2 border-primary"
							background="bg-white"
							color="text-darkBlue"
							hoverEffect="hover:bg-primary hover:text-white"
							fontWeight="font-medium"
						>
							Xem tất cả
						</Button>
					</div>
					{/* <div className="text-center text-sm font-light py-2">
						Không thấy có kết quả tìm kiếm
					</div> */}
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
								loop: true, // Loop the animation
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
