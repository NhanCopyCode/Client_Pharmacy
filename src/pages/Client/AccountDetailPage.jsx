import { useSelector } from "react-redux";
import {
	CartInfoAccountDetail,
	AccountDetailChangePass,
	Container,
	InforAccountDetail,
	AccountDetailAddress,
} from "../../components/Client";
import { useState } from "react";

function AccountDetailPage() {
	const { user } = useSelector((state) => state.auth);
	const [activeTab, setActiveTab] = useState("account"); // default tab

	// Build full name only if parts exist
	const fullName = [user?.surname, user?.name].filter(Boolean).join(" ");

	const renderContent = () => {
		switch (activeTab) {
			case "account":
				return <InforAccountDetail user={user} />;
			case "orders":
				return <CartInfoAccountDetail />;
			case "password":
				return <AccountDetailChangePass />;
			case "address":
				return <AccountDetailAddress />;
			default:
				return null;
		}
	};

	return (
		<Container>
			<div className="py-4">
				<div className="grid grid-cols-12 gap-4">
					<div className="md:col-span-4 col-span-12">
						{/* Sidebar */}
						<div className="flex flex-col gap-4">
							<h1 className="text-[19px] uppercase">
								Trang tài khoản
							</h1>
							<div className="text-sm font-bold">
								Xin chào,{" "}
								<span className="text-redColor">
									{fullName}
								</span>
							</div>
							<div className="mt-2 flex flex-col gap-4">
								<span
									onClick={() => setActiveTab("account")}
									className={`text-sm font-light hover:cursor-pointer hover:text-[#003cbf] ${
										activeTab === "account"
											? "text-[#003cbf]"
											: ""
									}`}
								>
									Thông tin tài khoản
								</span>
								<span
									onClick={() => setActiveTab("orders")}
									className={`text-sm font-light hover:cursor-pointer hover:text-[#003cbf] ${
										activeTab === "orders"
											? "text-[#003cbf]"
											: ""
									}`}
								>
									Đơn hàng của bạn
								</span>
								<span
									onClick={() => setActiveTab("password")}
									className={`text-sm font-light hover:cursor-pointer hover:text-[#003cbf] ${
										activeTab === "password"
											? "text-[#003cbf]"
											: ""
									}`}
								>
									Đổi mật khẩu
								</span>
								<span
									onClick={() => setActiveTab("address")}
									className={`text-sm font-light hover:cursor-pointer hover:text-[#003cbf] ${
										activeTab === "address"
											? "text-[#003cbf]"
											: ""
									}`}
								>
									Sổ địa chỉ
								</span>
							</div>
						</div>
					</div>
					<div className="md:col-span-8 col-span-12">
						{renderContent()}
					</div>
				</div>
			</div>
		</Container>
	);
}

export default AccountDetailPage;
