import { BannerPromotion, Container, DiscountContainer, InformationContainer, IntroduceComponent, ListProduct, NewProductContainer, OverlayGray, ProductTrending, PromotionContainer, Slider, SpecialCategory, SpecialProductContainer } from "../../components/Client";

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
		</Container>
	);
}

export default HomePage;