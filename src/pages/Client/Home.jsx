import { BannerPromotion, Container, DiscountContainer, NewProductContainer, OverlayGray, PromotionContainer, Slider, SpecialCategory } from "../../components/Client";

function HomePage() {
    return (
		<Container>
			<Slider />
            <SpecialCategory />
			<DiscountContainer />
			<PromotionContainer />
			<NewProductContainer />
			<BannerPromotion />
		</Container>
	);
}

export default HomePage;