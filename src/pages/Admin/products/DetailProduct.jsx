import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import productService from "../../../services/ProductService";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

function DetailProduct({ model }) {
	const [product, setProduct] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await productService.getById(id);
				setProduct(response.data.data);
			} catch (error) {
				console.error("Error fetching product details: ", error);
			}
		};

		fetchProduct();
	}, [id]);

	const {
		title,
		description,
		inventory,
		price,
		categoryName,
		brandName,
		images,
	} = product || {};
	const imageSlides = images?.length > 0 &&  images.map((img) => ({ src: img.image }));
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
				<div className="col-span-9 flex gap-2 flex-wrap">
					{images &&
						images.length > 0 &&
						images.map((image, index) => (
							<img
								src={image.image}
								key={index}
								alt={`product image ${index}`}
								className="w-28 h-28 object-cover rounded border shadow cursor-pointer"
								onClick={() => {
									setCurrentIndex(index);
									setIsOpen(true);
								}}
							/>
						))}
				</div>

				<div className="col-span-3">Mô tả:</div>
				<div
					className="col-span-9"
					dangerouslySetInnerHTML={{ __html: description }}
				></div>

				{/* Lightbox */}
				{isOpen && (
					<Lightbox
						image={imageSlides[currentIndex]?.src}
						title={`Hình ảnh ${currentIndex + 1}`}
						onClose={() => setIsOpen(false)}
					/>
				)}
			</div>
		</>
	);
}

export default DetailProduct;
