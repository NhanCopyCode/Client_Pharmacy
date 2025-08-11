import { useEffect, useState } from "react";
import {
	BannerPromotion,
	Container,
	DiscountContainer,
	InformationContainer,
	IntroduceComponent,
	ListProduct,
	NewProductContainer,
	OverlayGray,
	PolicyContainer,
	ProductTrending,
	PromotionContainer,
	Slider,
	SpecialCategory,
	SpecialProductContainer,
	VideoContainer,
} from "../../components/Client";
import Footer from "../../pages/Client/Footer";
import homeService from "../../services/HomeService";

function HomePage() {
	const [sliders, setSliders] = useState([]);
	const [categories, setCategories] = useState([]);
	const [vouchers, setVouchers] = useState([]);
	const [promotions, setPromotions] = useState([]);
	const [newProducts, setNewProducts] = useState([]);
	const [bannerOutstanding, setBannerOutstanding] = useState([]);
	const [productsTrending, setProductsTrend] = useState([]);
	const [policies, setPolicies] = useState([]);
	const [videos, setVideos] = useState([]);
	const [postsNutrition, setPostsNutrition] = useState([]);
	const [postsBeautifyYoung, setPostsBeautifulYoung] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await homeService.getApiHomePage();
				setSliders(response.data.banners_homepage);
				setCategories(response.data.categories_outstanding);
				setVouchers(response.data.vouchers);
				setPromotions(response.data.promotions_show_on_frontend);
				setNewProducts(response.data.new_products);
				setBannerOutstanding(response.data.banners_outstanding);
				setProductsTrend(response.data.products_trending);
				setPolicies(response.data.policies);
				setVideos(response.data.videos);
				setPostsNutrition(response.data.posts_nutrition);
				setPostsBeautifulYoung(response.data.posts_beautiful_young);
			} catch (error) {
				console.log("error: ", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container>
			<Slider sliders={sliders} />
			<SpecialCategory categories={categories} />
			<DiscountContainer vouchersProps={vouchers} />
			<PromotionContainer promotionsProps={promotions} />
			<NewProductContainer newProducts={newProducts} />
			<BannerPromotion />
			<SpecialProductContainer
				bannerOutstanding={bannerOutstanding}
				productsTrending={productsTrending}
			/>
			<IntroduceComponent />
			<ListProduct />
			<InformationContainer postsNutritionProps={postsNutrition} postsBeautifyYoungProps={postsBeautifyYoung} />
			<ProductTrending />
			<VideoContainer videosProps={videos}/>
			<PolicyContainer policiesProps={policies}/>
		</Container>
	);
}

export default HomePage;
