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
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await homeService.getApiHomePage();
				console.log("response api homepage:", response);
				setSliders(response.data.banners_homepage);
				setCategories(response.data.categories_outstanding);
				setVouchers(response.data.vouchers);
				setPromotions(response.data.promotions_show_on_frontend);
				setNewProducts(response.data.new_products);
				setBannerOutstanding(response.data.banner_outstanding);
				setProductsTrend(response.data.products_trending);
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
			<InformationContainer />
			<ProductTrending />
			<VideoContainer />
			<PolicyContainer />
		</Container>
	);
}

export default HomePage;
