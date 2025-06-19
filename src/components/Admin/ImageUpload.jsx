import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Button } from "../Client";

function 	ImageUploadBrand() {
	const [images, setImages] = useState([]);
	const maxNumber = 5;
	const minNumber = 1;

	const onChange = (imageList) => {
		setImages(imageList);
	};

	return (
		<ImageUploading
			multiple={false}
			value={images}
			onChange={onChange}
			maxNumber={maxNumber}
			minNumber={minNumber}
			dataURLKey="data_url"
		>
			{({
				imageList,
				onImageUpload,
				onImageUpdate,
				onImageRemove,
				isDragging,
				dragProps,
			}) => (
				<div className="upload__image-wrapper">
					<button
						className="border border-dashed p-4"
						style={isDragging ? { color: "red" } : undefined}
						onClick={onImageUpload}
						{...dragProps}
					>
						Chọn ảnh
					</button>
					

					<div className="grid grid-cols-12 gap-2 mt-4">
						{imageList.map((image, index) => (
							<div key={index} className="col-span-4 p-2">
								<img
									src={image["data_url"]}
									alt=""
									className="w-full h-[100px] object-cover"
								/>
								<div className="flex items-center justify-between gap-2 mt-2">
									<Button
										background="bg-success"
										onClick={() => onImageUpdate(index)}
									>
										Update
									</Button>
									<Button
										background="bg-redColor"
										hoverEffect="hover:bg-darkRed"
										onClick={() => onImageRemove(index)}
									>
										Remove
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</ImageUploading>
	);
}

export default ImageUploadBrand;
