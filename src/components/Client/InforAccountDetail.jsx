function InforAccountDetail({ user }) {
	console.log("user in infoAccountDetail: ", user);

	// Build the full name only if surname exists
	const fullName = user?.surname
		? `${user.surname} ${user?.name || ""}`
		: user?.name || "";

	return (
		<div className="flex flex-col">
			<h1 className="text-[19px] uppercase">Thông tin tài khoản</h1>
			<div className="mt-4 flex flex-col gap-4">
				<div className="flex items-center gap-1 text-sm">
					<span className="font-bold">Họ tên:</span>
					<span>{fullName}</span>
				</div>
				<div className="flex items-center gap-1 text-sm">
					<span className="font-bold">Email:</span>
					<span>{user?.email || ""}</span>
				</div>
			</div>
		</div>
	);
}

export default InforAccountDetail;
