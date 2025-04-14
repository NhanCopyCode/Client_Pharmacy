import bannerTop from "../../assets/images/banner_top.jpg";

function BannerTopHeader() {
	return (
		<div>
			<img src={bannerTop} className="w-full h-full object-cover" />
		</div>
	);
}

export default BannerTopHeader;
