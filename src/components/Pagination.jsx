// components/Admin/Pagination.jsx
import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({ meta, onPageChange }) {
	console.log('This is pagination', meta);
	if (!meta || meta.last_page <= 1) return null;

	return (
		<div className="flex justify-center items-center gap-2 mt-8 flex-wrap text-sm select-none">
			{meta?.links?.map((link, index) => {
				const label = link.label.replace(/&laquo;|&raquo;/g, "").trim();
				const isPrev = link.label.includes("&laquo;");
				const isNext = link.label.includes("&raquo;");
				const isDisabled = !link.url;

				return (
					<button
						key={index}
						className={`
							h-[36px] min-w-[36px] px-3 
							border border-gray-300 rounded-md
							transition-all duration-150 ease-in-out
							flex items-center justify-center
							${
								link.active
									? "bg-blue-600 text-white font-semibold"
									: "bg-white text-gray-800"
							}
							${
								!isDisabled
									? "hover:bg-blue-100 hover:text-blue-700"
									: "opacity-40 cursor-not-allowed"
							}
						`}
						onClick={() => {
							if (link.url) {
								const page = new URL(link.url).searchParams.get(
									"page"
								);
								onPageChange(page);
								window.scrollTo({ top: 0, behavior: "smooth" }); 
							}
						}}
						disabled={isDisabled}
					>
						{isPrev && <IoIosArrowBack className="text-lg" />}
						{isNext && <IoIosArrowForward className="text-lg" />}
						{!isPrev && !isNext && label}
					</button>
				);
			})}
		</div>
	);
}

Pagination.propTypes = {
	meta: PropTypes.shape({
		links: PropTypes.array.isRequired,
		last_page: PropTypes.number.isRequired,
	}).isRequired,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
