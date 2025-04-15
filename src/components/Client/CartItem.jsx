import Button from "./Button";

function CartItem() {
	return (
		<div className="flex items-center gap-4 py-2 text-black hover:text-darkBlue cursor-pointer">
			<div className="w-[75px]">
				<img
					src="https://bizweb.dktcdn.net/thumb/compact/100/491/197/products/00031920-top-grow-jpanwell-10-ch-3f81b1a4-df3b-41f3-869d-c64cb90506fa.png"
					alt=""
					className="w-full object-cover"
				/>
			</div>
			<div className="flex items-start flex-col">
				<h3 className=" text-[13px] font-bold mb-1">
					Demo sản phẩm có thuộc tính
				</h3>
				<span className="text-darkBlue text-[12px]">Nhỏ</span>
				<span className="text-redColor font-bold text-[13px] cursor-pointer">
					Xóa
				</span>

				<div className="flex flex-col w-full ">
					<div className="flex items-center justify-between">
						<span className="text-[12px] text-[#333] font-light mt-2">
							Số lượng
						</span>
						<span className="text-sm text-darkBlue font-bold">
							890.000đ
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between w-[85px] h-[30px] p-[2px] gap-1 rounded-md border border-darkBlue">
					<Button
						buttonSize="w-[25px] h-[25px]"
						color="text-white"
						hoverEffect="hover:bg-primary"
						fontSize="text-[20px]"
						background="bg-darkBlue"
					>
						-
					</Button>
					<span className="text-primary text-[12px] font-medium">
						3
					</span>
					<Button
						buttonSize="w-[25px] h-[25px]"
						color="text-white"
						fontSize="text-[20px]"
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
					>
						+
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
