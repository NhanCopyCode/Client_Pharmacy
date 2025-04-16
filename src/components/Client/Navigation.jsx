import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Navigation() {
	return (
		<div className="bg-[#d9e6ff]">
			<div className="xxl:w-7xl xl:w-6xl md:w-4xl sm:w-3xl w-xl max-w-[100%] m-auto ">
				<div className="flex items-center gap-2 text-black text-[16px] py-[15px] mb-5">
					<Link to={"/"} className="font-light hover:text-primary">
						Trang chủ
					</Link>
					<FaAngleRight />
					<Link to={"/"} className="text-darkBlue">
						Trang chủ
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
