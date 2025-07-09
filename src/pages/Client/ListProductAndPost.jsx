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
import { TailSpin } from "react-loader-spinner";
import { Pagination } from "../../components";

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
	const [productMeta, setProductMeta] = useState(null);
	const [postMeta, setPostMeta] = useState(null);
	const [productPage, setProductPage] = useState(1);
	const [postPage, setPostPage] = useState(1);

	useEffect(() => {
		const query = searchParams.get("q") || "";
		setSearchQuery(query);
		setProductPage(1);
		setPostPage(1); 
	}, [searchParams]);
	

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const [productResponse, postResponse] = await Promise.all([
					productService.searchMultiple({
						q: searchQuery,
						page: productPage,
					}),
					postService.searchMultiple({
						q: searchQuery,
						page: postPage,
					}),
				]);

				setListProduct(productResponse.data.listProducts);
				setListPost(postResponse.data.listPosts);

				setProductsCount(productResponse.data.productsCount);
				setPostsCount(postResponse.data.postsCount);

				setProductMeta(productResponse.data.meta);
				setPostMeta(postResponse.data.meta);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchQuery, productPage, postPage]);

	// Pagination handler cho sản phẩm
	const handleProductPageChange = (page) => {
		setProductPage(page);
	};

	// Pagination handler cho bài viết
	const handlePostPageChange = (page) => {
		setPostPage(page);
	};

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
				<div className="flex justify-center mt-10">
					<TailSpin height={50} width={50} color="#2563eb" />
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
								<>
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
										{listProduct.map((product) => (
											<ProductCard
												key={product.id}
												product={product}
											/>
										))}
									</div>
									<Pagination
										meta={productMeta}
										onPageChange={handleProductPageChange}
									/>
								</>
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
								<>
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
										{listPost.map((post) => (
											<PostCard
												key={post.id}
												post={post}
											/>
										))}
									</div>
									<Pagination
										meta={postMeta}
										onPageChange={handlePostPageChange}
									/>
								</>
							)}
						</>
					)}
				</>
			)}
		</Container>
	);
}

export default ListProductAndPost;
