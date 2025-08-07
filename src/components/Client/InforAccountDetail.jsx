function InforAccountDetail({ user }) {
	return (
		<div className="flex flex-col">
			<h1 className="text-[19px] uppercase">Thông tin tài khoản</h1>
			<div className="mt-4 flex flex-col gap-4">
				<div className="flex items-center gap-1 text-sm">
					<span className="font-bold">Họ tên:</span>
					<span>{user?.surname || "" + user?.name}</span>
				</div>
				<div className="flex items-center gap-1 text-sm">
					<span className="font-bold">Email:</span>
					<span>{user?.email}</span>
				</div>
			</div>
		</div>
	);
}

export default InforAccountDetail;
