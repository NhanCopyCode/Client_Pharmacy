import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import PolicyItem from "./PolicyItem";
import policyService from "../../services/PolicyService";
import { useEffect, useState } from "react";

function PolicyContainer() {
	const [policies, setPolicies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await policyService.getAll();
				setPolicies(res.data.data);
			} catch (error) {
				console.log("error: ", error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="mt-8">
			<div className="mt-4 relative">
				<SwiperPrevButton prevButton={"policy-prev"} />
				<SwiperNextButton nextButton={"policy-next"} />
				<Swiper
					slidesPerView={1}
					spaceBetween={15}
					modules={[Navigation]}
					pagination={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					navigation={{
						nextEl: ".policy-next",
						prevEl: ".policy-prev",
					}}
				>
					{policies.length > 0 &&
						policies.map((policy) => {
							return (
								<SwiperSlide key={policy.id}>
									<PolicyItem
										title={policy.title}
										description={policy.content}
										image={policy.image}
									/>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>
		</div>
	);
}

export default PolicyContainer;
