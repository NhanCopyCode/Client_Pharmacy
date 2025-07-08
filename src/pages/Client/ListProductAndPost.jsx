import { useSearchParams } from "react-router-dom";
import {
	Button,
	Container,
	ProductCard,
	PostCard,
} from "../../components/Client";
import { useEffect, useState } from "react";
import productService from "../../services/ProductService";
import postService from "../../services/PostService";

function ListProductAndPost() {
	const [searchParams] = useSearchParams();
	const [listProduct, setListProduct] = useState([]);
	const [listPost, setListPost] = useState([]);
	const [isShowProduct, setShowProduct] = useState(true);
	const [isShowPost, setShowPost] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [postsCount, setPostsCount] = useState(null);
	const [productsCount, setProductsCount] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const query = searchParams.get("q") || "";
		setSearchQuery(query);
	}, [searchParams]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const productResponse = await productService.searchMultiple(
					searchQuery
				);
				const postResponse = await postService.searchMultiple(
					searchQuery
				);

				setListProduct(productResponse.data.listProducts);
				setListPost(postResponse.data.listPosts);
				setProductsCount(productResponse.data.productsCount);
				setPostsCount(postResponse.data.postsCount);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchQuery]);

	return (
		<Container>
			<div className="flex items-center gap-2">
				<Button
					onClick={() => {
						setShowProduct(true);
						setShowPost(false);
					}}
					background={`${isShowProduct ? "bg-blue" : "bg-white"}`}
					border="border border-2 border-blue"
					color={`${isShowProduct ? "text-white" : "text-blue"}`}
					hoverEffect="hover:bg-blue hover:text-white"
				>
					Sản phẩm
				</Button>

				<Button
					onClick={() => {
						setShowProduct(false);
						setShowPost(true);
					}}
					background={`${isShowPost ? "bg-blue" : "bg-white"}`}
					border="border border-2 border-blue"
					color={`${isShowPost ? "text-white" : "text-blue"}`}
					hoverEffect="hover:bg-blue hover:text-white"
				>
					Tin tức
				</Button>
			</div>
			{loading ? (
				<div className="text-center mt-10 text-blue-600 font-medium">
					Đang tìm kiếm...
				</div>
			) : (
				<>
					{isShowProduct && (
						<>
							<div className="">
								{productsCount > 0 ? (
									<span className="text-xl font-bold mt-4 inline-block">
										Có {productsCount} kết quả tìm kiếm phù
										hợp
									</span>
								) : (
									<span className="text-sm mt-4 inline-block">
										Không tìm thấy bất kỳ kết quả nào với từ
										khóa trên.
									</span>
								)}
							</div>
							{productsCount > 0 && (
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
									{listProduct.map((product) => (
										<ProductCard
											key={product.id}
											product={product}
										/>
									))}
								</div>
							)}
						</>
					)}

					{isShowPost && (
						<>
							<div className="">
								{postsCount > 0 ? (
									<span className="text-xl font-bold mt-4 inline-block">
										Có {postsCount} kết quả tìm kiếm phù hợp
										cho bài viết
									</span>
								) : (
									<span className="text-sm mt-4 inline-block">
										Không tìm thấy bất kỳ kết quả nào với từ
										khóa trên.
									</span>
								)}
							</div>
							{postsCount > 0 && (
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
									{listPost.map((post) => (
										<PostCard key={post.id} post={post} />
									))}
								</div>
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
}

export default ListProductAndPost;
