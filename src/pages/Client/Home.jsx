import { Container, DiscountContainer, Slider, SpecialCategory } from "../../components/Client";

function HomePage() {
    return (
		<Container>
			<Slider />
            <SpecialCategory />
			<DiscountContainer />
		</Container>
	);
}

export default HomePage;