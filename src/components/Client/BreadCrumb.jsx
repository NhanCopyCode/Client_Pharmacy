import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import Container from "./Container";

function BreadCrumb() {
	return (
		<div className="bg-[#d9e6ff]">
			<Container>
				<div className="flex items-center gap-2 text-black text-[16px] py-[15px] mb-5">
					<Link to={"/"} className="font-light hover:text-primary">
						Trang chủ
					</Link>
					<FaAngleRight />
					<Link to={"/"} className="text-darkBlue">
						Trang chủ
					</Link>
				</div>
			</Container>
		</div>
	);
}

export default BreadCrumb;
