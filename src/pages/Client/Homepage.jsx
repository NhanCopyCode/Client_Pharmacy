import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer, BannerTopHeader } from "../../pages/Client";
import {
	BreadCrumb,
	ContactButton,
	ScrollToTop,
} from "../../components/Client";
import homeService from "../../services/HomeService";
import { useEffect, useState } from "react";
import { fetchHeaderData } from "../../store/headerDataAction";
import { TailSpin } from "react-loader-spinner";

function HomePage() {
	const dispatch = useDispatch();
	// const [bannersTop, setBannersTop] = useState([]);
	// const [categories, setCategories] = useState([]);
	// const [postCategory, setPostCategory] = useState([]);
	// const [postsHeader, setPostsHeader] = useState([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await homeService.getHeaderFooterApi();
	// 			console.log("res home page:", res);
	// 			setBannersTop(res.data.banners_top);
	// 			setCategories(res.data.categories);
	// 			setPostCategory(res.data.post_category);
	// 			setPostsHeader(res.data.posts_header);
	// 		} catch (error) {
	// 			console.log("error: ", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	const {
		bannersTop,
		categories,
		postCategory,
		postsHeader,
		loading,
	} = useSelector((state) => state.headerData);
	useEffect(() => {
		dispatch(fetchHeaderData());
	}, [dispatch]);
		if (loading)
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<TailSpin
					height={80}
					width={80}
					color="#4fa94d"
					ariaLabel="tail-spin-loading"
					radius="1"
					visible={true}
				/>
			</div>
		);
	return (
		<div>
			<BannerTopHeader bannersTopProps={bannersTop} />
			<Header
				categoriesProps={categories}
				postCategoryProps={postCategory}
				postsHeaderProps={postsHeader}
			/>
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
