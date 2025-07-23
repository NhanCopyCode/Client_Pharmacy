import { useEffect, useState } from "react";

export default function CountdownTimer({ endDate }) {
	const calculateTimeLeft = () => {
		const difference = new Date(endDate) - new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	if (!Object.keys(timeLeft).length) {
		return <span className="text-sm text-white">Đã kết thúc</span>;
	}

	return (
		<div className="text-sm text-white font-medium animate-pulse">
			Kết thúc sau:{" "}
			<span className="text-yellow-300">
				{timeLeft.days} Ngày {timeLeft.hours} Giờ {timeLeft.minutes} Phút{" "}
				{timeLeft.seconds} Giây
			</span>
		</div>
	);
}
