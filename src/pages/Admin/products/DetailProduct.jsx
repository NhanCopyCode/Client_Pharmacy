import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import productService from "../../../services/ProductService";
import productImageService from "../../../services/ProductImageService";

function DetailProduct({ model }) {
	const [product, setProduct] = useState(null);
	const [productImages, setProductImages] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await productService.getById(id);
				setProduct(response.data.data);

				const responseImages = await productImageService.getImagesByProductId(id);
				setProductImages(responseImages.data);
			} catch (error) {
				console.error("Error fetching product details: ", error);
			}
		};

		fetchProduct();
	}, [id]);

	const { title, description, inventory, price, categoryName, brandName } =
		product || {};

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title={"Chi tiết"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>

			<div className="grid grid-cols-12 gap-3 p-3">
				<div className="col-span-3">ID:</div>
				<div className="col-span-9">{id}</div>

				<div className="col-span-3">Tên sản phẩm:</div>
				<div className="col-span-9">{title}</div>

				<div className="col-span-3">Tên hãng:</div>
				<div className="col-span-9">{brandName}</div>

				<div className="col-span-3">Tên danh mục:</div>
				<div className="col-span-9">{categoryName}</div>

				<div className="col-span-3">Số hàng tồn:</div>
				<div className="col-span-9">{inventory}</div>

				<div className="col-span-3">Giá:</div>
				<div className="col-span-9">{price}</div>

				<div className="col-span-3">Hình ảnh:</div>
				<div className="col-span-9"></div>

				<div className="col-span-3">Mô tả:</div>
				<div
					className="col-span-9"
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
			</div>
		</>
	);
}

export default DetailProduct;
