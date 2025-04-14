import { Outlet } from "react-router-dom";

import { Header, Footer, BannerTopHeader } from "../../pages/Client";

function HomePage() {
	return (
		<div>
            <BannerTopHeader />
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomePage;
