function SpecialCategoryItem({ category }) {
	const { name, image } = category;

	return (
		<div className="flex flex-col items-center group hover:cursor-pointer transition-all duration-300">
			<img
				className="w-[100px] h-[100px] object-cover transition-transform duration-300 group-hover:scale-90 rounded-md"
				src={image || "https://via.placeholder.com/100"} // fallback image
				alt={name}
			/>
			<span className="text-sm font-bold text-black mt-2 group-hover:text-primary">
				{name}
			</span>
		</div>
	);
}

export default SpecialCategoryItem;
