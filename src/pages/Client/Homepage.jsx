import { Outlet } from "react-router-dom";

import { Header, Footer, BannerTopHeader } from "../../pages/Client";
import { BreadCrumb, ContactButton, ScrollToTop } from '../../components/Client';
import homeService from "../../services/HomeService";
import { useEffect, useState } from "react";

function HomePage() {
	
	const [bannersTop, setBannersTop] = useState([]);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		const fetchData = async() => {
			try {
				const res = await homeService.getHeaderFooterApi();
				setBannersTop(res.data.banners_top);
				setCategories(res.data.categories);
			} catch (error) {
				console.log("error: ", error);
			}
		}

		fetchData();
	}, [])

	return (
		<div >
			<BannerTopHeader bannersTopProps={bannersTop} />
			<Header categoriesProps={categories}/>
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
