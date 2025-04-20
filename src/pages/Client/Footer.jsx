import { Button, Container, FooterItem } from "../../components/Client";
import Logo from "../../assets/images/logo.png";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
	return (
		<div>
			<div className="min-h-[60px] bg-darkBlue mt-14">
				<Container>
					<div className="flex xl:flex-row flex-col gap-4 xl:gap-0 items-center justify-between py-[10px]">
						<div className="rounded-xl overflow-hidden  flex items-center h-full">
							<input
								className="h-[100%] w-[340px] p-[10px] text-sm bg-white text-gray-700 border-0 outline-0"
								placeholder="Nhập email nhận tin khuyến mãi"
							/>
							<button className="bg-primary px-5 text-white text-sm uppercase inline-block h-10">
								Đăng ký
							</button>
						</div>

						<div className="flex items-center gap-3">
							<h3 className="text-[16px] text-white font-bold">
								Kết nối với chúng tôi:
							</h3>
							<div className="flex items-center gap-2">
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/zalo.png?1736388760084"
									className="w-8 h-8 object-cover"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/zalo.png?1736388760084"
									className="w-8 h-8 object-cover"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/zalo.png?1736388760084"
									className="w-8 h-8 object-cover"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/zalo.png?1736388760084"
									className="w-8 h-8 object-cover"
								/>
							</div>
						</div>
					</div>
				</Container>
			</div>

			<Container>
				<div className="bg-white grid grid-cols-12 py-[50px]">
					<div className="col-span-3">
						<img src={Logo} className="w-[220px] object-cover" />
						<p className="text-sm text-black font-medium mt-4">
							Cửa hàng thực phẩm chức năng Dola Pharmacy là địa
							chỉ tin cậy để bạn tìm kiếm những sản phẩm chất
							lượng nhất.
						</p>

						<ul className="flex flex-col gap-1 mt-4">
							<li className="flex items-center gap-3">
								<IoLocationOutline
									color="darkBlue"
									className="w-[18px] h-[18px]"
								/>
								<span className="text-sm text-black">
									70 Lữ Gia, Phường 15, Quận 11, TP.HCM
								</span>
							</li>
							<li className="flex items-center gap-3">
								<IoLocationOutline
									color="darkBlue"
									className="w-[18px] h-[18px]"
								/>
								<span className="text-sm text-black">
									70 Lữ Gia, Phường 15, Quận 11, TP.HCM
								</span>
							</li>
							<li className="flex items-center gap-3">
								<IoLocationOutline
									color="darkBlue"
									className="w-[18px] h-[18px]"
								/>
								<span className="text-sm text-black">
									70 Lữ Gia, Phường 15, Quận 11, TP.HCM
								</span>
							</li>
						</ul>
					</div>
					<div className="col-span-2">
						<FooterItem />
					</div>

					<div className="col-span-2">
						<FooterItem />
					</div>

					<div className="col-span-2">
						<FooterItem />
					</div>
					<div className="col-span-3">
						<h4 className="text-[16px] text-darkBlue uppercase font-bold">
							Chính sách
						</h4>
						<div className="mt-4">
							<h4 className="text-black text-sm uppercase font-bold">
								MUA ONLINE (08:30 - 20:30)
							</h4>
							<span className="text-darkBlue text-[16px] font-bold">
								1900 1974
							</span>
							<p
								className="text-sm italic font-light
"
							>
								Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
							</p>

							<h4 className="text-black text-sm uppercase font-bold">
								MUA ONLINE (08:30 - 20:30)
							</h4>
							<span className="text-darkBlue text-[16px] font-bold">
								1900 1974
							</span>
							<p
								className="text-sm italic font-light
"
							>
								Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
							</p>
							<h4 className="text-[16px] text-darkBlue uppercase font-bold">
								liên kết sàn
							</h4>
							<div className="mt-2 flex items-center gap-2">
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/shopee.png?1736388760084"
									className="w-8 h-8 object-cover cursor-pointer"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/shopee.png?1736388760084"
									className="w-8 h-8 object-cover cursor-pointer"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/shopee.png?1736388760084"
									className="w-8 h-8 object-cover cursor-pointer"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/shopee.png?1736388760084"
									className="w-8 h-8 object-cover cursor-pointer"
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<div className="h-[45px] bg-darkBlue text-center py-[10px]">
				<p className="text-[16px] text-white">
					Bản quyền thuộc về{" "}
					<span className="font-bold">ThanhNhangg</span>. Cung cấp bởi
					tôi
				</p>
			</div>
		</div>
	);
}

export default Footer;
