import Button from "./Button";
import InformationItem from "./InformationItem";

function InformationContainer({
	postsNutritionProps = [],
	postsBeautifyYoungProps = [],
}) {
	console.log('post young: ', postsBeautifyYoungProps);
	console.log('post nutrition: ', postsNutritionProps);
	return (
		<div className="mt-8">
			<div className="grid grid-cols-12 gap-4">
				{/* Góc dinh dưỡng */}
				<div className="xl:col-span-8 col-span-12">
					<h2 className="text-[30px] text-black font-bold">
						Góc dinh dưỡng
					</h2>
					<div className="grid grid-cols-12 gap-4 mt-2">
						{/* Featured post */}
						{postsNutritionProps.length > 0 && (
							<div className="xl:col-span-6 col-span-12">
								<img
									src={
										postsNutritionProps[0].image ||
										"https://via.placeholder.com/600x400"
									}
									className="w-full object-cover rounded-md"
									alt={postsNutritionProps[0].title}
								/>
								<div className="flex flex-col items-start gap-2">
									<h3
										className="text-[20px] text-black font-bold line-clamp-1 mt-2"
										title={postsNutritionProps[0].title}
									>
										{postsNutritionProps[0].title}
									</h3>
									<span className="text-sm text-primary font-medium">
										Ngày đăng:{" "}
										{new Date(
											postsNutritionProps[0].created_at
										).toLocaleDateString("vi-VN")}
									</span>
									<p
										className="text-sm text-black font-medium line-clamp-4"
										title={
											postsNutritionProps[0].description
										}
									>
										{postsNutritionProps[0].description}
									</p>
								</div>
							</div>
						)}

						{/* Remaining posts */}
						<div className="xl:col-span-6 col-span-12 mt-4 xl:mt-0 flex flex-col gap-4">
							{postsNutritionProps.slice(1, 5).map((post) => (
								<InformationItem key={post.id} post={post} />
							))}
						</div>
					</div>

					<div className="flex items-center justify-center mt-4">
						<Button
							fontSize="text-[16px]"
							padding="py-[5px] px-[15px]"
							background="bg-white"
							color="text-black"
							border="border-2 border-primary"
							hoverEffect="hover:bg-primary hover:text-white"
							fontWeight="font-medium"
						>
							Xem tất cả
						</Button>
					</div>
				</div>

				{/* Góc trẻ đẹp */}
				<div className="xl:col-span-4 col-span-12">
					<h2 className="text-[30px] text-black font-bold">
						Góc trẻ đẹp
					</h2>
					<div className="flex flex-col gap-4 mt-2">
						{postsBeautifyYoungProps.slice(0, 4).map((post) => (
							<InformationItem key={post.id} post={post} />
						))}
					</div>

					<div className="flex items-center justify-center mt-4">
						<Button
							fontSize="text-[16px]"
							padding="py-[5px] px-[15px]"
							background="bg-white"
							color="text-black"
							border="border-2 border-primary"
							hoverEffect="hover:bg-primary hover:text-white"
							fontWeight="font-medium"
						>
							Xem tất cả
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InformationContainer;
