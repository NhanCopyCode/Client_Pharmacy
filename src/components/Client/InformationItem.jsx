function InformationItem({ post }) {
	if (!post) return null; // defensive check

	const { image, title, description } = post;

	return (
		<div className="flex flex-1 items-start gap-4">
			<img
				src={image || "https://via.placeholder.com/150"}
				alt={title}
				className="max-w-[35%] w-full rounded-md object-cover"
			/>
			<div className="flex flex-col items-start h-full">
				<h3
					className="text-sm text-black font-bold line-clamp-2"
					title={title}
				>
					{title}
				</h3>

				<p
					className="text-sm text-black font-medium xl:line-clamp-2 line-clamp-4 mt-1"
					title={description}
				>
					{description}
				</p>
			</div>
		</div>
	);
}

export default InformationItem;
