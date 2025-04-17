import { Container, DiscountContainer, NewProductContainer, OverlayGray, PromotionContainer, Slider, SpecialCategory } from "../../components/Client";

function HomePage() {
    return (
		<Container>
			<Slider />
            <SpecialCategory />
			<DiscountContainer />
			<PromotionContainer />
			<NewProductContainer />
		</Container>
	);
}

export default HomePage;