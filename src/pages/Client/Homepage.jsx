import { Outlet } from "react-router-dom";

import { Header, Footer, BannerTopHeader } from "../../pages/Client";
import { BreadCrumb, ContactButton, ScrollToTop } from '../../components/Client';

function HomePage() {
	return (
		<div >
			<BannerTopHeader />
			<Header />
			<BreadCrumb />
			<Outlet />
			<Footer />
			<div className="fixed bottom-4 right-4 flex flex-col gap-3 items-center">
				<ScrollToTop />
				<ContactButton />
			</div>
		</div>
	);
}

export default HomePage;
