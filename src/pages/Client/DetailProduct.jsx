import { CiShoppingCart } from "react-icons/ci";
import {
	Button,
	Container,
	ProductDetailImage,
	SidebarProductContainer,
} from "../../components/Client";
import { toast } from "react-toastify";

import { FaRegHeart } from "react-icons/fa6";
import GiftBox from "../../assets/images/giftbox.png";
import check from "../../assets/images/check.png";
import smallGift from "../../assets/images/small_gift.png";
import camket1 from "../../assets/images/camket_1.png";
import productSupport from "../../assets/images/evo_product_support.jpg";
import chinhsach_1 from "../../assets/images/chinhsach_1.png";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import formatPriceVND from "../../utils/formatPriceVND";
import { useCart } from "../../context/CartContext";
import { ScrollToTopOnRouteChange } from "../../components/Client";
import publicProductService from "../../services/publicApi/PublicProductService";

function DetailProduct() {
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [expanded, setExpanded] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const contentRef = useRef(null);
	const [isShowDesc, setIsShowDesc] = useState(true);
	const [loading, setLoading] = useState(false);
	const { addToCart } = useCart();

	const { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await publicProductService.getById(id);
				console.log("res detail product: ", res);
				setProduct(res.data.data[0]);
			} catch (error) {
				console.log("error: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	useEffect(() => {
		if (!contentRef.current) return;

		const observer = new ResizeObserver(() => {
			const contentEl = contentRef.current;
			if (contentEl) {
				const hasOverflow =
					contentEl.scrollHeight > contentEl.clientHeight;
				setIsOverflowing(hasOverflow);
			}
		});

		observer.observe(contentRef.current);

		return () => {
			observer.disconnect();
		};
	}, [product?.description, isShowDesc]);

	const handleUpdateQuantity = (action) => {
		if (action === "up") {
			setQuantity(quantity + 1);
		}

		if (action === "down") {
			setQuantity(quantity - 1);
		}
	};

	const handleUpdateOrder = () => {
		const numericQuantity = Number(quantity);
		const price = product.price;
		const discount = product.discount || 0;
		const finalPrice = (price - discount) * numericQuantity;

		const item = {
			id: crypto.randomUUID(),
			orderId: null,
			productId: product.id,
			quantity: numericQuantity,
			price,
			discount,
			finalPrice,
		};

		addToCart(item);
		toast.success("🛒 Đã thêm vào giỏ hàng!", {
			position: "top-right",
		});
	};

	return (
		<Container>
			<ScrollToTopOnRouteChange />
			<div className="grid grid-cols-12 gap-8">
				{loading ? (
					<div className="col-span-9 flex justify-center items-center min-h-[300px]">
						<TailSpin
							height="50"
							width="50"
							color="#1D4ED8"
							ariaLabel="loading"
						/>
					</div>
				) : (
					<>
						<div className="col-span-4">
							<ProductDetailImage images={product?.images} />
						</div>
						<div className="col-span-5">
							<h3 className="text-[24px] font-bold">
								{product?.title}
							</h3>
							<div className="grid grid-cols-12 text-[16px] mt-4 font-bold gap-1">
								<div className="col-span-6">
									<p>
										Thương hiệu:{" "}
										<span className="text-darkBlue">
											{product?.brandName}
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p>
										Loại:{" "}
										<span className="text-darkBlue">
											{product?.categoryName}
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p>
										Tình trạng:{" "}
										<span className="text-darkBlue">{`Con hàng: ${product.inventory}`}</span>
									</p>
								</div>
								<div className="col-span-6">
									<p>
										Mã sản phẩm:{" "}
										<span className="text-darkBlue">
											{product?.id}
										</span>
									</p>
								</div>
							</div>

							<div className="p-[10px] bg-[#d9e6ff] mt-2 rounded-md text-[30px] text-primary font-bold">
								{formatPriceVND(product?.price)}
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
										onClick={() =>
											handleUpdateQuantity("down")
										}
									>
										-
									</Button>
									<input
										className="text-primary font-medium mx-4 border-0 outline-0 inline-block w-[60px] h-[35px] text-center text-[15px]"
										value={quantity}
										onChange={(e) =>
											setQuantity(e.target.value)
										}
									/>

									<Button
										buttonSize="w-[35px] h-[35px]"
										color="text-white"
										fontSize="text-[20px]"
										background="bg-darkBlue"
										hoverEffect="hover:bg-primary"
										onClick={() =>
											handleUpdateQuantity("up")
										}
									>
										+
									</Button>
								</div>
							</div>
							<div className="flex items-center gap-1 mt-2 overflow-hidden">
								<div className="hover:bg-success cursor-pointer hover:border-success group border-2 border-primary rounded-md bg-primary h-[50px] text-white w-[88%] flex items-center">
									<div dir="ltr" className=" h-[100%]">
										<div className="bg-white h-[100%] rounded-s-md w-[60px] flex items-center justify-center">
											<CiShoppingCart
												color="darkBlue"
												className="w-[30px] h-[30px]"
											/>
										</div>
									</div>
									<div
										className="flex flex-col items-center bg-primary flex-1 group-hover:bg-success"
										onClick={handleUpdateOrder}
									>
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
									<img
										src={check}
										className="w-5 h-5 object-cover"
									/>
									<span className="text-sm text-black">
										Áp dụng Phiếu quà tặng/ Mã giảm giá theo
										ngành hàng
									</span>
								</div>
								<div className="flex items-center gap-3">
									<img
										src={check}
										className="w-5 h-5 object-cover"
									/>
									<span className="text-sm text-black">
										Áp dụng Phiếu quà tặng/ Mã giảm giá theo
										ngành hàng
									</span>
								</div>
								<div className="flex items-center gap-3">
									<img
										src={smallGift}
										className="w-5 h-5 object-cover"
									/>
									<span className="text-sm text-black">
										Tặng 100.000₫ mua hàng tại website thành
										viên Dola Watch, áp dụng khi mua Online
										tại Hồ Chí Minh và 1 số khu vực khác.
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
										Hoàn tiền 111% nếu hàng giả
									</span>
								</div>
								<div className="col-span-6 flex items-center gap-3">
									<img
										src={camket1}
										className="w-[26px] h-[26px] object-cover"
									/>
									<span className="text-sm text-black font-medium">
										Giao tận tay khách hàng
									</span>
								</div>
								<div className="col-span-6 flex items-center gap-3">
									<img
										src={camket1}
										className="w-[26px] h-[26px] object-cover"
									/>
									<span className="text-sm text-black font-medium">
										Mở hộp kiểm tra nhận hàng
									</span>
								</div>
								<div className="col-span-6 flex items-center gap-3">
									<img
										src={camket1}
										className="w-[26px] h-[26px] object-cover"
									/>
									<span className="text-sm text-black font-medium">
										Hỗ trợ 24/7
									</span>
								</div>
								<div className="col-span-6 flex items-center gap-3">
									<img
										src={camket1}
										className="w-[26px] h-[26px] object-cover"
									/>
									<span className="text-sm text-black font-medium">
										Đổi trả trong 7 ngày
									</span>
								</div>
							</div>
						</div>
					</>
				)}

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
									color={
										isShowDesc
											? "text-white"
											: "text-darkBlue"
									}
									fontWeight="font-bold"
									border="border border-darkBlue"
									rounded="rounded-md"
									background={
										isShowDesc ? "bg-darkBlue" : "bg-white"
									}
									padding="px-[15px] py-[10px]"
									hoverEffect="hover:bg-darkBlue hover:text-white"
									onClick={() => setIsShowDesc(true)}
								>
									Mô tả sản phẩm
								</Button>
								<Button
									fontSize="text-[16px]"
									color={
										!isShowDesc
											? "text-white"
											: "text-darkBlue"
									}
									fontWeight="font-bold"
									border="border border-darkBlue"
									rounded="rounded-md"
									background={
										!isShowDesc ? "bg-darkBlue" : "bg-white"
									}
									hoverEffect="hover:bg-darkBlue hover:text-white"
									padding="px-[15px] py-[10px]"
									onClick={() => setIsShowDesc(false)}
								>
									Hướng dẫn mua hàng
								</Button>
							</div>

							<div
								className={`border border-darkBlue p-[10px] rounded-md mt-4 relative transition-all duration-300`}
							>
								{isShowDesc ? (
									<div
										ref={contentRef}
										dangerouslySetInnerHTML={{
											__html: product?.description,
										}}
										className={`transition-all overflow-hidden ${
											expanded ? "max-h-full" : ""
										}`}
									></div>
								) : (
									<div
										ref={contentRef}
										className={`transition-all overflow-hidden ${
											expanded ? "max-h-full" : ""
										}`}
									>
										<div className="flex flex-col gap-4 h-full">
											<p>
												<strong>Bước 1:</strong>
												&nbsp;Truy cập website và lựa
												chọn sản phẩm&nbsp;cần mua
											</p>
											<p>
												<strong>Bước 2:</strong>
												&nbsp;Click và sản phẩm muốn
												mua, màn hình hiển thị ra pop up
												với các lựa chọn sau
											</p>
											<p>
												Nếu bạn muốn tiếp tục mua hàng:
												Bấm vào phần tiếp tục mua hàng
												để lựa chọn thêm sản phẩm vào
												giỏ hàng
											</p>
											<p>
												Nếu bạn muốn xem giỏ hàng để cập
												nhật sản phẩm: Bấm vào xem giỏ
												hàng
											</p>
											<p>
												Nếu bạn muốn đặt hàng và thanh
												toán cho sản phẩm này vui lòng
												bấm vào: Đặt hàng và thanh toán
											</p>
											<p>
												<strong>Bước 3:</strong>
												&nbsp;Lựa chọn thông tin tài
												khoản thanh toán
											</p>
											<p>
												Nếu bạn đã có tài khoản vui lòng
												nhập thông tin tên đăng nhập là
												email và mật khẩu vào mục đã có
												tài khoản trên hệ thống
											</p>
											<p>
												Nếu bạn chưa có tài khoản và
												muốn đăng ký tài khoản vui lòng
												điền các thông tin cá nhân để
												tiếp tục đăng ký tài khoản. Khi
												có tài khoản bạn sẽ dễ dàng theo
												dõi được đơn hàng của mình
											</p>
											<p>
												Nếu bạn muốn mua hàng mà không
												cần tài khoản vui lòng nhấp
												chuột vào mục đặt hàng không cần
												tài khoản
											</p>
											<p>
												<strong>Bước 4:</strong>
												&nbsp;Điền các thông tin của bạn
												để nhận đơn hàng, lựa chọn hình
												thức thanh toán và vận chuyển
												cho đơn hàng của mình
											</p>
											<p>
												<strong>Bước 5:</strong>
												&nbsp;Xem lại thông tin đặt
												hàng, điền chú thích và gửi đơn
												hàng
											</p>
											<p>
												Sau khi nhận được đơn hàng bạn
												gửi chúng tôi sẽ liên hệ bằng
												cách gọi điện lại để xác nhận
												lại đơn hàng và địa chỉ của bạn.
											</p>
											<p>Trân trọng cảm ơn.</p>
										</div>
									</div>
								)}

								{isShowDesc && !expanded && isOverflowing && (
									<div className="flex items-center justify-center bg-white/95 w-[98%] py-8 absolute bottom-0">
										<Button
											border="border border-darkBlue"
											background="bg-white"
											color="text-darkBlue"
											fontSize="text-[16px]"
											padding="py-[5px] px-[15px]"
											hoverEffect="hover:bg-primary hover:border-primary hover:text-white"
											onClick={() => setExpanded(true)}
										>
											Xem thêm
										</Button>
									</div>
								)}
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
