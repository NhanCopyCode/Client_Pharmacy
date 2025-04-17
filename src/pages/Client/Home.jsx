import { Container, DiscountContainer, OverlayGray, PromotionContainer, Slider, SpecialCategory } from "../../components/Client";

function HomePage() {
    return (
		<Container>
			<Slider />
            <SpecialCategory />
			<DiscountContainer />
			<PromotionContainer />
		</Container>
	);
}

export default HomePage;