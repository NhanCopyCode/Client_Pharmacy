import { useEffect, useState } from "react";
import { CartInfo, Container, DiscountContainer } from "../../components/Client";
import homeService from "../../services/HomeService";


function CartDetail() {
	const [vouchers, setVouchers] = useState([]);
	const [orderItems, setOrderItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await homeService.cartInfoApi();
				setVouchers(response.data.vouchers);
			} catch (error) {
				console.log("error: ", error);
			}
		}

		fetchData();
	}, [])
	return (
		<Container>
			<DiscountContainer vouchersProps={vouchers}/>
            <CartInfo />
		</Container>
	);
}

export default CartDetail;
