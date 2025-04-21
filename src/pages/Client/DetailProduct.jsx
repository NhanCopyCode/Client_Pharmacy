import { Container, ProductDetailImage } from "../../components/Client";
const images = [
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h.png?v=1689759984450",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-5.png?v=1689759985303",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-4.png?v=1689759986333",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-4.png?v=1689759986333",
	"https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00030869-sasagold-saffron-nhuy-h-4.png?v=1689759986333",
];
function DetailProduct() {
    return (
		<Container>
			<div className="grid grid-cols-12 gap-8">
				<div className="col-span-4">
                    <ProductDetailImage images={images}/>
                </div>
				<div className="col-span-5"></div>
				<div className="col-span-3"></div>
			</div>
		</Container>
	);
}

export default DetailProduct;