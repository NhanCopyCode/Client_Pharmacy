import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop({ containerId = "admin-scroll-container" }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const container = document.getElementById(containerId);
		if (!container) return;

		const toggleVisibility = () => {
			setIsVisible(container.scrollTop > 200);
		};

		container.addEventListener("scroll", toggleVisibility);
		return () => container.removeEventListener("scroll", toggleVisibility);
	}, [containerId]);

	const scrollToTop = () => {
		const container = document.getElementById(containerId);
		if (container) {
			container.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	if (!isVisible) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-20 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
			aria-label="Scroll to top"
		>
			<FaArrowUp />
		</button>
	);
}

export default ScrollToTop;
