import { Outlet } from "react-router-dom";

import { Header, Footer, BannerTopHeader } from "../../pages/Client";
import { Navigation } from '../../components/Client';

function HomePage() {
	return (
		<div>
			<BannerTopHeader />
			<Header />
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomePage;
