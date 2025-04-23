import { useEffect, useState } from "react";
import Button from "./Button";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!visible) return null;
	return (
		<Button
			onClick={scrollToTop}
			buttonHeight="w-10"
			buttonWidth="h-10"
			background="bg-darkBlue"
			hoverEffect="hover:bg-primary"
		>
			<FaChevronUp />
		</Button>
	);
}

export default ScrollToTop;
