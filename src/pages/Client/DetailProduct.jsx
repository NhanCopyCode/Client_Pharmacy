import { CiShoppingCart } from "react-icons/ci";
import {
	Button,
	Container,
	ProductDetailImage,
	ProductSwiper,
	SidebarProductContainer,
	SidebarProductItem,
} from "../../components/Client";
import { FaRegHeart } from "react-icons/fa6";
import GiftBox from "../../assets/images/giftbox.png";
import check from "../../assets/images/check.png";
import smallGift from "../../assets/images/small_gift.png";
import camket1 from "../../assets/images/camket_1.png";
import productSupport from "../../assets/images/evo_product_support.jpg";
import chinhsach_1 from "../../assets/images/chinhsach_1.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
const images = [
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h.png?v=1689759984450",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-5.png?v=1689759985303",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-4.png?v=1689759986333",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-4.png?v=1689759986333",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-4.png?v=1689759986333",
];
function DetailProduct() {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	return (
		<Container>
			<div className="grid grid-cols-12 gap-8">
				<div className="col-span-4">
					<ProductDetailImage images={images} />
				</div>
				<div className="col-span-5">
					<h3 className="text-[24px] font-bold">
						Nhụy hoa nghệ tây Sasagold Saffron hỗ trợ làm đẹp và phù
						hợp cho người bệnh (1g)
					</h3>
					<div className="grid grid-cols-12 text-[16px] mt-4 font-bold gap-1">
						<div className="col-span-6">
							<p>
								Thương hiệu:{" "}
								<span className="text-darkBlue">Vesta</span>
							</p>
						</div>
						<div className="col-span-6">
							<p>
								Thương hiệu:{" "}
								<span className="text-darkBlue">Vesta</span>
							</p>
						</div>
						<div className="col-span-6">
							<p>
								Thương hiệu:{" "}
								<span className="text-darkBlue">Vesta</span>
							</p>
						</div>
						<div className="col-span-6">
							<p>
								Thương hiệu:{" "}
								<span className="text-darkBlue">Vesta</span>
							</p>
						</div>
					</div>

					<div className="p-[10px] bg-[#d9e6ff] mt-2 rounded-md text-[30px] text-primary font-bold">
						438.000₫
					</div>
					<div className="flex flex-col gap-2 mt-4">
						<span className="text-sm text-black font-bold">
							Số lượng:
						</span>
						<div className="inline-flex w-fit items-center justify-between  p-[2px] gap-1 rounded-md border border-darkBlue">
							<Button
								buttonSize="w-[35px] h-[35px]"
								color="text-white"
								hoverEffect="hover:bg-primary"
								fontSize="text-[20px]"
								background="bg-darkBlue"
							>
								-
							</Button>
							<input
								className="text-primary font-medium mx-4 border-0 outline-0 inline-block w-[60px] h-[35px] text-center text-[15px]"
								value={3}
							/>

							<Button
								buttonSize="w-[35px] h-[35px]"
								color="text-white"
								fontSize="text-[20px]"
								background="bg-darkBlue"
								hoverEffect="hover:bg-primary"
							>
								+
							</Button>
						</div>
					</div>
					<div className="flex items-center gap-3 mt-2 overflow-hidden">
						<div className="hover:bg-success cursor-pointer hover:border-success group border-2 border-primary rounded-md bg-primary h-[50px] text-white w-[88%] flex items-center">
							<div dir="ltr" className=" h-[100%]">
								<div className="bg-white h-[100%] rounded-s-md w-[60px] flex items-center justify-center">
									<CiShoppingCart
										color="darkBlue"
										className="w-[30px] h-[30px]"
									/>
								</div>
							</div>
							<div className="flex flex-col items-center bg-primary flex-1 group-hover:bg-success">
								<span className="text-sm font-bold">
									Thêm vào giỏ hàng
								</span>
								<span className="text-[12px]">
									Giao hàng tận nơi miễn phí
								</span>
							</div>
						</div>
						<div className="flex-1 h-[50px] rounded-md bg-primary hover:bg-success cursor-pointer flex items-center justify-center">
							<FaRegHeart
								className="w-[25px] h-[25px]"
								color="white"
							/>
						</div>
					</div>

					<div className="inline-flex px-[15px] py-[7px] rounded-tl-md rounded-tr-md items-center gap-3 mt-4 bg-darkBlue">
						<img
							src={GiftBox}
							className="w-[30px] h-[30px] object-cover"
						/>
						<span className="text-sm text-white font-bold">
							Khuyến mãi đặc biệt !!!
						</span>
					</div>
					<div className="border border-darkBlue rounded-tr-md  rounded-br-md rounded-bl-md flex flex-col gap-3 pt-[25px] pb-[5px] px-[15px]">
						<div className="flex items-center gap-3">
							<img src={check} className="w-5 h-5 object-cover" />
							<span className="text-sm text-black">
								Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành
								hàng
							</span>
						</div>
						<div className="flex items-center gap-3">
							<img src={check} className="w-5 h-5 object-cover" />
							<span className="text-sm text-black">
								Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành
								hàng
							</span>
						</div>
						<div className="flex items-center gap-3">
							<img
								src={smallGift}
								className="w-5 h-5 object-cover"
							/>
							<span className="text-sm text-black">
								Tặng 100.000₫ mua hàng tại website thành viên
								Dola Watch, áp dụng khi mua Online tại Hồ Chí
								Minh và 1 số khu vực khác.
							</span>
						</div>
					</div>

					<h3 className="text-[16px] font-bold text-black mt-4">
						Cam kết của chúng tôi
					</h3>
					<div className="grid grid-cols-12 gap-1 mt-2">
						<div className="col-span-6 flex items-center gap-3">
							<img
								src={camket1}
								className="w-[26px] h-[26px] object-cover"
							/>
							<span className="text-sm text-black font-medium">
								Cam kết 100% chính hãng
							</span>
						</div>
						<div className="col-span-6 flex items-center gap-3">
							<img
								src={camket1}
								className="w-[26px] h-[26px] object-cover"
							/>
							<span className="text-sm text-black font-medium">
								Cam kết 100% chính hãng
							</span>
						</div>
						<div className="col-span-6 flex items-center gap-3">
							<img
								src={camket1}
								className="w-[26px] h-[26px] object-cover"
							/>
							<span className="text-sm text-black font-medium">
								Cam kết 100% chính hãng
							</span>
						</div>
						<div className="col-span-6 flex items-center gap-3">
							<img
								src={camket1}
								className="w-[26px] h-[26px] object-cover"
							/>
							<span className="text-sm text-black font-medium">
								Cam kết 100% chính hãng
							</span>
						</div>
						<div className="col-span-6 flex items-center gap-3">
							<img
								src={camket1}
								className="w-[26px] h-[26px] object-cover"
							/>
							<span className="text-sm text-black font-medium">
								Cam kết 100% chính hãng
							</span>
						</div>
						<div className="col-span-6 flex items-center gap-3">
							<img
								src={camket1}
								className="w-[26px] h-[26px] object-cover"
							/>
							<span className="text-sm text-black font-medium">
								Cam kết 100% chính hãng
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-3">
					<div className="p-[10px] shadow-md rounded-md border border-gray-100">
						<h3 className="text-sm text-black uppercase font-bold text-center">
							CHÚNG TÔI LUÔN SẴN SÀNG <br /> ĐỂ GIÚP ĐỠ BẠN
						</h3>
						<div className="flex items-center justify-center flex-col gap-3">
							<img
								src={productSupport}
								className="w-[150px] h-[150px] object-cover"
							/>
							<p className="text-sm text-black ">
								Để được hỗ trợ tốt nhất. Hãy gọi
							</p>
							<h2 className="text-[30px] font-bold text-darkBlue">
								1900 6750
							</h2>
							<div className="after:content-[''] after:block w-full h-[1px] bg-gray/15 relative">
								<span className="text-[13px] text-gray px-[10px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0">
									Hoặc
								</span>
							</div>
							<span className="text-sm text-black font-bold">
								Chat hoặc hỗ trợ trực tuyến
							</span>
							<Button
								subClass="mt-4"
								fontSize="text-[16px]"
								color="text-white"
								fontWeight="font-bold"
								background="bg-darkBlue"
								buttonWidth="w-full"
								padding="py-[10px]"
								hoverEffect="hover:bg-primary"
							>
								Chat với chúng tôi
							</Button>
						</div>
					</div>

					<div className="flex flex-col gap-3 mt-4">
						<div className="rounded-md shadow-md border border-gray-100 p-[10px] flex items-center gap-2">
							<img
								src={chinhsach_1}
								className="w-10 h-10 object-cover"
							/>
							<div className="flex flex-col">
								<span className="text-[16px] text-darkBlue font-bold">
									Miễn phí vẫn chuyển
								</span>
								<span className="text-sm text-black font-medium">
									Đối với sản phẩm lỗi sản xuất hoặc vận
									chuyển
								</span>
							</div>
						</div>
						<div className="rounded-md shadow-md border border-gray-100 p-[10px] flex items-center gap-2">
							<img
								src={chinhsach_1}
								className="w-10 h-10 object-cover"
							/>
							<div className="flex flex-col">
								<span className="text-[16px] text-darkBlue font-bold">
									Miễn phí vẫn chuyển
								</span>
								<span className="text-sm text-black font-medium">
									Đối với sản phẩm lỗi sản xuất hoặc vận
									chuyển
								</span>
							</div>
						</div>
						<div className="rounded-md shadow-md border border-gray-100 p-[10px] flex items-center gap-2">
							<img
								src={chinhsach_1}
								className="w-10 h-10 object-cover"
							/>
							<div className="flex flex-col">
								<span className="text-[16px] text-darkBlue font-bold">
									Miễn phí vẫn chuyển
								</span>
								<span className="text-sm text-black font-medium">
									Đối với sản phẩm lỗi sản xuất hoặc vận
									chuyển
								</span>
							</div>
						</div>
						<div className="rounded-md shadow-md border border-gray-100 p-[10px] flex items-center gap-2">
							<img
								src={chinhsach_1}
								className="w-10 h-10 object-cover"
							/>
							<div className="flex flex-col">
								<span className="text-[16px] text-darkBlue font-bold">
									Miễn phí vẫn chuyển
								</span>
								<span className="text-sm text-black font-medium">
									Đối với sản phẩm lỗi sản xuất hoặc vận
									chuyển
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 mt-12">
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-9 mt-4">
							<div className="flex items-center gap-3">
								<Button
									fontSize="text-[16px]"
									color="text-darkBlue"
									fontWeight="font-bold"
									border="border border-darkBlue"
									rounded="rounded-md"
									background="bg-white"
									padding="px-[15px] py-[10px]"
									hoverEffect="hover:bg-darkBlue hover:text-white"
								>
									Mô tả sản phẩm
								</Button>
								<Button
									fontSize="text-[16px]"
									color="text-darkBlue"
									fontWeight="font-bold"
									border="border border-darkBlue"
									rounded="rounded-md"
									background="bg-white"
									hoverEffect="hover:bg-darkBlue hover:text-white"
									padding="px-[15px] py-[10px]"
								>
									Hướng dẫn mua hàng
								</Button>
							</div>

							<div className="border border-darkBlue p-[10px] rounded-md max-h-[1260px] mt-4 relative">
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<h3>adsfsdfa</h3>
								<div className="flex items-center justify-center bg-white/95 w-[98%] py-8 absolute bottom-0">
									<Button
										border="border border-darkBlue"
										background="bg-white"
										color="text-darkBlue"
										fontSize="text-[16px]"
										padding="py-[5px] px-[15px]"
										hoverEffect="hover:bg-primary hover:border-primary hover:text-white"
									>
										Xem thêm
									</Button>
								</div>
							</div>
						</div>

						<div className="col-span-3 flex flex-col gap-12">
							<SidebarProductContainer />
							<SidebarProductContainer />
						</div>
					</div>
				</div>

				{/* <div className="col-span-12 mt-8">
					<ProductSwiper />
					<ProductSwiper />
				</div> */}
			</div>
		</Container>
	);
}

export default DetailProduct;
