function PolicyItem({ title, description, image}) {
    return (
		<div className="flex items-center gap-3">
			<img
				src={image}
				className="w-10 h-10 object-cover"
			/>
			<div className="flex flex-col gap-1">
				<h3 className="text-[16px] text-darkBlue font-bold">
					{title}
				</h3>
				<p className="text-sm text-black ">{ description }</p>
			</div>
		</div>
	);
}

export default PolicyItem;