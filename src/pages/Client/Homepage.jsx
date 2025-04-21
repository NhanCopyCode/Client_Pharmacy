import { Outlet } from "react-router-dom";

import { Header, Footer, BannerTopHeader } from "../../pages/Client";
import { BreadCrumb } from '../../components/Client';

function HomePage() {
	return (
		<div>
			<BannerTopHeader />
			<Header />
			<BreadCrumb />
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomePage;
