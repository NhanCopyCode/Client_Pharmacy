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

function HomePage() {
	return (
		<Container>
			<Slider />
			<SpecialCategory />
			<DiscountContainer />
			<PromotionContainer />
			<NewProductContainer />
			<BannerPromotion />
			<SpecialProductContainer />
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
